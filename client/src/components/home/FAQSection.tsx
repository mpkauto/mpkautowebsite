import { motion, AnimatePresence } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle, ChevronDown, Search, Phone } from 'lucide-react';
import { Link } from 'wouter';
import { useState } from 'react';
import { Input } from '@/components/ui/input';

export default function FAQSection() {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: 'What services do you offer for auto air conditioning?',
      answer:
        'We provide comprehensive auto AC services including diagnostics, refrigerant recharging, leak detection and repair, compressor replacement, condenser and evaporator repair, and complete system overhauls. Our certified technicians are trained to work on all vehicle makes and models.',
    },
    {
      question: 'How long does an AC service typically take?',
      answer:
        'Most standard AC services like refrigerant recharging or basic diagnostics can be completed within 1-2 hours. More complex repairs such as compressor replacement may take 3-4 hours. We pride ourselves on our quick turnaround times, with 95% of services completed same-day.',
    },
    {
      question: 'Do you offer doorstep or mobile AC repair services?',
      answer:
        'Yes, we offer convenient doorstep services for many AC repairs and maintenance tasks. Our mobile technicians can perform diagnostics, refrigerant recharging, and minor repairs at your home or office. For more complex issues requiring specialized equipment, we may recommend bringing your vehicle to our workshop.',
    },
    {
      question: "How often should I get my car's AC system serviced?",
      answer:
        "We recommend having your car's AC system checked at least once a year, ideally before summer begins. Regular maintenance helps prevent major issues, ensures optimal cooling performance, and can extend the life of your AC components.",
    },
    {
      question: "What are signs that my car's AC needs servicing?",
      answer:
        "Common signs include weak airflow, air not cooling properly, unusual noises when the AC is running, strange odors from the vents, and water leaking inside the vehicle. If you notice any of these symptoms, it's best to have your system checked promptly to prevent more serious damage.",
    },
    {
      question: 'Do you provide warranty on your AC repair services?',
      answer:
        'Yes, all our AC repair services come with a 12-month warranty covering both parts and labor. This ensures your peace of mind and reflects our confidence in the quality of our workmanship and the parts we use.',
    },
  ];

  // Filter FAQs based on search query
  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const contentVariants = {
    hidden: {
      height: 0,
      opacity: 0.5,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    visible: {
      height: 'auto',
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="py-16 px-6 md:px-12 bg-white relative">
      <div className="container mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-5">
            <div className="h-0.5 w-12 bg-metallic/50 mr-4"></div>
            <span className="text-gray-900 font-medium uppercase tracking-wider text-sm">
              Frequently Asked Questions
            </span>
            <div className="h-0.5 w-12 bg-metallic/50 ml-4"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6">
            Common Questions About Our <span className="text-blue-600">AC Services</span>
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our auto AC services, including service duration,
            mobile repairs, maintenance schedules, and more.
          </p>
        </div>

        {/* Search input */}
        <div className="max-w-xl mx-auto mb-8 relative">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search AC questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-metallic/30 focus:border-metallic transition-all duration-300"
            />
          </div>
        </div>

        {/* FAQ accordion */}
        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: '-100px' }}
        >
          <Accordion type="single" collapsible defaultValue="" className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg overflow-hidden mb-4 last:mb-0 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 text-left font-semibold text-gray-900 flex items-center justify-between group data-[state=open]:bg-gray-50">
                    <span>{faq.question}</span>
                    <motion.div
                      animate={{ rotate: 0 }}
                      transition={{ duration: 0.3 }}
                      className="group-data-[state=open]:rotate-180 transform transition-transform duration-300"
                    >
                      <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-300 group-hover:text-gray-700" />
                    </motion.div>
                  </AccordionTrigger>
                  <AnimatePresence>
                    <AccordionContent className="px-6 pb-6 pt-2 text-gray-600 bg-gray-50/50">
                      <motion.div
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                      >
                        {faq.answer}
                      </motion.div>
                    </AccordionContent>
                  </AnimatePresence>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          {/* Sticky CTA */}
          <div className="sticky bottom-0 left-0 right-0 mt-12 p-6 bg-white border-t border-gray-200 shadow-lg rounded-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Have More Questions?</h3>
                <p className="text-gray-600">Get in touch with our friendly support team</p>
              </div>
              <div className="flex gap-4">
                <Link href="/contact">
                  <Button variant="outline" className="gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Contact Us
                  </Button>
                </Link>
                <a
                  href="https://wa.me/YOUR_WHATSAPP_NUMBER"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="default"
                    className="bg-[#25D366] text-white hover:bg-[#1DA851] gap-2"
                  >
                    <Phone className="h-5 w-5" />
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
