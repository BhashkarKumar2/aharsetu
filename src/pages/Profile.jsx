// // src/pages/Profile.jsx
// import React, { useState } from 'react';

// const Profile = () => {
//   const [formData, setFormData] = useState({
//     name: 'John Doe',
//     email: 'john@example.com',
//     address: '123 Main Street, New York, NY',
//     phone: '+1 123-456-7890',
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Profile updated:', formData);
//     alert('Profile updated successfully!');
//   };

//   return (
//     <div className="min-h-screen px-6 py-10  bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col justify-center">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">My Profile</h1>
//       <form onSubmit={handleSubmit} className="max-w-lg space-y-6">
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full p-3 border rounded"
//           placeholder="Full Name"
//         />
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full p-3 border rounded"
//           placeholder="Email Address"
//         />
//         <input
//           type="text"
//           name="address"
//           value={formData.address}
//           onChange={handleChange}
//           className="w-full p-3 border rounded"
//           placeholder="Address"
//         />
//         <input
//           type="tel"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           className="w-full p-3 border rounded"
//           placeholder="Phone Number"
//         />
//         <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700">
//           Save Changes
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Profile;

// src/pages/Profile.jsx
// import React, { useState } from 'react';

// const Profile = () => {
//   const [formData, setFormData] = useState({
//     name: 'John Doe',
//     email: 'john@example.com',
//     address: '123 Main Street, New York, NY',
//     phone: '+1 123-456-7890',
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Profile updated:', formData);
//     alert('Profile updated successfully!');
//   };

//   return (
//     <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center">
//       <div className="w-full max-w-lg bg-gray-300 p-8 rounded-lg shadow-lg">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">My Profile</h1>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full p-3 border rounded"
//             placeholder="Full Name"
//           />
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-3 border rounded"
//             placeholder="Email Address"
//           />
//           <input
//             type="text"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             className="w-full p-3 border rounded"
//             placeholder="Address"
//           />
//           <input
//             type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             className="w-full p-3 border rounded"
//             placeholder="Phone Number"
//           />
//           <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700">
//             Save Changes
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+91-9876543210',
    profileImage: 'https://i.pravatar.cc/150?img=3', // demo image
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-400 px-4 py-12">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-8 text-center">
        <img
          src={user.profileImage}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto shadow-md border-4 border-indigo-300"
        />
        <h2 className="text-2xl font-bold text-gray-800 mt-4">{user.name}</h2>
        <p className="text-sm text-gray-600 mt-1">{user.email}</p>
        <p className="text-sm text-gray-600">{user.phone}</p>

        <div className="mt-6 flex flex-col gap-3">
        <button
  onClick={() => navigate('/bookings')}
  className="bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold py-2 rounded-lg transition duration-300"
>
  View Bookings
</button>
          <button
  onClick={() => navigate('/edit-profile')}
  className="bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold py-2 rounded-lg transition duration-300"
>
  Edit Profile
</button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition duration-300">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
