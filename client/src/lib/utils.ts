import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function formatTime(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(date);
}

export function getTimeSlots() {
  return [
    { value: 'morning', label: 'Morning (8am - 12pm)' },
    { value: 'afternoon', label: 'Afternoon (12pm - 4pm)' },
    { value: 'evening', label: 'Evening (4pm - 7pm)' },
  ];
}

export function getServiceOptions() {
  return [
    { value: 'diagnostic', label: 'AC Diagnostic Check' },
    { value: 'refill', label: 'Refrigerant Refill' },
    { value: 'repair', label: 'Full System Repair' },
    { value: 'maintenance', label: 'Preventative Maintenance' },
    { value: 'other', label: 'Other (please specify)' },
  ];
}
