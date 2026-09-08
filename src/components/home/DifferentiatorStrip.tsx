'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe, MessageSquare } from 'lucide-react';
import { EDITORIAL_EASING } from '../ui/ScrollReveal';

const ITEMS = [
  {
    Icon: ShieldCheck,
    label: 'Certified Facilities',
    sub: 'SEDEX · WRAP · CT-PAT',
  },
  {
    Icon: Globe,
    label: 'Six Countries',
    sub: 'Sri Lanka · India · Bangladesh · Vietnam · China · Italy',
  },
  {
    Icon: MessageSquare,
    label: 'Direct Communication',
    sub: 'No agents. No intermediaries.',
  },
] as const;

export const DifferentiatorStrip: React.FC = () => (
  <section className="py-16 md:py-20 bg-cream-100 border-t border-b border-naxis-brown/10">
    <div className="max-w-4xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-naxis-brown/10">
        {ITEMS.map(({ Icon, label, sub }, idx) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: idx * 0.1, ease: EDITORIAL_EASING }}
            className="flex flex-col items-center text-center gap-3 px-8 py-6 sm:py-0 sm:px-10"
          >
            <Icon className="w-[22px] h-[22px] text-naxis-gold stroke-[1.5]" />
            <div className="space-y-1">
              <p className="text-[11px] font-mono font-semibold uppercase tracking-super-wide text-naxis-brown">
                {label}
              </p>
              <p className="text-[11px] font-sans text-naxis-brown/45 leading-snug">
                {sub}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
