import { motion } from "framer-motion";
import HeroSection from "@/components/home/HeroSection";
import ValuePropositionSection from "@/components/home/ValuePropositionSection";
import MainCTASection from "@/components/home/MainCTASection";
import StatsSection from "@/components/home/StatsSection";

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <ValuePropositionSection />
      <StatsSection />
      <MainCTASection />
    </motion.div>
  );
} 