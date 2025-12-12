import HomeClient from '@/components/sections/home/HomeClient';
import { Locale } from '@/i18n/config';
import { getDictionary } from '@/lib/i18n';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return <HomeClient locale={locale} dict={dict} />;
}
