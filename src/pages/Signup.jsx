// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// // import Google and Facebook icons (optional if you use SVG inline or from a package)

// const Signup = () => {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (form.password !== form.confirmPassword) {
//       alert("Passwords don't match!");
//       return;
//     }

//     // TODO: Connect to backend
//     console.log('User signed up:', form);
//     navigate('/dashboard');
//   };

//   const handleGoogleSignup = () => {
//     // TODO: Integrate Google OAuth
//     alert('Google Sign-up clicked');
//   };

//   const handleFacebookSignup = () => {
//     // TODO: Integrate Facebook OAuth
//     alert('Facebook Sign-up clicked');
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-blue-100 to-purple-200 px-4">
//       <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 animate-fade-in">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Your Account</h2>

//         {/* Social Login Buttons */}
//         <div className="space-y-3 mb-6">
//           <button
//             onClick={handleGoogleSignup}
//             className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-100 transition"
//           >
//             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" className="w-5 h-5" />
//             <span>Sign up with Google</span>
//           </button>

//           <button
//             onClick={handleFacebookSignup}
//             className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition"
//           >
//             <svg
//               className="w-5 h-5 fill-white"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//             >
//               <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-2.9h2v-2.2c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2v1.9h2.3L16.2 15h-2v7A10 10 0 0 0 22 12z" />
//             </svg>
//             <span>Sign up with Facebook</span>
//           </button>
//         </div>

//         {/* OR Divider */}
//         <div className="flex items-center my-6">
//           <hr className="flex-grow border-gray-300" />
//           <span className="px-3 text-gray-500 text-sm">or sign up with email</span>
//           <hr className="flex-grow border-gray-300" />
//         </div>

//         {/* Email Signup Form */}
//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
//             <input
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-400"
//               placeholder="John Doe"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-600"
//               placeholder="you@example.com"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={form.password}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-600"
//               placeholder="••••••••"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
//             <input
//               type="password"
//               name="confirmPassword"
//               value={form.confirmPassword}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-600"
//               placeholder="••••••••"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition duration-300"
//           >
//             Sign Up
//           </button>
//         </form>

//         <p className="text-center text-sm text-gray-600 mt-5">
//           Already have an account?{' '}
//           <button
//             onClick={() => navigate('/login')}
//             className="text-indigo-600 hover:underline font-medium"
//           >
//             Login
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '', confirmPassword: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.password !== credentials.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Signing up:', credentials);
    navigate('/dashboard');
  };

  const handleGoogleSignup = () => {
    alert('Google signup clicked');
  };

  const handleFacebookSignup = () => {
    alert('Facebook signup clicked');
  };
 console.log(credentials);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-blue-200 px-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-xl p-8 animate-fade-in">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Your Account</h2>
         
        {/* Social Buttons */}
        <div className="space-y-3 mb-6">
          <button
            onClick={handleGoogleSignup}
            className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-100 transition"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span>Sign Up with Google</span>
          </button>

          <button
            onClick={handleFacebookSignup}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition"
          >
            <svg
              className="w-5 h-5 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-2.9h2v-2.2c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2v1.9h2.3L16.2 15h-2v7A10 10 0 0 0 22 12z" />
            </svg>
            <span>Sign Up with Facebook</span>
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-3 text-gray-500 text-sm">or sign up with email</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Email Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
              autoComplete="off"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              autoComplete="off"
              placeholder=""
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={credentials.confirmPassword}
              onChange={handleChange}
               autoComplete="off"
              required
              placeholder=""
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition duration-300 text-lg"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-5">
          Already have an account?{' '}
          <button
            onClick={() => navigate('/login')}
            className="text-indigo-600 hover:underline font-medium"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
