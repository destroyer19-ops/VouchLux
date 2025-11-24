'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// --- Placeholder Components (to be implemented later) ---
const CoreValues = () => (
  <div style={{ backgroundColor: '#F9F9F9', color: '#1A1A1A' }} className="py-20 text-center">
    <h2 className="text-3xl font-bold" style={{ color: '#0B1A2D' }}>Our Core Values</h2>
    <p className="mt-4">Vision, Mission, and C.I.T.E.E.S values will go here.</p>
  </div>
);

const LeadershipCard = ({ name, title, quote, imageSrc }: { name: string; title: string; quote: string; imageSrc: string }) => (
  <div style={{ backgroundColor: '#0B1A2D', color: '#F9F9F9' }} className="rounded-lg shadow-lg p-6 text-center">
    <div className="flex justify-center mb-4">
      <Image src={imageSrc} alt={name} width={100} height={100} className="rounded-full object-cover" />
    </div>
    <h3 className="text-xl font-bold" style={{ color: '#D4AF37' }}>{name}</h3>
    <p className="text-sm">{title}</p>
    <blockquote className="italic text-sm mt-4" style={{ color: '#F9F9F9' }}>"{quote}"</blockquote>
  </div>
);
// --- End Placeholder Components ---

export default function AboutPage() {
  return (
    <main>
      {/* Hero-like section for About Us */}
      <motion.section
        className="relative h-[50vh] flex items-center justify-center"
        style={{ backgroundColor: '#0B1A2D', color: '#F9F9F9' }} // Midnight Blue background
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight" style={{ color: '#F9F9F9' }}>
            Where Quality Meets Promise
          </h1>
          <p className="text-lg md:text-xl mt-4" style={{ color: '#D4AF37' }}>Learn more about Vouchlux</p>
        </div>
      </motion.section>

      {/* The Vouchlux Story */}
      <motion.section
        style={{ backgroundColor: '#F9F9F9', color: '#1A1A1A' }} // Ivory background
        className="py-20 px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#0B1A2D' }}>The Vouchlux Story</h2>
          <div className="max-w-3xl mx-auto text-lg leading-relaxed text-center">
            <p className="mb-4">Founded with a bold vision to create a brand every real estate investor can trust, Vouchlux was born from years of expertise in real estate development and investment.</p>
            <p className="mb-4">We stepped in to deliver solutions where quality meets luxury and where promises meet performance.</p>
            <p className="mb-4">At Vouchlux, we believe a home is more than walls and roofs — it is a reflection of identity, security, and legacy. Our promise is to create luxury spaces that are timeless, functional, and intelligent, crafted with precision and an unwavering commitment to trust.</p>
            <p className="font-bold" style={{ color: '#D4AF37' }}>
                2019: The idea → 2020: Registration → 2024: Award → 2025: Expansion
            </p>
            {/* Placeholder for blueprint paper animation */}
          </div>
        </div>
      </motion.section>

      {/* Vision, Mission, and Core Values */}
      <CoreValues />

      {/* Leadership */}
      <motion.section
        style={{ backgroundColor: '#1A1A1A', color: '#F9F9F9' }} // Charcoal background
        className="py-20 px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#D4AF37' }}>Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <LeadershipCard
              name="David Osekhuemen"
              title="Founder & Chief Executive Officer"
              quote="Luxury and trust are not opposites — they're our standard."
              imageSrc="/media/visionary-david-osekhuemen.jpeg"
            />
            {/* Placeholders for other directors */}
            <LeadershipCard
              name="[Director Name]"
              title="[Director Title - e.g., Head of Projects]"
              quote="[Short philosophy/quote]"
              imageSrc="/placeholder-person.jpg"
            />
             <LeadershipCard
              name="[Director Name]"
              title="[Director Title - e.g., Legal Counsel]"
              quote="[Short philosophy/quote]"
              imageSrc="/placeholder-person.jpg"
            />
          </div>
        </div>
      </motion.section>

      {/* Regulatory & CSR */}
      <motion.section
        style={{ backgroundColor: '#F9F9F9', color: '#1A1A1A' }} // Ivory background
        className="py-20 px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12" style={{ color: '#0B1A2D' }}>Regulatory & Social Commitment</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            At Vouchlux, we place a premium on compliance with all regulatory and statutory measures governing property ownership and development in Nigeria.
            We are fully regulated and in compliance with Real estate developers association of Nigeria (REDAN), Lagos state Real estate regulations authority(LASERA), SCUML, etc.
          </p>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Through our “Build the Future” initiative, we've supported select primary schools in Lagos by donating school bags, books, and sandals to pupils.
          </p>
          {/* Placeholders for Logo carousel and CSR Gallery */}
        </div>
      </motion.section>
    </main>
  );
}
