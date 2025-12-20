'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SocialNetworks from '../../ui/shared/icons/social-networks/SocialNetworks';
import Sponsors from '../../ui/shared/icons/sponsors/Sponsors';
import CountdownSection from './CountdownSection';
import { DictAndLocaleProps } from '@/types';
import { BackgroundBeams } from '../../ui/background-beams';
import { MarqueeFooter } from './MarqueeFooter';
import { LegalFooter } from './LegalFooter';

export default function FooterSection({ dict, locale }: DictAndLocaleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer
      id="footer"
      ref={ref}
      className="flex flex-col justify-between bg-neutral-950 overflow-hidden py-12 px-4 antialiased relative h-full"
    >
      {/* ======= Countdown ======= */}
      <CountdownSection dict={dict} locale={locale} />

      {/* ======= Marquee ======= */}
      <MarqueeFooter isInView={isInView} />

      {/* ======= Sponsors ======= */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.9 }}
        className="text-center mb-8"
      >
        <h3 className="text-white-custom">{dict.footer.sponsors}</h3>
        <Sponsors />
      </motion.div>

      {/* ======= Social ======= */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.1 }}
        className="text-center"
      >
        <h3 className="text-white-custom">{dict.footer.follow}</h3>
        <SocialNetworks />
      </motion.div>

      {/* ======= Copyright & Legals ======= */}
      <LegalFooter isInView={isInView} dict={dict} locale={locale} />

      <BackgroundBeams />
    </footer>
  );
}
