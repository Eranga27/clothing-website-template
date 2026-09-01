'use client';

import React from 'react';
import { siteConfig } from '@/config/site';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-near-black text-cream-200 py-2 px-4 text-center text-[11px] font-mono tracking-widest uppercase border-b border-cream-100/10">
      <span>{siteConfig.announcement}</span>
    </div>
  );
};
