'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiDollarSign, FiGlobe, FiShare2, FiShield, FiCpu } from 'react-icons/fi';

export default function InvestmentPortalPage() {
  return (
    <main>
      {/* Investment Portal Hero/Intro Section */}
      <motion.section
        className="relative h-[50vh] flex items-center justify-center text-center"
        style={{ backgroundColor: '#22266d', color: '#ffffff' }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="px-6">
          <h1 style={{ color: '#ffffff' }} className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Unlock the Future of Luxury Investment
          </h1>
          <p style={{ color: '#cea24a' }} className="text-lg md:text-xl">
            Transparency, Security, and Liquidity for your high-value assets.
          </p>
          <div className="mt-8">
            <Link href="/contact" style={{ backgroundColor: '#3746d3', color: '#ffffff' }} className="font-bold px-8 py-3 rounded-md hover:bg-opacity-80 transition-colors duration-300">
              Connect with an Advisor
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Key Investment Avenues Section */}
      <motion.section
        style={{ backgroundColor: '#ffffff', color: '#22266d' }}
        className="py-20 px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="container mx-auto">
          <h2 style={{ color: '#22266d' }} className="text-3xl font-bold text-center mb-12">Your Investment Avenues</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div style={{ backgroundColor: '#f0f0f0' }} className="p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <FiDollarSign size={50} style={{ color: '#22266d' }} className="mb-4" />
              <h3 className="text-xl font-bold mb-2">Asset-Backed Financing</h3>
              <p className="text-base mb-4">Leverage your luxury assets to unlock liquidity and secure flexible financing solutions.</p>
              <Link href="/services/asset-financing" style={{ color: '#cea24a' }} className="font-bold hover:underline mt-auto">
                Learn More →
              </Link>
            </div>
            <div style={{ backgroundColor: '#f0f0f0' }} className="p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <FiGlobe size={50} style={{ color: '#22266d' }} className="mb-4" />
              <h3 className="text-xl font-bold mb-2">Global Marketplace</h3>
              <p className="text-base mb-4">Access a secure and transparent platform to buy, sell, and trade authenticated luxury assets worldwide.</p>
              <Link href="/services/global-marketplace" style={{ color: '#cea24a' }} className="font-bold hover:underline mt-auto">
                Explore Marketplace →
              </Link>
            </div>
            <div style={{ backgroundColor: '#f0f0f0' }} className="p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <FiShare2 size={50} style={{ color: '#22266d' }} className="mb-4" />
              <h3 className="text-xl font-bold mb-2">Fractional Ownership</h3>
              <p className="text-base mb-4">Invest in exclusive luxury assets with shared equity models, diversifying your portfolio with flexibility.</p>
              <Link href="/services/fractional-ownership" style={{ color: '#cea24a' }} className="font-bold hover:underline mt-auto">
                Discover Opportunities →
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Why Invest with Vouchlux Section */}
      <motion.section
        style={{ backgroundColor: '#22266d', color: '#ffffff' }}
        className="py-20 px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h2 style={{ color: '#cea24a' }} className="text-3xl font-bold mb-6">Why Invest with Vouchlux?</h2>
          <p className="text-lg leading-relaxed mb-4">
            Vouchlux is at the forefront of luxury asset management, blending unparalleled expertise with cutting-edge technology. Our platform offers:
          </p>
          <ul className="list-disc list-inside text-left mx-auto max-w-2xl text-lg space-y-2">
            <li><strong>Transparency:</strong> Blockchain technology ensures immutable records of ownership and provenance.</li>
            <li><strong>Security:</strong> AI-driven fraud detection and secure transaction protocols protect your investments.</li>
            <li><strong>Liquidity:</strong> A global marketplace and asset-backed financing options provide flexible access to capital.</li>
            <li><strong>Precision:</strong> AI-powered valuation gives you real-time, accurate insights into asset value.</li>
          </ul>
          <div className="mt-12">
            <Link href="/about" style={{ backgroundColor: '#cea24a', color: '#22266d' }} className="font-bold px-8 py-3 rounded-md hover:bg-opacity-80 transition-colors duration-300">
              Learn More About Us
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
