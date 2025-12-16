import { Locale } from '@/i18n/config';
import { Dictionary } from './i18n';

export interface NavbarProps {
  locale: Locale;
  dict: Dictionary;
}

export interface MenuLink {
  label: string;
  href: string;
  image: string;
}
