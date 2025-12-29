'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { DictAndLocaleProps } from '@/types';

export default function ContactForm({ dict }: DictAndLocaleProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));
    const success = Math.random() > 0.05;

    if (success) {
      toast.success(dict.contacts.form.success, {
        duration: 4000,
        position: 'top-center',
        style: {
          background: '#10b981',
          color: '#fff',
          padding: '16px',
          borderRadius: '10px',
        },
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      toast.error(dict.contacts.form.error, {
        duration: 4000,
        position: 'top-center',
        style: {
          background: '#ef4444',
          color: '#fff',
          padding: '16px',
          borderRadius: '10px',
        },
      });
    }

    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
      className="relative bg-linear-to-br from-white via-white to-gray-50 rounded-3xl shadow-2xl p-8 sm:p-10 h-full overflow-hidden border border-gray-100"
    >
      {/* ======= Decorative elements ======= */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-primary-custom/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-custom/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10">
        <h3 className="mb-6">{dict.contacts.form.title}</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* ======= Nome/Cognome ======= */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-black-custom mb-2"
            >
              {dict.contacts.form.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition"
            />
          </div>

          {/* ======= Email ======= */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-black-custom mb-2"
            >
              {dict.contacts.form.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2  focus:border-transparent transition"
            />
          </div>

          {/* ======= Oggetto ======= */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-semibold text-black-custom mb-2"
            >
              {dict.contacts.form.subject}
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition"
            />
          </div>

          {/* ======= Messaggio ======= */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-black-custom mb-2"
            >
              {dict.contacts.form.message}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition resize-none"
            />
          </div>

          {/* ======= Submit Button ======= */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary-custom text-white font-semibold py-4 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting
              ? dict.contacts.form.sending
              : dict.contacts.form.send}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}
