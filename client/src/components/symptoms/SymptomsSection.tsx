import { SymptomsCard } from "./SymptomsCard";
import { Thermometer, Wind, Droplets, AlertTriangle, Volume2, Gauge } from "lucide-react";

export default function SymptomsSection() {
  const symptoms = [
    {
      title: "No Cold Air",
      description: "AC is running but not producing cold air, or air is not as cold as it should be.",
      icon: <Thermometer className="h-6 w-6 text-silver" />,
      href: "/symptoms/no-cold-air"
    },
    {
      title: "Weak Airflow",
      description: "Air coming from vents is weak or inconsistent across different vents.",
      icon: <Wind className="h-6 w-6 text-silver" />,
      href: "/symptoms/weak-airflow"
    },
    {
      title: "Water Leakage",
      description: "Water dripping or pooling inside the vehicle when AC is running.",
      icon: <Droplets className="h-6 w-6 text-silver" />,
      href: "/symptoms/water-leakage"
    },
    {
      title: "Bad Odor",
      description: "Musty or unpleasant smell coming from AC vents when system is on.",
      icon: <AlertTriangle className="h-6 w-6 text-silver" />,
      href: "/symptoms/bad-odor"
    },
    {
      title: "Unusual Noises",
      description: "Clicking, rattling, or other unusual sounds when AC system is operating.",
      icon: <Volume2 className="h-6 w-6 text-silver" />,
      href: "/symptoms/unusual-noises"
    },
    {
      title: "Inconsistent Cooling",
      description: "Temperature fluctuates or varies significantly while driving.",
      icon: <Gauge className="h-6 w-6 text-silver" />,
      href: "/symptoms/inconsistent-cooling"
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-semibold text-white mb-6 text-center">
          Common AC Problem Symptoms
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {symptoms.map((symptom, index) => (
            <SymptomsCard
              key={index}
              title={symptom.title}
              description={symptom.description}
              icon={symptom.icon}
              href={symptom.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}