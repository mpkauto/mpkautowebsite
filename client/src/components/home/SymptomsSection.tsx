import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import {
  Thermometer,
  Wind,
  AlertTriangle,
  Droplets,
  ArrowRight,
  Volume2,
  Gauge,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function SymptomsSection() {
  const [showAll, setShowAll] = useState(false);

  const symptoms = [
    {
      title: 'Weak or No Cooling',
      description:
        "Your AC blows air, but it's not cold enough or not cold at all. This usually indicates low refrigerant or a compressor issue.",
      shortDescription: 'No cold air',
      image: '/images/symptoms-weak-cooling.webp',
      link: '/symptoms/weak-cooling',
      icon: <Thermometer className="h-6 w-6 text-white" />,
    },
    {
      title: 'Unusual Noises',
      description:
        'Squealing, grinding, or rattling sounds when your AC is running could signal problems with the compressor or fan.',
      shortDescription: 'Strange sounds',
      image: '/images/symptoms-unusual-noises.webp',
      link: '/symptoms/unusual-noises',
      icon: <Volume2 className="h-6 w-6 text-white" />,
    },
    {
      title: 'Bad Odors',
      description:
        'Musty or foul smells from your vents often indicate mold or bacterial growth in the evaporator or air ducts.',
      shortDescription: 'Unpleasant smells',
      image: '/images/symptoms-bad-odors.webp',
      link: '/symptoms/bad-odors',
      icon: <AlertTriangle className="h-6 w-6 text-white" />,
    },
    {
      title: 'Water Leakage',
      description:
        'Excessive water inside your vehicle might indicate a clogged drain tube or issues with the evaporator.',
      shortDescription: 'Water dripping',
      image: '/images/symptoms-water-leakage.webp',
      link: '/symptoms/water-leakage',
      icon: <Droplets className="h-6 w-6 text-white" />,
    },
    {
      title: 'Clicking Sounds',
      description:
        'Regular clicking noises when the AC is turned on could indicate a failing compressor clutch.',
      shortDescription: 'Clicking sound',
      image: '/images/symptoms-clicking-sounds.webp',
      link: '/symptoms/clicking-sounds',
      icon: <Volume2 className="h-6 w-6 text-white" />,
    },
    {
      title: 'Inconsistent Cooling',
      description:
        'Temperature fluctuations or varying cooling performance across different vents.',
      shortDescription: 'Uneven temperature',
      image: '/images/symptoms-inconsistent-cooling.webp',
      link: '/symptoms/inconsistent-cooling',
      icon: <Gauge className="h-6 w-6 text-white" />,
    },
  ];

  const visibleSymptoms = showAll ? symptoms : symptoms.slice(0, 4);

  return (
    <motion.section
      id="symptoms"
      className="py-20 md:py-28 relative overflow-hidden text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/images/symptoms-background.webp")' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black pointer-events-none z-0"></div>

      <div className="container mx-auto max-w-7xl relative z-10 px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-5">
              <div className="h-0.5 w-12 bg-white/20 mr-4"></div>
              <span className="text-white/60 font-medium uppercase tracking-wider text-sm">
                Problem Recognition
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-light text-white mb-6 leading-[1.1] tracking-tight">
              AC Problem Symptoms
            </h2>

            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10 tracking-wide">
              Recognize the warning signs that your car's AC system needs professional attention.
              Early detection can prevent more costly repairs down the line.
            </p>

            <div className="cursor-pointer">
              <Button
                className="inline-flex items-center bg-white text-black hover:bg-white/90 duration-300 px-6 py-3 text-base tracking-wider uppercase font-semibold group h-12 hover:scale-[1.03] transition-transform"
                onClick={() => {
                  window.location.href = '/symptoms';
                }}
              >
                Check AC Symptoms
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 mt-10"
          >
            <AnimatePresence>
              {visibleSymptoms.map((symptom, index) => (
                <motion.div
                  key={index}
                  className="relative bg-black rounded-xl border border-white/10 overflow-hidden flex flex-col h-[350px] transition-all duration-300 ease-in-out hover:shadow-[0_0_30px_rgba(0,119,255,0.2)] hover:scale-105"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="absolute inset-0">
                    <img
                      src={symptom.image}
                      alt={symptom.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      style={{ filter: 'hue-rotate(-8deg) saturate(0.9)' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
                  </div>

                  <div className="relative z-10 flex flex-col h-full p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-white/10 rounded-lg mr-3">{symptom.icon}</div>
                      <h3 className="text-xl font-semibold text-white">{symptom.title}</h3>
                    </div>

                    <p className="text-white/80 text-base mb-6 flex-grow">
                      {symptom.shortDescription}
                    </p>

                    <Button
                      variant="outline"
                      className="border border-white/20 text-white h-12 px-6 rounded-md hover:bg-white/10 hover:scale-[1.02] transition-transform shadow-[0_0_0.5rem_#0077FF40] font-body font-semibold w-full gap-2"
                      onClick={() => {
                        window.location.href = `/booking?issue=${encodeURIComponent(symptom.title)}`;
                      }}
                    >
                      Fix This Issue
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Button
            variant="ghost"
            onClick={() => setShowAll(!showAll)}
            className="text-white/60 hover:text-white font-medium flex items-center gap-2 group"
          >
            {showAll ? 'Show Less' : 'Show All Issues'}
            <ArrowRight
              className={`h-4 w-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
            />
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
