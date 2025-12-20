'use client';

import { useState } from 'react';
import HeroSection from '@/components/sections/home/HeroSection';
import ProgrammaSection from '@/components/sections/home/ProgramSection';
import TraditionSection from '@/components/sections/home/TraditionSection';
import ReviewSection from './ReviewSection';
import Preloader from './Preloader';
import { HeroParallax } from '@/components/ui/hero-parallax';
import { PARALLAX_ITEMS } from '@/data/parallax-home-items';
import { DictAndLocaleProps } from '@/types';
import OpeningIntroText from './OpeningIntroText';

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
          <div id="intro-text">
            <OpeningIntroText />
          </div>
          <div id="tradizione">
            <TraditionSection dict={dict} locale={locale} />
          </div>
          <div id="programma">
            <ProgrammaSection dict={dict} locale={locale} />
          </div>
          <div id="parallax">
            <HeroParallax
              dict={dict}
              locale={locale}
              products={PARALLAX_ITEMS}
            />
          </div>
          <div id="reviews">
            <ReviewSection dict={dict} locale={locale} />
          </div>
        </>
      )}
    </div>
  );
}
