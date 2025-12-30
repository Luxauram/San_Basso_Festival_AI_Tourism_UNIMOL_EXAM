// DA ELIMINARE

import { Restaurant } from '@/types';

export const restaurantsData: Restaurant[] = [
  {
    id: 1,
    name: 'Trattoria del Pescatore',
    cuisine: 'Pesce e Frutti di Mare',
    description:
      'Ristorante tradizionale nel cuore del borgo antico. Pesce freschissimo e brodetto alla termolese.',
    address: 'Via Duomo, 25 - Borgo Antico',
    phone: '+39 0875 123456',
    website: 'www.trattoriapescatore.it',
    rating: 4.8,
    priceLevel: '€€€',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    specialties: ['Brodetto alla Termolese', 'Scapece', 'Crudo di Mare'],
  },
  {
    id: 2,
    name: 'Osteria da Nonna Rosa',
    cuisine: 'Cucina Molisana',
    description:
      'Cucina casalinga molisana con prodotti locali. Pasta fatta in casa e piatti della tradizione contadina.',
    address: 'Corso Nazionale, 104',
    phone: '+39 0875 234567',
    rating: 4.6,
    priceLevel: '€€',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    specialties: [
      'Cavatelli con Sugo',
      'Agnello al Forno',
      'Pallotte Cace e Ove',
    ],
  },
  {
    id: 3,
    name: 'Ristorante Svevia',
    cuisine: 'Cucina Mediterranea',
    description:
      'Elegante ristorante con vista mare. Cucina raffinata che reinterpreta i sapori del territorio.',
    address: 'Lungomare Cristoforo Colombo, 50',
    phone: '+39 0875 345678',
    website: 'www.ristorantesvevia.it',
    rating: 4.9,
    priceLevel: '€€€€',
    image:
      'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&q=80',
    specialties: [
      'Crudo di Pesce',
      'Risotto ai Frutti di Mare',
      'Fritto Misto',
    ],
  },
  {
    id: 4,
    name: 'Pizzeria Il Borgo',
    cuisine: 'Pizza Napoletana',
    description:
      'Pizza napoletana DOC cotta nel forno a legna. Impasto a lunga lievitazione e ingredienti selezionati.',
    address: 'Via Federico II, 18 - Borgo Antico',
    phone: '+39 0875 456789',
    rating: 4.7,
    priceLevel: '€',
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80',
    specialties: ['Pizza Margherita DOC', 'Marinara', 'Calzone Ripieno'],
  },
];
