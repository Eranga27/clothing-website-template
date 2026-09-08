'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

export const Preloader: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setVisible(false);
      return;
    }

    // Silent, understated brief fade-in (Louis Vuitton style restraint)
    const timer = setTimeout(() => {
      setVisible(false);
    }, 650);

    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion || !visible) return null;

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key="silent-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[100] bg-cream-100 flex items-center justify-center pointer-events-none"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-3 text-center"
          >
            <img
              src="/logo.png"
              alt="NAXIS"
              className="h-9 md:h-11 w-auto object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
