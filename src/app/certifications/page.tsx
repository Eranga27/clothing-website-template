'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, CheckCircle, Phone, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-cream-100 font-sans text-naxis-brown py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-[11px] font-mono tracking-super-wide uppercase text-naxis-gold block">
            Compliance & Verification
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-naxis-brown">
            Certified. Audited. Accountable.
          </h1>
          <p className="text-sm md:text-base font-sans text-editorial-muted leading-relaxed">
            Every NAXIS facility operates under recognized international compliance standards — because trust in a manufacturing partner has to be earned, not claimed.
          </p>
        </div>

        {/* Static Heritage Seal Anchor */}
        <div className="bg-white border border-naxis-brown/15 p-6 sm:p-10 mb-14 shadow-xs flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 border border-naxis-gold/40 bg-cream-50 flex items-center justify-center">
              <img
                src="/naxis-seal.png"
                alt="NAXIS Heritage Seal"
                className="w-full h-full object-contain rounded-full select-none pointer-events-none"
              />
            </div>

            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-super-wide text-naxis-gold block">
                Heritage & Trust Anchor
              </span>
              <h2 className="font-serif text-xl sm:text-2xl text-naxis-brown font-normal">
                NAXIS Australian Heritage Provenance
              </h2>
              <p className="text-xs sm:text-sm font-sans text-editorial-muted max-w-lg leading-relaxed">
                Operating with transparent governance across Melbourne, Colombo, and our six manufacturing nations.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-xs font-mono text-naxis-brown/90 border-t md:border-t-0 md:border-l border-naxis-brown/10 pt-4 md:pt-0 md:pl-8 flex-shrink-0">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-naxis-emerald flex-shrink-0" />
              <span>SEDEX Audited</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-naxis-emerald flex-shrink-0" />
              <span>WRAP Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-naxis-emerald flex-shrink-0" />
              <span>CT-PAT Validated</span>
            </div>
          </div>
        </div>

        {/* Confirmed Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {siteConfig.certifications.map((cert) => (
            <div
              key={cert.acronym}
              className="bg-white border border-naxis-brown/10 p-8 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-naxis-brown/10">
                  <span className="font-serif text-2xl font-bold tracking-tight text-naxis-brown">
                    {cert.acronym}
                  </span>
                  <ShieldCheck className="w-5 h-5 text-naxis-emerald" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-naxis-brown font-semibold">
                    {cert.name}
                  </h3>
                  <span className="text-[11px] font-mono text-naxis-gold block uppercase tracking-wide">
                    {cert.tag}
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-sans text-editorial-muted leading-relaxed pt-1">
                  {cert.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-naxis-brown/10 flex items-center justify-between text-xs font-mono text-naxis-emerald">
                <span>Verified Compliance</span>
                <span className="w-1.5 h-1.5 rounded-full bg-naxis-emerald" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className="bg-naxis-brown-espresso text-cream-100 p-8 md:p-12 text-center space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-light text-cream-100">
            Request Audit Reports or Compliance Documentation
          </h3>
          <p className="text-xs sm:text-sm font-sans text-cream-300 max-w-md mx-auto leading-relaxed">
            We provide verified audit dossiers and compliance records directly to brand procurement teams.
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
