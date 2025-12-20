'use client';

import { Dictionary } from '@/types/i18n';
import { motion } from 'framer-motion';
import { Locale } from '@/i18n/config';
import PrimaryButton from '@/components/ui/buttons/PrimaryButton';
import SecondaryButton from '@/components/ui/buttons/SecondaryButton';
import ScrollPromptSemicircle from '@/components/shared/ScrollPromptSemicircle';
import { arrowDownIcon } from '@/components/ui/shared/icons/ArrowDownIcon';

interface HeroSectionProps {
  dict: Dictionary;
  locale: Locale;
}

export default function HeroSection({ dict, locale }: HeroSectionProps) {
  const contactsRoute = locale === 'it' ? '/contatti' : '/contacts';

  return (
    <section className="relative w-full h-screen overflow-hidden snap-section">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/753580183?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: '100vw',
            height: '100vh',
            minWidth: '177.77vh', // 16:9 aspect ratio
            minHeight: '56.25vw', // 16:9 aspect ratio
          }}
          frameBorder="0"
          allow="autoplay; fullscreen"
        />
      </div>

      {/* Overlay scuro per migliorare leggibilità */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      {/* Contenuto Hero */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        {/* Testo con effetto sottrai */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl md:text-9xl font-bold uppercase text-white text-center leading-tight"
          style={{ mixBlendMode: 'difference' }}
        >
          SAN BASSO
          <br />
          FESTIVAL
        </motion.h1>

        {/* Bottoni */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          <PrimaryButton href={`/${locale}${contactsRoute}`}>
            {dict.footer.cta.button}
          </PrimaryButton>
          <SecondaryButton href={`/${locale}${contactsRoute}`}>
            {dict.footer.cta.button}
          </SecondaryButton>
        </motion.div>
      </div>

      {/* ======= Scroll to Explore ======= */}
      <ScrollPromptSemicircle
        text={dict.footer.cta.button}
        bgColor="bg-white"
        textColor="text-black"
        icon={arrowDownIcon}
      />
    </section>
  );
}
