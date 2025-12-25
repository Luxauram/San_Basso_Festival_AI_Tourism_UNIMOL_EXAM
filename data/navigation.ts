import { Locale } from '@/i18n/config';
import { Dictionary, MenuLink } from '@/types';
import {
  CONTACTS_MENU_IMAGE,
  DEFAULT_MENU_IMAGE,
  PROGRAM_MENU_IMAGE,
  TRADITION_MENU_IMAGE,
} from './images-url';

export const getRoutes = (locale: Locale) => ({
  home: `/${locale}`,
  tradition: `/${locale}/tradizione`,
  program: `/${locale}/programma`,
  contacts: `/${locale}/contatti`,
});

export const getMenuLinks = (locale: Locale, dict: Dictionary): MenuLink[] => [
  {
    label: dict.nav.home,
    href: `/${locale}`,
    image: DEFAULT_MENU_IMAGE,
  },
  {
    label: dict.nav.tradition,
    href: `/${locale}/tradizione`,
    image: TRADITION_MENU_IMAGE,
  },
  {
    label: dict.nav.program,
    href: `/${locale}/programma`,
    image: PROGRAM_MENU_IMAGE,
  },
  {
    label: dict.nav.contacts,
    href: `/${locale}/contatti`,
    image: CONTACTS_MENU_IMAGE,
  },
];
