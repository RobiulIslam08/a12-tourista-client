import React, { useState } from 'react';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert(`Message sent by ${name} (${email}): ${message}`);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold">Address</h2>
            <p>11 North Main Street, Columbiana, OH 44408</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Email Us</h2>
            <p><a href="mailto:info@TourColumbianaOhio.org" className="text-blue-500">info@TourColumbianaOhio.org</a></p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Call Us</h2>
            <p><a href="tel:3304822282" className="text-blue-500">330.482.2282</a></p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-full">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
