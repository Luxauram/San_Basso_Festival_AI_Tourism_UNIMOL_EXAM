'use client';

import ParallaxScroll from '../sections/tradition/ParallaxScroll';
import { DictAndLocaleProps } from '@/types';
import SanBassoTimeline from '../sections/tradition/SanBassoTimeline';

export default function TraditionPageComponent({
  dict,
  locale,
}: DictAndLocaleProps) {
  return (
    <main>
      {/* ======= Parallax ======= */}
      <ParallaxScroll dict={dict} locale={locale} />

      {/* ======= Contenuto scrollabile ======= */}
      <div className="bg-white-custom">
        <SanBassoTimeline dict={dict} locale={locale} />
      </div>
    </main>
  );
}
