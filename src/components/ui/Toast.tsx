'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { EDITORIAL_EASING } from './ScrollReveal';

export const Toast: React.FC = () => {
  const { toastMessage, clearToast } = useCart();

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        clearToast();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage, clearToast]);

  return (
    <AnimatePresence>
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: 20, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 20, x: '-50%' }}
          transition={{ duration: 0.4, ease: EDITORIAL_EASING }}
          className="fixed bottom-6 left-1/2 z-50 flex items-center gap-3 bg-near-black text-cream-100 px-5 py-3 shadow-2xl border border-cream-100/10 text-xs tracking-widest uppercase font-mono"
        >
          <Check className="w-4 h-4 text-emerald-400 stroke-[1.5]" />
          <span>{toastMessage}</span>
          <button
            onClick={clearToast}
            className="ml-3 text-cream-400 hover:text-cream-100 transition-colors"
            aria-label="Close notification"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
