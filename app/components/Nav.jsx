'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full h-20 px-6 md:px-8 lg:px-25 bg-[#FFFBEC]/90 backdrop-blur-md z-50 flex justify-between items-center border-b border-black/5">
        {/* Logo */}
        <div className="w-15">
          <img
            className="rounded-full object-cover shadow-sm"
            src="https://ik.imagekit.io/dchitale/Logo.jpg"
            alt="Logo"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-xl font-medium">
          <Link className='hover:text-[#FB164A] transition-colors relative after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#FB164A] hover:after:w-full after:transition-all after:duration-300' href="/#home">Home</Link>
          <Link className='hover:text-[#FB164A] transition-colors relative after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#FB164A] hover:after:w-full after:transition-all after:duration-300' href="/#projects">Projects</Link>
          <Link className='hover:text-[#FB164A] transition-colors relative after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#FB164A] hover:after:w-full after:transition-all after:duration-300' href="/#about">About</Link>
          <Link className='hover:text-[#FB164A] transition-colors relative after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#FB164A] hover:after:w-full after:transition-all after:duration-300' href="/#contact">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#111] hover:text-[#FB164A] transition-colors"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-20 left-0 w-full bg-[#FFFBEC]/95 backdrop-blur-xl border-b border-black/10 flex flex-col items-center gap-8 py-12 text-2xl font-medium z-40 shadow-2xl transition-all duration-300 ease-in-out ${isOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-full opacity-0 invisible"
          }`}
      >
        <Link className="hover:text-[#FB164A] transition-colors w-full text-center" href="/#home" onClick={() => setIsOpen(false)}>Home</Link>
        <Link className="hover:text-[#FB164A] transition-colors w-full text-center" href="/#projects" onClick={() => setIsOpen(false)}>Projects</Link>
        <Link className="hover:text-[#FB164A] transition-colors w-full text-center" href="/#about" onClick={() => setIsOpen(false)}>About</Link>
        <Link className="hover:text-[#FB164A] transition-colors w-full text-center" href="/#contact" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>
    </>
  );
};

export default Nav;
