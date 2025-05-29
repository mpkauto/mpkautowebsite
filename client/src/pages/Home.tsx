import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import SymptomsSection from "@/components/home/SymptomsSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import ValuePropositionSection from "@/components/home/ValuePropositionSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import PromotionalBanner from "@/components/home/PromotionalBanner";
import FAQSection from "@/components/home/FAQSection";
import BrandLogosGrid from "@/components/home/BrandLogosGrid";
import { Helmet } from "react-helmet-async";
import ServicesGridSection from "@/components/home/ServicesGridSection";
import StatsSection from "@/components/home/StatsSection";
import { Divider } from "@/components/ui/divider";

export default function Home() {
  return (
    <main>
      <Helmet>
        <title>MPK — Auto Air-Conditioning Service | Drive Cool, Drive Smart</title>
        <meta 
          name="description" 
          content="Expert automotive air conditioning service. Fast, affordable, reliable AC repair and maintenance to keep you cool on the road."
        />
        <meta 
          property="og:title" 
          content="MPK — Auto Air-Conditioning Service | Drive Cool, Drive Smart"
        />
        <meta 
          property="og:description" 
          content="Professional automotive air conditioning diagnostics, maintenance, and repair services."
        />
      </Helmet>

      {/* 1. Hero Section */}
      <section id="home" aria-label="Hero section">
      <HeroSection />
      </section>
      <Divider />

      {/* 2. Problem Section */}
      <section id="symptoms" aria-label="Common AC problems">
      <SymptomsSection />
      </section>
      <Divider />

      {/* 3. MPK Difference */}
      <section id="value-proposition" aria-label="Why choose MPK">
      <ValuePropositionSection />
      </section>
      <Divider />

      {/* 4. Services Grid */}
      <section id="services" aria-label="Our services">
        <ServicesGridSection />
      </section>
      <Divider />

      {/* 5. Case Studies */}
      <section id="case-studies" aria-label="Success stories">
        <CaseStudiesSection />
      </section>
      <Divider />

      {/* 6. Pickup & Drop Offer */}
      <section id="promotion" aria-label="Special offer">
      <PromotionalBanner />
      </section>
      <Divider />

      {/* 7. FAQ */}
      <section id="faq" aria-label="Frequently asked questions">
        <FAQSection />
      </section>
      <Divider />

      {/* 8. Trust Indicators - Renamed and split */}
      {/* Contains only StatsSection now */}
      <section id="stats" aria-label="Website statistics and trust factors">
        <StatsSection />
      </section>
      <Divider />

      {/* 9. Brand Logos and Service Areas - New Section */}
      <section id="brands-and-areas" aria-label="Brands we service and service coverage areas" className="bg-white">
        <BrandLogosGrid />
      </section>

    </main>
  );
}
