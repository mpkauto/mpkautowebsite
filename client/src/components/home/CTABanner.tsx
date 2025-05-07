import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function CTABanner() {
  return (
    <section 
      className="py-12 bg-midnight-blue bg-cover bg-center relative" 
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
        backgroundPosition: "center center",
        backgroundBlendMode: "overlay"
      }}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Summer's Coming — Book Your AC Check Now
          </h2>
          <p className="text-xl text-ice-white/90 mb-8">
            Don't wait until the heat hits. Schedule your preventative AC check today and stay cool all season long.
          </p>
          <Link href="/book">
            <Button className="bg-white hover:bg-gray-100 text-midnight-blue font-bold py-4 px-10 rounded-md inline-block transition-colors text-lg shadow-lg h-auto">
              Book Your AC Check
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
