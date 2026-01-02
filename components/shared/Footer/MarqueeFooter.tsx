'use client';

import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

type MarqueeFooterProps = {
  isInView: boolean;
};

export function MarqueeFooter({ isInView }: MarqueeFooterProps) {
  const marqueeTextClass =
    'text-6xl md:text-8xl lg:text-9xl font-bold text-white/70 mx-8';

  return (
    <div className="my-12 space-y-4 marquee-container min-h-62.5 md:min-h-87.5 lg:min-h-112.5 laptop:min-h-100 overflow-hidden">
      {/* ======= Marquee Termoli Events ======= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3 }}
        className="pointer-events-none"
      >
        <Marquee speed={80} gradient={false} direction="left">
          <span className={marqueeTextClass}>TERMOLI EVENTS</span>
          <span className={marqueeTextClass}>TERMOLI EVENTS</span>
          <span className={marqueeTextClass}>TERMOLI EVENTS</span>
        </Marquee>
      </motion.div>

      {/* ======= Linea ======= */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
        transition={{ delay: 0.5, duration: 0.8, ease: [0.6, 0, 0.4, 1] }}
        className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-2/5 max-w-2xl h-px bg-linear-to-r from-transparent via-white/40 to-transparent mx-auto"
      />

      {/* ======= Marquee San Basso Festival ======= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.7 }}
        className="pointer-events-none"
      >
        <Marquee speed={80} gradient={false} direction="right">
          <span className={marqueeTextClass}>SAN BASSO FESTIVAL</span>
          <span className={marqueeTextClass}>SAN BASSO FESTIVAL</span>
          <span className={marqueeTextClass}>SAN BASSO FESTIVAL</span>
        </Marquee>
      </motion.div>
    </div>
  );
}
