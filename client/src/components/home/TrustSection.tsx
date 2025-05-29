// Change the component name to match the file name
import { Star, StarHalf } from 'lucide-react';
import TestimonialsSlider from './TestimonialsSlider.tsx';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function TrustSection() {
  // Changed from TestimonialsSection to TrustSection
  const testimonials = [
    {
      rating: 5,
      comment:
        "The team at MPK provided exceptional service. My car's AC is now colder than ever before! Highly recommended.",
      name: 'Michael R.',
      title: 'Toyota Camry Owner',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      service: 'AC Repair',
    },
    {
      rating: 5,
      comment:
        "Fantastic experience! MPK's mobile service was incredibly convenient and saved me a trip to the shop. Quick and efficient repair.",
      name: 'Sarah L.',
      title: 'Uber Driver',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      service: 'Mobile Service',
    },
    {
      rating: 4.5,
      comment:
        'Very professional diagnostic service. They accurately identified the issue and fixed it promptly. Transparent pricing was a plus.',
      name: 'David K.',
      title: 'Honda CR-V Owner',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      service: 'System Diagnostics',
    },
    {
      rating: 5,
      comment:
        'Outstanding service from start to finish. The technician was knowledgeable and had my AC working perfectly in no time.',
      name: 'Jennifer M.',
      title: 'Nissan Altima Owner',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      service: 'AC Installation',
    },
    {
      rating: 4.5,
      comment:
        'Had a complex AC problem, and MPK handled it with expertise. Their dedication to getting the job done right was impressive.',
      name: 'Robert T.',
      title: 'Ford F-150 Owner',
      image:
        'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      service: 'Emergency Repair',
    },
    // Added a new testimonial to break repetition
    {
      rating: 5,
      comment:
        'Lifesaver! My AC went out on a trip, and MPK came to my rescue with their efficient roadside service. Back on the road comfortably.',
      name: 'Emily W.',
      title: 'Travel Blogger',
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      service: 'Roadside Service',
    },
  ];

  // Helper function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="h-5 w-5 fill-primary text-primary" />);
    }

    if (halfStar) {
      stars.push(<StarHalf key="half" className="h-5 w-5 fill-primary text-primary" />);
    }

    return stars;
  };

  // Use intersection observer to trigger CountUp
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Animation variants for stats
  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-12 bg-background relative px-4 sm:px-6 md:px-8" ref={ref}>
      {/* Decorative diagonal line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 border-t border-l border-primary/10"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 border-b border-r border-primary/10"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-6 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight relative inline-block">
            Customer Testimonials
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-primary block mt-2 rounded"></span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mt-6">
            Hear what our satisfied customers have to say about their experience with MPK Auto
            Service.
          </p>
        </div>

        {/* Testimonials */}
        <div className="bg-darker-bg p-12 rounded-2xl border border-border/20 shadow-xl">
          {/* Replace the grid with our TestimonialsSlider */}
          <TestimonialsSlider testimonials={testimonials} />

          {/* Stats row with CountUp */}
          <motion.div
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center pt-8 border-t border-border/30"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.div variants={statsVariants}>
              <p className="text-2xl font-semibold text-primary">
                {inView ? <CountUp end={2500} suffix="+" duration={2} separator="," /> : '0'}
              </p>
              <p className="text-white/70">Satisfied Customers</p>
            </motion.div>
            <motion.div variants={statsVariants}>
              <p className="text-2xl font-semibold text-primary">
                {inView ? <CountUp end={15} suffix="+" duration={2} /> : '0'}
              </p>
              <p className="text-white/70">Years Experience</p>
            </motion.div>
            <motion.div variants={statsVariants}>
              <p className="text-2xl font-semibold text-primary">
                {inView ? <CountUp end={4.9} decimals={1} duration={2} /> : '0'}
              </p>
              <p className="text-white/70">Average Rating</p>
            </motion.div>
            <motion.div variants={statsVariants}>
              <p className="text-2xl font-semibold text-primary">
                {inView ? <CountUp end={95} suffix="%" duration={2} /> : '0'}
              </p>
              <p className="text-white/70">Same-Day Repairs</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
