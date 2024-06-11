
const Community = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center bg-purple-300 p-8 rounded-lg my-40 shadow-lg">
            <div className="flex-1 mb-8 lg:mb-0">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Join Our Community</h1>
                <p className="text-xl text-gray-600 mb-4">Grow your tourist experience</p>
                <p className="text-gray-500 mb-6">
                   We always try to best service porvide . We have a dedicated team member. They are very Experience. If you get our tour package , you will see many wonderful place .
                </p>
                <div className="flex items-center space-x-4">
                    <input type="text" placeholder="www.website.com" className="input input-bordered w-full max-w-xs" />
                    <button className="btn btn-secondary">Join Now</button>
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center relative">
                <img src="https://i.ibb.co/8mrRb23/portrait-young-smiling-handsome-model-man-dressed-gray-casual-hoodie-clothes-posing-white-wall-isola.jpg" alt="Community" className="w-64 h-64 object-cover rounded-full" />
                <div className="absolute bottom-0 right-0 bg-white px-4 py-2 rounded-full shadow-lg">Tammy P.</div>
            </div>
        </div>
    );
};

export default Community;
