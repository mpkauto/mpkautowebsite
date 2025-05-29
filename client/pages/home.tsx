import React from 'react';
import { Layout } from '../components/layout';
import { Hero } from '../components/hero';
import { CtaBanner } from '../components/cta-banner'; // Import the new component

export function HomePage() {
  return (
    <Layout
      title="MPK Auto Service - Professional Air Conditioning Services"
      description="Professional air conditioning services for your vehicle. Fast, local, and trusted service with expert technicians."
    >
      <Hero />
      {/* TODO: Import and implement ServicesSection component */}
      {/* <ServicesSection /> */}
      {/* <HowItWorksSection /> */}
      {/* <TrustSection /> */} {/* TODO: Import and implement TrustSection component */}
      <CtaBanner />
    </Layout>
  );
}
