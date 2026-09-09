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
  const sixRef = useRef<HTMLDivElement>(null);
  const countriesRef = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);
  const kickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const wrapper = wrapperRef.current;
    const section = sectionRef.current;
    const video = videoRef.current;
    const six = sixRef.current;
    const countries = countriesRef.current;
    const l3 = line3Ref.current;
    const subtext = subtextRef.current;
    const kicker = kickerRef.current;

    if (!wrapper || !section || !six || !countries || !l3) return;

    if (prefersReducedMotion) {
      gsap.set([six, countries, l3, subtext, kicker], { opacity: 1, x: 0, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      // ── INITIAL STATE: words hidden, in their final aligned positions ──
      gsap.set([six, countries, l3, subtext, kicker], { opacity: 0 });

      // ── ENTRANCE: fade in cleanly on load ──
      const entranceTl = gsap.timeline({
        defaults: { ease: 'power2.out' },
        delay: 0.1,
      });

      entranceTl
        .to(kicker, { opacity: 1, duration: 0.6 })
        .to(six, { opacity: 1, duration: 0.8 }, '-=0.3')
        .to(countries, { opacity: 1, duration: 0.8 }, '-=0.6')
        .to(l3, { opacity: 1, duration: 0.8 }, '-=0.6')
        .to(subtext, { opacity: 1, duration: 0.7 }, '-=0.5');

      // ── CORE KINETIC EFFECT ──
      // SIX starts LEFT, COUNTRIES starts RIGHT.
      // Scroll DOWN → SIX moves RIGHT, COUNTRIES moves LEFT → they converge.
      // Scroll UP → they separate back to original positions.
      //
      // How it works:
      //   At scroll progress = 0 (top): SIX at x=0 (left), COUNTRIES at x=0 (right, via text-align)
      //   At scroll progress = 1 (end): SIX shifts right by ~20vw, COUNTRIES shifts left by ~20vw
      //   They meet roughly in the center of the row.
      //
      // scrub: 2 = smooth, medium-paced response to scroll (not instant)

      const st = ScrollTrigger.create({
        trigger: wrapper,
        start: 'top top',
        end: '+=100%',
        scrub: 2,   // medium-paced (higher = slower/smoother)
        onUpdate: (self) => {
          const p = self.progress;

          // SIX: shifts rightward as scroll increases (toward center)
          gsap.set(six, { x: `${p * 20}vw` });

          // COUNTRIES.: shifts leftward as scroll increases (toward center)
          // Since it's right-aligned, negative x pulls it leftward = toward center
          gsap.set(countries, { x: `${-p * 20}vw` });

          // ONE STANDARD.: subtle upward drift only — stays readable
          gsap.set(l3, { y: p * -10 });

          // Subtext + kicker: gentle fade as converge completes
          gsap.set([subtext, kicker], { opacity: Math.max(0.3, 1 - p * 0.6) });
        },
      });

      // ── Video subtle parallax ──
      if (video) {
        gsap.to(video, {
          yPercent: 10,
          ease: 'none',
          scrollTrigger: {
            trigger: wrapper,
            start: 'top top',
            end: '+=100%',
            scrub: true,
          },
        });
      }

      return () => st.kill();
    }, wrapper);

    return () => ctx.revert();
  }, []);

  return (
    // 200vh wrapper: hero stays sticky for 100vh of scroll room
    <div ref={wrapperRef} style={{ height: '200vh' }}>
      <section
        ref={sectionRef}
        className="sticky top-0 w-full h-screen min-h-[640px] max-h-[1200px] bg-naxis-brown-espresso text-cream-100 flex flex-col justify-end overflow-hidden select-none"
      >
        {/* ── Full-Bleed Video Background (brighter) ── */}
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

        {/* ── Overlays: lighter than before to let video show ── */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent pointer-events-none" />

        {/* ── Hero Typography ── */}
        <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 pb-10 sm:pb-14 md:pb-16">

          {/* Kicker */}
          <div ref={kickerRef} className="flex items-center gap-2.5 mb-2 sm:mb-3 will-change-transform">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
            <p className="font-mono text-[10px] sm:text-xs tracking-[0.3em] text-cream-300/80 uppercase font-semibold">
              PRECISION MANUFACTURING
            </p>
          </div>

          {/* ── Kinetic Typography Block ── */}
          <div className="font-poppins font-black uppercase tracking-[-0.03em] leading-[0.92] text-cream-100">

            {/* Row 1+2: SIX and COUNTRIES. on the same visual row — they converge on scroll */}
            <div className="flex items-baseline justify-between w-full overflow-visible pb-2">
              {/* SIX — left side, moves RIGHT on scroll */}
              <div
                ref={sixRef}
                className="will-change-transform flex-shrink-0"
                style={{ fontSize: 'clamp(3.5rem, 11vw, 11rem)' }}
              >
                SIX
              </div>

              {/* COUNTRIES. — right side, moves LEFT on scroll */}
              <div
                ref={countriesRef}
                className="will-change-transform flex-shrink-0 text-right"
                style={{ fontSize: 'clamp(3.5rem, 11vw, 11rem)' }}
              >
                COUNTRIES.
              </div>
            </div>

            {/* Row 3: ONE STANDARD. */}
            <div
              ref={line3Ref}
              className="flex flex-wrap items-baseline gap-x-[0.22em] will-change-transform pb-1"
              style={{ fontSize: 'clamp(3.5rem, 11vw, 11rem)' }}
            >
              <span className="text-cream-100">ONE</span>
              <span className="text-emerald-400 drop-shadow-[0_0_40px_rgba(52,211,153,0.55)]">
                STANDARD.
              </span>
            </div>

            {/* Subtext */}
            <div
              ref={subtextRef}
              className="mt-4 will-change-transform normal-case tracking-normal max-w-sm"
            >
              <p className="font-sans text-xs sm:text-sm text-cream-200/80 font-normal leading-relaxed">
                Offshore garment manufacturing across six countries — built with verified compliance, disciplined scale, and direct factory communication.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
