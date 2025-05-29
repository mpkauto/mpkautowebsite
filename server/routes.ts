import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { insertBookingSchema, insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import session from "express-session";
import bcrypt from "bcrypt";
import { db } from "./db";
import { supabase } from "../client/src/lib/supabaseClient";
import express from "express";

const router = express.Router();

// Middleware to check if the user is authenticated
function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: "Unauthorized" });
}

export async function registerRoutes(app: Express): Promise<Server> {
  if (!process.env.SESSION_SECRET) {
    throw new Error("SESSION_SECRET environment variable is not set.");
  }

  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        secure: process.env.NODE_ENV === "production",
      },
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const user = await db.users.findByUsername(username);
        if (!user) {
          return done(null, false, { message: "Incorrect username." });
        }
        const isMatch = await bcrypt.compare(
          password,
          (user as { password: string }).password
        );
        if (!isMatch) {
          return done(null, false, { message: "Incorrect password." });
        }
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    })
  );

  passport.serializeUser((user: any, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id: number, done) => {
    try {
      const user = await db.users.findById(id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });

  // Auth routes
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.json({ message: "Logged in successfully", user: req.user });
  });

  app.post("/api/logout", (req, res) => {
    req.logout((err) => {
      if (err) return res.status(500).json({ message: "Error logging out" });
      res.json({ message: "Logged out successfully" });
    });
  });

  // Booking routes
  app.post("/api/bookings", async (req: Request, res: Response) => {
    try {
      const bookingData = insertBookingSchema.parse(req.body);

      const { data, error } = await supabase
        .from("appointments")
        .insert({
          customer_name: bookingData.name,
          phone: bookingData.phone,
          email: bookingData.email,
          vehicle_model: bookingData.vehicleInfo,
          service_type: bookingData.serviceType,
          preferred_date: bookingData.preferredDate,
          preferred_time: bookingData.preferredTime,
          notes: bookingData.notes,
          user_id: "00000000-0000-0000-0000-000000000000",
          service_id: "00000000-0000-0000-0000-000000000000",
          status: "pending",
          created_at: new Date().toISOString(),
        })
        .select();

      if (error) throw error;

      return res.status(201).json({
        message: "Booking created successfully",
        booking: data[0],
      });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          message: "Validation error",
          errors:
            process.env.NODE_ENV === "production"
              ? undefined
              : error.format(),
        });
      }
      return res.status(500).json({
        message: "Failed to create booking",
        details: error instanceof Error ? error.message : "Unknown error",
      });
    }
  });

  app.get("/api/bookings", isAuthenticated, async (_req, res) => {
    try {
      const bookings = await db.bookings.getAll();
      return res.status(200).json(bookings);
    } catch {
      return res.status(500).json({ message: "Error fetching bookings" });
    }
  });

  // Contact routes
  app.post("/api/contacts", async (req, res) => {
    try {
      const data = insertContactSchema.parse(req.body);
      const contact = await db.contacts.create(data);
      return res
        .status(201)
        .json({ message: "Contact message sent successfully", contact });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          message: "Validation error",
          errors:
            process.env.NODE_ENV === "production"
              ? undefined
              : error.format(),
        });
      }
      return res
        .status(500)
        .json({ message: "Server error processing contact" });
    }
  });

  app.get("/api/contacts", isAuthenticated, async (_req, res) => {
    try {
      const contacts = await db.contacts.getAll();
      return res.status(200).json(contacts);
    } catch {
      return res.status(500).json({ message: "Error fetching contacts" });
    }
  });

  return createServer(app);
}

export default router;
