'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="mx-auto max-w-screen-xl px-6 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo & Title */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/img/logo_kabcirebon.png"
              alt="Logo"
              width={45}
              height={45}
            />
            <span className="text-lg font-bold text-dark tracking-wide">SIMADES</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            {['Home', 'About', 'Services Us', 'Faq', 'Contact'].map((item) => (
              <Link
                key={item}
                href="#"
                className="hover:text-teal-600 transition duration-300"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Button for Login */}
          <div className="hidden md:flex gap-3">
            <Link
              href="#"
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Dashboard
            </Link>
          </div>

          {/* Mobile menu button */}
          <button onClick={toggleMenu} className="md:hidden p-2 text-gray-600 hover:text-indigo-600">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 transform ${menuOpen ? 'max-h-[500px]' : 'max-h-0'} overflow-hidden bg-white shadow-md`}
      >
        <div className="px-4 pt-4 pb-4 space-y-3 text-sm font-medium text-gray-600">
          {['About', 'Careers', 'History', 'Services', 'Projects', 'Blog'].map((item) => (
            <Link
              key={item}
              href="#"
              className="block px-3 py-2 rounded-md hover:bg-gray-100 text-gray-700"
            >
              {item}
            </Link>
          ))}
          <div className="pt-2 border-t border-gray-200">
            <Link
              href="#"
              className="block px-4 py-3 rounded-md bg-indigo-600 text-white text-center hover:bg-indigo-700 transition duration-300"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
