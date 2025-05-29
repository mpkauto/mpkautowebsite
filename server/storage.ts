import { 
  users, type User, type InsertUser,
  bookings, type Booking, type InsertBooking,
  contacts, type Contact, type InsertContact,
  jobApplications, type JobApplication, type InsertJobApplication 
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";
import bcrypt from 'bcrypt';

export interface IStorage {
  // User Operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Booking Operations
  createBooking(booking: InsertBooking): Promise<Booking>;
  getBooking(id: number): Promise<Booking | undefined>;
  getAllBookings(): Promise<Booking[]>;
  
  // Contact Operations
  createContact(contact: InsertContact): Promise<Contact>;
  getContact(id: number): Promise<Contact | undefined>;
  getAllContacts(): Promise<Contact[]>;
  
  // Job Application Operations
  createJobApplication(application: InsertJobApplication): Promise<JobApplication>;
  getJobApplication(id: number): Promise<JobApplication | undefined>;
  getAllJobApplications(): Promise<JobApplication[]>;
}

export class DrizzleStorage implements IStorage {
  // User Methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const hashedPassword = await bcrypt.hash(insertUser.password, 10);
    const [newUser] = await db.insert(users).values({
      username: insertUser.username,
      password: hashedPassword,
    }).returning();
    return newUser;
  }
  
  // Booking Methods
  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const [newBooking] = await db.insert(bookings).values(insertBooking).returning();
    return newBooking;
  }
  
  async getBooking(id: number): Promise<Booking | undefined> {
    const [booking] = await db.select().from(bookings).where(eq(bookings.id, id));
    return booking;
  }
  
  async getAllBookings(): Promise<Booking[]> {
    return db.select().from(bookings);
  }
  
  // Contact Methods
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const [newContact] = await db.insert(contacts).values(insertContact).returning();
    return newContact;
  }
  
  async getContact(id: number): Promise<Contact | undefined> {
    const [contact] = await db.select().from(contacts).where(eq(contacts.id, id));
    return contact;
  }
  
  async getAllContacts(): Promise<Contact[]> {
    return db.select().from(contacts);
  }
  
  // Job Application Methods
  async createJobApplication(insertApplication: InsertJobApplication): Promise<JobApplication> {
    const [newApplication] = await db.insert(jobApplications).values(insertApplication).returning();
    return newApplication;
  }
  
  async getJobApplication(id: number): Promise<JobApplication | undefined> {
    const [application] = await db.select().from(jobApplications).where(eq(jobApplications.id, id));
    return application;
  }
  
  async getAllJobApplications(): Promise<JobApplication[]> {
    return db.select().from(jobApplications);
  }
}

export const storage = new DrizzleStorage();
