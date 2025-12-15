import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { Locale, locales } from '@/i18n/config';
import ItalyFlag from '@/components/ui/shared/icons/flags/ItalyFlag';
import USAFlag from '@/components/ui/shared/icons/flags/USAFlag';

export default function LanguageSwitcher({
  currentLocale,
}: {
  currentLocale: Locale;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: Locale) => {
    if (newLocale === currentLocale) return;

    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  return (
    <div className="flex md:flex-row flex-col md:items-center items-start gap-2 rounded-lg p-1">
      {locales.map((locale) => {
        const isSelected = locale === currentLocale;
        return (
          <motion.button
            key={locale}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => switchLocale(locale)}
            className={`relative flex items-center justify-center p-2 rounded-md transition-all ${
              isSelected
                ? 'bg-white shadow-sm'
                : 'hover:bg-gray-200/50 opacity-60'
            }`}
          >
            <div className="w-8 h-8 flex items-center justify-center">
              {locale === 'it' ? <ItalyFlag /> : <USAFlag />}
            </div>
            {isSelected && (
              <motion.div
                layoutId="language-indicator"
                className="absolute inset-0 bg-white rounded-md shadow-sm"
                style={{ zIndex: -1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
