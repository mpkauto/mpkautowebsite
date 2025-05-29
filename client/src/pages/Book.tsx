import BookingForm from "@/components/booking/BookingForm";
import { Helmet } from "react-helmet-async";
import { Calendar, Clock, CheckCircle, Car, Phone, Mail } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { motion } from "framer-motion";

export default function Book() {
  return (
    <>
      <Helmet>
        <title>Book Auto AC Service | MPK Air Conditioning</title>
        <meta 
          name="description" 
          content="Schedule your auto air conditioning service with MPK. Fast appointments, expert technicians, and transparent pricing."
        />
        <meta 
          property="og:title" 
          content="Book Auto AC Service | MPK Air Conditioning"
        />
        <meta 
          property="og:description" 
          content="Book your appointment for AC diagnostics, refrigerant refill, or full system repair."
        />
      </Helmet>
      
      {/* Hero section */}
      <section className="relative py-20 bg-darker-bg overflow-hidden">
        {/* Removed Background decorative elements */}
        
        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
          <ScrollAnimation variant="fadeUp">
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-5">
                <div className="h-0.5 w-12 bg-primary mr-4"></div>
                <span className="text-primary font-medium uppercase tracking-wider text-sm">Schedule Service</span>
                <div className="h-0.5 w-12 bg-primary ml-4"></div>
              </div>
              
              <h1 className="text-5xl font-bold text-foreground mb-6">
                Book Your Auto <span>AC Service</span>
              </h1>
              
              <p className="text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Complete the form below to schedule your appointment. Our team will confirm your booking within 2 hours.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      
      {/* Booking form section */}
      <section className="py-20 bg-background">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <ScrollAnimation variant="fadeUp" className="lg:col-span-8">
              <div className="bg-darker-bg p-8 md:p-12 rounded-xl border border-border/30 shadow-lg">
                <h2 className="text-4xl font-semibold text-foreground mb-6">Service Request Form</h2>
                <BookingForm />
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation variant="fadeUp" delay={0.2} className="lg:col-span-4">
              <div className="sticky top-32">
                {/* Benefits card */}
                <div className="bg-darker-bg p-8 rounded-xl border border-border/30 shadow-lg mb-8">
                  <h3 className="text-2xl font-medium text-foreground mb-6 flex items-center">
                    Why Book With Us
                  </h3>
                  
                  <ul className="space-y-5">
                    <li className="flex items-start">
                      <div className="p-2 bg-primary/5 rounded-full mr-4 mt-1 flex-shrink-0">
                        <Calendar className="h-5 w-5 text-gray-400" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Flexible Scheduling</p>
                        <p className="text-base text-gray-400">Choose a time that works for your schedule</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="p-2 bg-primary/5 rounded-full mr-4 mt-1 flex-shrink-0">
                        <Clock className="h-5 w-5 text-gray-400" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Same-Day Service</p>
                        <p className="text-base text-gray-400">Often available for urgent AC issues</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="p-2 bg-primary/5 rounded-full mr-4 mt-1 flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-gray-400" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Certified Technicians</p>
                        <p className="text-base text-gray-400">Experienced professionals you can trust</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="p-2 bg-primary/5 rounded-full mr-4 mt-1 flex-shrink-0">
                        <Car className="h-5 w-5 text-gray-400" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">All Makes & Models</p>
                        <p className="text-base text-gray-400">Service for any vehicle type</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                {/* Contact info card */}
                <div className="bg-darker-bg p-8 rounded-xl border border-border/30 shadow-lg">
                  <h3 className="text-2xl font-medium text-foreground mb-6 flex items-center">
                    Need Help?
                  </h3>
                  
                  <p className="text-base text-gray-400 mb-4">
                    Questions about booking or services? Contact our team directly:
                  </p>
                  
                  <div className="flex items-center mb-3">
                    <Phone className="h-5 w-5 text-gray-400 mr-3" />
                    <span className="text-base text-gray-400 font-medium">+91 73388 38287</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gray-400 mr-3" />
                    <span className="text-base text-gray-400 font-medium">service@mpkauto.com</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </>
  );
}
