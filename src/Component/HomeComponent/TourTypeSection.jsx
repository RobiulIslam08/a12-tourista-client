// import { Link } from "react-router-dom";

// import { FaCity } from "react-icons/fa";
// import { GiForest } from "react-icons/gi";
// import { SiAdventofcode } from "react-icons/si";
// import { MdOutlineAgriculture } from "react-icons/md";
// import { MdManageHistory } from "react-icons/md";
// import { FaUmbrellaBeach } from "react-icons/fa6";
// import {motion} from 'framer-motion';
// import {fadeIn} from '../HomeComponent/Variant/Variant'
// const TourTypeSection = () => {
//     const tourTypes = [
//         { name: 'City', icon: <FaCity className="flex justify-center items-center text-fuchsia-600 text-center w-full text-lg" />, image: "https://i.ibb.co/gZfL097/c1c86e3f049aff77bf9df150089f9965.jpg" },
//         { name: 'Wildlife', icon: <GiForest className="flex justify-center items-center text-fuchsia-600 text-center w-full text-lg" />, image: "https://i.ibb.co/Kjhhhvw/beautiful-shot-tree-savanna-plains-with-blue-sky.jpg" },
//         { name: 'Cultural', icon: <MdOutlineAgriculture className="flex justify-center items-center text-fuchsia-600 text-center w-full text-lg" />, image: "https://i.ibb.co/5F2Ngd7/agriculture-hilltribe-women.jpg" },
//         { name: 'Adventure', icon: <SiAdventofcode className="flex justify-center items-center text-fuchsia-600 text-center w-full text-lg" />, image: ' "https://i.ibb.co/1n7hNYB/hiking-men-conquer-mountain-peak-adventure-awaits-generative-ai.jpg"' },
//         { name: 'Historical', icon: <MdManageHistory className="flex justify-center items-center text-fuchsia-600 text-center w-full text-lg" />, image: 'https://i.ibb.co/2qdJJ2K/aphrodisias-ancient-city-turkey.jpg' },
//         { name: 'Beach', icon: <FaUmbrellaBeach className="flex justify-center items-center text-fuchsia-600 text-center w-full text-lg" />, image: 'https://i.ibb.co/HgcFccK/riashat-rafat-Ph5-VL5-Tilto-unsplash.jpg' },
//     ];
    


//     return (
//         <motion.div
//         variants={fadeIn('up',0.2)}
//         initial = 'hidden'
//         whileInView={'show'}
//         viewport={{once:false, amount: 0.7}}
//          className="rounded-lg py-12 mb-40">
//             <div className="container mx-auto text-center">
//                 <h2 className="text-white text-3xl mb-4">Find a Tour by</h2>
//                 <h3 className="text-blue-500 text-2xl mb-8">TOUR TYPE</h3>
//                 <div className="flex  justify-center space-x-4 overflow-x-auto">
//                     {tourTypes.map((tourType, index) => (
//                         <Link to={`/TourTypePage/${tourType?.name}`} key={index}>
//                             <motion.div 
                            
//                             className="flex-shrink-0  cursor-pointer">
//                                 <div style={{ backgroundImage: `url(${tourType?.image})`, backgroundSize: 'cover' }} className="   hover:scale-105 transition-transform duration-300 h-32 w-32 flex flex-col justify-center items-center rounded-full  p-6">
//                                     {tourType?.icon}
//                                     <span className="text-black font-semibold text-lg">{tourType.name}</span>
//                                 </div>
//                             </motion.div>
//                         </Link>
//                     ))}
//                 </div>
//             </div>
//         </motion.div>
//     );
// };

// export default TourTypeSection;

import { Link } from "react-router-dom";
import { FaCity, FaUmbrellaBeach } from "react-icons/fa";
import { GiForest } from "react-icons/gi";
import { SiAdventofcode } from "react-icons/si";
import { MdOutlineAgriculture, MdManageHistory } from "react-icons/md";
import { motion } from 'framer-motion';
// Variant এর সঠিক পাথ নিশ্চিত করুন
import { fadeIn } from '../HomeComponent/Variant/Variant'; // Assuming this path is correct

const TourTypeSection = () => {
    const tourTypes = [
        { name: 'City', icon: <FaCity />, image: "https://i.ibb.co/gZfL097/c1c86e3f049aff77bf9df150089f9965.jpg" },
        { name: 'Wildlife', icon: <GiForest />, image: "https://i.ibb.co/Kjhhhvw/beautiful-shot-tree-savanna-plains-with-blue-sky.jpg" },
        { name: 'Cultural', icon: <MdOutlineAgriculture />, image: "https://i.ibb.co/5F2Ngd7/agriculture-hilltribe-women.jpg" },
        { name: 'Adventure', icon: <SiAdventofcode />, image: 'https://i.ibb.co/1n7hNYB/hiking-men-conquer-mountain-peak-adventure-awaits-generative-ai.jpg' },
        { name: 'Historical', icon: <MdManageHistory />, image: 'https://i.ibb.co/2qdJJ2K/aphrodisias-ancient-city-turkey.jpg' },
        { name: 'Beach', icon: <FaUmbrellaBeach />, image: 'https://i.ibb.co/HgcFccK/riashat-rafat-Ph5-VL5-Tilto-unsplash.jpg' },
    ];

    // Card animation variants
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
        hover: { scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)", transition: { duration: 0.3 } },
    };

    return (
        <motion.div
            variants={fadeIn('up', 0.2)} // Section overall animation
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="py-12 mb-20 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-inner" // Light mode background and subtle shadow
        >
            <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Find a Tour by</h2>
                <h3 className="text-2xl md:text-3xl font-semibold text-emerald-600 dark:text-blue-500 mb-12">TOUR TYPE</h3> {/* Changed color for better contrast */}

                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center" // Grid for better responsiveness
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } } // Stagger children for card animations
                    }}
                >
                    {tourTypes.map((tourType, index) => (
                        <Link to={`/TourTypePage/${tourType?.name}`} key={index}>
                            <motion.div
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                whileHover="hover" // Apply hover animation
                                viewport={{ once: true, amount: 0.5 }} // Animate each card once when it enters viewport
                                className="relative h-36 w-36 md:h-40 md:w-40 rounded-full overflow-hidden shadow-lg transition-all duration-300 transform"
                            >
                                <img
                                    src={tourType?.image}
                                    alt={tourType.name}
                                    className="object-cover w-full h-full"
                                />
                                {/* Overlay for better text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end items-center p-2 md:p-4 transition-all duration-300 group-hover:from-black/80">
                                    <div className="text-white text-3xl mb-1 group-hover:scale-110 transition-transform duration-300">
                                        {tourType?.icon}
                                    </div>
                                    <span className="text-white font-bold text-lg md:text-xl text-center group-hover:text-emerald-300 transition-colors duration-300">
                                        {tourType.name}
                                    </span>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default TourTypeSection;