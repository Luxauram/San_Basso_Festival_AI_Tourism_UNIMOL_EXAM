'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Marquee from 'react-fast-marquee';
import { Locale } from '@/i18n/config';
import { Dictionary } from '@/types/i18n';
import SocialNetworks from '../ui/shared/icons/social-networks/SocialNetworks';
import Sponsors from '../ui/shared/icons/sponsors/Sponsors';
import CountdownSection from '../sections/home/CountdownSection';

interface FooterSectionProps {
  dict: Dictionary;
  locale: Locale;
}

export default function FooterSection({ dict, locale }: FooterSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="footer"
      ref={ref}
      className="snap-section flex flex-col justify-between bg-black text-white overflow-hidden py-12 px-4"
    >
      {/* Countdown Section */}
      <CountdownSection dict={dict} locale={locale} />

      {/* Marquee Section */}
      <div className="my-12 space-y-4 marquee-container">
        {/* Primo Marquee - Destra a Sinistra */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          <Marquee speed={80} gradient={false} direction="left">
            <span className="text-6xl md:text-8xl lg:text-9xl font-bold text-white/10 mx-8">
              TERMOLI EVENTS
            </span>
            <span className="text-6xl md:text-8xl lg:text-9xl font-bold text-white/10 mx-8">
              TERMOLI EVENTS
            </span>
            <span className="text-6xl md:text-8xl lg:text-9xl font-bold text-white/10 mx-8">
              TERMOLI EVENTS
            </span>
          </Marquee>
        </motion.div>

        {/* Testo centrale */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-xl md:text-3xl font-light py-2"
        >
          per
        </motion.div>

        {/* Secondo Marquee - Sinistra a Destra */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
        >
          <Marquee speed={80} gradient={false} direction="right">
            <span className="text-6xl md:text-8xl lg:text-9xl font-bold text-white/10 mx-8">
              SAN BASSO FESTIVAL
            </span>
            <span className="text-6xl md:text-8xl lg:text-9xl font-bold text-white/10 mx-8">
              SAN BASSO FESTIVAL
            </span>
            <span className="text-6xl md:text-8xl lg:text-9xl font-bold text-white/10 mx-8">
              SAN BASSO FESTIVAL
            </span>
          </Marquee>
        </motion.div>
      </div>

      {/* Sponsors Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.9 }}
        className="text-center mb-8"
      >
        <h3 className="text-sm md:text-base font-semibold tracking-widest mb-6 text-gray-400">
          {dict.footer.sponsors}
        </h3>
        <Sponsors />
      </motion.div>

      {/* Social Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.1 }}
        className="text-center"
      >
        <h3 className="text-sm md:text-base font-semibold tracking-widest mb-4 text-gray-400">
          {dict.footer.follow}
        </h3>
        <SocialNetworks />
      </motion.div>

      {/* Copyright e Link Legali */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.3 }}
        className="mt-12 pt-8 border-t border-white/10 text-center space-y-2"
      >
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-4">
          <a
            href={`/${locale}/disclaimer`}
            className="hover:text-white transition font-semibold text-yellow-400"
          >
            📚 {locale === 'it' ? 'Disclaimer Progetto' : 'Project Disclaimer'}
          </a>
          <span>•</span>
          <a
            href={`/${locale}/privacy-policy`}
            className="hover:text-white transition"
          >
            {dict.footer.legal.privacy}
          </a>
          <span>•</span>
          <a
            href={`/${locale}/termini-e-condizioni`}
            className="hover:text-white transition"
          >
            {dict.footer.legal.terms}
          </a>
        </div>
        <p className="text-gray-400 text-sm">
          © 2025 San Basso Events. {dict.footer.legal.rights}
        </p>
      </motion.div>
    </section>
  );
}
