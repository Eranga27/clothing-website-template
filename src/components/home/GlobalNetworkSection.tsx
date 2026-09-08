'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, MapPin, Clock, ShieldCheck, Factory, ArrowRight } from 'lucide-react';
import { siteConfig, CountryHub } from '@/config/site';
import { EDITORIAL_EASING } from '../ui/ScrollReveal';

export const GlobalNetworkSection: React.FC = () => {
  const [selectedCountryId, setSelectedCountryId] = useState<string>(siteConfig.countries[0].id);

  const selectedCountry = siteConfig.countries.find((c) => c.id === selectedCountryId) || siteConfig.countries[0];

  return (
    <section id="global-network" className="py-24 md:py-36 bg-naxis-brown-deep text-cream-100 relative overflow-hidden">
      {/* Background Decorative Coordinates & Grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#B8912F_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-cream-100/15 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-naxis-emerald animate-ping" />
              <span className="text-[11px] font-mono tracking-super-wide uppercase text-naxis-gold-light">
                Distributed Sovereign Supply Chain
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-cream-100">
              The Global Network
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm font-sans text-cream-300/80 leading-relaxed">
            Operating specialized manufacturing facilities across six sovereign nations. Every territory delivers focused regional competencies, duty-free trade corridors, and audited labor ethics.
          </p>
        </div>

        {/* Interactive Country Selector Ribbon (All 6 Countries) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-12 border-b border-cream-100/10">
          {siteConfig.countries.map((country) => {
            const isSelected = country.id === selectedCountryId;
            return (
              <button
                key={country.id}
                onClick={() => setSelectedCountryId(country.id)}
                className={`relative px-5 py-3 text-xs font-mono uppercase tracking-widest transition-all duration-400 whitespace-nowrap flex items-center gap-2 ${
                  isSelected
                    ? 'text-naxis-brown-deep font-semibold bg-naxis-gold'
                    : 'text-cream-300/70 hover:text-cream-100 hover:bg-cream-100/5'
                }`}
              >
                <span className="text-[10px] opacity-75">[{country.code}]</span>
                <span>{country.name}</span>
                {isSelected && (
                  <motion.div
                    layoutId="activeCountryIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-naxis-gold-light"
                    transition={{ duration: 0.4, ease: EDITORIAL_EASING }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Card Display for Selected Country */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Image & Facility Highlight */}
          <div className="lg:col-span-5 relative flex flex-col justify-between overflow-hidden bg-naxis-brown border border-cream-100/15 min-h-[380px] lg:min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCountry.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: EDITORIAL_EASING }}
                className="absolute inset-0"
              >
                <img
                  src={selectedCountry.image}
                  alt={selectedCountry.name}
                  className="w-full h-full object-cover filter brightness-[0.65] contrast-[1.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-naxis-brown-deep via-naxis-brown-deep/40 to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Top Territory Badge */}
            <div className="relative z-10 p-6 flex justify-between items-center text-xs font-mono tracking-widest text-cream-200">
              <span className="bg-naxis-brown-deep/80 backdrop-blur-md px-3 py-1 border border-cream-100/10 text-naxis-gold-light uppercase">
                Territory {selectedCountry.code}
              </span>
              <span className="bg-naxis-emerald/80 backdrop-blur-md px-3 py-1 text-[10px] text-cream-100 uppercase tracking-widest">
                Active Production
              </span>
            </div>

            {/* Bottom Overlay Summary */}
            <div className="relative z-10 p-6 sm:p-8 text-cream-100 space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-naxis-gold-light">
                {selectedCountry.region} Operations
              </span>
              <h3 className="font-serif text-3xl md:text-4xl font-light">
                {selectedCountry.name}
              </h3>
              <p className="text-xs font-sans text-cream-300 leading-relaxed line-clamp-2">
                {selectedCountry.description}
              </p>
            </div>
          </div>

          {/* Right Column: Facility Metrics & Operational Architecture */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-naxis-brown/40 border border-cream-100/15 p-6 sm:p-10 backdrop-blur-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCountry.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: EDITORIAL_EASING }}
                className="space-y-8"
              >
                {/* Metric Summary Bar */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 border-b border-cream-100/10">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-cream-400 flex items-center gap-1.5">
                      <Factory className="w-3.5 h-3.5 text-naxis-gold" />
                      Monthly Capacity
                    </span>
                    <p className="font-serif text-xl sm:text-2xl text-cream-100 font-light">
                      {selectedCountry.capacity}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-cream-400 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-naxis-gold" />
                      Production Cycle
                    </span>
                    <p className="font-serif text-xl sm:text-2xl text-cream-100 font-light">
                      {selectedCountry.leadTime}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-cream-400 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-naxis-emerald-light" />
                      Sovereign Audits
                    </span>
                    <p className="font-serif text-xl sm:text-2xl text-cream-100 font-light">
                      100% Certified
                    </p>
                  </div>
                </div>

                {/* Primary Specialization */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono tracking-widest uppercase text-naxis-gold-light block">
                    Core Manufacturing Specialization
                  </span>
                  <p className="font-serif text-xl sm:text-2xl text-cream-100 font-normal leading-snug">
                    {selectedCountry.specialization}
                  </p>
                  <p className="text-xs sm:text-sm font-sans text-cream-300 leading-relaxed pt-1">
                    {selectedCountry.description}
                  </p>
                </div>

                {/* Facilities & Hubs */}
                <div className="space-y-2 pt-4 border-t border-cream-100/10">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-cream-400 block">
                    Manufacturing Hubs & Free-Zone Campuses
                  </span>
                  <p className="text-xs sm:text-sm font-mono text-cream-200">
                    {selectedCountry.facilities}
                  </p>
                </div>

                {/* Key Strengths Grid */}
                <div className="space-y-2 pt-4 border-t border-cream-100/10">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-cream-400 block">
                    Sovereign Competitive Advantages:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {selectedCountry.keyStrengths.map((str, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-cream-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-naxis-gold" />
                        <span className="font-sans text-xs">{str}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications Badges for this territory */}
                <div className="pt-4 border-t border-cream-100/10 flex flex-wrap gap-2">
                  {selectedCountry.certifications.map((cert, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-2.5 py-1 bg-cream-100/10 text-[10px] font-mono uppercase tracking-widest text-cream-300 border border-cream-100/10"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Direct Inquiry Action */}
            <div className="mt-8 pt-6 border-t border-cream-100/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-[11px] font-mono text-cream-400">
                Inquire about production allocation in <span className="text-cream-100 font-semibold">{selectedCountry.name}</span>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-naxis-gold hover:bg-naxis-gold-light text-naxis-brown-deep text-xs font-mono uppercase tracking-widest font-semibold transition-all duration-300"
              >
                <span>Request Territory Allocation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
