'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const blogPostsData = [
  {
    title: "The Future of Luxury: Blockchain & Digital Certification",
    date: "November 15, 2025",
    excerpt: "Explore how Vouchlux is revolutionizing the luxury market by leveraging blockchain for unparalleled authenticity and provenance. Digital certification ensures every asset's history is transparent and immutable.",
    image: "/placeholder-blog-blockchain.jpg", // Placeholder image
    link: "/blog/blockchain-digital-certification"
  },
  {
    title: "AI in Asset Valuation: A New Era of Precision",
    date: "November 10, 2025",
    excerpt: "Discover how Artificial Intelligence is transforming the valuation of high-value assets, providing real-time accuracy and reducing human error. Vouchlux's AI models analyze vast datasets for precise insights.",
    image: "/placeholder-blog-ai-valuation.jpg", // Placeholder image
    link: "/blog/ai-asset-valuation"
  },
  {
    title: "Fractional Ownership: Democratizing Luxury Investments",
    date: "October 28, 2025",
    excerpt: "Learn how fractional ownership models are opening new avenues for investors to access and diversify their luxury portfolios. Experience exclusive assets without full capital commitment.",
    image: "/placeholder-blog-fractional.jpg", // Placeholder image
    link: "/blog/fractional-ownership-luxury"
  },
  {
    title: "Market Insights: Trends in African Luxury Real Estate",
    date: "October 20, 2025",
    excerpt: "A deep dive into the emerging trends and investment opportunities within the dynamic African luxury real estate market. Vouchlux provides expertise in this high-growth sector.",
    image: "/placeholder-blog-real-estate.jpg", // Placeholder image
    link: "/blog/african-luxury-real-estate"
  }
];

export default function BlogPage() {
  return (
    <main>
      {/* Blog Hero/Intro Section */}
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
            Latest Insights & News
          </h1>
          <p style={{ color: '#cea24a' }} className="text-lg md:text-xl">
            Stay informed with Vouchlux's expert analysis on luxury asset trends and technology.
          </p>
        </div>
      </motion.section>

      {/* Blog Post Previews Section */}
      <motion.section
        style={{ backgroundColor: '#ffffff', color: '#22266d' }}
        className="py-20 px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="container mx-auto">
          <h2 style={{ color: '#22266d' }} className="text-3xl font-bold text-center mb-12">Our Newsroom</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPostsData.map((post, index) => (
              <div key={index} style={{ backgroundColor: '#ffffff', color: '#22266d' }} className="p-0 rounded-lg shadow-lg overflow-hidden flex flex-col">
                <div className="h-48 w-full relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    priority={index < 3} // Prioritize LCP images
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-sm" style={{ color: '#6b7280' }}>{post.date}</p>
                  <p className="text-base mt-2">{post.excerpt}</p>
                </div>
                <div className="p-6 pt-0 text-center">
                  <Link href={post.link} style={{ backgroundColor: '#3746d3', color: '#ffffff' }} className="font-bold px-8 py-3 rounded-md hover:bg-opacity-80 transition-colors duration-300 inline-block w-full">
                    Read More
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
