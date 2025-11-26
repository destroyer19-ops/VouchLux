'use client';

import { motion } from 'framer-motion';

export default function TermsOfServicePage() {
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
            Terms of Service
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
          <h2 style={{ color: '#22266d' }} className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
          <p className="text-lg leading-relaxed mb-6">
            By accessing and using the Vouchlux website (the "Service"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>

          <h2 style={{ color: '#22266d' }} className="text-2xl font-bold mb-4">2. Description of Service</h2>
          <p className="text-lg leading-relaxed mb-6">
            Vouchlux provides a platform for luxury asset management, including digital certification, valuation, and marketplace services, utilizing blockchain and AI technologies.
          </p>

          <h2 style={{ color: '#22266d' }} className="text-2xl font-bold mb-4">3. User Obligations</h2>
          <p className="text-lg leading-relaxed mb-6">
            You agree to use the Service only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the Service. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within the Service.
          </p>

          <h2 style={{ color: '#22266d' }} className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
          <p className="text-lg leading-relaxed mb-6">
            All content included on the Service, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the Service, is the property of Vouchlux or its suppliers and protected by copyright and other laws that protect intellectual property and proprietary rights.
          </p>

          <h2 style={{ color: '#22266d' }} className="text-2xl font-bold mb-4">5. Disclaimer of Warranties</h2>
          <p className="text-lg leading-relaxed mb-6">
            The Service is provided on an "as is" and "as available" basis. Vouchlux makes no representations or warranties of any kind, express or implied, as to the operation of the Service or the information, content, materials, or products included on the Service.
          </p>

          <h2 style={{ color: '#22266d' }} className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
          <p className="text-lg leading-relaxed mb-6">
            Vouchlux will not be liable for any damages of any kind arising from the use of this Service, including, but not limited to direct, indirect, incidental, punitive, and consequential damages.
          </p>

          <h2 style={{ color: '#22266d' }} className="text-2xl font-bold mb-4">7. Governing Law</h2>
          <p className="text-lg leading-relaxed mb-6">
            These terms and conditions are governed by and construed in accordance with the laws of Nigeria and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>

          <p className="text-sm leading-relaxed mt-12 text-center" style={{ color: '#6b7280' }}>
            Last Revised: November 25, 2025
          </p>
        </div>
      </motion.section>
    </main>
  );
}
