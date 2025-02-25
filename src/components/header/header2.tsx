'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from '@/assets/Logo.svg';
import LogoFull from '@/assets/LogoFull.svg';
import Image from 'next/image';
import { FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Header2() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          {/* Combined Navigation Container */}
          <div
            className={`relative flex justify-between items-center w-full md:w-fit rounded-full border-2 border-accent px-4 ${
              isScrolled ? 'bg-[#112A12]/80 backdrop-blur-md' : ''
            }`}
          >
            <Image
              src={Logo}
              alt="Company Logo"
              height={100}
              width={100}
              className="m-2"
            />

            {/* Desktop Navigation */}
            <ul
              className="hidden md:flex justify-center items-center"
              onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
            >
              <Tab setPosition={setPosition}>Home</Tab>
              <Tab setPosition={setPosition}>Pricing</Tab>
              <Tab setPosition={setPosition}>About</Tab>
              <Tab setPosition={setPosition}>Services</Tab>
              <Tab setPosition={setPosition}>Contact</Tab>
              <Cursor position={position} />
            </ul>

            {/* Hamburger Menu Button - Only on Mobile */}
            <button
              className="md:hidden text-white p-2 hover:bg-accent/20 rounded-full transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {!isOpen ? (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`fixed inset-2 bg-[#112A12]/80 backdrop-blur-md z-50 transition-transform duration-300 ease-in-out transform ${
            isOpen ? 'translate-x-0' : 'translate-x-[120%]'
          } md:hidden rounded-3xl overflow-hidden`}
        >
          <div className="h-full w-full border-2 border-accent p-6 rounded-3xl flex flex-col">
            <div className="flex justify-end">
              <button
                className="w-10 h-10 rounded-full border-2 border-accent flex items-center justify-center text-white hover:bg-accent/20 transition-colors duration-300 hover:scale-110"
                onClick={() => setIsOpen(false)}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center">
              <Image
                src={LogoFull}
                alt="Company Logo"
                height={250}
                width={250}
                quality={100}
                className="mb-8"
              />
              <nav className="flex flex-col space-y-6 w-full max-w-xs">
                <MobileNavLink onClick={() => setIsOpen(false)}>
                  Home
                </MobileNavLink>
                <MobileNavLink onClick={() => setIsOpen(false)}>
                  Pricing
                </MobileNavLink>
                <MobileNavLink onClick={() => setIsOpen(false)}>
                  About
                </MobileNavLink>
                <MobileNavLink onClick={() => setIsOpen(false)}>
                  Services
                </MobileNavLink>
                <MobileNavLink onClick={() => setIsOpen(false)}>
                  Contact
                </MobileNavLink>
              </nav>
            </div>

            {/* Social Media Links */}
            <div className="mt-auto pt-8">
              <div className="flex justify-center items-center space-x-4">
                <SocialLink
                  href="https://twitter.com"
                  icon={<FaTwitter size={20} />}
                />
                <SocialLink
                  href="https://instagram.com"
                  icon={<FaInstagram size={20} />}
                />
                <SocialLink
                  href="https://linkedin.com"
                  icon={<FaLinkedinIn size={20} />}
                />
                <SocialLink
                  href="https://github.com"
                  icon={<FaGithub size={20} />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

const Tab = ({
  children,
  setPosition,
}: {
  children: React.ReactNode;
  setPosition: (position: {
    left: number;
    width: number;
    opacity: number;
  }) => void;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white hover:text-white hover:font-bold transition-all md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({
  position,
}: {
  position: { left: number; width: number; opacity: number };
}) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-accent md:h-12"
    />
  );
};

const MobileNavLink = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="text-white text-xl py-3 px-6 hover:bg-accent/20 rounded-2xl transition-all w-full text-center hover:scale-105 border border-transparent hover:border-accent/30"
    >
      {children}
    </button>
  );
};

const SocialLink = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full border-2 border-accent flex items-center justify-center text-white hover:bg-accent/20 transition-colors duration-300 hover:scale-110"
    >
      {icon}
    </a>
  );
};

export default Header2;
