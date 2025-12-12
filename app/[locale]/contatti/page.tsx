import { Locale } from '@/i18n/config';
import { getDictionary } from '@/lib/i18n';
import ContactsPageComponent from '@/components/pages/ContactsPage';

export default async function ContattiPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return <ContactsPageComponent dict={dict} />;
}
