import { Locale } from '@/i18n/config';
import { Dictionary } from '@/types/i18n';

const dictionaries = {
  it: () =>
    import('../messages/it.json').then(
      (module) => module.default as Dictionary
    ),
  en: () =>
    import('../messages/en.json').then(
      (module) => module.default as Dictionary
    ),
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  return dictionaries[locale]();
};
