// // Ensure you are importing React if this is a standalone component file
// import React from 'react';

// const ContactUs = () => {
//   return (
//     <section className="py-6 md:py-8 lg:py-10 text-white  px-4 sm:px-6 lg:px-8">
		
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* Contact Information Section */}
//         <div className="space-y-8">
//           <h2 className="text-4xl font-extrabold text-teal-400 mb-4">Get in Touch</h2>
//           <p className="text-gray-300 text-lg leading-relaxed">
//             We'd love to hear from you! Whether you have a question about our packages, need assistance with a booking, or just want to say hello, feel free to reach out.
//           </p>

//           <div className="space-y-6">
//             <div className="flex items-start space-x-4">
//               <svg className="h-8 w-8 text-teal-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
//               <div>
//                 <h3 className="text-xl font-semibold text-white">Our Location</h3>
//                 <p className="text-gray-300">123 Travel Lane, Adventure City, TRV 45678</p>
//               </div>
//             </div>

//             <div className="flex items-start space-x-4">
//               <svg className="h-8 w-8 text-teal-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
//               <div>
//                 <h3 className="text-xl font-semibold text-white">Phone</h3>
//                 <p className="text-gray-300">+1 (234) 567-8900</p>
//               </div>
//             </div>

//             <div className="flex items-start space-x-4">
//               <svg className="h-8 w-8 text-teal-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
//               <div>
//                 <h3 className="text-xl font-semibold text-white">Email</h3>
//                 <p className="text-gray-300">info@yourtravelagency.com</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Contact Form Section */}
//         <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
//           <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
//           <form className="space-y-6">
//             <div>
//               <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">Name</label>
//               <input type="text" id="name" name="name" className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-700 transition duration-300" placeholder="Your Name" />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">Email</label>
//               <input type="email" id="email" name="email" className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-700 transition duration-300" placeholder="your@example.com" />
//             </div>
//             <div>
//               <label htmlFor="subject" className="block text-gray-300 text-sm font-bold mb-2">Subject</label>
//               <input type="text" id="subject" name="subject" className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-700 transition duration-300" placeholder="Regarding..." />
//             </div>
//             <div>
//               <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">Message</label>
//               <textarea id="message" name="message" rows="5" className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-700 transition duration-300 resize-y" placeholder="Your message here..."></textarea>
//             </div>
//             <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-300">
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;
// Ensure you are importing React if this is a standalone component file
import React from 'react';

const ContactUs = () => {
  return (
    <section className="py-6 md:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-white">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information Section */}
        <div className="space-y-8">
          <h2 className="text-4xl font-extrabold text-emerald-600 dark:text-teal-400 mb-4">Get in Touch</h2>
          <p className="text-gray-700 text-lg leading-relaxed dark:text-gray-300">
            We'd love to hear from you! Whether you have a question about our packages, need assistance with a booking, or just want to say hello, feel free to reach out.
          </p>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <svg className="h-8 w-8 text-emerald-600 flex-shrink-0 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Our Location</h3>
                <p className="text-gray-700 dark:text-gray-300">123 Travel Lane, Adventure City, TRV 45678</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <svg className="h-8 w-8 text-emerald-600 flex-shrink-0 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Phone</h3>
                <p className="text-gray-700 dark:text-gray-300">+1 (234) 567-8900</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <svg className="h-8 w-8 text-emerald-600 flex-shrink-0 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Email</h3>
                <p className="text-gray-700 dark:text-gray-300">info@yourtravelagency.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white p-8 rounded-lg shadow-xl dark:bg-gray-800">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">Name</label>
              <input type="text" id="name" name="name" className="shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50 transition duration-300 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">Email</label>
              <input type="email" id="email" name="email" className="shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50 transition duration-300 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100" placeholder="your@example.com" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" name="subject" className="shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50 transition duration-300 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100" placeholder="Regarding..." />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300">Message</label>
              <textarea id="message" name="message" rows="5" className="shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50 transition duration-300 resize-y dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100" placeholder="Your message here..."></textarea>
            </div>
            <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-100 transition duration-300 dark:focus:ring-offset-gray-900">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;