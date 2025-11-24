'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi'; // Import icons

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/developments", label: "Our Developments" },
    { href: "/investment-portal", label: "Invest" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Insights" },
  ];

  return (
    <header style={{ backgroundColor: '#1A1A1A', color: '#F9F9F9' }} className="shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Vouchlux Logo" width={120} height={30} priority />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={{ color: '#F9F9F9' }} className="hover:text-gold transition-colors duration-300">
              {link.label}
            </Link>
          ))}
          <Link href="/contact" style={{ backgroundColor: '#D4AF37', color: '#0B1A2D' }} className="px-4 py-2 rounded-md hover:bg-opacity-80 transition-colors duration-300">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Mobile Menu">
            {isMobileMenuOpen ? <FiX size={24} style={{ color: '#F9F9F9' }} /> : <FiMenu size={24} style={{ color: '#F9F9F9' }} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        style={{ backgroundColor: '#0B1A2D' }} // Midnight Blue for mobile menu background
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close Mobile Menu">
            <FiX size={24} style={{ color: '#F9F9F9' }} />
          </button>
        </div>
        <nav className="flex flex-col items-start p-4 space-y-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={{ color: '#F9F9F9' }} className="text-lg hover:text-gold" onClick={() => setIsMobileMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" style={{ backgroundColor: '#D4AF37', color: '#0B1A2D' }} className="text-lg px-4 py-2 rounded-md hover:bg-opacity-80" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
