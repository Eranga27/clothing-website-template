'use client';

import React, { useState } from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { PhilosophySection } from '@/components/home/PhilosophySection';
import { FeaturedCollection } from '@/components/home/FeaturedCollection';
import { ProductGridPreview } from '@/components/home/ProductGridPreview';
import { EditorialSplit } from '@/components/home/EditorialSplit';
import { EditorialBanner } from '@/components/home/EditorialBanner';
import { QuickViewModal } from '@/components/shop/QuickViewModal';
import { InfiniteMarquee } from '@/components/ui/InfiniteMarquee';
import { Product } from '@/config/products';

const marqueeItems = [
  "NEW ARRIVALS",
  "AUTUMN / WINTER 2026",
  "ETHICALLY CRAFTED",
  "ITALIAN GABARDINE",
  "QUIET LUXURY",
  "TAILORED SILHOUETTES",
  "PARIS STUDIO EDIT",
  "COMPLIMENTARY WORLDWIDE SHIPPING",
];

export default function HomePage() {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  return (
    <main className="min-h-screen bg-cream-100 font-sans">
      {/* Section 1: Full-bleed hero video with fade-up tagline */}
      <HeroSection />

      {/* Infinite Auto-scrolling Strip directly below Hero */}
      <InfiniteMarquee items={marqueeItems} speed={35} type="text" separator="✦" />

      {/* Section 2: One-line brand philosophy in large serif type that reveals on scroll */}
      <PhilosophySection />

      {/* Section 3: Featured collection — 2–3 large image tiles with hover zoom */}
      <FeaturedCollection />

      {/* Section 4: Product grid preview — 4–6 cards with image crossfade on hover */}
      <ProductGridPreview onQuickView={(p) => setQuickViewProduct(p)} />

      {/* Section 5: Full-bleed Editorial Video Banner */}
      <EditorialBanner />

      {/* Section 6: Editorial split section with vertical video & story text */}
      <EditorialSplit />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </main>
  );
}
