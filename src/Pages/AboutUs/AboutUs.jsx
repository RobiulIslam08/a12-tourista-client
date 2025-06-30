// import { Helmet } from "react-helmet";


// const AboutUs = () => {
//   return (
//     <div className="container mx-auto px-4 py-8 mb-40 ">
//       <Helmet>
//                 <title>About Us Page</title>
//             </Helmet>
//       <h1 className="text-lg md:text-2xl lg:text-3xl text-center font-bold mb-8">About Us</h1>
//       <p  className="text-lg mb-6">
//         We are a travel company dedicated to providing unforgettable experiences in Bangladesh. Explore the diverse landscapes, rich cultural heritage, and vibrant communities with our expert guides.
//       </p>
//       <p className="text-lg mb-6">
//         Whether you are seeking adventure in the mountains, relaxation on the beaches, or immersion in cultural wonders, we have the perfect tour for you.
//       </p>
//       <h2 className="text-lg md:text-2xl lg:text-3xl text-center font-bold mb-8 mt-10 md:mt-20">Our Team</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
//         <div data-aos="fade-up"
//  data-aos-offset="200"
//     data-aos-delay="50"  data-aos-duration="1000"
//     data-aos-easing="ease-in-out"
//     data-aos-mirror="true" className="flex flex-col items-center">
//           <img src="https://i.ibb.co/dkhMfM5/portrait-young-confident-businessman-wearing-glasses.jpg" alt="Guide" className="w-24 h-24 rounded-full mb-2" />
//           <h3 className="text-lg font-semibold">Abdul Rahman</h3>
//           <p className="text-sm">Historical Tours</p>
//         </div>
//         <div data-aos="fade-up"
//  data-aos-offset="200"
//     data-aos-delay="50"  data-aos-duration="1000"
//     data-aos-easing="ease-in-out"
//     data-aos-mirror="true" className="flex flex-col items-center">
//           <img src="https://i.ibb.co/m6PgDfT/bohemian-man-with-his-arms-crossed.jpg" alt="Guide" className="w-24 h-24 rounded-full mb-2" />
//           <h3 className="text-lg font-semibold">Tasrif Hasan</h3>
//           <p className="text-sm">Wildlife Safaris</p>
//         </div>
//         <div data-aos="fade-up"
//  data-aos-offset="200"
//     data-aos-delay="50"  data-aos-duration="1000"
//     data-aos-easing="ease-in-out"
//     data-aos-mirror="true" className="flex flex-col items-center">
//           <img src="https://i.ibb.co/8mrRb23/portrait-young-smiling-handsome-model-man-dressed-gray-casual-hoodie-clothes-posing-white-wall-isola.jpg" alt="Guide" className="w-24 h-24 rounded-full mb-2" />
//           <h3 className="text-lg font-semibold">Nazmul Hasan</h3>
//           <p className="text-sm">Cultural Tours</p>
//         </div>
//         <div data-aos="fade-up"
//  data-aos-offset="200"
//     data-aos-delay="50"  data-aos-duration="1000"
//     data-aos-easing="ease-in-out"
//     data-aos-mirror="true" className="flex flex-col items-center">
//           <img src="https://i.ibb.co/8zXs92Y/close-up-portrait-smiling-young-bearded-man.jpg" alt="Guide" className="w-24 h-24 rounded-full mb-2" />
//           <h3 className="text-lg font-semibold">Sabbir Rahman</h3>
//           <p className="text-sm">Cultural Tours</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

// Dummy Team Data (you can fetch this from an API)
const teamMembers = [
  {
    name: "Abdul Rahman",
    role: "Lead Historical Guide",
    bio: "Abdul has over 15 years experience, bringing history to life with captivating stories.",
    image: "https://i.ibb.co/dkhMfM5/portrait-young-confident-businessman-wearing-glasses.jpg",
    linkedin: "#", // Example social link
  },
  {
    name: "Tasrif Hasan",
    role: "Wildlife Safari Expert",
    bio: "Tasrif is passionate about wildlife and ensures unique, ethical encounters in the wild.",
    image: "https://i.ibb.co/m6PgDfT/bohemian-man-with-his-arms-crossed.jpg",
    linkedin: "#",
  },
  {
    name: "Nazmul Hasan",
    role: "Cultural Immersion Specialist",
    bio: "Nazmul connects travelers with local traditions, crafts, and authentic community experiences.",
    image: "https://i.ibb.co/8mrRb23/portrait-young-smiling-handsome-model-man-dressed-gray-casual-hoodie-clothes-posing-white-wall-isola.jpg",
    linkedin: "#",
  },
  {
    name: "Sabbir Rahman",
    role: "Adventure Tour Leader",
    bio: "Sabbir leads thrilling treks and expeditions, ensuring safety and an adrenaline rush.",
    image: "https://i.ibb.co/8zXs92Y/close-up-portrait-smiling-young-bearded-man.jpg",
    linkedin: "#",
  },
  {
    name: "Aisha Khan",
    role: "Customer Success Manager",
    bio: "Aisha ensures every traveler has a smooth and delightful experience, from booking to return.",
    image: "https://i.ibb.co/j3R27rt/Img-contact-last.png", // Example female avatar
    linkedin: "#",
  },
  {
    name: "Rifat Ahmed",
    role: "Logistics Coordinator",
    bio: "Rifat handles all the behind-the-scenes magic, ensuring flawless travel arrangements.",
    image: "https://i.ibb.co/gPvQ8WT/avatar-1-150x150.png", // Another male avatar example
    linkedin: "#",
  },
];

