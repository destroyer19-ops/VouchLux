import Link from 'next/link';

// Using dummy icons for now. Will replace with a proper icon library like react-icons.
const SocialIcon = ({ children, href }: { children: React.ReactNode; href: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff' }} className="transition-colors duration-300">
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#22266d', color: '#ffffff' }}>
      <div className="container mx-auto px-6 py-12">
        {/* Newsletter Section */}
        <div className="text-center mb-12">
          <h3 style={{ color: '#cea24a' }} className="text-2xl font-bold mb-2">Get our Investor Intelligence Report — Free.</h3>
          <p className="mb-4">Join our mailing list to get exclusive insights and updates.</p>
          <form className="flex justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-l-md placeholder-gray-500"
              style={{ color: '#22266d' }}
              required
            />
            <button type="submit" style={{ backgroundColor: '#cea24a', color: '#22266d' }} className="font-bold px-6 py-3 rounded-r-md hover:bg-opacity-80 transition-colors duration-300">
              Sign Up
            </button>
          </form>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h4 style={{ color: '#cea24a' }} className="font-bold text-lg mb-4">VOUCHLUX</h4>
            <p className="text-sm">Where Trust Becomes Home.</p>
          </div>
          <div>
            <h4 style={{ color: '#cea24a' }} className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/developments">Developments</Link></li>
              <li><Link href="/blog">Insights</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#cea24a' }} className="font-bold text-lg mb-4">Contact</h4>
            <p className="text-sm">info@vouchlux.com</p>
            <p className="text-sm">+234 7030-779-269</p>
          </div>
          <div>
            <h4 style={{ color: '#cea24a' }} className="font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <SocialIcon href="#">FB</SocialIcon>
              <SocialIcon href="#">TW</SocialIcon>
              <SocialIcon href="#">IG</SocialIcon>
              <SocialIcon href="#">LI</SocialIcon>
            </div>
          </div>
        </div>

        {/* Trust Bar & Copyright */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)' }} className="mt-12 pt-8">
          <div className="text-center mb-4">
            <p className="text-sm font-bold">In affiliation with:</p>
            <div className="flex justify-center items-center space-x-6 mt-2">
              <span className="text-xs">REDAN</span>
              <span className="text-xs">LASERA</span>
              <span className="text-xs">SCUML</span>
            </div>
          </div>
          <p className="text-center text-sm" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>&copy; {new Date().getFullYear()} Vouchlux. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
