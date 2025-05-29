import { z } from "zod";

/* ---------------------------------------------
   Booking Form Schema
--------------------------------------------- */
export const insertBookingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  vehicleInfo: z.string().min(2, "Vehicle information is required"),
  serviceType: z.string().min(1, "Service type is required"),
  preferredDate: z.string().min(1, "Preferred date is required"), // ISO format
  preferredTime: z.string().min(1, "Preferred time is required"),
  notes: z.string().optional(),
});

export type InsertBooking = z.infer<typeof insertBookingSchema>;

/* ---------------------------------------------
   Contact Form Schema
--------------------------------------------- */
export const insertContactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  message: z.string().min(10, "Message is required"),
});

export type InsertContact = z.infer<typeof insertContactSchema>;
