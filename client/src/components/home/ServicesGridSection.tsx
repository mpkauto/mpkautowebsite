import {
  Wind,
  Wrench,
  Fan,
  Gauge,
  Droplets,
  Settings,
  ChevronRight,
  Hammer,
  Stethoscope,
  ClipboardCheck,
  ArrowRight,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function ServicesGridSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Services', icon: <Settings className="w-5 h-5" /> },
    { id: 'maintenance', label: 'Maintenance', icon: <Wrench className="w-5 h-5" /> },
    { id: 'repair', label: 'Repair', icon: <Hammer className="w-5 h-5" /> },
    { id: 'diagnostic', label: 'Diagnostic', icon: <Stethoscope className="w-5 h-5" /> },
  ];

  const services = [
    {
      title: 'AC Installation',
      description:
        'Professional installation of new air conditioning systems for all vehicle makes and models.',
      shortDescription: 'Complete system setup',
      category: 'maintenance',
      image: '/images/ac-installation.webp',
      link: '/services/ac-installation',
      icon: <Wind className="w-6 h-6" />,
    },
    {
      title: 'AC Repair',
      description:
        'Expert repair services to fix leaks, compressor issues, and restore optimal cooling performance.',
      shortDescription: 'Quick fixes for all AC issues',
      category: 'repair',
      image: '/images/ac-repair.webp',
      link: '/services/ac-repair',
      icon: <Wrench className="w-6 h-6" />,
    },
    {
      title: 'Duct Cleaning',
      description:
        'Thorough cleaning of ventilation ducts to improve air quality and system efficiency.',
      shortDescription: 'Deep cleaning for air quality',
      category: 'maintenance',
      image: '/images/duct-cleaning.webp',
      link: '/services/duct-cleaning',
      icon: <Fan className="w-6 h-6" />,
    },
    {
      title: 'Diagnostics',
      description:
        'Comprehensive system diagnostics to identify issues and recommend appropriate solutions.',
      shortDescription: 'Advanced system analysis',
      category: 'diagnostic',
      image: '/images/diagnostics.webp',
      link: '/services/diagnostics',
      icon: <Gauge className="w-6 h-6" />,
    },
    {
      title: 'Refrigerant Service',
      description:
        'Professional refrigerant recharge and leak detection services to restore cooling performance.',
      shortDescription: 'Optimal refrigerant levels',
      category: 'maintenance',
      image: '/images/refrigerant-service.webp',
      link: '/services/refrigerant',
      icon: <Droplets className="w-6 h-6" />,
    },
    {
      title: 'System Maintenance',
      description:
        "Regular maintenance services to prevent issues and extend your AC system's lifespan.",
      shortDescription: 'Preventive care & optimization',
      category: 'maintenance',
      image: '/images/system-maintenance.webp',
      link: '/services/maintenance',
      icon: <ClipboardCheck className="w-6 h-6" />,
    },
  ];

  // Filter services based on selected category
  const filteredServices = services.filter((service) => {
    if (activeCategory === 'all') return true;
    return service.category.toLowerCase() === activeCategory;
  });

  // Container animation for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Individual card animation
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="py-20 md:py-28 bg-black text-white">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="h-0.5 w-12 bg-[#739bd4] mr-4"></div>
            <span className="text-[#739bd4] font-medium uppercase tracking-wider text-sm">
              Our Services
            </span>
            <div className="h-0.5 w-12 bg-[#739bd4] ml-4"></div>
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-white mb-6">
            Complete Auto AC Solutions
          </h2>
          <p className="text-base text-gray-300 leading-relaxed max-w-2xl mx-auto mb-6">
            Professional services to keep your vehicle's climate control system running at peak
            performance.
          </p>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2
                  ${
                    activeCategory === category.id
                      ? 'bg-[#739bd4] text-white shadow-lg shadow-[#739bd4]/20'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
              >
                {category.icon}
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-gray-900/50 rounded-2xl overflow-hidden border border-white/5 hover:border-[#739bd4]/20 transition-all duration-300"
            >
              <Link href={service.link} className="block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 p-2 bg-gray-900/80 rounded-lg backdrop-blur-sm">
                    {service.icon}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-medium text-white mb-2">{service.title}</h3>
                  <p className="text-base text-gray-300 mb-6">{service.shortDescription}</p>

                  <Button
                    variant="ghost"
                    className="w-full justify-between text-brand-contrastText hover:text-brand-accent hover:bg-white/5 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </Link>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-[#739bd4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              {/* Hover lift effect */}
              <div className="absolute inset-0 -translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-[#739bd4]/10 to-transparent blur-xl"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
