import { motion } from 'framer-motion';

export const arrowDownIcon = (
  <motion.svg
    className="text-gray-800"
    style={{
      width: 'clamp(20px, 3.2vw, 42px)',
      height: 'clamp(20px, 3.2vw, 42px)',
    }}
    fill="none"
    strokeWidth="2"
    stroke="currentColor"
    viewBox="0 0 24 24"
    animate={{
      y: [0, 8, 0],
    }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 14l-7 7m0 0l-7-7m7 7V3"
    />
  </motion.svg>
);
