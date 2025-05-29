import { motion } from 'framer-motion';
import { CheckCircle, Calendar, Wrench, ThumbsUp } from 'lucide-react';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { useInView } from 'react-intersection-observer';

export default function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      icon: <CheckCircle className="h-12 w-12 text-brand-contrastText" />,
      title: 'Choose',
      description: "Select the service that matches your vehicle's AC needs.",
    },
    {
      number: '02',
      icon: <Calendar className="h-12 w-12 text-brand-contrastText" />,
      title: 'Book',
      description: 'Schedule an appointment at your preferred time and date.',
    },
    {
      number: '03',
      icon: <Wrench className="h-12 w-12 text-brand-contrastText" />,
      title: 'Get Quote',
      description: 'Receive a transparent quote before any work begins.',
    },
    {
      number: '04',
      icon: <ThumbsUp className="h-12 w-12 text-brand-contrastText" />,
      title: 'Done',
      description: 'Enjoy your perfectly functioning AC system.',
    },
  ];

  // Enhanced container animation for staggered children with fade-up effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Enhanced individual card animation with fade-up effect and spring physics
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
        delay: i * 0.1,
      },
    }),
  };

  // Hover animation for cards - Removed decorative box-shadow and border-color
  const hoverVariants = {
    hover: () => ({
      // Simplified custom prop as last step styling is removed
      y: -10,
      scale: 1.03,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    }),
  };

  // Use intersection observer for triggering animations
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-6 md:px-12 bg-gray-900 relative overflow-hidden">
      {' '}
      {/* Adjusted padding, removed background pattern */}
      {/* Removed Background pattern */}
      <div className="container mx-auto max-w-7xl relative z-10">
        <ScrollAnimation variant="fadeUp" className="text-center mb-12" duration={0.6}>
          {/* Section title with line decoration */}
          <div className="flex items-center justify-center mb-5">
            {' '}
            {/* Keep small separator lines */}
            <div className="h-0.5 w-12 bg-metallic mr-4"></div>
            <span className="text-brand-contrastText font-medium uppercase tracking-wider text-sm">
              Simple Process
            </span>{' '}
            {/* Adjusted text color */}
            <div className="h-0.5 w-12 bg-metallic ml-4"></div>
          </div>

          <h2 className="text-4xl font-semibold tracking-tight relative mb-6">
            {' '}
            {/* Applied H2 style and spacing, removed bold and unnecessary classes */}
            How It Works
          </h2>
          <p className="text-base text-brand-contrastText max-w-2xl mx-auto mb-6">
            {' '}
            {/* Applied P style and spacing, adjusted text color */}
            We've made getting your AC fixed simple and stress-free in just four easy steps.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative" ref={ref}>
          {steps.map((step, index) => {
            // Removed isLastStep logic as decorative styling based on it is removed
            return (
              <ScrollAnimation
                key={step.number}
                variant="fadeUp"
                delay={0.2 + index * 0.1} // Staggered delay for each step
                duration={0.7}
                className="flex flex-col h-full"
              >
                <motion.div
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-8 text-center relative overflow-hidden h-full flex flex-col shadow-md border border-white/10 transition-all duration-300 group cursor-pointer hover:border-brand-accent/50 hover:shadow-lg hover:shadow-brand-accent/20" // Simplified card styling, adjusted border/shadow hover to accent
                  variants={hoverVariants} // Keep hover variants for scale/translate animation
                  whileHover="hover"
                >
                  {/* Step number with animated entrance - Adjusted text color */}
                  <motion.div
                    className="absolute top-4 right-4 font-bold text-xl text-brand-contrastText opacity-80"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.8 }}
                    transition={{ delay: 0.4 + index * 0.15, duration: 0.4, type: 'spring' }}
                  >
                    {step.number}
                  </motion.div>
                  <motion.div
                    className="mb-6 flex justify-center bg-metallic/10 p-4 rounded-full w-20 h-20 mx-auto items-center transition-all duration-300 hover:bg-metallic/20" // Keep background and hover background
                    whileHover={{ scale: 1.1 }} // Keep icon container scale on hover
                  >
                    {step.icon}
                  </motion.div>
                  <h3 className="text-2xl font-medium mb-6 text-white">{step.title}</h3>{' '}
                  {/* Applied H3 style and spacing, adjusted text color */}
                  <p className="text-base text-brand-contrastText">{step.description}</p>{' '}
                  {/* Applied P style and text color */}
                  {/* Removed Enhanced soft accent glow for the final step */}
                </motion.div>
              </ScrollAnimation>
            );
          })}
        </div>

        {/* Animated connecting lines between steps for desktop - Keep existing lines */}
        <div className="hidden lg:block relative">
          {[1, 2, 3].map((index) => (
            <motion.div
              key={`line-${index}`}
              className="absolute top-1/2 h-0.5 bg-metallic/20 -mt-24"
              style={{
                left: `${index * 25}%`,
                right: `${100 - index * 25}%`,
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.8 + index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
