'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface InfiniteMarqueeProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: number; // duration in seconds for 1 full loop cycle
  pauseOnHover?: boolean;
  type?: 'text' | 'logos' | 'images' | 'custom';
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
  separator = '✦',
}) => {
  // Duplicate array 3 times to ensure zero gap or jump on large monitors
  const tripledItems = [...items, ...items, ...items];

  // Direction multiplier
  const fromX = direction === 'left' ? '0%' : '-33.333%';
  const toX = direction === 'left' ? '-33.333%' : '0%';

  return (
    <div
      className={`relative w-full overflow-hidden select-none ${
        type === 'images' ? 'py-6 bg-cream-100' : 'py-6 md:py-7 bg-cream-200/60 border-y border-cream-300/50'
      } ${className}`}
      style={{
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
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
            className={`flex items-center shrink-0 group ${
              type === 'images' ? 'px-3 sm:px-4' : 'px-6 sm:px-8 md:px-10'
            }`}
          >
            {type === 'text' && (
              <span className="font-serif text-sm sm:text-base md:text-lg lg:text-xl tracking-[0.25em] uppercase text-near-black/90 group-hover:text-near-black transition-colors font-semibold">
                {item}
              </span>
            )}

            {type === 'images' && (
              <div className="relative overflow-hidden rounded shadow-sm border border-cream-300/60 bg-cream-200">
                <img
                  src={item}
                  alt="Garment showcase"
                  className="h-44 sm:h-56 md:h-64 lg:h-72 w-36 sm:w-44 md:w-52 lg:w-56 object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-near-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            )}

            {type === 'logos' && (
              <img
                src={item}
                alt="Brand logo"
                className="h-8 md:h-10 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            )}

            {type === 'custom' && (
              <span>{item}</span>
            )}

            {/* Separator icon/bullet for text mode */}
            {type === 'text' && (
              <span className="ml-6 sm:ml-8 md:ml-10 text-amber-800/60 text-xs sm:text-sm select-none font-serif">
                {separator}
              </span>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
