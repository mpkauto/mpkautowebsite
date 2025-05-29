import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Clock, Users } from 'lucide-react';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { motion } from 'framer-motion';
import CountUp from 'react-countup'; // Added import
import { useInView } from 'react-intersection-observer'; // Added import

export default function AboutSection() {
  const features = [
    {
      icon: <Clock className="h-6 w-6 text-[#9B9B9B]" />,
      title: '15+ Years Experience',
      description: 'Serving the community with expert automotive AC services since 2008.',
    },
    {
      icon: <Award className="h-6 w-6 text-[#9B9B9B]" />,
      title: 'Certified Technicians',
      description:
        'Our team is fully certified and continuously trained on the latest AC technologies.',
    },
    {
      icon: <Users className="h-6 w-6 text-[#9B9B9B]" />,
      title: '2,500+ Happy Customers',
      description: 'Join thousands of satisfied customers who trust us with their vehicle comfort.',
    },
  ];

  // Enhanced container animation for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  // Enhanced individual item animation with slide-in effect
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  // Added for CountUp animations
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Background gradient blob */}
      <div className="absolute -top-[30%] -right-[20%] w-[70%] h-[70%] rounded-full bg-primary/5 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Left column - image with gradient border */}
            <ScrollAnimation variant="fadeUp">
              <div className="relative rounded-2xl overflow-hidden gradient-border">
                <img
                  src="https://images.unsplash.com/photo-1613214149922-f1809c99b414?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="MPK Auto Service Workshop"
                  className="w-full h-auto rounded-xl shadow-lg object-cover aspect-[16/9]"
                  loading="lazy"
                />

                {/* Stats overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 to-background/20 p-6 backdrop-blur-sm"
                  ref={ref}
                >
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl md:text-3xl font-bold text-primary">
                        {inView ? <CountUp end={15} duration={2.5} suffix="+" /> : '0'}
                      </p>
                      <p className="text-sm text-foreground">Years</p>
                    </div>
                    <div>
                      <p className="text-2xl md:text-3xl font-bold text-primary">
                        {inView ? (
                          <CountUp end={2.5} duration={2.5} suffix="K+" decimals={1} />
                        ) : (
                          '0'
                        )}
                      </p>
                      <p className="text-sm text-foreground">Customers</p>
                    </div>
                    <div>
                      <p className="text-2xl md:text-3xl font-bold text-primary">
                        {inView ? <CountUp end={4.9} duration={2.5} decimals={1} /> : '0'}
                      </p>
                      <p className="text-sm text-foreground">Rating</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <div>
            {/* Right column - text and features */}
            <ScrollAnimation variant="fadeUp">
              <div className="flex items-center mb-5">
                <div className="h-0.5 w-12 bg-primary mr-4"></div>
                <span className="text-primary font-medium uppercase tracking-wider text-sm">
                  About MPK
                </span>
              </div>

              <h2 className="text-platinum font-heading text-4xl tracking-tight mb-6">
                About MPK Auto Service
              </h2>

              <p className="font-body text-muted-foreground text-lg mb-8 leading-relaxed">
                With over 15 years of experience, our certified technicians provide expert auto air
                conditioning services for all makes and models.
              </p>

              <motion.div
                className="grid grid-cols-1 gap-6 mb-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    variants={itemVariants}
                    custom={index}
                  >
                    <div className="bg-primary/5 rounded-xl p-4 mr-6">{feature.icon}</div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <div className="cursor-pointer">
                <Button
                  variant="outline"
                  className="transition-all duration-300 ease-in-out group"
                  onClick={() => {
                    window.location.href = '/about';
                  }}
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
