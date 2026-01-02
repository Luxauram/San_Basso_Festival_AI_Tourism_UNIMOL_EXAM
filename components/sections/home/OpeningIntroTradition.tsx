import { DictAndLocaleProps } from '@/types';

export default function OpeningIntroTradition({
  dict,
  locale,
}: DictAndLocaleProps) {
  return (
    <div className="relative flex h-[40vh] laptop:h-[80vh] w-full items-center justify-center bg-white-custom overflow-hidden">
      {/* ======= Grid Background ======= */}
      <div
        className="absolute inset-0"
        style={{
          backgroundSize: '50px 50px',
          backgroundImage:
            'linear-gradient(to right, #e4e4e7 1px, transparent 1px), linear-gradient(to bottom, #e4e4e7 1px, transparent 1px)',
        }}
      />

      {/* ======= Radial gradient ======= */}
      <div
        className="pointer-events-none absolute inset-0 bg-white-custom"
        style={{
          maskImage:
            'radial-gradient(ellipse at center, transparent 10%, black)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, transparent 10%, black)',
        }}
      />

      {/* ======= Content ======= */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* ======= Pre-title ======= */}
        <p className="text-neutral-400 text-sm uppercase tracking-wider mb-8">
          {dict.home.tradition.pretitle}
        </p>

        {/* ======= Title ======= */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-black mb-12 leading-tight">
          {dict.home.tradition.title}
        </h1>

        {/* ======= Description ======= */}
        <p className="text-neutral-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          {dict.home.tradition.description}
        </p>
      </div>
    </div>
  );
}
