'use client';

import { motion } from 'framer-motion';
import {
  MapPin,
  Star,
  Phone,
  Wifi,
  ParkingCircle,
  Coffee,
  Waves,
} from 'lucide-react';

interface Accommodation {
  id: number;
  name: string;
  type: string;
  description: string;
  address: string;
  phone: string;
  website?: string;
  rating: number;
  priceRange: string;
  image: string;
  amenities: string[];
  distanceFromCenter: string;
}

interface AccommodationsSectionProps {
  title?: string;
  subtitle?: string;
}

// Dati mock degli alloggi a Termoli
const accommodations: Accommodation[] = [
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

const amenityIcons: { [key: string]: any } = {
  'WiFi Gratuito': Wifi,
  WiFi: Wifi,
  Parcheggio: ParkingCircle,
  Colazione: Coffee,
  'Colazione Inclusa': Coffee,
  'Vista Mare': Waves,
};

export default function AccommodationsSection({
  title = 'Dove Dormire',
  subtitle = 'Soluzioni per tutti i budget nel cuore di Termoli',
}: AccommodationsSectionProps) {
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

  const getAmenityIcon = (amenity: string) => {
    const Icon = amenityIcons[amenity];
    return Icon ? <Icon size={14} className="text-cyan-400" /> : null;
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4 uppercase bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-xl text-gray-400">{subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((accommodation, index) => (
            <motion.div
              key={accommodation.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={accommodation.image}
                  alt={accommodation.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-500 px-3 py-1 rounded-full text-white text-xs font-bold">
                  {accommodation.type}
                </div>
                <div className="absolute bottom-4 right-4 bg-black/90 px-3 py-1 rounded-full text-white text-sm font-bold">
                  {accommodation.priceRange}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {accommodation.name}
                    </h3>
                  </div>
                  {renderStars(accommodation.rating)}
                </div>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed flex-grow">
                  {accommodation.description}
                </p>

                {/* Amenities */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {accommodation.amenities.map((amenity, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs flex items-center gap-1"
                      >
                        {getAmenityIcon(amenity)}
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 pt-4 border-t border-gray-700 mt-auto">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <MapPin size={16} className="text-blue-400 flex-shrink-0" />
                    <span className="text-xs">{accommodation.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Phone size={16} className="text-blue-400 flex-shrink-0" />
                    <a
                      href={`tel:${accommodation.phone}`}
                      className="hover:text-blue-400 transition-colors text-xs"
                    >
                      {accommodation.phone}
                    </a>
                  </div>
                  <div className="text-cyan-400 text-xs font-medium">
                    📍 {accommodation.distanceFromCenter}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 p-6 bg-blue-500/10 border border-blue-500/30 rounded-xl"
        >
          <p className="text-center text-gray-300 text-sm">
            🏨 <strong>Consiglio:</strong> Prenota con largo anticipo durante la
            festa di San Basso. Gli alloggi nel borgo antico si esauriscono
            rapidamente!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
