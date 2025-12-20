'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import PrimaryButton from '@/components/ui/buttons/PrimaryButton';
import { DictAndLocaleProps, TimeLeftProps } from '@/types';
import { BackgroundBeams } from '@/components/ui/background-beams';

export default function CountdownSection({ dict, locale }: DictAndLocaleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const contactsRoute = locale === 'it' ? '/contatti' : '/contacts';

  const [timeLeft, setTimeLeft] = useState<TimeLeftProps>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeftProps => {
      const now = new Date();
      const currentYear = now.getFullYear();

      // Target date: 3 agosto
      let targetDate = new Date(currentYear, 7, 3, 0, 0, 0);

      // Se la data è già passata quest'anno, usa l'anno prossimo
      if (now > targetDate) {
        targetDate = new Date(currentYear + 1, 7, 3, 0, 0, 0);
      }

      const difference = targetDate.getTime() - now.getTime();

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    // Aggiorna ogni secondo
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: locale === 'it' ? 'Giorni' : 'Days' },
    { value: timeLeft.hours, label: locale === 'it' ? 'Ore' : 'Hours' },
    { value: timeLeft.minutes, label: locale === 'it' ? 'Minuti' : 'Minutes' },
    { value: timeLeft.seconds, label: locale === 'it' ? 'Secondi' : 'Seconds' },
  ];

  return (
    <section
      ref={ref}
      className="snap-section relative flex items-center justify-center text-white py-20 px-4 overflow-hidden"
    >
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-transparent to-transparent" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative text-center max-w-5xl mx-auto z-10"
      >
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-16 leading-tight">
          {dict.footer.cta.title}
        </h2>

        {/* Countdown con layout dinamico */}
        <div className="mb-16">
          {/* Mobile: layout a 2 righe */}
          <div className="block sm:hidden">
            {/* Giorni - riga superiore */}
            <div className="flex justify-center mb-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                  ease: 'easeOut',
                }}
                className="flex flex-col items-center"
              >
                <div className="relative">
                  <motion.div
                    animate={{
                      opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="absolute inset-0 bg-gradient-radial from-blue-500/30 via-purple-500/20 to-transparent blur-2xl scale-150"
                  />
                  <motion.div
                    key={timeLeft.days}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative text-5xl font-bold bg-linear-to-br from-white via-blue-100 to-purple-200 bg-clip-text text-transparent tabular-nums"
                  >
                    {String(timeLeft.days).padStart(2, '0')}
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.4 }}
                  className="text-xs uppercase tracking-widest text-gray-400 font-medium mt-2"
                >
                  {timeUnits[0].label}
                </motion.div>
              </motion.div>
            </div>

            {/* Ore, Minuti, Secondi - riga inferiore */}
            <div className="flex items-center justify-center gap-3">
              {timeUnits.slice(1).map((unit, index) => (
                <div key={unit.label} className="flex items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + index * 0.1,
                      ease: 'easeOut',
                    }}
                    className="flex flex-col items-center"
                  >
                    <div className="relative">
                      <motion.div
                        animate={{
                          opacity: [0.4, 0.7, 0.4],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: (index + 1) * 0.3,
                        }}
                        className="absolute inset-0 bg-gradient-radial from-blue-500/30 via-purple-500/20 to-transparent blur-2xl scale-150"
                      />
                      <motion.div
                        key={unit.value}
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="relative text-4xl font-bold bg-linear-to-br from-white via-blue-100 to-purple-200 bg-clip-text text-transparent tabular-nums"
                      >
                        {String(unit.value).padStart(2, '0')}
                      </motion.div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="text-xs uppercase tracking-widest text-gray-400 font-medium mt-2 whitespace-nowrap"
                    >
                      {unit.label}
                    </motion.div>
                  </motion.div>

                  {index < 2 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: 0.4 + index * 0.1,
                      }}
                      className="text-3xl font-light text-gray-600 mx-2 self-start mt-1"
                    >
                      :
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop/Tablet: tutti in una riga */}
          <div className="hidden sm:flex items-center justify-center gap-3 md:gap-6">
            {timeUnits.map((unit, index) => (
              <div key={unit.label} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.1,
                    ease: 'easeOut',
                  }}
                  className="flex flex-col items-center"
                >
                  <div className="relative">
                    <motion.div
                      animate={{
                        opacity: [0.4, 0.7, 0.4],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                      className="absolute inset-0 bg-gradient-radial from-blue-500/30 via-purple-500/20 to-transparent blur-2xl scale-150"
                    />
                    <motion.div
                      key={unit.value}
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-linear-to-br from-white via-blue-100 to-purple-200 bg-clip-text text-transparent tabular-nums"
                    >
                      {String(unit.value).padStart(2, '0')}
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-xs md:text-sm uppercase tracking-widest text-gray-400 font-medium mt-2 whitespace-nowrap"
                  >
                    {unit.label}
                  </motion.div>
                </motion.div>

                {index < timeUnits.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + index * 0.1,
                    }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-gray-600 mx-2 md:mx-4 self-start mt-1"
                  >
                    :
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <PrimaryButton href={`/${locale}${contactsRoute}`}>
            {dict.footer.cta.button}
          </PrimaryButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
