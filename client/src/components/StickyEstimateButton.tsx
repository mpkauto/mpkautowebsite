import { useState } from "react";
import { motion } from "framer-motion";
import { EstimateModal } from "@/components/EstimateModal";

export function StickyEstimateButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <motion.button
        onClick={handleButtonClick}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        aria-label="Book Your AC Estimate"
      >
        ⚡ Book Your AC Estimate
      </motion.button>

      {/* Estimate Modal */}
      <EstimateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
} 