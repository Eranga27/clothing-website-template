'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, ArrowDown } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { EDITORIAL_EASING } from '../ui/ScrollReveal';

export const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative w-full h-[90vh] md:h-screen bg-near-black text-cream-100 overflow-hidden flex items-center justify-center">
      {/* Background Editorial Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        poster={siteConfig.heroFallbackImage}
        className="absolute inset-0 w-full h-full object-cover scale-105 filter brightness-[0.6] contrast-[1.1]"
      >
        <source src={siteConfig.heroVideoUrl} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* Dark Overlay & Gradient Vignette for Text Contrast */}
      <div className="absolute inset-0 bg-near-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-near-black via-near-black/40 to-near-black/60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-near-black/30 to-near-black/90" />

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center flex flex-col items-center justify-center">
        {/* Subtitle / Season badge */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.2, ease: EDITORIAL_EASING }}
          className="text-xs md:text-sm font-mono tracking-[0.3em] uppercase text-cream-200 mb-6 block drop-shadow-sm"
        >
          ERANGA'S CLOTHING STORE &bull; SRI LANKA & AUSTRALIA
        </motion.span>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: EDITORIAL_EASING }}
          className="font-serif text-4xl sm:text-6xl md:text-8xl font-light tracking-tight text-cream-100 max-w-4xl leading-[1.05] capitalize mb-8 drop-shadow-md"
        >
          Quiet Elegance & Architectural Form
        </motion.h1>

        {/* Tagline Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.7, ease: EDITORIAL_EASING }}
          className="text-sm md:text-base font-sans font-light text-cream-200/90 max-w-xl leading-relaxed tracking-wide mb-10"
        >
          {siteConfig.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.9, ease: EDITORIAL_EASING }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center"
        >
          <Link
            href="/shop"
            className="w-full sm:w-auto px-10 py-4 bg-cream-100 text-near-black text-xs font-mono tracking-widest uppercase hover:bg-cream-200 transition-all hover:scale-[1.02] shadow-xl"
          >
            Explore Collection
          </Link>
          <Link
            href="/about"
            className="w-full sm:w-auto px-10 py-4 bg-transparent border border-cream-100/40 text-cream-100 text-xs font-mono tracking-widest uppercase hover:bg-cream-100/10 transition-all"
          >
            The Atelier Ethos
          </Link>
        </motion.div>
      </div>

      {/* Sound Toggle Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-8 right-8 z-20 p-3 rounded-full bg-cream-100/10 backdrop-blur-md border border-cream-100/20 text-cream-100 hover:bg-cream-100/20 transition-all"
        aria-label="Toggle Hero Video Audio"
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
      </button>

      {/* Scroll Down Prompt Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-8 z-20 hidden md:flex items-center gap-3 text-xs font-mono tracking-widest text-cream-300 uppercase"
      >
        <ArrowDown className="w-4 h-4 animate-bounce" />
        <span>Scroll to discover</span>
      </motion.div>
    </section>
  );
};
