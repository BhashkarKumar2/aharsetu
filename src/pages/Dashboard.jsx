// import { Link } from 'react-router-dom';

// const Dashboard = () => {
//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h2 className="text-3xl font-bold mb-6">Welcome to Your Dashboard</h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white p-4 rounded shadow">
//           <h3 className="text-xl font-semibold mb-2">Upcoming Bookings</h3>
//           <p className="text-gray-600">No bookings yet.</p>
//         </div>

//         <div className="bg-white p-4 rounded shadow">
//           <h3 className="text-xl font-semibold mb-2">Saved Chefs</h3>
//           <p className="text-gray-600">No saved chefs yet.</p>
//         </div>

//         <div className="bg-white p-4 rounded shadow">
//           <h3 className="text-xl font-semibold mb-2">Manage Profile</h3>
//           <Link
//             to="/profile"
//             className="text-indigo-600 underline hover:text-indigo-800"
//           >
//             Go to Profile
//           </Link>
//         </div>

//         <div className="bg-white p-4 rounded shadow">
//           <h3 className="text-xl font-semibold mb-2">Browse Chefs</h3>
//           <Link
//             to="/"
//             className="text-indigo-600 underline hover:text-indigo-800"
//           >
//             Explore Now
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Your Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            to="/book/123"
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">Book a Chef</h2>
            <p className="text-gray-600">Find and book chefs for your event</p>
          </Link>
          <Link
            to="/chef-onboarding"
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">Become a Chef</h2>
            <p className="text-gray-600">Join as a professional chef</p>
          </Link>
          <Link
            to="/favorites"
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">Saved Chefs</h2>
            <p className="text-gray-600">View your favorite chefs</p>
          </Link>
          <Link
            to="/profile"
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">My Profile</h2>
            <p className="text-gray-600">Manage your account details</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
