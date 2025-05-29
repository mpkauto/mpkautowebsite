import { BadgeCheck, Truck, ReceiptText, Timer, Award, DollarSign, ChevronRight, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Link } from "wouter";

export default function WhyChooseSection() {
  const features = [
    {
      icon: <BadgeCheck className="text-white w-8 h-8" strokeWidth={1.5} />,
      title: "Certified Technicians",
      description: "Factory-trained specialists with years of experience in luxury vehicles.",
      image: "https://images.unsplash.com/photo-1628925367903-e33998c12090?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/about",
      stats: {
        value: "15+",
        label: "Years Experience",
        color: "bg-emerald-500/20 text-emerald-400"
      }
    },
    {
      icon: <Truck className="text-white w-8 h-8" strokeWidth={1.5} />,
      title: "Doorstep Service",
      description: "Convenient auto AC repairs at your home or office location.",
      image: "https://images.unsplash.com/photo-1584934542987-c805f7c03449?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/services/doorstep",
      stats: {
        value: "2500+",
        label: "Happy Customers",
        color: "bg-blue-500/20 text-blue-400"
      }
    },
    {
      icon: <ReceiptText className="text-white w-8 h-8" strokeWidth={1.5} />,
      title: "Transparent Pricing",
      description: "No hidden fees or surprises - clear pricing before work begins.",
      image: "https://images.unsplash.com/photo-1584213267914-b69be9266d58?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/pricing",
      stats: {
        value: "100%",
        label: "Satisfaction",
        color: "bg-purple-500/20 text-purple-400"
      }
    },
    {
      icon: <Timer className="text-white w-8 h-8" strokeWidth={1.5} />,
      title: "Fast Turnaround",
      description: "Same-day service for most repairs to get you back on the road quickly.",
      image: "https://images.unsplash.com/photo-1594101724748-c32a81ab5960?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/services/fast-turnaround",
      stats: {
        value: "24/7",
        label: "Support",
        color: "bg-amber-500/20 text-amber-400"
      }
    }
  ];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 md:py-28 bg-black text-white px-4 sm:px-6 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <ScrollAnimation 
          variant="fadeUp" 
          className="text-center mb-12"
          duration={0.6}
        >
          <div className="flex items-center justify-center mb-5">
            <div className="h-0.5 w-12 bg-[#739bd4] mr-4"></div>
            <span className="text-[#739bd4] font-medium uppercase tracking-wider text-sm">Why Choose MPK</span>
            <div className="h-0.5 w-12 bg-[#739bd4] ml-4"></div>
          </div>
          
          <h2 className="text-4xl font-semibold tracking-tight text-white mb-6">
            Expert Auto AC Service
          </h2>
          <p className="text-base text-brand-contrastText leading-relaxed max-w-2xl mx-auto mb-6">
            Experience premium auto AC service backed by years of expertise and thousands of satisfied customers.
          </p>
        </ScrollAnimation>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          layout
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02] border border-white/10 hover:border-brand-accent/50 hover:shadow-brand-accent/20"
              layout
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90 z-10"></div>
              <img 
                src={feature.image}
                alt={feature.title}
                className="absolute inset-0 w-full h-full object-cover opacity-50"
                loading="lazy"
              />
              <div className="relative z-20 p-6 flex flex-col h-full">
                <div className="mb-4 bg-white/10 p-3 rounded-lg inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-medium text-white mb-6">
                  {feature.title}
                </h3>
                <p className="text-base text-brand-contrastText mb-6 flex-grow">
                  {feature.description}
                </p>
                <div className={`${feature.stats.color} px-4 py-2 rounded-lg inline-flex items-center gap-2 mb-4`}>
                  <span className="font-bold text-lg">{feature.stats.value}</span>
                  <span className="text-sm">{feature.stats.label}</span>
                </div>
                <Link href={feature.link}>
                  <div className="flex items-center text-base text-brand-contrastText hover:text-brand-accent transition-colors duration-200">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}