import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaGlobeAsia, FaCloudRain, FaRegStar, FaUtensils, FaCameraRetro } from 'react-icons/fa'; // React Icons

const SylhetPage = () => {
  const attractions = [
    { name: "Jaflong", description: "A picturesque spot with rolling stones, hills, and the Mari River.", img: "https://images.unsplash.com/photo-1627961918342-f227b233a759?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTIyMjh8MHwxfHNlYXJjaHwxfHxKYWZsb25nfGVufDB8fHx8MTcwMTg4MDU0NHww&ixlib=rb-4.0.3&q=80&w=1080" },
    { name: "Ratargul Swamp Forest", description: "Bangladesh's only freshwater swamp forest, best explored by boat during monsoon.", img: "https://images.unsplash.com/photo-1628172905051-5b23d9b4b045?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTIyMjh8MHwxfHNlYXJjaHwxfHxSYXRhcmd1bCUyMFN3YW1wJTIwRm9yZXN0fGVufDB8fHx8MTcwMTg4MDY1MXww&ixlib=rb-4.0.3&q=80&w=1080" },
    { name: "Lalakhal", description: "Known for its stunning turquoise river water and surrounding hills.", img: "https://images.unsplash.com/photo-1628172905051-5b23d9b4b045?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTIyMjh8MHwxfHNlYXJjaHwxfHxMYWxhbWFsfGVufDB8fHx8MTcwMTg4MDY1MXww&ixlib=rb-4.0.3&q=80&w=1080" },
    { name: "Bichanakandi", description: "A 'stone kingdom' where rivers meet and flow over large rocks from the Meghalayan hills.", img: "https://images.unsplash.com/photo-1628172905051-5b23d9b4b045?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTIyMjh8MHwxfHNlYXJjaHwxfHxCaWNoYW5ha2FuZGl8ZW52fDB8fHx8MTcwMTg4MDY1MXww&ixlib=rb-4.0.3&q=80&w=1080" },
    { name: "Shah Jalal Dargah", description: "The revered shrine of Hazrat Shah Jalal, a major pilgrimage site.", img: "https://images.unsplash.com/photo-1628172905051-5b23d9b4b045?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTIyMjh8MHwxfHNlYXJjaHwxfHxTaGahJalallfGVufDB8fHx8MTcwMTg4MDY1MXww&ixlib=rb-4.0.3&q=80&w=1080" },
    { name: "Tea Gardens", description: "Endless rolling green tea estates, perfect for scenic walks and photography.", img: "https://images.unsplash.com/photo-1627961918342-f227b233a759?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTIyMjh8MHwxfHNlYXJjaHwxfHxTeWxoZXQlMjBUZWElMjBHYXJkZW5zfGVufDB8fHx8MTcwMTg4MDU0NHww&ixlib=rb-4.0.3&q=80&w=1080" },
  ];

  const localCuisine = [
    { name: "Shatkora Curry", description: "A unique citrus fruit used in beef or fish curries, distinctly Sylheti.", img: "https://via.placeholder.com/150/FF52D9/FFFFFF?text=Shatkora" },
    { name: "Akhni", description: "A flavorful rice dish similar to biryani, often cooked with meat.", img: "https://via.placeholder.com/150/FF52D9/FFFFFF?text=Akhni" },
    { name: "Horioh Buti", description: "A special type of bean curry, a local delicacy.", img: "https://via.placeholder.com/150/FF52D9/FFFFFF?text=Horioh" },
  ];

  const testimonials = [
    { name: "Md. Omar Faruk", comment: "Sylhet's tea gardens are truly breathtaking! The air is so fresh, and the culture is so rich. A must-visit for nature lovers.", rating: 5 },
    { name: "Fatema Akter", comment: "Ratargul Swamp Forest was an unforgettable experience. Boating through the submerged trees felt magical. Tourista made planning so easy!", rating: 4 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Discover Sylhet Division - Tourista</title>
        <meta name="description" content="Explore the breathtaking tea gardens, unique swamp forests, and spiritual heritage of Sylhet, Bangladesh. Find top attractions and local cuisine." />
        <meta name="keywords" content="Sylhet, Bangladesh, tea gardens, Jaflong, Ratargul, Lalakhal, Bichanakandi, Shah Jalal, tourism, travel, Tourista" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co/L5hY8mQ/sylhet-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fadeInUp">
            Discover the Green Paradise of Sylhet
          </h1>
          <p className="text-lg md:text-xl max-w-2xl animate-fadeInUp animation-delay-300">
            Lush tea gardens, serene rivers, and vibrant culture await you in Bangladesh's enchanting northeast.
          </p>
          <Link
            to="/packages/sylhet"
            className="mt-8 bg-[#ff52d9] hover:bg-[#e03ebf] text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg animate-fadeInUp animation-delay-600"
          >
            Explore Sylhet Packages
          </Link>
        </div>
      </div>

      {/* Overview Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="bg-white rounded-xl shadow-xl p-6 md:p-10 -mt-24 relative z-20 border border-gray-100 animate-slideInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
            Sylhet: Land of Two Leaves and a Bud
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-10">
            <div className="flex flex-col items-center p-4">
              <FaGlobeAsia className="text-5xl text-[#ff52d9] mb-3" />
              <p className="text-xl font-semibold text-gray-700">North-Eastern Bangladesh</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <FaCloudRain className="text-5xl text-[#ff52d9] mb-3" />
              <p className="text-xl font-semibold text-gray-700">Wet Monsoon, Mild Winters</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <FaMapMarkerAlt className="text-5xl text-[#ff52d9] mb-3" />
              <p className="text-xl font-semibold text-gray-700">Tea Gardens, Hills, Rivers</p>
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Sylhet, nestled in the picturesque embrace of northeastern Bangladesh, is an ethereal
            landscape defined by its vast, emerald-green tea gardens. This region, often hailed as
            the "Land of Two Leaves and a Bud," offers a refreshing escape from urban life,
            inviting travelers to immerse themselves in its serene natural beauty and vibrant
            cultural tapestry. From spiritual sanctuaries to stunning natural wonders, Sylhet
            promises an unforgettable journey for every explorer.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            The climate is typically tropical, with a heavy monsoon season bringing lush greenery
            and swelling rivers, while winters are mild and pleasant, ideal for exploration.
            Local communities, primarily Sylheti, are known for their warm hospitality and distinct
            dialect and culinary traditions.
          </p>
        </div>
      </section>

      {/* Top Attractions Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center animate-fadeIn">
          Must-Visit Attractions in Sylhet
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl group animate-slideInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-60">
                <img
                  src={attraction.img}
                  alt={attraction.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold text-white">{attraction.name}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-gray-600 text-base mb-3">{attraction.description}</p>
                <Link
                  to={`/attractions/${attraction.name.toLowerCase().replace(/\s/g, '-')}`}
                  className="text-[#ff52d9] hover:underline flex items-center font-semibold"
                >
                  Learn More <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Local Cuisine Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 bg-gradient-to-r from-gray-100 to-white rounded-xl shadow-inner mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center animate-fadeIn">
          Savor the Flavors of Sylhet
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {localCuisine.map((dish, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center text-center p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-fadeIn"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img
                src={dish.img}
                alt={dish.name}
                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-[#ff52d9]"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">{dish.name}</h3>
              <p className="text-gray-600 text-base">{dish.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#f0f0f0] py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center animate-fadeIn">
            What Travelers Say About Sylhet
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-[1.02] animate-slideInLeft"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaRegStar
                      key={i}
                      className={`text-xl ${
                        i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <p className="ml-3 text-lg font-semibold text-gray-700">{testimonial.name}</p>
                </div>
                <p className="text-gray-600 text-lg italic leading-relaxed">
                  "{testimonial.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#ff52d9] py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 animate-fadeIn">
            Ready to Explore Sylhet?
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-90 animate-fadeIn animation-delay-300">
            Let Tourista craft the perfect journey for you. Discover our curated Sylhet tour packages
            and embark on an unforgettable adventure.
          </p>
          <Link
            to="/packages/sylhet"
            className="inline-block bg-white text-[#ff52d9] font-bold py-4 px-10 rounded-full text-xl uppercase tracking-wide hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl animate-fadeInUp animation-delay-600"
          >
            View All Sylhet Tours
          </Link>
        </div>
      </section>

      {/* Simple Custom Animations for Tailwind */}
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
      `}</style>
    </div>
  );
};

export default SylhetPage;