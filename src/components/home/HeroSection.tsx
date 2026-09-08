'use client';

import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Volume2, VolumeX, Phone, MessageSquare } from 'lucide-react';
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
    <section className="relative w-full min-h-[92vh] md:h-screen bg-naxis-brown-espresso text-cream-100 overflow-hidden flex items-center justify-center pt-24 pb-16 md:py-0">
      {/* Background Full-Bleed Video with Slow Restrained Zoom */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={shouldReduceMotion ? { scale: 1 } : { scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 7,
          ease: [0.22, 1, 0.36, 1],
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
          className={`w-full h-full object-cover filter brightness-[0.52] contrast-[1.08] transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-100' : 'opacity-80'
          }`}
        >
          <source src="/media/hero-compressed-video.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Understated Vignette & Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/75 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_35%,_rgba(15,10,6,0.7)_100%)] pointer-events-none" />

      {/* Hero Content: Louis Vuitton Restraint — Centered, Generous Whitespace */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center">
        {/* Primary NAXIS Wordmark */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EDITORIAL_EASING }}
          className="mb-8"
        >
          <img
            src="/logo.png"
            alt="NAXIS Offshore Garment Manufacturing"
            className="h-12 sm:h-16 md:h-20 w-auto object-contain relative z-10 filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
          />
        </motion.div>

        {/* Short Confident Headline */}
        <motion.h1
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: EDITORIAL_EASING }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-cream-100 max-w-3xl leading-[1.12] mb-6"
        >
          Precision Manufacturing. <br className="hidden sm:inline" />
          <span className="italic font-normal text-naxis-gold-light">Six Countries. One Standard.</span>
        </motion.h1>

        {/* Short Plain Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: EDITORIAL_EASING }}
          className="text-xs sm:text-sm md:text-base font-sans font-light text-cream-200/90 max-w-2xl leading-relaxed tracking-wide mb-10"
        >
          {siteConfig.description}
        </motion.p>

        {/* Primary Buttons: Call Now · WhatsApp Us */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: EDITORIAL_EASING }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="w-full sm:w-auto px-8 py-3.5 bg-naxis-gold hover:bg-naxis-gold-light text-naxis-brown-deep text-xs font-mono tracking-widest uppercase font-semibold transition-all duration-300 shadow-md flex items-center justify-center gap-2.5"
          >
            <Phone className="w-3.5 h-3.5 text-naxis-brown-deep" />
            <span>Call Now</span>
          </a>

          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-naxis-emerald hover:bg-emerald-700 text-cream-100 text-xs font-mono tracking-widest uppercase font-semibold transition-all duration-300 shadow-md flex items-center justify-center gap-2.5"
          >
            <MessageSquare className="w-3.5 h-3.5 text-cream-100" />
            <span>WhatsApp Us</span>
          </a>
        </motion.div>
      </div>

      {/* Video Audio Control */}
      <button
        onClick={toggleMute}
        className="absolute bottom-6 right-6 z-20 p-2.5 rounded-full bg-black/40 backdrop-blur-md border border-cream-100/15 text-cream-200 hover:text-cream-100 transition-all duration-300"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-naxis-gold" />}
      </button>

      {/* Restrained Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-6 z-20 hidden md:flex items-center gap-3 text-[10px] font-mono tracking-super-wide text-cream-300/80 uppercase"
      >
        <span className="w-8 h-[1px] bg-cream-100/40" />
        <span>Scroll To Explore</span>
      </motion.div>
    </section>
  );
};
