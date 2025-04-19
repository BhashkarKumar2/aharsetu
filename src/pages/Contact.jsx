import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_r8a6alr',       // Your EmailJS service ID
        'template_pq0xh0d',      // Your template ID for admin
        form.current,
        '1vE5NartqLzqPi4AT'      // Your public key
      )
      .then((result) => {
        console.log('Admin email sent:', result.text);
        setStatus('Message sent successfully!');
        form.current.reset();
      })
      .catch((error) => {
        console.error('Failed to send email:', error.text);
        setStatus('Failed to send message. Please try again.');
      });

    // Clear status message after 5 seconds
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <div className="min-h-screen px-4 py-12 flex flex-col items-center justify-center bg-gradient-to-br from-white to-indigo-50">
      <h1 className="text-4xl font-bold text-indigo-600 mb-8">Contact Us</h1>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 space-y-6 border border-gray-200"
      >
        <input
          type="text"
          name="user_name"
          required
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
        />

        <input
          type="email"
          name="user_email"
          required
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
        />

        <textarea
          name="message"
          required
          placeholder="Your Message"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700 h-32 resize-none"
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition-colors duration-300"
        >
          Send Message
        </button>

        {status && <p className="text-center text-sm text-gray-700 mt-2">{status}</p>}
      </form>
    </div>
  );
};

export default Contact;
