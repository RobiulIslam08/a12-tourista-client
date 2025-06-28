import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaCity, FaLandmark, FaCar, FaRegStar, FaShoppingBag } from 'react-icons/fa';

const DhakaCentralPage = () => {
  const attractions = [
    { name: "Ahsan Manzil", description: "The pink palace, a majestic former residence of the Nawab of Dhaka, showcasing intricate architecture and historical significance.", img: "https://i.ibb.co/XrFxdTsN/download-9.jpg" },
    { name: "Lalbagh Fort", description: "An unfinished 17th-century Mughal fort complex, featuring stunning architecture, a mosque, and the tomb of Pari Bibi.", img: "https://i.ibb.co/BVtp85PG/download-10.jpg" },
    { name: "Dhakeshwari National Temple", description: "The largest Hindu temple in Bangladesh, a central hub for Hindu culture and religious festivals.", img: "https://i.ibb.co/23JH3sG0/download-13.jpg" },
    { name: "National Parliament House", description: "An architectural masterpiece by Louis Kahn, representing modern Bangladeshi identity.", img: "https://i.ibb.co/7x6JBkMw/download-12.jpg" },
    { name: "Bangabandhu Sheikh Mujibur Rahman Novo Theatre", description: "A planetarium offering educational and entertaining shows on space and science.", img: "https://i.ibb.co/dwVq3dHB/download-14.jpg" },
    { name: "Shat Gombuj Mosque (Bagerhat)", description: "A UNESCO World Heritage Site outside Dhaka, a magnificent 15th-century mosque with 60 domes (77 original).", img: "https://i.ibb.co/Y4qc0Jjz/download-15.jpg" },
  ];


  const testimonials = [
    { name: "Zara Khan", comment: "Dhaka's historical sites are fascinating! Lalbagh Fort truly takes you back in time. The energy of the city is unique.", rating: 4 },
    { name: "Arif Hossain", comment: "The food scene in Dhaka is incredible. Every street corner has a new flavor to discover, especially the Biryani!", rating: 5 },
  ];

  return (
    <div className="min-h-screen  text-white">
      <Helmet>
        <title>Dhaka & Central Bangladesh - Tourista</title>
        <meta name="description" content="Explore the bustling capital Dhaka, its historical landmarks, vibrant culture, and delicious street food. Discover central Bangladesh attractions." />
        <meta name="keywords" content="Dhaka, Bangladesh, capital, Ahsan Manzil, Lalbagh Fort, Dhakeshwari Temple, Parliament House, street food, tourism, travel" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-96 md:h-[550px] bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co/BVtp85PG/download-10.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fadeInUp">
            Dhaka: The Heartbeat of Bangladesh
          </h1>
          <p className="text-lg md:text-xl max-w-3xl animate-fadeInUp animation-delay-300">
            Immerse yourself in the vibrant history, bustling markets, and modern dynamism of the capital.
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="bg-gray-900 rounded-xl shadow-xl p-6 md:p-10 -mt-24 relative z-20 border border-gray-700 animate-slideInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            Dhaka & Central: Where History Meets Modernity
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-10">
            <div className="flex flex-col items-center p-4">
              <FaCity className="text-5xl text-[#ff52d9] mb-3" />
              <p className="text-xl font-semibold text-gray-300">Bustling Capital City</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <FaLandmark className="text-5xl text-[#ff52d9] mb-3" />
              <p className="text-xl font-semibold text-gray-300">Rich Historical Heritage</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <FaCar className="text-5xl text-[#ff52d9] mb-3" />
              <p className="text-xl font-semibold text-gray-300">Cultural & Commercial Hub</p>
            </div>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Dhaka, the vibrant capital of Bangladesh, is a mega-city where ancient history seamlessly
            blends with modern urban life. It's a city of rickshaws, mosques, and bustling markets,
            offering a sensory overload and a deep dive into Bangladeshi culture. From grand Mughal
            forts and colonial palaces to modern architectural marvels, Dhaka tells the story of centuries.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Beyond the capital, central Bangladesh offers a diverse range of experiences. This includes
            the historical wonders of Bagerhat (a UNESCO World Heritage Site) and the serene
            countryside. Dhaka serves as the cultural, economic, and political heart, a dynamic
            destination for every traveler.
          </p>
        </div>
      </section>

      {/* Top Attractions Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center animate-fadeIn">
          Iconic Landmarks of Dhaka & Central
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl-dark group animate-slideInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-60">
                <img
                  src={attraction.img}
                  alt={attraction.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold text-white">{attraction.name}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-gray-300 text-base mb-3">{attraction.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* Testimonials Section */}
      <section className="bg-gray-900 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center animate-fadeIn">
            What Our City Explorers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-[1.02] animate-slideInLeft"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaRegStar
                      key={i}
                      className={`text-xl ${
                        i < testimonial.rating ? "text-yellow-400" : "text-gray-500"
                      }`}
                    />
                  ))}
                  <p className="ml-3 text-lg font-semibold text-white">{testimonial.name}</p>
                </div>
                <p className="text-gray-300 text-lg italic leading-relaxed">
                  "{testimonial.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Animations (same as others) */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } } .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } } .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        @keyframes slideInUp { from { opacity: 0; transform: translateY(50px); } to { opacity: 1; transform: translateY(0); } } .animate-slideInUp { animation: slideInUp 0.8s ease-out forwards; }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } } .animate-slideInLeft { animation: slideInLeft 0.8s ease-out forwards; }
        .animation-delay-100 { animation-delay: 0.1s; } .animation-delay-200 { animation-delay: 0.2s; } .animation-delay-300 { animation-delay: 0.3s; } .animation-delay-400 { animation-delay: 0.4s; } .animation-delay-500 { animation-delay: 0.5s; } .animation-delay-600 { animation-delay: 0.6s; }
        .shadow-xl-dark { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2); }
        .shadow-inner-dark { box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.2); }
      `}</style>
    </div>
  );
};

export default DhakaCentralPage;