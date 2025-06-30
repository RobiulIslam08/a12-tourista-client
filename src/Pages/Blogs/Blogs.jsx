// /* eslint-disable react/prop-types */

// import { Helmet } from "react-helmet";


// const tours = [
//   {
//     id: 1,
//     spotPhoto: "https://i.ibb.co/8sXYy5q/nafiul-hasan-ve-Ir-XDU9-WQI-unsplash.jpg",
//     tourType: "Beach",
//     tripTitle: "Cox's Bazar Beach Retreat",
//     price: "$250",
//     viewPackageUrl: "https://example.com/package1",
//     aboutTour: "Experience the longest natural sea beach in the world at Cox's Bazar. Enjoy the golden sand, crystal clear water, and vibrant local culture."
//   },
//   {
//     id: 2,
//     spotPhoto: "https://i.ibb.co/gtjYKCB/1697290342012.jpg",
//     tripTitle: "Discover the Ruins of Mahasthangarh",
//     price: "$300",
//     aboutTour: "Explore the ancient ruins of Mahasthangarh, the oldest city in Bangladesh, and delve into its rich history and archaeological significance.",
//     viewPackageUrl: "https://example.com/package2"
//   },
//   {
//     id: 3,
//     spotPhoto: "https://i.ibb.co/yfk4cMP/river-runs-through-jungle.jpg",
//     tripTitle: "Sundarbans Mangrove Forest Adventure",
//     price: "$400",
//     aboutTour: "Join an adventure into the Sundarbans, the largest mangrove forest in the world, home to the majestic Bengal tiger and diverse wildlife.",
//     viewPackageUrl: "https://example.com/package3"
//   },
//   {
//     id: 4,
//     spotPhoto: "https://i.ibb.co/pZZTsm4/rangamati.jpg",
//     tripTitle: "Rangamati Cultural Exploration",
//     price: "$350",
//     aboutTour: "Discover the cultural heritage of Rangamati, a place known for its indigenous communities, scenic beauty, and traditional crafts.",
//     viewPackageUrl: "https://example.com/package4"
//   },
//   {
//     id: 5,
//     spotPhoto: "https://i.ibb.co/NY0w7SJ/hiker-mountainous-landscape.jpg",
//     tripTitle: "Sylhet Rainforest Expedition",
//     price: "$450",
//     aboutTour: "Venture into the lush rainforests of Sylhet, known for its biodiversity, waterfalls, and serene tea gardens.",
//     viewPackageUrl: "https://example.com/package5"
//   },
//   {
//     id: 6,
//     spotPhoto: "https://i.ibb.co/gZfL097/c1c86e3f049aff77bf9df150089f9965.jpg",
//     tripTitle: "Dhaka City Exploration",
//     price: "$200",
//     aboutTour: "Discover the bustling city of Dhaka, the capital of Bangladesh, known for its vibrant culture, historic sites, and delicious cuisine.",
//     viewPackageUrl: "https://example.com/package6"
//   },
//   {
//     id: 7,
//     spotPhoto: "https://i.ibb.co/t8B1TdN/Nilgiri.jpg",
//     tripTitle: "Bandarban Mountain Trekking",
//     price: "$500",
//     aboutTour: "Trek through the scenic mountains of Bandarban, known for its stunning landscapes, waterfalls, and indigenous cultures.",
//     viewPackageUrl: "https://example.com/package7"
//   }
// ];

// const TourCard = ({ tour }) => (
//   <a
//     rel="noopener noreferrer"
//     href={tour.viewPackageUrl}
//     className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-base-100 shadow-lg rounded-lg"
//   >
//     <img
//       src={tour.spotPhoto}
//       alt={tour.tripTitle}
//       className="object-cover w-full h-64 rounded-t-lg sm:h-96 lg:col-span-7"
//     />
//     <div className="p-6 space-y-2 lg:col-span-5">
//       <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{tour.tripTitle}</h3>
//       <span className="text-xs text-base-content">{tour.price}</span>
//       <p>{tour.aboutTour}</p>
//     </div>
//   </a>
// );

// const Blogs = () => {
//   return (
//     <div>
//       <Helmet>
//                 <title>Blogs Page</title>
//             </Helmet>
//       <section className="bg-base-200 text-base-content">
//         <div
//           data-aos="fade-up"
//           data-aos-offset="200"
//           data-aos-delay="50"
//           data-aos-duration="1000"
//           data-aos-easing="ease-in-out"
//           data-aos-mirror="true"
//           data-aos-once="false"
//           data-aos-anchor-placement="top-center"
//          className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
//           {/* Main Tour Block */}
//           <TourCard tour={tours[0]} />
//           {/* Other Tour Blocks */}
//           <div
          
//            className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {tours.slice(1).map(tour => (
//               <div
              
//                 key={tour.id}
//                 rel="noopener noreferrer"
//                 href={tour.viewPackageUrl}
//                 className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-base-100 shadow-lg rounded-lg"
//               >
//                 <img
//                   role="presentation"
//                   className="object-cover w-full rounded-t-lg h-44"
//                   src={tour.spotPhoto}
//                   alt={tour.tripTitle}
//                 />
//                 <div className="p-6 space-y-2">
//                   <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
//                     {tour.tripTitle}
//                   </h3>
//                   <span className="text-xs text-base-content">{tour.price}</span>
//                   <p>{tour.aboutTour}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="flex justify-center">
//             <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline bg-base-100 shadow-md text-base-content">
//               Load more posts...
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Blogs;

/* eslint-disable react/prop-types */

import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom'; // Link ইম্পোর্ট করুন
import React from "react"; // React ইম্পোর্ট করুন


