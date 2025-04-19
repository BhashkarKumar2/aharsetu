import React from 'react';
import { Link } from 'react-router-dom';

import BackgroundCarousel from '../components/BackgroundCarousel';
import TestimonialCarousel from '../components/TestimonialCarousel';

const Home = () => {
  return (
    <>
      
      <BackgroundCarousel>
        <div className="flex flex-col items-center justify-center h-screen text-white px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
            Book Chefs for Your Private Events
          </h1>
          <p className="text-xl mb-8 max-w-2xl drop-shadow">
            Enjoy gourmet experiences at home with professional chefs tailored to your taste and event.
          </p>
          <div className="space-x-4">
            <Link
              to="/signup"
              className="bg-green-600 hover:bg-green-500 text-white font-semibold py-3 px-6 rounded-lg"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-6 rounded-lg"
            >
              Login
            </Link>
          </div>
        </div>
      </BackgroundCarousel>

      <div className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          What Our Clients Say
        </h2>
        <TestimonialCarousel />
      </div>

    
    </>
  );
};

export default Home;
