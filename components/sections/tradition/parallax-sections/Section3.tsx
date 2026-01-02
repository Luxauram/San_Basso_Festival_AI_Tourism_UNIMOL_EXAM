import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  PARALLAX_BG_TRADITION_IMAGE_3,
  PARALLAX_BOTTOM_BOAT_TRADITION_IMAGE,
  PARALLAX_LEFT_BOAT_DOWN_TRADITION_IMAGE,
  PARALLAX_LEFT_BOAT_UP_TRADITION_IMAGE,
  PARALLAX_RIGHT_BOAT_DOWN_TRADITION_IMAGE,
  PARALLAX_RIGHT_BOAT_UP_TRADITION_IMAGE,
} from '@/data';
import { DictAndLocaleProps } from '@/types';

export default function Section3({
  isActive,
  dict,
  locale,
}: { isActive: boolean } & DictAndLocaleProps) {
  return (
    <section className="h-screen w-full relative overflow-hidden isolate">
      {/* ======= BG Mare ======= */}
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
          src={PARALLAX_BG_TRADITION_IMAGE_3}
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        {/* ======= Overlay contrasto ======= */}
        <div className="absolute inset-0 bg-black/15" />
      </motion.div>

      {/* ======= Contenitore backdrop ======= */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-[90%] max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        {/* ======= Backdrop blur ======= */}
        <div className="bg-black/35 backdrop-blur-[2px] rounded-2xl border border-white/20 shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12">
          {/* ======= Titolo ======= */}
          <motion.h2
            className="text-white-custom text-center mb-3 md:mb-4"
            style={{
              textShadow:
                '0 2px 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6)',
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {dict.tradition.section3.title}
          </motion.h2>

          {/* ======= Sottotitolo ======= */}
          <motion.p
            className="text-white/95 text-center text-lg sm:text-xl md:text-2xl italic mb-6 md:mb-8"
            style={{ textShadow: '0 2px 15px rgba(0,0,0,0.7)' }}
            initial={{ opacity: 0, y: -20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {dict.tradition.section3.subtitle}
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
            {dict.tradition.section3.description}
          </motion.p>
        </div>
      </motion.div>

      {/* ======= IMG Bottom Boat ======= */}
      <motion.div
        className="absolute bottom-[calc(-32vh)] md:bottom-[calc(-31vh)] lg:bottom-[calc(-22vh)] xl:bottom-[calc(-15vh)] left-1/2 -translate-x-1/2 z-10 w-[calc(120vw)] h-[calc(80vh)] md:w-[calc(100vw)] md:h-[calc(80vh)] lg:w-[calc(90vw)] lg:h-[calc(65vh)] xl:w-[calc(80vw)] xl:h-[calc(60vh)] pointer-events-none"
        initial={{ y: 300, opacity: 0 }}
        animate={isActive ? { y: 0, opacity: 1 } : { y: 300, opacity: 0 }}
        transition={{
          duration: 1.8,
          delay: 1.4,
          ease: [0.6, 0.01, 0.05, 0.95],
        }}
      >
        <Image
          src={PARALLAX_BOTTOM_BOAT_TRADITION_IMAGE}
          alt="Barca Centrale"
          fill
          priority
          className="object-contain"
        />
      </motion.div>

      {/* ======= Img Boat Left Up ======= */}
      <motion.div
        className="absolute top-[calc(20vh)] md:top-[calc(20vh)] lg:top-[calc(20vh)] xl:top-[calc(30vh)] left-[calc(-25vw)] md:left-[calc(5vw)] lg:left-[calc(10vw)] xl:left-[calc(5vw)] z-8 w-[calc(50vw)] h-[calc(50vh)] md:w-[calc(25vw)] md:h-[calc(35vh)] lg:w-[calc(15vw)] lg:h-[calc(25vh)] xl:w-[calc(25vw)] xl:h-[calc(15vh)] pointer-events-none"
        initial={{ x: -200, opacity: 0 }}
        animate={isActive ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
        transition={{
          duration: 1.6,
          delay: 1.6,
          ease: [0.6, 0.01, 0.05, 0.95],
        }}
      >
        <Image
          src={PARALLAX_LEFT_BOAT_UP_TRADITION_IMAGE}
          alt="Barca Sinistra Alto"
          fill
          priority
          className="object-contain"
        />
      </motion.div>

      {/* ======= Img Boat Left Down ======= */}
      <motion.div
        className="absolute bottom-[calc(10vh)] md:bottom-[calc(21vh)] lg:bottom-[calc(25vh)] xl:bottom-[calc(10vh)] left-[calc(-15vw)] md:left-[calc(-6vw)] lg:left-[calc(-5vw)] xl:left-[calc(-20vw)] z-9 w-[calc(50vw)] h-[calc(50vh)] md:w-[calc(45vw)] md:h-[calc(40vh)] lg:w-[calc(40vw)] lg:h-[calc(35vh)] xl:w-[calc(52vw)] xl:h-[calc(52vh)] pointer-events-none"
        initial={{ x: -200, opacity: 0 }}
        animate={isActive ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
        transition={{
          duration: 1.6,
          delay: 1.8,
          ease: [0.6, 0.01, 0.05, 0.95],
        }}
      >
        <Image
          src={PARALLAX_LEFT_BOAT_DOWN_TRADITION_IMAGE}
          alt="Barca Sinistra Basso"
          fill
          priority
          className="object-contain"
        />
      </motion.div>

      {/* ======= Img Boat Right Up ======= */}
      <motion.div
        className="absolute top-[calc(20vh)] md:top-[calc(25vh)] lg:top-[calc(7vh)] xl:top-[calc(25vh)] right-[calc(-40vw)] md:right-[calc(-25vw)] lg:right-[calc(-10vw)] xl:right-[calc(5vw)] z-8 w-[calc(60vw)] h-[calc(60vh)] md:w-[calc(50vw)] md:h-[calc(35vh)] lg:w-[calc(40vw)] lg:h-[calc(75vh)] xl:w-[calc(30vw)] xl:h-[calc(20vh)] pointer-events-none"
        initial={{ x: 200, opacity: 0 }}
        animate={isActive ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
        transition={{
          duration: 1.6,
          delay: 2,
          ease: [0.6, 0.01, 0.05, 0.95],
        }}
      >
        <Image
          src={PARALLAX_RIGHT_BOAT_UP_TRADITION_IMAGE}
          alt="Barca Destra Alto"
          fill
          priority
          className="object-contain"
        />
      </motion.div>

      {/* ======= Img Boat Right Down ======= */}
      <motion.div
        className="absolute top-[calc(40vh)] md:top-[calc(40vh)] lg:top-[calc(32vh)] xl:top-[calc(35vh)] right-[calc(-30vw)] md:right-[calc(-25vw)] lg:right-[calc(-25vw)] xl:right-[calc(-30vw)] z-8 w-[calc(60vw)] h-[calc(60vh)] md:w-[calc(60vw)] md:h-[calc(45vh)] lg:w-[calc(60vw)] lg:h-[calc(80vh)] xl:w-[calc(70vw)] xl:h-[calc(50vh)] pointer-events-none"
        initial={{ x: 200, opacity: 0 }}
        animate={isActive ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
        transition={{
          duration: 1.6,
          delay: 2.2,
          ease: [0.6, 0.01, 0.05, 0.95],
        }}
      >
        <Image
          src={PARALLAX_RIGHT_BOAT_DOWN_TRADITION_IMAGE}
          alt="Barca Destra Basso"
          fill
          priority
          className="object-contain"
        />
      </motion.div>
    </section>
  );
}
