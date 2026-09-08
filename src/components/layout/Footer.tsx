'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-naxis-brown-deep text-cream-100 pt-16 pb-12 border-t border-cream-100/10 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-cream-100/10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <img
              src="/logo.png"
              alt="NAXIS"
              className="h-8 md:h-9 w-auto object-contain brightness-150"
            />
            <p className="font-serif text-base text-cream-200/90 leading-relaxed max-w-sm">
              NAXIS — Offshore Garment Manufacturing
            </p>
            <p className="text-xs font-mono text-cream-400">
              Melbourne · Colombo · [other confirmed office locations]
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] font-mono tracking-super-wide uppercase text-naxis-gold-light block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs font-mono uppercase tracking-wider text-cream-300">
              <li>
                <Link href="/#capabilities" className="hover:text-naxis-gold transition-colors">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link href="/#global-network" className="hover:text-naxis-gold transition-colors">
                  Global Network
                </Link>
              </li>
              <li>
                <Link href="/#certifications" className="hover:text-naxis-gold transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-naxis-gold transition-colors">
                  About / Company
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-naxis-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[11px] font-mono tracking-super-wide uppercase text-naxis-gold-light block">
              Direct Contact
            </span>
            <div className="space-y-2 text-xs font-mono text-cream-200">
              <div>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="inline-flex items-center gap-2 hover:text-naxis-gold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-naxis-gold" />
                  <span>{siteConfig.contact.phoneDisplay}</span>
                </a>
              </div>
              <div>
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-naxis-gold transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-naxis-emerald" />
                  <span>WhatsApp Production Desk</span>
                </a>
              </div>
              <div>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2 hover:text-naxis-gold transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-naxis-gold" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Subfooter */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] font-mono tracking-widest text-cream-400/60 gap-4">
          <p>© 2026 NAXIS. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/#capabilities" className="hover:text-cream-200 transition-colors">
              Capabilities
            </Link>
            <Link href="/#global-network" className="hover:text-cream-200 transition-colors">
              Global Network
            </Link>
            <Link href="/#certifications" className="hover:text-cream-200 transition-colors">
              Certifications
            </Link>
            <Link href="/#contact" className="hover:text-cream-200 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
