import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section 
      className="relative bg-cover bg-center h-screen flex items-center overflow-hidden" 
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1637860914979-fbaf43dc4a33?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
      }}
      id="hero"
    >
      {/* Gradient overlay with subtle blur effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80 backdrop-blur-sm"></div>
      
      {/* Vertical blue accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 pt-20">
        <div className="max-w-3xl animate-fade-in-up">
          {/* Small caption line */}
          <div className="flex items-center mb-5">
            <div className="h-0.5 w-12 bg-primary mr-4"></div>
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Premium Auto AC Service</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6">
            Drive <span className="text-primary">Cool.</span> <br />
            Drive <span className="text-primary">Smart.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl">
            Expert auto air conditioning diagnostics and repair services — keeping you comfortable on every journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/book">
              <div className="cursor-pointer">
                <Button className="bg-primary hover:bg-primary/90 text-white font-bold py-6 px-10 rounded-md text-center transition-all duration-300 shadow-lg hover:shadow-primary/20 hover:translate-y-[-2px] h-auto text-lg group">
                  Book a Service
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </Link>
            <Link href="/#symptoms">
              <div className="cursor-pointer">
                <Button variant="outline" className="border-2 border-border bg-transparent hover:bg-background/50 text-foreground font-bold py-6 px-10 rounded-md text-center transition-all duration-300 h-auto text-lg">
                  Check Symptoms
                </Button>
              </div>
            </Link>
          </div>
        </div>
        
        {/* Optional: floating badges/stats */}
        <div className="absolute bottom-10 right-10 md:right-20 hidden md:flex gap-6">
          <div className="bg-background/70 backdrop-blur-md p-4 rounded-lg flex flex-col items-center animate-fade-in">
            <span className="text-3xl font-bold text-primary">94%</span>
            <span className="text-sm text-muted-foreground">Customer Satisfaction</span>
          </div>
          <div className="bg-background/70 backdrop-blur-md p-4 rounded-lg flex flex-col items-center animate-fade-in" style={{animationDelay: "0.2s"}}>
            <span className="text-3xl font-bold text-primary">2HR</span>
            <span className="text-sm text-muted-foreground">Average Service Time</span>
          </div>
        </div>
      </div>
      
      {/* Decorative diagonal lines */}
      <div className="absolute right-0 bottom-0 w-1/3 h-1/4 pointer-events-none overflow-hidden">
        <div className="w-full h-0.5 bg-primary/20 rotate-45 origin-bottom-right transform translate-y-full"></div>
        <div className="w-full h-0.5 bg-primary/10 rotate-45 origin-bottom-right transform translate-y-[calc(100%+20px)]"></div>
      </div>
    </section>
  );
}
