import { DictAndLocaleProps } from '@/types';

export default function OpeningIntroAdvices({
  dict,
  locale,
}: DictAndLocaleProps) {
  return (
    <div className="relative flex h-[40vh] w-full items-center justify-center bg-white-custom overflow-hidden">
      {/* ======= Grid ======= */}
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
          {dict.program.opening.pretitle}
        </p>

        {/* ======= Title ======= */}
        <h1 className="mb-12 text-black-custom">
          {dict.program.opening.title}
        </h1>

        {/* ======= Description ======= */}
        <p className="text-black-custom max-w-2xl mx-auto">
          {dict.program.opening.description}
        </p>
      </div>
    </div>
  );
}
