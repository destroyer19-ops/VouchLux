'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'; // Import FiChevronDown

interface NavLinkItem {
  href: string;
  label: string;
  isDropdown?: false; // Explicitly state it's not a dropdown
}

interface NavDropdownItem {
  label: string;
  isDropdown: true;
  submenu: NavLinkItem[];
}

type NavItem = NavLinkItem | NavDropdownItem;

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const navLinks: NavItem[] = [
    { href: "/about", label: "About" },
    { href: "/developments", label: "Developments" },
    {
      label: "Services",
      isDropdown: true,
      submenu: [
        { href: "/services/digital-certification", label: "Digital Certification" },
        { href: "/services/ai-valuation", label: "AI Valuation" },
        { href: "/services/fraud-detection", label: "Fraud Detection" },
        { href: "/services/asset-financing", label: "Asset Financing" },
        { href: "/services/global-marketplace", label: "Global Marketplace" },
        { href: "/services/insurance-solutions", label: "Insurance Solutions" },
        { href: "/services/fractional-ownership", label: "Fractional Ownership" },
      ]
    },
    { href: "/investment-portal", label: "Invest" },
    { href: "/blog", label: "Insights" },
  ];

  return (
    <header style={{ backgroundColor: '#22266d', color: '#ffffff' }} className="shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Vouchlux Logo" width={120} height={30} priority />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            link.isDropdown ? (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                <button
                  style={{ color: '#ffffff' }}
                  className="flex items-center hover:text-[#cea24a] transition-colors duration-300 focus:outline-none"
                >
                  {link.label} <FiChevronDown size={16} className="ml-1" />
                </button>
                {isServicesDropdownOpen && (
                  <div
                    style={{ backgroundColor: '#22266d', color: '#ffffff', borderColor: '#3746d3' }}
                    className="absolute z-10 top-full left-0 w-56 rounded-md shadow-lg py-1 border-t-2"
                  >
                    {link.submenu.map((subLink, subIndex) => (
                      <Link key={subIndex} href={subLink.href} className="block px-4 py-2 text-sm hover:bg-[#3746d3] hover:text-[#ffffff] transition-colors duration-300">
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={index} href={link.href} className="hover:text-[#cea24a] transition-colors duration-300">
                {link.label}
              </Link>
            )
          ))}
          <Link href="/contact" style={{ backgroundColor: '#3746d3', color: '#ffffff' }} className="px-4 py-2 rounded-md hover:bg-opacity-80 transition-colors duration-300">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Mobile Menu">
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        style={{ backgroundColor: '#22266d' }}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close Mobile Menu">
            <FiX size={24} />
          </button>
        </div>
        <nav className="flex flex-col items-start p-4 space-y-4">
          {navLinks.map((link, index) => (
            link.isDropdown ? (
              <div key={index} className="w-full">
                <button
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  style={{ color: '#ffffff' }}
                  className="flex items-center justify-between w-full text-lg hover:text-[#cea24a] transition-colors duration-300 focus:outline-none"
                >
                  {link.label} <FiChevronDown size={18} className={`transform transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                </button>
                {isServicesDropdownOpen && (
                  <div className="flex flex-col pl-4 mt-2 space-y-2" style={{ backgroundColor: '#2e358c' }}> {/* Slightly lighter dark blue for sub-menu */}
                    {link.submenu.map((subLink, subIndex) => (
                      <Link key={subIndex} href={subLink.href} className="block py-1 text-base hover:text-[#cea24a]" onClick={() => { setIsMobileMenuOpen(false); setIsServicesDropdownOpen(false); }}>
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={index} href={link.href} className="text-lg hover:text-[#cea24a]" onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
              </Link>
            )
          ))}
          <Link href="/contact" style={{ backgroundColor: '#3746d3', color: '#ffffff' }} className="text-lg px-4 py-2 rounded-md hover:bg-opacity-80" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
