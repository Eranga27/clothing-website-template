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
  const countriesRef = useRef<HTMLDivElement>(null);
  const oneRef = useRef<HTMLDivElement>(null);
  const standardRef = useRef<HTMLSpanElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);
  const kickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const section = sectionRef.current;
    const video = videoRef.current;
    const six = sixRef.current;
    const countries = countriesRef.current;
    const one = oneRef.current;
    const standard = standardRef.current;
    const subtext = subtextRef.current;
    const kicker = kickerRef.current;

    if (!section || !six || !countries || !one || !standard) return;

    if (prefersReducedMotion) {
      gsap.set([six, countries, one, standard, subtext, kicker], { opacity: 1, x: 0, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {

      // ── INITIAL HIDDEN STATE ──
      gsap.set([kicker, subtext], { autoAlpha: 0, y: 12 });
      gsap.set([six, countries, one, standard], { autoAlpha: 0 });

      // ── ENTRANCE ANIMATION (load-time, not scroll-linked) ──
      // Exactly like Yarnity: each word slides in from a slight offset and fades in
      // with staggered timing. Once assembled, they stay put.
      const tl = gsap.timeline({ delay: 0.1 });

      tl.to(kicker, { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power2.out' })
        // Line 1: SIX from left edge, COUNTRIES from right edge, simultaneously
        .fromTo(
          six,
          { autoAlpha: 0, x: '-8vw' },
          { autoAlpha: 1, x: 0, duration: 1.1, ease: 'power3.out' },
          0.2
        )
        .fromTo(
          countries,
          { autoAlpha: 0, x: '8vw' },
          { autoAlpha: 1, x: 0, duration: 1.1, ease: 'power3.out' },
          0.2
        )
        // Line 2: ONE from left, STANDARD from right, slightly after line 1
        .fromTo(
          one,
          { autoAlpha: 0, x: '-6vw' },
          { autoAlpha: 1, x: 0, duration: 1.1, ease: 'power3.out' },
          0.38
        )
        .fromTo(
          standard,
          { autoAlpha: 0, x: '6vw' },
          { autoAlpha: 1, x: 0, duration: 1.1, ease: 'power3.out' },
          0.38
        )
        .to(subtext, { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power2.out' }, 0.6);

      // ── SCROLL PARALLAX: subtle drift as hero exits (Yarnity-style) ──
      // Words start assembled (x:0) and drift APART as section scrolls off.
      // This creates the kinetic "dissolving" effect when scrolling down.
      // Scrolling back up re-assembles them because scrub reverses.
      //
      // Very small drift values (4–8vw) so words stay legible the whole time.
      // end: 'bottom top' = full viewport scroll distance

      gsap.to(six, {
        x: '-6vw',
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      gsap.to(countries, {
        x: '5vw',
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      gsap.to(one, {
        x: '-4vw',
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      gsap.to(standard, {
        x: '7vw',
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      // Subtext gentle drift
      gsap.to(subtext, {
        y: -15,
        autoAlpha: 0.5,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      // Video subtle parallax (Ken Burns style)
      if (video) {
        gsap.fromTo(video,
          { scale: 1.06, yPercent: 0 },
          {
            yPercent: 10,
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
    // Standard 100vh section — no overflow hidden (body already has overflow-x:hidden)
    // overflow: visible so the subtle scroll-drift doesn't get clipped
    <section
      ref={sectionRef}
      className="relative w-full h-screen min-h-[640px] max-h-[1200px] bg-naxis-brown-espresso text-cream-100 flex flex-col justify-end select-none"
      style={{ overflow: 'visible' }}
    >
      {/* ── Full-Bleed Video ── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/apparel4.jpg"
          className="w-full h-full object-cover brightness-[0.62] contrast-[1.08]"
        >
          <source src="/media/hero-compressed-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ── Cinematic gradients ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent pointer-events-none" />

      {/* ── Typography ── */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-5 sm:px-8 md:px-12 lg:px-14 pb-8 sm:pb-12 md:pb-14">

        {/* Kicker */}
        <div ref={kickerRef} className="flex items-center gap-2.5 mb-3 will-change-transform">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.3em] text-cream-300/80 uppercase font-semibold">
            PRECISION MANUFACTURING
          </p>
        </div>

        {/* ── Headline ── */}
        <div
          className="font-poppins font-black uppercase text-cream-100"
          style={{
            fontSize: 'clamp(3rem, 10.5vw, 10.5rem)',
            lineHeight: '0.93',
            letterSpacing: '-0.03em',
          }}
        >
          {/* Line 1 */}
          <div className="flex items-baseline gap-[0.18em] mb-1">
            <div ref={sixRef} className="will-change-transform flex-shrink-0">SIX</div>
            <div ref={countriesRef} className="will-change-transform flex-shrink-0">COUNTRIES.</div>
          </div>

          {/* Line 2 */}
          <div className="flex items-baseline gap-[0.18em]">
            <div ref={oneRef} className="will-change-transform flex-shrink-0 text-cream-100">ONE</div>
            <span
              ref={standardRef}
              className="will-change-transform flex-shrink-0 text-emerald-400"
              style={{ textShadow: '0 0 60px rgba(52,211,153,0.4)' }}
            >
              STANDARD.
            </span>
          </div>
        </div>

        {/* Subtext */}
        <div ref={subtextRef} className="mt-5 will-change-transform max-w-xs sm:max-w-sm">
          <p className="font-sans text-xs sm:text-sm text-cream-200/75 font-normal leading-relaxed normal-case tracking-normal">
            Offshore garment manufacturing across six countries — built with verified compliance, disciplined scale, and direct factory communication.
          </p>
        </div>

      </div>
    </section>
  );
};
