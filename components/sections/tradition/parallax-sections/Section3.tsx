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

export default function Section3({ isActive }: { isActive: boolean }) {
  return (
    <section className="h-screen w-full relative overflow-hidden isolate">
      {/* BG Duomo */}
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
      </motion.div>

      {/* Sottotitolo */}
      <motion.h2
        className="text-white-custom text-center absolute top-[10%] left-1/2 -translate-x-1/2 z-30 m-0 text-3xl md:text-5xl lg:text-6xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      >
        LA PROCESSIONE A MARE
      </motion.h2>

      {/* Data */}
      <motion.p
        className="text-white-custom text-center absolute top-[18%] left-1/2 -translate-x-1/2 z-30 m-0 text-xl md:text-2xl lg:text-3xl italic"
        initial={{ opacity: 0, y: -50 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        &quot;San Bass pe&apos; mare&quot;
      </motion.p>

      {/* Descrizione */}
      <motion.p
        className="text-white-custom text-center absolute top-[26%] left-1/2 -translate-x-1/2 z-30 m-0 px-8 max-w-4xl text-base md:text-lg lg:text-xl"
        initial={{ opacity: 0, y: -50 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 1.5, delay: 1.2 }}
      >
        Il corteo naviga tra Rio Vivo e Sant&apos;Antonio. La banda suona. Una
        corona di fiori cade in acqua. Sirene di tutti i pescherecci
        all&apos;unisono. Il mare si ferma per San Basso.
      </motion.p>

      {/* Bottom Boat - CENTRO IN BASSO (la più grande) */}
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

      {/* Boat Left Up - SINISTRA ALTO */}
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

      {/* Boat Left Down - SINISTRA BASSO */}
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

      {/* Boat Right Up */}
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

      {/* Boat Right Down - DESTRA BASSO */}
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
