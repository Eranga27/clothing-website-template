'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, MessageSquare, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ── Navbar: no full-width background — individual floating elements ── */}
      <header className="fixed top-0 left-0 right-0 z-40 w-full pointer-events-none">
        <div className="flex items-start justify-between px-4 sm:px-6 md:px-8 pt-4 sm:pt-5">

          {/* ── LEFT: Logo in a small transparent glass pill ── */}
          <Link
            href="/"
            className={`pointer-events-auto flex items-center justify-center transition-all duration-400 group ${
              isScrolled
                ? 'bg-cream-100/95 backdrop-blur-md shadow-md border border-naxis-brown/10 px-3 py-2'
                : 'bg-black/30 backdrop-blur-sm border border-white/10 px-3 py-2'
            }`}
            aria-label="NAXIS — Home"
          >
            <img
              src="/logo.png"
              alt="NAXIS"
              className={`w-auto object-contain transition-all duration-300 group-hover:opacity-80 ${
                isScrolled ? 'h-6 md:h-7' : 'h-7 md:h-9'
              }`}
            />
          </Link>

          {/* ── RIGHT: Inquire + Hamburger ── */}
          <div className="pointer-events-auto flex items-center gap-2 sm:gap-3">
            {/* Inquire button */}
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 px-4 py-2 text-[10px] sm:text-[11px] font-mono tracking-widest uppercase font-semibold transition-all duration-300 ${
                isScrolled
                  ? 'bg-naxis-gold hover:bg-naxis-gold-light text-naxis-brown-deep shadow-md'
                  : 'bg-black/30 backdrop-blur-sm border border-white/15 text-cream-100 hover:bg-black/50'
              }`}
            >
              <MessageSquare className="w-3 h-3 flex-shrink-0" />
              <span>Inquire</span>
            </a>

            {/* Hamburger menu button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`p-2.5 transition-all duration-300 hover:opacity-70 ${
                isScrolled
                  ? 'bg-cream-100/95 backdrop-blur-md border border-naxis-brown/10 text-naxis-brown shadow-md'
                  : 'bg-black/30 backdrop-blur-sm border border-white/15 text-cream-100'
              }`}
              aria-label="Open navigation menu"
            >
              <Menu className="w-4 h-4 stroke-[1.5]" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Off-Canvas Drawer Navigation ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-50"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 left-0 bottom-0 w-4/5 max-w-sm bg-cream-100 text-naxis-brown z-50 p-8 flex flex-col justify-between border-r border-naxis-brown/15 shadow-2xl"
            >
              <div>
                <div className="flex justify-between items-center pb-6 border-b border-naxis-brown/10">
                  <img src="/logo.png" alt="NAXIS" className="h-7 w-auto object-contain" />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                    className="p-1 hover:text-naxis-gold transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="mt-8 space-y-5 text-sm font-mono tracking-widest uppercase">
                  {[
                    { label: 'Home', href: '/' },
                    { label: 'Capabilities', href: '/#capabilities' },
                    { label: 'Global Network', href: '/#global-network' },
                    { label: 'Certifications', href: '/#certifications' },
                    { label: 'About NAXIS', href: '/about' },
                    { label: 'Contact', href: '/#contact' },
                  ].map(({ label, href }) => (
                    <div key={href}>
                      <Link
                        href={href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1.5 text-naxis-brown hover:text-naxis-gold transition-colors"
                      >
                        {label}
                      </Link>
                    </div>
                  ))}
                </nav>
              </div>

              {/* Drawer Bottom Actions */}
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
