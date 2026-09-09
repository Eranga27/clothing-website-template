'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sixRef = useRef<HTMLDivElement>(null);
  const standardRef = useRef<HTMLSpanElement>(null);
  const countriesRef = useRef<HTMLDivElement>(null);
  const oneRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);
  const kickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const section = sectionRef.current;
    const video = videoRef.current;
    const six = sixRef.current;
    const standard = standardRef.current;
    const countries = countriesRef.current;
    const one = oneRef.current;
    const subtext = subtextRef.current;
    const kicker = kickerRef.current;

    if (!section || !six || !standard) return;

    if (prefersReducedMotion) {
      gsap.set([six, standard, countries, one, subtext, kicker], { opacity: 1, x: 0 });
      return;
    }

    const ctx = gsap.context(() => {

      // ── INITIAL STATE ──
      // SIX starts FAR LEFT  (displaced from its natural position beside COUNTRIES.)
      // STANDARD. starts FAR RIGHT (displaced from its natural position after ONE)
      // COUNTRIES. and ONE stay fixed — they are the anchors
      gsap.set(six, { x: '-35vw', opacity: 0 });
      gsap.set(standard, { x: '35vw', opacity: 0 });
      gsap.set([countries, one, subtext, kicker], { opacity: 0 });

      // ── ENTRANCE: Fade fixed elements in, then slide animated ones into place ──
      const entranceTl = gsap.timeline({
        defaults: { ease: 'power2.out' },
        delay: 0.1,
      });

      entranceTl
        .to(kicker, { opacity: 1, duration: 0.5 })
        .to([countries, one], { opacity: 1, duration: 0.8, stagger: 0.1 }, '-=0.2')
        .to(six, { x: 0, opacity: 1, duration: 1.1 }, '-=0.5')
        .to(standard, { x: 0, opacity: 1, duration: 1.1 }, '-=0.9')
        .to(subtext, { opacity: 1, duration: 0.7 }, '-=0.4');

      // ── SCROLL-LINKED KINETIC EFFECT ──
      // No sticky wrapper — the section scrolls naturally.
      // Animation: as hero scrolls upward off screen, SIX separates left, STANDARD separates right.
      // When scrolling back up, they converge back into aligned position.
      //
      // start: 'top top'    → begins when hero top hits viewport top
      // end: 'center top'   → completes when hero center reaches viewport top (~halfway scrolled)
      // scrub: 2            → medium-paced, smooth bidirectional
      //
      // At progress=0: SIX at x=0, STANDARD at x=0 (aligned)
      // At progress=1: SIX at x=-30vw (left), STANDARD at x=30vw (right) — separated

      gsap.to(six, {
        x: '-30vw',
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'center top',
          scrub: 2,
        },
      });

      gsap.to(standard, {
        x: '30vw',
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'center top',
          scrub: 2,
        },
      });

      // Subtle video parallax
      if (video) {
        gsap.to(video, {
          yPercent: 12,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    // Plain 100vh section — no sticky wrapper, scrolls naturally
    <section
      ref={sectionRef}
      className="relative w-full h-screen min-h-[640px] max-h-[1200px] bg-naxis-brown-espresso text-cream-100 flex flex-col justify-end overflow-hidden select-none"
    >
      {/* ── Full-Bleed Video Background ── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/apparel4.jpg"
          className="w-full h-full object-cover brightness-[0.65] contrast-[1.05]"
        >
          <source src="/media/hero-compressed-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ── Overlays ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent pointer-events-none" />

      {/* ── Hero Typography ── */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 pb-10 sm:pb-14 md:pb-16">

        {/* Kicker */}
        <div ref={kickerRef} className="flex items-center gap-2.5 mb-3 will-change-transform">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.3em] text-cream-300/80 uppercase font-semibold">
            PRECISION MANUFACTURING
          </p>
        </div>

        {/* ── Typography Block ── */}
        <div
          className="font-poppins font-black uppercase tracking-[-0.03em] leading-[0.92] text-cream-100"
          style={{ fontSize: 'clamp(3.5rem, 11vw, 11rem)' }}
        >

          {/* Line 1: SIX [animated] + COUNTRIES. [fixed anchor] */}
          <div className="flex items-baseline gap-[0.2em] overflow-visible pb-1">
            {/* SIX — starts left, slides right to align with COUNTRIES. */}
            <div ref={sixRef} className="will-change-transform flex-shrink-0">
              SIX
            </div>
            {/* COUNTRIES. — stays fixed */}
            <div ref={countriesRef} className="will-change-transform flex-shrink-0">
              COUNTRIES.
            </div>
          </div>

          {/* Line 2: ONE [fixed anchor] + STANDARD. [animated] */}
          <div className="flex items-baseline gap-[0.22em] overflow-visible">
            {/* ONE — stays fixed */}
            <div ref={oneRef} className="will-change-transform flex-shrink-0 text-cream-100">
              ONE
            </div>
            {/* STANDARD. — starts right, slides left to align with ONE */}
            <span
              ref={standardRef}
              className="will-change-transform flex-shrink-0 text-emerald-400 drop-shadow-[0_0_40px_rgba(52,211,153,0.55)]"
            >
              STANDARD.
            </span>
          </div>

        </div>

        {/* Subtext */}
        <div ref={subtextRef} className="mt-5 will-change-transform max-w-xs sm:max-w-sm">
          <p className="font-sans text-xs sm:text-sm text-cream-200/80 font-normal leading-relaxed normal-case tracking-normal">
            Offshore garment manufacturing across six countries — built with verified compliance, disciplined scale, and direct factory communication.
          </p>
        </div>

      </div>
    </section>
  );
};
