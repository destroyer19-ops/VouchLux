'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main>
      {/* Contact Hero/Intro Section */}
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
            Get in Touch
          </h1>
          <p style={{ color: '#cea24a' }} className="text-lg md:text-xl">
            We'd love to hear from you. Reach out with any inquiries.
          </p>
        </div>
      </motion.section>

      {/* Contact Form and Info Section */}
      <motion.section
        style={{ backgroundColor: '#ffffff', color: '#22266d' }}
        className="py-20 px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 style={{ color: '#22266d' }} className="text-3xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  style={{ borderColor: '#22266d' }}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3746d3]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  style={{ borderColor: '#22266d' }}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3746d3]"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  style={{ borderColor: '#22266d' }}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3746d3]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  style={{ borderColor: '#22266d' }}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3746d3]"
                ></textarea>
              </div>
              <button
                type="submit"
                style={{ backgroundColor: '#3746d3', color: '#ffffff' }}
                className="font-bold px-8 py-3 rounded-md hover:bg-opacity-80 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 style={{ color: '#22266d' }} className="text-3xl font-bold mb-6">Our Details</h2>
            <p className="text-lg mb-4">Feel free to reach out to us using the contact details below, or visit our office.</p>
            <div className="space-y-4">
              <p><strong>Email:</strong> info@vouchlux.com</p>
              <p><strong>Phone:</strong> +234 7030-779-269</p>
              <p><strong>Address:</strong> 123 Luxury Lane, Victoria Island, Lagos, Nigeria</p>
            </div>
            <div className="mt-8">
              <h3 style={{ color: '#22266d' }} className="text-xl font-bold mb-4">Find Us on the Map</h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.675620958156!2d3.424367314770389!3d6.43573549534571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b1a8f9f8f9b%3A0x2f8c8b8c8b8c8b8c!2sVictoria%20Island%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1678888888888!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
