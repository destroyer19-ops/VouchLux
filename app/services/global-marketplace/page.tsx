'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function GlobalMarketplacePage() {
  return (
    <main>
      {/* Hero Section */}
      <motion.section
        className="relative h-[40vh] flex items-center justify-center text-center"
        style={{ backgroundColor: '#22266d', color: '#ffffff' }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="px-6">
          <h1 style={{ color: '#ffffff' }} className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Global Marketplace
          </h1>
          <p style={{ color: '#cea24a' }} className="text-lg md:text-xl">
            Connect with a discerning global network for buying, selling, and trading luxury assets.
          </p>
        </div>
      </motion.section>

      {/* Content Section */}
      <motion.section
        style={{ backgroundColor: '#ffffff', color: '#22266d' }}
        className="py-20 px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="container mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed mb-4">
            Discover a secure and transparent platform designed for buying, selling, and trading luxury assets worldwide. Vouchlux's Global Marketplace connects discerning buyers and sellers, offering authenticated listings backed by digital certification and AI valuation.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Experience seamless, secure transactions in a trusted environment, expanding your reach and opportunities within the luxury market. Our platform ensures authenticity and fair value, empowering confident transactions across the globe.
          </p>
          <div className="mt-12 text-center">
            <Link href="/contact" style={{ backgroundColor: '#3746d3', color: '#ffffff' }} className="font-bold px-8 py-3 rounded-md hover:bg-opacity-80 transition-colors duration-300">
              Discover the Marketplace
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
