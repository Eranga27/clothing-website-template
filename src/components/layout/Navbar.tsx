'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const { totalItems, openCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-500 ease-editorial ${
          isScrolled
            ? 'bg-cream-100/95 backdrop-blur-md shadow-xs border-b border-cream-200/80 py-3'
            : 'bg-cream-100 py-4 md:py-5 border-b border-cream-200/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative min-h-[44px]">
          {/* Mobile Menu Trigger & Left Links */}
          <div className="flex items-center gap-6 z-10">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden text-near-black p-1 hover:opacity-75 transition-opacity"
              aria-label="Open mobile menu"
            >
              <Menu className="w-5 h-5 stroke-[1.2]" />
            </button>

            <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-editorial-muted">
              {siteConfig.navigation.slice(0, 4).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-near-black transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-near-black hover:after:w-full after:transition-all after:duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Brand Logo - Perfectly Centered */}
          <Link
            href="/"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center group flex items-center justify-center z-20"
          >
            <img
              src="/logo.png"
              alt={siteConfig.name}
              className="h-9 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 max-w-[200px]"
            />
          </Link>

          {/* Right Actions */}
          <div className="flex items-center gap-5 md:gap-8 text-xs font-mono tracking-widest uppercase z-10">
            <Link
              href="/about"
              className="hidden lg:block text-editorial-muted hover:text-near-black transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-near-black hover:after:w-full after:transition-all after:duration-300"
            >
              About
            </Link>

            <button
              onClick={() => setSearchOpen(true)}
              className="text-editorial-muted hover:text-near-black transition-colors flex items-center gap-2 p-1 group"
              aria-label="Search items"
            >
              <Search className="w-4 h-4 stroke-[1.5] group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline text-[11px]">Search</span>
            </button>

            <button
              onClick={openCart}
              className="flex items-center gap-2 text-near-black hover:opacity-80 transition-all p-1 relative group"
              aria-label="Open Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4 stroke-[1.5] group-hover:scale-110 transition-transform" />
              <span className="text-[11px] font-mono font-semibold">({totalItems})</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-near-black z-50"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 left-0 bottom-0 w-4/5 max-w-sm bg-cream-100 z-50 p-8 flex flex-col justify-between border-r border-cream-200"
            >
              <div>
                <div className="flex justify-between items-center pb-8 border-b border-cream-200">
                  <img src="/logo.png" alt={siteConfig.name} className="h-8 w-auto object-contain" />
                  <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                    <X className="w-5 h-5 text-editorial-muted hover:text-near-black transition-colors" />
                  </button>
                </div>
                <nav className="flex flex-col gap-6 py-8">
                  {siteConfig.navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-serif text-xl tracking-wider text-near-black hover:text-editorial-muted transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="pt-6 border-t border-cream-200 text-xs font-mono tracking-widest text-editorial-muted space-y-2">
                <p>{siteConfig.contact.email}</p>
                <p>{siteConfig.contact.instagram}</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Quick Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-50 bg-cream-100/98 p-6 md:p-12 flex flex-col justify-start backdrop-blur-md"
          >
            <div className="max-w-4xl mx-auto w-full pt-12">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xs font-mono tracking-widest uppercase text-editorial-muted">Search Atelier Catalog</span>
                <button
                  onClick={() => setSearchOpen(false)}
                  className="p-2 text-editorial-muted hover:text-near-black"
                >
                  <X className="w-6 h-6 stroke-[1.2]" />
                </button>
              </div>

              <div className="relative border-b-2 border-near-black pb-4">
                <input
                  type="text"
                  placeholder="Type to search trench coats, cashmere, trousers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-transparent font-serif text-2xl md:text-4xl text-near-black placeholder:text-cream-400 focus:outline-none"
                />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="text-xs font-mono text-editorial-muted uppercase tracking-wider self-center">Popular:</span>
                {['Trench', 'Cashmere', 'Wool Trousers', 'Silk Dress', 'Leather Tote'].map((term) => (
                  <Link
                    key={term}
                    href={`/shop?search=${encodeURIComponent(term)}`}
                    onClick={() => setSearchOpen(false)}
                    className="text-xs font-mono px-3 py-1.5 bg-cream-200 text-near-black hover:bg-near-black hover:text-cream-100 transition-colors uppercase tracking-widest"
                  >
                    {term}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
