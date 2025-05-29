import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { Loader2 } from 'lucide-react';
import { insertJobApplicationSchema } from '@shared/schema';

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

export default function JobApplicationForm() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm({
    resolver: zodResolver(insertJobApplicationSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      resumeUrl: '',
    },
  });

  const jobApplicationMutation = useMutation({
    mutationFn: async (data: any) => {
      return apiRequest('POST', '/api/job-applications', data);
    },
    onSuccess: () => {
      toast({
        title: 'Application submitted!',
        description: "We'll review your application and contact you if there's a match.",
        variant: 'default',
      });
      form.reset();
      setIsSubmitted(true);
    },
    onError: (error) => {
      toast({
        title: 'Something went wrong.',
        description: error.message || 'Please try again later.',
        variant: 'destructive',
      });
    },
  });

  function onSubmit(data: any) {
    jobApplicationMutation.mutate(data);
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-50 p-6 rounded-lg text-center">
        <h3 className="text-2xl font-bold text-green-700 mb-2">Application Received!</h3>
        <p className="text-green-600 mb-4">
          Thank you for your interest in joining our team. We'll review your application and contact
          you if there's a match.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mx-auto">
          Submit Another Application
        </Button>
      </div>
    );
  }

  const positions = [
    { value: 'ac-technician', label: 'AC Technician' },
    { value: 'automotive-mechanic', label: 'Automotive Mechanic' },
    { value: 'service-advisor', label: 'Service Advisor' },
    { value: 'shop-manager', label: 'Shop Manager' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Smith" {...field} />
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
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="(123) 456-7890" {...field} />
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
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="your.email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Position Applied For</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a position" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {positions.map((position) => (
                    <SelectItem key={position.value} value={position.value}>
                      {position.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="resumeUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Resume URL (Dropbox, Google Drive, etc.)</FormLabel>
              <FormControl>
                <Input placeholder="https://drive.google.com/your-resume" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Experience Summary</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Briefly describe your relevant experience and qualifications"
                  className="resize-none min-h-[150px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={jobApplicationMutation.isPending}>
          {jobApplicationMutation.isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            'Submit Application'
          )}
        </Button>
      </form>
    </Form>
  );
}
