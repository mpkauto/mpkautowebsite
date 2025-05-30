// types.ts
import { z } from 'zod';

/* -----------------------------
   Booking Form Types
------------------------------ */
export const insertBookingSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  vehicleInfo: z.string(),
  serviceType: z.string(),
  preferredDate: z.string(),
  preferredTime: z.string(),
  notes: z.string().optional(),
});
export type InsertBooking = z.infer<typeof insertBookingSchema>;

export interface Booking extends InsertBooking {
  id: number;
}

/* -----------------------------
   Contact Form Types
------------------------------ */
export const insertContactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  message: z.string(),
});
export type InsertContact = z.infer<typeof insertContactSchema>;

export interface Contact extends InsertContact {
  id: number;
}

/* -----------------------------
   User Types
------------------------------ */
export interface InsertUser {
  username: string;
  password: string;
}

export interface User extends InsertUser {
  id: number;
}
