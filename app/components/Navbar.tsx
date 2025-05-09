'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  {
    label: 'Products',
    submenu: [
      { href: '/products/flowers', label: 'Groceries' },
      { href: '/products/vegetables', label: 'Pastries and Cakes' },
      { href: '/products/herbs', label: 'Wines' },
      { href: '/products/herbs', label: 'Pre-cooked meal solutions' },
      { href: '/products/herbs', label: 'Seeds, herbs and powders' },
      { href: '/products/herbs', label: 'Pre-frozen food' },
      
    ],
  },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
]

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggleNav = () => setNavOpen(prev => !prev)

  return (
    <nav className="bg-[#1d4d4f] text-white px-6 py-0.5 shadow-md" role="navigation" aria-label="Main navigation">
      <div className='px-4 py-3 flex justify-between items-center'>
        {/* Logo */}
        <div className='font-bold text-2xl'>
          <Link href='/' className='pacifico-regular text-[#e5dfdf]'>
            Demeters Gardens
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-white relative">
          {navLinks.map((link) => (
            <li key={link.label} className="relative group">
              {link.submenu ? (
                <>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="hover:text-[#a2c11c] focus:outline-none"
                  >
                    {link.label}
                  </button>
                  <ul className="absolute left-0 mt-2 hidden group-hover:block bg-[#2a5c5e] rounded shadow-md text-sm">
                    {link.submenu.map((sublink) => (
                      <li key={sublink.href}>
                        <Link
                          href={sublink.href}
                          className="block px-4 py-2 hover:bg-[#3c7c7d]"
                        >
                          {sublink.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link href={link.href} className="hover:text-[#a2c11c]">
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden text-xl cursor-pointer" onClick={toggleNav}>
          {navOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <ul className="md:hidden mt-4 px-4 space-y-3 text-white transition-all duration-300 ease-in-out">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.submenu ? (
                <>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="block w-full text-left hover:text-[#a2c11c]"
                  >
                    {link.label}
                  </button>
                  {dropdownOpen && (
                    <ul className="ml-4 mt-1 space-y-1 text-sm">
                      {link.submenu.map((sublink) => (
                        <li key={sublink.href}>
                          <Link
                            href={sublink.href}
                            className="block hover:text-[#a2c11c]"
                            onClick={() => setNavOpen(false)}
                          >
                            {sublink.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  className="block hover:text-[#a2c11c]"
                  onClick={() => setNavOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar
