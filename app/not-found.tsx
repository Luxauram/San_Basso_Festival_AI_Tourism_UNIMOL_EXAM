import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="it">
      <body>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            textAlign: 'center',
            padding: '20px',
          }}
        >
          <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>
            Pagina non trovata
          </h2>
          <p style={{ marginBottom: '2rem' }}>
            La pagina che stai cercando non esiste.
          </p>
          <Link
            href="/it"
            style={{
              padding: '10px 20px',
              backgroundColor: '#0070f3',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '5px',
            }}
          >
            Torna alla home
          </Link>
        </div>
      </body>
    </html>
  );
}
