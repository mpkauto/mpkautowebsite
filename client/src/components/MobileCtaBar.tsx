import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function MobileCtaBar() {
  const handleNavigation = () => {
    // Use window.location.href for full page navigation
    window.location.href = "/booking";
  };

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-50 block sm:hidden bg-primary text-white shadow-[0_-2px_16px_rgba(0,0,0,0.08)] px-4 py-3 items-center justify-center"
    >
      <Link href="/booking">
        <Button 
          variant="primary"
          onClick={handleNavigation}
          className="w-full !mt-0"
          aria-label="Book a service appointment"
        >
          Book Now
          <ArrowRight className="h-5 w-5" />
        </Button>
      </Link>
    </motion.div>
  );
}