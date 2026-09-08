'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function CapabilitiesPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <main className="min-h-screen bg-cream-100 font-sans text-naxis-brown py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-[11px] font-mono tracking-super-wide uppercase text-naxis-gold block">
            Capabilities
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-naxis-brown">
            What We Manufacture
          </h1>
          <p className="text-sm md:text-base font-sans text-editorial-muted leading-relaxed">
            From performance sportswear to handcrafted leather goods, our production lines are built to handle real orders at real scale.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {siteConfig.capabilities.map((cat, index) => {
            const isExpanded = expandedId === cat.id;

            return (
              <div
                key={cat.id}
                className="bg-white border border-naxis-brown/10 overflow-hidden shadow-xs flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-naxis-brown-deep">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.04]"
                  />
                  {cat.isPlaceholder && (
                    <div className="absolute top-4 right-4 bg-naxis-brown-espresso/90 text-naxis-gold text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 border border-naxis-gold/30">
                      Client Confirmation
                    </div>
                  )}
                </div>

                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-6">
                  <div className="space-y-3">
                    <h2 className="font-serif text-2xl font-light text-naxis-brown">
                      {cat.title}
                    </h2>
                    <p className="text-xs sm:text-sm font-sans text-editorial-muted leading-relaxed">
                      {cat.description}
                    </p>
                    {cat.confirmPlaceholder && (
                      <p className="text-[11px] font-mono text-naxis-gold italic">
                        {cat.confirmPlaceholder}
                      </p>
                    )}
                  </div>

                  <div className="pt-4 border-t border-naxis-brown/10 space-y-3">
                    <button
                      onClick={() => toggleAccordion(cat.id)}
                      className="w-full flex items-center justify-between text-xs font-mono uppercase tracking-wider text-naxis-brown hover:text-naxis-gold transition-colors py-1"
                    >
                      <span>Technical Details</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180 text-naxis-gold' : ''
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <ul className="space-y-2 pt-2 text-xs font-mono text-editorial-muted border-t border-naxis-brown/5">
                        {cat.specs.map((spec, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2">
                            <span className="text-naxis-gold">•</span>
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="pt-2">
                      <Link
                        href="/#contact"
                        className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-naxis-gold hover:text-naxis-brown font-semibold transition-colors"
                      >
                        <span>Inquire on Category</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Action */}
        <div className="bg-naxis-brown-espresso text-cream-100 p-8 md:p-12 text-center space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-light text-cream-100">
            Have a Specific Garment Spec or Tech-Pack?
          </h3>
          <p className="text-xs sm:text-sm font-sans text-cream-300 max-w-md mx-auto leading-relaxed">
            Send your tech-pack or production volume estimate directly to our engineering desk for rapid feasibility review.
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
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
