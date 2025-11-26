'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AiValuationPage() {
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
            AI-Powered Valuation
          </h1>
          <p style={{ color: '#cea24a' }} className="text-lg md:text-xl">
            Precise, real-time insights into your luxury assets' true worth.
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
            Vouchlux delivers accurate, real-time valuations of luxury assets using advanced artificial intelligence. Our proprietary AI models analyze vast datasets of market trends, historical performance, and intricate asset details to provide you with precise insights into your investments.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            This empowers you with transparent and reliable value assessments, essential for buying, selling, insuring, or leveraging your luxury portfolio. Gain confidence in every transaction with Vouchlux's cutting-edge valuation technology.
          </p>
          <div className="mt-12 text-center">
            <Link href="/contact" style={{ backgroundColor: '#3746d3', color: '#ffffff' }} className="font-bold px-8 py-3 rounded-md hover:bg-opacity-80 transition-colors duration-300">
              Get Your Valuation
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
