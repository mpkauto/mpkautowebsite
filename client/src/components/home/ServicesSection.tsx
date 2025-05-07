import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Droplet, Bolt } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Search className="h-10 w-10" />,
      title: "AC Diagnostic Check",
      description: "Comprehensive inspection of your vehicle's AC system to identify any issues.",
      price: "From $59",
      link: "/book"
    },
    {
      icon: <Droplet className="h-10 w-10" />,
      title: "Refrigerant Refill",
      description: "Professional recharging of your AC refrigerant to restore cooling performance.",
      price: "From $89",
      link: "/book"
    },
    {
      icon: <Bolt className="h-10 w-10" />,
      title: "Full System Repair",
      description: "Complete repair and replacement services for all AC components and systems.",
      price: "From $149",
      link: "/book"
    }
  ];

  return (
    <section id="services" className="py-16 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-midnight-blue mb-4">
            Our Services
          </h2>
          <p className="text-slate-gray text-lg max-w-2xl mx-auto">
            Professional auto air conditioning services to keep you comfortable in any weather.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-ice-white rounded-lg shadow-md hover:translate-y-[-5px] transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-accent-blue mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-gray mb-6">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-midnight-blue font-bold">{service.price}</span>
                  <Link href={service.link}>
                    <a className="text-accent-blue hover:text-blue-700 font-medium transition-colors">
                      Book Now →
                    </a>
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
