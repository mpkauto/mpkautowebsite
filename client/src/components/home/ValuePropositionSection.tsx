import { motion } from "framer-motion";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Shield, Clock, DollarSign, Wrench, Users, Star } from "lucide-react";

export default function ValuePropositionSection() {
  const valueProps = [
    {
      icon: <Shield className="h-8 w-8 text-brand-accent" />,
      title: "Quality Guaranteed",
      description: "All our services come with a satisfaction guarantee and warranty on parts and labor.",
      stats: "100% Satisfaction"
    },
    {
      icon: <Clock className="h-8 w-8 text-brand-accent" />,
      title: "Quick Service",
      description: "Most repairs completed within 2-3 hours. We value your time as much as you do.",
      stats: "2-3 Hours Average"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-brand-accent" />,
      title: "Fair Pricing",
      description: "Transparent pricing with no hidden fees. Get a detailed quote before we start.",
      stats: "No Hidden Costs"
    },
    {
      icon: <Wrench className="h-8 w-8 text-brand-accent" />,
      title: "Expert Technicians",
      description: "Factory-trained specialists with years of experience in all vehicle makes.",
      stats: "15+ Years Experience"
    },
    {
      icon: <Users className="h-8 w-8 text-brand-accent" />,
      title: "Customer First",
      description: "Personalized service and clear communication throughout the repair process.",
      stats: "2500+ Happy Customers"
    },
    {
      icon: <Star className="h-8 w-8 text-brand-accent" />,
      title: "Premium Service",
      description: "Using only genuine parts and following manufacturer specifications.",
      stats: "Genuine Parts"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#0B0B0C] opacity-90"></div>
      
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <ScrollAnimation variant="fadeUp" className="text-center mb-12">
          <div className="flex items-center justify-center mb-5">
            <div className="h-0.5 w-12 bg-[#739bd4] mr-4"></div>
            <span className="text-[#739bd4] font-medium uppercase tracking-wider text-sm">Why Choose Us</span>
            <div className="h-0.5 w-12 bg-[#739bd4] ml-4"></div>
          </div>
          
          <h2 className="text-4xl font-semibold tracking-tight text-white mb-6">
            Your Trusted Auto AC Partner
          </h2>
          <p className="text-base text-brand-contrastText max-w-2xl mx-auto mb-6">
            Experience premium auto AC service backed by expertise, transparency, and customer satisfaction.
          </p>
        </ScrollAnimation>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-brand-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/20"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-accent/10 rounded-lg group-hover:bg-brand-accent/20 transition-colors duration-300">
                  {prop.icon}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">{prop.title}</h3>
                  <p className="text-base text-brand-contrastText mb-4">{prop.description}</p>
                  <div className="inline-flex items-center px-3 py-1 bg-brand-accent/10 rounded-full">
                    <span className="text-sm font-medium text-brand-accent">{prop.stats}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}