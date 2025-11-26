'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FooterCTA() {
  return (
    <motion.section
      style={{ backgroundColor: '#ffffff' }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 style={{ color: '#22266d' }} className="text-3xl font-bold mb-4">
          Your dream home is waiting — Let's make it yours.
        </h2>
        <div className="flex justify-center gap-4 mt-8">
          <Link href="/contact" style={{ backgroundColor: '#3746d3', color: '#ffffff' }} className="font-bold px-8 py-3 rounded-md hover:bg-opacity-80 transition-colors duration-300">
            Book Inspection
          </Link>
          <Link href="/investment-portal" style={{ backgroundColor: '#cea24a', color: '#22266d' }} className="font-bold px-8 py-3 rounded-md hover:bg-opacity-80 transition-colors duration-300">
            Invest Now
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
