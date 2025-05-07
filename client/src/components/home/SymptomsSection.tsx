import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Thermometer, 
  Wind, 
  AlertTriangle, 
  Droplets 
} from "lucide-react";

export default function SymptomsSection() {
  const symptoms = [
    {
      icon: <Thermometer className="h-5 w-5 text-red-500" />,
      iconBgColor: "bg-red-100",
      title: "Weak or No Cooling",
      description: "Your AC blows air, but it's not cold enough or not cold at all. This usually indicates low refrigerant or a compressor issue."
    },
    {
      icon: <Wind className="h-5 w-5 text-blue-500" />,
      iconBgColor: "bg-blue-100",
      title: "Unusual Noises",
      description: "Squealing, grinding, or rattling sounds when your AC is running could signal problems with the compressor or fan."
    },
    {
      icon: <AlertTriangle className="h-5 w-5 text-yellow-500" />,
      iconBgColor: "bg-yellow-100",
      title: "Bad Odors",
      description: "Musty or foul smells from your vents often indicate mold or bacterial growth in the evaporator or air ducts."
    },
    {
      icon: <Droplets className="h-5 w-5 text-green-500" />,
      iconBgColor: "bg-green-100",
      title: "Water Leakage",
      description: "Excessive water inside your vehicle might indicate a clogged drain tube or issues with the evaporator."
    }
  ];

  return (
    <section id="symptoms" className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-midnight-blue mb-4">
            AC Problem Symptoms
          </h2>
          <p className="text-slate-gray text-lg max-w-2xl mx-auto">
            Recognize the warning signs that your car's AC system needs attention.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {symptoms.map((symptom, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex items-start">
              <div className={`${symptom.iconBgColor} rounded-full p-3 mr-4`}>
                {symptom.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{symptom.title}</h3>
                <p className="text-slate-gray">{symptom.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link href="/book">
            <Button className="bg-accent-blue hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md inline-block transition-colors shadow-md">
              Schedule a Diagnostic
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
