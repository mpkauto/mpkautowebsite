// client/src/components/booking/BookingForm.tsx

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import { getTimeSlots, cn } from '@/lib/utils';
import toast from 'react-hot-toast';

import { insertBookingSchema, type InsertBooking } from '@shared/schema';
import { createBooking } from '@/services/bookingService';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Hardcoded for now; can be fetched from Supabase if needed
const serviceOptions = ['Basic Service', 'Full Service', 'Premium Service'];

export default function BookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertBooking>({
    resolver: zodResolver(insertBookingSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      vehicleInfo: '',
      serviceType: '',
      preferredDate: '',
      preferredTime: '',
      notes: '',
    },
  });

  const mutation = useMutation({
    mutationFn: createBooking,
    onSuccess: () => {
      toast.success('Booking submitted!');
      setIsSubmitted(true);
    },
    onError: (err: any) => {
      console.error('Booking error:', err);
      toast.error('An unexpected error occurred. Please try again.');
    },
  });

  function onSubmit(data: InsertBooking) {
    mutation.mutate(data);
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-50 p-6 rounded-lg text-center">
        <h3 className="text-2xl font-bold text-green-700 mb-2">Thank You!</h3>
        <p className="text-green-600 mb-4">
          Your booking request has been received. We'll contact you shortly.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mx-auto">
          Book Another Service
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 bg-darker-bg p-8 md:p-12 rounded-xl border border-border/30 shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Smith"
                    {...field}
                    className={cn(
                      'text-white placeholder:text-gray-400',
                      form.formState.errors.name && 'border-red-500'
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Phone Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="(123) 456-7890"
                    {...field}
                    className={cn(
                      'text-white placeholder:text-gray-400',
                      form.formState.errors.phone && 'border-red-500'
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Email Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="your.email@example.com"
                  {...field}
                  className={cn(
                    'text-white placeholder:text-gray-400',
                    form.formState.errors.email && 'border-red-500'
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="vehicleInfo"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Vehicle Info</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Toyota Camry 2018"
                    {...field}
                    className={cn(
                      'text-white placeholder:text-gray-400',
                      form.formState.errors.vehicleInfo && 'border-red-500'
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="serviceType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Service Needed</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="text-white">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {serviceOptions.map((label) => (
                      <SelectItem key={label} value={label}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="preferredDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Preferred Date</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    {...field}
                    className={cn(
                      'text-white',
                      form.formState.errors.preferredDate && 'border-red-500'
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="preferredTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Preferred Time</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="text-white">
                      <SelectValue placeholder="Select a time" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {getTimeSlots().map((slot) => (
                      <SelectItem key={slot.value} value={slot.value}>
                        {slot.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Additional Notes</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us more about the issue"
                  className="resize-none text-white placeholder:text-gray-400"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={mutation.isPending}
          className="w-full bg-brand-accent hover:bg-brand-accent/90 text-white font-bold py-2 px-4 rounded-md"
        >
          {mutation.isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            'Book Appointment'
          )}
        </Button>
      </form>
    </Form>
  );
}
