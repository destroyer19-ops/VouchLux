'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function MeetTheVisionary() {
  return (
    <motion.section
      style={{ backgroundColor: '#22266d', color: '#ffffff' }}
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <Image
            src="/media/visionary-david-osekhuemen.jpeg"
            alt="David Osekhuemen, Founder & CEO of Vouchlux"
            width={300}
            height={300}
            className="rounded-full object-cover aspect-square"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Meet the Visionary</h2>
          <blockquote style={{ color: '#cea24a', borderLeft: '4px solid #cea24a' }} className="text-2xl italic pl-6 mb-6">
            "Luxury and trust are not opposites — they're our standard."
          </blockquote>
          <p className="text-lg mb-6 font-bold">David Osekhuemen, Founder & CEO</p>
          <Link href="/about" style={{ backgroundColor: '#cea24a', color: '#22266d' }} className="font-bold px-8 py-3 rounded-md hover:bg-opacity-80 transition-colors duration-300">
            Meet Our Team
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
