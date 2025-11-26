'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FraudDetectionPage() {
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
            Fraud Detection
          </h1>
          <p style={{ color: '#cea24a' }} className="text-lg md:text-xl">
            Safeguarding your luxury assets with cutting-edge AI-driven security.
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
            Protect your valuable luxury assets with Vouchlux's AI-driven fraud detection tools. Our sophisticated algorithms analyze digital certificates and asset data points to identify potential counterfeit goods, fraudulent claims, and suspicious transaction patterns within the luxury market.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            This proactive security measure ensures the integrity of your investments and fosters a trustworthy environment for all luxury transactions. With Vouchlux, you can trade and own luxury assets with unparalleled peace of mind.
          </p>
          <div className="mt-12 text-center">
            <Link href="/contact" style={{ backgroundColor: '#3746d3', color: '#ffffff' }} className="font-bold px-8 py-3 rounded-md hover:bg-opacity-80 transition-colors duration-300">
              Secure Your Assets
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
