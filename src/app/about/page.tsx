'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream-100 font-sans py-16 md:py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header Hero */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-editorial-muted block mb-4">
              Our Ethos & Architecture
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-near-black tracking-tight leading-[1.1] mb-6">
              Garments made slow, for lives lived deliberately.
            </h1>
            <p className="text-sm sm:text-base font-sans font-light text-near-black/80 leading-relaxed max-w-xl mx-auto">
              Founded on principles of architectural minimalism, {siteConfig.name} rejects seasonal trend cycles in favor of permanent, sculpted forms crafted from noble raw fibers.
            </p>
          </div>
        </ScrollReveal>

        {/* Editorial Split 1: Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center my-20 py-12 border-t border-b border-cream-200/80">
          <div className="md:col-span-6 space-y-6">
            <ScrollReveal>
              <span className="text-xs font-mono tracking-widest uppercase text-editorial-muted block">
                01 &bull; Design Philosophy
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-near-black leading-tight">
                Reduction to purest essence.
              </h2>
              <p className="text-xs md:text-sm font-sans font-light text-near-black/80 leading-relaxed">
                We begin each design not with ornamentation, but with structure. By stripping away extraneous hardware and aggressive branding, the weight of the wool, the drape of the silk, and the precision of the seam become the focal point.
              </p>
              <p className="text-xs md:text-sm font-sans font-light text-near-black/80 leading-relaxed">
                Every pattern is drawn in our Paris workshop and engineered with generous internal seam allowances to facilitate lifetime custom fitting.
              </p>
            </ScrollReveal>
          </div>

          <div className="md:col-span-6">
            <ScrollReveal delay={0.2}>
              <div className="relative aspect-[4/5] w-full bg-cream-200 overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
                  alt="Minimalist design pattern drafting"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover filter brightness-[0.96]"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Editorial Split 2: Sourcing & Atelier */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center my-20">
          <div className="md:col-span-6 order-2 md:order-1">
            <ScrollReveal>
              <div className="relative aspect-[4/5] w-full bg-cream-200 overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop"
                  alt="Biella wool weaving mill"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover filter brightness-[0.94]"
                />
              </div>
            </ScrollReveal>
          </div>

          <div className="md:col-span-6 order-1 md:order-2 space-y-6">
            <ScrollReveal delay={0.2}>
              <span className="text-xs font-mono tracking-widest uppercase text-editorial-muted block">
                02 &bull; Sourcing Integrity
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-near-black leading-tight">
                Noble fibers from historic Italian & French looms.
              </h2>
              <p className="text-xs md:text-sm font-sans font-light text-near-black/80 leading-relaxed">
                We partner exclusively with century-old family mills in Piedmont and Lyon who share our dedication to environmental stewardship. Our cashmere is raw and undyed; our silk charmeuse sandwashed without toxic chemicals; our cotton gabardine 100% GOTS certified organic.
              </p>
              <div className="pt-4 grid grid-cols-2 gap-4 text-xs font-mono tracking-widest uppercase">
                <div className="p-4 bg-cream-200/60 border border-cream-300/40">
                  <span className="font-serif text-lg text-near-black block mb-1">Zero Plastics</span>
                  <span className="text-editorial-muted">All natural horn buttons & cotton lining</span>
                </div>
                <div className="p-4 bg-cream-200/60 border border-cream-300/40">
                  <span className="font-serif text-lg text-near-black block mb-1">Lifetime Care</span>
                  <span className="text-editorial-muted">Complimentary repair service for all coats</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Brand Promise Callout */}
        <ScrollReveal>
          <div className="bg-near-black text-cream-100 p-12 md:p-20 text-center my-20 space-y-6">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-cream-300 block">
              The Atelier Guarantee
            </span>
            <h3 className="font-serif text-3xl sm:text-5xl font-light max-w-3xl mx-auto leading-snug">
              "We measure success not by how many garments we produce, but by how many years each piece remains in your rotation."
            </h3>
            <p className="text-xs font-mono tracking-widest text-cream-400 uppercase pt-4">
              &mdash; {siteConfig.name} Design Studio
            </p>
            <div className="pt-6">
              <Link
                href="/shop"
                className="inline-block px-8 py-3.5 bg-cream-100 text-near-black text-xs font-mono tracking-widest uppercase hover:bg-cream-200 transition-colors"
              >
                Explore Current Collection
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
