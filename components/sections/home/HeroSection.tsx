'use client';

import { motion } from 'framer-motion';
import PrimaryButton from '@/components/ui/buttons/PrimaryButton';
import SecondaryButton from '@/components/ui/buttons/SecondaryButton';
import ScrollPromptSemicircle from '@/components/shared/ScrollPromptSemicircle';
import { arrowDownIcon } from '@/components/ui/shared/icons/ArrowDownIcon';
import { DictAndLocaleProps } from '@/types';
import Image from 'next/image';
import { HERO_LOGO_IMAGE, VIMEO_CLASSIC_URL, VIMEO_PLAYER_URL } from '@/data';

export default function HeroSection({ dict, locale }: DictAndLocaleProps) {
  const contactsRoute = locale === 'it' ? '/contatti' : '/contacts';

  return (
    <section className="relative w-full h-screen overflow-hidden snap-section">
      {/* ======= Video Background ======= */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <iframe
          src={`${VIMEO_PLAYER_URL}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1`}
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

      {/* ======= Overlay leggibilità ======= */}
      <div className="absolute inset-0 bg-black/50 z-1" />

      {/* ======= Hero ======= */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        {/* ======= Logo ======= */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-[40vh] h-[40vh] sm:w-[45vh] sm:h-[45vh] md:w-[50vh] md:h-[50vh] lg:w-[55vh] lg:h-[55vh] xl:w-[60vh] xl:h-[60vh] -mt-40 sm:-mt-48 md:-mt-56 lg:-mt-64 xl:-mt-72"
          style={{ mixBlendMode: 'difference' }}
        >
          <Image
            src={HERO_LOGO_IMAGE}
            alt="Logo"
            fill
            priority
            className="object-contain"
          />
        </motion.div>

        {/* ======= Bottoni ======= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex gap-4 flex-wrap justify-center -mt-10 sm:-mt-24 md:-mt-28 lg:-mt-32 xl:-mt-36 z-10 laptop:pt-16"
        >
          <PrimaryButton href={`/${locale}${contactsRoute}`}>
            {dict.home.hero.button1}
          </PrimaryButton>
          <SecondaryButton
            href={VIMEO_CLASSIC_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {dict.home.hero.button2}
          </SecondaryButton>
        </motion.div>
      </div>

      {/* ======= Scroll to Explore ======= */}
      <ScrollPromptSemicircle
        text={dict.home.hero.scroll}
        bgColor="bg-white-custom"
        textColor="text-black-custom"
        icon={arrowDownIcon}
      />
    </section>
  );
}
