'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { featuredCollections } from '@/config/products';
import { ScrollReveal } from '../ui/ScrollReveal';

export const FeaturedCollection: React.FC = () => {
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

        {/* 2-3 Large Image Tiles Grid */}
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {featuredCollections.map((item, idx) => (
            <div key={item.id} className={item.gridSpan}>
              <ScrollReveal delay={idx * 0.15}>
                <Link href={item.href} className="group block relative overflow-hidden bg-cream-200">
                  {/* Image container with hover zoom */}
                  <div className="relative aspect-[4/5] md:aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-105 filter brightness-[0.95]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-near-black/70 via-near-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  </div>

                  {/* Caption & Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-cream-100 flex flex-col justify-end">
                    <span className="text-xs font-mono tracking-widest uppercase text-cream-300 mb-2">
                      Edition 0{idx + 1}
                    </span>
                    <h3 className="font-serif text-2xl md:text-4xl font-light tracking-wide mb-3 group-hover:underline underline-offset-4 decoration-cream-300/40">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm font-sans text-cream-200/80 max-w-md font-light">
                      {item.subtitle}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
