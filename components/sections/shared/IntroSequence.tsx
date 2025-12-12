'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroSequence({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [currentWord, setCurrentWord] = useState(0);
  const [showAllWords, setShowAllWords] = useState(false);
  const [showWipe, setShowWipe] = useState(false);

  const words = ['SAN', 'BASSO', 'FESTIVAL'];

  useEffect(() => {
    // Animazione delle parole che scorrono
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => {
        if (prev < words.length - 1) {
          return prev + 1;
        } else {
          clearInterval(wordInterval);
          // Mostra tutte le parole insieme
          setShowAllWords(true);
          // Dopo 1 secondo, avvia il wipe
          setTimeout(() => {
            setShowWipe(true);
            // Dopo il wipe, completa l'intro
            setTimeout(() => {
              onComplete();
            }, 1500);
          }, 1000);
          return prev;
        }
      });
    }, 1200);

    return () => clearInterval(wordInterval);
  }, [onComplete]);

  return (
    <>
      {/* Intro con parole che scorrono */}
      <motion.div
        className="fixed inset-0 z-50 bg-black flex items-center justify-center"
        exit={{ opacity: 0 }}
      >
        <div className="text-center">
          <div className="text-white text-6xl md:text-8xl font-bold uppercase">
            {!showAllWords ? (
              // Animazione scroll delle parole
              <div className="h-32 md:h-40 overflow-hidden flex items-center justify-center">
                <motion.div
                  animate={{
                    y:
                      -currentWord *
                      (typeof window !== 'undefined' && window.innerWidth < 768
                        ? 128
                        : 160),
                  }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="flex flex-col"
                >
                  {words.map((word, index) => (
                    <div
                      key={index}
                      className="h-32 md:h-40 flex items-center justify-center"
                    >
                      {word}
                    </div>
                  ))}
                </motion.div>
              </div>
            ) : (
              // Mostra tutte le parole insieme
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                {words.map((word, index) => (
                  <div key={index}>{word}</div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Effetto Wipe Rosso */}
      <AnimatePresence>
        {showWipe && (
          <motion.div
            className="fixed inset-0 z-[60] bg-red-600"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{
              duration: 0.6,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
