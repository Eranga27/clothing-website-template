'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { EDITORIAL_EASING } from '../ui/ScrollReveal';

export const PhilosophySection: React.FC = () => {
  const words = siteConfig.philosophy.split(' ');
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-cream-100 text-near-black py-28 md:py-44 px-6 md:px-12 border-b border-cream-200/60 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-xs font-mono tracking-[0.25em] uppercase text-editorial-muted block mb-8">
          &mdash; PHILOSOPHY &mdash;
        </span>

        {/* Scroll Reveal Words */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light leading-[1.25] tracking-tight text-near-black">
          {words.map((word, index) => (
            <React.Fragment key={index}>
              {shouldReduceMotion ? (
                <span className="inline-block mr-[0.28em]">{word}</span>
              ) : (
                <motion.span
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.04,
                    ease: EDITORIAL_EASING,
                  }}
                  className="inline-block mr-[0.28em]"
                >
                  {word}
                </motion.span>
              )}
            </React.Fragment>
          ))}
        </h2>

        <div className="mt-12 flex justify-center">
          <div className="w-12 h-[1px] bg-near-black/20" />
        </div>
      </div>
    </section>
  );
};
