import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Tag, Truck, Clock } from "lucide-react";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";

export default function PromotionalBanner() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const handleNavigation = () => {
    // Use window.location.href for full page navigation
    window.location.href = "/booking";
  };

  // Animation variants for the left content (form area)
  const formVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Animation variants for the right content (image area)
  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } },
  };

  // Animation for the special price badge
  const badgeVariants = {
    initial: { scale: 0.9, opacity: 0.8 },
    animate: {
      scale: [0.9, 1.05, 0.95, 1],
      opacity: 1,
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="relative py-20 overflow-hidden bg-gradient-to-br from-[#003366] to-[#001122] text-white">
      <div className="container mx-auto px-6 py-24 max-w-7xl">
        <div className="grid md:grid-cols-2 items-center gap-12">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={formVariants}
          >
            <h2 className="text-4xl font-semibold text-white mb-6">
              Drive in Comfort.<br />
              <span>Backed by Precision.</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate={controls}
            variants={imageVariants}
            className="mt-12 md:mt-0 flex justify-center md:justify-end"
          >
            {/* Image container with overlay */}
            <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden shadow-2xl">
              {/* Dark overlay for better text legibility */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/20 z-10"></div>
              <img 
                src="/images/estimate-promo.webp"
                alt="Car AC Service Promotion"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}