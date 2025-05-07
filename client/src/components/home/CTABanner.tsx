import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, CheckCircle } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-24 md:py-32 bg-darker-bg relative overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 z-0 opacity-20" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1637860914979-fbaf43dc4a33?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      ></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-primary/20 z-0"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-primary/20 z-0"></div>
      <div className="absolute -left-16 top-1/2 w-32 h-32 rounded-full bg-primary/5 blur-3xl z-0"></div>
      <div className="absolute -right-16 top-1/4 w-32 h-32 rounded-full bg-primary/5 blur-3xl z-0"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 animate-fade-in-up">
              <div className="flex items-center mb-6">
                <Calendar className="h-6 w-6 text-primary mr-3" />
                <span className="text-primary font-medium uppercase tracking-wider text-sm">Schedule Now</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Summer's Coming — Book Your AC Check Now
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Don't wait until the heat hits. Schedule your preventative AC check today and stay cool all season long.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Same-day appointments available</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Complete system inspection included</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Certified technicians with 15+ years experience</span>
                </div>
              </div>
              
              <Link href="/book">
                <div className="cursor-pointer">
                  <Button className="bg-primary hover:bg-primary/90 text-white font-bold py-5 px-10 rounded-md inline-block transition-all duration-300 text-lg shadow-lg hover:shadow-primary/20 hover:translate-y-[-2px] group">
                    Book Your AC Check
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </Link>
            </div>
            
            <div className="flex-1 md:flex items-center justify-center hidden animate-fade-in" style={{animationDelay: "0.3s"}}>
              <div className="bg-background/50 backdrop-blur-md p-8 rounded-2xl border border-border/30 shadow-xl">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Seasonal Special</h3>
                  <div className="text-primary font-bold text-5xl mb-3">$59</div>
                  <p className="text-muted-foreground mb-6">Full AC inspection and performance test</p>
                  <div className="border-t border-border/30 pt-4 pb-2">
                    <p className="text-foreground text-sm mb-2 flex justify-center items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Refrigerant level check
                    </p>
                    <p className="text-foreground text-sm mb-2 flex justify-center items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      System pressure testing
                    </p>
                    <p className="text-foreground text-sm mb-2 flex justify-center items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Vent temperature analysis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
