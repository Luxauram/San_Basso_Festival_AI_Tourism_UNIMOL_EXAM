'use client';

import { useEffect, useState } from 'react';
import { motion, cubicBezier } from 'framer-motion';

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const sequence = async () => {
      // Step 1: Show "Termoli Events" subito
      await new Promise((resolve) => setTimeout(resolve, 300));
      setStep(1);

      // Step 2: Split in mezzo e "Termoli Events" scompare
      await new Promise((resolve) => setTimeout(resolve, 2200));
      setStep(2);

      // Step 3: Mostra "San Basso" e "Festival"
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStep(3);

      // Step 4: Apertura completa dello schermo
      await new Promise((resolve) => setTimeout(resolve, 2400));
      setStep(4);

      // Step 5: Rimuovi completamente il preloader
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setStep(5);

      onComplete?.();
    };

    sequence();
  }, [onComplete]);

  const customEase = cubicBezier(0.65, 0, 0.35, 1);
  const introText = 'Termoli Events';

  return (
    <motion.div
      className="fixed inset-0 z-[10000]"
      initial={{ opacity: 1, pointerEvents: 'auto' }}
      animate={{
        opacity: step >= 5 ? 0 : 1,
        pointerEvents: step >= 5 ? 'none' : 'auto',
      }}
      transition={{ duration: 0.5 }}
    >
      {/* Layer principale - schermo nero superiore */}
      <motion.div
        className="fixed inset-0 bg-[#0a0a0a] flex items-center justify-center"
        initial={{ clipPath: 'inset(0% 0% 0% 0%)' }}
        animate={{
          clipPath:
            step < 2
              ? 'inset(0% 0% 0% 0%)'
              : step < 4
              ? 'inset(0% 0% 52% 0%)'
              : 'inset(0% 0% 100% 0%)',
        }}
        transition={{
          duration: step >= 4 ? 2 : 1.2,
          ease: customEase,
        }}
      >
        {/* "Termoli Events" al centro assoluto */}
        <motion.div
          className="text-white uppercase font-semibold text-center absolute px-4"
          initial={{ opacity: 0 }}
          animate={{
            opacity: step >= 1 && step < 2 ? 1 : 0,
          }}
          transition={{ duration: 1, ease: customEase }}
        >
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none block">
            {introText.split('').map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: step >= 1 && step < 2 ? 1 : 0,
                  y: step >= 1 && step < 2 ? 0 : 30,
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.05,
                  ease: customEase,
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </span>
        </motion.div>
      </motion.div>

      {/* Layer inferiore - schermo nero che sale dal basso */}
      <motion.div
        className="fixed inset-0 bg-[#0a0a0a] flex items-center justify-center"
        initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
        animate={{
          clipPath:
            step < 2
              ? 'inset(100% 0% 0% 0%)'
              : step < 4
              ? 'inset(48% 0% 0% 0%)'
              : 'inset(100% 0% 0% 0%)',
        }}
        transition={{
          duration: step >= 4 ? 2 : 1.2,
          ease: customEase,
        }}
      />

      {/* "San Basso" - Container separato che segue il layer superiore */}
      <motion.div
        className="fixed top-0 left-0 right-0 overflow-hidden pointer-events-none"
        initial={{ height: '100vh' }}
        animate={{
          height: step < 2 ? '100vh' : step < 4 ? '48vh' : '0vh',
        }}
        transition={{
          duration: step >= 4 ? 2 : 1.2,
          ease: customEase,
        }}
      >
        <motion.div
          className="absolute bottom-4 sm:bottom-6 md:bottom-8 text-white uppercase font-black text-center w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: step >= 3 ? 1 : 0,
            y: step >= 3 ? 0 : 40,
          }}
          transition={{
            duration: 1.2,
            ease: customEase,
          }}
        >
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            San Basso
          </span>
        </motion.div>
      </motion.div>

      {/* "Festival" - Container separato che segue il layer inferiore */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 overflow-hidden pointer-events-none"
        initial={{ height: '0vh' }}
        animate={{
          height: step < 2 ? '0vh' : step < 4 ? '52vh' : '0vh',
        }}
        transition={{
          duration: step >= 4 ? 2 : 1.2,
          ease: customEase,
        }}
      >
        <motion.div
          className="absolute top-4 sm:top-6 md:top-8 text-white uppercase font-black text-center w-full"
          initial={{ opacity: 0, y: -40 }}
          animate={{
            opacity: step >= 3 ? 1 : 0,
            y: step >= 3 ? 0 : -40,
          }}
          transition={{
            duration: 1.2,
            ease: customEase,
          }}
        >
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Festival
          </span>
        </motion.div>
      </motion.div>
      {/* Video/Contenuto sotto - fade in graduale che inizia prima */}
      <motion.div
        className="fixed inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: step >= 4 ? 1 : step >= 3 ? 0.2 : 0 }}
        transition={{ duration: 2.5, ease: customEase }}
      >
        {/* Il video apparirà qui dal parent */}
      </motion.div>
    </motion.div>
  );
}
