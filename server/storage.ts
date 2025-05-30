import type { User, Booking, Contact } from './types';
import type { InsertBooking, InsertContact, InsertUser } from './types';
import { db } from './db';
import bcrypt from 'bcrypt';

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Booking operations
  createBooking(booking: InsertBooking): Promise<Booking>;
  getBooking(id: number): Promise<Booking | undefined>;
  getAllBookings(): Promise<Booking[]>;

  // Contact operations
  createContact(contact: InsertContact): Promise<Contact>;
  getContact(id: number): Promise<Contact | undefined>;
  getAllContacts(): Promise<Contact[]>;
}

export class DrizzleStorage implements IStorage {
  // User Methods
  async getUser(id: number): Promise<User | undefined> {
    return db.users.findById(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return db.users.findByUsername(username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const hashedPassword = await bcrypt.hash(insertUser.password, 10);
    return db.users.create({ ...insertUser, password: hashedPassword });
  }

  // Booking Methods
  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    return db.bookings.create(insertBooking);
  }

  async getBooking(id: number): Promise<Booking | undefined> {
    return db.bookings.getAll().find((b) => b.id === id);
  }

  async getAllBookings(): Promise<Booking[]> {
    return db.bookings.getAll();
  }

  // Contact Methods
  async createContact(insertContact: InsertContact): Promise<Contact> {
    return db.contacts.create(insertContact);
  }

  async getContact(id: number): Promise<Contact | undefined> {
    return db.contacts.getAll().find((c) => c.id === id);
  }

  async getAllContacts(): Promise<Contact[]> {
    return db.contacts.getAll();
  }
}

export const storage = new DrizzleStorage();
