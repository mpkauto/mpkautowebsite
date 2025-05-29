import { Helmet } from "react-helmet-async";
import ServicesGridSection from "@/components/home/ServicesGridSection";

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Our Services | MPK Auto Air Conditioning</title>
        <meta 
          name="description" 
          content="Professional automotive air conditioning services including installation, repair, maintenance, and diagnostics."
        />
        <meta 
          property="og:title" 
          content="Our Services | MPK Auto Air Conditioning"
        />
        <meta 
          property="og:description" 
          content="Expert AC services for all vehicle makes and models. Fast, reliable, and affordable solutions."
        />
      </Helmet>
      
      <main className="min-h-screen bg-black">
        <ServicesGridSection />
      </main>
    </>
  );
} 