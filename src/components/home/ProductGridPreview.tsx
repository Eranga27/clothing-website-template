'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { products, Product } from '@/config/products';
import { ProductCard } from '../shop/ProductCard';
import { ScrollReveal } from '../ui/ScrollReveal';

interface ProductGridPreviewProps {
  onQuickView?: (product: Product) => void;
}

export const ProductGridPreview: React.FC<ProductGridPreviewProps> = ({ onQuickView }) => {
  // Display first 4 to 6 curated products
  const previewProducts = products.slice(0, 6);

  return (
    <section className="bg-cream-100 py-24 md:py-36 px-6 md:px-12 border-b border-cream-200/60">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-cream-300/40">
            <div>
              <span className="text-xs font-mono tracking-widest uppercase text-editorial-muted block mb-2">
                Atelier Catalog
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-light text-near-black tracking-tight">
                Essential Wardrobe
              </h2>
            </div>
            <p className="mt-2 md:mt-0 text-xs font-mono tracking-wider uppercase text-editorial-muted max-w-xs">
              Meticulously engineered silhouettes cut from organic Italian weaves and cashmere.
            </p>
          </div>
        </ScrollReveal>

        {/* Product Cards Grid: 4-6 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {previewProducts.map((product, idx) => (
            <ScrollReveal key={product.id} delay={idx * 0.1}>
              <ProductCard product={product} onQuickView={onQuickView} />
            </ScrollReveal>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-16 text-center">
          <ScrollReveal delay={0.3}>
            <Link
              href="/shop"
              className="inline-flex items-center gap-3 px-10 py-4 bg-near-black text-cream-100 text-xs font-mono tracking-widest uppercase hover:bg-editorial-charcoal transition-all hover:scale-[1.02] shadow-xl group"
            >
              <span>Explore All Garments</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
