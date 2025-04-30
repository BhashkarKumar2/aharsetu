// // import React, { useState } from 'react';
// // import { Link, useLocation } from 'react-router-dom';

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const location = useLocation();

// //   const toggleMenu = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   const linkClasses = (path) => {
// //     let baseClasses = 'hover:text-indigo-300 transition-colors duration-300';
// //     if (location.pathname === path) {
// //       baseClasses += ' text-indigo-200 font-semibold';
// //     }
// //     return baseClasses;
// //   };

// //   return (
// //     <nav className=" text-white p-4 sticky top-0 z-50 shadow-md ">
// //       <div className="max-w-7xl mx-auto flex items-center justify-between">
// //         {/* Logo Section */}
// //         <div className="flex items-center space-x-4">
// //           <Link to="/" className="text-2xl font-bold text-red-500">
// //             ChefHub
// //           </Link>
// //           <span className="text-xl">Your Chef Booking Platform</span>
// //         </div>

// //         {/* Navbar Links (Desktop) */}
// //         <div className="hidden md:flex space-x-6">
// //           <Link to="/" className={linkClasses('/')}>
// //             Home
// //           </Link>
// //           <Link to="/about" className={linkClasses('/about')}>
// //             About
// //           </Link>
// //           <Link to="/services" className={linkClasses('/services')}>
// //             Services
// //           </Link>
// //           <Link to="/contact" className={linkClasses('/contact')}>
// //             Contact
// //           </Link>
// //           <Link to="/dashboard" className={linkClasses('/dashboard')}>
// //             Dashboard
// //           </Link>
// //         </div>

// //         {/* Mobile Menu Button */}
// //         <div className="md:hidden">
// //           <button
// //             onClick={toggleMenu}
// //             className="text-white focus:outline-none"
// //             aria-label="Toggle menu"
// //           >
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               className="w-6 h-6"
// //               fill="none"
// //               stroke="currentColor"
// //               viewBox="0 0 24 24"
// //               strokeWidth="2"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
// //               />
// //             </svg>
// //           </button>
// //         </div>
// //       </div>

// //       {/* Mobile Menu (Slide down on toggle) */}
// //       {isOpen && (
// //         <div className="md:hidden mt-4 flex flex-col items-center space-y-4 bg-black-700 rounded-md p-4 ">
// //           <Link to="/" className={linkClasses('/')}>
// //             Home
// //           </Link>
// //           <Link to="/about" className={linkClasses('/about')}>
// //             About
// //           </Link>
// //           <Link to="/services" className={linkClasses('/services')}>
// //             Services
// //           </Link>
// //           <Link to="/contact" className={linkClasses('/contact')}>
// //             Contact
// //           </Link>
// //           <Link to="/dashboard" className={linkClasses('/dashboard')}>
// //             Dashboard
// //           </Link>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // };

// // export default Navbar;


// import React, { useState, useEffect } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
//     setIsLoggedIn(loggedInStatus);
//   }, [location]);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('isLoggedIn');
//     localStorage.removeItem('userEmail');
//     setIsLoggedIn(false);
//     navigate('/login');
//   };

//   const linkClasses = (path) => {
//     let baseClasses = 'hover:text-indigo-300 transition-colors duration-300';
//     if (location.pathname === path) {
//       baseClasses += ' text-indigo-200 font-semibold';
//     }
//     return baseClasses;
//   };

//   return (
//     <nav className="text-white p-4 sticky top-0 z-50 shadow-md bg-black">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center space-x-4">
//           <Link to="/" className="text-2xl font-bold text-red-500">
//             ChefHub
//           </Link>
//           <span className="text-xl">Your Chef Booking Platform</span>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6 items-center">
//           <Link to="/" className={linkClasses('/')}>Home</Link>
//           <Link to="/about" className={linkClasses('/about')}>About</Link>
//           <Link to="/services" className={linkClasses('/services')}>Services</Link>
//           <Link to="/contact" className={linkClasses('/contact')}>Contact</Link>
//           <Link to="/dashboard" className={linkClasses('/dashboard')}>Dashboard</Link>
//           {isLoggedIn && (
//             <button onClick={handleLogout} className="text-sm px-4 py-2 bg-red-500 hover:bg-red-600 rounded-md">
//               Logout
//             </button>
//           )}
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button
//             onClick={toggleMenu}
//             className="text-white focus:outline-none"
//             aria-label="Toggle menu"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor"
//               viewBox="0 0 24 24" strokeWidth="2">
//               <path strokeLinecap="round" strokeLinejoin="round"
//                 d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden mt-4 flex flex-col items-center space-y-4 bg-black rounded-md p-4">
//           <Link to="/" className={linkClasses('/')}>Home</Link>
//           <Link to="/about" className={linkClasses('/about')}>About</Link>
//           <Link to="/services" className={linkClasses('/services')}>Services</Link>
//           <Link to="/contact" className={linkClasses('/contact')}>Contact</Link>
//           <Link to="/dashboard" className={linkClasses('/dashboard')}>Dashboard</Link>
//           {isLoggedIn && (
//             <button onClick={handleLogout} className="text-sm px-4 py-2 bg-red-500 hover:bg-red-600 rounded-md">
//               Logout
//             </button>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
    navigate('/');
  };

  const linkClasses = (path) => {
    let baseClasses = 'hover:text-indigo-300 transition-colors duration-300';
    if (location.pathname === path) {
      baseClasses += ' text-indigo-200 font-semibold';
    }
    return baseClasses;
  };

  return (
    <nav
      className={`text-white p-4 fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/10 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-bold text-red-500">
            ChefHub
          </Link>
          <span className="text-xl">Your Chef Booking Platform</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className={linkClasses('/')}>Home</Link>
          <Link to="/about" className={linkClasses('/about')}>About</Link>
          <Link to="/services" className={linkClasses('/services')}>Services</Link>
          <Link to="/contact" className={linkClasses('/contact')}>Contact</Link>
          <Link to="/dashboard" className={linkClasses('/dashboard')}>Dashboard</Link>
          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="text-sm px-4 py-2 bg-red-500 hover:bg-red-600 rounded-md"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor"
              viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center space-y-4 bg-black/80 rounded-md p-4">
          <Link to="/" className={linkClasses('/')}>Home</Link>
          <Link to="/about" className={linkClasses('/about')}>About</Link>
          <Link to="/services" className={linkClasses('/services')}>Services</Link>
          <Link to="/contact" className={linkClasses('/contact')}>Contact</Link>
          <Link to="/dashboard" className={linkClasses('/dashboard')}>Dashboard</Link>
          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="text-sm px-4 py-2 bg-red-500 hover:bg-red-600 rounded-md"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
