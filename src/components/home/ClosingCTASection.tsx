'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, Mail, Clock, ShieldCheck, Copy, Check, FileUp } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { EDITORIAL_EASING } from '../ui/ScrollReveal';

export const ClosingCTASection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-naxis-brown-espresso text-cream-100 relative overflow-hidden">
      {/* Ambient Gold Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-naxis-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
        {/* Subtle Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EDITORIAL_EASING }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="h-[1px] w-8 bg-naxis-gold/60" />
          <span className="text-[11px] font-mono tracking-super-wide uppercase text-naxis-gold-light">
            Direct Procurement & Production Line
          </span>
          <span className="h-[1px] w-8 bg-naxis-gold/60" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: EDITORIAL_EASING }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-cream-100 max-w-3xl mx-auto leading-[1.15] mb-6"
        >
          Initiate Your Next Production Run With Precision.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: EDITORIAL_EASING }}
          className="text-xs sm:text-sm font-sans text-cream-300/80 max-w-xl mx-auto leading-relaxed mb-12"
        >
          No automated queues or endless web forms. Speak directly with our executive production directors in Melbourne and Colombo for capacity reservations, sample prototyping, and duty-free cost modeling.
        </motion.p>

        {/* Prominent Direct Action Buttons: "Call" & "WhatsApp / Text" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: EDITORIAL_EASING }}
          className="flex flex-col sm:flex-row items-stretch justify-center gap-4 sm:gap-6 max-w-xl mx-auto mb-12"
        >
          {/* Direct Phone Call Button */}
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="flex-1 px-8 py-5 bg-naxis-gold hover:bg-naxis-gold-light text-naxis-brown-deep font-semibold transition-all duration-300 ease-editorial shadow-xl hover:shadow-naxis-gold/25 group flex items-center justify-center gap-3 border border-naxis-gold-light/40"
          >
            <Phone className="w-5 h-5 text-naxis-brown-deep group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <span className="block text-[10px] font-mono tracking-widest uppercase opacity-80 leading-none mb-1">
                Voice Production Desk
              </span>
              <span className="font-mono text-sm tracking-wider block">
                Call {siteConfig.contact.phoneDisplay}
              </span>
            </div>
          </a>

          {/* WhatsApp / Direct Text Button */}
          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-8 py-5 bg-naxis-emerald hover:bg-naxis-emerald-light text-cream-100 font-semibold transition-all duration-300 ease-editorial shadow-xl hover:shadow-naxis-emerald/25 group flex items-center justify-center gap-3 border border-emerald-400/30"
          >
            <MessageSquare className="w-5 h-5 text-cream-100 group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <span className="block text-[10px] font-mono tracking-widest uppercase opacity-80 leading-none mb-1">
                Instant Messaging & RFQ
              </span>
              <span className="font-mono text-sm tracking-wider block">
                WhatsApp / Text
              </span>
            </div>
          </a>
        </motion.div>

        {/* Production Desk Operating Hours & Direct Dispatch */}
        <div className="pt-8 border-t border-cream-100/10 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-cream-400 gap-4">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-naxis-gold" />
            <span>Mon–Fri 08:00–18:00 AEST / Active Desk</span>
          </div>

          <button
            onClick={copyEmail}
            className="flex items-center gap-2 hover:text-naxis-gold-light transition-colors text-[11px]"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{siteConfig.contact.email}</span>
            {copied ? <Check className="w-3 h-3 text-naxis-emerald-light" /> : <Copy className="w-3 h-3 opacity-60" />}
          </button>
        </div>

        {/* Tech-Pack Submission Notice */}
        <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-cream-100/5 border border-cream-100/10 text-[11px] font-mono text-cream-300">
          <FileUp className="w-3.5 h-3.5 text-naxis-gold" />
          <span>Have an existing Tech-Pack? Send via WhatsApp or email for a 48-hour landed cost projection.</span>
        </div>
      </div>
    </section>
  );
};
