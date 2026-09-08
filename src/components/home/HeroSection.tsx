'use client';

import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { EDITORIAL_EASING } from '../ui/ScrollReveal';

export const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative w-full h-[95vh] md:h-screen bg-naxis-brown-espresso text-cream-100 overflow-hidden flex items-center justify-center">
      {/* Background Full-Bleed Video with Slow Cinematic Zoom */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={shouldReduceMotion ? { scale: 1 } : { scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 8,
          ease: 'easeOut',
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster="/apparel1.jpg"
          onLoadedData={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover filter brightness-[0.55] contrast-[1.12] transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-100' : 'opacity-80'
          }`}
        >
          <source src="/media/horizontal1.mp4" type="video/mp4" />
          <source src="/media/horizontal2.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Luxury Vignette & Grain Filter */}
      <div className="absolute inset-0 bg-gradient-to-b from-naxis-brown-espresso/70 via-transparent to-naxis-brown-espresso/80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(26,18,11,0.75)_100%)] pointer-events-none" />

      {/* Hero Content: Centered, Uncluttered, Louis Vuitton Restraint */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center">
        {/* Subtle Top Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EDITORIAL_EASING }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="h-[1px] w-8 bg-naxis-gold/60" />
          <span className="text-[11px] md:text-xs font-mono tracking-super-wide uppercase text-naxis-gold-light/90">
            Offshore Garment Manufacturing Atelier
          </span>
          <span className="h-[1px] w-8 bg-naxis-gold/60" />
        </motion.div>

        {/* Primary NAXIS Wordmark: Clean & Uncluttered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: EDITORIAL_EASING }}
          className="relative mb-6 group"
        >
          {/* Subtle warm backlight glow */}
          <div className="absolute inset-0 bg-naxis-gold/20 blur-2xl rounded-full scale-125 opacity-40 pointer-events-none" />
          
          <img
            src="/logo.png"
            alt="NAXIS Offshore Garment Manufacturing"
            className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain relative z-10 filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)]"
          />
        </motion.div>

        {/* Tagline & Headline in Heritage Serif */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: EDITORIAL_EASING }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-cream-100 max-w-4xl leading-[1.1] mb-6"
        >
          Sovereign Craftsmanship. <br className="hidden sm:inline" />
          <span className="italic font-normal text-naxis-gold-light">Global Industrial Scale.</span>
        </motion.h1>

        {/* Restrained Subtitle Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: EDITORIAL_EASING }}
          className="text-xs sm:text-sm md:text-base font-sans font-light text-cream-200/80 max-w-2xl leading-relaxed tracking-wide mb-10"
        >
          Precision apparel engineering for world-tier luxury houses, performance labels, and global lifestyle collections. Operating across six sovereign manufacturing territories.
        </motion.p>

        {/* Minimal Action Triggers */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: EDITORIAL_EASING }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        >
          <a
            href="#capabilities"
            className="w-full sm:w-auto px-8 py-3.5 bg-naxis-gold hover:bg-naxis-gold-light text-naxis-brown-deep text-xs font-mono tracking-widest uppercase font-semibold transition-all duration-400 ease-editorial shadow-lg hover:shadow-naxis-gold/20"
          >
            Explore Capabilities
          </a>

          <a
            href="#global-network"
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-cream-100/30 hover:border-naxis-gold hover:text-naxis-gold-light text-cream-100 text-xs font-mono tracking-widest uppercase transition-all duration-400 ease-editorial backdrop-blur-xs"
          >
            Global Network (6 Hubs)
          </a>
        </motion.div>
      </div>

      {/* Sound Control Toggle */}
      <button
        onClick={toggleMute}
        className="absolute bottom-8 right-8 z-20 p-2.5 rounded-full bg-black/40 backdrop-blur-md border border-cream-100/15 text-cream-200 hover:text-cream-100 hover:border-naxis-gold/50 transition-all duration-300"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-naxis-gold" />}
      </button>

      {/* Restrained Louis Vuitton Scroll Cue: Line & Text, No Bounce */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-8 z-20 hidden md:flex items-center gap-4 text-[10px] font-mono tracking-super-wide text-cream-300/70 uppercase"
      >
        <span className="w-8 h-[1px] bg-cream-100/40" />
        <span>Scroll To Explore</span>
      </motion.div>
    </section>
  );
};
