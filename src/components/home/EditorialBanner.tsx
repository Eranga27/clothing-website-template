'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ScrollReveal } from '../ui/ScrollReveal';

export const EditorialBanner: React.FC = () => {
  return (
    <section className="relative w-full h-[65vh] md:h-[75vh] bg-near-black text-cream-100 overflow-hidden flex items-center justify-center my-12">
      {/* Background Editorial Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105 filter brightness-[0.55] contrast-[1.1]"
      >
        <source src="/media/editorial.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* Dark Overlay & Vignette */}
      <div className="absolute inset-0 bg-near-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-near-black via-near-black/30 to-near-black/70" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <ScrollReveal>
          <span className="text-xs md:text-sm font-mono tracking-[0.3em] uppercase text-cream-300 mb-4 block drop-shadow-sm">
            ATELIER CINEMATIC &bull; CINEMATOGRAPHY
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-7xl font-light tracking-tight text-cream-100 leading-[1.1] mb-6 drop-shadow-lg">
            Tactile Pure Wool & Architectural Silence
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-sm md:text-base font-sans font-light text-cream-200/90 max-w-xl leading-relaxed mb-8 drop-shadow-sm">
            Experience our latest movement film capturing the fluid weight of unblended Italian cashmere and structured outer layers.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <Link
            href="/shop?category=tailoring"
            className="inline-block px-10 py-4 bg-cream-100 text-near-black text-xs font-mono tracking-widest uppercase hover:bg-cream-200 transition-all hover:scale-[1.02] shadow-2xl"
          >
            Explore Tailored Pieces
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};
