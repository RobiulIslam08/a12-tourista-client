
// import { useQuery } from '@tanstack/react-query';
// // import { FacebookShareButton, FacebookIcon } from 'react-share';
// import useAxiosCommon from '../../Pages/hooks/useAxiosCommon';
// import { Link } from 'react-router-dom';
// import {motion} from 'framer-motion';
// import {fadeIn} from '../HomeComponent/Variant/Variant'

// const TouristStorySection = () => {
//     const axiosCommon = useAxiosCommon()
//     const {data:stories = []} = useQuery({
//         queryKey: ['story'],
//         queryFn: async () =>{
//             const {data} = await axiosCommon.get('/story')
//             return data
//         }
//     })
    
//     return ( 
//         <div
            

//          className="container mx-auto text-center">
//                 <div className=" py-12 px-8 mb-40">
//                 <h2 className="text-white text-lg font-bold md:text-3xl mb-8">Tourist Stories </h2>
//                 {/* story card */}
              
//                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//                     {stories.slice(0,4).map(story => (
//                          <Link key={story?._id} to={`/story-details-page/${story?._id}`}>
//                             <motion.div
//                             variants={fadeIn('up',0.2)}
//                             initial = 'hidden'
//                             whileInView={'show'}
//                             viewport={{once:false, amount: 0.7}}
//                               className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
//                             <img src={story?.spotImage} alt={story?.title} className="w-full h-48 object-cover" />
//                             <div className="p-4">
//                                 <h3 className="text-white text-xl mb-2">{story?.title}</h3>
                            
//                                 <div className="flex justify-between items-center">
                                  
//                                     {/* <FacebookShareButton url={`https://yourwebsite.com${story.link}`} quote={story.title}>
//                                         <FacebookIcon size={32} round />
//                                     </FacebookShareButton> */}
//                                 </div>
//                             </div>
//                         </motion.div>
//                          </Link>
//                     ))}
//                 </div>
           
//                <Link to='/all-story'> <button className="mt-12 btn btn-secondary text-white py-2 px-4 rounded">
//                     All Stories
//                 </button></Link>
//             </div>
//         </div>
//     );
// };

// export default TouristStorySection;

import { useQuery } from '@tanstack/react-query';
import useAxiosCommon from '../../Pages/hooks/useAxiosCommon';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn } from '../HomeComponent/Variant/Variant'; // Assuming this path is correct
import React from 'react'; // React import for functional component

const TouristStorySection = () => {
    const axiosCommon = useAxiosCommon();
    const { data: stories = [], isLoading } = useQuery({ // Added isLoading for better UX
        queryKey: ['story'],
        queryFn: async () => {
            const { data } = await axiosCommon.get('/story');
            return data;
        }
    });

    // Framer Motion variants for card animations
    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
        hover: { scale: 1.05, boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.25)", transition: { duration: 0.3 } },
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-48 bg-gray-100 dark:bg-gray-900">
                <span className="loading loading-spinner loading-lg text-emerald-500"></span>
            </div>
        ); // Loading spinner
    }

    return (
        <motion.div
            variants={fadeIn('up', 0.2)} // Main section animation
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="bg-gray-100 dark:bg-gray-900 py-12 md:py-16 lg:py-20 my-12 md:my-16 lg:my-20" // Light mode background
        >
            <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">Inspiring Tourist Stories</h2>
                
                {/* Story cards grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } } // Stagger children for sequential animation
                    }}
                    initial="hidden" // Ensures cards are hidden initially if parent is not in view
                    whileInView="visible" // Animate cards when they come into view
                    viewport={{ once: true, amount: 0.5 }} // Animate each card once
                >
                    {stories.slice(0, 4).map(story => (
                        <Link key={story?._id} to={`/story-details-page/${story?._id}`}>
                            <motion.div
                                variants={cardVariants}
                                whileHover="hover" // Apply hover animation
                                className="relative rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 cursor-pointer h-full flex flex-col transition-all duration-300" // Added h-full and flex-col for consistent height
                            >
                                <div className="relative w-full h-48 overflow-hidden">
                                    <img src={story?.spotImage} alt={story?.title} className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110" />
                                    {/* Image Overlay for better text readability and effect */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 opacity-100 group-hover:opacity-100"></div>
                                </div>
                                <div className="p-4 flex-grow flex flex-col justify-between text-left"> {/* text-left for better readability */}
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 leading-tight"> {/* text-gray-900 for light mode */}
                                        {story?.title}
                                    </h3>
                                    {/* You can add a short description here if available in your story data */}
                                    {/* <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                                        {story?.shortDescription || 'Read this amazing adventure story.'}
                                    </p> */}
                                    <div className="mt-auto"> {/* Pushes the button/share to the bottom */}
                                        <button className="text-emerald-600 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300 font-semibold text-sm transition-colors">
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>
                
                {/* View All Stories Button */}
                <Link to='/all-story'>
                    <button className="mt-16 px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg shadow-md transition-colors duration-300 dark:bg-emerald-500 dark:hover:bg-emerald-600">
                        View All Stories
                    </button>
                </Link>
            </div>
        </motion.div>
    );
};

export default TouristStorySection;