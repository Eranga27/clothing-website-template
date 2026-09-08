'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export interface InfiniteMarqueeProps {
  items: string[];
  speed?: number; // duration in seconds for one loop cycle
  pauseOnHover?: boolean;
  className?: string;
  separator?: string;
}

export const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({
  items,
  speed = 28,
  pauseOnHover = true,
  className = '',
  separator = '·',
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Duplicate items array 4 times for seamless continuous looping across ultra-wide viewports
  const quadrupledItems = [...items, ...items, ...items, ...items];

  if (shouldReduceMotion) {
    return (
      <div className={`py-5 bg-naxis-brown-espresso text-cream-100 border-y border-naxis-gold/20 overflow-x-auto ${className}`}>
        <div className="flex items-center justify-center gap-6 px-6 text-center">
          {items.map((item, idx) => (
            <span key={idx} className="font-serif text-xs md:text-sm tracking-[0.3em] uppercase text-cream-200">
              {item} {idx < items.length - 1 && <span className="text-naxis-gold mx-2">{separator}</span>}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full overflow-hidden select-none py-5 md:py-6 bg-naxis-brown-espresso text-cream-100 border-y border-naxis-gold/20 ${className}`}
      style={{
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
        maskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
      }}
    >
      <motion.div
        className={`flex items-center whitespace-nowrap will-change-transform ${
          pauseOnHover ? 'hover:[animation-play-state:paused]' : ''
        }`}
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        }}
      >
        {quadrupledItems.map((item, idx) => (
          <div
            key={`${item}-${idx}`}
            className="flex items-center shrink-0 px-5 sm:px-8 group"
          >
            <span className="font-serif text-xs sm:text-sm md:text-base tracking-[0.3em] uppercase text-cream-100 group-hover:text-naxis-gold-light transition-colors duration-300 font-light">
              {item}
            </span>
            <span className="ml-5 sm:ml-8 text-naxis-gold text-xs select-none">
              {separator}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
