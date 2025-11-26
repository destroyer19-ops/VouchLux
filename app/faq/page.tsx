'use client';

import { motion } from 'framer-motion';

export default function FaqPage() {
  return (
    <main>
      {/* Hero Section */}
      <motion.section
        className="relative h-[30vh] flex items-center justify-center text-center"
        style={{ backgroundColor: '#22266d', color: '#ffffff' }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="px-6">
          <h1 style={{ color: '#ffffff' }} className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Frequently Asked Questions
          </h1>
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
          <h2 style={{ color: '#22266d' }} className="text-2xl font-bold mb-4">General Questions</h2>
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">What is Vouchlux?</h3>
              <p className="text-lg leading-relaxed">
                Vouchlux is a leading platform dedicated to luxury asset management, leveraging advanced blockchain and AI technologies to bring unparalleled transparency, security, and liquidity to the global luxury market.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">What kind of assets do you handle?</h3>
              <p className="text-lg leading-relaxed">
                We specialize in a wide range of high-value luxury assets including watches, jewelry, art, real estate, supercars, and yachts.
              </p>
            </div>
          </div>

          <h2 style={{ color: '#22266d' }} className="text-2xl font-bold mb-4">Technology & Security</h2>
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">How does blockchain technology help?</h3>
              <p className="text-lg leading-relaxed">
                Blockchain provides immutable records for digital certification and provenance, ensuring absolute authenticity, transparent ownership history, and fraud prevention for all luxury items managed on our platform.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">How does AI contribute to your services?</h3>
              <p className="text-lg leading-relaxed">
                AI powers our real-time asset valuation, providing precise and accurate market insights. It also plays a crucial role in advanced fraud detection, identifying counterfeits and suspicious activities.
              </p>
            </div>
          </div>

          <h2 style={{ color: '#22266d' }} className="text-2xl font-bold mb-4">Services & Investment</h2>
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Do you offer financing options?</h3>
              <p className="text-lg leading-relaxed">
                Yes, we facilitate asset-backed financing, allowing you to unlock liquidity from your luxury assets using them as collateral, all through a secure and transparent process.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">What is fractional ownership?</h3>
              <p className="text-lg leading-relaxed">
                Fractional ownership allows multiple individuals to collectively own a share of a high-value luxury asset. Vouchlux facilitates this, making luxury investments more accessible and flexible.
              </p>
            </div>
          </div>

          <p className="text-sm leading-relaxed mt-12 text-center" style={{ color: '#6b7280' }}>
            Last Updated: November 25, 2025
          </p>
        </div>
      </motion.section>
    </main>
  );
}
