import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import SymptomsSection from "@/components/home/SymptomsSection";
import TrustSection from "@/components/home/TrustSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import CTABanner from "@/components/home/CTABanner";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
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
      <HeroSection />
      <ServicesSection />
      <SymptomsSection />
      <TrustSection />
      <HowItWorksSection />
      <CTABanner />
    </>
  );
}
