'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Briefcase } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-cream-100 font-sans text-naxis-brown py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <span className="text-[11px] font-mono tracking-super-wide uppercase text-naxis-gold block">
            Client Portfolio & Case Studies
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-light tracking-tight text-naxis-brown">
            Client Case Studies
          </h1>
          <p className="text-sm md:text-base font-sans text-editorial-muted leading-relaxed max-w-xl mx-auto">
            NAXIS manufactures under strict client confidentiality and non-disclosure agreements for global sports labels and lifestyle brands.
          </p>
        </div>

        {/* Client Confirmation Placeholder Box */}
        <div className="p-8 md:p-12 bg-white border border-naxis-brown/15 shadow-xs space-y-4 text-left">
          <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-naxis-gold">
            <Briefcase className="w-4 h-4" />
            <span>[CONFIRM WITH CLIENT]</span>
          </div>
          <h2 className="font-serif text-2xl text-naxis-brown">
            Client Approvals Pending
          </h2>
          <p className="text-xs sm:text-sm font-sans text-editorial-muted leading-relaxed">
            Case studies, brand testimonials, and production gallery photographs are currently reserved pending formal client authorization and confidentiality clearance. Contact our team to review anonymized category capability samples.
          </p>
        </div>

        {/* Action Trigger */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
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
            <span>Inquire on Portfolio</span>
          </a>
        </div>
      </div>
    </main>
  );
}
