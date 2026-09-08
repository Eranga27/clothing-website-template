'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { EDITORIAL_EASING } from '../ui/ScrollReveal';

export const CapabilitiesSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="capabilities" className="py-24 md:py-36 bg-cream-50 text-naxis-brown border-b border-naxis-brown/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header: masholdings pattern — headline -> two sentences */}
        <div className="max-w-3xl mb-16 md:mb-20 space-y-4">
          <span className="text-[11px] font-mono tracking-super-wide uppercase text-naxis-gold block">
            Capabilities
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-naxis-brown">
            What We Manufacture
          </h2>
          <p className="text-sm md:text-base font-sans text-editorial-muted leading-relaxed">
            From performance sportswear to handcrafted leather goods, our production lines are built to handle real orders at real scale.
          </p>
        </div>

        {/* Large Image Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {siteConfig.capabilities.map((cat, index) => {
            const isExpanded = expandedId === cat.id;

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: EDITORIAL_EASING }}
                className="group flex flex-col bg-white border border-naxis-brown/10 overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-500"
              >
                {/* Large Image Container with Slow Restrained Zoom (scale 1.0 -> 1.05, ~600ms) */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-naxis-brown-deep">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.04] transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />

                  {cat.isPlaceholder && (
                    <div className="absolute top-4 right-4 bg-naxis-brown-espresso/90 text-naxis-gold text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 border border-naxis-gold/30">
                      Client Confirmation
                    </div>
                  )}
                </div>

                {/* Content Body: Exactly one clear point */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-serif text-xl sm:text-2xl font-light text-naxis-brown leading-snug">
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-sans text-editorial-muted leading-relaxed">
                      {cat.description}
                    </p>

                    {cat.confirmPlaceholder && (
                      <p className="text-[11px] font-mono text-naxis-gold italic leading-normal pt-1">
                        {cat.confirmPlaceholder}
                      </p>
                    )}
                  </div>

                  {/* Expandable Technical Details Accordion */}
                  <div className="pt-4 border-t border-naxis-brown/10 space-y-3">
                    <button
                      onClick={() => toggleAccordion(cat.id)}
                      className="w-full flex items-center justify-between text-xs font-mono uppercase tracking-wider text-naxis-brown hover:text-naxis-gold transition-colors py-1"
                      aria-expanded={isExpanded}
                    >
                      <span>Technical Details</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180 text-naxis-gold' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: EDITORIAL_EASING }}
                          className="overflow-hidden"
                        >
                          <ul className="space-y-2 pt-2 text-xs font-mono text-editorial-muted border-t border-naxis-brown/5">
                            {cat.specs.map((spec, sIdx) => (
                              <li key={sIdx} className="flex items-start gap-2">
                                <span className="text-naxis-gold mt-0.5">•</span>
                                <span>{spec}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Single Clear Call to Action */}
                    <div className="pt-2">
                      <a
                        href="/#contact"
                        className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-naxis-gold hover:text-naxis-brown font-semibold transition-colors"
                      >
                        <span>Inquire on Category</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
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
