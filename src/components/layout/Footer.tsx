'use client';

import React from 'react';
import { Phone, MessageSquare, Mail, MapPin, Shield } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-naxis-brown-deep text-cream-100 pt-20 pb-12 border-t border-cream-100/10 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-cream-100/15">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <img
              src="/logo.png"
              alt="NAXIS Offshore Garment Manufacturing"
              className="h-10 w-auto object-contain brightness-150"
            />
            <p className="font-serif text-lg text-cream-200/90 leading-relaxed max-w-md">
              "{siteConfig.brandStatement}"
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-cream-300">
              <span className="flex items-center gap-1.5 text-naxis-emerald-light">
                <Shield className="w-3.5 h-3.5" />
                SEDEX & WRAP Certified
              </span>
              <span className="text-cream-500">•</span>
              <span className="text-naxis-gold">Australian Sovereign Origin</span>
            </div>
          </div>

          {/* Global Manufacturing Coordinates */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[11px] font-mono tracking-super-wide uppercase text-naxis-gold-light block">
              Global Production Hubs
            </span>
            <ul className="space-y-2 text-xs font-mono text-cream-300/80">
              {siteConfig.contact.offices.map((office, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-naxis-gold mt-0.5 flex-shrink-0" />
                  <span>{office}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Procurement Desk Contact */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[11px] font-mono tracking-super-wide uppercase text-naxis-gold-light block">
              Direct Contact
            </span>
            <div className="space-y-3 text-xs font-mono text-cream-200">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-2.5 hover:text-naxis-gold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-naxis-gold" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>

              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-naxis-emerald-light transition-colors text-cream-100"
              >
                <MessageSquare className="w-3.5 h-3.5 text-naxis-emerald" />
                <span>WhatsApp Instant RFQ</span>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2.5 hover:text-naxis-gold transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-naxis-gold" />
                <span>{siteConfig.contact.email}</span>
              </a>
            </div>

            <div className="pt-4 text-[10px] font-mono text-cream-400/70 uppercase tracking-widest">
              Executive Desk Hours: <br />
              08:00 – 18:00 AEST / Sydney Time
            </div>
          </div>
        </div>

        {/* Bottom Subfooter */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] font-mono tracking-widest text-cream-400/60 gap-4">
          <p>&copy; {new Date().getFullYear()} NAXIS Offshore Garment Manufacturing Pty Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#capabilities" className="hover:text-cream-100 transition-colors">Capabilities</a>
            <a href="#global-network" className="hover:text-cream-100 transition-colors">Global Network</a>
            <a href="#certifications" className="hover:text-cream-100 transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-cream-100 transition-colors">Inquire</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
