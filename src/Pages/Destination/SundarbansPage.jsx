import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaPaw, FaLeaf, FaShip, FaRegStar, FaWater } from 'react-icons/fa';

const SundarbansPage = () => {
  const attractions = [
    { name: "Royal Bengal Tiger", description: "The iconic inhabitant of the Sundarbans, a majestic and elusive creature.", img: "https://i.ibb.co/S5cvLcT/backpacker-admiring-trees.jpg" },
    { name: "Mangrove Forests", description: "The world's largest mangrove forest, a unique ecosystem supporting incredible biodiversity.", img: "https://i.ibb.co/XxnNL9pz/download-11.jpg" },
    { name: "Saltwater Crocodiles", description: "Large, ancient reptiles often seen basking along the riverbanks.", img: "https://i.ibb.co/dqwSYVg/download.jpg" },
    { name: "Spotted Deer", description: "Graceful deer found in abundance, often seen foraging near the water's edge.", img: "https://i.ibb.co/5gXhxPxy/download-1.jpg" },
    { name: "Bird Watching", description: "Home to hundreds of bird species, including kingfishers, eagles, and various migratory birds.", img: "https://i.ibb.co/6RmMnxmC/images.jpg" },
    { name: "Dakhin Shahbazpur (Dublar Char)", description: "A picturesque island used by fishermen for drying fish, especially during the winter fishing festival.", img: "https://i.ibb.co/67SThqfj/download-2.jpg" },
  ];



  const testimonials = [
    { name: "Dr. Alim Khan", comment: "The Sundarbans are an ecological marvel. Seeing a tiger in its natural habitat, even from afar, was an unforgettable privilege.", rating: 5 },
    { name: "Sophia Ahmed", comment: "The serenity of the mangroves is incredible. Cruising through the waterways, surrounded by nature, was truly peaceful.", rating: 4 },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>The Sundarbans - Tourista</title>
        <meta name="description" content="Explore the majestic Sundarbans, the world's largest mangrove forest, home to the Royal Bengal Tiger and unique wildlife. An immersive experience into nature's marvel." />
        <meta name="keywords" content="Sundarbans, Bangladesh, mangrove forest, Royal Bengal Tiger, wildlife, ecotourism, nature, forest safari, Tourista" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-96 md:h-[550px] bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co/84TDkVLc/images-1.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fadeInUp">
            The Enigmatic Sundarbans
          </h1>
          <p className="text-lg md:text-xl max-w-3xl animate-fadeInUp animation-delay-300">
            Journey into the world's largest mangrove forest, home to diverse wildlife and untamed beauty.
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="bg-gray-900 rounded-xl shadow-xl p-6 md:p-10 -mt-24 relative z-20 border border-gray-700 animate-slideInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            The Sundarbans: A Symphony of Nature
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-10">
            <div className="flex flex-col items-center p-4">
              <FaPaw className="text-5xl text-[#ff52d9] mb-3" />
              <p className="text-xl font-semibold text-gray-300">Home of Royal Bengal Tiger</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <FaLeaf className="text-5xl text-[#ff52d9] mb-3" />
              <p className="text-xl font-semibold text-gray-300">Largest Mangrove Forest</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <FaShip className="text-5xl text-[#ff52d9] mb-3" />
              <p className="text-xl font-semibold text-gray-300">Unique Riverine Ecosystem</p>
            </div>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            The Sundarbans, a UNESCO World Heritage Site, is an intricate network of waterways
            and lush mangrove forests stretching across the delta of the Ganges, Brahmaputra,
            and Meghna rivers. It's not just the world's largest mangrove forest but also a
            critical ecosystem supporting a vast array of wildlife, most notably the majestic
            Royal Bengal Tiger.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            This unique environment, where land meets sea, offers a raw and unforgettable nature
            experience. Cruising through its dense waterways, observing diverse birdlife, deer,
            crocodiles, and perhaps even a glimpse of the elusive tiger, truly connects visitors
            with the wild heart of Bangladesh. It's a place of unparalleled natural beauty and ecological significance.
          </p>
        </div>
      </section>

      {/* Top Attractions Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center animate-fadeIn">
          Wildlife & Natural Wonders
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
            Voices from Our Forest Explorers
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

export default SundarbansPage;