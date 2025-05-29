import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Phone, MapPin, MessageCircle } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

export default function SymptomsPage() {
  const symptoms = [
    {
      title: "Weak or No Cooling",
      symptoms: "AC blowing warm air, insufficient cooling despite full blast",
      causes: "Low refrigerant levels, clogged condenser, faulty compressor",
      importance: "Reduced cooling can quickly escalate into major system failure",
      action: "Get a refrigerant check and system diagnosis."
    },
    {
      title: "Foul Smell from Vents",
      symptoms: "Musty, sour, or mildew-like odor inside the cabin",
      causes: "Mold buildup in evaporator, dirty cabin air filter",
      importance: "Breathing in mold spores can affect your health",
      action: "Opt for an evaporator cleaning and air filter replacement."
    },
    {
      title: "Unusual Noises When AC Is On",
      symptoms: "Clicking, rattling, or grinding sounds from dashboard or engine bay",
      causes: "Worn-out compressor clutch, loose AC belt, fan motor issues",
      importance: "Ignoring this can lead to complete AC breakdown",
      action: "Book an AC system inspection today."
    },
    {
      title: "Water or Moisture in Cabin",
      symptoms: "Wet floor mats, foggy windows even with AC running",
      causes: "Blocked drain pipe, condenser leak",
      importance: "Can lead to electrical damage or mold growth inside the car",
      action: "Schedule an AC drain service."
    },
    {
      title: "AC Takes Too Long to Cool",
      symptoms: "Initial cooling delay, especially during hot days",
      causes: "Worn-out expansion valve, failing blower motor",
      importance: "Signals underlying inefficiencies that may worsen",
      action: "Run a performance test on your cooling cycle."
    }
  ];

  const testimonials = [
    {
      quote: "The AC in my car was blowing hot air—MPK diagnosed the issue within 30 minutes and fixed it the same day. Excellent service!",
      author: "Karthik M",
      vehicle: "Hyundai Creta owner"
    },
    {
      quote: "MPK's symptom guide helped me understand the issue before even calling them. Trustworthy team.",
      author: "Renu S",
      vehicle: "Maruti Baleno driver"
    }
  ];

  return (
    <main className="min-h-screen bg-[#0B0B0C] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent opacity-50"></div>
        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative">
          <ScrollAnimation variant="fadeUp">
            <Link href="/">
              <Button variant="ghost" className="mb-8 group">
                <ArrowRight className="h-4 w-4 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300" />
                Back to Home
              </Button>
            </Link>
            
            <h1 className="text-5xl font-bold mb-6 text-white">
              Check Your Car's AC Symptoms
            </h1>
            
            <p className="text-base text-gray-300 mb-6 max-w-3xl">
              Is Your Vehicle's Cooling System Telling You Something? Let's Find Out.
            </p>

            <p className="text-base text-gray-300 leading-relaxed max-w-3xl">
              At MPK Auto AC Services, we believe that a well-informed customer makes smarter decisions. 
              Whether you're driving daily in Chennai's heat or planning a weekend trip, your car's AC must perform reliably. 
              This page is designed to help you understand common AC problems, their early warning signs, and when to take action.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Common Issues Section */}
      <section 
        className="py-20 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/symptoms-background.webp)' }}
      >
        {/* Semi-transparent overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
          <ScrollAnimation variant="fadeUp">
            <h2 className="text-4xl font-semibold mb-6 text-center">
              Common AC Issues & What They Mean
            </h2>
          </ScrollAnimation>

          <div className="grid gap-8">
            {symptoms.map((issue, index) => (
              <ScrollAnimation key={index} variant="fadeUp" delay={index * 0.1}>
                <div className="bg-[#111827] backdrop-blur-sm rounded-xl px-6 py-4 border border-white/10 hover:shadow-xl hover:translate-y-1 transition-transform duration-300">
                  <h3 className="text-2xl font-medium mb-4">{index + 1}. {issue.title}</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-medium mb-2">Symptoms:</h4>
                      <p className="text-base text-gray-300">{issue.symptoms}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Possible Causes:</h4>
                      <p className="text-base text-gray-300">{issue.causes}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Why It Matters:</h4>
                      <p className="text-base text-gray-300">{issue.importance}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Recommended Action:</h4>
                      <p className="text-base text-gray-300">{issue.action}</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose MPK Section */}
      <section className="py-20 bg-white/5 pt-16 lg:pt-24">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <ScrollAnimation variant="fadeUp">
            <h2 className="text-4xl font-semibold mb-6 text-center">
              🛠️ Why Choose MPK for Your AC Troubleshooting?
            </h2>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation variant="fadeUp" delay={0.1}>
              <div className="bg-[#111827] backdrop-blur-sm rounded-xl p-6 border border-white/10 px-6 py-4">
                <h3 className="text-2xl font-medium mb-4">2000+ Vehicles</h3>
                <p className="text-base text-gray-300">Successfully diagnosed and serviced in Chennai</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation variant="fadeUp" delay={0.2}>
              <div className="bg-[#111827] backdrop-blur-sm rounded-xl p-6 border border-white/10 px-6 py-4">
                <h3 className="text-2xl font-medium mb-4">Genuine Parts</h3>
                <p className="text-base text-gray-300">Only authentic parts and refrigerants used</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation variant="fadeUp" delay={0.3}>
              <div className="bg-[#111827] backdrop-blur-sm rounded-xl p-6 border border-white/10 px-6 py-4">
                <h3 className="text-2xl font-medium mb-4">Rapid Response</h3>
                <p className="text-base text-gray-300">Most issues resolved within the same day</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation variant="fadeUp" delay={0.4}>
              <div className="bg-[#111827] backdrop-blur-sm rounded-xl p-6 border border-white/10 px-6 py-4">
                <h3 className="text-2xl font-medium mb-4">Trusted Partner</h3>
                <p className="text-base text-gray-300">Preferred by Ola fleets and tour operators</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <ScrollAnimation variant="fadeUp">
            <h2 className="text-4xl font-semibold mb-6 text-center">
              💬 What Our Customers Say
            </h2>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation key={index} variant="fadeUp" delay={index * 0.1}>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <p className="text-base text-gray-300 mb-6">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-gray-300">{testimonial.author}</p>
                    <p className="text-base text-gray-300">{testimonial.vehicle}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-primary/20 to-transparent">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <ScrollAnimation variant="fadeUp">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-semibold mb-6">
                📅 Ready to Fix Your AC?
              </h2>
              <p className="text-base text-gray-300 mb-8">
                Don't wait for your comfort to suffer. Book a service now or talk to our AC experts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking">
                  <Button variant="default" size="lg" aria-label="Book an AC Service">
                    Book Now
                  </Button>
                </Link>
                <Button variant="outline" size="lg" aria-label="WhatsApp us for assistance">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </Button>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-8 justify-center items-center">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-gray-300" />
                  <span className="text-gray-300">+91 73388 38287</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-gray-300" />
                  <span className="text-gray-300">We service vehicles across Chennai</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
} 