'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { EDITORIAL_EASING } from '../ui/ScrollReveal';

export const GlobalNetworkSection: React.FC = () => {
  const [selectedCountryId, setSelectedCountryId] = useState<string>(siteConfig.countries[0].id);

  const selectedCountry =
    siteConfig.countries.find((c) => c.id === selectedCountryId) || siteConfig.countries[0];

  return (
    <section id="global-network" className="py-24 md:py-36 bg-naxis-brown-deep text-cream-100 relative overflow-hidden">
      {/* Background Subtle Luxury Grain */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#B8912F_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header: masholdings pattern */}
        <div className="max-w-3xl mb-16 pb-8 border-b border-cream-100/15 space-y-4">
          <span className="text-[11px] font-mono tracking-super-wide uppercase text-naxis-gold-light block">
            Global Network
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-cream-100">
            Manufacturing Across Six Countries
          </h2>
          <p className="text-sm md:text-base font-sans text-cream-300/80 leading-relaxed">
            Each of our production hubs brings a different strength to the table — giving your brand flexibility in cost, speed, and specialization.
          </p>
        </div>

        {/* Clean Interactive Country Tabs Ribbon */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-12 border-b border-cream-100/10">
          {siteConfig.countries.map((country) => {
            const isSelected = country.id === selectedCountryId;
            return (
              <button
                key={country.id}
                onClick={() => setSelectedCountryId(country.id)}
                className={`relative px-5 py-3 text-xs font-mono uppercase tracking-widest transition-all duration-300 whitespace-nowrap flex items-center gap-2 ${
                  isSelected
                    ? 'text-naxis-brown-deep font-semibold bg-naxis-gold'
                    : 'text-cream-300/70 hover:text-cream-100 hover:bg-cream-100/5'
                }`}
              >
                <span className="text-[10px] opacity-75">[{country.code}]</span>
                <span>{country.name}</span>
                {isSelected && (
                  <motion.div
                    layoutId="activeCountryTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-naxis-gold-light"
                    transition={{ duration: 0.35, ease: EDITORIAL_EASING }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Focused Country Display: One or Two Plain Facts (Not Dense Stat Blocks) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Visual Column */}
          <div className="lg:col-span-5 relative flex flex-col justify-between overflow-hidden bg-naxis-brown border border-cream-100/15 min-h-[320px] lg:min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCountry.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: EDITORIAL_EASING }}
                className="absolute inset-0"
              >
                <img
                  src={selectedCountry.image}
                  alt={selectedCountry.name}
                  className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-naxis-brown-deep via-naxis-brown-deep/30 to-transparent" />
              </motion.div>
            </AnimatePresence>

            <div className="relative z-10 p-6 flex justify-between items-center text-xs font-mono tracking-widest text-cream-200">
              <span className="bg-black/60 backdrop-blur-md px-3 py-1 border border-cream-100/10 text-naxis-gold-light uppercase">
                Territory [{selectedCountry.code}]
              </span>
              <span className="text-[11px] text-cream-300 font-mono">
                {selectedCountry.region}
              </span>
            </div>

            <div className="relative z-10 p-6 sm:p-8 text-cream-100 space-y-2">
              <h3 className="font-serif text-2xl sm:text-3xl font-light">
                {selectedCountry.name}
              </h3>
            </div>
          </div>

          {/* Plain Facts & Client Note Column */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-naxis-brown/40 border border-cream-100/15 p-6 sm:p-10 backdrop-blur-xs">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCountry.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: EDITORIAL_EASING }}
                className="space-y-6"
              >
                <div className="space-y-3">
                  <span className="text-[11px] font-mono tracking-widest uppercase text-naxis-gold-light block">
                    Manufacturing Focus
                  </span>
                  <p className="font-serif text-xl sm:text-2xl text-cream-100 font-light leading-relaxed">
                    {selectedCountry.description}
                  </p>
                </div>

                <div className="space-y-3 pt-6 border-t border-cream-100/10">
                  <span className="text-[11px] font-mono tracking-widest uppercase text-cream-400 block">
                    Key Regional Factors:
                  </span>
                  <ul className="space-y-2">
                    {selectedCountry.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-sans text-cream-200">
                        <span className="text-naxis-gold mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-cream-100/5 border border-naxis-gold/20 text-xs font-mono text-naxis-gold-light leading-relaxed">
                  <span className="block font-semibold mb-1 text-[10px] tracking-wider uppercase text-cream-300">
                    Client Note:
                  </span>
                  {selectedCountry.confirmPlaceholder}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 pt-6 border-t border-cream-100/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-xs font-mono text-cream-300">
                Operating across 6 countries under one unified management protocol.
              </span>
              <a
                href="/#contact"
                className="px-6 py-2.5 bg-naxis-gold hover:bg-naxis-gold-light text-naxis-brown-deep text-xs font-mono uppercase tracking-widest font-semibold transition-all duration-300 inline-block"
              >
                Inquire on Hub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
