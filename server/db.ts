// Temporary in-memory storage solution
const inMemoryStorage = {
  bookings: [],
  contacts: [],
  jobApplications: [],
  users: []
};

export const db = {
  bookings: {
    create: (data: any) => {
      const id = inMemoryStorage.bookings.length + 1;
      const booking = { id, ...data };
      inMemoryStorage.bookings.push(booking);
      return booking;
    },
    getAll: () => inMemoryStorage.bookings,
  },
  contacts: {
    create: (data: any) => {
      const id = inMemoryStorage.contacts.length + 1;
      const contact = { id, ...data };
      inMemoryStorage.contacts.push(contact);
      return contact;
    },
    getAll: () => inMemoryStorage.contacts,
  },
  jobApplications: {
    create: (data: any) => {
      const id = inMemoryStorage.jobApplications.length + 1;
      const application = { id, ...data };
      inMemoryStorage.jobApplications.push(application);
      return application;
    },
    getAll: () => inMemoryStorage.jobApplications,
  },
  users: {
    findByUsername: (username: string) => 
      inMemoryStorage.users.find(u => u.username === username),
    findById: (id: number) => 
      inMemoryStorage.users.find(u => u.id === id),
  }
}; 