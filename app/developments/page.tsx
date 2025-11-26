'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const projectsData = [
  {
    name: "Ascenda by VouchLux",
    location: "Ajah, Lagos",
    description: "3-Bedroom Smart Terraces, a perfect blend of modern architecture and intelligent living.",
    media: "/media/project-walkthrough-1.mp4",
    mediaType: "video",
    link: "/developments/ascenda"
  },
  {
    name: "The Prive Residences",
    location: "Ikoyi, Lagos",
    description: "Exclusive 4-Bedroom Signature Residences, offering unparalleled luxury and privacy.",
    media: "/placeholder-project-prive.jpg", // Placeholder image
    mediaType: "image",
    link: "/developments/prive"
  },
  {
    name: "Solace Apartments",
    location: "Eko Atlantic, Lagos",
    description: "Elegant 2-Bedroom Luxury Apartments with breathtaking ocean views and world-class amenities.",
    media: "/placeholder-project-solace.jpg", // Placeholder image
    mediaType: "image",
    link: "/developments/solace"
  },
  {
    name: "Horizon Towers",
    location: "Victoria Island, Lagos",
    description: "Premium office and residential spaces designed for the discerning professional.",
    media: "/placeholder-project-horizon.jpg", // Placeholder image
    mediaType: "image",
    link: "/developments/horizon"
  }
];

export default function DevelopmentsPage() {
  return (
    <main>
      {/* Developments Hero/Intro Section */}
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
            Our Portfolio
          </h1>
          <p style={{ color: '#cea24a' }} className="text-lg md:text-xl">
            Experience our commitment to luxury, functionality, and intelligent design.
          </p>
        </div>
      </motion.section>

      {/* Project Showcase Section */}
      <motion.section
        style={{ backgroundColor: '#ffffff', color: '#22266d' }}
        className="py-20 px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="container mx-auto">
          <h2 style={{ color: '#22266d' }} className="text-3xl font-bold text-center mb-12">Featured Developments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <div key={index} style={{ backgroundColor: '#ffffff', color: '#22266d' }} className="p-0 rounded-lg shadow-lg overflow-hidden flex flex-col">
                <div className="h-60 w-full relative">
                  {project.mediaType === 'video' ? (
                    <video autoPlay loop muted playsInline className="h-full w-full object-cover">
                      <source src={project.media} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={project.media}
                      alt={project.name}
                      layout="fill"
                      objectFit="cover"
                      priority={index < 3} // Prioritize LCP images
                    />
                  )}
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-sm" style={{ color: '#6b7280' }}>{project.location}</p>
                  <p className="text-base mt-2">{project.description}</p>
                </div>
                <div className="p-6 pt-0 text-center">
                  <Link href={project.link} style={{ backgroundColor: '#3746d3', color: '#ffffff' }} className="font-bold px-8 py-3 rounded-md hover:bg-opacity-80 transition-colors duration-300 inline-block w-full">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}
