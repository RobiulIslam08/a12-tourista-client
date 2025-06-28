import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaMapMarkerAlt, FaGlobeAsia, FaCloudRain, FaRegStar, FaUtensils } from 'react-icons/fa';

const SylhetPage = () => {
  const attractions = [
    { name: "Jaflong", description: "A picturesque spot with rolling stones, hills, and the Mari River, perfect for natural beauty.", img: "https://i.ibb.co/KZbf4zP/md-sameul-9-Uqze-QYk-Cgg-unsplash.jpg" },
    { name: "Ratargul Swamp Forest", description: "Bangladesh's only freshwater swamp forest, best explored by boat during monsoon, offering unique biodiversity.", img: "https://i.ibb.co/KxxGWFPj/miraz-khan-salman-hykh-ZSM3-S0g-unsplash.jpg" },
    { name: "Lalakhal", description: "Known for its stunning turquoise river water and surrounding hills, ideal for boat rides.", img: "https://i.ibb.co/x8FBNLd4/download.jpg" },
    { name: "Bichanakandi", description: "A 'stone kingdom' where rivers meet and flow over large rocks from the Meghalayan hills, providing cool waters.", img: "https://i.ibb.co/qY1tf21P/download-1.jpg" },
    { name: "Shah Jalal Dargah", description: "The revered shrine of Hazrat Shah Jalal, a major pilgrimage site and a place of spiritual tranquility.", img: "https://i.ibb.co/Q7FQhFy5/download-2.jpg" },
    { name: "Tea Gardens", description: "Endless rolling green tea estates, perfect for scenic walks, photography, and experiencing the aroma of fresh tea.", img: "https://i.ibb.co/vvqVsLSg/download-3.jpg" },
  ];

  

  const testimonials = [
    { name: "Md. Omar Faruk", comment: "Sylhet's tea gardens are truly breathtaking! The air is so fresh, and the culture is so rich. A must-visit for nature lovers.", rating: 5 },
    { name: "Fatema Akter", comment: "Ratargul Swamp Forest was an unforgettable experience. Boating through the submerged trees felt magical. Absolutely stunning!", rating: 4 },
  ];

  return (
    <div className="min-h-screen  text-white"> {/* Changed background to black */}
      <Helmet>
        <title>Discover Sylhet Division - Tourista</title>
        <meta name="description" content="Explore the breathtaking tea gardens, unique swamp forests, and spiritual heritage of Sylhet, Bangladesh. Immersive information and stunning visuals." />
        <meta name="keywords" content="Sylhet, Bangladesh, tea gardens, Jaflong, Ratargul, Lalakhal, Bichanakandi, Shah Jalal, tourism, travel, Tourista" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-96 md:h-[550px] bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co/Lh0NBbgm/download-4.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-70"></div> {/* Increased opacity for dark mode */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fadeInUp">
            Discover the Green Paradise of Sylhet
          </h1>
          <p className="text-lg md:text-xl max-w-3xl animate-fadeInUp animation-delay-300">
            Lush tea gardens, serene rivers, and vibrant culture await you in Bangladesh's enchanting northeast.
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="bg-gray-900 rounded-xl shadow-xl p-6 md:p-10 -mt-24 relative z-20 border border-gray-700 animate-slideInUp"> {/* Darker background for card */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            Sylhet: Land of Two Leaves and a Bud
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-10">
            <div className="flex flex-col items-center p-4">
              <FaGlobeAsia className="text-5xl text-[#ff52d9] mb-3" />
              <p className="text-xl font-semibold text-gray-300">North-Eastern Bangladesh</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <FaCloudRain className="text-5xl text-[#ff52d9] mb-3" />
              <p className="text-xl font-semibold text-gray-300">Wet Monsoon, Mild Winters</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <FaMapMarkerAlt className="text-5xl text-[#ff52d9] mb-3" />
              <p className="text-xl font-semibold text-gray-300">Tea Gardens, Hills, Rivers</p>
            </div>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Sylhet, nestled in the picturesque embrace of northeastern Bangladesh, is an ethereal
            landscape defined by its vast, emerald-green tea gardens. This region, often hailed as
            the "Land of Two Leaves and a Bud," offers a refreshing escape from urban life,
            inviting travelers to immerse themselves in its serene natural beauty and vibrant
            cultural tapestry. From spiritual sanctuaries to stunning natural wonders, Sylhet
            promises an unforgettable journey for every explorer.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            The climate is typically tropical, with a heavy monsoon season bringing lush greenery
            and swelling rivers, while winters are mild and pleasant, ideal for exploration.
            Local communities, primarily Sylheti, are known for their warm hospitality and distinct
            dialect and culinary traditions. The serene atmosphere and natural grandeur make it a top destination.
          </p>
        </div>
      </section>

      {/* Top Attractions Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center animate-fadeIn">
          Must-See Wonders of Sylhet
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
                {/* Removed extra link */}
              </div>
            </div>
          ))}
        </div>
      </section>

    

      {/* Testimonials Section */}
      <section className="bg-gray-900 py-12 md:py-16"> {/* Darker background */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center animate-fadeIn">
            Voices from Our Sylhet Travelers
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
                        i < testimonial.rating ? "text-yellow-400" : "text-gray-500" // Adjusted for dark theme
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

      {/* Custom Animations for Tailwind (add to your main CSS file) */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out forwards;
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animation-delay-100 { animation-delay: 0.1s; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-600 { animation-delay: 0.6s; }

        /* Custom shadow for dark mode */
        .shadow-xl-dark {
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
        }
        .shadow-inner-dark {
            box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default SylhetPage;