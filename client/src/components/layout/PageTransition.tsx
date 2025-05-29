import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  location: string;
}

export default function PageTransition({ children, location }: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ 
          duration: 0.15,
          ease: "easeInOut"
        }}
        className="w-full relative"
      >
        {/* Add pattern accent to page transitions */}
        <div className="absolute w-64 h-64 bg-[url('/images/airflow-pattern.svg')] opacity-5 blur-xl z-[-1] top-0 right-0 transform rotate-12 pointer-events-none"></div>
        
        {children}
      </motion.div>
    </AnimatePresence>
  );
}