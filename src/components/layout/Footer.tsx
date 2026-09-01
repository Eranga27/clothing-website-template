'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-near-black text-cream-100 pt-20 pb-12 border-t border-cream-100/10 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Newsletter & Statement Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-cream-100/15">
          {/* Newsletter Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono tracking-widest uppercase text-cream-400">
              The Gazette & Edit
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-light text-cream-100 leading-tight">
              Receive private preview invitations and private atelier updates.
            </h3>

            {subscribed ? (
              <div className="flex items-center gap-3 text-emerald-400 text-xs font-mono uppercase tracking-widest py-3">
                <Check className="w-4 h-4 stroke-[2]" />
                <span>You have been subscribed to our mailing edit.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="max-w-md flex flex-col sm:flex-row gap-3 pt-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-cream-100/5 border border-cream-100/20 px-4 py-3 text-xs text-cream-100 placeholder:text-cream-400/60 focus:outline-none focus:border-cream-100 font-mono tracking-wider"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-cream-100 text-near-black text-xs font-mono tracking-widest uppercase hover:bg-cream-200 transition-colors flex items-center justify-center gap-2 group"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
            <p className="text-[11px] text-cream-400/60 font-mono leading-relaxed max-w-sm">
              By subscribing, you accept our Privacy Policy. We send unhurried correspondence quarterly.
            </p>
          </div>

          {/* Brand Philosophy Statement */}
          <div className="lg:col-span-5 lg:col-start-8 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-mono tracking-widest uppercase text-cream-400 block mb-4">
                Atelier Location
              </span>
              <p className="font-serif text-lg text-cream-200 leading-relaxed italic">
                "{siteConfig.philosophy}"
              </p>
            </div>
            <div className="text-xs font-mono tracking-wider text-cream-400">
              <p className="text-cream-200">{siteConfig.contact.address}</p>
              <p className="mt-1">{siteConfig.contact.email}</p>
            </div>
          </div>
        </div>

        {/* Links & Subfooter Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 text-xs font-mono tracking-widest uppercase text-cream-400">
          <div>
            <h4 className="text-cream-200 mb-4 font-semibold">Collections</h4>
            <ul className="space-y-3">
              <li><Link href="/shop?category=outerwear" className="hover:text-cream-100 transition-colors">Outerwear</Link></li>
              <li><Link href="/shop?category=tailoring" className="hover:text-cream-100 transition-colors">Tailoring</Link></li>
              <li><Link href="/shop?category=knitwear" className="hover:text-cream-100 transition-colors">Knitwear</Link></li>
              <li><Link href="/shop?category=dresses" className="hover:text-cream-100 transition-colors">Dresses</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-cream-200 mb-4 font-semibold">Concierge</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-cream-100 transition-colors">Garment Care</Link></li>
              <li><Link href="/about" className="hover:text-cream-100 transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/about" className="hover:text-cream-100 transition-colors">Bespoke Fitting</Link></li>
              <li><Link href="/about" className="hover:text-cream-100 transition-colors">Contact Atelier</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-cream-200 mb-4 font-semibold">Atelier</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-cream-100 transition-colors">Our Ethos</Link></li>
              <li><Link href="/about" className="hover:text-cream-100 transition-colors">Materials & Sourcing</Link></li>
              <li><Link href="/about" className="hover:text-cream-100 transition-colors">Sustainability</Link></li>
              <li><Link href="/about" className="hover:text-cream-100 transition-colors">Journal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-cream-200 mb-4 font-semibold">Region & Currency</h4>
            <select className="bg-cream-100/10 border border-cream-100/20 text-cream-100 px-3 py-2 text-xs focus:outline-none w-full uppercase">
              <option value="USD">United States (USD $)</option>
              <option value="EUR">Europe (EUR €)</option>
              <option value="GBP">United Kingdom (GBP £)</option>
              <option value="JPY">Japan (JPY ¥)</option>
            </select>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-cream-100/10 flex flex-col md:flex-row justify-between items-center text-[11px] font-mono tracking-widest text-cream-400/60 gap-4">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt={siteConfig.name} className="h-6 w-auto object-contain brightness-200 invert" />
            <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <span className="hover:text-cream-100 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-cream-100 cursor-pointer">Terms of Service</span>
            <span className="hover:text-cream-100 cursor-pointer">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
