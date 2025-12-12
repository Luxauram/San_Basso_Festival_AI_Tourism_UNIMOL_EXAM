import { Locale } from '@/i18n/config';
import { getDictionary } from '@/lib/i18n';
import LegalPageComponent from '@/components/pages/LegalPage';

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return <LegalPageComponent data={dict.privacy} />;
}
