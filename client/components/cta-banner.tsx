import React from "react";
import { motion } from "framer-motion";
import { Button } from "../src/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  const headingText = "Summer's Coming – Get Your AC Checked Today.";
  const primaryCtaText = "Book an Appointment";
  const secondaryCtaText = "Learn More";

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2 
      } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <motion.section 
      className="w-full bg-black py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
      
      <div className="container mx-auto px-6 max-w-screen-lg text-center relative z-10">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-12 leading-[1.1] tracking-tight"
          variants={itemVariants}
        >
          {headingText}
        </motion.h2>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
          variants={itemVariants}
        >
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-black hover:bg-white/90 transition-all duration-300 hover:scale-105 px-8 py-6 text-sm tracking-wider uppercase font-medium w-full sm:w-auto min-h-[3.5rem]"
          >
            <Link href="/book">{primaryCtaText}</Link>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            className="border border-white/20 text-white hover:bg-white/10 transition-all duration-300 px-8 py-6 text-sm tracking-wider uppercase font-medium w-full sm:w-auto min-h-[3.5rem] group"
          >
            <Link href="/services" className="flex items-center gap-2">
              {secondaryCtaText}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
