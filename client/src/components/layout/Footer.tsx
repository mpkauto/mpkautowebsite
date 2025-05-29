import { Link } from "wouter";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ArrowUpRight,
  ChevronRight
} from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0B0B0C] text-gray-300 py-20 relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0 z-0">
      {/* Existing footer content */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative">
        {/* Top section with logo and columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8 mb-16">
          {/* Brand Column */}
          <ScrollAnimation 
            variant="fadeUp" 
            className="md:col-span-12"
            delay={0.1}
          >
            <div className="flex items-center mb-6">
              <img 
                src="/images/mpk-logo.png" 
                alt="MPK Auto Service" 
                className="h-14 md:h-16 w-auto drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]" 
                  loading="lazy"
              />
            </div>
            
              <p className="text-base text-gray-300 mb-6 max-w-sm">
                Your trusted partner for all automotive air conditioning needs. 
                We ensure your comfort on the road.
            </p>
            
              <div className="flex space-x-4 mb-8">
                <a href="#" className="text-gray-300 hover:text-brand-accent p-2 bg-gray-800 rounded-full transition-all duration-300 hover:scale-110" aria-label="Facebook">
                  <Facebook className="h-6 w-6" />
              </a>
                <a href="#" className="text-gray-300 hover:text-brand-accent p-2 bg-gray-800 rounded-full transition-all duration-300 hover:scale-110" aria-label="Twitter">
                  <Twitter className="h-6 w-6" />
              </a>
                <a href="#" className="text-gray-300 hover:text-brand-accent p-2 bg-gray-800 rounded-full transition-all duration-300 hover:scale-110" aria-label="Instagram">
                  <Instagram className="h-6 w-6" />
              </a>
                <a href="#" className="text-gray-300 hover:text-brand-accent p-2 bg-gray-800 rounded-full transition-all duration-300 hover:scale-110" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </ScrollAnimation>
        </div>
        
        {/* Contact Info Section */}
        <ScrollAnimation variant="fadeUp" delay={0.4}>
          <div className="border-t border-white/10 py-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a href="https://maps.google.com" className="flex items-center gap-3 text-base text-gray-300 hover:text-brand-accent transition-colors duration-300 group">
                  <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors duration-300">
                    <MapPin className="h-5 w-5 text-gray-300" aria-hidden="true" />
                </div>
                  <span>No:112, Metro Star City, 1st Main Road, Manikandan Nagar, Kundratur, Chennai - 69</span>
              </a>
                <a href="tel:+917338838287" className="flex items-center gap-3 text-base text-gray-300 hover:text-brand-accent transition-colors duration-300 group">
                  <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors duration-300">
                    <Phone className="h-5 w-5 text-gray-300" aria-hidden="true" />
                </div>
                  <span>+91 73388 38287</span>
              </a>
                <a href="mailto:service@mpkauto.com" className="flex items-center gap-3 text-base text-gray-300 hover:text-brand-accent transition-colors duration-300 group">
                  <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors duration-300">
                    <Mail className="h-5 w-5 text-gray-300" aria-hidden="true" />
                </div>
                <span>service@mpkauto.com</span>
              </a>
            </div>
          </div>
        </ScrollAnimation>
        
        {/* Bottom section with copyright */}
        <ScrollAnimation variant="fadeUp" delay={0.5}>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div>
                <p className="text-base text-gray-300 mb-2 md:mb-0">
                © {currentYear} MPK Auto Service. All rights reserved.
              </p>
              <div className="mt-4">
                  <p className="text-sm text-gray-300 italic tracking-wider font-medium">
                  <span className="relative inline-block">
                    <span className="relative z-10">Air Comfort. Engineered for Excellence.</span>
                  </span>
                </p>
              </div>
            </div>
            
              {/* Removed Terms, Privacy, and Sitemap links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-8">
                {/* 
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-all duration-300 flex items-center group">
                Terms of Service
                <ArrowUpRight className="h-3 w-3 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-all duration-300 flex items-center group">
                Privacy Policy
                <ArrowUpRight className="h-3 w-3 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-all duration-300 flex items-center group">
                Sitemap
                <ArrowUpRight className="h-3 w-3 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
                */}
              </div>
            </div>
          </ScrollAnimation>
          </div>
      </div>
    </footer>
  );
}
