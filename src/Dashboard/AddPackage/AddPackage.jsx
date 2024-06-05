import Swal from "sweetalert2";

import useAxiosSecure from "../../Pages/hooks/useAxiosSecure";


const AddPackage = () => {
    // const [axiosSecure] = useAxiosSecure();

    const axiosSecure = useAxiosSecure()
     

  

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        const form = e.target;
        const spotPhoto = form.spotPhoto.value;
        const tourType = form.tourType.value;
        const tripTitle = form.tripTitle.value;
        const price = form.price.value;
        const description = form.description.value;
        const gallery1 = form.gallery1.value;
        const gallery2 = form.gallery2.value;
        const gallery3 = form.gallery3.value;
        const day1 = form.day1.value;
        const day2 = form.day2.value;
        const day3 = form.day3.value;
        const day4 = form.day4.value;
        console.table({spotPhoto, tourType, tripTitle, price, description, gallery1, gallery2, gallery3, day1, day2, day3, day4})
        const packageItem = {spotPhoto, tourType, tripTitle, price, description, gallery1, gallery2, gallery3, day1, day2, day3, day4}
        
        axiosSecure.post('/add-package', packageItem)
			.then(res => {
				console.log(res.data)
				if (res.data.insertedId) {
					Swal.fire({
						position: "top-center",
						icon: "success",
						title: `Package has been added`,
						showConfirmButton: false,
						timer: 1500
						
					});
					// refetch()
				}
			})

       
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Add My Package</h2>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="spotPhoto">
                        Spot Photo URL
                    </label>
                    <input
                        type="text"
                        id="spotPhoto"
                        name="spotPhoto"
                      
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="tourType">
                        Tour Type
                    </label>
                    <input
                        type="text"
                        id="tourType"
                        name="tourType"
                 
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="tripTitle">
                        Trip Title
                    </label>
                    <input
                        type="text"
                        id="tripTitle"
                        name="tripTitle"
                      
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                    
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                    
                        className="w-full px-3 py-2 border rounded"
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" >
                        Gallery URL1
                    </label>
                    <input
                        type="text"
                        id="gallery1"
                        name="gallery1"
                      
                     
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" >
                        Gallery URL2
                    </label>
                    <input
                        type="text"
                        id="gallery2"
                        name="gallery2"
                      
                     
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" >
                        Gallery URL3
                    </label>
                    <input
                        type="text"
                        id="gallery3"
                        name="gallery3"
                      
                     
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                {/* tour plane */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="tourPlan">
                        Tour Plan (day 1)
                    </label>
                    <input
                        id="day1"
                        name="day1"
                    
                      
                        className="w-full px-3 py-2 border rounded"
                        required
                    ></input>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="tourPlan">
                        Tour Plan (day 2)
                    </label>
                    <input
                        id="day2"
                        name="day2"
                    
                      
                        className="w-full px-3 py-2 border rounded"
                        required
                    ></input>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="tourPlan">
                        Tour Plan (day 3)
                    </label>
                    <input
                        id="day3"
                        name="day3"
                    
                      
                        className="w-full px-3 py-2 border rounded"
                        required
                    ></input>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="tourPlan">
                        Tour Plan (day 4)
                    </label>
                    <input
                        id="day4"
                        name="day4"
                    
                      
                        className="w-full px-3 py-2 border rounded"
                        required
                    ></input>
                </div>
             
             
                <button
                    type="submit"
                    className="w-full bg-pink-600 text-white py-2 font-bold rounded hover:bg-pink-700 transition duration-300"
                >
                    Add Package
                </button>
            </form>
        </div>
    );
};

export default AddPackage;
