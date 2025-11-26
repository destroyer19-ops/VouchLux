import Link from 'next/link';
import WhyChooseVouchlux from '@/components/WhyChooseVouchlux';
import MeetTheVisionary from '@/components/MeetTheVisionary';
import FooterCTA from '@/components/FooterCTA';
import TestimonialSlider from '@/components/TestimonialSlider';
import InvestmentStrip from '@/components/InvestmentStrip';
import FeaturedProjects from '@/components/FeaturedProjects';
import LiveProjectsTicker from '@/components/LiveProjectsTicker';

export default function Home() {
  return (
    <>
      {/* --- Hero Section --- */}
      <section className="relative h-screen flex items-center justify-center text-white">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/media/hero-background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
        
        <div className="relative z-20 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            We don't just build homes — we vouch for them.
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Functional. Durable. Luxurious. Smart.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/developments" style={{ backgroundColor: '#3746d3', color: '#ffffff' }} className="font-bold px-8 py-3 rounded-md hover:bg-opacity-80 transition-colors duration-300">
              Explore Projects
            </Link>
            <Link href="/investment-portal" style={{ borderColor: '#cea24a', color: '#cea24a', borderWidth: '2px' }} className="font-bold px-8 py-3 rounded-md transition-colors duration-300">
              Explore Investment
            </Link>
          </div>
        </div>
      </section>
      
      {/* Live Projects Update Ticker */}
      <LiveProjectsTicker />

      {/* --- Other Homepage Sections --- */}
      <FeaturedProjects />
      <InvestmentStrip />
      <WhyChooseVouchlux />
      <MeetTheVisionary />
      <TestimonialSlider />
      <FooterCTA />
    </>
  );
}
