const features = [
  {
    title: "Local Expert Guides",
    description: "Certified local guides with deep cultural knowledge and years of experience",
    highlight: "500+ Verified Guides",
    icon: "users",
  },
  {
    title: "Safe & Secure Travel",
    description: "Comprehensive safety protocols, insurance coverage, and 24/7 emergency support",
    highlight: "100% Safety Record",
    icon: "shield",
  },
  {
    title: "Award-Winning Service",
    description: "Recognized as Bangladesh's #1 travel platform with multiple tourism awards",
    highlight: "15+ Awards Won",
    icon: "award",
  },
  {
    title: "Best Price Guarantee",
    description: "Competitive pricing with no hidden fees. Find a lower price? We'll match it!",
    highlight: "Price Match Promise",
    icon: "dollar",
  },
  {
    title: "24/7 Customer Support",
    description: "Round-the-clock assistance in multiple languages for all your travel needs",
    highlight: "Always Available",
    icon: "clock",
  },
  {
    title: "Authentic Experiences",
    description: "Unique, off-the-beaten-path experiences that showcase real Bangladeshi culture",
    highlight: "100% Authentic",
    icon: "heart",
  },
]

const stats = [
  {
    number: "50,000+",
    label: "Happy Travelers",
    description: "Satisfied customers from around the world",
  },
  {
    number: "1,200+",
    label: "Tours Completed",
    description: "Successful trips across Bangladesh",
  },
  {
    number: "98%",
    label: "Customer Satisfaction",
    description: "Based on verified reviews and ratings",
  },
  {
    number: "15+",
    label: "Years Experience",
    description: "Pioneering tourism in Bangladesh",
  },
]

const certifications = [
  { name: "Bangladesh Tourism Board", logo: "/placeholder.svg?height=60&width=120" },
  { name: "ISO 9001 Certified", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Travel Safety Alliance", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Sustainable Tourism", logo: "/placeholder.svg?height=60&width=120" },
]

const getIcon = (iconName) => {
  const icons = {
    users: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
        />
      </svg>
    ),
    shield: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    award: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
    dollar: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
        />
      </svg>
    ),
    clock: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    heart: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  }
  return icons[iconName] || icons.heart
}

export default function WhyChooseUs() {
  return (
    <section className="py-6 md:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm mb-4 inline-block">
            Why Choose Tourista
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Your Trusted Travel Partner in Bangladesh</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We don't just plan trips – we create unforgettable experiences that connect you with the heart and soul of
            Bangladesh
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-emerald-500/50 transition-colors">
                <h3 className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">{stat.number}</h3>
                <h4 className="text-lg font-semibold text-white mb-1">{stat.label}</h4>
                <p className="text-gray-400 text-sm">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 group hover:transform hover:scale-105 rounded-lg"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-gray-700 group-hover:bg-gray-600 transition-colors mr-4 text-emerald-400">
                    {getIcon(feature.icon)}
                  </div>
                  <span className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-md text-xs">
                    {feature.highlight}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  )
}
