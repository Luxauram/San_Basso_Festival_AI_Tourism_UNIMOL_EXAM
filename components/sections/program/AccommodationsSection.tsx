'use client';

import { DictAndLocaleProps } from '@/types';
import { motion } from 'framer-motion';
import {
  MapPin,
  Star,
  Phone,
  Globe,
  Wifi,
  ParkingCircle,
  Coffee,
  Waves,
  Home,
  Users,
  Utensils,
  Wind,
  Trees,
  LucideIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// ======= Icone =======
const amenityIcons: Record<string, LucideIcon> = {
  'WiFi Gratuito': Wifi,
  WiFi: Wifi,
  Parcheggio: ParkingCircle,
  Colazione: Coffee,
  'Colazione Inclusa': Coffee,
  'Vista Mare': Waves,
  Piscina: Waves,
  'Cucina Attrezzata': Utensils,
  'Cucina Condivisa': Utensils,
  'Aria Condizionata': Wind,
  'Giardino Privato': Trees,
  'Area Comune': Users,
};

export default function AccommodationsSection({
  dict,
  locale,
}: DictAndLocaleProps) {
  const accommodations = dict.program.accommodation.accomodations;

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
                : 'text-gray-300'
            }
          />
        ))}
        <span className="ml-2 text-sm text-gray-600 font-medium">{rating}</span>
      </div>
    );
  };

  const getAmenityIcon = (amenity: string) => {
    const Icon = amenityIcons[amenity] || Home;
    return <Icon size={14} className="text-blue-600" />;
  };

  return (
    <section className="py-16 bg-white-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ======= Title + Subtitle ======= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-black-custom mb-3">
            {dict.program.accommodation.title}
          </h2>
          <p className="text-black-custom">
            {dict.program.accommodation.subtitle}
          </p>
        </motion.div>

        {/* ======= Mapping Contents ======= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {accommodations.map((accommodation, index) => (
            <motion.div
              key={accommodation.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px', amount: 0.3 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: 'easeOut',
              }}
              className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 h-full flex flex-col group hover:-translate-y-2 transition-transform duration-300"
            >
              {/* ======= Decorative elements ======= */}
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-blue-400/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 transition-colors duration-500 will-change-[background-color]" />
              <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-28 sm:h-28 bg-purple-500/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 transition-colors duration-500 will-change-[background-color]" />

              {/* ======= Image ======= */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <Image
                  src={accommodation.image}
                  alt={accommodation.name}
                  fill
                  loading={index < 3 ? 'eager' : 'lazy'}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-blue-600 font-bold text-xs shadow-lg">
                  {accommodation.type}
                </div>
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-gray-800 font-bold text-xs shadow-lg">
                  {accommodation.priceRange}
                </div>
              </div>

              {/* ======= Main Card Content ======= */}
              <div className="relative z-10 p-6 sm:p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-black-custom mb-2">
                      {accommodation.name}
                    </h3>
                  </div>
                  <div className="ml-4">
                    {renderStars(accommodation.rating)}
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {accommodation.description}
                </p>

                {/* ======= Amenities ======= */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {accommodation.amenities.map((amenity, idx) => (
                      <span
                        key={idx}
                        className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-3 py-1.5 rounded-full text-xs font-medium border border-blue-200 flex items-center gap-1.5"
                      >
                        {getAmenityIcon(amenity)}
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ======= Contact Info ======= */}
                <div className="space-y-3 pt-6 border-t border-gray-200 mt-auto">
                  <div className="flex items-start gap-3 text-gray-700 text-sm">
                    <MapPin
                      size={18}
                      className="text-blue-600 shrink-0 mt-0.5"
                    />
                    <div className="flex-1">
                      <span className="leading-relaxed">
                        {accommodation.address}
                      </span>
                      <p className="text-blue-600 text-xs font-medium mt-1">
                        📍 {accommodation.distanceFromCenter}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 text-sm">
                    <Phone size={18} className="text-blue-600 shrink-0" />
                    <Link
                      href={`tel:${accommodation.phone}`}
                      className="hover:text-blue-600 transition-colors font-medium"
                    >
                      {accommodation.phone}
                    </Link>
                  </div>
                  {accommodation.website && (
                    <div className="flex items-center gap-3 text-gray-700 text-sm">
                      <Globe size={18} className="text-blue-600 shrink-0" />
                      <Link
                        href={`https://${accommodation.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors font-medium hover:underline"
                      >
                        {accommodation.website}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
