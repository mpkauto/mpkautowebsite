import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-32">
      {/* Gradient blob background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-sky-400/30 to-teal-400/20 blur-2xl opacity-70 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Stay{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400">
              Cool
            </span>{' '}
            with Expert Auto AC Service
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            Professional automotive air conditioning diagnostics, maintenance, and repair. The{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400">
              Smart
            </span>{' '}
            choice for keeping your vehicle comfortable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <a
              href="#services"
              className="btn-gradient px-8 py-3 rounded-md text-white font-medium shadow-lg hover:shadow-sky-400/20 transition-all"
            >
              Explore Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
