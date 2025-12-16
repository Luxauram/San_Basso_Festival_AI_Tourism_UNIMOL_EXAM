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
