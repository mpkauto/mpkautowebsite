import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#services", label: "Services" },
    { href: "/contact", label: "Contact" },
    { href: "/apply", label: "Careers" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link href="/">
              <a className="text-midnight-blue font-bold text-2xl md:text-3xl">MPK</a>
            </Link>
            <span className="text-slate-gray text-sm ml-2">Auto AC</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className={cn(
                  "text-slate-gray hover:text-midnight-blue font-medium transition-colors",
                  (location === link.href || 
                   (link.href !== "/" && location.startsWith(link.href))) && 
                   "text-midnight-blue"
                )}>
                  {link.label}
                </a>
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:block">
            <Link href="/book">
              <Button className="bg-accent-blue hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition-colors">
                Book Now
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-slate-gray" 
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a 
                    className={cn(
                      "text-slate-gray hover:text-midnight-blue font-medium transition-colors py-2",
                      (location === link.href || 
                       (link.href !== "/" && location.startsWith(link.href))) && 
                       "text-midnight-blue"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
              <Link href="/book">
                <Button
                  className="bg-accent-blue hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition-colors w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Now
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
