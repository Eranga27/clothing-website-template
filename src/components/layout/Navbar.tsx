'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
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
          {/* Left: Minimal Navigation Links */}
          <div className="flex items-center gap-8 z-10">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-1 hover:opacity-75 transition-opacity"
              aria-label="Open mobile menu"
            >
              <Menu className="w-5 h-5 stroke-[1.5]" />
            </button>

            <nav className="hidden lg:flex items-center gap-8 text-[11px] font-mono tracking-super-wide uppercase">
              <a
                href="#capabilities"
                className={`transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] hover:after:w-full after:transition-all after:duration-300 ${
                  isScrolled
                    ? 'text-naxis-brown/80 hover:text-naxis-gold after:bg-naxis-gold'
                    : 'text-cream-200/90 hover:text-cream-100 after:bg-cream-100'
                }`}
              >
                Capabilities
              </a>
              <a
                href="#global-network"
                className={`transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] hover:after:w-full after:transition-all after:duration-300 ${
                  isScrolled
                    ? 'text-naxis-brown/80 hover:text-naxis-gold after:bg-naxis-gold'
                    : 'text-cream-200/90 hover:text-cream-100 after:bg-cream-100'
                }`}
              >
                Global Network
              </a>
              <a
                href="#certifications"
                className={`transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] hover:after:w-full after:transition-all after:duration-300 ${
                  isScrolled
                    ? 'text-naxis-brown/80 hover:text-naxis-gold after:bg-naxis-gold'
                    : 'text-cream-200/90 hover:text-cream-100 after:bg-cream-100'
                }`}
              >
                Certifications
              </a>
            </nav>
          </div>

          {/* Center: Primary NAXIS Wordmark (Clean & Uncluttered) */}
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

          {/* Right: Direct Procurement Actions */}
          <div className="flex items-center gap-4 md:gap-6 text-xs font-mono tracking-widest uppercase z-10">
            {/* Quick Call */}
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className={`hidden sm:flex items-center gap-2 transition-colors py-1 ${
                isScrolled
                  ? 'text-naxis-brown hover:text-naxis-gold'
                  : 'text-cream-100 hover:text-naxis-gold-light'
              }`}
              title="Call Australian Production Desk"
            >
              <Phone className="w-3.5 h-3.5 text-naxis-gold" />
              <span className="hidden md:inline text-[11px] font-mono">{siteConfig.contact.phoneDisplay}</span>
            </a>

            {/* Direct WhatsApp CTA Button */}
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-naxis-gold hover:bg-naxis-gold-light text-naxis-brown-deep font-semibold text-[10px] md:text-[11px] font-mono tracking-widest uppercase transition-all duration-300 shadow-sm flex items-center gap-2"
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
              className="fixed inset-0 bg-near-black z-50 backdrop-blur-xs"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
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
                    className="p-1 text-naxis-brown/70 hover:text-naxis-brown"
                  >
                    <X className="w-5 h-5 stroke-[1.5]" />
                  </button>
                </div>

                <nav className="flex flex-col gap-6 py-8">
                  <a
                    href="#capabilities"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif text-2xl tracking-wide text-naxis-brown hover:text-naxis-gold transition-colors"
                  >
                    Capabilities Preview
                  </a>
                  <a
                    href="#global-network"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif text-2xl tracking-wide text-naxis-brown hover:text-naxis-gold transition-colors"
                  >
                    Global Network (6 Hubs)
                  </a>
                  <a
                    href="#certifications"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif text-2xl tracking-wide text-naxis-brown hover:text-naxis-gold transition-colors"
                  >
                    Certifications & Provenance
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif text-2xl tracking-wide text-naxis-gold hover:text-naxis-brown transition-colors"
                  >
                    Direct Procurement Desk
                  </a>
                </nav>
              </div>

              {/* Direct Actions in Mobile Drawer */}
              <div className="pt-6 border-t border-naxis-brown/10 space-y-3">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="w-full py-3 bg-naxis-gold text-naxis-brown-deep font-mono text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {siteConfig.contact.phoneDisplay}</span>
                </a>

                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-naxis-emerald text-cream-100 font-mono text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp / Direct Text</span>
                </a>

                <div className="text-[11px] font-mono text-editorial-muted text-center pt-2">
                  Melbourne & Colombo &bull; Est. Global Operations
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
