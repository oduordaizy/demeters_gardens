'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact Us' },
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen(prev => !prev);

  return (
    <nav className="text-[#1d4d4f] px-6 py-0.5 shadow-md" role="navigation" aria-label="Main navigation">
      <div className='px-4 py-3 flex justify-between items-center'>
        {/* Logo */}
        <div className='text-xl flex items-center'>
          <Link href='/' className='pacifico-regular flex items-center text-[#1d4d4f]'>
            <Image src="/logo.png" alt="Demeter's Gardens Logo" width={50} height={50} />
            <span className="ml-2">Demeters Gardens</span>
          </Link>
        </div>

        {/* Desktop Nav and Order Button */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 text-[#1d4d4f]">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-[#a2c11c]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <button className="ml-6 bg-[#1d4d4f] text-white px-4 py-2 rounded hover:text-[#a2c11c]">
            Order
          </button>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden text-xl cursor-pointer" onClick={toggleNav}>
          {navOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <ul className="md:hidden mt-4 px-4 space-y-3 text-[#1d4d4f] transition-all duration-300 ease-in-out">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="block hover:text-[#a2c11c]"
                onClick={() => setNavOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/products">
            <button className="w-full bg-[#1d4d4f] text-white px-4 py-2 rounded hover:text-[#a2c11c]">
              Order 
            </button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
