'use client';

import ParallaxScroll from '../sections/tradition/ParallaxScroll';
import { DictAndLocaleProps } from '@/types';

export default function TraditionPageComponent({
  dict,
  locale,
}: DictAndLocaleProps) {
  return (
    <main>
      {/* Parallax */}
      <ParallaxScroll />

      {/* Contenuto normale scrollabile */}
      <div className="min-h-screen flex items-center justify-center bg-white pt-20">
        <h2 className="text-4xl">Contenuto dopo il parallax</h2>
      </div>

      <div className="min-h-screen flex items-center justify-center bg-black pt-20">
        <h2 className="text-4xl text-white">Secondo contenuto</h2>
      </div>
    </main>
  );
}
