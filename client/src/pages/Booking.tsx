import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { createBooking } from "@/services/bookingService";
import type { InsertBooking } from "@shared/schema";
import { toast } from "react-hot-toast";

const timeSlots = [
  "10:00 AM - 12:00 PM",
  "12:00 PM - 2:00 PM",
  "2:00 PM - 4:00 PM",
  "4:00 PM - 6:00 PM",
];



export default function BookingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<InsertBooking>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      vehicleInfo: "",
      serviceType: "",
      preferredDate: "",
      preferredTime: "",
      notes: "",
    }
  });
  
  const serviceType = watch("serviceType");
  const preferredDate = watch("preferredDate");
  const preferredTime = watch("preferredTime");

  const onSubmit: SubmitHandler<InsertBooking> = async (data) => {
    try {
      setIsSubmitting(true);
      
      // Call our Supabase service to create the booking
      const { error } = await createBooking(data);
      
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
                  {...register("name", { required: "Name is required" })}
                  className={cn("w-full", errors.name && "border-red-500")}
                />
                {errors.name && (
                  <p className="text-base text-brand-contrastText mt-1 text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Phone Number</label>
                <Input
                  {...register("phone", { 
                    required: "Phone number is required",
                    onChange: (e) => {
                      const formatted = formatPhoneNumber(e.target.value);
                      e.target.value = formatted;
                    }
                  })}
                  className={cn("w-full", errors.phone && "border-red-500")}
                />
                {errors.phone && (
                  <p className="text-base text-brand-contrastText mt-1 text-red-500">{errors.phone.message}</p>
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
                  {...register("vehicleInfo", { required: "Vehicle information is required" })}
                  className={cn("w-full", errors.vehicleInfo && "border-red-500")}
                />
                {errors.vehicleInfo && (
                  <p className="text-base text-brand-contrastText mt-1 text-red-500">{errors.vehicleInfo.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">AC Issue</label>
                <Select
                  onValueChange={(value) => setValue("serviceType", value)}
                  value={serviceType}
                >
                  <SelectTrigger className={cn("w-full", errors.serviceType && "border-red-500")}>
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="AC Repair">AC Repair</SelectItem>
                    <SelectItem value="AC Service">AC Service</SelectItem>
                    <SelectItem value="AC Gas Refill">AC Gas Refill</SelectItem>
                    <SelectItem value="AC Diagnosis">AC Diagnosis</SelectItem>
                  </SelectContent>
                </Select>
                {errors.serviceType && (
                  <p className="text-base text-brand-contrastText mt-1 text-red-500">{errors.serviceType.message}</p>
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
                        !preferredDate && "text-slate-400",
                        errors.preferredDate && "border-red-500"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {preferredDate ? (
                        new Date(preferredDate).toLocaleDateString()
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={preferredDate ? new Date(preferredDate) : undefined}
                      onSelect={(date) => date && setValue("preferredDate", date.toISOString().split('T')[0])}
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
                  onValueChange={(value) => setValue("preferredTime", value)}
                  value={preferredTime}
                >
                  <SelectTrigger className={cn("w-full", errors.preferredTime && "border-red-500")}>
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
                {errors.preferredTime && (
                  <p className="text-base text-brand-contrastText mt-1 text-red-500">{errors.preferredTime.message}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-900 mb-2">Additional Notes (Optional)</label>
                <Textarea
                  {...register("notes")}
                  placeholder="Any special instructions or additional information"
                  className="min-h-[100px]"
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