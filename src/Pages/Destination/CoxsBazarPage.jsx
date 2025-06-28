import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaMapMarkerAlt, FaSun, FaFish, FaRegStar, FaAnchor, FaWater } from 'react-icons/fa';

const CoxsBazarPage = () => {
	const attractions = [
		{ name: "Longest Sea Beach", description: "The world's longest natural sandy beach, stretching over 120 km of golden sands, perfect for long walks and relaxation.", img: "https://i.ibb.co/1Yb88kt1/download-7.jpg" },
		{ name: "Himchori Waterfall", description: "A beautiful waterfall cascading down lush green hills, offering scenic views and a refreshing escape near the beach.", img: "https://i.ibb.co/DPnxQwjH/download-3.jpg" },
		{ name: "Inani Beach", description: "Known for its stunning coral rocks and crystal-clear waters, especially beautiful during low tide.", img: "https://i.ibb.co/W4ZsZK9S/download-4.jpg" },
		{ name: "Saint Martin's Island", description: "Bangladesh's only coral island, offering pristine beaches, vibrant marine life, and a tranquil atmosphere (seasonal access by ferry).", img: "https://i.ibb.co/YvbMCbF/download-6.jpg" },
		{ name: "Moheshkhali Island", description: "Accessible by boat, featuring ancient temples, Buddhist pagodas, and traditional salt farming, showcasing local life.", img: "https://i.ibb.co/Kjn4YThF/download-7.jpg" },
		{ name: "Aggmeda Khyang", description: "A significant Buddhist monastery showcasing traditional Rakhine architecture and a peaceful spiritual environment.", img: "https://i.ibb.co/HDnQ8kkc/download-8.jpg" },
	];



	const testimonials = [
		{ name: "Aisha Begum", comment: "The sunsets at Cox's Bazar beach are simply magical! The vastness of the beach is truly humbling. A perfect relaxing getaway.", rating: 5 },
		{ name: "Rahim Chowdhury", comment: "Saint Martin's Island was a slice of paradise. The clear water and fresh coconut water made the trip worthwhile. A must-visit!", rating: 4 },
	];

	return (
		<div className="min-h-screen  text-white">
			<Helmet>
				<title>Discover Cox's Bazar & Chittagong - Tourista</title>
				<meta name="description" content="Discover Cox's Bazar, home to the world's longest natural sea beach, and the cultural richness of Chittagong. Immersive information and stunning visuals." />
				<meta name="keywords" content="Cox's Bazar, Chittagong, Bangladesh, sea beach, longest beach, Saint Martin's, Himchori, tourism, travel, Tourista" />
			</Helmet>

			{/* Hero Section */}
			<div className="relative h-96 md:h-[550px] bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co/YvbMCbF/download-6.jpg')" }}>
				<div className="absolute inset-0 bg-black opacity-70"></div>
				<div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
					<h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fadeInUp">
						The Golden Sands of Cox's Bazar
					</h1>
					<p className="text-lg md:text-xl max-w-3xl animate-fadeInUp animation-delay-300">
						Relax on the world's longest natural sea beach and discover the vibrant coastal life.
					</p>
				</div>
			</div>

			{/* Overview Section */}
			<section className="container mx-auto px-4 py-12 md:py-16">
				<div className="bg-gray-900 rounded-xl shadow-xl p-6 md:p-10 -mt-24 relative z-20 border border-gray-700 animate-slideInUp">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
						Cox's Bazar: Where the Sky Meets the Sea
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-10">
						<div className="flex flex-col items-center p-4">
							<FaAnchor className="text-5xl text-[#ff52d9] mb-3" />
							<p className="text-xl font-semibold text-gray-300">World's Longest Beach</p>
						</div>
						<div className="flex flex-col items-center p-4">
							<FaWater className="text-5xl text-[#ff52d9] mb-3" />
							<p className="text-xl font-semibold text-gray-300">Bay of Bengal Coastline</p>
						</div>
						<div className="flex flex-col items-center p-4">
							<FaSun className="text-5xl text-[#ff52d9] mb-3" />
							<p className="text-xl font-semibold text-gray-300">Sunny & Humid Climate</p>
						</div>
					</div>
					<p className="text-lg text-gray-300 leading-relaxed mb-6">
						Cox's Bazar, a jewel on Bangladesh's southeastern coast, is globally acclaimed for its
						magnificent natural sandy beach, stretching an awe-inspiring 120 kilometers. This
						pristine coastline offers breathtaking vistas, especially during sunrise and sunset,
						making it a paradise for photographers and nature enthusiasts alike. Beyond the iconic beach,
						the region is a gateway to diverse experiences, from tranquil islands to bustling local markets.
					</p>
					<p className="text-lg text-gray-300 leading-relaxed">
						The climate is tropical, with warm temperatures year-round and a distinct monsoon season.
						It's a hub for marine life, fresh seafood, and unique coastal culture. Nearby Chittagong,
						Bangladesh's second-largest city, adds another layer of exploration with its historical
						sites, religious landmarks, and a vibrant urban pulse. This fusion of natural beauty and urban
						charm makes the region truly captivating.
					</p>
				</div>
			</section>

			{/* Top Attractions Section */}
			<section className="container mx-auto px-4 py-12 md:py-16">
				<h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center animate-fadeIn">
					Coastal Gems & Nearby Wonders
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
						Traveler's Voices from the Coast
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
											className={`text-xl ${i < testimonial.rating ? "text-yellow-400" : "text-gray-500"
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

			{/* (No CTA section for "no extra links" requirement) */}

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

export default CoxsBazarPage;