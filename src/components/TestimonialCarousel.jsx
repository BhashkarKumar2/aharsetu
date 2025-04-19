import React from 'react';

const testimonials = [
  {
    name: "Amit",
    quote: "Fantastic service! The chef was professional and the food was amazing.",
  },
  {
    name: "Sneha",
    quote: "The booking process was smooth and the dinner party was unforgettable.",
  },
  {
    name: "Ravi",
    quote: "I highly recommend this service for anyone who wants a luxury food experience at home.",
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="max-w-4xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-3 px-6">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 italic">"{testimonial.quote}"</p>
          <p className="mt-4 text-sm font-semibold text-indigo-600">- {testimonial.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCarousel;
