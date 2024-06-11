/* eslint-disable react/prop-types */


const tours = [
  {
    id: 1,
    spotPhoto: "https://i.ibb.co/8sXYy5q/nafiul-hasan-ve-Ir-XDU9-WQI-unsplash.jpg",
    tourType: "Beach",
    tripTitle: "Cox's Bazar Beach Retreat",
    price: "$250",
    viewPackageUrl: "https://example.com/package1",
    aboutTour: "Experience the longest natural sea beach in the world at Cox's Bazar. Enjoy the golden sand, crystal clear water, and vibrant local culture."
  },
  {
    id: 2,
    spotPhoto: "https://i.ibb.co/gtjYKCB/1697290342012.jpg",
    tripTitle: "Discover the Ruins of Mahasthangarh",
    price: "$300",
    aboutTour: "Explore the ancient ruins of Mahasthangarh, the oldest city in Bangladesh, and delve into its rich history and archaeological significance.",
    viewPackageUrl: "https://example.com/package2"
  },
  {
    id: 3,
    spotPhoto: "https://i.ibb.co/yfk4cMP/river-runs-through-jungle.jpg",
    tripTitle: "Sundarbans Mangrove Forest Adventure",
    price: "$400",
    aboutTour: "Join an adventure into the Sundarbans, the largest mangrove forest in the world, home to the majestic Bengal tiger and diverse wildlife.",
    viewPackageUrl: "https://example.com/package3"
  },
  {
    id: 4,
    spotPhoto: "https://i.ibb.co/pZZTsm4/rangamati.jpg",
    tripTitle: "Rangamati Cultural Exploration",
    price: "$350",
    aboutTour: "Discover the cultural heritage of Rangamati, a place known for its indigenous communities, scenic beauty, and traditional crafts.",
    viewPackageUrl: "https://example.com/package4"
  },
  {
    id: 5,
    spotPhoto: "https://i.ibb.co/NY0w7SJ/hiker-mountainous-landscape.jpg",
    tripTitle: "Sylhet Rainforest Expedition",
    price: "$450",
    aboutTour: "Venture into the lush rainforests of Sylhet, known for its biodiversity, waterfalls, and serene tea gardens.",
    viewPackageUrl: "https://example.com/package5"
  },
  {
    id: 6,
    spotPhoto: "https://i.ibb.co/gZfL097/c1c86e3f049aff77bf9df150089f9965.jpg",
    tripTitle: "Dhaka City Exploration",
    price: "$200",
    aboutTour: "Discover the bustling city of Dhaka, the capital of Bangladesh, known for its vibrant culture, historic sites, and delicious cuisine.",
    viewPackageUrl: "https://example.com/package6"
  },
  {
    id: 7,
    spotPhoto: "https://i.ibb.co/t8B1TdN/Nilgiri.jpg",
    tripTitle: "Bandarban Mountain Trekking",
    price: "$500",
    aboutTour: "Trek through the scenic mountains of Bandarban, known for its stunning landscapes, waterfalls, and indigenous cultures.",
    viewPackageUrl: "https://example.com/package7"
  }
];

const TourCard = ({ tour }) => (
  <a
    rel="noopener noreferrer"
    href={tour.viewPackageUrl}
    className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-base-100 shadow-lg rounded-lg"
  >
    <img
      src={tour.spotPhoto}
      alt={tour.tripTitle}
      className="object-cover w-full h-64 rounded-t-lg sm:h-96 lg:col-span-7"
    />
    <div className="p-6 space-y-2 lg:col-span-5">
      <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{tour.tripTitle}</h3>
      <span className="text-xs text-base-content">{tour.price}</span>
      <p>{tour.aboutTour}</p>
    </div>
  </a>
);

const Blogs = () => {
  return (
    <div>
      <section className="bg-base-200 text-base-content">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          {/* Main Tour Block */}
          <TourCard tour={tours[0]} />
          {/* Other Tour Blocks */}
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tours.slice(1).map(tour => (
              <a
                key={tour.id}
                rel="noopener noreferrer"
                href={tour.viewPackageUrl}
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-base-100 shadow-lg rounded-lg"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded-t-lg h-44"
                  src={tour.spotPhoto}
                  alt={tour.tripTitle}
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    {tour.tripTitle}
                  </h3>
                  <span className="text-xs text-base-content">{tour.price}</span>
                  <p>{tour.aboutTour}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="flex justify-center">
            <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline bg-base-100 shadow-md text-base-content">
              Load more posts...
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
