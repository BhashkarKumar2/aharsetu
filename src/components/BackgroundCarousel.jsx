import React, { useEffect, useState } from 'react';

const images = [
  "https://images.unsplash.com/photo-1654922207993-2952fec328ae?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1641536618422-2cf0bbd10014?w=600&auto=format&fit=crop&q=60",
  "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=60"
];

const BackgroundCarousel = ({ children }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${images[index]})` }}
    >
      <div className="absolute inset-0 bg-opacity-50 z-10"></div>
      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default BackgroundCarousel;
