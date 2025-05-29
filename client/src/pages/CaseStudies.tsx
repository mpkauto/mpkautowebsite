import { Helmet } from "react-helmet";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";

export default function CaseStudiesPage() {
  return (
    <>
      <Helmet>
        <title>Case Studies | MPK Auto Air Conditioning</title>
        <meta 
          name="description" 
          content="Explore our success stories and case studies showcasing our expertise in automotive air conditioning services."
        />
        <meta 
          property="og:title" 
          content="Case Studies | MPK Auto Air Conditioning"
        />
        <meta 
          property="og:description" 
          content="Real-world examples of how we've helped customers with their vehicle AC needs."
        />
      </Helmet>
      
      <main className="min-h-screen bg-black">
        <CaseStudiesSection />
      </main>
    </>
  );
} 