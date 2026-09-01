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
      }, 400); // Brief hold at 100% before curtain reveal
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
          className="fixed inset-0 z-[100] bg-cream-100 text-near-black flex flex-col items-center justify-between py-16 px-8 select-none border-b border-cream-300/40"
        >
          {/* Top Tagline */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] font-mono uppercase tracking-[0.3em] text-editorial-muted"
          >
            HAUTE COUTURE &bull; AUTUMN / WINTER
          </motion.div>

          {/* Centered Logo & Pulse Container */}
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-6"
            >
              {/* Subtle warm halo behind logo */}
              <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-2xl animate-pulse" />
              
              <img
                src="/logo.png"
                alt="Atelier Véronique"
                className="h-20 md:h-24 w-auto object-contain relative z-10 drop-shadow-md"
              />
            </motion.div>

            {/* Subtle Brand Title */}
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-serif text-xl md:text-2xl font-light tracking-widest text-near-black uppercase"
            >
              Atelier Véronique
            </motion.h1>
          </div>

          {/* Bottom Progress Bar & Percentage */}
          <div className="w-full max-w-xs flex flex-col items-center gap-3">
            <div className="w-full bg-cream-300/40 h-[2px] rounded-full overflow-hidden relative">
              <motion.div
                className="bg-near-black h-full rounded-full transition-all duration-200 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="w-full flex justify-between items-center text-[10px] font-mono tracking-widest text-editorial-muted uppercase">
              <span>Loading Experience</span>
              <span className="font-semibold text-near-black">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
