import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const heroRef = useRef(null);
  
  // We no longer need loadSpline or prefersReducedMotion state for video background
  // const [loadSpline, setLoadSpline] = useState(false);
  // const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // useEffect(() => {
  //   // Check for prefers-reduced-motion on mount
  //   const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  //   setPrefersReducedMotion(mediaQuery.matches);

  //   // Listen for changes in prefers-reduced-motion
  //   const handleChange = (e: MediaQueryListEvent) => {
  //     setPrefersReducedMotion(e.matches);
  //   };
  //   mediaQuery.addEventListener('change', handleChange);

  //   // Observer to load Spline when hero is in view
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setLoadSpline(true);
  //         observer.unobserve(entry.target);
  //       }
  //     },
  //     { threshold: 0.1 } // Adjust threshold as needed
  //   );

  //   if (heroRef.current) {
  //     observer.observe(heroRef.current);
  //   }

  //   return () => {
  //     // Clean up observer and media query listener
  //     if (heroRef.current) {
  //       observer.unobserve(heroRef.current);
  //     }
  //     mediaQuery.removeEventListener('change', handleChange);
  //   };
  // }, []);

  const handleNavigation = (href: string) => {
    window.location.href = href;
  };

  // Animation variants for content
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Fallback background style (using previous hero image as placeholder)
  // const fallbackBackgroundStyle = {
  //   backgroundImage: 'url(/images/ac-dashboard.jpg)', // Replace with a better fallback
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  // };

  return (
    <section 
      ref={heroRef}
      className="relative h-screen overflow-hidden flex items-center justify-center text-white"
      // style={(!loadSpline || prefersReducedMotion) ? fallbackBackgroundStyle : {}}
    >
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero-background.webm" type="video/webm" />
        {/* Add other formats like MP4 here if available */}
        {/* <source src="/videos/hero-background.mp4" type="video/mp4" /> */}
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
            <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerVariants}
        >
          {/* Tagline */}
            <motion.p
             className="text-white/80 tracking-widest uppercase text-sm mb-4 font-light"
             variants={contentVariants}
            >
              Experience Driving in Total Comfort.
            </motion.p>
            
            <motion.h1 
            className="text-5xl font-medium tracking-tight mb-6 text-white"
            variants={contentVariants}
            >
            Drive in <span>Comfort</span>. <br className="sm:hidden" />
            Backed by <span>Precision</span>.
            </motion.h1>
            
            <motion.p 
            className="text-base text-brand-contrastText mb-6 max-w-md leading-relaxed mx-auto"
            variants={contentVariants}
            >
              Expert automotive climate control solutions with industry-leading diagnostics and premium repairs for all vehicle makes and models.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
            className="flex flex-col sm:flex-row gap-4 mt-8 justify-center"
            variants={staggerVariants}
          >
             <motion.div variants={contentVariants}> {/* Wrap buttons in motion.div for staggering */}
                <Button 
                  variant="default"
                  size="lg"
                  shape="circle"
                  onClick={() => handleNavigation("/booking")}
                  aria-label="Book a service appointment"
                  className="shadow-lg hover:scale-105 hover:ring-2 hover:ring-brand-secondary transition-all duration-300"
                >
                  ⚡ Book a Service
                </Button>
             </motion.div>
             <motion.div variants={contentVariants}> {/* Wrap buttons in motion.div for staggering */}
                <Button 
                  variant="default"
                  size="lg"
                  shape="circle"
                  onClick={() => handleNavigation("/symptoms")}
                  aria-label="Check AC symptoms"
                  className="shadow-lg hover:scale-105 hover:ring-2 hover:ring-brand-secondary transition-all duration-300 group"
                >
                  ⚡ Check AC Symptoms
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Optional: Semi-transparent overlay for better text contrast if needed */}
      {/* <div className="absolute inset-0 z-0 bg-black/50"></div> */}

    </section>
  );
}
