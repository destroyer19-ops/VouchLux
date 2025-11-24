'use client';

import { motion } from 'framer-motion';
import { FiTarget, FiZap, FiAward, FiShield, FiUsers, FiGlobe } from 'react-icons/fi'; // Example icons

const coreValuesData = [
  {
    icon: <FiShield size={36} />,
    title: "Compliance",
    description: "We follow due process and regulatory measures to safeguard every client's investment.",
    animationPrompt: "gavel animation"
  },
  {
    icon: <FiZap size={36} />,
    title: "Innovation",
    description: "Smart, future-ready living is built into our DNA.",
    animationPrompt: "lightbulb flicker"
  },
  {
    icon: <FiTarget size={36} />,
    title: "Trust",
    description: "Our word is our bond, our projects our proof.",
    animationPrompt: "handshake animation"
  },
  {
    icon: <FiGlobe size={36} />,
    title: "Exclusivity",
    description: "We create homes for those who value distinction.",
    animationPrompt: "spotlight effect"
  },
  {
    icon: <FiAward size={36} />,
    title: "Excellence",
    description: "Every detail is designed to inspire confidence.",
    animationPrompt: "trophy shimmer"
  },
  {
    icon: <FiUsers size={36} />,
    title: "Sustainability",
    description: "Our legacy is one that future generations can inherit.",
    animationPrompt: "growing plant animation"
  },
];

export default function CoreValues() {
  return (
    <motion.section
      style={{ backgroundColor: '#F9F9F9', color: '#1A1A1A' }} // Ivory background
      className="py-20 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#0B1A2D' }}>Our Core Values (C.I.T.E.E.S)</h2>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          At Vouchlux, we stand for QUALITY, EXCLUSIVITY, and the ASSURANCE that every Nigerian deserves a dignified home.
          Our values guide us in creating luxury spaces that are timeless, functional, and intelligent.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValuesData.map((value, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg shadow-md"
              style={{ backgroundColor: '#0B1A2D', color: '#F9F9F9' }} // Midnight Blue card background
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }} // Hover animation
            >
              <div className="mb-4" style={{ color: '#D4AF37' }}>{value.icon}</div> {/* Gold icon */}
              <h3 className="text-xl font-bold mb-2" style={{ color: '#D4AF37' }}>{value.title}</h3> {/* Gold title */}
              <p className="text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
