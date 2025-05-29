import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Car, Wrench, Zap, Building2, ChevronRight, Filter, Clock, Users, Star } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function CaseStudiesSection() {
  const [filter, setFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Cases" },
    { id: "fleet", label: "Fleet Services" },
    { id: "vintage", label: "Vintage Vehicles" },
    { id: "emergency", label: "Emergency Service" },
    { id: "commercial", label: "Commercial" }
  ];

  const caseStudies = [
    {
      icon: <Car className="h-6 w-6 text-brand-contrastText" />,
      title: "Successfully repaired AC in a fleet of Ola cabs",
      description: "Provided rapid diagnostics and repair for over 30 Ola cabs operating in Chennai, minimizing downtime and maximizing driver earnings.",
      category: "Fleet",
      brand: "Ola",
      brandLogo: "/images/ola-logo.png",
      vehicleType: "Sedan",
      tags: ["Fleet Client", "Emergency Service", "Commercial"],
      link: "/case-studies/ola-fleet-ac-repair",
      image: "/images/case-study-fleet.webp",
      stats: {
        vehicles: "30+",
        timeFrame: "48 hours",
        rating: "4.9/5"
      }
    },
    {
      icon: <Wrench className="h-6 w-6 text-brand-contrastText" />,
      title: "Restored cooling in a vintage Ambassador",
      description: "Lovingly restored the original AC unit of a classic Hindustan Ambassador, ensuring comfortable rides even in Chennai's humid climate.",
      category: "Vintage",
      brand: "Hindustan",
      brandLogo: "/images/ambassador-logo.png",
      vehicleType: "Classic",
      tags: ["Vintage", "Restoration", "Heritage"],
      link: "/case-studies/vintage-ambassador",
      image: "/images/case-study-vintage.webp",
      stats: {
        year: "1972",
        condition: "Original",
        rating: "5.0/5"
      }
    },
    {
      icon: <Building2 className="h-6 w-6 text-brand-contrastText" />,
      title: "Large vehicle AC system overhaul for a tour operator",
      description: "Performed a complete overhaul of the AC system in a large tour bus operating trips from Chennai, ensuring passenger comfort on long journeys.",
      category: "Commercial",
      brand: "Tour Bus",
      brandLogo: "/images/tour-bus-logo.png",
      vehicleType: "Bus",
      tags: ["Commercial", "Fleet Client", "System Overhaul"],
      link: "/case-studies/tour-bus",
      image: "/images/case-study-ev.webp",
      stats: {
        capacity: "45 seats",
        routes: "Long-distance",
        rating: "4.8/5"
      }
    }
  ];

  // Filter case studies based on selected filter
  const filteredCaseStudies = caseStudies.filter(study => {
    if (filter === "all") return true;
    return study.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()));
  });

  // Container animation for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };
  
  // Individual card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-20 md:py-28 bg-black text-white">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <ScrollAnimation variant="fadeUp">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="h-0.5 w-12 bg-[#739bd4] mr-4"></div>
              <span className="text-[#739bd4] font-medium uppercase tracking-wider text-sm">Case Studies</span>
              <div className="h-0.5 w-12 bg-[#739bd4] ml-4"></div>
            </div>
            
            <h2 className="text-4xl font-semibold tracking-tight text-white mb-6">
              Our Case Studies
            </h2>
            <p className="text-base text-brand-contrastText leading-relaxed max-w-2xl mx-auto mb-6">
              Real-world examples of our successful AC system solutions and improvements in Chennai.
            </p>
          </div>
        </ScrollAnimation>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setFilter(filter.id)}
              shape="circle"
              className={`px-6 py-3 text-sm font-medium transition-all duration-300 flex items-center gap-2
                ${filter.id === filter 
                  ? 'bg-[#739bd4] text-white shadow-lg shadow-[#739bd4]/20' 
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-white'}`}
            >
              {filter.label}
            </Button>
          ))}
        </div>
          
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {filteredCaseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              variants={cardVariants}
              className="group relative bg-gray-900/50 rounded-2xl overflow-hidden border border-white/5 hover:border-brand-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/20 flex flex-col h-full">
              <Link href={study.link} className="block h-full">
                <div className="relative aspect-[4/3] overflow-hidden flex-shrink-0">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    style={{ filter: 'hue-rotate(-8deg) saturate(0.9)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                  
                  {/* Vehicle Type Badge */}
                  <div className="absolute bottom-4 left-4 px-3 py-1 bg-brand-accent/20 text-brand-accent text-sm font-medium rounded-full">
                    {study.vehicleType}
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col justify-between">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-brand-accent/10 text-brand-accent text-xs font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-medium text-white mb-3">
                    {study.title}
                  </h3>
                  <p className="text-base text-brand-contrastText mb-6">
                    {study.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center mt-6">
                    <div className="flex flex-col items-center">
                      <Zap className="h-6 w-6 text-brand-accent" />
                      <span className="mt-1 font-semibold text-white">{study.stats.vehicles || study.stats.year}</span>
                      <span className="text-sm text-brand-contrastText">Vehicles / Year</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Clock className="h-6 w-6 text-brand-accent" />
                      <span className="mt-1 font-semibold text-white">{study.stats.timeFrame || study.stats.condition}</span>
                      <span className="text-sm text-brand-contrastText">Time / Condition</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Star className="h-6 w-6 text-brand-accent" />
                      <span className="mt-1 font-semibold text-white">{study.stats.rating}</span>
                      <span className="text-sm text-brand-contrastText">Rating</span>
                    </div>
                  </div>
                  
                  {/* Learn More CTA */}
                  <div className="mt-8">
                    <Button variant="outline" className="w-full justify-between">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA Button */}
        <motion.div 
          className="text-center mt-8 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Link href="/services">
            <Button 
              variant="default"
              size="lg"
              className="w-full sm:w-auto font-medium hover:scale-105 active:scale-95 hover:ring-2 ring-brand-accent/30 transition-all duration-300 text-sm sm:text-base"
            >
              Explore All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}