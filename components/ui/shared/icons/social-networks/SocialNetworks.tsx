'use client';

import { motion } from 'framer-motion';
import XIcon from './XIcon';
import FacebookIcon from './FacebookIcon';
import InstagramIcon from './InstagramIcon';
import YoutubeIcon from './YoutubeIcon';
import { SocialNetworksProps } from '@/types';

export default function SocialNetworks({
  className = '',
}: SocialNetworksProps) {
  return (
    <div
      className={`flex flex-wrap justify-center items-center gap-3 sm:gap-4 ${className}`}
    >
      <motion.a
        whileHover={{ scale: 1.15, y: -3 }}
        whileTap={{ scale: 0.95 }}
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition"
      >
        <XIcon />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.15, y: -3 }}
        whileTap={{ scale: 0.95 }}
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition"
      >
        <FacebookIcon />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.15, y: -3 }}
        whileTap={{ scale: 0.95 }}
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition"
      >
        <InstagramIcon />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.15, y: -3 }}
        whileTap={{ scale: 0.95 }}
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition"
      >
        <YoutubeIcon />
      </motion.a>
    </div>
  );
}
