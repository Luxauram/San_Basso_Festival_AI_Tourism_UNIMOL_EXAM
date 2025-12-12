import { Bebas_Neue, Montserrat } from 'next/font/google';
import { Locale } from '@/i18n/config';
import { getDictionary } from '@/lib/i18n';
import Header from '@/components/ui/shared/Header';
import DisclaimerBanner from '@/components/shared/DisclaimerBanner';
import Footer from '@/components/ui/shared/Footer';

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400', // unico peso disponibile
  variable: '--font-bebas',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <html lang={locale} className={`${bebas.variable} ${montserrat.variable}`}>
      <body className={montserrat.className}>
        <Header locale={locale} dict={dict} />
        <DisclaimerBanner locale={locale} />
        {children}
        <Footer dict={dict} locale={locale} />
      </body>
    </html>
  );
}
