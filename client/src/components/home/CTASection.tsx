import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-gray-100 to-frost"> {/* Updated from sky/teal */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollAnimation variant="slideRight" delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Experience the Difference?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Book your appointment today for reliable and efficient auto AC service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book-service">
                <Button className="bg-gradient-to-br from-gray-300 to-gray-100 text-black shadow-inner py-3 px-8 rounded-md transition-all duration-300 hover:shadow-lg group"> {/* Updated from red */}
                  {/* Button content */}
                </Button>
              </Link>
              {/* Other buttons */}
            </div>
          </ScrollAnimation>
          {/* Rest of component */}
        </div>
      </div>
    </section>
  );
}