import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section 
      className="relative bg-cover bg-center h-[70vh] flex items-center" 
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1552642986-ccb41e7059e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
      }}
      id="hero"
    >
      <div className="absolute inset-0 bg-midnight-blue/70"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Drive Cool. Drive Smart.
          </h1>
          <p className="text-xl md:text-2xl text-ice-white/90 mb-8">
            Expert Auto AC Service — Fast, Affordable, Reliable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/book">
              <Button className="bg-accent-blue hover:bg-blue-700 text-white font-bold uppercase py-6 px-8 rounded-md text-center transition-colors shadow-lg h-auto">
                Book a Service
              </Button>
            </Link>
            <Link href="/#symptoms">
              <Button variant="outline" className="bg-white hover:bg-gray-100 text-midnight-blue font-bold py-6 px-8 rounded-md text-center transition-colors shadow-lg h-auto">
                Check Symptoms
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
