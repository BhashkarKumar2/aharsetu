// src/pages/ViewBookings.jsx
import React from 'react';

const bookings = [
  {
    id: 1,
    chefName: 'Chef Priya',
    date: '2025-05-10',
    time: '7:00 PM',
    status: 'Confirmed',
  },
  {
    id: 2,
    chefName: 'Chef Aman',
    date: '2025-05-12',
    time: '1:00 PM',
    status: 'Pending',
  },
];

const ViewBookings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Your Bookings</h2>
      <div className="max-w-3xl mx-auto bg-gray-500 p-6 rounded-lg shadow-md">
        {bookings.length === 0 ? (
          <p className="text-center text-gray-600">No bookings yet.</p>
        ) : (
          <ul className="space-y-4">
            {bookings.map((booking) => (
              <li key={booking.id} className="border p-4 rounded-md">
                <p><strong>Chef:</strong> {booking.chefName}</p>
                <p><strong>Date:</strong> {booking.date}</p>
                <p><strong>Time:</strong> {booking.time}</p>
                <p>
                  <strong>Status:</strong>{' '}
                  <span
                    className={`font-semibold ${
                      booking.status === 'Confirmed'
                        ? 'text-green-600'
                        : 'text-yellow-600'
                    }`}
                  >
                    {booking.status}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ViewBookings;
