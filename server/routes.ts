import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertBookingSchema, 
  insertContactSchema, 
  insertJobApplicationSchema 
} from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Booking Routes
  app.post("/api/bookings", async (req: Request, res: Response) => {
    try {
      const data = insertBookingSchema.parse(req.body);
      const booking = await storage.createBooking(data);
      return res.status(201).json({ message: "Booking created successfully", booking });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ message: "Validation error", errors: error.format() });
      }
      return res.status(500).json({ message: "Server error creating booking" });
    }
  });

  app.get("/api/bookings", async (_req: Request, res: Response) => {
    try {
      const bookings = await storage.getAllBookings();
      return res.status(200).json(bookings);
    } catch (error) {
      return res.status(500).json({ message: "Server error fetching bookings" });
    }
  });

  // Contact Routes
  app.post("/api/contacts", async (req: Request, res: Response) => {
    try {
      const data = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(data);
      return res.status(201).json({ message: "Contact message sent successfully", contact });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ message: "Validation error", errors: error.format() });
      }
      return res.status(500).json({ message: "Server error processing contact" });
    }
  });

  app.get("/api/contacts", async (_req: Request, res: Response) => {
    try {
      const contacts = await storage.getAllContacts();
      return res.status(200).json(contacts);
    } catch (error) {
      return res.status(500).json({ message: "Server error fetching contacts" });
    }
  });

  // Job Application Routes
  app.post("/api/job-applications", async (req: Request, res: Response) => {
    try {
      const data = insertJobApplicationSchema.parse(req.body);
      const jobApplication = await storage.createJobApplication(data);
      return res.status(201).json({ message: "Job application submitted successfully", jobApplication });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ message: "Validation error", errors: error.format() });
      }
      return res.status(500).json({ message: "Server error processing job application" });
    }
  });

  app.get("/api/job-applications", async (_req: Request, res: Response) => {
    try {
      const jobApplications = await storage.getAllJobApplications();
      return res.status(200).json(jobApplications);
    } catch (error) {
      return res.status(500).json({ message: "Server error fetching job applications" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
