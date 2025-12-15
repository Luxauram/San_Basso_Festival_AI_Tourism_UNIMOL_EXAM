'use client';

import { useState } from 'react';
import HeroSection from '@/components/sections/home/HeroSection';
import ProgrammaSection from '@/components/sections/home/ProgramSection';
import TradizioneSection from '@/components/sections/home/TraditionSection';
import { Locale } from '@/i18n/config';
import { Dictionary } from '@/types/i18n';
import ReviewSection from './ReviewSection';
import Preloader from './Preloader';

interface HomeClientProps {
  locale: Locale;
  dict: Dictionary;
}

export default function HomeClient({ locale, dict }: HomeClientProps) {
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
          <div id="tradizione">
            <TradizioneSection dict={dict} locale={locale} />
          </div>
          <div id="programma">
            <ProgrammaSection dict={dict} locale={locale} />
          </div>
          <div id="reviews">
            <ReviewSection dict={dict} locale={locale} />
          </div>
        </>
      )}
    </div>
  );
}
