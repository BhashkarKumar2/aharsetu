// import React, { useState } from 'react';

// const BookChef = () => {
//   const sampleChef = {
//     id: 1,
//     fullName: 'Chef anay Rao',
//     specialties: 'Indian Fusion, Vegan',
//     rate: 1200,
//     photo: 'https://images.unsplash.com/photo-1659354219145-dedd2324698e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZiUyMHBlcm9zbiUyMGltYWhlfGVufDB8fDB8fHww',
//     bio: 'Chef anay has over 12 years of experience crafting vibrant Indian fusion dishes. He specializes in vegan meals, blending tradition with modern flair. He’s cooked for celebrities and families alike, bringing joy to every table.'
//   };

//   const [bookingDetails, setBookingDetails] = useState({
//     date: '',
//     time: '',
//     guestCount: '',
//     addOns: [],
//     notes: ''
//   });

//   const toggleAddOn = (addOn) => {
//     setBookingDetails(prev => ({
//       ...prev,
//       addOns: prev.addOns.includes(addOn)
//         ? prev.addOns.filter(a => a !== addOn)
//         : [...prev.addOns, addOn]
//     }));
//   };

//   const handleBooking = () => {
//     console.log('Booking details:', bookingDetails);
//     // Redirect to payment or next step
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
//       <div className="bg-white text-black rounded-2xl shadow-lg max-w-4xl w-full p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Left Section: Chef Info */}
//         <div className="flex flex-col items-center">
//           <img
//             src={sampleChef.photo}
//             alt={sampleChef.fullName}
//             className="rounded-xl w-full max-w-xs object-cover"
//           />
//           <div className="mt-4 text-center">
//             <h2 className="text-xl font-semibold">{sampleChef.fullName}</h2>
//             <p className="italic text-sm text-gray-600 mt-1">
//               {sampleChef.specialties}
//             </p>
//             <p className="text-sm text-gray-700 mt-3">
//               {sampleChef.bio}
//             </p>
//           </div>
//         </div>

//         {/* Right Section: Booking Form */}
//         <div className="flex flex-col gap-4">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label className="text-sm font-semibold">Select Date</label>
//               <input
//                 type="date"
//                 value={bookingDetails.date}
//                 onChange={(e) =>
//                   setBookingDetails({ ...bookingDetails, date: e.target.value })
//                 }
//                 className="w-full p-2 border rounded-lg"
//               />
//             </div>
//             <div>
//               <label className="text-sm font-semibold">Select Time</label>
//               <input
//                 type="time"
//                 value={bookingDetails.time}
//                 onChange={(e) =>
//                   setBookingDetails({ ...bookingDetails, time: e.target.value })
//                 }
//                 className="w-full p-2 border rounded-lg"
//               />
//             </div>
//             <div className="sm:col-span-2">
//               <label className="text-sm font-semibold">Guest Count</label>
//               <input
//                 type="number"
//                 placeholder="Enter guest count"
//                 value={bookingDetails.guestCount}
//                 onChange={(e) =>
//                   setBookingDetails({
//                     ...bookingDetails,
//                     guestCount: e.target.value
//                   })
//                 }
//                 className="w-full p-2 border rounded-lg"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="text-sm font-semibold">Add-Ons</label>
//             <div className="flex gap-4 mt-2">
//               {['Decor', 'Cleanup'].map((addOn) => (
//                 <button
//                   key={addOn}
//                   onClick={() => toggleAddOn(addOn)}
//                   className={`px-4 py-2 rounded-md font-medium transition duration-150 ${
//   bookingDetails.addOns.includes(addOn)
//     ? 'bg-black text-white ring-2 ring-white'
//     : 'bg-gray-800 text-white hover:bg-gray-700'
// }`}

//                 >
//                   {addOn}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div>
//             <label className="text-sm font-semibold">Additional Notes</label>
//             <textarea
//               value={bookingDetails.notes}
//               onChange={(e) =>
//                 setBookingDetails({ ...bookingDetails, notes: e.target.value })
//               }
//               className="w-full p-3 border rounded-lg h-32 mt-2"
//               placeholder="Special requests, allergies, etc."
//             ></textarea>
//           </div>

