// BlogDetailsPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { motion } from 'framer-motion'; // Smooth animation এর জন্য framer-motion ব্যবহার করবো

// আপনার ডামি ডেটা (প্রোডাকশন অ্যাপ্লিকেশনে এটি API থেকে আসবে)
const allTours = [
  {
    id: 1,
    spotPhoto: "https://i.ibb.co/8sXYy5q/nafiul-hasan-ve-Ir-XDU9-WQI-unsplash.jpg",
    tourType: "Beach",
    tripTitle: "Cox's Bazar Beach Retreat",
    price: "$250",
    aboutTour: "Experience the longest natural sea beach in the world at Cox's Bazar. Enjoy the golden sand, crystal clear water, and vibrant local culture. This tour offers a perfect blend of relaxation and adventure, with opportunities for parasailing, jet skiing, and exploring local markets. Our expert guides will ensure a memorable and safe journey. Package includes accommodation, meals, and guided tours.",
    fullDescription: "Cox's Bazar, located in Bangladesh, boasts the world's longest natural sandy beach, stretching over 120 kilometers. This retreat offers an unparalleled opportunity to unwind amidst its serene beauty. Guests can indulge in various water sports, savor fresh seafood, and witness breathtaking sunsets. Beyond the beach, explore nearby Himchari waterfall, Inani Beach with its unique rock formations, and the bustling Burmese Market for local handicrafts. The package is designed for ultimate comfort and includes luxury beachfront resorts, all meals, and personalized guided excursions. Discover the vibrant culture and hospitality of Bangladesh while creating lasting memories.",
    details: [
      { heading: "Accommodation", description: "3-star beachfront hotel with sea view rooms." },
      { heading: "Meals", description: "Breakfast, Lunch, Dinner included (Local and Continental cuisine)." },
      { heading: "Activities", description: "Beach relaxation, parasailing, jet skiing, sunset cruise, local market visit, Himchari waterfall trip." },
      { heading: "Transportation", description: "Private AC transport from Dhaka and local transfers." },
      { heading: "Guide", description: "Experienced local tour guide throughout the trip." }
    ],
    gallery: [
      "https://i.ibb.co/8sXYy5q/nafiul-hasan-ve-Ir-XDU9-WQI-unsplash.jpg",
      "https://i.ibb.co/yndBjyzQ/download-5.jpg",
      "https://i.ibb.co/WbCxfYn/download-6.jpg",
      "https://i.ibb.co/5g9dCLVW/images.jpg"
    ]
  },
  {
    id: 2,
    spotPhoto: "https://i.ibb.co/gtjYKCB/1697290342012.jpg",
    tripTitle: "Discover the Ruins of Mahasthangarh",
    price: "$300",
    aboutTour: "Explore the ancient ruins of Mahasthangarh, the oldest city in Bangladesh, and delve into its rich history and archaeological significance.",
    fullDescription: "Mahasthangarh, dating back to the 3rd century BC, is one of the earliest urban archaeological sites discovered in Bangladesh. This tour takes you on a journey through time, exploring the remnants of Pundranagara, the capital of ancient Pundravardhana. You'll visit the citadel, various stupas, monasteries, and ancient temples, offering insights into the region's rich Buddhist, Hindu, and Muslim heritage. The site is a treasure trove for historians and archaeologists.",
    details: [
      { heading: "Historical Site Visits", description: "Mahasthangarh Citadel, Govinda Bhita, Gokul Medh, Bairagir Bhita." },
      { heading: "Museum Visit", description: "Mahasthangarh Museum." },
      { heading: "Cultural Insights", description: "Learn about ancient civilizations and their practices." },
      { heading: "Transportation", description: "AC transport from Dhaka/Bogra." },
      { heading: "Guide", description: "Specialized archaeological guide." }
    ],
    gallery: [
      "https://i.ibb.co/6cBZHQBw/download-1.jpg",
      "https://i.ibb.co/gtjYKCB/1697290342012.jpg",
      "https://i.ibb.co/Rkvb45tJ/download.jpg",
     
    ]
  },
  {
    id: 3,
    spotPhoto: "https://i.ibb.co/yfk4cMP/river-runs-through-jungle.jpg",
    tripTitle: "Sundarbans Mangrove Forest Adventure",
    price: "$400",
    aboutTour: "Join an adventure into the Sundarbans, the largest mangrove forest in the world, home to the majestic Bengal tiger and diverse wildlife.",
    fullDescription: "Embark on an unforgettable adventure into the heart of the Sundarbans, a UNESCO World Heritage Site and the world's largest mangrove forest. This expedition offers a chance to spot the elusive Royal Bengal Tiger, various species of deer, monkeys, crocodiles, and a myriad of birdlife. Travel by specialized boats, explore narrow creeks, and learn about the unique ecosystem and the life of the forest dwellers. An ideal trip for nature lovers and wildlife photographers.",
    details: [
      { heading: "Boat Safari", description: "Multi-day boat safari through the Sundarbans creeks and rivers." },
      { heading: "Wildlife Spotting", description: "Opportunities to see Royal Bengal Tiger, deer, monkeys, birds, crocodiles." },
      { heading: "Forest Trails", description: "Guided walks in designated safe zones." },
      { heading: "Accommodation", description: "Comfortable cabins on the boat with basic amenities." },
      { heading: "Meals", description: "All meals included, prepared fresh onboard." }
    ],
    gallery: [
      "https://i.ibb.co/yfk4cMP/river-runs-through-jungle.jpg",
      "https://i.ibb.co/5WFXXRvv/download-4.jpg",
      "https://i.ibb.co/zTVgqyzL/download-3.jpg",
      "https://i.ibb.co/zV5BfZ24/download-5.jpg"
    ]
  },
  {
    id: 4,
    spotPhoto: "https://i.ibb.co/pZZTsm4/rangamati.jpg",
    tripTitle: "Rangamati Cultural Exploration",
    price: "$350",
    aboutTour: "Discover the cultural heritage of Rangamati, a place known for its indigenous communities, scenic beauty, and traditional crafts.",
    fullDescription: "Rangamati, nestled in the Chittagong Hill Tracts, is a district of breathtaking natural beauty and rich cultural diversity. This tour provides an immersive experience into the lives of various indigenous communities like the Chakma, Marma, and Tripura people. Explore the Kaptai Lake, visit the Shuvolong waterfall, and discover tribal handloom factories. Enjoy a boat ride on the serene lake, surrounded by green hills, and learn about their unique customs and traditions. A peaceful escape into nature and culture.",
    details: [
      { heading: "Kaptai Lake Boat Trip", description: "Explore the vast Kaptai Lake and its islands." },
      { heading: "Tribal Village Visit", description: "Interact with local indigenous communities." },
      { heading: "Shuvolong Waterfall", description: "Visit the scenic waterfall." },
      { heading: "Handicraft Shopping", description: "Opportunity to buy local traditional crafts." },
      { heading: "Accommodation", description: "Comfortable hotel in Rangamati." }
    ],
    gallery: [
      "https://i.ibb.co/NgbgsXQm/download-3.jpg",
      "https://i.ibb.co/84jpgNHd/download-2.jpg",
      "https://i.ibb.co/wrg1mXdC/download-1.jpg",
      "https://i.ibb.co/mrLLnTvf/download.jpg"
    ]
  },
  {
    id: 5,
    spotPhoto: "https://i.ibb.co/NY0w7SJ/hiker-mountainous-landscape.jpg",
    tripTitle: "Sylhet Rainforest Expedition",
    price: "$450",
    aboutTour: "Venture into the lush rainforests of Sylhet, known for its biodiversity, waterfalls, and serene tea gardens.",
    fullDescription: "Sylhet is renowned for its lush tea gardens, but it also hides stunning rainforests teeming with biodiversity. This expedition takes you deep into the Lawachara National Park, home to rare species like the Western Hoolock Gibbon and various exotic birds. Explore serene waterfalls, trek through dense forests, and enjoy the tranquility of nature. A perfect getaway for adventure seekers and nature enthusiasts.",
    details: [
      { heading: "Rainforest Trekking", description: "Guided treks in Lawachara National Park." },
      { heading: "Wildlife Observation", description: "Spot monkeys, gibbons, and various bird species." },
      { heading: "Waterfall Visits", description: "Explore picturesque waterfalls like Madhabkunda." },
      { heading: "Tea Garden Exploration", description: "Visit and learn about tea processing in local tea estates." },
      { heading: "Accommodation", description: "Eco-resort or comfortable hotel in Sylhet." }
    ],
    gallery: [
      " https://i.ibb.co/HTzq5Xqm/download-2.jpg",
      "https://i.ibb.co/0jbKY0gW/download-1.jpg",
      "https://i.ibb.co/N6srpzBR/download.jpg",
      
    ]
  },
  {
    id: 6,
    spotPhoto: "https://i.ibb.co/gZfL097/c1c86e3f049aff77bf9df150089f9965.jpg",
    tripTitle: "Dhaka City Exploration",
    price: "$200",
    aboutTour: "Discover the bustling city of Dhaka, the capital of Bangladesh, known for its vibrant culture, historic sites, and delicious cuisine.",
    fullDescription: "Dhaka, the bustling capital of Bangladesh, is a city of rich history and vibrant culture. This tour takes you through its most iconic landmarks, including the historic Lalbagh Fort, the magnificent Ahsan Manzil (Pink Palace), and the chaotic yet charming Sadarghat river port. Explore local markets, savor authentic Bangladeshi cuisine, and witness the daily life of this dynamic city. An ideal tour for those who want to experience the true essence of urban Bangladesh.",
    details: [
      { heading: "Historical Sites", description: "Lalbagh Fort, Ahsan Manzil, Dhakeshwari Temple." },
      { heading: "Cultural Experience", description: "Rickshaw ride, local market visits, street food tasting." },
      { heading: "River Cruise", description: "Short boat trip on Buriganga River near Sadarghat." },
      { heading: "Transportation", description: "AC transport with experienced driver." },
      { heading: "Guide", description: "Knowledgeable local guide." }
    ],
    gallery: [
      "https://i.ibb.co/XrJXJgtM/download-6.jpg",
      "https://i.ibb.co/Kz7gLtMr/download-5.jpg",
      "https://i.ibb.co/svSvLSBK/download-4.jpg",
    
    ]
  },
  {
    id: 7,
    spotPhoto: "https://i.ibb.co/t8B1TdN/Nilgiri.jpg",
    tripTitle: "Bandarban Mountain Trekking",
    price: "$500",
    aboutTour: "Trek through the scenic mountains of Bandarban, known for its stunning landscapes, waterfalls, and indigenous cultures.",
    fullDescription: "Bandarban, located in the Chittagong Hill Tracts, is a haven for adventure seekers and nature enthusiasts. This trekking expedition takes you through challenging yet rewarding trails, offering panoramic views of rolling hills, pristine waterfalls, and serene rivers. Encounter various indigenous tribes like the Marma, Murong, and Bawm, and learn about their unique lifestyles and traditions. Highlights include visiting Nilgiri, Sangu River, and exploring various waterfalls. A truly immersive experience into the untouched beauty of Bangladesh.",
    details: [
      { heading: "Trekking Trails", description: "Guided treks to scenic viewpoints and waterfalls." },
      { heading: "Indigenous Villages", description: "Visit local tribal villages and experience their culture." },
      { heading: "Nilgiri Viewpoint", description: "Enjoy breathtaking panoramic views." },
      { heading: "Sangu River Boat Trip", description: "Explore parts of the beautiful Sangu River." },
      { heading: "Accommodation", description: "Hilltop resorts or basic homestays." }
    ],
    gallery: [
      "https://i.ibb.co/cc8CHwKZ/download-10.jpg",
      "https://i.ibb.co/3Y1W35VQ/download-9.jpg",
      "https://i.ibb.co/7txX4xfh/download-8.jpg",
      "https://i.ibb.co/1tF94RCp/download-7.jpg"

    ]
  }
];


