import { 
  users, type User, type InsertUser,
  bookings, type Booking, type InsertBooking,
  contacts, type Contact, type InsertContact,
  jobApplications, type JobApplication, type InsertJobApplication 
} from "@shared/schema";

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

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private bookingsStore: Map<number, Booking>;
  private contactsStore: Map<number, Contact>;
  private jobApplicationsStore: Map<number, JobApplication>;
  
  private userId: number;
  private bookingId: number;
  private contactId: number;
  private jobApplicationId: number;

  constructor() {
    this.users = new Map();
    this.bookingsStore = new Map();
    this.contactsStore = new Map();
    this.jobApplicationsStore = new Map();
    
    this.userId = 1;
    this.bookingId = 1;
    this.contactId = 1;
    this.jobApplicationId = 1;
  }

  // User Methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Booking Methods
  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const id = this.bookingId++;
    const createdAt = new Date();
    const booking: Booking = { 
      ...insertBooking, 
      id, 
      createdAt 
    };
    this.bookingsStore.set(id, booking);
    return booking;
  }
  
  async getBooking(id: number): Promise<Booking | undefined> {
    return this.bookingsStore.get(id);
  }
  
  async getAllBookings(): Promise<Booking[]> {
    return Array.from(this.bookingsStore.values());
  }
  
  // Contact Methods
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.contactId++;
    const createdAt = new Date();
    const contact: Contact = { 
      ...insertContact, 
      id, 
      createdAt 
    };
    this.contactsStore.set(id, contact);
    return contact;
  }
  
  async getContact(id: number): Promise<Contact | undefined> {
    return this.contactsStore.get(id);
  }
  
  async getAllContacts(): Promise<Contact[]> {
    return Array.from(this.contactsStore.values());
  }
  
  // Job Application Methods
  async createJobApplication(insertApplication: InsertJobApplication): Promise<JobApplication> {
    const id = this.jobApplicationId++;
    const createdAt = new Date();
    const jobApplication: JobApplication = { 
      ...insertApplication, 
      id, 
      createdAt 
    };
    this.jobApplicationsStore.set(id, jobApplication);
    return jobApplication;
  }
  
  async getJobApplication(id: number): Promise<JobApplication | undefined> {
    return this.jobApplicationsStore.get(id);
  }
  
  async getAllJobApplications(): Promise<JobApplication[]> {
    return Array.from(this.jobApplicationsStore.values());
  }
}

export const storage = new MemStorage();
