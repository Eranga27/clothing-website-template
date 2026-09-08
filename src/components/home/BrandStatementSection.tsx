'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { EDITORIAL_EASING } from '../ui/ScrollReveal';

export const BrandStatementSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Words split for smooth staggered reveal
  const statementWords = siteConfig.brandStatement.split(' ');

  return (
    <section className="relative py-28 md:py-40 bg-cream-100 text-naxis-brown border-b border-naxis-brown/10 overflow-hidden">
      {/* Background Subtle Watermark Line Art */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
        <span className="font-serif text-[18vw] font-bold tracking-tighter text-naxis-brown select-none">
          NAXIS
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Pre-title with Emerald Accent */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12 md:mb-16 border-b border-naxis-brown/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-naxis-emerald animate-pulse" />
            <span className="text-[11px] font-mono tracking-super-wide uppercase text-naxis-brown/70">
              Sovereign Offshore Production Protocol
            </span>
          </div>

          <span className="text-[11px] font-mono tracking-widest text-naxis-gold uppercase">
            Est. Melbourne & Colombo &bull; Global Operations
          </span>
        </div>

        {/* The One-Line Brand Statement Reveal on Scroll */}
        <div className="max-w-5xl mx-auto text-center my-6 md:my-10">
          <motion.blockquote
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-naxis-brown font-light leading-[1.2] md:leading-[1.25] tracking-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: shouldReduceMotion ? 0 : 0.045,
                },
              },
            }}
          >
            {statementWords.map((word, index) => {
              const isAccent =
                word.toLowerCase().includes('precision') ||
                word.toLowerCase().includes('haute') ||
                word.toLowerCase().includes('scale');

              return (
                <motion.span
                  key={index}
                  className={`inline-block mr-[0.28em] ${
                    isAccent ? 'text-naxis-gold italic font-normal' : ''
                  }`}
                  variants={{
                    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        ease: EDITORIAL_EASING,
                      },
                    },
                  }}
                >
                  {word}
                </motion.span>
              );
            })}
          </motion.blockquote>
        </div>

        {/* Minimalist 4-Column Stat Pillar Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.3, ease: EDITORIAL_EASING }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 md:pt-24 border-t border-naxis-brown/10"
        >
          {siteConfig.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col space-y-2 border-l border-naxis-gold/30 pl-5">
              <span className="font-serif text-3xl md:text-4xl text-naxis-brown font-light tracking-tight">
                {stat.value}
              </span>
              <span className="text-[11px] font-mono tracking-widest text-editorial-muted uppercase leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
