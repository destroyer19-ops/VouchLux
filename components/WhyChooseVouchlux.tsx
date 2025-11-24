'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiHome, FiCheckSquare, FiUsers } from 'react-icons/fi'; // Import icons

// Placeholder for an icon
const FeatureIcon = ({ children }: { children: React.ReactNode }) => (
  <div style={{ backgroundColor: '#D4AF37', color: '#0B1A2D' }} className="rounded-full w-16 h-16 flex items-center justify-center mb-4">
    {children}
  </div>
);

const Feature = ({ title, children, icon }: { title: string; children: React.ReactNode; icon: React.ReactNode }) => (
  <div className="flex flex-col items-center text-center">
    <FeatureIcon>{icon}</FeatureIcon>
    <h3 style={{ color: '#1A1A1A' }} className="text-xl font-bold mb-2">{title}</h3> {/* text-charcoal */}
    <p style={{ color: '#1A1A1A' }} className="max-w-xs">{children}</p> {/* text-charcoal */}
  </div>
);

export default function WhyChooseVouchlux() {
  return (
    <motion.section
      style={{ backgroundColor: '#F9F9F9' }} // bg-ivory
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 style={{ color: '#0B1A2D' }} className="text-3xl font-bold mb-4">Why Choose Vouchlux</h2> {/* text-midnight-blue */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <Feature title="Functional Architecture" icon={<FiHome size={28} />}>
            We build homes that work beautifully.
          </Feature>
          <Feature title="Verified Investments" icon={<FiCheckSquare size={28} />}>
            Compliance and documentation at every stage.
          </Feature>
          <Feature title="Personalized Experience" icon={<FiUsers size={28} />}>
            We treat every client like family.
          </Feature>
        </div>
        <div className="text-center mt-12">
          <Link href="/about" style={{ color: '#D4AF37' }} className="font-bold hover:underline"> {/* text-gold */}
            Learn More About Us →
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
