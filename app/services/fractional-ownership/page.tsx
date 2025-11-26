'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FractionalOwnershipPage() {
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
            Fractional Ownership
          </h1>
          <p style={{ color: '#cea24a' }} className="text-lg md:text-xl">
            Experience luxury ownership, made accessible and secure through shared equity.
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
            Unlock shared ownership opportunities for high-value assets, making luxury more accessible and democratic. Vouchlux facilitates secure and transparent fractional ownership models for assets like supercars, art, and real estate.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Through blockchain-verified digital shares, you can invest in and enjoy a portion of exclusive luxury items, diversifying your portfolio and enhancing your lifestyle with unparalleled flexibility. Experience the benefits of luxury asset ownership without the full capital commitment.
          </p>
          <div className="mt-12 text-center">
            <Link href="/contact" style={{ backgroundColor: '#3746d3', color: '#ffffff' }} className="font-bold px-8 py-3 rounded-md hover:bg-opacity-80 transition-colors duration-300">
              Explore Fractional Opportunities
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
