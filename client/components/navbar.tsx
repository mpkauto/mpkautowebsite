import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Menu } from 'lucide-react';
import { Button } from '../src/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '../src/components/ui/sheet';
import { cn } from '../lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        scrolled ? 'bg-black/80 backdrop-blur-lg py-3' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center group" aria-label="MPK Auto Service Home">
            <img
              src="/logo.png"
              alt="MPK Auto Service"
              className="h-8 sm:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <span className="ml-3 text-xl sm:text-2xl font-light tracking-wider text-white">
              MPK
            </span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center space-x-8 lg:space-x-12">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href; // Assuming `location` is available from wouter
            return (
              <Link key={link.href} href={link.href}>
                <a
                  className={cn(
                    'text-white/80 hover:text-white text-sm tracking-wider uppercase transition-colors duration-300 relative group py-2 font-heading',
                    isActive && 'text-white border-b-2 border-white'
                  )}
                >
                  {link.label}
                  {!isActive && (
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                  )}
                </a>
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            asChild
            variant="white"
            size="default"
            className="hover:scale-105 transition-all duration-300"
          >
            <Link href="/book">
              <a className="tracking-wider text-sm font-medium">Book Service</a>
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-10 w-10 text-white hover:bg-white/10"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[80%] sm:w-[350px] bg-black/95 backdrop-blur-lg border-l border-white/10"
          >
            <nav className="flex flex-col space-y-8 mt-10">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link href={link.href}>
                    <a className="text-white/80 hover:text-white text-lg tracking-wider uppercase transition-colors duration-300 font-heading">
                      {link.label}
                    </a>
                  </Link>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Link href="/book">
                  <Button
                    variant="white"
                    size="lg"
                    className="w-full mt-4 transition-all duration-300"
                  >
                    Book Service
                  </Button>
                </Link>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
