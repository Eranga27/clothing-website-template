'use client';

import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, MapPin, Check, Send } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-cream-100 font-sans text-naxis-brown py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-[11px] font-mono tracking-super-wide uppercase text-naxis-gold block">
            Direct Procurement
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-naxis-brown">
            Contact NAXIS
          </h1>
          <p className="text-sm md:text-base font-sans text-editorial-muted leading-relaxed">
            Speak directly with our team — no long forms, no waiting in a queue. Reach our Melbourne executive desk or Colombo operations desk directly.
          </p>
        </div>

        {/* Primary Direct Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="p-8 bg-naxis-gold hover:bg-naxis-gold-light text-naxis-brown-deep transition-all duration-300 shadow-md group flex items-start gap-4"
          >
            <Phone className="w-6 h-6 text-naxis-brown-deep mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
            <div>
              <span className="block text-[10px] font-mono tracking-widest uppercase opacity-80 mb-1">
                Direct Telephone
              </span>
              <h2 className="font-serif text-2xl font-semibold mb-1">
                Call Production Desk
              </h2>
              <span className="font-mono text-sm block">
                {siteConfig.contact.phoneDisplay}
              </span>
            </div>
          </a>

          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 bg-naxis-emerald hover:bg-emerald-700 text-cream-100 transition-all duration-300 shadow-md group flex items-start gap-4"
          >
            <MessageSquare className="w-6 h-6 text-cream-100 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
            <div>
              <span className="block text-[10px] font-mono tracking-widest uppercase opacity-80 mb-1">
                Instant Chat
              </span>
              <h2 className="font-serif text-2xl font-semibold mb-1">
                Message on WhatsApp
              </h2>
              <span className="font-mono text-sm block">
                +61 480 029 888
              </span>
            </div>
          </a>
        </div>

        {/* Form and Office Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Office Coordinates */}
          <div className="lg:col-span-5 space-y-8 bg-white border border-naxis-brown/10 p-8 shadow-xs">
            <div className="space-y-2">
              <span className="text-[11px] font-mono tracking-widest uppercase text-naxis-gold block">
                Executive & Operations Desks
              </span>
              <h3 className="font-serif text-2xl text-naxis-brown font-light">
                Global Coordinates
              </h3>
            </div>

            <div className="space-y-4 text-xs font-mono text-naxis-brown/90">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-naxis-gold mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold block text-naxis-brown">Melbourne Headquarters</span>
                  <span className="text-editorial-muted">Client services, contracts & account management</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-naxis-gold mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold block text-naxis-brown">Colombo Operations</span>
                  <span className="text-editorial-muted">Production coordination & on-site factory QA</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-naxis-gold mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold block text-naxis-brown">Email Inquiry</span>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-editorial-muted hover:text-naxis-gold transition-colors">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-naxis-brown/10 text-[11px] font-mono text-editorial-muted uppercase tracking-wider">
              Operating Desks Active: Mon–Fri 08:00–18:00 AEST
            </div>
          </div>

          {/* Right Column: Short Inquiry Form */}
          <div className="lg:col-span-7 bg-white border border-naxis-brown/10 p-8 shadow-xs">
            <div className="mb-6 space-y-1">
              <span className="text-[11px] font-mono tracking-widest uppercase text-naxis-gold block">
                Secondary Option
              </span>
              <h3 className="font-serif text-2xl text-naxis-brown font-light">
                Short Inquiry Form
              </h3>
            </div>

            {formSubmitted ? (
              <div className="p-6 bg-naxis-emerald/10 border border-naxis-emerald text-xs font-mono text-naxis-brown space-y-2">
                <div className="flex items-center gap-2 text-naxis-emerald font-semibold">
                  <Check className="w-4 h-4" />
                  <span>Message Sent Successfully</span>
                </div>
                <p className="text-editorial-muted">
                  Thank you. Your inquiry has been forwarded to our production management desk. A director will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-naxis-brown/80 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-cream-50 border border-naxis-brown/20 px-3.5 py-2.5 text-xs font-sans text-naxis-brown focus:outline-none focus:border-naxis-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-naxis-brown/80 mb-1">
                      Brand / Company *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-cream-50 border border-naxis-brown/20 px-3.5 py-2.5 text-xs font-sans text-naxis-brown focus:outline-none focus:border-naxis-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-naxis-brown/80 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-cream-50 border border-naxis-brown/20 px-3.5 py-2.5 text-xs font-sans text-naxis-brown focus:outline-none focus:border-naxis-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-naxis-brown/80 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-cream-50 border border-naxis-brown/20 px-3.5 py-2.5 text-xs font-sans text-naxis-brown focus:outline-none focus:border-naxis-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-naxis-brown/80 mb-1">
                    Inquiry Details (Category, Estimated Volume, Timeline) *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-cream-50 border border-naxis-brown/20 px-3.5 py-2.5 text-xs font-sans text-naxis-brown focus:outline-none focus:border-naxis-gold"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-naxis-gold hover:bg-naxis-gold-light text-naxis-brown-deep font-mono text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
