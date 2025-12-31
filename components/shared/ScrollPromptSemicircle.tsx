'use client';

import { ScrollPromptSemicircleProps } from '@/types';
import { motion } from 'framer-motion';

export default function ScrollPromptSemicircle({
  text,
  bgColor = 'bg-white',
  textColor = 'text-gray-800',
  icon,
  iconColor = 'text-gray-800',
}: ScrollPromptSemicircleProps) {
  const defaultIcon = (
    <motion.svg
      className={iconColor}
      style={{
        width: 'clamp(20px, 3.2vw, 42px)',
        height: 'clamp(20px, 3.2vw, 42px)',
      }}
      fill="none"
      strokeWidth="2"
      stroke="currentColor"
      viewBox="0 0 24 24"
      animate={{
        y: [0, 8, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      />
    </motion.svg>
  );

  return (
    <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
      <div className="relative">
        <div
          className={`${bgColor} shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4`}
          style={{
            width: 'clamp(240px, 45vw, 750px)',
            height: 'clamp(120px, 18vw, 280px)',
            borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
            paddingTop: 'clamp(20px, 3vw, 50px)',
          }}
        >
          <span
            className={`font-medium ${textColor} uppercase tracking-wider`}
            style={{
              fontSize: 'clamp(0.75rem, 1.6vw, 1.4rem)',
            }}
          >
            {text}
          </span>

          {icon || defaultIcon}
        </div>
      </div>
    </motion.div>
  );
}
