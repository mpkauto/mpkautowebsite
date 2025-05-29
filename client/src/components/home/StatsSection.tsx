import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Clock, Users, CheckCircle } from "lucide-react";

interface StatItem {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  icon: React.ReactNode;
  badge?: {
    text: string;
    color: string;
  };
}

const stats: StatItem[] = [
  {
    value: 5794,
    suffix: "+",
    label: "Satisfied Customers",
    duration: 2.5,
    icon: <Users className="w-5 h-5 text-[#98E2C6]" />,
    badge: {
      text: "Most Trusted",
      color: "bg-[#7EA2FF]/10 text-[#7EA2FF] ring-[#7EA2FF]/20"
    }
  },
  {
    value: 98,
    suffix: "%",
    label: "Success Rate",
    duration: 2,
    icon: <Star className="w-5 h-5 text-[#98E2C6]" />,
    badge: {
      text: "Top Rated",
      color: "bg-[#98E2C6]/10 text-[#98E2C6] ring-[#98E2C6]/20"
    }
  },
  {
    value: 15,
    suffix: "+",
    label: "Years Experience",
    duration: 2,
    icon: <CheckCircle className="w-5 h-5 text-[#98E2C6]" />,
    badge: {
      text: "Established",
      color: "bg-[#7EA2FF]/10 text-[#7EA2FF] ring-[#7EA2FF]/20"
    }
  },
  {
    value: 24,
    suffix: "/7",
    label: "Service Hours",
    duration: 1.5,
    icon: <Clock className="w-5 h-5 text-[#98E2C6]" />
  }
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      className="relative py-16 overflow-hidden bg-[#1A1C22]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Background gradients */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1C22] to-[#15161A]" />
        
        {/* Accent gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-bl from-[#7EA2FF]/5 via-transparent to-transparent" />
        
        {/* Subtle radial gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#7EA2FF]/5 via-transparent to-transparent opacity-30" />

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(45deg,transparent_25%,#98E2C6_25%,#98E2C6_50%,transparent_50%,transparent_75%,#98E2C6_75%)] bg-[length:20px_20px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-[#111113] hover:ring-1 hover:ring-[#7EA2FF]/20 shadow-xl shadow-black/20 ring-1 ring-white/5 backdrop-blur-sm">
                {/* Card gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#7EA2FF]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
                
                {/* Inner shadow for depth */}
                <div className="absolute inset-0 rounded-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]" />
                
                {/* Success badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#98E2C6]/10 flex items-center justify-center ring-1 ring-[#98E2C6]/20">
                  {stat.icon}
                </div>

                {/* Pill badge for key stats */}
                {stat.badge && (
                  <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium ring-1 ${stat.badge.color}`}>
                    {stat.badge.text}
                  </div>
                )}

                <div className="font-heading text-4xl md:text-5xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-[#7EA2FF]">
                  {isInView && (
                    <CountUp
                      end={stat.value}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                      duration={stat.duration}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  )}
                </div>
                <p className="text-[#B0B0B0] text-sm uppercase tracking-wider transition-colors duration-300 group-hover:text-[#7EA2FF]/80">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}