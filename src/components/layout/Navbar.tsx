'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-500 ease-editorial ${
          isScrolled
            ? 'bg-cream-100/95 backdrop-blur-md shadow-xs border-b border-naxis-brown/10 py-3.5 text-naxis-brown'
            : 'bg-gradient-to-b from-black/60 via-black/20 to-transparent py-5 md:py-6 text-cream-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative min-h-[44px]">
          {/* Left: Universal off-canvas trigger — hamburger on all breakpoints */}
          <div className="flex items-center z-10">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`p-1.5 transition-all duration-300 hover:opacity-70 ${
                isScrolled ? 'text-naxis-brown' : 'text-cream-100'
              }`}
              aria-label="Open navigation menu"
            >
              <Menu className="w-[18px] h-[18px] stroke-[1.5]" />
            </button>
          </div>

          {/* Center: Primary NAXIS Wordmark (Everyday brand mark, clean and restrained) */}
          <Link
            href="/"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center group flex items-center justify-center z-20"
          >
            <img
              src="/logo.png"
              alt="NAXIS Offshore Garment Manufacturing"
              className={`w-auto object-contain transition-all duration-300 group-hover:opacity-90 ${
                isScrolled ? 'h-7 md:h-8' : 'h-8 md:h-10'
              }`}
            />
          </Link>

          {/* Right: Single primary action only */}
          <div className="flex items-center z-10">
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-2 text-[10px] md:text-[11px] font-mono tracking-widest uppercase font-semibold transition-all duration-300 shadow-sm flex items-center gap-2 ${
                isScrolled
                  ? 'bg-naxis-gold hover:bg-naxis-gold-light text-naxis-brown-deep'
                  : 'bg-cream-100/15 hover:bg-cream-100/25 text-cream-100 border border-cream-100/30 backdrop-blur-sm'
              }`}
            >
              <MessageSquare className="w-3 h-3" />
              <span>Inquire</span>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-50 backdrop-blur-xs"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 left-0 bottom-0 w-4/5 max-w-sm bg-cream-100 text-naxis-brown z-50 p-8 flex flex-col justify-between border-r border-naxis-brown/15 shadow-2xl"
            >
              <div>
                <div className="flex justify-between items-center pb-6 border-b border-naxis-brown/10">
                  <img
                    src="/logo.png"
                    alt="NAXIS"
                    className="h-7 w-auto object-contain"
                  />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                    className="p-1 hover:text-naxis-gold transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-8 space-y-6 text-sm font-mono tracking-widest uppercase">
                  <div>
                    <Link
                      href="/"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-naxis-brown hover:text-naxis-gold transition-colors"
                    >
                      Home
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/#capabilities"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-naxis-brown hover:text-naxis-gold transition-colors"
                    >
                      Capabilities
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/#global-network"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-naxis-brown hover:text-naxis-gold transition-colors"
                    >
                      Global Network
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/#certifications"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-naxis-brown hover:text-naxis-gold transition-colors"
                    >
                      Certifications
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/about"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-naxis-brown hover:text-naxis-gold transition-colors"
                    >
                      About NAXIS
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/#contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-naxis-brown hover:text-naxis-gold transition-colors"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>

              {/* Mobile Drawer Bottom Contact Actions */}
              <div className="pt-6 border-t border-naxis-brown/10 space-y-3">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="w-full py-3 bg-naxis-brown text-cream-100 font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-naxis-gold" />
                  <span>Call {siteConfig.contact.phoneDisplay}</span>
                </a>
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-naxis-emerald text-cream-100 font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-cream-100" />
                  <span>WhatsApp Production Desk</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
