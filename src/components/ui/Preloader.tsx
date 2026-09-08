'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { siteConfig } from '@/config/site';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setLoading(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const diff = Math.floor(Math.random() * 20) + 12;
        return Math.min(prev + diff, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  if (shouldReduceMotion) return null;

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ 
            y: '-100%', 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[100] bg-naxis-brown-espresso text-cream-100 flex flex-col items-center justify-between py-16 px-8 select-none"
        >
          {/* Top Tagline */}
          <div className="text-[10px] font-mono uppercase tracking-super-wide text-naxis-gold-light/90">
            NAXIS &bull; GLOBAL OFFSHORE ATELIER
          </div>

          {/* Centered Minimalist Logo */}
          <div className="flex flex-col items-center gap-6 max-w-lg text-center">
            <div className="relative p-4">
              <div className="absolute inset-0 bg-naxis-gold/15 rounded-full blur-2xl" />
              <img
                src="/logo.png"
                alt="NAXIS"
                className="h-14 md:h-18 w-auto object-contain relative z-10 filter drop-shadow-[0_0_20px_rgba(184,145,47,0.3)]"
              />
            </div>

            <div className="space-y-1.5">
              <h2 className="font-serif italic text-2xl md:text-3xl font-light text-cream-100 tracking-wide">
                Offshore Garment Manufacturing
              </h2>
              <p className="text-[10px] font-mono tracking-super-wide text-cream-300/70 uppercase">
                Six Sovereign Territories &bull; Uncompromising Precision
              </p>
            </div>
          </div>

          {/* Bottom Progress Bar */}
          <div className="w-full max-w-xs flex flex-col items-center gap-3">
            <div className="w-full bg-cream-100/10 h-[2px] rounded-full overflow-hidden relative">
              <motion.div
                className="bg-naxis-gold h-full rounded-full transition-all duration-150 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="w-full flex justify-between items-center text-[10px] font-mono tracking-widest text-cream-300/80 uppercase">
              <span>Initializing Atelier</span>
              <span className="font-semibold text-naxis-gold">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
