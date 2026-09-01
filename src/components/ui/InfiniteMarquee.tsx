'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface InfiniteMarqueeProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: number; // duration in seconds for 1 full loop cycle
  pauseOnHover?: boolean;
  type?: 'text' | 'logos' | 'custom';
  className?: string;
  separator?: string;
}

export const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({
  items,
  direction = 'left',
  speed = 30,
  pauseOnHover = true,
  type = 'text',
  className = '',
  separator = '•',
}) => {
  // Duplicate array 3 times to ensure zero gap or jump on large monitors
  const tripledItems = [...items, ...items, ...items];

  // Direction multiplier
  const fromX = direction === 'left' ? '0%' : '-33.333%';
  const toX = direction === 'left' ? '-33.333%' : '0%';

  return (
    <div
      className={`relative w-full overflow-hidden select-none py-4 bg-cream-200/50 border-y border-cream-300/40 ${className}`}
      style={{
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
      }}
    >
      <motion.div
        className={`flex items-center whitespace-nowrap will-change-transform ${
          pauseOnHover ? 'hover:[animation-play-state:paused]' : ''
        }`}
        animate={{
          x: [fromX, toX],
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
        {tripledItems.map((item, idx) => (
          <div
            key={`${item}-${idx}`}
            className="flex items-center shrink-0 px-6 md:px-8 group"
          >
            {type === 'text' && (
              <span className="font-serif text-xs md:text-sm tracking-[0.25em] uppercase text-near-black/80 group-hover:text-near-black transition-colors font-medium">
                {item}
              </span>
            )}

            {type === 'logos' && (
              <img
                src={item}
                alt="Brand logo"
                className="h-7 md:h-9 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            )}

            {type === 'custom' && (
              <span>{item}</span>
            )}

            {/* Separator icon/bullet */}
            <span className="ml-6 md:ml-8 text-amber-800/40 text-[10px] select-none font-mono">
              {separator}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
