'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const HeroSection: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);
  const kickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const wrapper = wrapperRef.current;
    const section = sectionRef.current;
    const video = videoRef.current;
    const l1 = line1Ref.current;
    const l2 = line2Ref.current;
    const l3 = line3Ref.current;
    const subtext = subtextRef.current;
    const kicker = kickerRef.current;

    if (!wrapper || !section || !l1 || !l2 || !l3) return;

    if (prefersReducedMotion) {
      gsap.set([l1, l2, l3, subtext, kicker], { opacity: 1, x: 0, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      // ── INITIAL STATE: Words scattered/displaced (the "starting" positions before assembly) ──
      // SIX: pushed left off-center, slightly low
      gsap.set(l1, { x: '-10vw', y: 30, opacity: 0 });
      // COUNTRIES.: pushed right, slightly high
      gsap.set(l2, { x: '10vw', y: -20, opacity: 0 });
      // ONE STANDARD.: shifted left, lower
      gsap.set(l3, { x: '-6vw', y: 25, opacity: 0 });
      // Subtext + kicker: hidden
      gsap.set([kicker, subtext], { opacity: 0, y: 12 });

      // ── ENTRANCE: Words slowly slide INTO their final layout positions ──
      // This entrance IS the "aligning" effect the user sees when first scrolling.
      // It plays on load but the key is the ScrollTrigger below makes it scrub-driven.
      const entranceTl = gsap.timeline({
        defaults: { ease: 'power2.out' },
        delay: 0.05,
      });

      entranceTl
        .to(kicker, { opacity: 1, y: 0, duration: 0.7 })
        .to(l1, { x: 0, y: 0, opacity: 1, duration: 1.3 }, '-=0.5')
        .to(l2, { x: 0, y: 0, opacity: 1, duration: 1.3 }, '-=1.1')
        .to(l3, { x: 0, y: 0, opacity: 1, duration: 1.3 }, '-=1.0')
        .to(subtext, { opacity: 1, y: 0, duration: 0.9 }, '-=0.7');

      // ── SCROLL-LINKED ASSEMBLY (Yarnity-style kinetic) ──
      // The wrapper is 200vh, section is sticky. As you scroll through the extra 100vh:
      // - Words START in their FINAL assembled positions (post-entrance)
      // - They SLOWLY DRIFT back to scattered positions as scroll progresses
      // - Scrolling back up = words reassemble into the clean layout
      // This creates the exact bidirectional kinetic effect described.
      //
      // "end: '+=100%'" means the animation runs across 100vh of extra scroll space
      // before the next section comes in.

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: 'top top',
          end: '+=100%',
          scrub: 1.5,
          pin: false,
        },
      });

      // As scroll progresses (0→1):
      //   - Words drift outward from aligned position back toward scattered
      //   - Stays visible the entire time (opacity: 0.8 minimum, not invisible)
      //   - The drift is smooth and purposeful, not a disappear
      scrollTl
        .to(l1, { x: '-6vw', y: -10, ease: 'none' }, 0)
        .to(l2, { x: '6vw', y: -12, ease: 'none' }, 0)
        .to(l3, { x: '-3vw', y: -8, ease: 'none' }, 0)
        .to(subtext, { opacity: 0.4, y: -20, ease: 'none' }, 0)
        .to(kicker, { opacity: 0.3, y: -15, ease: 'none' }, 0);

      // ── Subtle video parallax ──
      if (video) {
        gsap.to(video, {
          yPercent: 12,
          ease: 'none',
          scrollTrigger: {
            trigger: wrapper,
            start: 'top top',
            end: '+=100%',
            scrub: true,
          },
        });
      }
    }, wrapper);

    return () => ctx.revert();
  }, []);

  return (
    // ── 200vh wrapper: gives scroll space while section stays sticky ──
    <div ref={wrapperRef} style={{ height: '200vh' }}>
      <section
        ref={sectionRef}
        className="sticky top-0 w-full h-screen min-h-[640px] max-h-[1200px] bg-naxis-brown-espresso text-cream-100 flex flex-col justify-end overflow-visible select-none"
      >
        {/* ── Full-Bleed Looping Production Video Background ── */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            poster="/apparel4.jpg"
            className="w-full h-full object-cover brightness-[0.38] contrast-[1.10]"
          >
            <source src="/media/hero-compressed-video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* ── Cinematic Dark Overlays ── */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/55 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent pointer-events-none" />

        {/* ── Main Hero Typography System ── */}
        <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 pb-10 sm:pb-14 md:pb-16">

          {/* Kicker Line */}
          <div ref={kickerRef} className="flex items-center gap-2.5 mb-2 sm:mb-3 will-change-transform">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
            <p className="font-mono text-[10px] sm:text-xs tracking-[0.3em] text-cream-300/80 uppercase font-semibold">
              PRECISION MANUFACTURING
            </p>
          </div>

          {/* ── Massive Bold Kinetic Typography ── */}
          <div className="font-poppins font-black uppercase tracking-[-0.03em] leading-[0.92] text-cream-100">

            {/* Row 1: SIX */}
            <div className="pb-1">
              <div
                ref={line1Ref}
                className="will-change-transform"
                style={{ fontSize: 'clamp(3.5rem, 11vw, 11rem)' }}
              >
                SIX
              </div>
            </div>

            {/* Row 2: Subtext Left + COUNTRIES. Right */}
            <div className="flex flex-col-reverse lg:flex-row lg:items-end justify-between gap-4 lg:gap-8 pb-1">
              {/* Subtext */}
              <div
                ref={subtextRef}
                className="lg:max-w-sm xl:max-w-md pb-2 lg:pb-3 will-change-transform normal-case tracking-normal"
              >
                <p className="font-sans text-xs sm:text-sm md:text-[14px] text-cream-200/85 font-normal leading-relaxed">
                  Offshore garment manufacturing across six countries — built with verified compliance, disciplined scale, and direct factory communication.
                </p>
              </div>

              {/* COUNTRIES. */}
              <div className="flex-1 lg:text-right">
                <div
                  ref={line2Ref}
                  className="will-change-transform inline-block"
                  style={{ fontSize: 'clamp(3.5rem, 11vw, 11rem)' }}
                >
                  COUNTRIES.
                </div>
              </div>
            </div>

            {/* Row 3: ONE STANDARD. */}
            <div>
              <div
                ref={line3Ref}
                className="flex flex-wrap items-baseline gap-x-[0.22em] will-change-transform"
                style={{ fontSize: 'clamp(3.5rem, 11vw, 11rem)' }}
              >
                <span className="text-cream-100">ONE</span>
                <span className="text-emerald-400 drop-shadow-[0_0_40px_rgba(52,211,153,0.55)]">
                  STANDARD.
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
