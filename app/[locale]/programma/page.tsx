import { Locale } from '@/i18n/config';
import { getDictionary } from '@/lib/i18n';
import ProgramPageComponent from '@/components/pages/ProgramPage';

export default async function ProgrammaPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return <ProgramPageComponent dict={dict} locale={locale} />;
}
