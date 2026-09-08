'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Volume2, VolumeX, Phone, MessageSquare, ArrowDownRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

// ─── Kinetic Typography Sequence (Inspired by Yarnity) ──────────────────────
// High-energy uppercase grotesk words cycling through 3 permutations before
// locking into the massive resting headline with the emerald accent word.
interface KineticWord {
  text: string;
  isAccent?: boolean;
}

interface KineticLine {
  words: KineticWord[];
}

interface KineticPhrase {
  id: string;
  lines: KineticLine[];
}

const PHRASE_SEQUENCES: KineticPhrase[] = [
  {
    id: 'kinetic-phase-0',
    lines: [
      { words: [{ text: 'PRECISION' }] },
      { words: [{ text: 'WOVEN' }, { text: 'ACROSS' }] },
      { words: [{ text: 'SIX' }, { text: 'COUNTRIES' }] },
    ],
  },
  {
    id: 'kinetic-phase-1',
    lines: [
      { words: [{ text: 'ONE' }, { text: 'STANDARD' }] },
      { words: [{ text: 'INTO' }, { text: 'EVERY' }] },
      { words: [{ text: 'ORDER.', isAccent: true }] },
    ],
  },
  {
    id: 'kinetic-phase-2',
    lines: [
      { words: [{ text: 'PRECISION' }, { text: 'MANUFACTURING' }] },
      { words: [{ text: 'ACROSS' }, { text: 'SIX' }, { text: 'COUNTRIES' }] },
      { words: [{ text: 'ONE' }, { text: 'STANDARD.', isAccent: true }] },
    ],
  },
];

// Punchy mechanical easing curve for kinetic type slide & lock
const KINETIC_EASING: [number, number, number, number] = [0.16, 1, 0.3, 1];

