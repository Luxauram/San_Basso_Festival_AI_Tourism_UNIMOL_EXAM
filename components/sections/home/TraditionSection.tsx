'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { DictAndLocaleProps } from '@/types';
import SecondaryButton from '@/components/ui/buttons/SecondaryButton';

const words1 = `Terminal is a strategic joint venture, not a typical startup. Backed by leading logistics operators such as Prologis, Ryder, Lineage, and NFI, and supported by venture capital firm 8VC, we were designed to solve major industry pain points and establish the category standard.`;

const words2 = `Our strategic investors contributed critical insights and became anchor product design partners, ensuring we're rapidly solving the industries biggest challenges in yard logistics. We combine deep industry expertise with cutting-edge technology to transform the supply chain.`;

export default function TraditionSection({ dict, locale }: DictAndLocaleProps) {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section1InView = useInView(section1Ref, { once: true, amount: 0.3 });
  const section2InView = useInView(section2Ref, { once: true, amount: 0.3 });
  const contactsRoute = locale === 'it' ? '/contatti' : '/contacts';

  return (
    <div className="w-full bg-white-custom">
      {/* Sezione 1: Testo a sinistra, Immagine a destra */}
      <section
        ref={section1Ref}
        className="w-full min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-20"
      >
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Testo */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={section1InView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="mb-4">
              <span className="text-sm text-gray-400 uppercase tracking-wider">
                #Tradizione
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-black-custom">
              Built by the industry, for the industry
            </h2>
            <div className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {section1InView && <TextGenerateEffect words={words1} />}
            </div>
          </motion.div>

          {/* Immagine con maschera */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={section1InView ? { opacity: 1, x: 0 } : {}}
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
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80"
                alt="Logistics"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sezione 2: Immagine a sinistra, Testo a destra */}
      <section
        ref={section2Ref}
        className="w-full min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-20 bg-white-custom"
      >
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Immagine con maschera */}
          <motion.div
            className="flex-1 w-full lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={section2InView ? { opacity: 1, x: 0 } : {}}
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
                src="https://images.unsplash.com/photo-1605732562742-3023a888e56e?w=1200&q=80"
                alt="Technology"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          </motion.div>

          {/* Testo */}
          <motion.div
            className="flex-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={section2InView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="mb-4">
              <span className="text-sm text-gray-400 uppercase tracking-wider">
                #Tradizione
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-black-custom">
              Strategic partnerships, proven results
            </h2>
            <div className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {section2InView && <TextGenerateEffect words={words2} />}
            </div>
            <motion.div
              className="mt-8 flex md:justify-end justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={section2InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <SecondaryButton href={`/${locale}${contactsRoute}`}>
                {dict.footer.cta.button}
              </SecondaryButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
