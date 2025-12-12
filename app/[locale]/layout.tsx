import { Inter } from 'next/font/google';
import { Locale } from '@/i18n/config';
import { getDictionary } from '@/lib/i18n';
import Header from '@/components/ui/shared/Header';
import DisclaimerBanner from '@/components/shared/DisclaimerBanner';
import Footer from '@/components/ui/shared/Footer';

const inter = Inter({ subsets: ['latin'] });

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
    <html lang={locale}>
      <body className={inter.className}>
        <Header locale={locale} dict={dict} />
        <DisclaimerBanner locale={locale} />
        {children}
        <Footer dict={dict} locale={locale} />
      </body>
    </html>
  );
}
