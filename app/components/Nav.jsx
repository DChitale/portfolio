'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="mt-5 h-16 px-6 md:px-8 lg:px-25 w-full  flex justify-between items-center">
        {/* Logo */}
        <div className="w-15">
          <img
            className="rounded-full object-cover"
            src="https://ik.imagekit.io/dchitale/Logo.jpg"
            alt="Logo"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-2xl">
          <Link className='hover:text-[#FB164A]' href="/">Home</Link>
          <Link className='hover:text-[#FB164A]' href="/projects">Projects</Link>
          <Link className='hover:text-[#FB164A]' href="/about">About</Link>
          <Link className='hover:text-[#FB164A]' href="/contact">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden  px-6 py-4 flex flex-col gap-4 text-2xl">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </>
  );
};

export default Nav;
