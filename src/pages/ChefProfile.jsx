const sampleChef = {
    fullName: 'Chef Ananya Rao',
    bio: 'Experienced fusion chef with a flair for seasonal ingredients.',
    specialties: 'Indian Fusion, Vegan, Gluten-Free',
    hourlyRate: 1200,
    menu: '• Appetizer: Tandoori Mushrooms\n• Main: Jackfruit Biryani\n• Dessert: Coconut Vegan Ladoo',
    certificates: 'Certified Food Safety Level 2',
    photo: 'https://source.unsplash.com/featured/?chef',
  };
  
  const ChefProfile = () => {
    const {
      fullName,
      bio,
      specialties,
      hourlyRate,
      menu,
      certificates,
      photo,
    } = sampleChef;
  
    return (
      <div className="max-w-3xl mx-auto p-6">
        <img src={photo} alt={fullName} className="rounded w-full h-64 object-cover mb-4" />
        <h2 className="text-3xl font-bold">{fullName}</h2>
        <p className="text-gray-600 italic">{specialties}</p>
        <p className="my-2">{bio}</p>
        <div className="bg-white rounded shadow p-4 mt-4">
          <h3 className="font-semibold mb-2">Sample Menu:</h3>
          <pre className="text-gray-700 whitespace-pre-wrap">{menu}</pre>
        </div>
        <div className="bg-white rounded shadow p-4 mt-4">
          <h3 className="font-semibold mb-2">Hourly Rate:</h3>
          <p className="text-gray-800 font-bold">₹{hourlyRate}/hr</p>
        </div>
        <div className="bg-white rounded shadow p-4 mt-4">
          <h3 className="font-semibold mb-2">Certificates:</h3>
          <p className="text-gray-800">{certificates}</p>
        </div>
      </div>
    );
  };
  
  export default ChefProfile;
  