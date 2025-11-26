'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AssetFinancingPage() {
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
            Asset-Backed Financing
          </h1>
          <p style={{ color: '#cea24a' }} className="text-lg md:text-xl">
            Unlock liquidity by leveraging the true value of your luxury assets.
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
            Vouchlux facilitates flexible loans and financing opportunities, allowing you to leverage your luxury assets as collateral. With transparent digital certification and AI-powered valuation, we provide a secure and efficient pathway to unlock liquidity from your high-value items without parting with ownership.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Access capital when you need it, backed by the verified worth of your luxury portfolio. Our streamlined process ensures confidentiality and fair terms, empowering you to make the most of your valuable possessions.
          </p>
          <div className="mt-12 text-center">
            <Link href="/contact" style={{ backgroundColor: '#3746d3', color: '#ffffff' }} className="font-bold px-8 py-3 rounded-md hover:bg-opacity-80 transition-colors duration-300">
              Explore Financing Options
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
