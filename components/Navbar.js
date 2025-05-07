'use client';

// components/Navbar.js
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`navbar-sticky navbar-default validnavs navbar-fixed menu-center no-full ${scrolled ? 'bg-white text-gray-800 shadow-md' : 'bg-transparent text-white'} transition-all duration-300 fixed top-0 left-0 w-full z-50 lg:px-33`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-black text-2xl font-bold tracking-tighter">
            
              Plug <span className='text-red-600'>Media</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-black hover:text-red-600 font-medium">Home</Link>
            <Link href="#About" className="text-black hover:text-red-600 font-medium">About</Link>
            <Link href="#Influencers" className="text-black hover:text-red-600 font-medium">Influencers</Link>
            <Link href="#Event" className="text-black hover:text-red-600 font-medium">Event</Link>
            <Link href="#Testimonials" className="text-black hover:text-red-600 font-medium">Testimonials</Link>
            <Link href="#Team" className="text-black hover:text-red-600 font-medium">Our Team</Link>
            <Link href="#Contact" className="text-black hover:text-red-600 font-medium">Contact</Link>
          </nav>

          {/* Call to Action Buttons */}
         

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-2xl focus:outline-none"
            >
              {mobileMenuOpen ? <FaTimes className='text-gray-800' /> : <FaBars className='text-gray-800' />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidenav */}
      <div className={`mobile-sidenav md:hidden fixed top-20 left-0 w-full bg-white text-gray-800 shadow-lg transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
        <nav className="flex flex-col px-4 py-6">
          <Link href="/" className="py-3 border-b border-gray-200 hover:text-red-600">Home</Link>
          <Link href="#About" className="py-3 border-b border-gray-200 hover:text-red-600">About</Link>
          <Link href="#Influencers" className="py-3 border-b border-gray-200 hover:text-red-600">Influencers</Link>
          <Link href="#Event" className="py-3 border-b border-gray-200 hover:text-red-600">Event</Link>
          <Link href="#Testimonials" className="py-3 border-b border-gray-200 hover:text-red-600">Testimonials</Link>
          <Link href="#Team" className="py-3 border-b border-gray-200 hover:text-red-600">Our Team</Link>
          <Link href="#Contact" className="py-3 border-b border-gray-200 hover:text-red-600">Contact</Link>
         
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
