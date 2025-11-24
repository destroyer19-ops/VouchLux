'use client';

import { motion } from 'framer-motion';

const highlights = [
  "N1.2B Sales Projection",
  "36% ROI",
  "16-Month Cycle",
  "7 Terraces + BQ",
  "Ajah-Lagos"
];

// Duplicate the array to create a seamless loop
const duplicatedHighlights = [...highlights, ...highlights];

const marqueeVariants = {
  animate: {
    x: [0, -1005], // Adjust this value based on the width of your content
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20, // Adjust duration for speed
        ease: "linear",
      },
    },
  },
};

export default function InvestmentStrip() {
  return (
    <section className="bg-midnight-blue text-ivory py-4 overflow-hidden">
      <div className="w-full flex">
        <motion.div
          className="flex"
          variants={marqueeVariants}
          animate="animate"
        >
          {duplicatedHighlights.map((text, index) => (
            <div key={index} className="flex-shrink-0 flex items-center whitespace-nowrap">
              <span className="text-gold mx-4">◆</span>
              <span className="font-bold text-lg tracking-wider">{text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
