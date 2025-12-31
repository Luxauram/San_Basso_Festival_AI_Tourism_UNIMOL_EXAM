import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  PARALLAX_BG_TRADITION_IMAGE_1,
  PARALLAX_MOON_TRADITION_IMAGE,
  PARALLAX_TICKET_HAND_TRADITION_IMAGE,
  PARALLAX_URNA_TRADITION_IMAGE,
  PARALLAX_WINNER_HAND_TRADITION_IMAGE,
} from '@/data';
import { DictAndLocaleProps } from '@/types';

export default function Section1Tradizione({
  isActive,
  dict,
  locale,
}: { isActive: boolean } & DictAndLocaleProps) {
  return (
    <section className="h-screen w-full relative overflow-hidden isolate">
      {/* ======= BG Duomo ======= */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      >
        <Image
          src={PARALLAX_BG_TRADITION_IMAGE_1}
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        {/* ======= Overlay contrasto ======= */}
        <div className="absolute inset-0 bg-black/15" />
      </motion.div>

      {/* ======= Img Luna ======= */}
      <motion.div
        className="absolute top-[calc(5vh)] md:top-[calc(-10vh)] lg:top-[calc(2vh)] right-[calc(-20vw)] lg:right-[calc(2vw)] z-1 lg:z-20 w-[calc(90vmin)] lg:w-[calc(35vmin)] h-[calc(60vmin)] lg:h-[calc(35vmin)]"
        initial={{ y: -600, opacity: 0 }}
        animate={isActive ? { y: 0, opacity: 1 } : { y: -600, opacity: 0 }}
        transition={{
          duration: 2,
          delay: 0.3,
          ease: [0.6, 0.01, 0.05, 0.95],
        }}
      >
        <Image
          src={PARALLAX_MOON_TRADITION_IMAGE}
          alt="Luna"
          fill
          priority
          className="object-contain"
        />
      </motion.div>

      {/* ======= Titolo Pagina ======= */}
      <motion.h1
        className="text-white-custom text-center absolute top-[10%] sm:top-[8%] md:top-[8%] left-1/2 -translate-x-1/2 z-30 m-0 "
        style={{
          textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6)',
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      >
        {dict.tradition.title}
      </motion.h1>

      {/* ======= Sottotitolo Pagina ======= */}
      <motion.h2
        className="text-white/90 text-center absolute top-[17%] sm:top-[14%] md:top-[14%] left-1/2 -translate-x-1/2 z-30 m-0 italic"
        style={{ textShadow: '0 2px 15px rgba(0,0,0,0.7)' }}
        initial={{ opacity: 0, y: -50 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        {dict.tradition.subtitle}
      </motion.h2>

      {/* ======= Contenitore backdrop ======= */}
      <motion.div
        className="absolute top-[55%] sm:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-[90%] max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        {/* ======= Backdrop blur ======= */}
        <div className="bg-black/20 backdrop-blur-[2px] rounded-2xl border border-white/20 shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12">
          {/* ======= Titolo Section ======= */}
          <motion.h3
            className="text-white-custom text-center mb-3 md:mb-4"
            style={{
              textShadow:
                '0 2px 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6)',
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {dict.tradition.section1.title}
          </motion.h3>

          {/* ======= Sottotitolo Section ======= */}
          <motion.p
            className="text-white/95 text-center text-lg sm:text-xl md:text-2xl italic mb-6 md:mb-8"
            style={{ textShadow: '0 2px 15px rgba(0,0,0,0.7)' }}
            initial={{ opacity: 0, y: -20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            {dict.tradition.section1.subtitle}
          </motion.p>

          {/* ======= Divisore decorativo ======= */}
          <motion.div
            className="w-24 h-0.5 bg-linear-to-r from-transparent via-white/70 to-transparent mx-auto mb-6 md:mb-8"
            initial={{ scaleX: 0 }}
            animate={isActive ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
          />

          {/* ======= Descrizione ======= */}
          <motion.p
            className="text-white-custom text-center"
            style={{ textShadow: '0 1px 10px rgba(0,0,0,0.7)' }}
            initial={{ opacity: 0, y: -20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            {dict.tradition.section1.description}
          </motion.p>
        </div>
      </motion.div>

      {/* ======= Img Urna ======= */}
      <motion.div
        className="absolute bottom-[calc(-10vh)] left-1/2 -translate-x-1/2 z-10 w-[calc(70vmin)] h-[calc(70vmin)] pointer-events-none"
        initial={{ y: 300, opacity: 0 }}
        animate={isActive ? { y: 0, opacity: 1 } : { y: 300, opacity: 0 }}
        transition={{
          duration: 1.8,
          delay: 1.2,
          ease: [0.6, 0.01, 0.05, 0.95],
        }}
      >
        <Image
          src={PARALLAX_URNA_TRADITION_IMAGE}
          alt="Urna"
          fill
          priority
          className="object-contain"
        />
      </motion.div>

      {/* ======= Img Mano Biglietto ======= */}
      <motion.div
        className="absolute bottom-[calc(-8vh)] md:bottom-[calc(-15vh)] left-[calc(2vw)] z-20 w-[calc(60vmin)] h-[calc(60vmin)] pointer-events-none"
        initial={{ x: -300, opacity: 0 }}
        animate={isActive ? { x: 1, opacity: 1 } : { x: -300, opacity: 0 }}
        transition={{
          duration: 1.8,
          delay: 1.4,
          ease: [0.6, 0.01, 0.05, 0.95],
        }}
      >
        <Image
          src={PARALLAX_TICKET_HAND_TRADITION_IMAGE}
          alt="Mano Biglietto"
          fill
          priority
          className="object-contain"
        />
      </motion.div>

      {/* ======= Img Mani Vincitore ======= */}
      <motion.div
        className="absolute bottom-[calc(-10vh)] md:bottom-[calc(-17vh)] right-0 z-20 w-[calc(60vmin)] h-[calc(60vmin)] pointer-events-none"
        initial={{ x: 300, opacity: 0 }}
        animate={isActive ? { x: 0, opacity: 1 } : { x: 300, opacity: 0 }}
        transition={{
          duration: 1.8,
          delay: 1.6,
          ease: [0.6, 0.01, 0.05, 0.95],
        }}
      >
        <Image
          src={PARALLAX_WINNER_HAND_TRADITION_IMAGE}
          alt="Mani Vincitore"
          fill
          priority
          className="object-contain"
        />
      </motion.div>
    </section>
  );
}
