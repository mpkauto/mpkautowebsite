import React from 'react';
import { Helmet } from 'react-helmet';
import { Navbar } from './navbar';
import { Link } from 'wouter';
import { Toaster } from '../src/components/ui/toaster';
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import Particles from 'react-tsparticles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim'; // loads tsparticles-slim
import { StickyEstimateButton } from '../src/components/StickyEstimateButton';
import Footer from '../src/components/layout/Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export function Layout({
  children,
  title = 'MPK Auto Service - Professional Auto Repair Services',
  description = 'Expert auto repair and maintenance services. Book your appointment today for professional car care.',
}: LayoutProps) {
  return (
    <div className="bg-black text-white min-h-screen font-sans" style={{ overflowX: 'hidden' }}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Google Fonts link removed to use local fonts */}
      </Helmet>
      <Navbar />
      {/* Add the Particles background component */}
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: { value: '#000000' },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: { default: 'bounce' },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        init={async (engine: Engine) => {
          await loadSlim(engine);
        }}
        className="absolute inset-0 z-0"
      />
      <main className="flex-grow max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10">
        {children}
      </main>
      <StickyEstimateButton />
      <Footer />

      {/* Mini CTA above Footer */}
      <div className="bg-[#739bd4] text-white py-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-center md:text-left">
            Ready for a Cooler Ride?
          </h3>
          <Link
            href="/book"
            className="inline-flex items-center text-white bg-white bg-opacity-20 px-6 py-3 rounded-full font-semibold hover:bg-opacity-30 transition-all duration-300"
          >
            Book Your Free AC Checkup
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      <footer className="bg-[#F9FAFB] py-12 md:py-16 px-4 sm:px-6 md:px-8 text-gray-700 text-sm">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
          {/* Company Info */}
          <div className="col-span-full md:col-span-1">
            <h4 className="font-semibold text-gray-900 mb-4 text-base">MPK Auto Service</h4>
            <p className="mb-4">Expert auto AC repair and maintenance services in Chennai.</p>
            <div className="flex items-center text-gray-700 mb-2">
              <MapPin className="h-4 w-4 mr-2 text-[#739bd4]" />
              <span>
                No:112, Metro Star City, 1st Main Road, Manikandan Nagar, Kundratur, Chennai - 69
              </span>
            </div>
            <div className="flex items-center text-gray-700 mb-2">
              <Phone className="h-4 w-4 mr-2 text-[#739bd4]" />
              <span>+91 73388 38287</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Mail className="h-4 w-4 mr-2 text-[#739bd4]" />
              <span>info@mpkautoservice.com</span> {/* Replace with actual email */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-base">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-gray-900 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-900 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-gray-900 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gray-900 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-base">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#diagnostics"
                  className="hover:text-gray-900 transition-colors"
                >
                  Diagnostics
                </Link>
              </li>
              <li>
                <Link href="/services#repair" className="hover:text-gray-900 transition-colors">
                  Repair
                </Link>
              </li>
              <li>
                <Link
                  href="/services#maintenance"
                  className="hover:text-gray-900 transition-colors"
                >
                  Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services#recharging" className="hover:text-gray-900 transition-colors">
                  Recharging
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-base">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600 text-xs">
          &copy; {new Date().getFullYear()} MPK Auto Service. All rights reserved.
        </div>
      </footer>

      {/* Fixed bottom sticky CTA for mobile */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] z-50 sm:hidden">
        <Link href="/book">
          <button className="w-full bg-white text-black font-bold uppercase h-12 px-6 rounded-md shadow-lg hover:scale-[1.02] transition-transform duration-200">
            Book a Service
          </button>
        </Link>
      </div>

      <Toaster />
    </div>
  );
}
