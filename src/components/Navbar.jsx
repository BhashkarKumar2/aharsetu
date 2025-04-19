import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkClasses = (path) => {
    let baseClasses = 'hover:text-indigo-300 transition-colors duration-300';
    if (location.pathname === path) {
      baseClasses += ' text-indigo-200 font-semibold';
    }
    return baseClasses;
  };

  return (
    <nav className=" text-white p-4 sticky top-0 z-50 shadow-md ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-bold text-red-500">
            ChefHub
          </Link>
          <span className="text-xl">Your Chef Booking Platform</span>
        </div>

        {/* Navbar Links (Desktop) */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className={linkClasses('/')}>
            Home
          </Link>
          <Link to="/about" className={linkClasses('/about')}>
            About
          </Link>
          <Link to="/services" className={linkClasses('/services')}>
            Services
          </Link>
          <Link to="/contact" className={linkClasses('/contact')}>
            Contact
          </Link>
          <Link to="/dashboard" className={linkClasses('/dashboard')}>
            Dashboard
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Slide down on toggle) */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center space-y-4 bg-black-700 rounded-md p-4 ">
          <Link to="/" className={linkClasses('/')}>
            Home
          </Link>
          <Link to="/about" className={linkClasses('/about')}>
            About
          </Link>
          <Link to="/services" className={linkClasses('/services')}>
            Services
          </Link>
          <Link to="/contact" className={linkClasses('/contact')}>
            Contact
          </Link>
          <Link to="/dashboard" className={linkClasses('/dashboard')}>
            Dashboard
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
