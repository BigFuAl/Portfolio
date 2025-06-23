import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-950/90 backdrop-blur z-50">
      <div className="mx-auto max-w-4xl flex justify-between items-center px-6 py-4">
        <a href="#" className="text-xl font-bold text-white">Aliou Cissé</a>
        <ul className="flex space-x-6">
          <li><a href="#projects" className="text-gray-300 hover:text-white">Projects</a></li>
          <li><a href="#about"    className="text-gray-300 hover:text-white">About</a></li>
          <li><a href="#contact"  className="text-gray-300 hover:text-white">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}