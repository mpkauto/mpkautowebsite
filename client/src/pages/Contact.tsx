import ContactForm from "@/components/contact/ContactForm";
import { Helmet } from "react-helmet";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | MPK Auto Air Conditioning</title>
        <meta 
          name="description" 
          content="Get in touch with MPK Auto Air Conditioning. We're here to help with all your vehicle AC needs."
        />
        <meta 
          property="og:title" 
          content="Contact Us | MPK Auto Air Conditioning"
        />
        <meta 
          property="og:description" 
          content="Contact our team for inquiries, service questions, or to schedule an appointment."
        />
      </Helmet>
      
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-midnight-blue mb-4">
              Contact Us
            </h1>
            <p className="text-slate-gray text-lg max-w-xl mx-auto">
              Have questions or need assistance? Reach out to us using the form below or our contact information.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-xl font-bold text-midnight-blue mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-midnight-blue mb-6">Our Information</h2>
              
              <div className="bg-ice-white rounded-lg p-6 shadow-sm mb-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 mt-1 mr-3 text-accent-blue" />
                    <span className="text-slate-gray">123 Cooling Ave, Automotive District, AC 12345</span>
                  </li>
                  <li className="flex items-start">
                    <Phone className="h-5 w-5 mt-1 mr-3 text-accent-blue" />
                    <span className="text-slate-gray">(555) 123-4567</span>
                  </li>
                  <li className="flex items-start">
                    <Mail className="h-5 w-5 mt-1 mr-3 text-accent-blue" />
                    <span className="text-slate-gray">service@mpkauto.com</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 mt-1 mr-3 text-accent-blue" />
                    <div className="text-slate-gray">
                      <p>Monday - Friday: 8am - 7pm</p>
                      <p>Saturday: 8am - 5pm</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-ice-white rounded-lg shadow-sm h-80 overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.215305320406!2d-74.00635908459247!3d40.71271997933205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ1LjgiTiA3NMKwMDAnMTkuOSJX!5e0!3m2!1sen!2sus!4v1623162462751!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  loading="lazy"
                  title="MPK Auto AC Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
