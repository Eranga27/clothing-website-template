'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { featuredCollections } from '@/config/products';
import { ScrollReveal } from '../ui/ScrollReveal';

export const FeaturedCollection: React.FC = () => {
  // Split into two rows: [col-01, col-02] and [col-03, col-04]
  const row1 = featuredCollections.slice(0, 2);
  const row2 = featuredCollections.slice(2, 4);

  return (
    <section className="bg-cream-100 py-24 md:py-36 px-6 md:px-12 border-b border-cream-200/60">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-cream-300/40">
            <div>
              <span className="text-xs font-mono tracking-widest uppercase text-editorial-muted block mb-2">
                Curated Edits
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-light text-near-black tracking-tight">
                Featured Collections
              </h2>
            </div>
            <Link
              href="/shop"
              className="mt-4 md:mt-0 text-xs font-mono tracking-widest uppercase text-near-black hover:text-editorial-muted transition-colors flex items-center gap-1 group"
            >
              <span>View All Edits</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Row 1: Large tile + smaller tile */}
        <div className="flex flex-col lg:flex-row gap-6 mb-6">
          {row1.map((item, idx) => {
            const isLarge = idx === 0;
            return (
              <ScrollReveal key={item.id} delay={idx * 0.15} className={isLarge ? 'lg:w-[58%]' : 'lg:w-[42%]'}>
                <Link
                  href={item.href}
                  className="group block relative overflow-hidden bg-near-black shadow-md w-full"
                >
                  {/* Image with hover zoom */}
                  <div className={`relative w-full overflow-hidden ${isLarge ? 'aspect-[4/3]' : 'aspect-[4/3]'}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 brightness-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-near-black/80 via-near-black/20 to-transparent" />
                  </div>

                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10 text-cream-100">
                    <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-cream-300/80 mb-2 block drop-shadow-sm">
                      Edition {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-serif text-xl md:text-3xl font-light tracking-wide mb-2 group-hover:underline underline-offset-4 decoration-cream-300/40 drop-shadow-md">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm font-sans text-cream-200/75 max-w-sm font-light leading-relaxed drop-shadow-sm">
                      {item.subtitle}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Row 2: Smaller tile + Large tile (reversed layout) */}
        <div className="flex flex-col lg:flex-row gap-6">
          {row2.map((item, idx) => {
            const isLarge = idx === 1;
            return (
              <ScrollReveal key={item.id} delay={(idx + 2) * 0.15} className={isLarge ? 'lg:w-[58%]' : 'lg:w-[42%]'}>
                <Link
                  href={item.href}
                  className="group block relative overflow-hidden bg-near-black shadow-md w-full"
                >
                  {/* Image with hover zoom */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 brightness-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-near-black/80 via-near-black/20 to-transparent" />
                  </div>

                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10 text-cream-100">
                    <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-cream-300/80 mb-2 block drop-shadow-sm">
                      Edition {String(idx + 3).padStart(2, '0')}
                    </span>
                    <h3 className="font-serif text-xl md:text-3xl font-light tracking-wide mb-2 group-hover:underline underline-offset-4 decoration-cream-300/40 drop-shadow-md">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm font-sans text-cream-200/75 max-w-sm font-light leading-relaxed drop-shadow-sm">
                      {item.subtitle}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
