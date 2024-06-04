
import { FacebookShareButton, FacebookIcon } from 'react-share';

const stories = [
    {
        id: 1,
        title: "A Journey to the Hills",
        image: 'https://i.ibb.co/30N26nq/sea-beach.jpg',
        description: "An amazing journey through the beautiful hills...",
        link: "/story/1"
    },
    {
        id: 2,
        title: "Exploring the Beaches",
        image: 'https://i.ibb.co/30N26nq/sea-beach.jpg',
        description: "A relaxing time spent on the sandy beaches...",
        link: "/story/2"
    },
    {
        id: 3,
        title: "Adventures in the Forest",
        image: 'https://i.ibb.co/30N26nq/sea-beach.jpg',
        description: "A thrilling adventure in the dense forest...",
        link: "/story/3"
    },
    {
        id: 4,
        title: "City Lights and Nights",
        image: 'https://i.ibb.co/30N26nq/sea-beach.jpg',
        description: "The vibrant nightlife in the bustling city...",
        link: "/story/4"
    },
];

const TouristStorySection = () => {
    return (
        <div className="container mx-auto text-center">
                <div className="bg-gray-900 py-12 px-8 mb-40">
                <h2 className="text-white text-3xl mb-8">Tourist Stories</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {stories.map(story => (
                        <div key={story.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                            <img src={story.image} alt={story.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-white text-xl mb-2">{story.title}</h3>
                                <p className="text-gray-400 mb-4">{story.description}</p>
                                <div className="flex justify-between items-center">
                                    <a href={story.link} className="text-blue-500 hover:underline">Read More</a>
                                    <FacebookShareButton url={`https://yourwebsite.com${story.link}`} quote={story.title}>
                                        <FacebookIcon size={32} round />
                                    </FacebookShareButton>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="mt-8 btn btn-secondary text-white py-2 px-4 rounded">
                    <a href="/all-stories">All Stories</a>
                </button>
            </div>
        </div>
    );
};

export default TouristStorySection;
