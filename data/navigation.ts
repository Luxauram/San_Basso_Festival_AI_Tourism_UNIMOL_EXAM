import { Locale } from '@/i18n/config';
import { Dictionary, MenuLink } from '@/types';

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
    image: '/menu/home.jpeg',
  },
  {
    label: dict.nav.tradition,
    href: `/${locale}/tradizione`,
    image: '/menu/tradizione.jpeg',
  },
  {
    label: dict.nav.program,
    href: `/${locale}/programma`,
    image: '/menu/programma.jpeg',
  },
  {
    label: dict.nav.contacts,
    href: `/${locale}/contatti`,
    image: '/menu/contatti.jpeg',
  },
];
