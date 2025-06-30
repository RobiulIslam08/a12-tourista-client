// Ensure you are importing React if this is a standalone component file
import React from 'react';

const ContactUs = () => {
  return (
    <section className="py-10 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-200 text-gray-800 dark:from-gray-950 dark:to-gray-800 dark:text-white transition-colors duration-500 overflow-hidden relative">

      {/* Optional: Subtle background pattern for more visual interest */}
      <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 20v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 46v-4h-2v4H0v2h2v4h4v-2h2v-4H6zM36 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 10v-4h-2v4H0v2h2v4h4v-2h2v-4H6zM0 34v-4h-2v4H-4v2h2v4h4v-2h2v-4H0zM24 54v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM24 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM48 46v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM48 10v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM0 22v-4h-2v4H-4v2h2v4h4v-2h2v-4H0zM24 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM24 22v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM48 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM48 22v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM60 22v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM60 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM60 10v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM60 46v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM48 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 0v-4h-2v4H0v2h2v4h4v-2h2v-4H6zM48 54v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 54v-4h-2v4H0v2h2v4h4v-2h2v-4H6z\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 relative z-10">
        {/* Contact Information Section */}
        <div className="space-y-10">
          <h2 className="text-5xl font-extrabold text-emerald-700 dark:text-teal-400 mb-6 sm:mb-8 leading-tight animate-fade-in-up">Get in Touch</h2>
          <p className="text-gray-700 text-xl leading-relaxed dark:text-gray-300 animate-fade-in-up delay-100">
            We'd love to hear from you! Whether you have a question about our packages, need assistance with a booking, or just want to say hello, feel free to reach out.
          </p>

          <div className="space-y-8 mt-10">
            <div className="flex items-start space-x-6 transform transition-transform duration-300 hover:scale-105 cursor-pointer animate-fade-in-up delay-200">
              <svg className="h-10 w-10 text-emerald-600 flex-shrink-0 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Location</h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg">123 Travel Lane, Adventure City, TRV 45678</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 transform transition-transform duration-300 hover:scale-105 cursor-pointer animate-fade-in-up delay-300">
              <svg className="h-10 w-10 text-emerald-600 flex-shrink-0 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Phone</h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg">+1 (234) 567-8900</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 transform transition-transform duration-300 hover:scale-105 cursor-pointer animate-fade-in-up delay-400">
              <svg className="h-10 w-10 text-emerald-600 flex-shrink-0 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Email</h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg">info@yourtravelagency.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white p-8 md:p-10 lg:p-12 rounded-2xl shadow-2xl dark:bg-gray-800 transition-colors duration-500 transform hover:shadow-3xl hover:-translate-y-1 ease-in-out">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Send us a Message</h2>
          <form className="space-y-7">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-base font-semibold mb-2 dark:text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3.5 px-5 text-gray-900 leading-tight focus:outline-none focus:ring-3 focus:ring-emerald-500 bg-gray-50 transition duration-300 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-base font-semibold mb-2 dark:text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3.5 px-5 text-gray-900 leading-tight focus:outline-none focus:ring-3 focus:ring-emerald-500 bg-gray-50 transition duration-300 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="your@example.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 text-base font-semibold mb-2 dark:text-gray-300">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3.5 px-5 text-gray-900 leading-tight focus:outline-none focus:ring-3 focus:ring-emerald-500 bg-gray-50 transition duration-300 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="Regarding..."
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-base font-semibold mb-2 dark:text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3.5 px-5 text-gray-900 leading-tight focus:outline-none focus:ring-3 focus:ring-emerald-500 bg-gray-50 transition duration-300 resize-y dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold py-4 px-6 rounded-lg focus:outline-none focus:ring-3 focus:ring-emerald-500 focus:ring-offset-3 focus:ring-offset-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg dark:focus:ring-offset-gray-900"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;