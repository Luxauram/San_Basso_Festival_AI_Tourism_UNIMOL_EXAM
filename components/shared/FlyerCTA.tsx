'use client';

import { SAN_BASSO_FLYER } from '@/data';
import { DictAndLocaleProps } from '@/types';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function FlyerCTA({ dict, locale }: DictAndLocaleProps) {
  const [isHovered, setIsHovered] = useState(false);

  // ======= Chiudi ticket =======
  useEffect(() => {
    const handleInteraction = () => {
      if (isHovered) {
        setIsHovered(false);
      }
    };

    window.addEventListener('scroll', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);

    return () => {
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, [isHovered]);

  return (
    <div className="relative h-16 sm:h-20 w-40 sm:w-48 md:w-56 overflow-visible">
      <motion.a
        href={SAN_BASSO_FLYER}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        className="relative block cursor-pointer"
        animate={{
          y: isHovered ? 40 : 0,
        }}
        transition={{
          duration: 0.5,
          ease: [0.34, 1.56, 0.64, 1],
        }}
        whileTap={{ scale: 0.98 }}
      >
        {/* ======= Linguetta ======= */}
        <div className="absolute -top-20 sm:-top-24 left-0 right-0 h-28 sm:h-32 bg-linear-to-b from-[#e0a229] via-[#d68e0d] to-[#e0a229] border-x-2 border-t-2 border-black rounded-t-lg sm:rounded-t-xl">
          {/*  ======= Decorazione Superiori ======= */}
          <div className="absolute top-2 left-0 right-0 flex justify-between px-3 sm:px-4">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full border border-black/20"
              />
            ))}
          </div>

          {/* ======= Texture noise overlay ======= */}
          <div
            className="absolute inset-0 opacity-10 mix-blend-overlay rounded-t-lg sm:rounded-t-xl"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* ======= Main Background ======= */}
        <motion.div
          className="relative bg-linear-to-b from-[#e0a229] via-[#d68e0d] to-[#e0a229] overflow-hidden border-2 border-black w-40 sm:w-48 md:w-56 h-16 sm:h-20 rounded-b-lg sm:rounded-b-xl"
          animate={{
            boxShadow: isHovered
              ? '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)'
              : '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
          }}
          transition={{ duration: 0.3 }}
        >
          {/* ======= Stelline ======= */}
          <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex gap-1 sm:gap-1.5">
            <span className="text-[8px] sm:text-[10px] text-black/60">★</span>
            <span className="text-[8px] sm:text-[10px] text-black/60">✦</span>
          </div>
          <div className="absolute top-2 sm:top-3 right-2 sm:right-3 flex gap-1 sm:gap-1.5">
            <span className="text-[8px] sm:text-[10px] text-black/60">✦</span>
            <span className="text-[8px] sm:text-[10px] text-black/60">★</span>
          </div>

          {/* ======= Testo ======= */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              className="font-black text-black text-[10px] sm:text-xs uppercase tracking-wider text-center px-3 sm:px-4"
              animate={{
                letterSpacing: isHovered ? '0.15em' : '0.1em',
              }}
              transition={{ duration: 0.3 }}
            >
              {dict.nav.flyer}
            </motion.span>
          </div>

          {/* ======= Buchi laterali ======= */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full -ml-2 sm:-ml-2.5 border-2 border-black shadow-inner" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full -mr-2 sm:-mr-2.5 border-2 border-black shadow-inner" />

          {/* ======= Linea tratteggiata ======= */}
          <div className="absolute left-1/2 -translate-x-1/2 top-2 bottom-2 border-l border-dashed border-black/20" />

          {/* ======= Texture noise overlay ======= */}
          <div
            className="absolute inset-0 opacity-10 mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
            }}
          />

          {/* ======= Freccia Down ======= */}
          <motion.div
            className={`absolute bottom-0.5 sm:bottom-1 left-1/2 -translate-x-1/2 ${
              !isHovered ? 'animate-pulse' : ''
            }`}
            animate={{
              y: isHovered ? -2 : 0,
              scale: isHovered ? 1.2 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <svg
              width="14"
              height="9"
              viewBox="0 0 16 10"
              fill="none"
              className="sm:w-4 sm:h-2.5"
            >
              <path
                d="M8 10L1.0718 0.25L14.9282 0.25L8 10Z"
                fill="black"
                fillOpacity="0.7"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.a>
    </div>
  );
}
