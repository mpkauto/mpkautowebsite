import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Thermometer, 
  Wind, 
  AlertTriangle, 
  Droplets,
  ArrowRight
} from "lucide-react";

export default function SymptomsSection() {
  const symptoms = [
    {
      icon: <Thermometer className="h-6 w-6 text-primary" />,
      title: "Weak or No Cooling",
      description: "Your AC blows air, but it's not cold enough or not cold at all. This usually indicates low refrigerant or a compressor issue."
    },
    {
      icon: <Wind className="h-6 w-6 text-primary" />,
      title: "Unusual Noises",
      description: "Squealing, grinding, or rattling sounds when your AC is running could signal problems with the compressor or fan."
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-primary" />,
      title: "Bad Odors",
      description: "Musty or foul smells from your vents often indicate mold or bacterial growth in the evaporator or air ducts."
    },
    {
      icon: <Droplets className="h-6 w-6 text-primary" />,
      title: "Water Leakage",
      description: "Excessive water inside your vehicle might indicate a clogged drain tube or issues with the evaporator."
    }
  ];

  return (
    <section id="symptoms" className="py-24 px-6 md:px-12 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            {/* Left column - text and description */}
            <div className="flex items-center mb-5">
              <div className="h-0.5 w-12 bg-primary mr-4"></div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Problem Recognition</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              AC Problem Symptoms
            </h2>
            
            <p className="text-muted-foreground text-lg mb-10">
              Recognize the warning signs that your car's AC system needs professional attention. Early detection can prevent more costly repairs down the line.
            </p>
            
            <Link href="/book">
              <div className="cursor-pointer">
                <Button className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-md transition-all duration-300 shadow-lg hover:shadow-primary/20 hover:translate-y-[-2px] h-auto text-lg group">
                  Schedule a Diagnostic
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </Link>
          </div>
          
          <div>
            {/* Right column - symptoms grid */}
            <div className="grid grid-cols-1 gap-8">
              {symptoms.map((symptom, index) => (
                <div 
                  key={index} 
                  className="bg-background border border-border p-8 rounded-lg shadow-sm hover:shadow-md hover:shadow-primary/5 flex items-start transition-all duration-300 animate-fade-in-up"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="bg-primary/5 rounded-xl p-4 mr-6">
                    {symptom.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-3 text-foreground">{symptom.title}</h3>
                    <p className="text-muted-foreground">{symptom.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute left-0 right-0 top-0 h-0.5 bg-primary/10 opacity-50"></div>
    </section>
  );
}
