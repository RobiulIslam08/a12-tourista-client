"use client"

import { useState } from "react"

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://i.ibb.co/TTrWGqW/avatar-3-150x150.png",
    location: "New York, USA",
    rating: 5,
    date: "December 2023",
    tripType: "Family Trip",
    destination: "Cox's Bazar",
    duration: "5 Days",
    verified: true,
    review:
      "Absolutely incredible experience! Our guide Rashid was phenomenal - so knowledgeable about the local culture and history. The beach resort was pristine and the sunset cruise was magical. My kids loved every moment, especially the local seafood dinner. Tourista made our Bangladesh adventure unforgettable!",
    images: ["https://i.ibb.co/WbCxfYn/download-6.jpg", "https://i.ibb.co/yndBjyzQ/download-5.jpg"],
    helpful: 24,
  },
  {
    id: 2,
    name: "David Chen",
    avatar: "https://i.ibb.co/gb5qBZBd/IMG-20250413-175646-1.jpg",
    location: "Toronto, Canada",
    rating: 5,
    date: "November 2023",
    tripType: "Solo Adventure",
    destination: "Sundarbans",
    duration: "4 Days",
    verified: true,
    review:
      "As a wildlife photographer, the Sundarbans tour exceeded all expectations. The boat safari was expertly organized, and we spotted Royal Bengal Tigers! The local guide's expertise in tracking wildlife was impressive. Accommodation was comfortable despite being in remote areas. Highly recommend for nature enthusiasts!",
    images: ["https://i.ibb.co/67SThqfj/download-2.jpg"],
    helpful: 31,
  },
  {
    id: 3,
    name: "Emma Thompson",
    avatar: "https://i.ibb.co/gPvQ8WT/avatar-1-150x150.png",
    location: "London, UK",
    rating: 5,
    date: "October 2023",
    tripType: "Couple's Getaway",
    destination: "Sylhet Tea Gardens",
    duration: "3 Days",
    verified: true,
    review:
      "Perfect romantic getaway! The tea garden tour was so peaceful and scenic. Our guide Fatima was wonderful - she taught us about tea processing and local traditions. The hill station views were breathtaking, especially at sunrise. The local breakfast was delicious. Great value for money!",
    images: [
      "https://i.ibb.co/RTZ9gQss/download-8.jpg",
      "https://i.ibb.co/XxnNL9pz/download-11.jpg",
      "https://i.ibb.co/HfbmB8xg/download-17.jpg",
    ],
    helpful: 18,
  },
  {
    id: 4,
    name: "Ahmed Hassan",
    avatar: "https://i.ibb.co/MSNDNJW/img-agency-22-min.png",
    location: "Dubai, UAE",
    rating: 4,
    date: "September 2023",
    tripType: "Business Trip Extension",
    destination: "Dhaka Heritage",
    duration: "2 Days",
    verified: true,
    review:
      "Extended my business trip to explore Dhaka's heritage sites. The cultural tour was well-organized and informative. Visited historic mosques, museums, and local markets. The guide was punctual and spoke excellent English. Food recommendations were spot-on. Great way to experience authentic Bangladesh culture!",
    images: ["https://i.ibb.co/Q7FQhFy5/download-2.jpg"],
    helpful: 12,
  },
]

const stats = [
  { label: "Total Reviews", value: "2,847" },
  { label: "Average Rating", value: "4.9" },
  { label: "Verified Reviews", value: "98%" },
  { label: "Repeat Customers", value: "76%" },
]

export default function CustomerReviews() {
  const [currentReview, setCurrentReview] = useState(0)

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-600"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section className="py-6 md:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">What Our Travelers Say</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Real experiences from real travelers who discovered Bangladesh with us
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <svg className="h-6 w-6 text-emerald-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-3xl font-bold text-white">{stat.value}</span>
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Review Carousel */}
        <div className="relative mb-16">
          <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Review Content */}
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <svg className="h-8 w-8 text-emerald-400 mr-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div className="flex">{renderStars(reviews[currentReview].rating)}</div>
                  </div>

                  <blockquote className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-6">
                    "{reviews[currentReview].review}"
                  </blockquote>

                  {/* Trip Images */}
                  {reviews[currentReview].images.length > 0 && (
                    <div className="flex gap-3 mb-6">
                      {reviews[currentReview].images.map((image, index) => (
                        <img
                          key={index}
                          src={image || "/placeholder.svg"}
                          alt={`Trip photo ${index + 1}`}
                          className="w-20 h-20 rounded-lg object-cover border-2 border-gray-700"
                        />
                      ))}
                    </div>
                  )}

                  {/* Trip Details */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center text-gray-400">
                      <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                      </svg>
                      <span className="text-sm">{reviews[currentReview].destination}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-sm">{reviews[currentReview].duration}</span>
                    </div>
                    <span className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-md text-sm">
                      {reviews[currentReview].tripType}
                    </span>
                  </div>
                </div>

                {/* Reviewer Info */}
                <div className="lg:w-80">
                  <div className="bg-gray-800 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={reviews[currentReview].avatar || "/placeholder.svg"}
                        alt={reviews[currentReview].name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <div className="flex items-center">
                          <h4 className="text-lg font-semibold text-white mr-2">{reviews[currentReview].name}</h4>
                          {reviews[currentReview].verified && (
                            <svg className="h-5 w-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                        <p className="text-gray-400 text-sm">{reviews[currentReview].location}</p>
                        <p className="text-gray-500 text-xs">{reviews[currentReview].date}</p>
                      </div>
                    </div>

                    <div className="text-center pt-4 border-t border-gray-700">
                      <p className="text-gray-400 text-sm mb-2">
                        {reviews[currentReview].helpful} people found this helpful
                      </p>
                      <button className="border border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent px-4 py-2 rounded-md text-sm transition-colors">
                        Helpful
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevReview}
              className="border border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent p-2 rounded-md transition-colors"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex items-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentReview ? "bg-emerald-400" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="border border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent p-2 rounded-md transition-colors"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Review Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.slice(0, 3).map((review) => (
            <div key={review.id} className="bg-gray-900 border border-gray-700 rounded-lg">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={review.avatar || "/placeholder.svg"}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div className="flex-1">
                    <div className="flex items-center">
                      <h4 className="font-semibold text-white mr-2">{review.name}</h4>
                      {review.verified && (
                        <svg className="h-4 w-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                    <div className="flex">{renderStars(review.rating)}</div>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4 line-clamp-4">{review.review}</p>

                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{review.destination}</span>
                  <span>{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
