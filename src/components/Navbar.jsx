import React, { useState } from 'react';
import { AlignJustify, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 shadow-md w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">FYZSRD</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-amber-50 hover:text-amber-300">Home</a>
            <a href="#projects" className="text-amber-50 hover:text-amber-300">Projects</a>
            <a href="#about" className="text-amber-50 hover:text-amber-300">About</a>
            <a href="#contact" className="text-amber-50 hover:text-amber-300">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <AlignJustify size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-2 py-2">
            <a href="#home" className="text-amber-50 hover:text-amber-300">Home</a>
            <a href="#projects" className="text-amber-50 hover:text-amber-300">Projects</a>
            <a href="#about" className="text-amber-50 hover:text-amber-300">About</a>
            <a href="#contact" className="text-amber-50 hover:text-amber-300">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
