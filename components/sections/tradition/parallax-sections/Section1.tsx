import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  PARALLAX_BG_TRADITION_IMAGE_1,
  PARALLAX_MOON_TRADITION_IMAGE,
  PARALLAX_TICKET_HAND_TRADITION_IMAGE,
  PARALLAX_URNA_TRADITION_IMAGE,
  PARALLAX_WINNER_HAND_TRADITION_IMAGE,
} from '@/data';

export default function Section1Tradizione({
  isActive,
}: {
  isActive: boolean;
}) {
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
          src={PARALLAX_BG_TRADITION_IMAGE_1}
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Luna - z-20 (PRIMA AD ENTRARE - alta a destra, molto grande) */}
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

      {/* Titolo principale */}
      <motion.h1
        className="text-white-custom text-center absolute top-[8%] left-1/2 -translate-x-1/2 z-10 m-0 text-4xl md:text-6xl lg:text-7xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      >
        TRADIZIONE
      </motion.h1>

      {/* Sottotitolo */}
      <motion.h2
        className="text-white-custom text-center absolute top-[16%] left-1/2 -translate-x-1/2 z-10 m-0 text-3xl md:text-5xl lg:text-6xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        IL SORTEGGIO
      </motion.h2>

      {/* Data */}
      <motion.p
        className="text-white-custom text-center absolute top-[25%] left-1/2 -translate-x-1/2 z-10 m-0 text-xl md:text-2xl lg:text-3xl italic"
        initial={{ opacity: 0, y: -50 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 1.5, delay: 1.2 }}
      >
        &quot;Due settimane prima del 3 agosto&quot;
      </motion.p>

      {/* Descrizione */}
      <motion.p
        className="text-white-custom text-center absolute top-[33%] left-1/2 -translate-x-1/2 z-10 m-0 px-8 max-w-4xl text-base md:text-lg lg:text-xl"
        initial={{ opacity: 0, y: -50 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 1.5, delay: 1.4 }}
      >
        Un&apos;urna. Biglietti con i nomi dei pescherecci. Molti partecipanti
        ma una barca sola avrà l&apos;onore.
      </motion.p>

      {/* Urna */}
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

      {/* Mano Biglietto */}
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

      {/* Mani Vincitore */}
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
