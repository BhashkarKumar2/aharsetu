import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-16 text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-6">
          About Us
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Welcome to <span className="font-semibold text-indigo-500">ChefHub</span> – your one-stop platform to find verified professional chefs for your home events, casual dinners, or festive feasts. Whether you're a student in a new city or a host planning a party, we connect you with skilled chefs who bring flavor and finesse right to your doorstep.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-10 text-left">
          <div>
            <h2 className="text-2xl font-semibold text-indigo-500 mb-2">Our Mission</h2>
            <p>
              We aim to empower talented chefs while simplifying culinary experiences for our users. Our mission is to make home dining luxurious, affordable, and effortless.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-indigo-500 mb-2">Why Choose Us?</h2>
            <ul className="list-disc ml-5 space-y-2">
              <li>Trusted and verified chefs</li>
              <li>Easy booking and transparent pricing</li>
              <li>Tailored experiences for every occasion</li>
              <li>Support for local culinary talent</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
