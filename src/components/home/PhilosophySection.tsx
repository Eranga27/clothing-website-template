'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EDITORIAL_EASING } from '../ui/ScrollReveal';

export const PhilosophySection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Segmenting the text to italicize the full philosophy and bold the core foundation
  const textSegments = [
    { text: "We believe in deliberate garments—", bold: false },
    { text: "unhurried design, quiet confidence, and tactile geometry", bold: true },
    { text: " built to endure beyond seasons.", bold: false },
  ];

  return (
    <section className="bg-cream-100 text-near-black py-24 md:py-36 px-6 md:px-12 border-b border-cream-200/60 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-xs font-mono tracking-[0.25em] uppercase text-editorial-muted block mb-8">
          &mdash; PHILOSOPHY &mdash;
        </span>

        {/* Scroll Reveal Italicized H2 with Bold Emphasis */}
        <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.3] tracking-tight text-near-black/90">
          {textSegments.map((segment, segIdx) => {
            const words = segment.text.split(' ');
            return words.map((word, wordIdx) => {
              if (!word) return null;
              const globalIdx = segIdx * 10 + wordIdx;
              return (
                <React.Fragment key={`${segIdx}-${wordIdx}`}>
                  {shouldReduceMotion ? (
                    <span
                      className={`inline-block mr-[0.28em] ${
                        segment.bold ? 'font-serif not-italic font-bold text-near-black underline decoration-amber-800/30 underline-offset-8' : ''
                      }`}
                    >
                      {word}
                    </span>
                  ) : (
                    <motion.span
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{
                        duration: 0.8,
                        delay: globalIdx * 0.03,
                        ease: EDITORIAL_EASING,
                      }}
                      className={`inline-block mr-[0.28em] ${
                        segment.bold ? 'font-serif italic font-bold text-near-black border-b-2 border-amber-800/40 pb-1' : ''
                      }`}
                    >
                      {word}
                    </motion.span>
                  )}
                </React.Fragment>
              );
            });
          })}
        </h2>

        <div className="mt-12 flex justify-center">
          <div className="w-16 h-[1px] bg-near-black/25" />
        </div>
      </div>
    </section>
  );
};
