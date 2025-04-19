import React from 'react';

const Services = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-12 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-indigo-600 mb-4">Our Services</h1>
      <p className="text-gray-700 max-w-2xl text-lg mb-8">
        From intimate dinners to large celebrations, our platform offers tailored culinary experiences that meet your needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
        <div className="bg-indigo-50 p-6 rounded-lg shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2 text-blue-800">Private Chef Booking</h2>
          <p className="text-gray-600">Hire a chef for home events like birthdays, date nights, or small gatherings.</p>
        </div>
        <div className="bg-indigo-50 p-6 rounded-lg shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2 text-blue-800">Event Catering</h2>
          <p className="text-gray-600">Customized menus and services for weddings, house parties, and corporate events.</p>
        </div>
        <div className="bg-indigo-50 p-6 rounded-lg shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2 text-blue-800">Special Add‑Ons</h2>
          <p className="text-gray-600">Decor, cleanup, and mixology options to elevate your in-home experience.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
