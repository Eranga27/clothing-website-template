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
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);
  const kickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const section = sectionRef.current;
    const video = videoRef.current;
    const l1 = line1Ref.current;
    const l2 = line2Ref.current;
    const l3 = line3Ref.current;
    const subtext = subtextRef.current;
    const kicker = kickerRef.current;

    if (!section || !l1 || !l2 || !l3) return;

    if (prefersReducedMotion) {
      gsap.set([l1, l2, l3, subtext, kicker], { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      // ── Initial entrance reveal on page load (Smooth slide-up from overflow mask, inspired by Yarnity) ──
      const entranceTl = gsap.timeline({
        defaults: { ease: 'power3.out', duration: 1.1 },
        delay: 0.15,
      });

      entranceTl
        .fromTo(
          [l1, l2, l3],
          { y: '105%', opacity: 0 },
          { y: '0%', opacity: 1, stagger: 0.14 }
        )
        .fromTo(
          [kicker, subtext],
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
          '-=0.6'
        );

      // ── Natural subtle parallax on scroll (NO pinning, NO duplicate hero) ──
      if (video) {
        gsap.to(video, {
          yPercent: 18,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      gsap.to([l1, l2, l3, subtext, kicker], {
        y: -35,
        opacity: 0.35,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen min-h-[640px] max-h-[1200px] bg-naxis-brown-espresso text-cream-100 flex flex-col justify-end overflow-hidden select-none"
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

      {/* ── Cinematic Dark Overlays (Subtle, High-Contrast) ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/55 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent pointer-events-none" />

      {/* ── Main Hero Typography System (Anchored to lower viewport, 1:1 with Yarnity) ── */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 pb-10 sm:pb-14 md:pb-16">
        
        {/* Subtle Kicker Line */}
        <div ref={kickerRef} className="flex items-center gap-2.5 mb-2 sm:mb-3 will-change-transform">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.3em] text-cream-300/80 uppercase font-semibold">
            PRECISION MANUFACTURING
          </p>
        </div>

        {/* ── Massive Bold Kinetic Typography ── */}
        <div className="font-poppins font-black uppercase tracking-[-0.03em] leading-[0.92] text-cream-100">
          
          {/* Row 1: SIX */}
          <div className="overflow-hidden pb-1">
            <div
              ref={line1Ref}
              className="will-change-transform"
              style={{ fontSize: 'clamp(3.5rem, 11vw, 11rem)' }}
            >
              SIX
            </div>
          </div>

          {/* Row 2: Subtext on Left + COUNTRIES. on Right (Yarnity Composition) */}
          <div className="flex flex-col-reverse lg:flex-row lg:items-end justify-between gap-4 lg:gap-8 pb-1">
            {/* Subtext: Positioned neatly on the lower-left, tucked beneath SIX */}
            <div
              ref={subtextRef}
              className="lg:max-w-sm xl:max-w-md pb-2 lg:pb-3 will-change-transform normal-case tracking-normal"
            >
              <p className="font-sans text-xs sm:text-sm md:text-[14px] text-cream-200/85 font-normal leading-relaxed">
                Offshore garment manufacturing across six countries — built with verified compliance, disciplined scale, and direct factory communication.
              </p>
            </div>

            {/* COUNTRIES. text aligned right/offset */}
            <div className="overflow-hidden flex-1 lg:text-right">
              <div
                ref={line2Ref}
                className="will-change-transform inline-block"
                style={{ fontSize: 'clamp(3.5rem, 11vw, 11rem)' }}
              >
                COUNTRIES.
              </div>
            </div>
          </div>

          {/* Row 3: ONE STANDARD. (Emerald green highlight on STANDARD) */}
          <div className="overflow-hidden">
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
  );
};