//           <button
//             onClick={handleBooking}
//             className="bg-black text-white mt-4 py-3 rounded-lg font-semibold hover:bg-gray-800"
//           >
//             Proceed to Payment
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookChef;


import React, { useState } from 'react';

const BookChef = () => {
  const sampleChef = {
    id: 1,
    fullName: 'Chef anay Rao',
    specialties: 'Indian Fusion, Vegan',
    rate: 1200,
    photo: 'https://images.unsplash.com/photo-1659354219145-dedd2324698e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZiUyMHBlcm9zbiUyMGltYWhlfGVufDB8fDB8fHww',
    bio: 'Chef anay has over 12 years of experience crafting vibrant Indian fusion dishes. He specializes in vegan meals, blending tradition with modern flair. He’s cooked for celebrities and families alike, bringing joy to every table.'
  };

  const [bookingDetails, setBookingDetails] = useState({
    date: '',
    time: '',
    guestCount: '',
    addOns: [],
    notes: ''
  });

  const toggleAddOn = (addOn) => {
    setBookingDetails(prev => ({
      ...prev,
      addOns: prev.addOns.includes(addOn)
        ? prev.addOns.filter(a => a !== addOn)
        : [...prev.addOns, addOn]
    }));
  };

  const handleBooking = () => {
    console.log('Booking details:', bookingDetails);
    alert("This will redirect to Razorpay when backend is ready."); // Placeholder for Razorpay
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <div className="bg-white text-black rounded-2xl shadow-lg max-w-4xl w-full p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left Section: Chef Info */}
        <div className="flex flex-col items-center">
          <img
            src={sampleChef.photo}
            alt={sampleChef.fullName}
            className="rounded-xl w-full max-w-xs object-cover"
          />
          <div className="mt-4 text-center">
            <h2 className="text-xl font-semibold">{sampleChef.fullName}</h2>
            <p className="italic text-sm text-gray-600 mt-1">
              {sampleChef.specialties}
            </p>
            <p className="text-sm text-gray-700 mt-3">
              {sampleChef.bio}
            </p>
          </div>
        </div>

        {/* Right Section: Booking Form */}
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold">Select Date</label>
              <input
                type="date"
                value={bookingDetails.date}
                onChange={(e) =>
                  setBookingDetails({ ...bookingDetails, date: e.target.value })
                }
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="text-sm font-semibold">Select Time</label>
              <input
                type="time"
                value={bookingDetails.time}
                onChange={(e) =>
                  setBookingDetails({ ...bookingDetails, time: e.target.value })
                }
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-semibold">Guest Count</label>
              <input
                type="number"
                placeholder="Enter guest count"
                value={bookingDetails.guestCount}
                onChange={(e) =>
                  setBookingDetails({
                    ...bookingDetails,
                    guestCount: e.target.value
                  })
                }
                className="w-full p-2 border rounded-lg"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold">Add-Ons</label>
            <div className="flex gap-4 mt-2">
              {['Decor', 'Cleanup'].map((addOn) => (
                <button
                  key={addOn}
                  onClick={() => toggleAddOn(addOn)}
                  className={`px-4 py-2 rounded-md font-medium ${
                    bookingDetails.addOns.includes(addOn)
                      ? 'bg-black text-white border-2 border-white'
                      : 'bg-gray-800 text-gray-400'
                  }`}
                >
                  {addOn}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold">Additional Notes</label>
            <textarea
              value={bookingDetails.notes}
              onChange={(e) =>
                setBookingDetails({ ...bookingDetails, notes: e.target.value })
              }
              className="w-full p-3 border rounded-lg h-32 mt-2"
              placeholder="Special requests, allergies, etc."
            ></textarea>
          </div>

          <button
            onClick={handleBooking}
            className="bg-black text-white mt-4 py-3 rounded-lg font-semibold hover:bg-gray-800"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookChef;
