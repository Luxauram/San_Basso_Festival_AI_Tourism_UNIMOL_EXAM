'use client';

import { motion } from 'framer-motion';
import { MapPin, Star, Phone, Globe } from 'lucide-react';

interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  description: string;
  address: string;
  phone: string;
  website?: string;
  rating: number;
  priceLevel: string;
  image: string;
  specialties: string[];
}

interface RestaurantsSectionProps {
  title?: string;
  subtitle?: string;
}

// Dati mock dei ristoranti tipici di Termoli
const restaurants: Restaurant[] = [
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

export default function RestaurantsSection({
  title = 'Dove Mangiare',
  subtitle = 'I migliori ristoranti tipici di Termoli',
}: RestaurantsSectionProps) {
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={
              i < Math.floor(rating)
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-600'
            }
          />
        ))}
        <span className="ml-2 text-sm text-gray-400">{rating}</span>
      </div>
    );
  };

  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4 uppercase bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-xl text-gray-400">{subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {restaurants.map((restaurant, index) => (
            <motion.div
              key={restaurant.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-black/80 px-3 py-1 rounded-full text-yellow-400 font-bold">
                  {restaurant.priceLevel}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {restaurant.name}
                    </h3>
                    <p className="text-cyan-400 text-sm font-medium">
                      {restaurant.cuisine}
                    </p>
                  </div>
                  {renderStars(restaurant.rating)}
                </div>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {restaurant.description}
                </p>

                {/* Specialties */}
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
                    Specialità
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {restaurant.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-xs"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 pt-4 border-t border-gray-700">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <MapPin size={16} className="text-cyan-400 flex-shrink-0" />
                    <span>{restaurant.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Phone size={16} className="text-cyan-400 flex-shrink-0" />
                    <a
                      href={`tel:${restaurant.phone}`}
                      className="hover:text-cyan-400 transition-colors"
                    >
                      {restaurant.phone}
                    </a>
                  </div>
                  {restaurant.website && (
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Globe
                        size={16}
                        className="text-cyan-400 flex-shrink-0"
                      />
                      <a
                        href={`https://${restaurant.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 transition-colors"
                      >
                        {restaurant.website}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-gray-500 text-sm mt-12"
        >
          💡 Consigliamo di prenotare in anticipo, specialmente durante il
          periodo della festa
        </motion.p>
      </div>
    </section>
  );
}
