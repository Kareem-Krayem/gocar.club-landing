import { ArrowRight } from 'lucide-react';
import Logo from '@/assets/LogoFull.svg';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0D220E] py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Image
              src={Logo}
              alt="Go Car"
              className="mb-4"
              height={300}
              width={300}
              quality={100}
            />
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#9A7C3C]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="hover:text-[#9A7C3C] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#9A7C3C] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-[#9A7C3C] transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="hover:text-[#9A7C3C] transition-colors"
                >
                  Reviews
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#9A7C3C]">
              Contact
            </h4>
            <p>Email: info@gocar.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#9A7C3C]">
              Get Notified
            </h4>
            <p className="mb-4">Be the first to know when our app launches!</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-[#1A3E1C] text-white px-4 py-2 rounded-l-full focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#9A7C3C] text-white px-4 py-2 rounded-r-full hover:bg-[#B59548] transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-[#1A3E1C] pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Go Car. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
