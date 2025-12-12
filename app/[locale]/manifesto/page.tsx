import { Locale } from '@/i18n/config';
import Image from 'next/image';

export default async function ManifestoPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            {locale === 'it' ? 'Locandina Ufficiale' : 'Official Poster'}
          </h1>
          <p className="text-gray-400">
            {locale === 'it'
              ? 'Festa di San Basso 2025'
              : 'San Basso Festival 2025'}
          </p>
        </div>

        {/* Placeholder per la locandina */}
        <div className="bg-gradient-to-br from-purple-900 to-blue-900 rounded-lg shadow-2xl aspect-[2/3] flex items-center justify-center">
          <div className="text-center text-white p-8">
            <p className="text-6xl mb-4">🎉</p>
            <p className="text-2xl font-bold mb-2">
              {locale === 'it' ? 'Locandina in arrivo' : 'Poster coming soon'}
            </p>
            <p className="text-gray-300">
              {locale === 'it'
                ? 'La locandina ufficiale verrà caricata qui'
                : 'The official poster will be uploaded here'}
            </p>
          </div>
        </div>

        {/* Una volta che hai il file, sostituisci con: */}
        {/* <Image
          src="/manifesto.jpg"
          alt="San Basso Festival 2025 Poster"
          width={800}
          height={1200}
          className="w-full h-auto rounded-lg shadow-2xl"
        /> */}
      </div>
    </main>
  );
}