const tours = [
  {
    id: 1,
    spotPhoto: "https://i.ibb.co/8sXYy5q/nafiul-hasan-ve-Ir-XDU9-WQI-unsplash.jpg",
    tourType: "Beach",
    tripTitle: "Cox's Bazar Beach Retreat",
    price: "$250",
    // viewPackageUrl: "https://example.com/package1", // এটি আর সরাসরি ব্যবহার হবে না
    aboutTour: "Experience the longest natural sea beach in the world at Cox's Bazar. Enjoy the golden sand, crystal clear water, and vibrant local culture."
  },
  {
    id: 2,
    spotPhoto: "https://i.ibb.co/gtjYKCB/1697290342012.jpg",
    tripTitle: "Discover the Ruins of Mahasthangarh",
    price: "$300",
    aboutTour: "Explore the ancient ruins of Mahasthangarh, the oldest city in Bangladesh, and delve into its rich history and archaeological significance.",
    // viewPackageUrl: "https://example.com/package2"
  },
  {
    id: 3,
    spotPhoto: "https://i.ibb.co/yfk4cMP/river-runs-through-jungle.jpg",
    tripTitle: "Sundarbans Mangrove Forest Adventure",
    price: "$400",
    aboutTour: "Join an adventure into the Sundarbans, the largest mangrove forest in the world, home to the majestic Bengal tiger and diverse wildlife.",
    // viewPackageUrl: "https://example.com/package3"
  },
  {
    id: 4,
    spotPhoto: "https://i.ibb.co/pZZTsm4/rangamati.jpg",
    tripTitle: "Rangamati Cultural Exploration",
    price: "$350",
    aboutTour: "Discover the cultural heritage of Rangamati, a place known for its indigenous communities, scenic beauty, and traditional crafts.",
    // viewPackageUrl: "https://example.com/package4"
  },
  {
    id: 5,
    spotPhoto: "https://i.ibb.co/NY0w7SJ/hiker-mountainous-landscape.jpg",
    tripTitle: "Sylhet Rainforest Expedition",
    price: "$450",
    aboutTour: "Venture into the lush rainforests of Sylhet, known for its biodiversity, waterfalls, and serene tea gardens.",
    // viewPackageUrl: "https://example.com/package5"
  },
  {
    id: 6,
    spotPhoto: "https://i.ibb.co/gZfL097/c1c86e3f049aff77bf9df150089f9965.jpg",
    tripTitle: "Dhaka City Exploration",
    price: "$200",
    aboutTour: "Discover the bustling city of Dhaka, the capital of Bangladesh, known for its vibrant culture, historic sites, and delicious cuisine.",
    // viewPackageUrl: "https://example.com/package6"
  },
  {
    id: 7,
    spotPhoto: "https://i.ibb.co/t8B1TdN/Nilgiri.jpg",
    tripTitle: "Bandarban Mountain Trekking",
    price: "$500",
    aboutTour: "Trek through the scenic mountains of Bandarban, known for its stunning landscapes, waterfalls, and indigenous cultures.",
    // viewPackageUrl: "https://example.com/package7"
  }
];

// TourCard কম্পোনেন্ট Link ব্যবহার করবে
const TourCard = ({ tour }) => (
  <Link
    to={`/blogs/${tour.id}`} // Link to the detail page
    className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-white dark:bg-gray-800 shadow-lg rounded-lg transition-transform duration-300 hover:scale-[1.02]"
  >
    <img
      src={tour.spotPhoto}
      alt={tour.tripTitle}
      className="object-cover w-full h-64 rounded-t-lg sm:h-96 lg:col-span-7"
    />
    <div className="p-6 space-y-2 lg:col-span-5 text-gray-800 dark:text-white">
      <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{tour.tripTitle}</h3>
      <span className="text-sm text-emerald-600 dark:text-emerald-400 font-bold">{tour.price}</span> {/* Changed text-xs to text-sm and added font-bold */}
      <p className="text-gray-700 dark:text-gray-300">{tour.aboutTour}</p> {/* Changed text color */}
    </div>
  </Link>
);

const Blogs = () => {
  return (
    <div>
      <Helmet>
        <title>Blogs Page</title>
      </Helmet>
      <section className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-white py-6 md:py-8 lg:py-10"> {/* Changed background and text colors for light mode */}
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
          className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">Our Latest Travel Blogs</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore captivating stories, hidden gems, and travel tips from Bangladesh.
            </p>
          </div>

          {/* Main Tour Block */}
          {tours.length > 0 && <TourCard tour={tours[0]} />} {/* Ensure there's at least one tour */}

          {/* Other Tour Blocks */}
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tours.slice(1).map(tour => (
              <Link // div কে Link এ পরিবর্তন করা হয়েছে
                key={tour.id}
                to={`/blogs/${tour.id}`} // Link to the detail page
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white dark:bg-gray-800 shadow-lg rounded-lg transition-transform duration-300 hover:scale-[1.02]"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded-t-lg h-44"
                  src={tour.spotPhoto}
                  alt={tour.tripTitle}
                />
                <div className="p-6 space-y-2 text-gray-800 dark:text-white">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    {tour.tripTitle}
                  </h3>
                  <span className="text-sm text-emerald-600 dark:text-emerald-400 font-bold">{tour.price}</span> {/* Changed text-xs to text-sm and added font-bold */}
                  <p className="text-gray-700 dark:text-gray-300">{tour.aboutTour}</p> {/* Changed text color */}
                </div>
              </Link>
            ))}
          </div>
        
        </div>
      </section>
    </div>
  );
};

export default Blogs;