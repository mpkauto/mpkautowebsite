import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
// Add this import at the top of the file
import CountUp from 'react-countup';

export default function CTABanner() {
  // Define animation variants for staggered children
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      viewport={{ once: true }}
    >
      <section className="py-16 md:py-24 bg-gradient-to-br from-graphite to-black relative overflow-hidden">
        {/* Optional background image with reduced opacity */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          }}
        ></div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-metallic/20 z-0"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-metallic/20 z-0"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="flex flex-col md:flex-row items-center gap-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className="flex-1" variants={itemVariants}>
                <div className="flex items-center mb-6">
                  <Calendar className="h-6 w-6 text-frost mr-3" />
                  <span className="text-frost font-medium uppercase tracking-wider text-sm">
                    Schedule Now
                  </span>
                </div>

                <h2 className="text-platinum font-heading text-2xl mb-6 leading-tight">
                  Summer's Coming — Book Your AC Check Now
                </h2>

                <p className="text-metallic font-body text-lg mb-8 leading-relaxed">
                  Don't wait until the heat hits. Schedule your preventative AC check today and stay
                  cool all season long.
                </p>

                <motion.div className="space-y-4 mb-8" variants={itemVariants}>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Same-day appointments available</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Complete system inspection included
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Certified technicians with 15+ years experience
                    </span>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <div className="cursor-pointer">
                    <Button
                      className="bg-frost text-black font-body font-semibold px-6 py-3 rounded-md hover:brightness-110 transition"
                      onClick={() => {
                        window.location.href = '/booking';
                      }}
                    >
                      Book Your AC Check
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex-1 md:flex items-center justify-center hidden"
                variants={itemVariants}
              >
                <div className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-metallic/20 shadow-xl">
                  <div className="text-center">
                    <h3 className="text-platinum font-heading text-2xl mb-4">Seasonal Special</h3>
                    <div className="text-white text-4xl font-heading font-bold tracking-tight mb-2">
                      <CountUp end={59} duration={2.5} prefix="$" />
                    </div>
                    <p className="bg-white/10 text-[#D4D4D4] text-xs uppercase px-2 py-1 rounded-full inline-block mb-4">
                      Limited Time Offer
                    </p>
                    <p className="text-metallic mb-6">Full AC inspection and performance test</p>
                    <div className="border-t border-border/30 pt-4 pb-2">
                      <p className="text-foreground text-sm mb-2 flex justify-center items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Refrigerant level check
                      </p>
                      <p className="text-foreground text-sm mb-2 flex justify-center items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        System pressure testing
                      </p>
                      <p className="text-foreground text-sm mb-2 flex justify-center items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Vent temperature analysis
                      </p>
                    </div>

                    {/* Added Secondary CTA Button */}
                    <Link href="/services/ac-inspection">
                      <Button className="bg-frost text-black font-body font-semibold px-6 py-3 rounded-md hover:brightness-110 transition w-full mt-4">
                        Learn More
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
