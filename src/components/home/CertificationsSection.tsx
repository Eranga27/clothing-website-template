'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, CheckCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { EDITORIAL_EASING } from '../ui/ScrollReveal';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-24 md:py-32 bg-cream-100 text-naxis-brown border-b border-naxis-brown/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-naxis-emerald-muted border border-naxis-emerald/20 text-naxis-emerald text-[11px] font-mono tracking-widest uppercase mb-2">
            <Shield className="w-3.5 h-3.5 stroke-[2]" />
            <span>International Compliance & Labor Ethics</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-naxis-brown">
            Audited Standards & Provenance
          </h2>

          <p className="text-xs sm:text-sm font-sans text-editorial-muted leading-relaxed">
            Every NAXIS production plant complies with rigorous international social audits, technical security mandates, and environmental sustainability frameworks.
          </p>
        </div>

        {/* Provenance Banner with Heritage Seal:
            CRITICAL REQUIREMENT:
            The circular NAXIS heritage seal is used ONCE, SMALL, STATIC, as a trust/provenance badge.
            Never enlarged, never animated, never repeated.
        */}
        <div className="bg-white border border-naxis-brown/15 p-6 sm:p-10 mb-16 shadow-xs flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Provenance Seal & Verification text */}
          <div className="flex items-center gap-6">
            {/* Circular NAXIS Heritage Seal: exactly small, static, once */}
            <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 border border-naxis-gold/40 bg-cream-50 flex items-center justify-center">
              <img
                src="/naxis-seal.png"
                alt="NAXIS Heritage Seal of Sovereign Provenance"
                className="w-full h-full object-contain rounded-full select-none pointer-events-none"
              />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-super-wide text-naxis-gold block">
                Sovereign Heritage & Origin Seal
              </span>
              <h4 className="font-serif text-xl sm:text-2xl text-naxis-brown font-normal">
                NAXIS Australian Heritage Provenance
              </h4>
              <p className="text-xs font-sans text-editorial-muted max-w-lg leading-relaxed">
                Headquartered in Melbourne with sovereign offshore manufacturing operations. Zero-compromise ethical charters, independent third-party monitoring, and living-wage audits.
              </p>
            </div>
          </div>

          {/* Right: Quick Verification Checklist */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 text-xs font-mono text-naxis-brown/90 border-t md:border-t-0 md:border-l border-naxis-brown/10 pt-4 md:pt-0 md:pl-8">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-naxis-emerald flex-shrink-0" />
              <span>SEDEX Smeta 4-Pillar Audited</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-naxis-emerald flex-shrink-0" />
              <span>WRAP Gold & Platinum Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-naxis-emerald flex-shrink-0" />
              <span>C-TPAT Tier 2 Customs Validated</span>
            </div>
          </div>
        </div>

        {/* Certifications Badge Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.certifications.map((cert, index) => (
            <motion.div
              key={cert.acronym}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: EDITORIAL_EASING }}
              className="bg-white/90 border border-naxis-brown/10 p-6 flex flex-col justify-between hover:border-naxis-gold/60 transition-colors duration-400 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-naxis-brown/10">
                  <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-naxis-brown group-hover:text-naxis-gold transition-colors">
                    {cert.acronym}
                  </span>
                  <Award className="w-4 h-4 text-naxis-gold opacity-75" />
                </div>

                <div className="space-y-1">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-naxis-brown/90 font-semibold">
                    {cert.name}
                  </h4>
                  <span className="text-[10px] font-mono text-editorial-muted block uppercase tracking-widest">
                    Issuer: {cert.issuer}
                  </span>
                </div>

                <p className="text-xs font-sans text-editorial-muted leading-relaxed pt-1">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-naxis-brown/5 flex items-center justify-between text-[11px] font-mono text-naxis-emerald">
                <span>Status: Current & Verified</span>
                <span className="w-1.5 h-1.5 rounded-full bg-naxis-emerald" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Compliance Note */}
        <div className="mt-12 text-center">
          <p className="text-[11px] font-mono text-editorial-muted uppercase tracking-widest">
            Full Audit Dossiers, Environmental Impact Reports & Carbon Balance Statements available under NDA.
          </p>
        </div>
      </div>
    </section>
  );
};