// Framer Motion Variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren", // Animates container first, then children
      staggerChildren: 0.15, // Delay between child animations
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  hover: { scale: 1.05, boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.25)", transition: { duration: 0.3 } },
};


const AboutUs = () => {
  return (
    <motion.div
      className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white pb-20" // Added padding-bottom
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Helmet>
        <title>About Us - Tourista</title>
      </Helmet>

      {/* Hero Section */}
      <motion.div
        variants={imageVariants}
        className="relative h-[400px] md:h-[550px] lg:h-[650px] bg-cover bg-center"
        style={{ backgroundImage: `url('https://i.ibb.co/1tF94RCp/download-7.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70 flex items-center justify-center text-center px-4">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.h1 variants={textVariants} className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 drop-shadow-2xl">
              Your Journey, Our Passion
            </motion.h1>
            <motion.p variants={textVariants} className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto drop-shadow-lg">
              Crafting unforgettable adventures in the heart of Bangladesh.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* About Section - Our Story */}
      <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div variants={textVariants}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Our Story: Passion for Discovery
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Founded on a deep love for Bangladesh's untouched beauty and vibrant culture, Tourista began with a simple mission: to share the magic of this land with the world. We believe travel is more than just sightseeing; it's about authentic connections, profound discoveries, and creating lifelong memories.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              From the serene beaches of Cox's Bazar to the misty hills of the Chittagong Hill Tracts, and the ancient ruins steeped in history, we meticulously design tours that go beyond the ordinary. Our commitment to sustainable tourism ensures that every adventure benefits local communities and preserves the natural heritage for generations to come.
            </p>
          </motion.div>
          <motion.div variants={imageVariants}>
            <img
              src="https://i.ibb.co/JZSLGkX/images.jpg"
              alt="Local Community"
              className="rounded-xl shadow-2xl w-full h-auto object-cover transform transition-transform duration-500 hover:scale-[1.02]"
            />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us / Our Values Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 variants={textVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-12">
            Why Travel With Tourista?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={cardVariants} className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-600 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300">
              <svg className="w-16 h-16 text-emerald-600 dark:text-emerald-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Authentic Experiences</h3>
              <p className="text-gray-600 dark:text-gray-300">Discover the real Bangladesh through local interactions and hidden gems.</p>
            </motion.div>
            <motion.div variants={cardVariants} className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-600 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300">
              <svg className="w-16 h-16 text-emerald-600 dark:text-emerald-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Safety & Comfort</h3>
              <p className="text-gray-600 dark:text-gray-300">Your well-being is our priority with comprehensive safety measures and top-notch logistics.</p>
            </motion.div>
            <motion.div variants={cardVariants} className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-600 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300">
              <svg className="w-16 h-16 text-emerald-600 dark:text-emerald-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path></svg>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Best Value Guaranteed</h3>
              <p className="text-gray-600 dark:text-gray-300">Premium experiences without the premium price tag. Quality and affordability combined.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 variants={textVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-12">
            Meet Our Exceptional Team
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8" // Adjusted grid for more balanced look
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover" // Apply hover animation
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center group transition-all duration-300"
              >
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 transform transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle overlay for hover effect on image */}
                  <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/20 rounded-full transition-colors duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-emerald-600 dark:text-emerald-400 text-md font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">{member.bio}</p>
                {/* Social media links (optional, uncomment if needed) */}
                {/* {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                  </a>
                )} */}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Optional: Mission/Vision Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-emerald-500 dark:bg-emerald-700 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 variants={textVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Our Mission & Vision
          </motion.h2>
          <motion.p variants={textVariants} className="text-lg md:text-xl max-w-4xl mx-auto mb-6 opacity-90">
            **Mission:** To provide unparalleled travel experiences that connect our clients with the authentic beauty and rich culture of Bangladesh, fostering memorable journeys and sustainable tourism.
          </motion.p>
          <motion.p variants={textVariants} className="text-lg md:text-xl max-w-4xl mx-auto opacity-90">
            **Vision:** To be the leading travel partner for discovering Bangladesh, recognized globally for our commitment to excellence, innovation, and positive community impact.
          </motion.p>
        </div>
      </section>

    </motion.div>
  );
};

export default AboutUs;