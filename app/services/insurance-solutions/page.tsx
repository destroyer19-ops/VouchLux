'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function InsuranceSolutionsPage() {
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
            Insurance Solutions
          </h1>
          <p style={{ color: '#cea24a' }} className="text-lg md:text-xl">
            Streamlined and verified insurance for your irreplaceable luxury items.
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
            Vouchlux simplifies and secures the insurance process for your high-value luxury items. Leveraging our digital certification and transparent provenance records, we provide verified documentation that streamlines underwriting and claims, ensuring fair and accurate coverage.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Protect your cherished assets with confidence, knowing their true value and authenticity are immutably documented. Our solutions offer peace of mind, safeguarding your investments against unforeseen circumstances.
          </p>
          <div className="mt-12 text-center">
            <Link href="/contact" style={{ backgroundColor: '#3746d3', color: '#ffffff' }} className="font-bold px-8 py-3 rounded-md hover:bg-opacity-80 transition-colors duration-300">
              Protect Your Assets
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
