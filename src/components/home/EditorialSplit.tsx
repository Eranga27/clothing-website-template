'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { ScrollReveal } from '../ui/ScrollReveal';

export const EditorialSplit: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Subtle parallax translation
  const yParallax = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section
      ref={containerRef}
      className="bg-cream-100 py-24 md:py-40 px-6 md:px-12 border-b border-cream-200/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Parallax Editorial Video Column */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <ScrollReveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-near-black shadow-2xl rounded-sm">
              <motion.div style={{ y: yParallax }} className="relative w-full h-[115%] -top-[7.5%]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.08]"
                >
                  <source src="/media/story.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-near-black/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-near-black/80 via-transparent to-near-black/40" />
              </motion.div>

              {/* Floating Aesthetic Tag */}
              <div className="absolute bottom-6 left-6 z-10 bg-near-black/90 backdrop-blur-md text-cream-100 px-4 py-2 text-[10px] font-mono uppercase tracking-widest border border-cream-100/20 shadow-lg">
                Atelier Film &bull; Biella, Italy
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Text Story Column */}
        <div className="lg:col-span-6 order-1 lg:order-2 space-y-8">
          <ScrollReveal delay={0.2}>
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-editorial-muted block">
              Craft & Origin
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-near-black leading-[1.15] tracking-tight">
              Woven with intention. Tailored without compromise.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="font-sans text-sm sm:text-base font-light text-near-black/80 leading-relaxed">
              Every coat, trouser, and dress begins in historic family-run mills across Biella and Lyon. We select raw, unblended fibers—organic cotton gabardine, undyed cashmere, and high-density virgin wool—that age with dignity.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-cream-300/40 text-xs font-mono tracking-widest uppercase">
              <div>
                <span className="text-near-black font-semibold block text-base font-serif mb-1">100% Organic</span>
                <span className="text-editorial-muted">Zero synthetic microfibers</span>
              </div>
              <div>
                <span className="text-near-black font-semibold block text-base font-serif mb-1">Slow Production</span>
                <span className="text-editorial-muted">Small batch editions</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-block px-8 py-3.5 bg-transparent border border-near-black text-near-black text-xs font-mono tracking-widest uppercase hover:bg-near-black hover:text-cream-100 transition-all"
              >
                Read Atelier Journal
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
