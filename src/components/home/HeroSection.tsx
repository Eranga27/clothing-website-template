'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Volume2, VolumeX, Phone, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { EDITORIAL_EASING } from '../ui/ScrollReveal';

// ─── Phrase state definitions ──────────────────────────────────────────────
// Three orderings of the same core ideas — rearranged kinetically.
// State 0 & 1 are transient; state 2 is the final resting headline.
interface PhraseLine {
  words: string[];
  gold: boolean;
}

interface PhraseStateData {
  id: string;
  lines: PhraseLine[];
}

const PHRASE_STATES: PhraseStateData[] = [
  {
    id: 'ph-0',
    lines: [
      { words: ['Precision'], gold: false },
      { words: ['Woven'], gold: true },
      { words: ['Across', 'Six', 'Countries'], gold: false },
    ],
  },
  {
    id: 'ph-1',
    lines: [
      { words: ['One', 'Standard'], gold: true },
      { words: ['Into', 'Every', 'Order'], gold: false },
    ],
  },
  {
    id: 'ph-2',
    lines: [
      { words: ['Precision', 'Manufacturing.'], gold: false },
      { words: ['Six', 'Countries.', 'One', 'Standard.'], gold: true },
    ],
  },
];

// ─── Per-word animated component ──────────────────────────────────────────
// Each word is an independent motion.span so stagger works on both enter + exit.
function KineticHeadline({ state }: { state: PhraseStateData }) {
  // Pre-compute flat word indices so exit delays stagger in reverse order
  let idx = 0;
  const lineData = state.lines.map((line) => ({
    gold: line.gold,
    wordsWithIdx: line.words.map((word) => ({ word, idx: idx++ })),
  }));
  const totalWords = idx;

  return (
    <div className="space-y-2 sm:space-y-3 text-center">
      {lineData.map((line, lineIdx) => (
        <div key={lineIdx} className="block leading-none overflow-visible py-1">
          {line.wordsWithIdx.map(({ word, idx: wordIdx }) => (
            <motion.span
              key={`${state.id}-${wordIdx}`}
              className={`inline-block mr-[0.22em] last:mr-0 font-serif font-light tracking-tight leading-none select-none
                text-[clamp(2.4rem,8vw,5.5rem)]
                ${line.gold ? 'italic text-naxis-gold-light' : 'text-cream-100'}`}
              initial={{ y: 44, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{
                y: -32,
                opacity: 0,
                transition: {
                  // Exit in reverse order: last word first
                  delay: (totalWords - 1 - wordIdx) * 0.04,
                  duration: 0.32,
                  ease: EDITORIAL_EASING,
                },
              }}
              transition={{
                delay: wordIdx * 0.07,
                duration: 0.7,
                ease: EDITORIAL_EASING,
              }}
            >
              {word}
            </motion.span>
          ))}
        </div>
      ))}
    </div>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────
export const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Jump straight to final state if user prefers reduced motion
  const [stateIndex, setStateIndex] = useState(shouldReduceMotion ? 2 : 0);

  // Timed sequence: 0 → 1 → 2 (final, permanent)
  useEffect(() => {
    if (shouldReduceMotion) return;

    // State 0 visible ~2.8 s, then transition to state 1
    const t1 = setTimeout(() => setStateIndex(1), 2800);
    // State 1 visible ~2.8 s (accounting for exit/enter anim), then settle on state 2
    const t2 = setTimeout(() => setStateIndex(2), 6200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [shouldReduceMotion]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative w-full min-h-[92vh] md:h-screen bg-naxis-brown-espresso text-cream-100 overflow-hidden flex items-center justify-center pt-24 pb-16 md:py-0">

      {/* ── Full-Bleed Video: slow restrained Ken Burns zoom ── */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={shouldReduceMotion ? { scale: 1 } : { scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: [0.22, 1, 0.36, 1] }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster="/apparel1.jpg"
          onLoadedData={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover brightness-[0.48] contrast-[1.1] transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-100' : 'opacity-75'
          }`}
        >
          <source src="/media/hero-compressed-video.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* ── Gradient overlays ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/10 to-black/80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(15,10,6,0.65)_100%)] pointer-events-none" />

      {/* ── Hero Content ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center">

        {/* NAXIS Wordmark — static, not part of kinetic effect */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EDITORIAL_EASING }}
          className="mb-10 sm:mb-14"
        >
          <img
            src="/logo.png"
            alt="NAXIS Offshore Garment Manufacturing"
            className="h-9 sm:h-12 md:h-14 w-auto object-contain filter drop-shadow-[0_8px_24px_rgba(0,0,0,0.55)]"
          />
        </motion.div>

        {/* Kinetic headline — reserved height prevents layout shifts */}
        <div
          className="relative w-full mb-10 sm:mb-12 flex items-center justify-center"
          style={{ minHeight: 'clamp(180px, 28vw, 360px)' }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={PHRASE_STATES[stateIndex].id}
              className="w-full"
            >
              <KineticHeadline state={PHRASE_STATES[stateIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Short plain subheadline — appears early, stays visible throughout */}
        <motion.p
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: shouldReduceMotion ? 0.2 : 0.6, ease: EDITORIAL_EASING }}
          className="text-xs sm:text-sm font-sans font-light text-cream-200/80 max-w-xl leading-relaxed tracking-wide mb-10"
        >
          {siteConfig.description}
        </motion.p>

        {/* CTA Buttons — appear early */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: shouldReduceMotion ? 0.3 : 0.9, ease: EDITORIAL_EASING }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto"
        >
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="w-full sm:w-auto px-8 py-3.5 bg-naxis-gold hover:bg-naxis-gold-light text-naxis-brown-deep text-[11px] font-mono tracking-widest uppercase font-semibold transition-all duration-300 shadow-md flex items-center justify-center gap-2.5"
          >
            <Phone className="w-3.5 h-3.5 text-naxis-brown-deep" />
            <span>Call Now</span>
          </a>

          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-naxis-emerald hover:bg-emerald-700 text-cream-100 text-[11px] font-mono tracking-widest uppercase font-semibold transition-all duration-300 shadow-md flex items-center justify-center gap-2.5"
          >
            <MessageSquare className="w-3.5 h-3.5 text-cream-100" />
            <span>WhatsApp Us</span>
          </a>
        </motion.div>
      </div>

      {/* ── Mute / Unmute ── */}
      <button
        onClick={toggleMute}
        className="absolute bottom-6 right-6 z-20 p-2.5 rounded-full bg-black/40 backdrop-blur-md border border-cream-100/15 text-cream-200 hover:text-cream-100 transition-all duration-300"
        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-naxis-gold" />}
      </button>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.65 }}
        transition={{ delay: shouldReduceMotion ? 0.5 : 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-6 z-20 hidden md:flex items-center gap-3 text-[10px] font-mono tracking-super-wide text-cream-300/75 uppercase"
      >
        <span className="w-8 h-[1px] bg-cream-100/35" />
        <span>Scroll To Explore</span>
      </motion.div>
    </section>
  );
};
