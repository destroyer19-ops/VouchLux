'use client';

import { motion } from 'framer-motion';
import { Variants } from "framer-motion";

const projectUpdates = [
  "Project Ascenda: 75% Complete",
  "Project Prive: 50% Complete",
  "Project Solace: 90% Complete",
  "Project Horizon: 30% Complete"
];

const duplicatedUpdates = [...projectUpdates, ...projectUpdates];


const marqueeVariants: Variants = {
  animate: {
    x: [0, -1035],                    // adjust your number as needed
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop" as const,   // ← this is the magic line
        duration: 50,                  // your duration
        ease: "linear" as const,
      },
    },
  },
};

export default function LiveProjectsTicker() {
  return (
    <section style={{ backgroundColor: '#D4AF37', color: '#0B1A2D' }} className="py-2 overflow-hidden">
      <div className="w-full flex">
        <motion.div
          className="flex"
          variants={marqueeVariants}
          animate="animate"
        >
          {duplicatedUpdates.map((text, index) => (
            <div key={index} className="flex-shrink-0 flex items-center whitespace-nowrap">
              <span style={{ color: '#F9F9F9' }} className="mx-4">●</span>
              <span className="font-semibold text-base tracking-wide">{text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
