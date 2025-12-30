'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { DictAndLocaleProps } from '@/types';
import SecondaryButton from '@/components/ui/buttons/SecondaryButton';
import { PROGRAM_HOME_IMAGE_1, PROGRAM_HOME_IMAGE_2 } from '@/data';

export default function ProgramSection({ dict, locale }: DictAndLocaleProps) {
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section3InView = useInView(section3Ref, { once: true, amount: 0.3 });
  const section4InView = useInView(section4Ref, { once: true, amount: 0.3 });
  const contactsRoute = locale === 'it' ? '/contatti' : '/contacts';

  return (
    <div className="w-full bg-white-custom">
      {/* Sezione 1: Immagine prima su mobile, testo dopo */}
      <section
        ref={section3Ref}
        className="w-full flex items-center px-6 md:px-12 lg:px-20 py-20"
      >
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Immagine con maschera - prima su mobile */}
          <motion.div
            className="flex-1 w-full order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={section3InView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <motion.div
              className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden relative"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)',
              }}
              whileHover={{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%)',
                transition: { duration: 0.5 },
              }}
            >
              <motion.img
                src={PROGRAM_HOME_IMAGE_1}
                alt="Logistics"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          </motion.div>

          {/* Testo - secondo su mobile */}
          <motion.div
            className="flex-1 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={section3InView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="mb-4">
              <span className="text-sm text-gray-400 uppercase tracking-wider">
                {dict.home.program.pretitle}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-black-custom">
              {dict.home.program.titlepic1}
            </h2>
            <div className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {section3InView && (
                <TextGenerateEffect
                  words={dict.home.program.descriptionpic1}
                  duration={0.3}
                  staggerDelay={0.05}
                />
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sezione 2: Immagine prima su mobile, testo dopo */}
      <section
        ref={section4Ref}
        className="w-full flex items-center px-6 md:px-12 lg:px-20 py-20 bg-white-custom"
      >
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Immagine con maschera - prima su mobile */}
          <motion.div
            className="flex-1 w-full order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={section4InView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <motion.div
              className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden relative"
              style={{
                clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%, 0 15%)',
              }}
              whileHover={{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0)',
                transition: { duration: 0.5 },
              }}
            >
              <motion.img
                src={PROGRAM_HOME_IMAGE_2}
                alt="Technology"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          </motion.div>

          {/* Testo - secondo su mobile */}
          <motion.div
            className="flex-1 order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={section4InView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="mb-4">
              <span className="text-sm text-gray-400 uppercase tracking-wider">
                {dict.home.program.pretitle}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-black-custom">
              {dict.home.program.titlepic2}
            </h2>
            <div className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {section4InView && (
                <TextGenerateEffect
                  words={dict.home.program.descriptionpic2}
                  duration={0.3}
                  staggerDelay={0.05}
                />
              )}
            </div>
            <motion.div
              className="mt-8 flex md:justify-end justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={section4InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <SecondaryButton href={`/${locale}${contactsRoute}`}>
                {dict.home.program.cta}
              </SecondaryButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
