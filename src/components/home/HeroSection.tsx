'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, Phone, MessageSquare, ArrowDownRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const HeroSection: React.FC = () => {
  const heroWrapperRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Word refs for scroll-scrubbed assembly
  const wordSixRef = useRef<HTMLSpanElement>(null);
  const wordCountriesRef = useRef<HTMLSpanElement>(null);
  const wordOneRef = useRef<HTMLSpanElement>(null);
  const wordStandardRef = useRef<HTMLSpanElement>(null);

  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const wrapper = heroWrapperRef.current;
    const content = heroContentRef.current;
    const wSix = wordSixRef.current;
    const wCountries = wordCountriesRef.current;
    const wOne = wordOneRef.current;
    const wStandard = wordStandardRef.current;

    if (!wrapper || !content || !wSix || !wCountries || !wOne || !wStandard) {
      return;
    }

    const ctx = gsap.context(() => {
      // Initial offset state: words enter from different directions (up, down, left, right)
      gsap.set(wSix, {
        x: -90,
        y: -45,
        opacity: 0.25,
        rotate: -3,
        force3D: true,
      });

      gsap.set(wCountries, {
        x: 100,
        y: 50,
        opacity: 0.25,
        rotate: 3,
        force3D: true,
      });

      gsap.set(wOne, {
        x: -75,
        y: 55,
        opacity: 0.25,
        rotate: 2,
        force3D: true,
      });

      gsap.set(wStandard, {
        x: 85,
        y: -45,
        scale: 0.9,
        opacity: 0.25,
        rotate: -2.5,
        force3D: true,
      });

      // Scroll-scrubbed timeline pinned to the hero container
      // The sentence converges smoothly from 0% -> 70% scroll progress,
      // and sits completely still in its resting layout from 70% -> 100%.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: 'top top',
          end: '+=90%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        [wSix, wCountries, wOne, wStandard],
        {
          x: 0,
          y: 0,
          opacity: 1,
          rotate: 0,
          scale: 1,
          ease: 'power2.out',
          duration: 0.7,
        },
        0
      );

      // Dead-band pause between 0.7 and 1.0: sentence stays fully assembled and perfectly still
      tl.to({}, { duration: 0.3 });
    }, wrapper);

    // Refresh ScrollTrigger after preloader lifts (~5s) or on resize
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 5100);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div ref={heroWrapperRef} className="relative w-full bg-naxis-brown-espresso">
      <section
        ref={heroContentRef}
        className="relative w-full min-h-screen text-cream-100 flex flex-col justify-between pt-24 sm:pt-28 pb-10 sm:pb-12"
      >
        {/* ── Full-Bleed Background Looping Video ── */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            poster="/apparel4.jpg"
            onLoadedData={() => setVideoLoaded(true)}
            className={`w-full h-full object-cover brightness-[0.42] contrast-[1.12] transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-100' : 'opacity-80'
            }`}
          >
            <source src="/media/hero-compressed-video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* ── Cinematic Dark Overlays (no text clipping) ── */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/75 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,_transparent_20%,_rgba(10,8,6,0.7)_90%)] pointer-events-none" />

        {/* ── Top Bar / Wordmark Logo (Static, Separate from Kinetic Typography) ── */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="NAXIS Offshore Garment Manufacturing"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
            />
            <div className="hidden sm:flex flex-col text-left pl-3 border-l border-cream-100/20">
              <span className="text-[10px] font-mono tracking-widest uppercase text-cream-100 font-semibold">
                NAXIS OFFSHORE
              </span>
              <span className="text-[9px] font-mono tracking-wider uppercase text-cream-300/70">
                MELBOURNE · COLOMBO
              </span>
            </div>
          </div>

          {/* Top Badges: SEDEX · WRAP · CT-PAT */}
          <div className="hidden md:flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-cream-300/80 bg-black/40 backdrop-blur-md px-3.5 py-1.5 border border-cream-100/10">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>SEDEX · WRAP · CT-PAT AUDITED</span>
          </div>
        </div>

        {/* ── Center / Hero Body: Fluid Responsive Poppins Headline ── */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 my-auto py-8 sm:py-12">
          {/* Small Uppercase Kicker Line */}
          <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <p className="font-mono text-xs sm:text-sm tracking-[0.25em] md:tracking-[0.3em] text-cream-300/90 uppercase font-semibold">
              PRECISION MANUFACTURING
            </p>
          </div>

          {/* Single Headline Sentence: "SIX COUNTRIES. ONE STANDARD." */}
          {/* Fluid responsive font size via CSS clamp, line-height 1.12, NO overflow:hidden */}
          <h1
            className="font-poppins font-black uppercase text-cream-100 tracking-tight leading-[1.08] sm:leading-[1.12] select-none"
            style={{
              fontSize: 'clamp(2.25rem, 6.8vw, 6.25rem)',
            }}
          >
            {/* Line 1: SIX COUNTRIES. */}
            <div className="flex flex-wrap items-baseline gap-x-3 sm:gap-x-6 pb-1 sm:pb-3">
              <span
                ref={wordSixRef}
                className="inline-block will-change-transform"
              >
                SIX
              </span>
              <span
                ref={wordCountriesRef}
                className="inline-block will-change-transform text-cream-100"
              >
                COUNTRIES.
              </span>
            </div>

            {/* Line 2: ONE STANDARD. */}
            <div className="flex flex-wrap items-baseline gap-x-3 sm:gap-x-6">
              <span
                ref={wordOneRef}
                className="inline-block will-change-transform"
              >
                ONE
              </span>
              <span
                ref={wordStandardRef}
                className="inline-block will-change-transform text-emerald-400 drop-shadow-[0_0_32px_rgba(52,211,153,0.5)]"
              >
                STANDARD.
              </span>
            </div>
          </h1>

          {/* ── Secondary Subhead & CTAs (Asymmetric Lower Grid) ── */}
          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-cream-100/15 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
            {/* Left: Elegant secondary serif subhead (subordinated to bold Poppins headline) */}
            <div className="lg:col-span-7 space-y-2">
              <p className="font-serif italic text-cream-200/90 text-base sm:text-lg md:text-xl leading-relaxed tracking-wide">
                &ldquo;Offshore garment manufacturing across six countries — built with verified compliance, disciplined scale, and direct factory communication.&rdquo;
              </p>
              <p className="font-sans text-xs sm:text-sm text-cream-300/70 font-light tracking-wide">
                Specialized in performance sportswear &amp; activewear, belts, and leather accessories.
              </p>
            </div>

            {/* Right: CTA Action Buttons */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 lg:justify-end">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="px-7 py-3.5 bg-naxis-gold hover:bg-naxis-gold-light text-naxis-brown-deep text-[11px] font-mono tracking-widest uppercase font-bold transition-all duration-300 shadow-lg flex items-center justify-center gap-2.5 hover:translate-y-[-1px]"
              >
                <Phone className="w-3.5 h-3.5 text-naxis-brown-deep" />
                <span>Call Production</span>
              </a>

              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 bg-naxis-emerald hover:bg-emerald-600 text-cream-100 text-[11px] font-mono tracking-widest uppercase font-bold transition-all duration-300 shadow-lg flex items-center justify-center gap-2.5 hover:translate-y-[-1px]"
              >
                <MessageSquare className="w-3.5 h-3.5 text-cream-100" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar: Audio Toggle & Geographic Reach Ticker ── */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-wider text-cream-300/70 uppercase">
            <ArrowDownRight className="w-3.5 h-3.5 text-emerald-400" />
            <span>Sri Lanka · India · Bangladesh · Vietnam · China · Italy</span>
          </div>

          {/* Audio Mute/Unmute */}
          <button
            onClick={toggleMute}
            className="p-2.5 rounded-full bg-black/45 backdrop-blur-md border border-cream-100/15 text-cream-200 hover:text-cream-100 hover:border-cream-100/30 transition-all duration-300"
            aria-label={isMuted ? 'Unmute production video' : 'Mute video'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
          </button>
        </div>
      </section>
    </div>
  );
};
