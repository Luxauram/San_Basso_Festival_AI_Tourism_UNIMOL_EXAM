'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavbarProps } from '@/types/navigation';
import {
  getRoutes,
  getMenuLinks,
  DEFAULT_MENU_IMAGE,
  MAIN_LOGO_IMAGE,
} from '@/data';
import LanguageSwitcher from '../ui/shared/LanguageSwitcher';
import FlyerCTA from './FlyerCTA';
import SocialNetworks from '../ui/shared/icons/social-networks/SocialNetworks';
import { MenuButton } from '../ui/buttons/MenuButton';

export default function Navbar({ locale, dict }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentImage, setCurrentImage] = useState(DEFAULT_MENU_IMAGE);
  const [imageHistory, setImageHistory] = useState<string[]>([
    DEFAULT_MENU_IMAGE,
  ]);
  const pathname = usePathname();

  const routes = getRoutes(locale);
  const menuLinks = getMenuLinks(locale, dict);

  const isActive = (path: string) => pathname === path;

  const toggleMenu = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsOpen(!isOpen);

    setTimeout(() => {
      setIsAnimating(false);
      if (isOpen) {
        setImageHistory([DEFAULT_MENU_IMAGE]);
        setCurrentImage(DEFAULT_MENU_IMAGE);
      }
    }, 1250);
  };

  const handleLinkClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsOpen(false);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1250);
  };

  const handleLinkHover = (image: string) => {
    if (!isOpen || isAnimating) return;

    if (imageHistory[imageHistory.length - 1] !== image) {
      setCurrentImage(image);
      setImageHistory((prev) => {
        const newHistory = [...prev, image];
        return newHistory.slice(-3);
      });
    }
  };

  return (
    <>
      {/* ======= Navbar ======= */}
      <nav className="fixed w-full px-4 sm:px-6 md:px-10 pt-3 sm:pt-4 flex justify-between items-center z-150">
        {/* ======= Logo =======  */}
        <Link href={routes.home} className="z-160">
          <Image
            src={MAIN_LOGO_IMAGE}
            alt="San Basso Festival"
            width={100}
            height={100}
            className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 object-contain"
          />
        </Link>

        {/* ======= Donwload Poster ======= */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-160">
          <FlyerCTA locale={locale} dict={dict} />
        </div>

        {/* ======= Hamburger Menu ======= */}
        <div className="z-160 cursor-pointer" onClick={toggleMenu}>
          <MenuButton
            isOpen={isOpen}
            strokeWidth="8"
            color="#c45042"
            lineProps={{ strokeLinecap: 'round' }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            width={20}
            height={28}
            className="sm:w-[22px] sm:h-[32px] md:w-[24px] md:h-[35px]"
          />
        </div>
      </nav>

      {/* ======= Menu Overlay =======  */}
      <motion.div
        className="fixed inset-0 bg-[#0f0f0f] z-140 overflow-hidden"
        initial={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }}
        animate={
          isOpen
            ? { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }
            : { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }
        }
        transition={{ duration: 1.25, ease: [0.76, 0, 0.24, 1] }}
      >
        <motion.div
          className="relative w-full h-full flex justify-center items-center origin-left-bottom"
          initial={{ x: -100, y: -100, scale: 1.5, rotate: -15, opacity: 0.25 }}
          animate={
            isOpen
              ? { x: 0, y: 0, scale: 1, rotate: 0, opacity: 1 }
              : { x: -100, y: -100, scale: 1.5, rotate: -15, opacity: 0.25 }
          }
          transition={{ duration: 1.25, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* ======= Menu Items ======= */}
          <div className="w-full px-10 flex gap-10">
            {/* ======= Left Image ======= */}
            <div className="hidden lg:flex flex-3 justify-center items-center">
              <div className="relative w-[45%] aspect-3/4 overflow-hidden">
                <AnimatePresence mode="sync">
                  {imageHistory.map((img, index) => (
                    <motion.div
                      key={`${img}-${index}`}
                      className="absolute inset-0"
                      initial={{ opacity: 0, scale: 1.25, rotate: 10 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ duration: 0.75, ease: [0.6, 0, 0.4, 1] }}
                    >
                      <Image
                        src={img}
                        alt="Preview"
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* ======= Links Column ======= */}
            <div className="flex-2 py-10 flex flex-col gap-10">
              {/* ======= Links ======= */}
              <div className="flex flex-col gap-2 mb-4">
                {menuLinks.map((link, index) => (
                  <div key={index} className="overflow-hidden pb-1.5">
                    <motion.div
                      initial={{ y: '120%', opacity: 0.25 }}
                      animate={
                        isOpen
                          ? { y: '0%', opacity: 1 }
                          : { y: '120%', opacity: 0.25 }
                      }
                      transition={{
                        duration: 1,
                        delay: isOpen ? 0.75 + index * 0.1 : 0,
                        ease: [0.6, 0, 0.4, 1],
                      }}
                    >
                      <Link
                        href={link.href}
                        className="inline-block text-white text-4xl lg:text-[3.5rem] leading-none tracking-tight no-underline relative group uppercase"
                        onClick={handleLinkClick}
                        onMouseEnter={() => handleLinkHover(link.image)}
                      >
                        {link.label}
                        <span className="absolute left-0 top-full mt-1 w-full h-0.5 bg-white scale-x-0 origin-right transition-transform duration-300 ease-[cubic-bezier(0.6,0,0.4,1)] group-hover:scale-x-100 group-hover:origin-left" />
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ======= Footer ======= */}
          <div className="absolute bottom-0 w-full px-10 py-10">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
              {/* ======= Language Switcher ======= */}
              <div className="lg:flex-[3] laptop:flex-[2]">
                <LanguageSwitcher currentLocale={locale} />
              </div>

              {/* ======= Social ======= */}
              <div className="lg:flex-[2] laptop:flex-[3]">
                <SocialNetworks className="justify-start" />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
