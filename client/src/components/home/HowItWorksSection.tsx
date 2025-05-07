import { Card, CardContent } from "@/components/ui/card";
import { ClipboardList, CalendarCheck, Car } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      icon: <ClipboardList className="h-10 w-10 text-accent-blue" />,
      title: "Choose Your Service",
      description: "Select from our range of AC services based on your vehicle's symptoms or maintenance needs."
    },
    {
      number: 2,
      icon: <CalendarCheck className="h-10 w-10 text-accent-blue" />,
      title: "Pick a Time",
      description: "Schedule an appointment that works for your schedule, with same-day options often available."
    },
    {
      number: 3,
      icon: <Car className="h-10 w-10 text-accent-blue" />,
      title: "We Service Your Car",
      description: "Bring your vehicle to our shop, or choose our mobile service option for on-site repairs."
    }
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-midnight-blue mb-4">
            How It Works
          </h2>
          <p className="text-slate-gray text-lg max-w-2xl mx-auto">
            We've made getting your AC fixed simple and stress-free.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <Card key={step.number} className="bg-white rounded-lg text-center relative shadow-sm">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-midnight-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                {step.number}
              </div>
              <CardContent className="pt-8 p-8">
                <div className="mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-gray">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
