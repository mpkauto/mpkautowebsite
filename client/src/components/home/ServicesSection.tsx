import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Droplet, Bolt, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Search className="h-12 w-12" />,
      title: "AC Diagnostic Check",
      description: "Comprehensive inspection of your vehicle's AC system to identify any issues.",
      price: "From $59",
      link: "/book"
    },
    {
      icon: <Droplet className="h-12 w-12" />,
      title: "Refrigerant Refill",
      description: "Professional recharging of your AC refrigerant to restore cooling performance.",
      price: "From $89",
      link: "/book"
    },
    {
      icon: <Bolt className="h-12 w-12" />,
      title: "Full System Repair",
      description: "Complete repair and replacement services for all AC components and systems.",
      price: "From $149",
      link: "/book"
    }
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-darker-bg relative">
      {/* Decorative element */}
      <div className="absolute top-0 left-1/2 w-0.5 h-24 bg-primary/20 -translate-x-1/2"></div>
      
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in-up">
          {/* Section title with line decoration */}
          <div className="flex items-center justify-center mb-5">
            <div className="h-0.5 w-12 bg-primary mr-4"></div>
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Professional Services</span>
            <div className="h-0.5 w-12 bg-primary ml-4"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional auto air conditioning services to keep you comfortable in any weather.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-background rounded-lg shadow-md hover:shadow-lg hover:shadow-primary/5 hover:translate-y-[-5px] transition-all duration-300 border border-border/40 overflow-hidden group animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-8 relative">
                {/* Accent border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                
                <div className="text-primary mb-6 p-4 bg-primary/5 inline-block rounded-lg">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-bold text-xl">{service.price}</span>
                  <Link href={service.link}>
                    <div className="text-primary hover:text-primary/90 font-medium transition-colors cursor-pointer group/link flex items-center">
                      <span>Book Now</span>
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
