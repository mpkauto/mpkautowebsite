import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, StarHalf } from 'lucide-react';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Button } from "@/components/ui/button";

// Register Swiper custom elements
register();

// Add TypeScript declarations for Swiper custom elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'swiper-container': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'swiper-slide': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

// Define the testimonial type
interface Testimonial {
  rating: number;
  comment: string;
  name: string;
  title: string;
  image?: string; // Optional image URL
}

export default function TestimonialsSection() {
  // Sample testimonials data
  const testimonials = [
    {
      rating: 5,
      comment: "MPK fixed my AC in less than two hours. Great service and fair pricing! Will definitely return for future services.",
      name: "Michael R.",
      title: "Toyota Camry Owner",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    },
    {
      rating: 5,
      comment: "As a rideshare driver, a functioning AC is essential. MPK's quick service and mobile option saved me from losing work days.",
      name: "Sarah L.",
      title: "Uber Driver",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    },
    {
      rating: 4.5,
      comment: "The diagnostic service was thorough and they explained everything clearly. No pushy upselling like other places.",
      name: "David K.",
      title: "Honda CR-V Owner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    },
    {
      rating: 5,
      comment: "I was impressed by how quickly they diagnosed the issue with my car's AC. Professional service from start to finish.",
      name: "Jennifer M.",
      title: "Nissan Altima Owner",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    },
    {
      rating: 4.5,
      comment: "The team at MPK went above and beyond to fix my complicated AC issue. They even stayed late to finish the job.",
      name: "Robert T.",
      title: "Ford F-150 Owner",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    }
  ];

  // Create a ref for the swiper container
  const swiperElRef = useRef<HTMLElement | null>(null);
  
  // Helper function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="h-5 w-5 fill-[#9B9B9B] text-[#9B9B9B]" />);
    }
    
    if (halfStar) {
      stars.push(<StarHalf key="half" className="h-5 w-5 fill-[#9B9B9B] text-[#9B9B9B]" />);
    }
    
    return stars;
  };

  // Animation variants for testimonial cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  useEffect(() => {
    // Get the current swiper element from ref
    const swiperEl = swiperElRef.current;
    
    if (swiperEl) {
      // Updated Swiper parameters
      const swiperParams = {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
          enabled: true,
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        },
        pagination: {
          enabled: true,
          clickable: true,
          type: 'bullets',
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2, // Always show 2 slides on medium and larger screens
          },
          1024: {
            slidesPerView: 2, // Keep it at 2 even on large screens as requested
          },
        },
        injectStyles: [
          `
          .swiper-pagination-bullet-active {
            background-color: #dc2626;
          }
          `
        ],
        a11y: {
          prevSlideMessage: 'Previous testimonial',
          nextSlideMessage: 'Next testimonial',
        }
      };

      // Assign parameters to Swiper element
      Object.assign(swiperEl, swiperParams);
      
      // Initialize Swiper - updated method
      (swiperEl as any).initialize();
    }
    
    // Cleanup function
    return () => {
      if (swiperElRef.current) {
        // Proper cleanup
        const swiperInstance = (swiperElRef.current as any).swiper;
        if (swiperInstance) {
          swiperInstance.destroy(true, true);
        }
      }
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }} 
      viewport={{ once: true }} 
    >
      <section className="py-16 px-6 md:px-12 bg-gray-50 relative">
        <div className="container mx-auto max-w-7xl">
          <ScrollAnimation variant="fadeUp">
            <div className="text-center mb-16">
              {/* Section title with line decoration */}
              <div className="flex items-center justify-center mb-4">
                <div className="h-0.5 w-12 bg-[#0077FF] mr-4"></div>
                <span className="text-[#D4D4D4] font-medium uppercase tracking-wider text-sm">Testimonials</span>
                <div className="h-0.5 w-12 bg-[#0077FF] ml-4"></div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6">
                What Our Customers Say
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Read testimonials from our satisfied customers who trust us with their vehicle's comfort.
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="relative">
            {/* Custom navigation buttons with accessibility improvements */}
            <div className="absolute top-1/2 -left-4 md:-left-8 z-10 transform -translate-y-1/2">
              <Button 
                variant="white"
                shape="circle"
                size="icon"
                className="p-3 shadow-lg hover:bg-[#9B9B9B] hover:text-white transition-all duration-300 group swiper-button-prev"
                onClick={() => (swiperElRef.current as any)?.swiper?.slidePrev()}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              </Button>
            </div>
            
            <div className="absolute top-1/2 -right-4 md:-right-8 z-10 transform -translate-y-1/2">
              <Button 
                variant="white"
                shape="circle"
                size="icon"
                className="p-3 shadow-lg hover:bg-[#9B9B9B] hover:text-white transition-all duration-300 group swiper-button-next"
                onClick={() => (swiperElRef.current as any)?.swiper?.slideNext()}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              </Button>
            </div>
            
            {/* Testimonials slider with motion animations */}
            <div className="px-4 md:px-10">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <swiper-container
                  ref={(el: any) => {
                    swiperElRef.current = el;
                  }}
                  className="testimonials-slider"
                >
                  {testimonials.map((testimonial, index) => (
                    <swiper-slide key={index}>
                      <motion.div 
                        variants={itemVariants}
                        className="bg-white p-6 rounded-xl shadow-md border border-gray-100 h-full"
                      >
                        {/* Rating stars */}
                        <div className="text-center mb-6">
                          <div className="flex text-[#F2F4F8]">
                            {renderStars(testimonial.rating)}
                          </div>
                          <span className="ml-2 text-sm text-[#F2F4F8]/80 font-medium">{testimonial.rating}</span>
                        </div>
                        
                        {/* Testimonial text */}
                        <p className="text-[#F2F4F8]/90 mb-6 text-lg italic leading-relaxed">{testimonial.comment}</p>
                        
                        {/* Customer info */}
                        <div className="flex items-center mt-auto">
                          {testimonial.image && (
                            <div className="mr-4">
                              <img 
                                src={testimonial.image} 
                                alt={`${testimonial.name} profile picture`}
                                className="h-12 w-12 rounded-full object-cover border-2 border-[#0077FF]/20"
                                loading="lazy"
                              />
                            </div>
                          )}
                          <div>
                            <h4 className="font-bold text-[#F2F4F8]">{testimonial.name}</h4>
                            <p className="text-sm text-[#F2F4F8]/80">{testimonial.title}</p>
                          </div>
                        </div>
                      </motion.div>
                    </swiper-slide>
                  ))}
                </swiper-container>
              </motion.div>
            </div>
          </div>
          {/* Add pagination dots with proper class */}
          <div className="swiper-pagination mt-8 flex justify-center"></div>
        </div>
      </section>
    </motion.div>
  );
}