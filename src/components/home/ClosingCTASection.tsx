'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, Mail, ChevronDown, Check, Send } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { EDITORIAL_EASING } from '../ui/ScrollReveal';

export const ClosingCTASection: React.FC = () => {
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-naxis-brown-espresso text-cream-100 relative overflow-hidden">
      {/* Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-naxis-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        {/* Subtle Kicker */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-[1px] w-6 bg-naxis-gold/60" />
          <span className="text-[11px] font-mono tracking-super-wide uppercase text-naxis-gold-light">
            Direct Procurement Desk
          </span>
          <span className="h-[1px] w-6 bg-naxis-gold/60" />
        </div>

        {/* Copy Deck Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-cream-100 max-w-2xl mx-auto leading-[1.15] mb-6">
          Ready to Start a Production Run?
        </h2>

        {/* Copy Deck Body */}
        <p className="text-sm md:text-base font-sans text-cream-200/85 max-w-lg mx-auto leading-relaxed mb-12">
          Speak directly with our team — no long forms, no waiting in a queue.
        </p>

        {/* Primary Action Buttons: Call Desk & WhatsApp */}
        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 sm:gap-6 max-w-xl mx-auto mb-10">
          {/* Call Our Production Desk */}
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="flex-1 px-8 py-5 bg-naxis-gold hover:bg-naxis-gold-light text-naxis-brown-deep font-semibold transition-all duration-300 shadow-lg group flex items-center justify-center gap-3"
          >
            <Phone className="w-4 h-4 text-naxis-brown-deep group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <span className="block text-[10px] font-mono tracking-widest uppercase opacity-75 leading-none mb-1">
                Direct Call
              </span>
              <span className="font-mono text-sm tracking-wide block">
                Call Our Production Desk
              </span>
            </div>
          </a>

          {/* Message Us on WhatsApp */}
          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-8 py-5 bg-naxis-emerald hover:bg-emerald-700 text-cream-100 font-semibold transition-all duration-300 shadow-lg group flex items-center justify-center gap-3"
          >
            <MessageSquare className="w-4 h-4 text-cream-100 group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <span className="block text-[10px] font-mono tracking-widest uppercase opacity-80 leading-none mb-1">
                Instant Chat
              </span>
              <span className="font-mono text-sm tracking-wide block">
                Message Us on WhatsApp
              </span>
            </div>
          </a>
        </div>

        {/* Contact Email & Direct Desk Numbers */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-cream-300/80 mb-12">
          <div className="flex items-center gap-2">
            <span className="text-naxis-gold">•</span>
            <span>Tel: {siteConfig.contact.phoneDisplay}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-naxis-gold">•</span>
            <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-naxis-gold-light transition-colors underline underline-offset-4">
              {siteConfig.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-naxis-gold">•</span>
            <span>Melbourne & Colombo Executive Desks</span>
          </div>
        </div>

        {/* Secondary Short Inquiry Form Option */}
        <div className="max-w-md mx-auto pt-6 border-t border-cream-100/10 text-left">
          <button
            onClick={() => setShowInquiryForm(!showInquiryForm)}
            className="w-full flex items-center justify-between text-xs font-mono uppercase tracking-widest text-cream-300 hover:text-naxis-gold transition-colors py-2"
          >
            <span>Or send a brief written inquiry</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showInquiryForm ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {showInquiryForm && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: EDITORIAL_EASING }}
                className="overflow-hidden pt-4"
              >
                {formSubmitted ? (
                  <div className="p-4 bg-naxis-emerald/20 border border-naxis-emerald text-xs font-mono text-cream-100 flex items-center gap-3">
                    <Check className="w-4 h-4 text-naxis-emerald-light flex-shrink-0" />
                    <span>Inquiry received. A production director will contact you directly within 24 hours.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-wider text-cream-400 mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-cream-100/5 border border-cream-100/20 px-3 py-2 text-xs font-sans text-cream-100 focus:outline-none focus:border-naxis-gold"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-wider text-cream-400 mb-1">
                          Brand / Company
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full bg-cream-100/5 border border-cream-100/20 px-3 py-2 text-xs font-sans text-cream-100 focus:outline-none focus:border-naxis-gold"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-cream-400 mb-1">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-cream-100/5 border border-cream-100/20 px-3 py-2 text-xs font-sans text-cream-100 focus:outline-none focus:border-naxis-gold"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-cream-400 mb-1">
                        Inquiry Details (Category, volume, timeline)
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-cream-100/5 border border-cream-100/20 px-3 py-2 text-xs font-sans text-cream-100 focus:outline-none focus:border-naxis-gold"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-naxis-gold hover:bg-naxis-gold-light text-naxis-brown-deep text-xs font-mono uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Inquiry</span>
                    </button>
                  </form>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
