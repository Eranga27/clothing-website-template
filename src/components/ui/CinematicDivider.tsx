'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EDITORIAL_EASING } from './ScrollReveal';

interface CinematicDividerProps {
  /** Path to the looping video. Defaults to the editorial clip. */
  videoSrc?: string;
  /** Poster image shown before video loads */
  poster?: string;
  /** Optional single-line caption shown bottom-center */
  caption?: string;
  /** Height of the divider — defaults to 50vh on desktop */
  heightClass?: string;
}

export const CinematicDivider: React.FC<CinematicDividerProps> = ({
  videoSrc = '/media/editorial.mp4',
  poster = '/apparel2.jpg',
  caption,
  heightClass = 'h-[42vh] md:h-[55vh]',
}) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section
      aria-hidden="true"
      className={`relative w-full ${heightClass} overflow-hidden bg-naxis-brown-espresso`}
    >
      {/* Slow Ken Burns zoom — triggered when section enters viewport */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.07 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 7, ease: EDITORIAL_EASING }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={poster}
          onLoadedData={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover brightness-[0.55] contrast-[1.08] transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* Fallback: poster shown until video loads */}
        {!videoLoaded && (
          <img
            src={poster}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.55]"
          />
        )}
      </motion.div>

      {/* Gradient overlays: vignette + top/bottom fades */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(15,10,6,0.55)_100%)] pointer-events-none" />

      {/* Optional caption */}
      {caption && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: EDITORIAL_EASING }}
          className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3"
        >
          <span className="w-5 h-[1px] bg-cream-100/40" />
          <p className="text-[10px] font-mono tracking-super-wide uppercase text-cream-300/70 whitespace-nowrap">
            {caption}
          </p>
          <span className="w-5 h-[1px] bg-cream-100/40" />
        </motion.div>
      )}
    </section>
  );
};
