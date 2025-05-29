import 'dotenv/config';
import express, { type Request, Response, NextFunction, RequestHandler } from "express";
import router from './routes';
import { setupVite, serveStatic, log } from "./vite";
import rateLimit from 'express-rate-limit';
import { createServer } from 'http';
import helmet from 'helmet';
import cors from 'cors';
import csrf from 'csurf';

interface CustomRequest extends Request {
  csrfToken: () => string;
}

const app = express();

// Initialize CSRF protection
const csrfProtectionMiddleware = csrf({ cookie: true });

// Apply global security headers
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            imgSrc: ["'self'", "data:"],
            fontSrc: ["'self'"],
            connectSrc: ["'self'"],
            frameAncestors: ["'none'"],
            upgradeInsecureRequests: [],
        },
    },
    crossOriginEmbedderPolicy: false,
}));

// CORS configuration
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-CSRF-Token'],
}));

// Rate limiting for API routes
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: { message: 'Too many requests from this IP, please try again later.' },
    standardHeaders: true,
    legacyHeaders: false,
});

// Apply rate limiting to API routes
app.use('/api', apiLimiter);

// CSRF Protection
app.use('/api', csrfProtectionMiddleware);

// Add CSRF token to response headers
app.use((req: CustomRequest, res: Response, next: NextFunction) => {
    if (req.csrfToken) {
        res.setHeader('X-CSRF-Token', req.csrfToken());
    }
    next();
});

// Request logging with timing
app.use((req: Request, res: Response, next: NextFunction) => {
    const start = Date.now();
    const path = req.path;
    
    res.on("finish", () => {
        const duration = Date.now() - start;
        const status = res.statusCode;
        const method = req.method;
        const ip = req.ip;
        const userAgent = req.get('user-agent');
        
        log(`${method} ${path} ${status} ${duration}ms ${ip} ${userAgent}`);
    });

    next();
});

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Error handling middleware
app.use((err: any, req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    const isProduction = process.env.NODE_ENV === 'production';

    // Log the error server-side
    console.error(`Error: ${err.message}, Status: ${status}, Path: ${req.path}`);
    if (!isProduction && err.stack) {
        console.error(err.stack);
    }

    // In production, only send a generic error message
    if (isProduction) {
        res.status(status).json({
            message: "An unexpected error occurred. Please try again later.",
            code: status,
            timestamp: new Date().toISOString()
        });
    } else {
        // In development, send detailed error information
        res.status(status).json({
            message,
            code: status,
            timestamp: new Date().toISOString(),
            stack: err.stack
        });
    }
});

// Setup routes
app.use(router);

(async () => {
    const server = createServer(app);

    // importantly only setup vite in development and after
    // setting up all the other routes so the catch-all route
    // doesn't interfere with the other routes
    if (app.get("env") === "development") {
        await setupVite(app, server);
    } else {
        serveStatic(app);
    }

    // ALWAYS serve the app on port 5000
    // this serves both the API and the client.
    // It is the only port that is not firewalled.
    const port = 5000;
    server.listen({
        port,
        host: "127.0.0.1",
    }, () => {
        log(`serving on port ${port}`);
    });
})();
// Remove all these extra listen calls below
