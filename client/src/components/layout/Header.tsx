import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/95 backdrop-blur-sm py-2 shadow-md" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <div className="cursor-pointer">
                <span className="text-primary font-bold text-2xl md:text-3xl">MPK</span>
                <span className="text-muted-foreground text-sm ml-2 font-light">Auto AC</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div className="relative group cursor-pointer">
                  <span className={cn(
                    "text-muted-foreground hover:text-primary font-medium transition-colors",
                    (location === link.href || 
                     (link.href !== "/" && location.startsWith(link.href))) && 
                     "text-primary"
                  )}>
                    {link.label}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </div>
              </Link>
            ))}
            <Link href="/book">
              <div className="cursor-pointer">
                <Button className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-6 rounded-md transition-all duration-300 hover:shadow-lg hover:scale-105">
                  Book Now
                </Button>
              </div>
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-foreground" 
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
          <div className="md:hidden pb-4 mt-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <div 
                    className={cn(
                      "text-muted-foreground hover:text-primary font-medium transition-colors py-2 cursor-pointer",
                      (location === link.href || 
                       (link.href !== "/" && location.startsWith(link.href))) && 
                       "text-primary"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </div>
                </Link>
              ))}
              <Link href="/book">
                <div onClick={() => setIsMenuOpen(false)} className="cursor-pointer">
                  <Button
                    className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-6 rounded-md transition-all duration-300 w-full hover:shadow-lg"
                  >
                    Book Now
                  </Button>
                </div>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
