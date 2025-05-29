import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardGridAnimationProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  initialY?: number;
  duration?: number;
  delay?: number;
}

export function CardGridAnimation({
  children,
  className,
  staggerDelay = 0.1,
  initialY = 30,
  duration = 0.5,
  delay = 0.1,
}: CardGridAnimationProps) {
  // Container animation for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      }
    }
  };
  
  // Individual card animation
  const itemVariants = {
    hidden: { opacity: 0, y: initialY },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: duration, 
        ease: "easeOut" 
      } 
    }
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children instanceof Array
        ? children.map((child, index) => (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}

export function CardAnimation({
  children,
  className,
  initialY = 30,
  duration = 0.5,
  delay = 0.1,
}: Omit<CardGridAnimationProps, 'staggerDelay'>) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: initialY }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: duration, ease: 'easeOut', delay: delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}