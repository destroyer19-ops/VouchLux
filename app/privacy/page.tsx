'use client';

import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
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
            Privacy Policy
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
          <h2 style={{ color: '#22266d' }} className="text-2xl font-bold mb-4">1. Introduction</h2>
          <p className="text-lg leading-relaxed mb-6">
            Welcome to Vouchlux. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
          </p>

          <h2 style={{ color: '#22266d' }} className="text-2xl font-bold mb-4">2. Information We Collect</h2>
          <p className="text-lg leading-relaxed mb-2">We may collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our services, when you participate in activities on the website, or otherwise when you contact us.</p>
          <ul className="list-disc list-inside text-lg leading-relaxed mb-6">
            <li>Personal Data: Name, email address, phone number, and contact preferences.</li>
            <li>Usage Data: Information about how you access and use our website, such as your IP address, browser type, and operating system.</li>
          </ul>

          <h2 style={{ color: '#22266d' }} className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
          <p className="text-lg leading-relaxed mb-6">
            We use personal information collected via our website for a variety of business purposes described below:
          </p>
          <ul className="list-disc list-inside text-lg leading-relaxed mb-6">
            <li>To facilitate account creation and logon process.</li>
            <li>To send you marketing and promotional communications.</li>
            <li>To respond to your inquiries and offer support.</li>
            <li>To send you administrative information.</li>
          </ul>

          <h2 style={{ color: '#22266d' }} className="text-2xl font-bold mb-4">4. Sharing Your Information</h2>
          <p className="text-lg leading-relaxed mb-6">
            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
          </p>

          <h2 style={{ color: '#22266d' }} className="text-2xl font-bold mb-4">5. Your Privacy Rights</h2>
          <p className="text-lg leading-relaxed mb-6">
            You have certain rights regarding your personal information, including the right to access, correct, or delete your data. You may also object to processing of your personal information.
          </p>

          <h2 style={{ color: '#22266d' }} className="text-2xl font-bold mb-4">6. Updates to This Policy</h2>
          <p className="text-lg leading-relaxed mb-6">
            We may update this privacy policy from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible.
          </p>

          <p className="text-sm leading-relaxed mt-12 text-center" style={{ color: '#6b7280' }}>
            Last Revised: November 25, 2025
          </p>
        </div>
      </motion.section>
    </main>
  );
}
