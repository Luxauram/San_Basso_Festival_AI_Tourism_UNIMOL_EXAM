'use client';

import { accommodations } from '@/data';
import { DictAndLocaleProps } from '@/types';
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
import Image from 'next/image';

const amenityIcons: { [key: string]: any } = {
  'WiFi Gratuito': Wifi,
  WiFi: Wifi,
  Parcheggio: ParkingCircle,
  Colazione: Coffee,
  'Colazione Inclusa': Coffee,
  'Vista Mare': Waves,
};

export default function AccommodationsSection({
  dict,
  locale,
}: DictAndLocaleProps) {
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
    <section className="py-16 bg-white-custom">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4 uppercase bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Dove Dormire
          </h2>
          <p className="text-xl text-gray-400">
            Soluzioni per tutti i budget nel cuore di Termoli
          </p>
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
                <Image
                  src={accommodation.image}
                  alt={accommodation.name}
                  fill
                  priority
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
      </div>
    </section>
  );
}
