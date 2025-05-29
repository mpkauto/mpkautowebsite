import React from "react";
import { motion } from "framer-motion";
import { Button } from "../src/components/ui/button";
import { Link } from "wouter";

export function Hero() {
  return (
    <section className="relative h-[90vh] bg-cover bg-center flex justify-center items-center text-center" style={{ backgroundImage: "url('/images/hero-bg.webp')" }}>
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/10"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-full sm:max-w-3xl mx-auto"
        >
          <motion.h1 
            className="text-white text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Drive in Comfort.  
            <br className="hidden md:block" />
            Backed by Precision.
          </motion.h1>
          
          <motion.p 
            className="mt-4 text-white/90 text-lg md:text-xl max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Climate control solutions with precision diagnostics & on-demand repair.
          </motion.p>
          
          <motion.div 
            className="mt-6 flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <a href="#booking" className="inline-flex items-center px-6 py-3 bg-white text-black font-semibold rounded-md shadow hover:bg-gray-100 h-12 hover:scale-[1.03] transition-transform">
              Book a Service
            </a>
            {/* Optional secondary button - uncomment and style if needed */}
            {/* <a href="#learn-more" className="ml-4 underline text-white/80 hover:text-white text-sm">
              Learn More →
            </a> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}