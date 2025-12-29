'use client';

import { useState } from 'react';
import HeroSection from '@/components/sections/home/HeroSection';
import ProgramSection from '@/components/sections/home/ProgramSection';
import TraditionSection from '@/components/sections/home/TraditionSection';
import ReviewSection from './ReviewSection';
import Preloader from './Preloader';
import { HeroParallax } from '@/components/ui/hero-parallax';
import { PARALLAX_ITEMS } from '@/data/parallax-home-items';
import { DictAndLocaleProps } from '@/types';
import OpeningIntroTradition from './OpeningIntroTradition';
import OpeningIntroProgram from './OpeningIntroProgram';

export default function HomeClient({ locale, dict }: DictAndLocaleProps) {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  return (
    <div className="relative bg-black">
      <div className={preloaderComplete ? 'block' : 'block'}>
        <div id="hero">
          <HeroSection dict={dict} locale={locale} />
        </div>
      </div>

      {!preloaderComplete && (
        <Preloader onComplete={() => setPreloaderComplete(true)} />
      )}

      {preloaderComplete && (
        <>
          <OpeningIntroTradition dict={dict} locale={locale} />
          <TraditionSection dict={dict} locale={locale} />
          <OpeningIntroProgram dict={dict} locale={locale} />
          <ProgramSection dict={dict} locale={locale} />
          <HeroParallax dict={dict} locale={locale} products={PARALLAX_ITEMS} />
          <ReviewSection dict={dict} locale={locale} />
        </>
      )}
    </div>
  );
}
