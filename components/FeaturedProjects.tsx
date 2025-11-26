'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const projects = [
  {
    name: "Ascenda by VouchLux",
    location: "Ajah, Lagos",
    description: "3-Bedroom Smart Terraces",
    delivery: 2026,
    roi: 36,
    media: "/media/project-walkthrough-1.mp4",
    mediaType: "video"
  },
  {
    name: "The Prive",
    location: "Ikoyi, Lagos",
    description: "4-Bedroom Signature Residences",
    delivery: 2025,
    roi: 42,
    media: "/project-prive.jpg",
    mediaType: "image"
  },
  {
    name: "Solace Apartments",
    location: "Eko Atlantic, Lagos",
    description: "2-Bedroom Luxury Apartments",
    delivery: 2027,
    roi: 38,
    media: "/project-solace.jpg",
    mediaType: "image"
  }
];

export default function FeaturedProjects() {
  return (
    <motion.section
      style={{ backgroundColor: '#ffffff' }}
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto">
        <h2 style={{ color: '#22266d' }} className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="h-[500px]"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} style={{ backgroundColor: '#ffffff' }} className="w-[400px] h-[450px] rounded-lg overflow-hidden">
              <div className="h-2/3 w-full relative">
                {project.mediaType === 'video' ? (
                  <video autoPlay loop muted playsInline className="h-full w-full object-cover">
                    <source src={project.media} type="video/mp4" />
                  </video>
                ) : (
                  <div style={{ backgroundColor: '#cea24a', color: '#22266d' }} className="h-full w-full flex items-center justify-center">
                    <span className="font-bold">3D Render</span>
                  </div>
                )}
              </div>
              <div className="p-6" style={{ color: '#22266d' }}>
                <h3 className="font-bold text-xl mb-2">{project.name} – {project.location}</h3>
                <p className="text-sm">{project.description}</p>
                <p className="text-sm mt-2">ROI: <span style={{ color: '#cea24a' }} className="font-bold">{project.roi}%</span> | Delivery: {project.delivery}</p>
                <Link href={`/developments/${index}`} style={{ color: '#cea24a' }} className="font-bold mt-4 inline-block hover:underline">
                  View Details →
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
}
