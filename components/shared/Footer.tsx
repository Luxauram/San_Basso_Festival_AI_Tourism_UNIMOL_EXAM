'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

import Marquee from 'react-fast-marquee';
import { Locale } from '@/i18n/config';
import { Dictionary } from '@/types/i18n';
import PrimaryButton from '../ui/buttons/PrimaryButton';
import FacebookIcon from '../ui/shared/icons/social-networks/FacebookIcon';
import InstagramIcon from '../ui/shared/icons/social-networks/InstagramIcon';
import XIcon from '../ui/shared/icons/social-networks/XIcon';
import TermoliSponsor from '../ui/shared/icons/sponsors/TermoliSponsor';
import MoliseSponsor from '../ui/shared/icons/sponsors/MoliseSponsor';
import UnimolSponsor from '../ui/shared/icons/sponsors/UnimolSponsor';
import CapracottaSponsor from '../ui/shared/icons/sponsors/CapracottaSponsor';
import HogwartsSponsor from '../ui/shared/icons/sponsors/HogwartsSponsor';

interface FooterSectionProps {
  dict: Dictionary;
  locale: Locale;
}

export default function FooterSection({ dict, locale }: FooterSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const sponsors = [
    { name: 'Termoli', icon: <TermoliSponsor /> },
    { name: 'Molise', icon: <MoliseSponsor /> },
    { name: 'Unimol', icon: <UnimolSponsor /> },
    { name: 'Capracotta', icon: <CapracottaSponsor /> },
    { name: 'Hogwarts', icon: <HogwartsSponsor /> },
  ];

  const contactsRoute = locale === 'it' ? '/contatti' : '/contacts';

  return (
    <section
      id="footer"
      ref={ref}
      className="snap-section flex flex-col justify-between bg-black text-white overflow-hidden py-12 px-4"
    >
      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto mb-8"
      >
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
          {dict.footer.cta.title}
        </h2>
        <PrimaryButton href={`/${locale}${contactsRoute}`}>
          {dict.footer.cta.button}
        </PrimaryButton>
      </motion.div>

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
        <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="w-16 h-16 md:w-20 md:h-20  rounded-lg flex items-center justify-center text-3xl md:text-4xl  transition"
            >
              {sponsor.icon}
            </motion.div>
          ))}
        </div>
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
        <div className="flex justify-center items-center gap-4">
          <motion.a
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.95 }}
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition"
          >
            <XIcon />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.95 }}
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition"
          >
            <FacebookIcon />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.95 }}
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition"
          >
            <InstagramIcon />
          </motion.a>
        </div>
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