function KineticHeadlineDisplay({ phrase }: { phrase: KineticPhrase }) {
  // Compute global index for staggered timing
  let runningIndex = 0;
  const processedLines = phrase.lines.map((line) => ({
    words: line.words.map((w) => ({ ...w, globalIdx: runningIndex++ })),
  }));
  const totalWords = runningIndex;

  return (
    <div className="w-full flex flex-col items-start text-left select-none overflow-hidden">
      {processedLines.map((line, lineIdx) => (
        <div
          key={lineIdx}
          className="overflow-hidden py-0.5 sm:py-1 leading-[0.84] sm:leading-[0.86] flex flex-wrap items-baseline"
        >
          {line.words.map((word) => (
            <span
              key={`${phrase.id}-${word.globalIdx}`}
              className="inline-block overflow-hidden mr-[0.24em] last:mr-0 align-top"
            >
              <motion.span
                className={`inline-block font-grotesk font-black uppercase tracking-[-0.035em] ${
                  word.isAccent
                    ? 'text-emerald-400 drop-shadow-[0_0_28px_rgba(52,211,153,0.45)]'
                    : 'text-cream-100'
                } text-[11.2vw] sm:text-[9.4vw] md:text-[8.2vw] lg:text-[7.4vw] xl:text-[7.1vw] leading-[0.86]`}
                initial={{ y: '115%', opacity: 0, rotateX: 25 }}
                animate={{ y: '0%', opacity: 1, rotateX: 0 }}
                exit={{
                  y: '-115%',
                  opacity: 0,
                  transition: {
                    delay: (totalWords - 1 - word.globalIdx) * 0.035,
                    duration: 0.35,
                    ease: KINETIC_EASING,
                  },
                }}
                transition={{
                  delay: word.globalIdx * 0.065,
                  duration: 0.72,
                  ease: KINETIC_EASING,
                }}
              >
                {word.text}
              </motion.span>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

// ─── Main Hero Section ───────────────────────────────────────────────────────
export const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // If reduced motion is requested, immediately lock to resting state 2
  const [stateIndex, setStateIndex] = useState(shouldReduceMotion ? 2 : 0);

  useEffect(() => {
    if (shouldReduceMotion) return;

    // Phrase 0 displays for ~2.6s
    const timer1 = setTimeout(() => setStateIndex(1), 2600);
    // Phrase 1 displays for ~2.6s, then settles permanently on Phrase 2
    const timer2 = setTimeout(() => setStateIndex(2), 5800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [shouldReduceMotion]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative w-full min-h-[96vh] lg:min-h-screen bg-naxis-brown-espresso text-cream-100 overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 pb-12 sm:pb-16">

      {/* ── Full-Bleed Background Looping Video ── */}
      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-none"
        initial={shouldReduceMotion ? { scale: 1 } : { scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: [0.22, 1, 0.36, 1] }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster="/apparel4.jpg"
          onLoadedData={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover brightness-[0.44] contrast-[1.12] transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-100' : 'opacity-80'
          }`}
        >
          <source src="/media/hero-compressed-video.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* ── Cinematic Dark Overlays ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/75 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,_transparent_20%,_rgba(10,8,6,0.7)_90%)] pointer-events-none" />

      {/* ── Top Bar / Wordmark Logo (Static, Separate from Kinetic Typography) ── */}
      <div className="relative z-10 w-full max-w-[96vw] 2xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: KINETIC_EASING }}
          className="flex items-center gap-3"
        >
          <img
            src="/logo.png"
            alt="NAXIS Offshore Garment Manufacturing"
            className="h-8 sm:h-10 md:h-11 w-auto object-contain filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
          />
          <div className="hidden sm:flex flex-col text-left pl-3 border-l border-cream-100/20">
            <span className="text-[10px] font-mono tracking-widest uppercase text-cream-100 font-semibold">
              NAXIS OFFSHORE
            </span>
            <span className="text-[9px] font-mono tracking-wider uppercase text-cream-300/70">
              MELBOURNE · COLOMBO
            </span>
          </div>
        </motion.div>

        {/* Top Badges: SEDEX · WRAP · CT-PAT */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden md:flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-cream-300/80 bg-black/40 backdrop-blur-md px-3.5 py-1.5 border border-cream-100/10"
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>SEDEX · WRAP · CT-PAT AUDITED</span>
        </motion.div>
      </div>

      {/* ── Center / Hero Body: Bleeding Kinetic Grotesk Headline ── */}
      <div className="relative z-10 w-full max-w-[96vw] 2xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-10 my-auto py-8 sm:py-12">
        {/* Kinetic Headline Container with stable minimum height */}
        <div
          className="w-full flex items-center"
          style={{ minHeight: 'clamp(180px, 30vw, 420px)' }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={PHRASE_SEQUENCES[stateIndex].id}
              className="w-full"
            >
              <KineticHeadlineDisplay phrase={PHRASE_SEQUENCES[stateIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Secondary Subhead & CTAs (Asymmetric Lower Grid) ── */}
        <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-cream-100/15 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">

          {/* Left: Elegant secondary serif subhead (subordinated to bold headline) */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: shouldReduceMotion ? 0.2 : 0.6, ease: KINETIC_EASING }}
            className="lg:col-span-7 space-y-2"
          >
            <p className="font-serif italic text-cream-200/90 text-base sm:text-lg md:text-xl leading-relaxed tracking-wide">
              &ldquo;Offshore garment manufacturing across six countries — built with verified compliance, disciplined scale, and direct factory communication.&rdquo;
            </p>
            <p className="font-sans text-xs sm:text-sm text-cream-300/70 font-light tracking-wide">
              Specialized in performance sportswear &amp; activewear, belts, and leather accessories.
            </p>
          </motion.div>

          {/* Right: CTA Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: shouldReduceMotion ? 0.3 : 0.8, ease: KINETIC_EASING }}
            className="lg:col-span-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 lg:justify-end"
          >
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
          </motion.div>
        </div>
      </div>

      {/* ── Bottom Bar: Audio Toggle & Geographic Reach Ticker ── */}
      <div className="relative z-10 w-full max-w-[96vw] 2xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between">
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
  );
};
