import { Wrench, Thermometer, Droplets, Gauge, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function ServicesSection() {
  const services = [
    {
      icon: <Thermometer className="text-brand-contrastText text-4xl mb-4" strokeWidth={1.5} />,
      title: 'AC Installation',
      description:
        'Professional installation of new AC systems with precise fitting and optimal performance setup.',
      slug: 'ac-installation',
    },
    {
      icon: <Wrench className="text-brand-contrastText text-4xl mb-4" strokeWidth={1.5} />,
      title: 'AC Repair & Maintenance',
      description:
        'Complete repair services for all vehicle AC systems with quality parts and warranty.',
      slug: 'ac-repair-maintenance',
    },
    {
      icon: <Droplets className="text-brand-contrastText text-4xl mb-4" strokeWidth={1.5} />,
      title: 'Duct Cleaning',
      description:
        'Thorough cleaning of ventilation ducts to improve air quality and system efficiency.',
      slug: 'duct-cleaning',
    },
    {
      icon: <Gauge className="text-brand-contrastText text-4xl mb-4" strokeWidth={1.5} />,
      title: 'System Diagnostics',
      description:
        'Advanced diagnostic services to identify issues and provide accurate solutions.',
      slug: 'system-diagnostics',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      viewport={{ once: true }}
    >
      <section className="bg-grayDark text-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section label */}
          <div className="text-center space-y-6">
            <p className="text-sm uppercase tracking-wide text-primary mb-2">Our Services</p>

            <h2 className="text-4xl font-semibold tracking-tight mb-6">Premium Auto AC Services</h2>
          </div>

          {/* Services grid - already has staggered animations */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 space-y-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((service, index) => (
              <Link key={index} href={`/services/${service.slug}`}>
                <motion.div
                  variants={itemVariants}
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  className="flex flex-col h-full bg-graySoft p-6 rounded-xl border border-transparent shadow-md transition-all duration-300 group cursor-pointer overflow-hidden relative hover:border-brand-accent/50 hover:shadow-lg hover:shadow-brand-accent/20"
                >
                  <div className="relative z-10 flex justify-center w-full">{service.icon}</div>

                  <h3 className="relative z-10 text-2xl font-medium text-white mt-4 text-center">
                    {service.title}
                  </h3>

                  <p className="relative z-10 text-base text-brand-contrastText mt-2 leading-relaxed flex-grow text-center">
                    {service.description}
                  </p>

                  <div className="relative z-10 mt-auto text-base text-brand-contrastText group-hover:underline opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-1 pt-4 hover:text-brand-accent">
                    Learn More{' '}
                    <ChevronRight
                      size={16}
                      className="transform group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="text-center mt-8 md:mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Link href="/services">
              <Button
                variant="default"
                size="lg"
                className="w-full sm:w-auto font-medium hover:scale-105 active:scale-95 transition-all duration-300 text-sm sm:text-base"
              >
                Explore All Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
