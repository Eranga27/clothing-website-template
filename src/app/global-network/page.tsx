'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function GlobalNetworkPage() {
  return (
    <main className="min-h-screen bg-cream-100 font-sans text-naxis-brown py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-[11px] font-mono tracking-super-wide uppercase text-naxis-gold block">
            Global Network
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-naxis-brown">
            Manufacturing Across Six Countries
          </h1>
          <p className="text-sm md:text-base font-sans text-editorial-muted leading-relaxed">
            Each of our production hubs brings a different strength to the table — giving your brand flexibility in cost, speed, and specialization.
          </p>
        </div>

        {/* 6 Country Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {siteConfig.countries.map((country) => (
            <div
              key={country.id}
              className="bg-white border border-naxis-brown/10 overflow-hidden shadow-xs flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-naxis-brown-deep">
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-full object-cover filter brightness-[0.8]"
                />
                <div className="absolute top-3 left-3 bg-black/70 text-naxis-gold-light text-[10px] font-mono tracking-widest uppercase px-2.5 py-1">
                  [{country.code}] {country.region}
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1 space-y-6">
                <div className="space-y-3">
                  <h2 className="font-serif text-2xl font-light text-naxis-brown">
                    {country.name}
                  </h2>
                  <p className="text-xs sm:text-sm font-sans text-editorial-muted leading-relaxed">
                    {country.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-naxis-brown/10 space-y-3">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-editorial-muted block">
                    Key Highlights:
                  </span>
                  <ul className="space-y-1.5 text-xs font-mono text-naxis-brown/90">
                    {country.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-naxis-gold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="p-3 bg-cream-50 border border-naxis-gold/20 text-[11px] font-mono text-naxis-gold italic">
                    {country.confirmPlaceholder}
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-naxis-gold hover:text-naxis-brown font-semibold transition-colors"
                  >
                    <span>Inquire for {country.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className="bg-naxis-brown-espresso text-cream-100 p-8 md:p-12 text-center space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-light text-cream-100">
            Need Guidance on the Right Manufacturing Hub?
          </h3>
          <p className="text-xs sm:text-sm font-sans text-cream-300 max-w-md mx-auto leading-relaxed">
            Our team will evaluate your order volume, target landed cost, and duty requirements to recommend the optimal country.
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
