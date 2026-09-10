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
  const contentRef = useRef<HTMLDivElement>(null);
  const kickerRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const section = sectionRef.current;
    const video = videoRef.current;
    const content = contentRef.current;
    const kicker = kickerRef.current;
    const line1 = line1Ref.current;
    const line2 = line2Ref.current;
    const subtext = subtextRef.current;

    if (!section || !line1 || !line2) return;

    if (prefersReducedMotion) {
      gsap.set([kicker, line1, line2, subtext], { opacity: 1, y: 0, yPercent: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      // ── INITIAL HIDDEN STATE ──
      gsap.set([kicker, subtext], { autoAlpha: 0, y: 16 });
      gsap.set([line1, line2], { yPercent: 110 });

      // ── ENTRANCE ANIMATION (Yarnity masked reveal) ──
      // Words rise smoothly out of their overflow-hidden containers on page load
      const tl = gsap.timeline({ delay: 0.15 });

      tl.to(kicker, {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
      })
      .to(line1, {
        yPercent: 0,
        duration: 1.15,
        ease: 'power4.out',
      }, 0.2)
      .to(line2, {
        yPercent: 0,
        duration: 1.15,
        ease: 'power4.out',
      }, 0.35)
      .to(subtext, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      }, 0.55);

      // ── SCROLL BEHAVIOR (Yarnity-exact) ──
      // Words stay firmly assembled in their grid positions at all times.
      // Subtle vertical parallax gives cinematic depth without ever misaligning or cutting off words.
      if (content) {
        gsap.to(content, {
          yPercent: -12,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // Background video Ken Burns subtle parallax
      if (video) {
        gsap.fromTo(
          video,
          { scale: 1.05, yPercent: 0 },
          {
            yPercent: 14,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen min-h-[640px] max-h-[1200px] bg-naxis-brown-espresso text-cream-100 flex flex-col justify-end select-none overflow-hidden"
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
          className="w-full h-full object-cover brightness-[0.65] contrast-[1.08]"
        >
          <source src="/media/hero-compressed-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ── Cinematic Ambient Overlays ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent pointer-events-none" />

      {/* ── Typography & Content Container ── */}
      <div
        ref={contentRef}
        className="relative z-10 w-full max-w-[1920px] mx-auto px-5 sm:px-8 md:px-12 lg:px-14 pb-8 sm:pb-12 md:pb-14 will-change-transform"
      >
        {/* Kicker */}
        <div ref={kickerRef} className="flex items-center gap-2.5 mb-3 will-change-transform">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.3em] text-cream-300/85 uppercase font-semibold">
            PRECISION MANUFACTURING
          </p>
        </div>

        {/* ── Headline Block ── */}
        <div
          className="font-poppins font-black uppercase text-cream-100"
          style={{
            fontSize: 'clamp(3rem, 10.5vw, 10.5rem)',
            lineHeight: '0.93',
            letterSpacing: '-0.03em',
          }}
        >
          {/* Line 1: SIX COUNTRIES. */}
          <div className="overflow-hidden pb-1">
            <div ref={line1Ref} className="flex items-baseline gap-[0.18em] will-change-transform">
              <span className="flex-shrink-0">SIX</span>
              <span className="flex-shrink-0">COUNTRIES.</span>
            </div>
          </div>

          {/* Line 2: ONE STANDARD. */}
          <div className="overflow-hidden pb-1">
            <div ref={line2Ref} className="flex items-baseline gap-[0.18em] will-change-transform">
              <span className="flex-shrink-0 text-cream-100">ONE</span>
              <span
                className="flex-shrink-0 text-emerald-400"
                style={{ textShadow: '0 0 50px rgba(52,211,153,0.45)' }}
              >
                STANDARD.
              </span>
            </div>
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
