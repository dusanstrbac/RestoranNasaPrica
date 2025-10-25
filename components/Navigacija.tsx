'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigacija = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-3">
        {/* Logo + naziv */}
        <div className="flex items-center space-x-3">
          <Image 
            src="/LogoFirme.png" // stavi svoj logo
            alt="Logo restorana"
            width={60}
            height={60}
            className='rounded-[50%]'
          />
          <span className="font-bold text-xl text-gray-800">Restoran Naša Priča</span>
        </div>

        {/* Desktop meni */}
        <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-700 hover:text-orange-600 transition">Početna</a>
            <a href="jelovnik" className="text-gray-700 hover:text-orange-600 transition">Jelovnik</a>
            <a href="#o-nama" className="text-gray-700 hover:text-orange-600 transition">O nama</a>
            <a href="#kontakt" className="text-gray-700 hover:text-orange-600 transition">Kontakt</a>
        </nav>

        {/* Hamburger za mobilne */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Meni">
            <svg 
              className="w-6 h-6 text-gray-700" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                // X ikonica kada je otvoren
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                // Hamburger kada je zatvoren
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile meni */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white shadow-inner"
          >
            <div className="flex flex-col space-y-4 p-4">
              <a href="#jelovnik" className="text-gray-700 hover:text-orange-600 transition" onClick={() => setIsOpen(false)}>Jelovnik</a>
              <a href="#o-nama" className="text-gray-700 hover:text-orange-600 transition" onClick={() => setIsOpen(false)}>O nama</a>
              <a href="#kontakt" className="text-gray-700 hover:text-orange-600 transition" onClick={() => setIsOpen(false)}>Kontakt</a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigacija;
