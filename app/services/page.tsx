'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiFileText, FiCpu, FiAlertCircle, FiDollarSign, FiGlobe, FiShield, FiShare2 } from 'react-icons/fi';

const servicesData = [
  {
    title: "Digital Certification & Provenance",
    description: "Secure digital certificates for luxury items, recording ownership history and authenticity on blockchain.",
    icon: <FiFileText size={40} style={{ color: '#ffffff' }} />,
    link: "/services/digital-certification"
  },
  {
    title: "AI-Powered Valuation",
    description: "Accurate, real-time valuations of luxury assets using advanced artificial intelligence.",
    icon: <FiCpu size={40} style={{ color: '#ffffff' }} />,
    link: "/services/ai-valuation"
  },
  {
    title: "Fraud Detection",
    description: "AI-driven tools to identify counterfeit goods and fraudulent claims in the luxury market.",
    icon: <FiAlertCircle size={40} style={{ color: '#ffffff' }} />,
    link: "/services/fraud-detection"
  },
  {
    title: "Asset-Backed Financing",
    description: "Facilitate loans and financing opportunities using your luxury assets as collateral.",
    icon: <FiDollarSign size={40} style={{ color: '#ffffff' }} />,
    link: "/services/asset-financing"
  },
  {
    title: "Global Marketplace",
    description: "A secure and transparent platform for buying, selling, and trading luxury assets worldwide.",
    icon: <FiGlobe size={40} style={{ color: '#ffffff' }} />,
    link: "/services/global-marketplace"
  },
  {
    title: "Insurance Solutions",
    description: "Streamlined and verified insurance processes tailored for high-value luxury items.",
    icon: <FiShield size={40} style={{ color: '#ffffff' }} />,
    link: "/services/insurance-solutions"
  },
  {
    title: "Fractional Ownership",
    description: "Unlock shared ownership opportunities for high-value assets, making luxury more accessible.",
    icon: <FiShare2 size={40} style={{ color: '#ffffff' }} />,
    link: "/services/fractional-ownership"
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Services Hero/Intro Section */}
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
            Our Expertise in Luxury Asset Management
          </h1>
          <p style={{ color: '#cea24a' }} className="text-lg md:text-xl">
            Leveraging Blockchain and AI for unparalleled transparency, security, and liquidity.
          </p>
        </div>
      </motion.section>

      {/* Services Cards Section */}
      <motion.section
        style={{ backgroundColor: '#ffffff', color: '#22266d' }}
        className="py-20 px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="container mx-auto">
          <h2 style={{ color: '#22266d' }} className="text-3xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <div key={index} style={{ backgroundColor: '#22266d', color: '#ffffff' }} className="p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
                <div style={{ backgroundColor: '#cea24a' }} className="w-20 h-20 rounded-full flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-base mb-4">{service.description}</p>
                <Link href={service.link} style={{ color: '#cea24a' }} className="font-bold hover:underline mt-auto">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}

