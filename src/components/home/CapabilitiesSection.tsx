'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { siteConfig, CapabilityCategory } from '@/config/site';
import { EDITORIAL_EASING } from '../ui/ScrollReveal';

export const CapabilitiesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CapabilityCategory | null>(null);

  return (
    <section id="capabilities" className="py-24 md:py-36 bg-cream-50 text-naxis-brown border-b border-naxis-brown/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header: Minimal Louis Vuitton Aesthetic */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 pb-8 border-b border-naxis-brown/10 gap-6">
          <div className="space-y-3">
            <span className="text-[11px] font-mono tracking-super-wide uppercase text-naxis-gold block">
              Atelier Engineering & Offshore Production
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-naxis-brown">
              Manufacturing Capabilities
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm font-sans text-editorial-muted leading-relaxed">
            From technical compression gymwear to full-grain leather saddlery and structured double-face tailoring, our specialized production lines handle complex garment architecture.
          </p>
        </div>

        {/* Large Image Tiles Grid with Slow Hover Zoom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {siteConfig.capabilities.map((cat, index) => {
            const isWide = index === 0 || index === 3;

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: EDITORIAL_EASING }}
                className="group relative flex flex-col bg-white border border-naxis-brown/10 overflow-hidden shadow-xs hover:shadow-xl transition-shadow duration-700"
              >
                {/* Image Container with Slow Restrained Zoom */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-naxis-brown-deep">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.05] transition-transform duration-900 ease-editorial group-hover:scale-105"
                  />

                  {/* Gradient Overlay for Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-naxis-brown-deep/85 via-naxis-brown-deep/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-600" />

                  {/* Top Badge: Category index & MOQ */}
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-cream-100 z-10">
                    <span className="text-[11px] font-mono tracking-widest uppercase bg-naxis-brown-deep/80 backdrop-blur-md px-3 py-1 border border-cream-100/10 text-naxis-gold-light">
                      Cat. 0{index + 1}
                    </span>
                    <span className="text-[11px] font-mono tracking-widest uppercase bg-naxis-brown-deep/80 backdrop-blur-md px-3 py-1 border border-cream-100/10 text-cream-200">
                      MOQ: {cat.moq}
                    </span>
                  </div>

                  {/* Bottom Overlay Title in Hero Image */}
                  <div className="absolute bottom-6 left-6 right-6 z-10 text-cream-100 space-y-1">
                    <span className="text-[10px] font-mono tracking-super-wide uppercase text-naxis-gold-light block">
                      {cat.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-light text-cream-100 leading-snug">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                {/* Content Details Block Below Image */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-1 space-y-6">
                  <div className="space-y-4">
                    <p className="font-serif italic text-base text-naxis-gold text-pretty">
                      "{cat.tagline}"
                    </p>
                    <p className="text-xs sm:text-sm font-sans text-editorial-muted leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  {/* Engineering Specifications List */}
                  <div className="pt-4 border-t border-naxis-brown/10 space-y-3">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-naxis-brown/60 block">
                      Technical Engineering Specs:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {cat.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2 text-xs text-naxis-brown">
                          <span className="text-naxis-emerald mt-0.5">▪</span>
                          <span className="font-mono text-[11px] leading-tight text-naxis-brown/85">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Finishing and Action Link */}
                  <div className="pt-4 border-t border-naxis-brown/10 flex items-center justify-between">
                    <div className="text-[11px] font-mono text-editorial-muted">
                      <span className="text-naxis-brown font-medium">Finishing: </span>
                      {cat.finishing}
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-naxis-gold hover:text-naxis-brown font-semibold transition-colors duration-300 group/link"
                    >
                      <span>Inquire</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
