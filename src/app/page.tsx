'use client';

import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { BrandStatementSection } from '@/components/home/BrandStatementSection';
import { CapabilitiesSection } from '@/components/home/CapabilitiesSection';
import { GlobalNetworkSection } from '@/components/home/GlobalNetworkSection';
import { CertificationsSection } from '@/components/home/CertificationsSection';
import { ClosingCTASection } from '@/components/home/ClosingCTASection';
import { MobileStickyCTA } from '@/components/layout/MobileStickyCTA';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream-100 font-sans text-naxis-brown selection:bg-naxis-brown selection:text-naxis-gold-light">
      {/* (1) Full-bleed hero image/video with slow fade/zoom and centered NAXIS wordmark + tagline */}
      <HeroSection />

      {/* (2) One-line brand statement about global manufacturing excellence that reveals on scroll */}
      <BrandStatementSection />

      {/* (3) Capabilities preview — large image tiles for product categories with slow hover zoom */}
      <CapabilitiesSection />

      {/* (4) Global Network section showing countries of operation (Sri Lanka, India, Bangladesh, Vietnam, China, Italy) */}
      <GlobalNetworkSection />

      {/* (5) Certifications strip showing SEDEX/WRAP/C-TPAT badges alongside the circular heritage seal */}
      <CertificationsSection />

      {/* (6) Closing call-to-action section with prominent "Call" and "WhatsApp/Text" buttons */}
      <ClosingCTASection />

      {/* Mobile-first Sticky Call & WhatsApp CTA */}
      <MobileStickyCTA />
    </main>
  );
}
