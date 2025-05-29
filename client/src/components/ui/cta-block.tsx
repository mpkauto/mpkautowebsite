import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import React from "react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

interface CTABlockProps {
  title: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
  priceAmount?: string;
  priceLabel?: string;
  features?: string[];
  useGradient?: boolean;
  tag?: string;
}

export function CTABlock({
  title,
  description,
  buttonText,
  buttonLink,
  priceAmount,
  priceLabel,
  features = [],
  useGradient = true,
  tag,
}: CTABlockProps) {
  return (
    <section className={`py-20 px-6 md:px-12 relative overflow-hidden ${useGradient ? 'bg-gradient-to-br from-graphite to-black' : 'bg-black'}`}>
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
              {title}
            </h2>
            
            {description && (
              <p className="text-base text-gray-300 mb-6 leading-relaxed">
                {description}
              </p>
            )}
            
            {features.length > 0 && (
              <div className="space-y-4 mb-8">
                <ScrollAnimation variant="fadeUp" delay={0.2}>
                  <ul className="list-disc pl-8">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start mb-4 last:mb-0">
                        <CheckCircle className="h-5 w-5 text-gray-300 mr-3 flex-shrink-0" />
                        <span className="text-base text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollAnimation>
              </div>
            )}
            
            <Link href={buttonLink}>
              <Button 
                variant="default"
                size="default"
                className="font-semibold tracking-widest uppercase group"
                aria-label={buttonText}
              >
                {buttonText.toUpperCase()}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          
          {priceAmount && (
            <div className="flex-1 md:flex items-center justify-center">
              <motion.div 
                className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 shadow-md relative overflow-hidden"
                whileHover={{ scale: 1.03, borderColor: "rgba(255, 255, 255, 0.3)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="text-center">
                  <h3 className="text-2xl font-medium mb-6 text-white">Special Offer</h3>
                  
                  <div className="relative mb-6">
                    <div className="relative bg-black/70 p-4 rounded-lg border border-white/20">
                      <div className="text-white text-5xl md:text-6xl font-bold tracking-tight mb-1">
                        {priceAmount}
                      </div>
                      {priceLabel && 
                        <p className="text-base text-gray-300 uppercase tracking-widest px-3 py-1 rounded-full inline-block">
                          {priceLabel}
                        </p>
                      }
                    </div>
                  </div>
                  
                  <Link href={buttonLink}>
                    <Button 
                      variant="default"
                      size="default"
                      className="font-semibold w-full mt-4 tracking-widest uppercase"
                      aria-label={buttonText}
                    >
                      {buttonText.toUpperCase()}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          )}
        </div>

        <ScrollAnimation variant="fadeUp" delay={0.4}>
          <div className="text-center md:text-left">
            <p className="text-base text-gray-300 uppercase tracking-widest px-3 py-1 rounded-full inline-block">
              {tag}
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}