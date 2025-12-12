import { Locale } from '@/i18n/config';
import { getDictionary } from '@/lib/i18n';
import TraditionPageComponent from '@/components/pages/TraditionPage';

export default async function TradizionePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return <TraditionPageComponent dict={dict} />;
}
