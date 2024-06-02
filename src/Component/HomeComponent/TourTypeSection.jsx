

const TourTypeSection = () => {
    const tourTypes = [
        { name: 'HIKING', icon: 'https://i.ibb.co/30N26nq/sea-beach.jpg' },
        { name: 'SPORTS', icon: 'sports_icon.png' },
        { name: 'WALKING', icon: 'walking_icon.png' },
        { name: 'WILDLIFE', icon: 'wildlife_icon.png' },
        { name: 'AIR RIDES', icon: 'air_rides_icon.png' },
    ];

    return (
        <div className="bg-gray-900 py-12 mb-40">
            <div className="container mx-auto text-center">
                <h2 className="text-white text-3xl mb-4">Find a Tour by</h2>
                <h3 className="text-blue-500 text-2xl mb-8">TOUR TYPE</h3>
                <div className="flex justify-center space-x-4 overflow-x-auto">
                    {tourTypes.map((tour, index) => (
                        <div key={index} className="flex-shrink-0">
                            <div className="bg-gray-800 rounded-full p-6">
                                <img
                                    src={tour.icon}
                                    alt={tour.name}
                                    className="w-12 h-12 mx-auto mb-2"
                                />
                                <span className="text-white text-lg">{tour.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TourTypeSection;
