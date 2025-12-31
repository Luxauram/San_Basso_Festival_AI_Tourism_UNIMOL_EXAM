import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  PARALLAX_LEFT_CHURCH_TRADITION_IMAGE,
  PARALLAX_CENTER_FIREWORKS_TRADITION_IMAGE,
  PARALLAX_RIGHT_PORT_TRADITION_IMAGE,
} from '@/data';
import { DictAndLocaleProps } from '@/types';

export default function Section4({
  isActive,
  dict,
  locale,
}: { isActive: boolean } & DictAndLocaleProps) {
  return (
    <section className="h-screen w-full relative overflow-hidden isolate">
      {/* ======= BG Triangolare ======= */}
      <div className="absolute inset-0 z-0 bg-black" />

      {/* ======= Contenitore Backdrop ======= */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-[90%] max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        {/* ======= Backdrop blur ======= */}
        <div className="bg-black/50 backdrop-blur-[2px] rounded-2xl border border-white/20 shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12">
          {/* ======= Titolo ======= */}
          <motion.h1
            className="text-white-custom text-center mb-3 md:mb-4"
            style={{
              textShadow:
                '0 2px 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6)',
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {dict.tradition.section4.title}
          </motion.h1>

          {/* ======= Sottotitolo ======= */}
          <motion.p
            className="text-white/95 text-center text-lg sm:text-xl md:text-2xl italic mb-6 md:mb-8"
            style={{ textShadow: '0 2px 15px rgba(0,0,0,0.7)' }}
            initial={{ opacity: 0, y: -20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {dict.tradition.section4.subtitle}
          </motion.p>

          {/* ======= Divisore decorativo ======= */}
          <motion.div
            className="w-24 h-0.5 bg-linear-to-r from-transparent via-white/70 to-transparent mx-auto mb-6 md:mb-8"
            initial={{ scaleX: 0 }}
            animate={isActive ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          />

          {/* ======= Descrizione ======= */}
          <motion.p
            className="text-white-custom text-center"
            style={{ textShadow: '0 1px 10px rgba(0,0,0,0.7)' }}
            initial={{ opacity: 0, y: -20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            {dict.tradition.section4.description}
          </motion.p>
        </div>
      </motion.div>

      {/* ======= Img Sinistra ======= */}
      <motion.div
        className="absolute inset-0 z-10 w-full h-full pointer-events-none"
        initial={{ x: '-100%', opacity: 0 }}
        animate={isActive ? { x: 0, opacity: 1 } : { x: '-100%', opacity: 0 }}
        transition={{
          duration: 1.8,
          delay: 1.4,
          ease: [0.6, 0.01, 0.05, 0.95],
        }}
      >
        <Image
          src={PARALLAX_LEFT_CHURCH_TRADITION_IMAGE}
          alt="Chiesa e Cattedrale"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* ======= Img Centro ======= */}
      <motion.div
        className="absolute inset-0 z-20 w-full h-full pointer-events-none"
        initial={{ y: '-100%', opacity: 0 }}
        animate={isActive ? { y: 0, opacity: 1 } : { y: '-100%', opacity: 0 }}
        transition={{
          duration: 1.8,
          delay: 1.6,
          ease: [0.6, 0.01, 0.05, 0.95],
        }}
      >
        <Image
          src={PARALLAX_CENTER_FIREWORKS_TRADITION_IMAGE}
          alt="Fuochi d'artificio"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* ======= Img Destra ======= */}
      <motion.div
        className="absolute inset-0 z-10 w-full h-full pointer-events-none"
        initial={{ x: '100%', opacity: 0 }}
        animate={isActive ? { x: 0, opacity: 1 } : { x: '100%', opacity: 0 }}
        transition={{
          duration: 1.8,
          delay: 1.8,
          ease: [0.6, 0.01, 0.05, 0.95],
        }}
      >
        <Image
          src={PARALLAX_RIGHT_PORT_TRADITION_IMAGE}
          alt="Porto e Mercato Ittico"
          fill
          priority
          className="object-cover"
        />
      </motion.div>
    </section>
  );
}
