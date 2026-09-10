'use client';

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

/**
 * CustomCursor — Yarnity-style magnetic cursor with NAXIS gold/brown palette.
 *
 * Two layers:
 *   1. Small dot (12px) — snaps to cursor position exactly
 *   2. Larger ring (44px) — lags behind with inertia for premium feel
 *
 * Changes to a gold-filled "Explore" label when hovering over the hero video.
 */
export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Hide default cursor globally
    document.body.style.cursor = 'none';

    // Initial position off-screen
    gsap.set([dot, ring], { x: -100, y: -100 });

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Dot snaps instantly
      gsap.to(dot, {
        x: mouseX,
        y: mouseY,
        duration: 0.06,
        ease: 'power2.out',
      });
    };

    const onMouseEnter = () => setVisible(true);
    const onMouseLeave = () => setVisible(false);

    // Ring lags behind (inertia effect)
    const ticker = gsap.ticker.add(() => {
      // Smooth lerp for ring
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      gsap.set(ring, { x: ringX, y: ringY });
    });

    // Hover states: scale ring up on links/buttons
    const addHoverEffect = (el: Element) => {
      el.addEventListener('mouseenter', () => {
        gsap.to(ring, { scale: 1.7, duration: 0.3, ease: 'power2.out' });
        gsap.to(dot, { scale: 0.4, duration: 0.3 });
      });
      el.addEventListener('mouseleave', () => {
        gsap.to(ring, { scale: 1, duration: 0.3, ease: 'power2.out' });
        gsap.to(dot, { scale: 1, duration: 0.3 });
      });
    };

    // Apply hover effect to interactive elements
    const interactives = document.querySelectorAll('a, button, [role="button"]');
    interactives.forEach(addHoverEffect);

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      document.body.style.cursor = '';
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      gsap.ticker.remove(ticker);
    };
  }, []);

  return (
    <>
      {/* Small dot — snaps to cursor */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 z-[9999] pointer-events-none transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          width: 10,
          height: 10,
          borderRadius: '50%',
          backgroundColor: '#B8912F', // naxis-gold
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
        }}
      />

      {/* Outer ring — lags behind with inertia */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 z-[9998] pointer-events-none transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          width: 42,
          height: 42,
          borderRadius: '50%',
          border: '1.5px solid rgba(184, 145, 47, 0.65)', // naxis-gold semi-transparent
          backgroundColor: 'transparent',
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
        }}
      />
    </>
  );
};
