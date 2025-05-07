import { Link } from "wouter";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock 
} from "lucide-react";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter 
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-engine-black text-ice-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">MPK Auto AC</h3>
            <p className="text-gray-400 mb-4">
              Expert automotive air conditioning service and repair. Keeping you cool on the road since 2005.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/#services"><a className="text-gray-400 hover:text-white transition-colors">AC Diagnostics</a></Link></li>
              <li><Link href="/#services"><a className="text-gray-400 hover:text-white transition-colors">Refrigerant Refill</a></Link></li>
              <li><Link href="/#services"><a className="text-gray-400 hover:text-white transition-colors">System Repair</a></Link></li>
              <li><Link href="/#services"><a className="text-gray-400 hover:text-white transition-colors">Preventative Maintenance</a></Link></li>
              <li><Link href="/#services"><a className="text-gray-400 hover:text-white transition-colors">Fleet Services</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/"><a className="text-gray-400 hover:text-white transition-colors">Home</a></Link></li>
              <li><Link href="/#symptoms"><a className="text-gray-400 hover:text-white transition-colors">Symptoms Checker</a></Link></li>
              <li><Link href="/contact"><a className="text-gray-400 hover:text-white transition-colors">Contact Us</a></Link></li>
              <li><Link href="/apply"><a className="text-gray-400 hover:text-white transition-colors">Careers</a></Link></li>
              <li><Link href="#"><a className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mt-1 mr-3 text-accent-blue" />
                <span className="text-gray-400">123 Cooling Ave, Automotive District, AC 12345</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mt-1 mr-3 text-accent-blue" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mt-1 mr-3 text-accent-blue" />
                <span className="text-gray-400">service@mpkauto.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mt-1 mr-3 text-accent-blue" />
                <span className="text-gray-400">Mon-Sat: 8am - 7pm<br/>Sunday: Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} MPK Auto Air Conditioning. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
