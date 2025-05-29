import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useSearchParams } from "wouter";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { createBooking, type BookingFormData } from "@/services/bookingService";
import { toast } from "react-hot-toast";

const timeSlots = [
  "10:00 AM - 12:00 PM",
  "12:00 PM - 2:00 PM",
  "2:00 PM - 4:00 PM",
  "4:00 PM - 6:00 PM",
];

const acIssues = [
  "Not Cooling",
  "Unusual Noise",
  "Bad Odor",
  "Water Leak",
  "Weak Airflow",
  "System Not Working",
  "Other",
];

export default function BookingPage() {
  const [searchParams] = useSearchParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<BookingFormData>({
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      vehicleDetails: "",
      acIssue: "",
      preferredDate: undefined,
      timeSlot: "",
      location: "",
      additionalNotes: "",
    }
  });

  const onSubmit = async (data: BookingFormData) => {
    try {
      setIsSubmitting(true);
      
      // Call our Supabase service to create the booking
      const { data: bookingData, error } = await createBooking(data);
      
      if (error) {
        toast.error("Failed to submit booking. Please try again.");
        console.error("Error submitting booking:", error);
        return;
      }
      
      toast.success("Booking submitted successfully!");
      setIsSubmitted(true);
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Book AC Service | MPK Auto Service</title>
        <meta name="description" content="Book your AC service appointment with MPK Auto Service. Professional AC repair and maintenance services for all vehicle makes and models." />
      </Helmet>

      <div className="max-w-3xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Book Your AC Service</h1>
            <h2 className="text-2xl font-bold text-black mb-4">
              Schedule your appointment with our expert technicians
            </h2>
          </div>
        </ScrollAnimation>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-lg p-8 text-center"
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">Booking Confirmed!</h2>
            <p className="text-base text-brand-contrastText mb-6">Thank you for booking with MPK Auto Service. We'll contact you shortly to confirm your appointment.</p>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="default"
            >
              Book Another Service
            </Button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Full Name</label>
                <Input
                  {...register("fullName", { required: "Full name is required" })}
                  className={cn("w-full", errors.fullName && "border-red-500")}
                />
                {errors.fullName && (
                  <p className="text-base text-brand-contrastText mt-1 text-red-500">{errors.fullName.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Phone Number</label>
                <Input
                  {...register("phoneNumber", { required: "Phone number is required" })}
                  onChange={(e) => {
                    const formatted = formatPhoneNumber(e.target.value);
                    e.target.value = formatted;
                  }}
                  className={cn("w-full", errors.phoneNumber && "border-red-500")}
                />
                {errors.phoneNumber && (
                  <p className="text-base text-brand-contrastText mt-1 text-red-500">{errors.phoneNumber.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                <Input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className={cn("w-full", errors.email && "border-red-500")}
                />
                {errors.email && (
                  <p className="text-base text-brand-contrastText mt-1 text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Vehicle Make</label>
                <Input
                  {...register("vehicleDetails", { required: "Vehicle details are required" })}
                  className={cn("w-full", errors.vehicleDetails && "border-red-500")}
                />
                {errors.vehicleDetails && (
                  <p className="text-base text-brand-contrastText mt-1 text-red-500">{errors.vehicleDetails.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">AC Issue</label>
                <Select
                  onValueChange={(value) => setValue("acIssue", value)}
                  defaultValue={watch("acIssue")}
                >
                  <SelectTrigger className={cn("w-full", errors.acIssue && "border-red-500")}>
                    <SelectValue placeholder="Select AC issue" />
                  </SelectTrigger>
                  <SelectContent>
                    {acIssues.map((issue) => (
                      <SelectItem key={issue} value={issue}>
                        {issue}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.acIssue && (
                  <p className="text-base text-brand-contrastText mt-1 text-red-500">{errors.acIssue.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Preferred Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-black text-white border border-white/10",
                        !watch("preferredDate") && "text-slate-400",
                        errors.preferredDate && "border-red-500"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {watch("preferredDate") ? (
                        format(watch("preferredDate"), "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={watch("preferredDate")}
                      onSelect={(date: Date | undefined) => date && setValue("preferredDate", date)}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                {errors.preferredDate && (
                  <p className="text-base text-brand-contrastText mt-1 text-red-500">{errors.preferredDate.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Time Slot</label>
                <Select
                  onValueChange={(value) => setValue("timeSlot", value)}
                  defaultValue={watch("timeSlot")}
                >
                  <SelectTrigger className={cn("w-full", errors.timeSlot && "border-red-500")}>
                    <SelectValue placeholder="Select time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.timeSlot && (
                  <p className="text-base text-brand-contrastText mt-1 text-red-500">{errors.timeSlot.message}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-900 mb-2">Your Location / Address</label>
                <Input
                  {...register("location", { required: "Location is required" })}
                  className={cn("w-full", errors.location && "border-red-500")}
                />
                {errors.location && (
                  <p className="text-base text-brand-contrastText mt-1 text-red-500">{errors.location.message}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-900 mb-2">Additional Notes (Optional)</label>
                <Textarea
                  {...register("additionalNotes")}
                  rows={4}
                  className="w-full"
                />
              </div>
            </div>

            <div className="mt-8">
              <Button 
                type="submit" 
                variant="default" 
                size="lg" 
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Book Service"}
              </Button>
            </div>
          </motion.form>
        )}
      </div>
    </div>
  );
}