'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import type { ProgramDayProps } from '@/types/i18n';

export function ProgramDay({ date, events, index }: ProgramDayProps) {
  const colors = ['cyan', 'pink', 'yellow'];
  const color = colors[index] || 'cyan';

  const colorClasses: Record<string, string> = {
    cyan: 'text-cyan-400 from-cyan-400',
    pink: 'text-pink-500 from-pink-500',
    yellow: 'text-yellow-400 from-yellow-400',
  };

  return (
    <motion.div
      className="mb-20"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <div className="flex items-center gap-8 mb-12">
        <motion.div
          className="shrink-0"
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
        >
          <div
            className={`text-7xl md:text-9xl font-black ${colorClasses[color]}`}
          >
            {date}
          </div>
        </motion.div>
        <motion.div
          className={`h-1 grow bg-linear-to-r ${colorClasses[color]} to-transparent`}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ transformOrigin: 'left' }}
        />
      </div>

      <div className="space-y-12 pl-0 md:pl-20">
        {events.map((event, idx) => (
          <motion.div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 md:gap-12 items-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
          >
            <motion.div
              className="shrink-0"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span
                className={`text-3xl md:text-4xl font-black ${colorClasses[color]} block`}
              >
                H {event.time}
              </span>
            </motion.div>

            <motion.div whileHover={{ x: 10, transition: { duration: 0.2 } }}>
              <h3 className="text-white-custom mb-4">{event.title}</h3>
              <p className="text-white-custom">{event.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
