import type { User, Booking, Contact } from './types';

type InsertUser = Omit<User, 'id'>;
type InsertBooking = Omit<Booking, 'id'>;
type InsertContact = Omit<Contact, 'id'>;

// In-memory type-safe store
const inMemoryStorage: {
  bookings: Booking[];
  contacts: Contact[];
  users: User[];
} = {
  bookings: [],
  contacts: [],
  users: [],
};

export const db = {
  bookings: {
    create: (data: InsertBooking): Booking => {
      const id = inMemoryStorage.bookings.length + 1;
      const booking = { id, ...data };
      inMemoryStorage.bookings.push(booking);
      return booking;
    },
    getAll: (): Booking[] => inMemoryStorage.bookings,
  },
  contacts: {
    create: (data: InsertContact): Contact => {
      const id = inMemoryStorage.contacts.length + 1;
      const contact = { id, ...data };
      inMemoryStorage.contacts.push(contact);
      return contact;
    },
    getAll: (): Contact[] => inMemoryStorage.contacts,
  },
  users: {
    create: (data: InsertUser): User => {
      const id = inMemoryStorage.users.length + 1;
      const user = { id, ...data };
      inMemoryStorage.users.push(user);
      return user;
    },
    findByUsername: (username: string): User | undefined =>
      inMemoryStorage.users.find((u) => u.username === username),
    findById: (id: number): User | undefined =>
      inMemoryStorage.users.find((u) => u.id === id),
  },
};
