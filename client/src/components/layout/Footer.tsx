import { Link } from "wouter";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
  Twitter,
  ArrowUpRight,
  ChevronRight
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-darker-bg border-t border-border/30 pt-24 pb-12 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/5 via-primary/30 to-primary/5"></div>
      <div className="absolute inset-0 bg-grid-primary/[0.02] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Top section with logo and columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <div className="flex items-center mb-6">
              <span className="text-primary font-bold text-3xl">MPK</span>
              <span className="text-muted-foreground text-sm ml-2 font-light">Auto AC</span>
            </div>
            
            <p className="text-muted-foreground mb-8 max-w-sm">
              Expert automotive air conditioning service and repair. Keeping you cool on the road since 2005.
            </p>
            
            <div className="flex space-x-5">
              <a href="#" className="text-muted-foreground hover:text-primary p-2 bg-primary/5 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary p-2 bg-primary/5 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary p-2 bg-primary/5 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Services Column */}
          <div className="md:col-span-2">
            <h3 className="text-foreground font-bold text-lg mb-6 flex items-center">
              <div className="h-5 w-1 bg-primary mr-3"></div>
              Services
            </h3>
            
            <ul className="space-y-4">
              <li>
                <Link href="/#services">
                  <div className="text-muted-foreground hover:text-primary transition-colors flex items-center group cursor-pointer">
                    <ChevronRight className="h-4 w-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    AC Diagnostics
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/#services">
                  <div className="text-muted-foreground hover:text-primary transition-colors flex items-center group cursor-pointer">
                    <ChevronRight className="h-4 w-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    Refrigerant Refill
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/#services">
                  <div className="text-muted-foreground hover:text-primary transition-colors flex items-center group cursor-pointer">
                    <ChevronRight className="h-4 w-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    System Repair
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/#services">
                  <div className="text-muted-foreground hover:text-primary transition-colors flex items-center group cursor-pointer">
                    <ChevronRight className="h-4 w-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    Maintenance
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/#services">
                  <div className="text-muted-foreground hover:text-primary transition-colors flex items-center group cursor-pointer">
                    <ChevronRight className="h-4 w-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    Fleet Services
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Quick Links Column */}
          <div className="md:col-span-2">
            <h3 className="text-foreground font-bold text-lg mb-6 flex items-center">
              <div className="h-5 w-1 bg-primary mr-3"></div>
              Quick Links
            </h3>
            
            <ul className="space-y-4">
              <li>
                <Link href="/">
                  <div className="text-muted-foreground hover:text-primary transition-colors flex items-center group cursor-pointer">
                    <ChevronRight className="h-4 w-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    Home
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/#symptoms">
                  <div className="text-muted-foreground hover:text-primary transition-colors flex items-center group cursor-pointer">
                    <ChevronRight className="h-4 w-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    Symptoms Checker
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <div className="text-muted-foreground hover:text-primary transition-colors flex items-center group cursor-pointer">
                    <ChevronRight className="h-4 w-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    Contact Us
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/apply">
                  <div className="text-muted-foreground hover:text-primary transition-colors flex items-center group cursor-pointer">
                    <ChevronRight className="h-4 w-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    Careers
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info Column */}
          <div className="md:col-span-4">
            <h3 className="text-foreground font-bold text-lg mb-6 flex items-center">
              <div className="h-5 w-1 bg-primary mr-3"></div>
              Contact Info
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="p-2 bg-primary/5 rounded-full mr-4 mt-1">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <span className="text-muted-foreground">123 Cooling Ave, Automotive District, AC 12345</span>
              </li>
              <li className="flex items-start">
                <div className="p-2 bg-primary/5 rounded-full mr-4 mt-1">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <span className="text-muted-foreground">(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <div className="p-2 bg-primary/5 rounded-full mr-4 mt-1">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <span className="text-muted-foreground">service@mpkauto.com</span>
              </li>
              <li className="flex items-start">
                <div className="p-2 bg-primary/5 rounded-full mr-4 mt-1">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div className="text-muted-foreground">
                  <p>Monday - Friday: 8am - 7pm</p>
                  <p>Saturday: 8am - 5pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section with copyright */}
        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-6 md:mb-0">
            © {currentYear} MPK Auto Air Conditioning. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-8">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors flex items-center group">
              Terms of Service
              <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors flex items-center group">
              Privacy Policy
              <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors flex items-center group">
              Sitemap
              <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
