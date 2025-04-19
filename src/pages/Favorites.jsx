// src/pages/Favorites.jsx
import React from 'react';

const Favorites = () => {
  // Dummy saved chefs (replace with real data from backend later)
  const savedChefs = [
    { id: 1, name: 'Chef Aisha', cuisine: 'Indian', rating: 4.8 },
    { id: 2, name: 'Chef Marco', cuisine: 'Italian', rating: 4.7 },
    { id: 3, name: 'Chef Donald', cuisine: 'American', rating: 4.9},
    { id: 4, name: 'Chef Mittal', cuisine: 'British', rating: 4.6},
    
  ];

  return (
    <div className="min-h-screen px-6 py-10 bg-white ">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Favorite Chefs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {savedChefs.map((chef) => (
          <div key={chef.id} className="border p-6 rounded-lg shadow hover:shadow-lg">
            <h2 className="text-xl font-semibold">{chef.name}</h2>
            <p className="text-gray-600">Cuisine: {chef.cuisine}</p>
            <p className="text-yellow-500 font-bold">Rating: {chef.rating} ⭐</p>
            <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              Remove from Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
