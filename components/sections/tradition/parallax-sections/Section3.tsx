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
        className="absolute bottom-[calc(-22vh)] md:bottom-[calc(-20vh)] lg:bottom-[calc(-18vh)] xl:bottom-[calc(-15vh)] left-1/2 -translate-x-1/2 z-10 w-[calc(120vw)] h-[calc(80vh)] md:w-[calc(100vw)] md:h-[calc(70vh)] lg:w-[calc(90vw)] lg:h-[calc(65vh)] xl:w-[calc(80vw)] xl:h-[calc(60vh)] pointer-events-none"
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
        className="absolute top-[calc(-5vh)] md:top-[calc(0vh)] lg:top-[calc(5vh)] xl:top-[calc(8vh)] left-[calc(-15vw)] md:left-[calc(-12vw)] lg:left-[calc(-10vw)] xl:left-[calc(-8vw)] z-8 w-[calc(110vw)] h-[calc(90vh)] md:w-[calc(90vw)] md:h-[calc(75vh)] lg:w-[calc(75vw)] lg:h-[calc(65vh)] xl:w-[calc(65vw)] xl:h-[calc(55vh)] pointer-events-none"
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
        className="absolute bottom-[calc(20vh)] md:bottom-[calc(22vh)] lg:bottom-[calc(25vh)] xl:bottom-[calc(28vh)] left-[calc(-8vw)] md:left-[calc(-6vw)] lg:left-[calc(-5vw)] xl:left-[calc(-4vw)] z-9 w-[calc(50vw)] h-[calc(45vh)] md:w-[calc(45vw)] md:h-[calc(40vh)] lg:w-[calc(40vw)] lg:h-[calc(35vh)] xl:w-[calc(35vw)] xl:h-[calc(32vh)] pointer-events-none"
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
        className="absolute top-[calc(8vh)] md:top-[calc(10vh)] lg:top-[calc(12vh)] xl:top-[calc(15vh)] right-[calc(-85vw)] md:right-[calc(-75vw)] lg:right-[calc(-65vw)] xl:right-[calc(-55vw)] z-8 w-[calc(210vw)] h-[calc(100vh)] md:w-[calc(180vw)] md:h-[calc(85vh)] lg:w-[calc(150vw)] lg:h-[calc(75vh)] xl:w-[calc(130vw)] xl:h-[calc(65vh)] pointer-events-none"
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
        className="absolute top-[calc(28vh)] md:top-[calc(30vh)] lg:top-[calc(32vh)] xl:top-[calc(35vh)] right-[calc(-95vw)] md:right-[calc(-85vw)] lg:right-[calc(-75vw)] xl:right-[calc(-65vw)] z-8 w-[calc(220vw)] h-[calc(105vh)] md:w-[calc(190vw)] md:h-[calc(90vh)] lg:w-[calc(160vw)] lg:h-[calc(80vh)] xl:w-[calc(140vw)] xl:h-[calc(70vh)] pointer-events-none"
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
