import BookingForm from "@/components/booking/BookingForm";
import { Helmet } from "react-helmet";

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
      
      <section id="booking" className="py-16 px-6 md:px-12 bg-white">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-midnight-blue mb-4">
                Book Your Auto AC Service
              </h1>
              <p className="text-slate-gray text-lg">
                Fill out the form below and we'll get back to you within 2 hours.
              </p>
            </div>
            
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  );
}
