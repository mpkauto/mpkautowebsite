import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [location] = useLocation();

  // Handle scroll effect and active section
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100; // Offset for header height

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId || '');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigation = (href: string) => {
    if (href === '/') {
      window.location.href = '/';
    } else if (href.startsWith('/#')) {
      // If we're not on the home page, first navigate to home page
      if (!location.startsWith('/')) {
        window.location.href = href;
      } else {
        // If we're already on home page, just scroll
        const targetId = href.replace('/#', '');
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      window.location.href = href;
    }
  };

  const navLinks = [
    { href: '/', label: 'Home', id: 'home' },
    { href: '/services', label: 'Services', id: 'services' },
    { href: '/case-studies', label: 'Case Studies', id: 'case-studies' },
    { href: '/faq', label: 'FAQ', id: 'faq' },
    { href: '/contact', label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 bg-black/80 backdrop-blur',
        scrolled ? 'py-2 shadow-sm' : 'py-4'
      )}
    >
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="flex items-center justify-between md:justify-start">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div
              className="cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => handleNavigation('/')}
            >
              <img
                src="/images/mpk-logo.png"
                alt="MPK Auto AC Service"
                className="h-10 md:h-12 w-auto drop-shadow-[0_0_6px_rgba(255,255,255,0.15)]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center justify-center flex-1 mx-4"
            aria-label="Main navigation"
          >
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  onClick={() => handleNavigation(link.href)}
                  className="relative group cursor-pointer focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded-md focus-visible:outline-none"
                  tabIndex={0}
                  role="button"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleNavigation(link.href);
                    }
                  }}
                >
                  <span
                    className={cn(
                      'text-[#F2F4F8]/90 font-medium transition-all duration-300 hover:text-[#F2F4F8]',
                      (activeSection === link.id ||
                        (link.href !== '/' && location.startsWith(link.href))) &&
                        'text-[#F2F4F8] font-semibold'
                    )}
                  >
                    {link.label}
                  </span>
                  <span
                    className={cn(
                      'absolute -bottom-1 left-0 h-0.5 bg-[#F2F4F8]/50 transition-all duration-300',
                      activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                    )}
                  ></span>
                </div>
              ))}
            </div>
          </nav>

          {/* Book Now CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => handleNavigation('/booking')}
              className="bg-[#0077FF] text-white font-semibold py-2 px-6 rounded-md transition-all duration-300 hover:bg-[#0066DD] hover:shadow-lg hover:scale-105 hover:ring-2 ring-primary/30 pulse-animation"
              aria-label="Book a service appointment"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden ml-auto">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="text-gray-300 transition-transform duration-300 hover:scale-110 hover:text-[#9B9B9B]"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[80vw] sm:w-[350px] transition-all duration-300"
              >
                <SheetHeader>
                  <SheetTitle className="text-left">
                    <img
                      src="/images/mpk-logo.png"
                      alt="MPK Auto AC Service"
                      className="h-8 w-auto"
                      loading="lazy"
                    />
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-0 mt-8" aria-label="Mobile navigation">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <div
                        onClick={() => handleNavigation(link.href)}
                        className={cn(
                          'text-lg py-4 border-b border-[#F2F4F8]/10 text-[#F2F4F8]/90 font-medium transition-all duration-300 hover:text-[#F2F4F8] cursor-pointer',
                          (activeSection === link.id ||
                            (link.href !== '/' && location.startsWith(link.href))) &&
                            'text-[#F2F4F8] font-semibold'
                        )}
                        tabIndex={0}
                        role="button"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            handleNavigation(link.href);
                          }
                        }}
                      >
                        {link.label}
                      </div>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <Button
                      onClick={() => handleNavigation('/booking')}
                      className="w-full mt-6 bg-[#0077FF] text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 hover:bg-[#0066DD] hover:shadow-lg hover:scale-105 focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none"
                      aria-label="Book a service appointment"
                    >
                      Book Service
                    </Button>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
