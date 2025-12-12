'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import HeroSection from '@/components/sections/home/HeroSection';
import ProgrammaSection from '@/components/sections/home/ProgrammaSection';
import TradizioneSection from '@/components/sections/home/TradizioneSection';
import IntroSequence from '@/components/sections/shared/IntroSequence';
import { Locale } from '@/i18n/config';
import { Dictionary } from '@/types/i18n';

interface HomeClientProps {
  locale: Locale;
  dict: Dictionary;
}

export default function HomeClient({ locale, dict }: HomeClientProps) {
  // Stato iniziale identico per server e client
  const [isClient, setIsClient] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [introComplete, setIntroComplete] = useState(false);

  // Dopo il mount sul client, mostra sempre l'intro
  useEffect(() => {
    setIsClient(true);

    // Precarica il video durante l'intro
    const iframe = document.createElement('iframe');
    iframe.src =
      'https://player.vimeo.com/video/753580183?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    return () => {
      if (document.body.contains(iframe)) {
        document.body.removeChild(iframe);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setTimeout(() => {
      setIntroComplete(true);
    }, 100);
  };

  // Durante SSR e prima del mount, non mostriamo nulla per evitare hydration mismatch
  if (!isClient) {
    return null;
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro && <IntroSequence onComplete={handleIntroComplete} />}
      </AnimatePresence>

      {introComplete && (
        <main className="snap-container">
          <div id="hero">
            <HeroSection dict={dict} locale={locale} />
          </div>
          <div id="tradizione">
            <TradizioneSection dict={dict} locale={locale} />
          </div>
          <div id="programma">
            <ProgrammaSection dict={dict} locale={locale} />
          </div>
        </main>
      )}
    </>
  );
}
