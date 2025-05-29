import ContactForm from "@/components/contact/ContactForm";
import { Helmet } from "react-helmet-async";
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
      
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-black mb-6">
              Contact Us
            </h1>
            <p className="text-base text-gray-700 max-w-xl mx-auto mb-6">
              Have questions or need assistance? Reach out to us using the form below or our contact information.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-4xl font-semibold text-black mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
            
            <div>
              <h2 className="text-4xl font-semibold text-black mb-6">Our Information</h2>
              
              <div className="bg-ice-white rounded-lg p-6 shadow-sm mb-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 mt-1 mr-3 text-accent-blue" />
                    <span className="text-base text-gray-700">No:112, Metro Star City, 1st Main Road, Manikandan Nagar, Kundratur, Chennai - 69</span>
                  </li>
                  <li className="flex items-start">
                    <Phone className="h-5 w-5 mt-1 mr-3 text-accent-blue" />
                    <span className="text-base text-gray-700">+91 73388 38287</span>
                  </li>
                  <li className="flex items-start">
                    <Mail className="h-5 w-5 mt-1 mr-3 text-accent-blue" />
                    <span className="text-base text-gray-700">service@mpkauto.com</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 mt-1 mr-3 text-accent-blue" />
                    <div className="text-gray-700">
                      <p className="text-base text-gray-700">Monday - Friday: 8am - 7pm</p>
                      <p className="text-base text-gray-700">Saturday: 8am - 5pm</p>
                      <p className="text-base text-gray-700">Sunday: Closed</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-ice-white rounded-lg shadow-sm h-80 overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1147.2316151506168!2d80.11441536977678!3d12.987285958143454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52600a3a85e519%3A0x995e3567925f9948!2sMetro%20Star%20City%201st%20Main%20Rd%2C%20Tiruneermalai%2C%20Tamil%20Nadu%20600069!5e1!3m2!1sen!2sin!4v1748115875274!5m2!1sen!2sin" 
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
