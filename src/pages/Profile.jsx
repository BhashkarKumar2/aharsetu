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
import React, { useState } from 'react';

const Profile = () => {
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    address: '123 Main Street, New York, NY',
    phone: '+1 123-456-7890',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile updated:', formData);
    alert('Profile updated successfully!');
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center">
      <div className="w-full max-w-lg bg-gray-300 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">My Profile</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            placeholder="Full Name"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            placeholder="Email Address"
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            placeholder="Address"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            placeholder="Phone Number"
          />
          <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
