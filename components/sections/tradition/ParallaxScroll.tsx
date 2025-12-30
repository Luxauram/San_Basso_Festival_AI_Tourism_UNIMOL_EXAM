import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Section1 from './parallax-sections/Section1';
import Section2 from './parallax-sections/Section2';
import Section3 from './parallax-sections/Section3';
import Section4 from './parallax-sections/Section4';
import Section5 from './parallax-sections/Section5';

export default function ParallaxScroll() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [hasExited, setHasExited] = useState(false);
  const fullpageControls = useAnimation();

  useEffect(() => {
    // Se siamo usciti dal parallax, non gestiamo più gli eventi
    if (hasExited) return;

    const handleWheel = (e: WheelEvent) => {
      const direction = e.deltaY > 0 ? 'down' : 'up';

      // Se siamo all'ultima sezione e l'utente scrolla giù, esci dal parallax
      if (currentSection === 4 && direction === 'down') {
        setHasExited(true);
        return;
      }

      // Se siamo alla prima sezione e l'utente scrolla su, permetti lo scroll normale
      if (currentSection === 0 && direction === 'up') {
        return;
      }

      e.preventDefault();

      if (isScrolling) return;

      const nextSection =
        direction === 'down'
          ? Math.min(currentSection + 1, 4)
          : Math.max(currentSection - 1, 0);

      if (nextSection !== currentSection) {
        scrollToSection(nextSection);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStart(e.touches[0].clientY);
      setTouchEnd(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      setTouchEnd(e.touches[0].clientY);
    };

    const handleTouchEnd = () => {
      if (isScrolling) return;

      const swipeDistance = touchStart - touchEnd;
      const minSwipeDistance = 50;

      if (Math.abs(swipeDistance) > minSwipeDistance) {
        const direction = swipeDistance > 0 ? 'down' : 'up';

        // Se siamo all'ultima sezione e l'utente swipa giù, esci dal parallax
        if (currentSection === 4 && direction === 'down') {
          setHasExited(true);
          return;
        }

        // Se siamo alla prima sezione e l'utente swipa su, permetti lo scroll normale
        if (currentSection === 0 && direction === 'up') {
          return;
        }

        const nextSection =
          direction === 'down'
            ? Math.min(currentSection + 1, 4)
            : Math.max(currentSection - 1, 0);

        if (nextSection !== currentSection) {
          scrollToSection(nextSection);
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      let nextSection = currentSection;
      let shouldPreventDefault = false;

      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
        case ' ':
          nextSection = Math.min(currentSection + 1, 4);
          // Se siamo all'ultima sezione, esci dal parallax
          if (currentSection === 4) {
            setHasExited(true);
            return;
          }
          shouldPreventDefault = true;
          break;
        case 'ArrowUp':
        case 'PageUp':
          nextSection = Math.max(currentSection - 1, 0);
          // Non bloccare se siamo alla prima sezione
          shouldPreventDefault = currentSection > 0;
          break;
        case 'Home':
          nextSection = 0;
          shouldPreventDefault = true;
          break;
        case 'End':
          nextSection = 4;
          shouldPreventDefault = true;
          break;
      }

      if (shouldPreventDefault) {
        e.preventDefault();
      }

      if (isScrolling) return;

      if (nextSection !== currentSection) {
        scrollToSection(nextSection);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection, isScrolling, touchStart, touchEnd, hasExited]);

  const scrollToSection = async (sectionIndex: number) => {
    setIsScrolling(true);
    setCurrentSection(sectionIndex);

    await fullpageControls.start({
      y:
        -sectionIndex *
        (typeof window !== 'undefined' ? window.innerHeight : 800),
      transition: {
        duration: 1,
        ease: [0.6, 0.01, 0.05, 0.95],
      },
    });

    setTimeout(() => setIsScrolling(false), 1000);
  };

  return (
    <div
      className={`fixed inset-0 transition-opacity duration-500 z-50 ${
        hasExited ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Sfondo per coprire il contenuto sotto */}
      <div className="absolute inset-0 bg-black -z-10" />

      {/* Scroll/Arrow Section - LEFT */}
      <motion.div
        className="fixed top-1/2 -translate-y-1/2 left-4 sm:left-6 md:left-8 lg:left-12 xl:left-16 z-[100] flex flex-col items-center gap-2 sm:gap-3 md:gap-4 text-white-custom text-sm sm:text-base md:text-lg lg:text-xl font-semibold tracking-[0.3em]"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          y: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <div className="flex flex-col items-center">
          <span className="block">S</span>
          <span className="block">C</span>
          <span className="block">R</span>
          <span className="block">O</span>
          <span className="block">L</span>
          <span className="block">L</span>
        </div>
        <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 border-l-2 sm:border-l-[3px] border-b-2 sm:border-b-[3px] border-current -rotate-45"></div>
      </motion.div>

      {/* Scroll/Arrow Section - RIGHT */}
      <motion.div
        className="fixed top-1/2 -translate-y-1/2 right-4 sm:right-6 md:right-8 lg:right-12 xl:right-16 z-[100] flex flex-col items-center gap-2 sm:gap-3 md:gap-4 text-white text-sm sm:text-base md:text-lg lg:text-xl font-semibold tracking-[0.3em]"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          y: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <div className="flex flex-col items-center">
          <span className="block">S</span>
          <span className="block">C</span>
          <span className="block">R</span>
          <span className="block">O</span>
          <span className="block">L</span>
          <span className="block">L</span>
        </div>
        <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 border-l-2 sm:border-l-[3px] border-b-2 sm:border-b-[3px] border-current -rotate-45"></div>
      </motion.div>

      {/* Fullpage Container */}
      <motion.div
        animate={fullpageControls}
        initial={{ y: 0 }}
        className="isolate"
      >
        <Section1 isActive={currentSection === 0} />
        <Section2 isActive={currentSection === 1} />
        <Section3 isActive={currentSection === 2} />
        <Section4 isActive={currentSection === 3} />
        <Section5 isActive={currentSection === 4} />
      </motion.div>
    </div>
  );
}
