import { Link } from 'wouter';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { Button } from '@/components/ui/button';

export default function OlaFleetACRepair() {
  return (
    <main className="min-h-screen bg-[#0B0B0C] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent opacity-50"></div>
        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative">
          <ScrollAnimation variant="fadeUp">
            <Link
              href="/#case-studies"
              className="text-brand-contrastText hover:underline mb-8 inline-flex items-center group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Case Studies
            </Link>

            <h1 className="text-5xl font-bold mb-6 text-white">
              Fleet AC Overhaul for Ola Cabs – Chennai
            </h1>

            <div className="flex flex-wrap gap-4 mb-12">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Fleet Services
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Commercial Vehicles
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Rapid Response
              </span>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="grid gap-16">
            {/* Challenge */}
            <ScrollAnimation variant="fadeUp">
              <div>
                <h2 className="text-4xl font-semibold mb-6 text-white">Challenge</h2>
                <p className="text-base text-gray-300 leading-relaxed">
                  High-frequency usage of Ola cab fleets in Chennai's tropical climate led to
                  recurring AC failures, impacting driver comfort and customer satisfaction.
                </p>
              </div>
            </ScrollAnimation>

            {/* Solution */}
            <ScrollAnimation variant="fadeUp" delay={0.2}>
              <div>
                <h2 className="text-4xl font-semibold mb-6 text-white">Solution</h2>
                <p className="text-base text-gray-300 leading-relaxed">
                  MPK Auto AC Services conducted rapid diagnostics and delivered same-day AC repairs
                  across a fleet of 30+ Ola cabs. Our mobile service teams ensured minimal downtime,
                  restoring optimal cooling performance and enabling uninterrupted earnings for
                  drivers.
                </p>
              </div>
            </ScrollAnimation>

            {/* Outcome */}
            <ScrollAnimation variant="fadeUp" delay={0.3}>
              <div>
                <h2 className="text-4xl font-semibold mb-6 text-white">Outcome</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-gray-300 flex-shrink-0 mt-1" />
                    <span className="text-base text-gray-300">
                      Restored 100% AC functionality in all vehicles within 48 hours
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-gray-300 flex-shrink-0 mt-1" />
                    <span className="text-base text-gray-300">
                      Reduced vehicle downtime by over 70%
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-gray-300 flex-shrink-0 mt-1" />
                    <span className="text-base text-gray-300">
                      Improved Ola driver ratings through enhanced passenger comfort
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            {/* Keywords */}
            <ScrollAnimation variant="fadeUp" delay={0.4}>
              <div>
                <h2 className="text-4xl font-semibold mb-6 text-white">Keywords Targeted</h2>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-[#111827] text-gray-300 rounded-full text-sm px-4 py-2">
                    Auto AC repair for fleets
                  </span>
                  <span className="bg-[#111827] text-gray-300 rounded-full text-sm px-4 py-2">
                    Ola cab AC service Chennai
                  </span>
                  <span className="bg-[#111827] text-gray-300 rounded-full text-sm px-4 py-2">
                    Fleet air conditioning repair
                  </span>
                  <span className="bg-[#111827] text-gray-300 rounded-full text-sm px-4 py-2">
                    Quick turnaround AC repairs
                  </span>
                  <span className="bg-[#111827] text-gray-300 rounded-full text-sm px-4 py-2">
                    Commercial vehicle AC specialists
                  </span>
                </div>
              </div>
            </ScrollAnimation>

            {/* CTA */}
            <ScrollAnimation variant="fadeUp" delay={0.5}>
              <div className="bg-[#111827] p-8 rounded-2xl border border-primary/20">
                <h2 className="text-4xl font-semibold mb-6 text-white">Got a commercial fleet?</h2>
                <p className="text-base text-gray-300 mb-6">
                  Book a consultation with MPK's fleet AC specialists today.
                </p>
                <Link href="/booking">
                  <Button variant="default">Book Fleet Consultation</Button>
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </main>
  );
}
