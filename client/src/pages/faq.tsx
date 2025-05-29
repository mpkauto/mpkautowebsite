import { Helmet } from 'react-helmet';
import FAQSection from '@/components/home/FAQSection';

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services do you offer for auto air conditioning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide comprehensive auto AC services including diagnostics, refrigerant recharging, leak detection and repair, compressor replacement, condenser and evaporator repair, and complete system overhauls. Our certified technicians are trained to work on all vehicle makes and models."
        }
      },
      {
        "@type": "Question",
        "name": "How long does an AC service typically take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most standard AC services like refrigerant recharging or basic diagnostics can be completed within 1-2 hours. More complex repairs such as compressor replacement may take 3-4 hours. We pride ourselves on our quick turnaround times, with 95% of services completed same-day."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer doorstep or mobile AC repair services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer convenient doorstep services for many AC repairs and maintenance tasks. Our mobile technicians can perform diagnostics, refrigerant recharging, and minor repairs at your home or office. For more complex issues requiring specialized equipment, we may recommend bringing your vehicle to our workshop."
        }
      },
      {
        "@type": "Question",
        "name": "How often should I get my car's AC system serviced?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend having your car's AC system checked at least once a year, ideally before summer begins. Regular maintenance helps prevent major issues, ensures optimal cooling performance, and can extend the life of your AC components."
        }
      },
      {
        "@type": "Question",
        "name": "What are signs that my car's AC needs servicing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common signs include weak airflow, air not cooling properly, unusual noises when the AC is running, strange odors from the vents, and water leaking inside the vehicle. If you notice any of these symptoms, it's best to have your system checked promptly to prevent more serious damage."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>FAQ | MPK Auto Air Conditioning</title>
        <meta 
          name="description" 
          content="Find answers to frequently asked questions about our automotive air conditioning services."
        />
        <meta 
          property="og:title" 
          content="FAQ | MPK Auto Air Conditioning"
        />
        <meta 
          property="og:description" 
          content="Get answers to common questions about vehicle AC maintenance, repair, and service."
        />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <main className="min-h-screen bg-black">
        <FAQSection />
      </main>
    </>
  );
} 