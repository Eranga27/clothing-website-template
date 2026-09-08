'use client';

import React from 'react';
import { siteConfig } from '@/config/site';

export const AnnouncementBar: React.FC = () => {
  return (
    <aside
      aria-label="Manufacturing notification"
      className="bg-naxis-brown-espresso text-cream-200 py-2 px-4 text-center text-[10px] md:text-[11px] font-mono tracking-super-wide uppercase border-b border-naxis-gold/25 relative z-50 flex items-center justify-center gap-3"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-naxis-emerald animate-pulse hidden sm:inline-block" />
      <span>{siteConfig.announcement}</span>
      <span className="w-1.5 h-1.5 rounded-full bg-naxis-emerald animate-pulse hidden sm:inline-block" />
    </aside>
  );
};
