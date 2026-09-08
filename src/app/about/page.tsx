'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, ShieldCheck, MapPin, CheckCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream-100 font-sans text-naxis-brown py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Header Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[11px] font-mono tracking-super-wide uppercase text-naxis-gold block">
            About NAXIS
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-naxis-brown tracking-tight leading-[1.15]">
            Offshore Garment Manufacturing You Can Trust.
          </h1>
          <p className="text-sm md:text-base font-sans text-editorial-muted leading-relaxed max-w-xl mx-auto">
            Headquartered in Melbourne and Colombo, NAXIS partners with apparel brands to deliver reliable, compliant garment production across six sovereign countries.
          </p>
        </div>

        {/* Provenance & History Overview */}
        <div className="bg-white border border-naxis-brown/10 p-8 md:p-12 mb-16 shadow-xs space-y-6">
          <div className="space-y-3">
            <span className="text-[11px] font-mono tracking-widest uppercase text-naxis-gold block">
              Company Background
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-light text-naxis-brown">
              Global Scale, Ground-Level Care
            </h2>
            <p className="text-sm md:text-base font-sans text-editorial-muted leading-relaxed">
              NAXIS operates with the discipline of a large-scale global manufacturing network while maintaining direct, personal communication with each brand partner. Our management teams in Melbourne and Colombo coordinate production schedules, quality audits, and international shipping corridors directly with client production desks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-naxis-brown/10">
            <div className="space-y-2">
              <h3 className="font-serif text-xl font-normal text-naxis-brown">
                Melbourne Executive Desk
              </h3>
              <p className="text-xs sm:text-sm font-sans text-editorial-muted leading-relaxed">
                Client services, contracts, account management, and strategic sourcing coordination for Australia, New Zealand, and global accounts.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-xl font-normal text-naxis-brown">
                Colombo Production Hub
              </h3>
              <p className="text-xs sm:text-sm font-sans text-editorial-muted leading-relaxed">
                Operational execution, factory liaison, on-site quality assurance audits, and regional logistics management across South Asia.
              </p>
            </div>
          </div>
        </div>

        {/* Operating Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white border border-naxis-brown/10 p-6 space-y-3">
            <div className="w-8 h-8 rounded-full bg-naxis-gold/15 flex items-center justify-center text-naxis-gold font-serif font-bold text-sm">
              01
            </div>
            <h4 className="font-serif text-xl text-naxis-brown">Six Sovereign Hubs</h4>
            <p className="text-xs sm:text-sm font-sans text-editorial-muted leading-relaxed">
              Production facilities in Sri Lanka, India, Bangladesh, Vietnam, China, and Italy, matching your order to the best regional cost and capability.
            </p>
          </div>

          <div className="bg-white border border-naxis-brown/10 p-6 space-y-3">
            <div className="w-8 h-8 rounded-full bg-naxis-gold/15 flex items-center justify-center text-naxis-gold font-serif font-bold text-sm">
              02
            </div>
            <h4 className="font-serif text-xl text-naxis-brown">Strict Compliance</h4>
            <p className="text-xs sm:text-sm font-sans text-editorial-muted leading-relaxed">
              Every operating plant is audited under SEDEX, WRAP, and CT-PAT protocols to safeguard ethical labor, safety, and supply chain integrity.
            </p>
          </div>

          <div className="bg-white border border-naxis-brown/10 p-6 space-y-3">
            <div className="w-8 h-8 rounded-full bg-naxis-gold/15 flex items-center justify-center text-naxis-gold font-serif font-bold text-sm">
              03
            </div>
            <h4 className="font-serif text-xl text-naxis-brown">Direct Communication</h4>
            <p className="text-xs sm:text-sm font-sans text-editorial-muted leading-relaxed">
              No endless automated ticket queues. Speak directly with real production coordinators by phone or WhatsApp.
            </p>
          </div>
        </div>

        {/* Bottom CTA Box */}
        <div className="bg-naxis-brown-espresso text-cream-100 p-8 md:p-12 text-center space-y-6">
          <h3 className="font-serif text-2xl sm:text-4xl font-light text-cream-100">
            Work With NAXIS
          </h3>
          <p className="text-xs sm:text-sm font-sans text-cream-300 max-w-md mx-auto leading-relaxed">
            Ready to discuss your brand’s next production run? Reach out directly to our Melbourne or Colombo desks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="px-6 py-3 bg-naxis-gold hover:bg-naxis-gold-light text-naxis-brown-deep font-mono text-xs uppercase tracking-widest font-semibold flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Production Desk</span>
            </a>
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-naxis-emerald hover:bg-emerald-700 text-cream-100 font-mono text-xs uppercase tracking-widest font-semibold flex items-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Inquiries</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
