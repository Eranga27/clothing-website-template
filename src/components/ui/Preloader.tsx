'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

export const Preloader: React.FC = () => {
  // 'wheel' -> 'welcome' -> 'exit' -> 'done'
  const [stage, setStage] = useState<'wheel' | 'welcome' | 'exit' | 'done'>('wheel');
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setStage('done');
      return;
    }

    // Lock body scroll while preloader is running
    document.body.style.overflow = 'hidden';

    // Sequence timing (total ~4.8 seconds: nicely within the 3-6s range):
    // 0.0s - 1.9s: Giant 3D Wheel fades in and rests
    const t1 = setTimeout(() => {
      setStage('welcome');
    }, 1900);

    // 2.6s - 3.8s: "Welcome." text fades in and rests
    const t2 = setTimeout(() => {
      setStage('exit');
    }, 3800);

    // 4.4s: White backdrop fades out to unveil the homepage smoothly
    const t3 = setTimeout(() => {
      setStage('done');
      document.body.style.overflow = '';
    }, 4900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.body.style.overflow = '';
    };
  }, [shouldReduceMotion]);

  if (shouldReduceMotion || stage === 'done') {
    return null;
  }

  return (
    <AnimatePresence>
      {stage !== 'done' && (
        <motion.div
          key="naxis-white-preloader"
          initial={{ opacity: 1 }}
          animate={{ opacity: stage === 'exit' ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-white flex items-center justify-center pointer-events-none select-none"
        >
          <div className="relative flex items-center justify-center p-6 max-w-sm sm:max-w-md w-full">
            <AnimatePresence mode="wait">
              {stage === 'wheel' && (
                <motion.div
                  key="wheel-stage"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.03 }}
                  transition={{
                    duration: 0.75,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex flex-col items-center justify-center"
                >
                  <img
                    src="/naxis-giant-wheel-3d.png"
                    alt="NAXIS GIANT WHEEL 3D"
                    className="h-32 sm:h-44 md:h-52 w-auto object-contain drop-shadow-sm"
                  />
                </motion.div>
              )}

              {stage === 'welcome' && (
                <motion.div
                  key="welcome-stage"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex flex-col items-center justify-center text-center px-4"
                >
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.12em] text-naxis-brown">
                    Welcome.
                  </h2>
                  <div className="mt-4 w-8 h-[1px] bg-naxis-gold/50" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
