import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
         <h1 className="text-xl font-extrabold text-white">
          <Link to="/" className="hover:text-green-300 transition-colors duration-300">📚 Bibliophile Hub</Link>
        </h1>

         <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-indigo-400 transition-colors duration-300">Home</Link>
          <Link to="/add" className="hover:text-indigo-400 transition-colors duration-300">Add Books</Link>
        </div>

         <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

       <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-800 px-6 py-4`}>
        <Link to="/" className="block py-2 text-white hover:text-indigo-400 transition-colors duration-300">Home</Link>
        <Link to="/add" className="block py-2 text-white hover:text-indigo-400 transition-colors duration-300">Add Books</Link>
      </div>
    </nav>
  );
};

export default Navbar;
