import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Dummy Data (replace with API calls in a real application)
const forumCategories = [
  {
    id: 1,
    name: 'Travel Tips & Advice',
    description: 'Share your wisdom and get answers to your travel questions.',
    topics: 154,
    posts: 876,
    icon: (
      <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
    ),
  },
  {
    id: 2,
    name: 'Destination Discussions',
    description: 'Talk about your favorite places in Bangladesh and beyond.',
    topics: 210,
    posts: 1230,
    icon: (
      <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
    ),
  },
  {
    id: 3,
    name: 'Travel Stories & Experiences',
    description: 'Share your incredible journeys and inspire others.',
    topics: 98,
    posts: 567,
    icon: (
      <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253"></path></svg>
    ),
  },
  {
    id: 4,
    name: 'Photography & Videos',
    description: 'Showcase your best travel photos and videos.',
    topics: 72,
    posts: 412,
    icon: (
      <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
    ),
  },
];

const recentDiscussions = [
  {
    id: 1,
    title: 'Best time to visit Sundarbans for tiger spotting?',
    category: 'Wildlife',
    author: 'TravelerJane',
    replies: 12,
    views: 450,
    lastActivity: '2 hours ago',
  },
  {
    id: 2,
    title: 'Hidden gems in Old Dhaka for food lovers',
    category: 'Destination Discussions',
    author: 'FoodieExplorer',
    replies: 25,
    views: 780,
    lastActivity: 'Yesterday',
  },
  {
    id: 3,
    title: 'Solo female travel safety tips in Bangladesh',
    category: 'Travel Tips & Advice',
    author: 'AdventurousSarah',
    replies: 8,
    views: 310,
    lastActivity: '3 days ago',
  },
  {
    id: 4,
    title: 'What to pack for a monsoon trip to Sylhet?',
    category: 'Travel Tips & Advice',
    author: 'RainLover',
    replies: 15,
    views: 620,
    lastActivity: '1 week ago',
  },
];

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const CommunityPage = () => {
  return (
    <motion.div
      className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Helmet>
        <title>Community - Tourista</title>
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-800 dark:to-teal-700 py-20 md:py-24 lg:py-32 text-white overflow-hidden">
        {/* Placeholder for background pattern if you define it */}
        {/* <div className="absolute inset-0 bg-pattern-light dark:bg-pattern-dark opacity-10"></div> */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            Join Our Vibrant Travel Community
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-90">
            Connect with fellow adventurers, share experiences, ask questions, and discover new travel insights for Bangladesh and beyond.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              to="/register"
              className="inline-block bg-white text-emerald-600 px-8 py-3 rounded-full text-lg font-semibold shadow-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105
                         dark:bg-emerald-400 dark:text-gray-900 dark:hover:bg-emerald-300"
            >
              Become a Member
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Forum Categories Section */}
        <motion.section variants={containerVariants} className="mb-16">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            Explore Forum Categories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {forumCategories.map((category) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 flex flex-col items-center text-center cursor-default" // cursor-default as it's not a link
              >
                <div className="mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{category.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{category.description}</p>
                <div className="flex justify-center gap-4 text-gray-500 dark:text-gray-400 text-xs">
                  <span>{category.topics} Topics</span>
                  <span>|</span>
                  <span>{category.posts} Posts</span>
                </div>
                {/* Removed Link, replaced with a button or div if interaction is desired without navigation */}
                <button
                  onClick={() => alert(`Viewing category: ${category.name}`)} // Example: Show an alert
                  className="mt-6 inline-block text-emerald-600 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300 font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  View Category
                </button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Recent Discussions Section */}
        <motion.section variants={containerVariants}>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            Recent Discussions
          </motion.h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
            {recentDiscussions.map((discussion, index) => (
              <motion.div
                key={discussion.id}
                variants={itemVariants}
                className={`flex flex-col md:flex-row items-start md:items-center justify-between py-4 ${index < recentDiscussions.length - 1 ? 'border-b border-gray-200 dark:border-gray-700' : ''} cursor-default`} // cursor-default as it's not a link
              >
                <div className="mb-2 md:mb-0 md:w-3/5 text-left">
                  {/* Removed Link, replaced with a span or div */}
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {discussion.title}
                  </span>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    in <span className="font-medium text-gray-700 dark:text-gray-300">{discussion.category}</span> by {discussion.author}
                  </p>
                </div>
                <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 text-sm md:w-2/5 md:justify-end">
                  <span>{discussion.replies} Replies</span>
                  <span>•</span>
                  <span>{discussion.views} Views</span>
                  <span>•</span>
                  <span>{discussion.lastActivity}</span>
                </div>
              </motion.div>
            ))}
           
          </div>
        </motion.section>
      </div>

      {/* Call to Action Section */}
      <motion.section variants={containerVariants} className="bg-emerald-500 dark:bg-emerald-700 py-16 text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold mb-4">
            Don't Miss Out!
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
            Join the Tourista community today and start connecting with fellow travelers, sharing your adventures, and getting expert advice.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              to="/register"
              className="inline-block bg-white text-emerald-600 px-10 py-4 rounded-full text-xl font-bold shadow-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105
                         dark:bg-gray-900 dark:text-emerald-400 dark:hover:bg-gray-800"
            >
              Sign Up Now!
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default CommunityPage;