'use client';

import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { BrandStatementSection } from '@/components/home/BrandStatementSection';
import { InfiniteMarquee } from '@/components/ui/InfiniteMarquee';
import { CapabilitiesSection } from '@/components/home/CapabilitiesSection';
import { GlobalNetworkSection } from '@/components/home/GlobalNetworkSection';
import { CinematicDivider } from '@/components/ui/CinematicDivider';
import { CertificationsSection } from '@/components/home/CertificationsSection';
import { DifferentiatorStrip } from '@/components/home/DifferentiatorStrip';
import { ClosingCTASection } from '@/components/home/ClosingCTASection';
import { MobileStickyCTA } from '@/components/layout/MobileStickyCTA';
import { siteConfig } from '@/config/site';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream-100 font-sans text-naxis-brown selection:bg-naxis-brown selection:text-naxis-gold-light">
      {/* 1. Full-bleed hero — kinetic typography headline + video background */}
      <HeroSection />

      {/* 2. One-line brand statement revealing on scroll */}
      <BrandStatementSection />

      {/* 3. InfiniteMarquee: seamless horizontal auto-scrolling strip */}
      <InfiniteMarquee
        items={siteConfig.marqueeItems}
        speed={28}
        separator="·"
      />

      {/* 4. Capabilities preview: large image tiles with slow hover zoom + expandable accordion */}
      <CapabilitiesSection />

      {/* 5. Global Network: 6 sovereign production hubs with plain facts */}
      <GlobalNetworkSection />

      {/* Cinematic video divider — full-bleed editorial pause between major sections */}
      <CinematicDivider
        videoSrc="/media/editorial.mp4"
        poster="/apparel4.jpg"
        caption="Precision at Every Scale"
      />

      {/* 6. Certifications strip: SEDEX, WRAP, CT-PAT + static heritage seal once */}
      <CertificationsSection />

      {/* 7. Compact 3-item differentiator strip: Certified / Six Countries / Direct Comms */}
      <DifferentiatorStrip />

      {/* 8. Closing Call & WhatsApp CTA */}
      <ClosingCTASection />

      {/* Mobile-first Sticky Call & WhatsApp CTA Bar */}
      <MobileStickyCTA />
    </main>
  );
}
