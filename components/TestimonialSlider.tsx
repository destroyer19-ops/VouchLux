'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "They didn't just deliver my home — they earned my trust.",
    name: "Chika, Lekki",
    photo: "/placeholder-person.jpg" // Placeholder image
  },
  {
    quote: "The attention to detail and commitment to quality is unmatched. Vouchlux is the gold standard.",
    name: "Tunde, Ikoyi",
    photo: "/placeholder-person.jpg"
  },
  {
    quote: "As an investor from the diaspora, I needed a partner I could trust implicitly. Vouchlux delivered on every promise.",
    name: "Aisha, London",
    photo: "/placeholder-person.jpg"
  }
];

export default function TestimonialSlider() {
  return (
    <motion.section
      style={{ backgroundColor: '#ffffff' }}
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6">
        <h2 style={{ color: '#22266d' }} className="text-3xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="text-center">
              <div className="max-w-3xl mx-auto">
                <p style={{ color: '#22266d' }} className="text-xl italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-center">
                  {/* <Image src={testimonial.photo} alt={testimonial.name} width={50} height={50} className="rounded-full mr-4" /> */}
                  <span style={{ color: '#cea24a' }} className="font-bold">- {testimonial.name}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
}
