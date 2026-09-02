'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress counter simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Random incremental steps for natural loading feel
        const diff = Math.floor(Math.random() * 15) + 8;
        return Math.min(prev + diff, 100);
      });
    }, 180);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500); // Brief hold at 100% before curtain reveal
      return () => clearTimeout(timer);
    }
  }, [progress]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ 
            y: '-100%', 
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[100] bg-near-black text-cream-100 flex flex-col items-center justify-between py-16 px-8 select-none"
        >
          {/* Top Tagline */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] font-mono uppercase tracking-[0.35em] text-amber-300/80"
          >
            ERANGA'S CLOTHING STORE &bull; SRI LANKA & AUSTRALIA
          </motion.div>

          {/* Centered Minimalist Welcome Message & Logo */}
          <div className="flex flex-col items-center gap-6 max-w-lg text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-4"
            >
              {/* Radiant ambient gold halo behind logo */}
              <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-3xl animate-pulse" />
              
              {/* Logo asset with high-contrast white filter */}
              <img
                src="/logo.png"
                alt="Eranga's Clothing Store"
                className="h-16 md:h-20 w-auto object-contain relative z-10 filter invert brightness-200 drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
              />
            </motion.div>

            {/* Simplistic & Minimalist Welcome Text */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="space-y-2"
            >
              <h2 className="font-serif italic text-2xl md:text-3xl font-light text-cream-100 tracking-wide">
                Welcome, Our Distinguished Shopper
              </h2>
              <p className="text-[11px] font-mono tracking-[0.25em] text-cream-300/70 uppercase">
                Curated Elegance & Architectural Form
              </p>
            </motion.div>
          </div>

          {/* Bottom Progress Bar & Percentage */}
          <div className="w-full max-w-xs flex flex-col items-center gap-3">
            <div className="w-full bg-cream-100/15 h-[2px] rounded-full overflow-hidden relative">
              <motion.div
                className="bg-amber-200 h-full rounded-full transition-all duration-200 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="w-full flex justify-between items-center text-[10px] font-mono tracking-widest text-cream-300/80 uppercase">
              <span>Initializing Store</span>
              <span className="font-semibold text-amber-200">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
