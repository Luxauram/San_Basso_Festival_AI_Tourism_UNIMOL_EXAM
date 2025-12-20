export default function OpeningIntroText() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-white overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundSize: '40px 40px',
          backgroundImage:
            'linear-gradient(to right, #e4e4e7 1px, transparent 1px), linear-gradient(to bottom, #e4e4e7 1px, transparent 1px)',
        }}
      />

      {/* Radial gradient overlay for faded effect */}
      <div
        className="pointer-events-none absolute inset-0 bg-white"
        style={{
          maskImage:
            'radial-gradient(ellipse at center, transparent 20%, black)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, transparent 20%, black)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Pre-title */}
        <p className="text-neutral-400 text-sm uppercase tracking-wider mb-8">
          About Terminal
        </p>

        {/* Main Title */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-black mb-12 leading-tight">
          A new industry standard in the yard
        </h1>

        {/* Description */}
        <p className="text-neutral-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Terminal is a different kind of logistics technology company. We exist
          to create a new industry standard in yard operations by completely
          rethinking what that yard of future will be - from fragmented
          bottleneck into a scalable, strategic advantage.
        </p>
      </div>
    </div>
  );
}
