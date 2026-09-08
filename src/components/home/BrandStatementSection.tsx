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
    <section className="relative py-24 md:py-36 bg-cream-100 text-naxis-brown border-b border-naxis-brown/10 overflow-hidden">
      {/* Background Subtle Watermark */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
        <span className="font-serif text-[16vw] font-bold tracking-tighter text-naxis-brown select-none">
          NAXIS
        </span>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
        {/* Subtle Pre-title */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-naxis-gold" />
          <span className="text-[11px] font-mono tracking-super-wide uppercase text-editorial-muted">
            Offshore Garment Manufacturing
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-naxis-gold" />
        </div>

        {/* The One-Line Brand Statement Reveal on Scroll */}
        <div className="max-w-4xl mx-auto">
          <motion.blockquote
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-naxis-brown font-light leading-[1.25] md:leading-[1.3] tracking-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: shouldReduceMotion ? 0 : 0.04,
                },
              },
            }}
          >
            {statementWords.map((word, index) => {
              const isAccent =
                word.toLowerCase().includes('discipline') ||
                word.toLowerCase().includes('care');

              return (
                <motion.span
                  key={index}
                  className={`inline-block mr-[0.28em] ${
                    isAccent ? 'text-naxis-gold italic font-normal' : ''
                  }`}
                  variants={{
                    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
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

        {/* Minimal Understated Divider */}
        <div className="mt-12 flex justify-center">
          <div className="w-12 h-[1px] bg-naxis-gold/40" />
        </div>
      </div>
    </section>
  );
};
