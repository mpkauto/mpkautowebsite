import BookingForm from "@/components/booking/BookingForm";
import { Helmet } from "react-helmet";
import { Calendar, Clock, CheckCircle, Car, Phone, Mail } from "lucide-react";

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
      
      {/* Hero section with background */}
      <section className="relative pt-36 pb-16 bg-darker-bg overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-grid-primary/[0.02] pointer-events-none"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary/5 rounded-full blur-2xl pointer-events-none"></div>
        
        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <div className="flex items-center justify-center mb-5">
              <div className="h-0.5 w-12 bg-primary mr-4"></div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Schedule Service</span>
              <div className="h-0.5 w-12 bg-primary ml-4"></div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Book Your Auto <span className="text-primary">AC Service</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete the form below to schedule your appointment. Our team will confirm your booking within 2 hours.
            </p>
          </div>
        </div>
      </section>
      
      {/* Booking form section */}
      <section className="py-16 px-6 md:px-12 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 animate-fade-in-up">
              <div className="bg-darker-bg p-8 md:p-12 rounded-xl border border-border/30 shadow-lg">
                <h2 className="text-2xl font-bold text-foreground mb-6">Service Request Form</h2>
                <BookingForm />
              </div>
            </div>
            
            <div className="lg:col-span-4 animate-fade-in" style={{animationDelay: "0.2s"}}>
              <div className="sticky top-32">
                {/* Benefits card */}
                <div className="bg-darker-bg p-8 rounded-xl border border-border/30 shadow-lg mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                    <div className="h-5 w-1 bg-primary mr-3"></div>
                    Why Book With Us
                  </h3>
                  
                  <ul className="space-y-5">
                    <li className="flex items-start">
                      <div className="p-2 bg-primary/5 rounded-full mr-4 mt-1 flex-shrink-0">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Flexible Scheduling</p>
                        <p className="text-muted-foreground text-sm">Choose a time that works for your schedule</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="p-2 bg-primary/5 rounded-full mr-4 mt-1 flex-shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Same-Day Service</p>
                        <p className="text-muted-foreground text-sm">Often available for urgent AC issues</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="p-2 bg-primary/5 rounded-full mr-4 mt-1 flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Certified Technicians</p>
                        <p className="text-muted-foreground text-sm">Experienced professionals you can trust</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="p-2 bg-primary/5 rounded-full mr-4 mt-1 flex-shrink-0">
                        <Car className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">All Makes & Models</p>
                        <p className="text-muted-foreground text-sm">Service for any vehicle type</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                {/* Contact info card */}
                <div className="bg-darker-bg p-8 rounded-xl border border-border/30 shadow-lg">
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                    <div className="h-5 w-1 bg-primary mr-3"></div>
                    Need Help?
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    Questions about booking or services? Contact our team directly:
                  </p>
                  
                  <div className="flex items-center mb-3">
                    <Phone className="h-5 w-5 text-primary mr-3" />
                    <span className="text-foreground font-medium">(555) 123-4567</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-3" />
                    <span className="text-foreground font-medium">service@mpkauto.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
