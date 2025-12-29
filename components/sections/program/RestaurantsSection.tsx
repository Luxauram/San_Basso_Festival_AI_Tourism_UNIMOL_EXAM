'use client';

import { restaurants } from '@/data';
import { DictAndLocaleProps } from '@/types';
import { motion } from 'framer-motion';
import { MapPin, Star, Phone, Globe } from 'lucide-react';
import Image from 'next/image';

export default function RestaurantsSection({
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
          <h2 className="text-5xl md:text-6xl font-black mb-4 uppercase bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Dove Mangiare
          </h2>
          <p className="text-xl text-gray-400">
            I migliori ristoranti tipici di Termoli
          </p>
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
                <Image
                  src={restaurant.image}
                  alt={restaurant.name}
                  fill
                  priority
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
