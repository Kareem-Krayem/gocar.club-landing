'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/Logo.svg';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#112A12]/80 backdrop-blur-md' : ''
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-[#9A7C3C]">
            <Image src={Logo} alt="Company Logo" height={100} width={100} />
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="#about"
                className="hover:text-[#9A7C3C] transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="hover:text-[#9A7C3C] transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#faq"
                className="hover:text-[#9A7C3C] transition-colors"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="#reviews"
                className="hover:text-[#9A7C3C] transition-colors"
              >
                Reviews
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
