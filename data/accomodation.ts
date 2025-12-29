import { Accommodation } from '@/types';

export const accommodations: Accommodation[] = [
  {
    id: 1,
    name: 'Hotel Mistral',
    type: 'Hotel 4 Stelle',
    description:
      'Hotel elegante sul lungomare con vista panoramica sul mare Adriatico. Camere moderne e ristorante.',
    address: 'Lungomare C. Colombo, 50',
    phone: '+39 0875 123456',
    website: 'www.hotelmistral.it',
    rating: 4.7,
    priceRange: '€90 - €150/notte',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    amenities: ['WiFi Gratuito', 'Parcheggio', 'Colazione', 'Vista Mare'],
    distanceFromCenter: '200m dal centro',
  },
  {
    id: 2,
    name: 'B&B Borgo Antico',
    type: 'Bed & Breakfast',
    description:
      'Accogliente B&B nel cuore del borgo medievale. Atmosfera familiare e colazione casalinga.',
    address: 'Via Duomo, 12 - Borgo Antico',
    phone: '+39 0875 234567',
    rating: 4.9,
    priceRange: '€60 - €90/notte',
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
    amenities: ['WiFi Gratuito', 'Colazione Inclusa', 'Aria Condizionata'],
    distanceFromCenter: 'Nel centro storico',
  },
  {
    id: 3,
    name: 'Residence Le Dune',
    type: 'Residence',
    description:
      'Appartamenti moderni vicino alla spiaggia. Ideale per famiglie, cucina attrezzata e piscina.',
    address: 'Via Marina, 78',
    phone: '+39 0875 345678',
    website: 'www.residenceledune.com',
    rating: 4.5,
    priceRange: '€80 - €120/notte',
    image:
      'https://images.unsplash.com/photo-1502672260066-6bc35f0a1502?w=800&q=80',
    amenities: ['Piscina', 'WiFi', 'Parcheggio', 'Cucina Attrezzata'],
    distanceFromCenter: '500m dal centro',
  },
  {
    id: 4,
    name: 'Hotel Svevo',
    type: 'Hotel 3 Stelle',
    description:
      'Hotel nel centro città con camere confortevoli. Ottimo rapporto qualità-prezzo.',
    address: 'Corso Nazionale, 89',
    phone: '+39 0875 456789',
    website: 'www.hotelsvevo.it',
    rating: 4.4,
    priceRange: '€70 - €100/notte',
    image:
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
    amenities: ['WiFi Gratuito', 'Colazione', 'Aria Condizionata'],
    distanceFromCenter: 'Centro città',
  },
  {
    id: 5,
    name: 'Villa sul Mare',
    type: 'Casa Vacanze',
    description:
      'Elegante villa con giardino privato e accesso diretto alla spiaggia. Perfetta per gruppi.',
    address: 'Via Adriatica, 22',
    phone: '+39 0875 567890',
    rating: 4.8,
    priceRange: '€150 - €250/notte',
    image:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    amenities: ['Vista Mare', 'Giardino Privato', 'WiFi', 'Parcheggio'],
    distanceFromCenter: '1km dal centro',
  },
  {
    id: 6,
    name: 'Ostello del Viaggiatore',
    type: 'Ostello',
    description:
      'Ostello moderno con camere condivise e private. Atmosfera giovane e internazionale.',
    address: 'Via Porto, 45',
    phone: '+39 0875 678901',
    rating: 4.2,
    priceRange: '€25 - €50/notte',
    image:
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
    amenities: ['WiFi Gratuito', 'Cucina Condivisa', 'Area Comune'],
    distanceFromCenter: '300m dal centro',
  },
];
