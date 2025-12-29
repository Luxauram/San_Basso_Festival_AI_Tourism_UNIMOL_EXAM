import { ReactNode } from 'react';
import { Locale } from '@/i18n/config';
import { Dictionary } from '@/types/i18n';

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'main' | 'section' | 'div';
}

export interface DictAndLocaleProps {
  dict: Dictionary;
  locale?: Locale;
}

export interface TimeLeftProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  description: string;
  address: string;
  phone: string;
  website?: string;
  rating: number;
  priceLevel: string;
  image: string;
  specialties: string[];
}

export interface Accommodation {
  id: number;
  name: string;
  type: string;
  description: string;
  address: string;
  phone: string;
  website?: string;
  rating: number;
  priceRange: string;
  image: string;
  amenities: string[];
  distanceFromCenter: string;
}

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  height?: string;
}

export interface HeroImageProps {
  imageUrl: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  height?: string;
  overlayOpacity?: number;
}

export interface MapsProps {
  title: string;
  embedUrl: string;
  height?: string;
  className?: string;
  pinTitle?: string;
  pinHref?: string;
}
