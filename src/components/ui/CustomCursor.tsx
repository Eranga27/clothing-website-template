'use client';

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

/**
 * CustomCursor — Yarnity-style magnetic cursor with NAXIS gold palette.
 *
 * Two layers:
 *   1. Small dot (10px) — snaps to cursor position instantly
 *   2. Larger ring (42px) — lags behind with smooth lerp inertia
 *
 * Automatically expands on interactive elements (links, buttons).
 * Disabled on touch/mobile devices with coarse pointers.
 */
export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Hide default cursor globally on fine pointer devices
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
      if (!visible) setVisible(true);

      // Dot snaps quickly
      gsap.to(dot, {
        x: mouseX,
        y: mouseY,
        duration: 0.05,
        ease: 'power2.out',
      });
    };

    const onMouseEnter = () => setVisible(true);
    const onMouseLeave = () => setVisible(false);

    // Smooth inertia lag for outer ring
    const ticker = gsap.ticker.add(() => {
      ringX += (mouseX - ringX) * 0.14;
      ringY += (mouseY - ringY) * 0.14;
      gsap.set(ring, { x: ringX, y: ringY });
    });

    // Delegation-based hover effect for all clickable items
    const onMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a, button, [role="button"], input, select, textarea');
      if (target) {
        gsap.to(ring, { scale: 1.6, borderColor: 'rgba(184, 145, 47, 0.9)', duration: 0.25, ease: 'power2.out' });
        gsap.to(dot, { scale: 0.5, duration: 0.25 });
      } else {
        gsap.to(ring, { scale: 1, borderColor: 'rgba(184, 145, 47, 0.65)', duration: 0.25, ease: 'power2.out' });
        gsap.to(dot, { scale: 1, duration: 0.25 });
      }
    };

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseover', onMouseOver, { passive: true });

    return () => {
      document.body.style.cursor = '';
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', onMouseOver);
      gsap.ticker.remove(ticker);
    };
  }, [visible]);

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
