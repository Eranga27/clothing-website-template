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
  "ERANGA'S CLOTHING STORE",
  "SRI LANKA & AUSTRALIA",
  "NEW ARRIVALS 2026",
  "ITALIAN GABARDINE & CASHMERE",
  "QUIET LUXURY",
  "TAILORED SILHOUETTES",
  "COLOMBO & MELBOURNE SHOWROOMS",
  "FREE EXPRESS SHIPPING OVER $150 AUD",
];

const galleryImages = [
  "/apparel1.jpg",
  "/apparel2.jpg",
  "/apparel3.jpg",
  "/apparel4.jpg",
  "/media/featured-1.png",
  "/media/featured-2.png",
  "/media/featured-3.png",
  "/media/featured-4.png",
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
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

      {/* Gallery Marquee (scrolling opposite direction, right to left) placed directly below Philosophy */}
      <div className="py-2 bg-cream-100 border-b border-cream-200/60 overflow-hidden">
        <div className="text-center mb-3">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-editorial-muted">
            &mdash; GARMENT GALLERY &mdash;
          </span>
        </div>
        <InfiniteMarquee
          items={galleryImages}
          speed={38}
          direction="right"
          type="images"
        />
      </div>

      {/* Section 3: Featured collection — large image tiles with hover zoom */}
      <FeaturedCollection />

      {/* Section 4: Product grid preview — cards with image crossfade on hover */}
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
