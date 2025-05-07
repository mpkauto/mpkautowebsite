import { Card, CardContent } from "@/components/ui/card";
import { ClipboardList, CalendarCheck, Car } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      icon: <ClipboardList className="h-14 w-14 text-primary" />,
      title: "Choose Your Service",
      description: "Select from our range of AC services based on your vehicle's symptoms or maintenance needs."
    },
    {
      number: 2,
      icon: <CalendarCheck className="h-14 w-14 text-primary" />,
      title: "Pick a Time",
      description: "Schedule an appointment that works for your schedule, with same-day options often available."
    },
    {
      number: 3,
      icon: <Car className="h-14 w-14 text-primary" />,
      title: "We Service Your Car",
      description: "Bring your vehicle to our shop, or choose our mobile service option for on-site repairs."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-darker-bg relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 border-t-2 border-r-2 border-primary/20"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 border-b-2 border-l-2 border-primary/20"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          {/* Section title with line decoration */}
          <div className="flex items-center justify-center mb-5">
            <div className="h-0.5 w-12 bg-primary mr-4"></div>
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Simple Process</span>
            <div className="h-0.5 w-12 bg-primary ml-4"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We've made getting your AC fixed simple and stress-free.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className="animate-fade-in-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <Card className="bg-background rounded-xl text-center relative border border-border/40 overflow-hidden group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full">
                {/* Top accent border that animates on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                {/* Step number */}
                <div className="absolute top-6 right-6 w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl border border-primary/20">
                  {step.number}
                </div>
                
                <CardContent className="p-10 pt-16">
                  <div className="mb-6 flex justify-center">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-lg">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Optional connecting lines between steps for desktop */}
        <div className="hidden md:block relative">
          <div className="absolute top-1/2 left-[33%] right-[66%] h-0.5 bg-primary/20 -mt-24"></div>
          <div className="absolute top-1/2 left-[66%] right-[33%] h-0.5 bg-primary/20 -mt-24"></div>
        </div>
      </div>
    </section>
  );
}
