import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface SymptomsCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

export function SymptomsCard({ title, description, icon, href }: SymptomsCardProps) {
  return (
    <a href={href} className="block no-underline">
      <motion.div 
        className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-md transition-all duration-300 group cursor-pointer relative overflow-hidden hover:border-brand-accent/50 hover:shadow-lg hover:shadow-brand-accent/20"
        whileHover={{ 
          scale: 1.03,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 20 
        }}
      >
        <div className="relative z-10">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-metallic/10 rounded-full mr-4 group-hover:bg-metallic/20 transition-colors duration-300">
              {icon}
            </div>
            <h3 className="text-2xl font-medium text-white mb-6">{title}</h3>
          </div>
          
          <p className="text-base text-gray-300 mb-4">{description}</p>
          
          <div className="flex items-center text-gray-300 text-base font-medium mt-auto hover:text-brand-accent transition-colors duration-300">
            Learn more
            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </motion.div>
    </a>
  );
}