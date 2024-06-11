import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8 mb-40 ">
      <h1 className="text-lg md:text-2xl lg:text-3xl text-center font-bold mb-8">About Us</h1>
      <p className="text-lg mb-6">
        We are a travel company dedicated to providing unforgettable experiences in Bangladesh. Explore the diverse landscapes, rich cultural heritage, and vibrant communities with our expert guides.
      </p>
      <p className="text-lg mb-6">
        Whether you're seeking adventure in the mountains, relaxation on the beaches, or immersion in cultural wonders, we have the perfect tour for you.
      </p>
      <h2 className="text-lg md:text-2xl lg:text-3xl text-center font-bold mb-8 mt-10 md:mt-20">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
        <div className="flex flex-col items-center">
          <img src="https://i.ibb.co/dkhMfM5/portrait-young-confident-businessman-wearing-glasses.jpg" alt="Guide" className="w-24 h-24 rounded-full mb-2" />
          <h3 className="text-lg font-semibold">Abdul Rahman</h3>
          <p className="text-sm">Historical Tours</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="https://i.ibb.co/m6PgDfT/bohemian-man-with-his-arms-crossed.jpg" alt="Guide" className="w-24 h-24 rounded-full mb-2" />
          <h3 className="text-lg font-semibold">Tasrif Hasan</h3>
          <p className="text-sm">Wildlife Safaris</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="https://i.ibb.co/8mrRb23/portrait-young-smiling-handsome-model-man-dressed-gray-casual-hoodie-clothes-posing-white-wall-isola.jpg" alt="Guide" className="w-24 h-24 rounded-full mb-2" />
          <h3 className="text-lg font-semibold">Nazmul Hasan</h3>
          <p className="text-sm">Cultural Tours</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="https://i.ibb.co/8zXs92Y/close-up-portrait-smiling-young-bearded-man.jpg" alt="Guide" className="w-24 h-24 rounded-full mb-2" />
          <h3 className="text-lg font-semibold">Sabbir Rahman</h3>
          <p className="text-sm">Cultural Tours</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
