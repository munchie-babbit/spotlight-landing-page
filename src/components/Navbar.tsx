'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav 
      className={`${
        scrolled 
          ? 'fixed top-0 left-0 right-0 bg-white shadow-md text-black border-gray-200' 
          : 'absolute top-0 left-0 right-0 bg-transparent text-white border-white/40'
      } z-50 py-2 px-4 sm:px-6 lg:px-8 border-b pb-2 transition-all duration-300`}
    >
      <div className="container flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {scrolled ? (
            <Image src="/logo-black.svg" alt="Spotlight Realty" width={40} height={40} className="filter-none" />
          ) : (
            <Image src="/logo-white.svg" alt="Spotlight Realty" width={40} height={40} />
          )}
          <Link href="/" className={`text-2xl font-serif ${scrolled ? 'text-black' : 'text-white'}`}>
            Spotlight Realty
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`w-6 h-6 ${scrolled ? 'text-black' : 'text-white'}`}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8 font-sans">
          <Link 
            href="/" 
            className={`${scrolled ? 'text-black hover:text-gray-700' : 'text-white hover:text-white'} transition-colors relative ${
              isActive('/') ? 'font-medium' : ''
            }`}
          >
            Home
            {isActive('/') && (
              <span className={`absolute -bottom-1 left-0 w-full h-1 rounded-full ${
                scrolled ? 'bg-[#7C1E49]' : 'bg-white'
              }`}></span>
            )}
          </Link>
          <Link 
            href="/sellers" 
            className={`${scrolled ? 'text-black hover:text-gray-700' : 'text-white hover:text-white'} transition-colors relative ${
              isActive('/sellers') ? 'font-medium' : ''
            }`}
          >
            Sellers
            {isActive('/sellers') && (
              <span className={`absolute -bottom-1 left-0 w-full h-1 rounded-full ${
                scrolled ? 'bg-[#7C1E49]' : 'bg-white'
              }`}></span>
            )}
          </Link>
          <Link 
            href="/landlords" 
            className={`${scrolled ? 'text-black hover:text-gray-700' : 'text-white hover:text-white'} transition-colors relative ${
              isActive('/landlords') ? 'font-medium' : ''
            }`}
          >
            Landlords
            {isActive('/landlords') && (
              <span className={`absolute -bottom-1 left-0 w-full h-1 rounded-full ${
                scrolled ? 'bg-[#7C1E49]' : 'bg-white'
              }`}></span>
            )}
          </Link>
          <Link 
            href="/about" 
            className={`${scrolled ? 'text-black hover:text-gray-700' : 'text-white hover:text-white'} transition-colors relative ${
              isActive('/about') ? 'font-medium' : ''
            }`}
          >
            About Us
            {isActive('/about') && (
              <span className={`absolute -bottom-1 left-0 w-full h-1 rounded-full ${
                scrolled ? 'bg-[#7C1E49]' : 'bg-white'
              }`}></span>
            )}
          </Link>
          <button className={`${
            scrolled 
              ? 'button-premium text-white border-0' 
              : 'text-white border-white/40 hover:bg-white hover:text-black'
            } border rounded-full px-4 py-2 font-sans transition-colors`}>
            Get Started
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className={`absolute top-full left-0 right-0 ${
            scrolled ? 'bg-white' : 'bg-black bg-opacity-90'
          } p-4 shadow-lg z-50`}>
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className={`${scrolled ? 'text-black' : 'text-white'} py-2 ${isActive('/') ? 'font-medium' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/sellers" 
                className={`${scrolled ? 'text-black' : 'text-white'} py-2 ${isActive('/sellers') ? 'font-medium' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                Sellers
              </Link>
              <Link 
                href="/landlords" 
                className={`${scrolled ? 'text-black' : 'text-white'} py-2 ${isActive('/landlords') ? 'font-medium' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                Landlords
              </Link>
              <Link 
                href="/about" 
                className={`${scrolled ? 'text-black' : 'text-white'} py-2 ${isActive('/about') ? 'font-medium' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </Link>
              <button className={`${
                scrolled 
                  ? 'button-premium text-white border-0' 
                  : 'text-white border border-white/40 hover:bg-white hover:text-black'
                } rounded-full px-4 py-2 font-sans transition-colors w-full mt-2`}>
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 