const BlogDetailsPage = () => {
  const { id } = useParams(); // URL থেকে আইডি নেওয়া
  const navigate = useNavigate(); // Navigation এর জন্য
  const blog = allTours.find(tour => tour.id === parseInt(id)); // আইডি দিয়ে ব্লগ খুঁজে বের করা

  useEffect(() => {
    // যদি ব্লগ না পাওয়া যায়, তাহলে হোমে রিডাইরেক্ট করুন বা 404 পেজে পাঠান
    if (!blog) {
      navigate('/blogs'); // অথবা navigate('/404');
    }
  }, [blog, navigate]);

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
        <h2 className="text-2xl font-bold">Blog not found.</h2>
      </div>
    );
  }

  // Framer Motion Variants for smooth animations
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white py-8 md:py-12 lg:py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Helmet>
        <title>{blog.tripTitle} - Tourista Blog</title>
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs / Back Button */}
        <motion.div variants={itemVariants} className="mb-6">
          <Link to="/blogs" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to Blogs
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div variants={imageVariants} className="relative rounded-xl overflow-hidden shadow-2xl mb-12">
          <img
            src={blog.spotPhoto}
            alt={blog.tripTitle}
            className="w-full h-96 md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-8 md:p-12">
            <motion.div variants={itemVariants} className="text-white">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">{blog.tripTitle}</h1>
              <p className="text-xl md:text-2xl text-gray-200">{blog.aboutTour}</p>
              <span className="text-2xl md:text-3xl font-bold text-emerald-300 mt-4 block">{blog.price}</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div variants={itemVariants} className="lg:col-span-2 prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">About This Trip</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-8">
              {blog.fullDescription}
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What's Included</h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 text-lg">
              {blog.details.map((detail, index) => (
                <motion.li variants={itemVariants} key={index}>
                  <strong className="text-gray-900 dark:text-white">{detail.heading}:</strong> {detail.description}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Sidebar / Quick Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 sticky top-20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Quick Overview</h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <span className="font-semibold text-gray-900 dark:text-white">Destination:</span> {blog.tripTitle.split(' ')[0]} {/* Simplified destination */}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  <span className="font-semibold text-gray-900 dark:text-white">Price:</span> {blog.price}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span className="font-semibold text-gray-900 dark:text-white">Type:</span> {blog.tourType || "Adventure"}
                </li>
              </ul>
             
            </div>
          </motion.div>
        </div>

        {/* Image Gallery */}
        {blog.gallery && blog.gallery.length > 0 && (
          <motion.div variants={containerVariants} className="mt-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">Trip Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {blog.gallery.map((img, index) => (
                <motion.div variants={itemVariants} key={index} className="rounded-lg overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
                  <img
                    src={img}
                    alt={`${blog.tripTitle} Gallery Image ${index + 1}`}
                    className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </motion.div>
  );
};

export default BlogDetailsPage;