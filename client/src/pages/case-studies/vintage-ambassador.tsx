import { Link } from 'wouter';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { Button } from '@/components/ui/button';

export default function VintageAmbassador() {
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
              Vintage Ambassador – AC Revival with Heritage Precision
            </h1>

            <div className="flex flex-wrap gap-4 mb-12">
              <span className="bg-[#111827] text-gray-300 rounded-full text-sm px-4 py-2">
                Vintage Vehicles
              </span>
              <span className="bg-[#111827] text-gray-300 rounded-full text-sm px-4 py-2">
                Restoration
              </span>
              <span className="bg-[#111827] text-gray-300 rounded-full text-sm px-4 py-2">
                Heritage Care
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
                  The AC unit of a classic Hindustan Ambassador had deteriorated over time, unable
                  to handle Chennai's humid conditions. Restoring it demanded both technical
                  expertise and respect for the vehicle's heritage.
                </p>
              </div>
            </ScrollAnimation>

            {/* Solution */}
            <ScrollAnimation variant="fadeUp" delay={0.2}>
              <div>
                <h2 className="text-4xl font-semibold mb-6 text-white">Solution</h2>
                <p className="text-base text-gray-300 leading-relaxed">
                  MPK Auto AC Services meticulously diagnosed and restored the car's original air
                  conditioning system, preserving its vintage character while delivering modern
                  cooling comfort. Every component was either reconditioned or precisely replaced to
                  match the Ambassador's original design specs.
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
                      AC restored without compromising authenticity
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-gray-300 flex-shrink-0 mt-1" />
                    <span className="text-base text-gray-300">
                      Consistent cabin cooling despite tropical heat
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-gray-300 flex-shrink-0 mt-1" />
                    <span className="text-base text-gray-300">
                      A seamless blend of vintage aesthetics and modern performance
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
                    Vintage car AC restoration
                  </span>
                  <span className="bg-[#111827] text-gray-300 rounded-full text-sm px-4 py-2">
                    Ambassador car AC service
                  </span>
                  <span className="bg-[#111827] text-gray-300 rounded-full text-sm px-4 py-2">
                    Classic vehicle cooling system
                  </span>
                  <span className="bg-[#111827] text-gray-300 rounded-full text-sm px-4 py-2">
                    Restoring old car AC
                  </span>
                  <span className="bg-[#111827] text-gray-300 rounded-full text-sm px-4 py-2">
                    Retro car AC repair Chennai
                  </span>
                </div>
              </div>
            </ScrollAnimation>

            {/* CTA */}
            <ScrollAnimation variant="fadeUp" delay={0.5}>
              <div className="bg-[#111827] p-8 rounded-2xl border border-primary/20">
                <h2 className="text-4xl font-semibold mb-6 text-white">Own a classic car?</h2>
                <p className="text-base text-gray-300 mb-6">
                  Trust MPK to restore comfort with heritage care.
                </p>
                <Link href="/booking">
                  <Button variant="default">Book Classic Car Consultation</Button>
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </main>
  );
}
