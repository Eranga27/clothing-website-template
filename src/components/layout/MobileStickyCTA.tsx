'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const MobileStickyCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after user scrolls past 200px
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          aria-label="Quick contact actions"
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-naxis-brown-deep/95 backdrop-blur-lg border-t border-naxis-gold/30 p-3 shadow-2xl safe-area-inset-bottom"
        >
          <div className="flex items-center gap-2.5 max-w-md mx-auto">
            {/* Quick Call Action */}
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex-1 py-3 px-4 bg-naxis-gold text-naxis-brown-deep font-mono text-xs uppercase tracking-wider font-semibold rounded-none flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-md"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Desk</span>
            </a>

            {/* Quick WhatsApp Action */}
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 bg-naxis-emerald text-cream-100 font-mono text-xs uppercase tracking-wider font-semibold rounded-none flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-md"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp / Text</span>
            </a>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
