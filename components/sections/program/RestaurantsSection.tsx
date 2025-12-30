'use client';

import { DictAndLocaleProps } from '@/types';
import { motion } from 'framer-motion';
import { MapPin, Star, Phone, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function RestaurantsSection({
  dict,
  locale,
}: DictAndLocaleProps) {
  const restaurants = dict.program.restaurant.restaurants;

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
            {dict.program.restaurant.title}
          </h2>
          <p className="text-black-custom">
            {dict.program.restaurant.subtitle}
          </p>
        </motion.div>

        {/* ======= Mapping Contents ======= */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {restaurants.map((restaurant, index) => (
            <motion.div
              key={restaurant.id}
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
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-yellow-400/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 transition-colors duration-500 will-change-[background-color]" />
              <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-28 sm:h-28 bg-cyan-500/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 transition-colors duration-500 will-change-[background-color]" />

              {/* ======= Image ======= */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <Image
                  src={restaurant.image}
                  alt={restaurant.name}
                  fill
                  loading={index < 2 ? 'eager' : 'lazy'}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-yellow-500 font-bold text-sm shadow-lg">
                  {restaurant.priceLevel}
                </div>
              </div>

              {/* ======= Main Card Content ======= */}
              <div className="relative z-10 p-6 sm:p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-black-custom mb-2">
                      {restaurant.name}
                    </h3>
                    <h4 className="text-cyan-600 font-medium">
                      {restaurant.cuisine}
                    </h4>
                  </div>
                  <div className="ml-4">{renderStars(restaurant.rating)}</div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {restaurant.description}
                </p>

                {/* ======= Specialties Tag ======= */}
                <div className="mb-6">
                  <p className="text-black-custom font-semibold text-sm uppercase tracking-wide mb-3">
                    {dict.program.restaurant.specialties}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {restaurant.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 px-3 py-1.5 rounded-full text-xs font-medium border border-cyan-200"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ======= Contact Info ======= */}
                <div className="space-y-3 pt-6 border-t border-gray-200 mt-auto">
                  <div className="flex items-start gap-3 text-gray-700 text-sm">
                    <MapPin
                      size={18}
                      className="text-cyan-600 shrink-0 mt-0.5"
                    />
                    <span className="leading-relaxed">
                      {restaurant.address}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 text-sm">
                    <Phone size={18} className="text-cyan-600 shrink-0" />
                    <Link
                      href={`tel:${restaurant.phone}`}
                      className="hover:text-cyan-600 transition-colors font-medium"
                    >
                      {restaurant.phone}
                    </Link>
                  </div>
                  {restaurant.website && (
                    <div className="flex items-center gap-3 text-gray-700 text-sm">
                      <Globe size={18} className="text-cyan-600 shrink-0" />
                      <Link
                        href={`https://${restaurant.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-600 transition-colors font-medium hover:underline"
                      >
                        {restaurant.website}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ======= Advices ======= */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-gray-600 text-sm sm:text-base mt-12 sm:mt-16 max-w-2xl mx-auto"
        >
          {dict.program.restaurant.advice}
        </motion.p>
      </div>
    </section>
  );
}
