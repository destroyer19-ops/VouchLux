'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function DigitalCertificationPage() {
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
            Digital Certification & Provenance
          </h1>
          <p style={{ color: '#cea24a' }} className="text-lg md:text-xl">
            Elevating trust and authenticity for your luxury assets.
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
            Vouchlux provides secure digital certificates for luxury items, meticulously recording their ownership history and authenticity on an immutable blockchain. We leverage cutting-edge technology to offer unparalleled transparency, ensuring every asset's journey is fully traceable and verified.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            This revolutionary approach effectively eliminates counterfeits and provides irrefutable proof of origin and ownership, safeguarding your valuable investments. With Vouchlux, you gain absolute confidence in the authenticity and provenance of your most cherished luxury assets.
          </p>
          <div className="mt-12 text-center">
            <Link href="/contact" style={{ backgroundColor: '#3746d3', color: '#ffffff' }} className="font-bold px-8 py-3 rounded-md hover:bg-opacity-80 transition-colors duration-300">
              Get Certified Today
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
