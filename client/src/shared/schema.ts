// src/shared/schema.ts
import { pgTable, serial, varchar, timestamp, text } from 'drizzle-orm/pg-core';
import { InferModel } from 'drizzle-orm';
import { z } from 'zod';

/* ---------------------------------------------
   Drizzle Table Definitions
--------------------------------------------- */
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  username: varchar('username', { length: 64 }).notNull(),
  password: varchar('password', { length: 256 }).notNull(),
});

export const bookings = pgTable('bookings', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 128 }).notNull(),
  email: varchar('email', { length: 128 }).notNull(),
  phone: varchar('phone', { length: 15 }).notNull(),
  vehicleInfo: varchar('vehicle_info', { length: 256 }).notNull(),
  serviceType: varchar('service_type', { length: 64 }).notNull(),
  preferredDate: varchar('preferred_date', { length: 32 }).notNull(),
  preferredTime: varchar('preferred_time', { length: 32 }).notNull(),
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const contacts = pgTable('contacts', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 128 }).notNull(),
  email: varchar('email', { length: 128 }).notNull(),
  phone: varchar('phone', { length: 15 }).notNull(),
  message: text('message').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

export const jobApplications = pgTable('job_applications', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 128 }).notNull(),
  email: varchar('email', { length: 128 }).notNull(),
  phone: varchar('phone', { length: 15 }).notNull(),
  resume: text('resume').notNull(),
  coverLetter: text('cover_letter'),
  createdAt: timestamp('created_at').defaultNow(),
});

/* ---------------------------------------------
   TypeScript Types from Drizzle
--------------------------------------------- */
export type User = InferModel<typeof users>;
export type InsertUser = InferModel<typeof users, 'insert'>;

export type Booking = InferModel<typeof bookings>;
export type InsertBooking = InferModel<typeof bookings, 'insert'>;

export type Contact = InferModel<typeof contacts>;
export type InsertContact = InferModel<typeof contacts, 'insert'>;

export type JobApplication = InferModel<typeof jobApplications>;
export type InsertJobApplication = InferModel<typeof jobApplications, 'insert'>;

/* ---------------------------------------------
   Zod Schemas for Validation
--------------------------------------------- */
export const insertBookingSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number is required'),
  vehicleInfo: z.string().min(2, 'Vehicle information is required'),
  serviceType: z.string().min(1, 'Service type is required'),
  preferredDate: z.string().min(1, 'Preferred date is required'),
  preferredTime: z.string().min(1, 'Preferred time is required'),
  notes: z.string().optional(),
});

export const insertContactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number is required'),
  message: z.string().min(10, 'Message is required'),
});
