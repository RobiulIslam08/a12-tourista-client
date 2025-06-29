// /* eslint-disable react/no-unknown-property */

// // export default TabTourist;
// import { useQuery } from "@tanstack/react-query";
// import { useState } from "react";
// import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
// import 'react-tabs/style/react-tabs.css';
// import useAxiosCommon from "../../Pages/hooks/useAxiosCommon";
// import { Link } from "react-router-dom";
// import { FaHeart } from "react-icons/fa";
// import { toast } from "react-toastify";
// import useAuth from "../../Pages/hooks/useAuth";
 

// const TabTourist = () => {
// 	const [tabIndex, setTabIndex] = useState(0);
// 	const {user} = useAuth()
// 	const axiosCommon = useAxiosCommon()
// 	const { data = [] } = useQuery({
// 		queryKey: ['guideInfo'],
// 		queryFn: async () => {
// 			const { data } = await axiosCommon.get('/guideInfo')
// 			return data
// 		}
// 	})

// 	const { data: Package = [] } = useQuery({
// 		queryKey: ['add-package'],
// 		queryFn: async () => {
// 			const { data } = await axiosCommon.get('/add-package')
// 			return data
// 		}
// 	})

// 	const handleWishlist =async (id,tourType, tripTitle,price,spotPhoto) => {
// 		const userEmail = user?.email
// 		const packageInfo = {id,tourType, tripTitle,price,spotPhoto, userEmail}
		

// 		try{
// 			const {data} = await axiosCommon.post(`/wishlist`,packageInfo)
			
// 			if(data.insertedId){
// 				toast.success('has been added to the wishlist')
// 			}
// 			return data
// 		}
// 		catch(err){
// 			console.log(err)
// 		}
// 	}
// 	return (
// 		<div className="my-40 px-4 sm:px-6 lg:px-8">
// 			<div>
// 				<p className="text-3xl font-bold text-center my-20">Tourism and Travel Guide</p>
// 			</div>
// 			<Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
// 				<TabList className="flex justify-center border-b-2 border-gray-300">
// 					<Tab className="mx-2 px-4 py-2 cursor-pointer hover:bg-gray-100">Overview</Tab>
// 					<Tab className="mx-2 px-4 py-2 cursor-pointer hover:bg-gray-100">Our Packages</Tab>
// 					<Tab className="mx-2 px-4 py-2 cursor-pointer hover:bg-gray-100">Meet Our Tour Guides</Tab>
// 				</TabList>
// 				<TabPanel>
// 					<div className="max-w-4xl mx-auto">
// 						<h2 className="text-2xl font-bold my-4 text-center sm:text-left">Discover the Beauty of Bangladesh</h2>
// 						<p className="mb-4 text-justify">
// 							Bangladesh is a land of natural beauty and rich cultural heritage. From the world s largest mangrove forest, the Sundarbans, to the longest natural sea beach, Cox s Bazar, there is much to explore and experience.
// 						</p>
// 						<div  className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// 							<iframe  className="w-full aspect-video" src="https://www.youtube.com/embed/paNOhUirl9A?si=cZjwNv7xS3YXHd-R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

// 							</iframe>
// 							<iframe  className="w-full aspect-video" src="https://www.youtube.com/embed/8PYwoxt-OfE?si=iccvc3qEW5-JMprU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
// 							<iframe  className="w-full aspect-video" src="https://www.youtube.com/embed/rDYdeq3JW_E?si=J95gr7sD0zH0l7rK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
// 							<iframe  className="w-full aspect-video" src="https://www.youtube.com/embed/Cn4G2lZ_g2I?si=DEBaMq4nGL_DkS1s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


// 						</div>
// 						<p className="text-justify mt-4">
// 							Experience the vibrant culture, delicious cuisine, and warm hospitality of the people. Whether you are an adventure seeker, a history enthusiast, or just looking to relax, Bangladesh has something for everyone.
// 						</p>
// 						<h3 className="text-xl font-bold my-4">Popular Destinations:</h3>
// 						<ul className="list-disc ml-8">
// 							<li>Sundarbans</li>
// 							<li>Cox s Bazar</li>
// 							<li>Srimangal</li>
// 							<li>Rangamati</li>
// 						</ul>
// 						<h3 className="text-xl font-bold my-4">Things to Do:</h3>
// 						<ul className="list-disc ml-8">
// 							<li>Jungle Safari</li>
// 							<li>Beach Relaxation</li>
// 							<li>Trekking in the Hills</li>
// 							<li>Exploring Tribal Culture</li>
// 						</ul>
// 					</div>
// 				</TabPanel>
// 				<TabPanel>
// 					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
// 					{
// 						Package.slice(0,3).map(item => <div key={item?._id} className="card  bg-base-100 shadow-xl">
// 						<figure>
// 							<img src={item.spotPhoto} alt="image" className="w-full h-48 md:h-64 lg:h-72 object-cover"  />
// 						</figure>
// 							<FaHeart onClick={()=>handleWishlist(item?._id,item?.tourType,item?.tripTitle,item?.price,item.spotPhoto)} className="text-fuchsia-600 text-2xl hover:text-pink-600 absolute right-4  top-4"/>
// 						<div className="card-body">
// 							<h2 className="text-xl font-bold">{item?.tourType}</h2>
// 							<p className="">{item?.tripTitle}</p>
// 							<p >Price: {item?.price}$</p>
// 							<div className="card-actions justify-start">
// 								<Link to={`/package-detaisl/${item?._id}`}><button className="btn btn-secondary btn-sm">View Package</button></Link>
// 							</div>
// 						</div>
// 					</div>)
// 					}
					
// 					</div>
// 					<div className="flex justify-center items-center w-full mt-10 md:mt-16">
// 					<Link to='/all-package'><button className="btn btn-primary">All Package</button></Link>
// 					</div>
					
// 				</TabPanel>
// 				<TabPanel>

// 					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
// 						{data.map(item => <div key={item._id} className="card bg-base-100 shadow-xl">
// 							<figure className="px-10 pt-10">
// 								<img src={item.profile} alt="Shoes" className="rounded-full h-28 w-28" />
// 							</figure>
// 							<div className="card-body items-center text-center">
// 								<h2 className="card-title">{item.name}</h2>
// 								<p>{item.education}</p>
// 								<div className="card-actions">
// 									<Link to={`/guide-details/${item._id}`}><button className="btn btn-secondary btn-sm">Details</button></Link>
// 								</div>
// 							</div>
// 						</div>)}

// 					</div>
// 				</TabPanel>
// 			</Tabs>
// 		</div>
// 	);
// };

// export default TabTourist;

/* eslint-disable react/no-unknown-property */

// export default TabTourist;
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react"; // Import useEffect
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import useAxiosCommon from "../../Pages/hooks/useAxiosCommon";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import useAuth from "../../Pages/hooks/useAuth";

const TabTourist = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const { user } = useAuth();
    const axiosCommon = useAxiosCommon();

    // State for filtering and pagination
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6); // Displaying 6 items per page initially

    const { data = [] } = useQuery({
        queryKey: ['guideInfo'],
        queryFn: async () => {
            const { data } = await axiosCommon.get('/guideInfo');
            return data;
        }
    });

    const { data: PackageData = [], refetch } = useQuery({
        queryKey: ['add-package', selectedCategory, minPrice, maxPrice, searchTerm, currentPage, itemsPerPage],
        queryFn: async () => {
            const params = {
                category: selectedCategory === 'All' ? '' : selectedCategory,
                minPrice,
                maxPrice,
                searchTerm,
                page: currentPage,
                limit: itemsPerPage,
            };
            // Note: Your backend API needs to support these query parameters for filtering and pagination
            const { data } = await axiosCommon.get('/add-package', { params });
            // Assuming your backend returns an object like { packages: [], totalCount: N }
            // For this example, we'll just return the packages array
            return data;
        }
    });

    // Client-side filtering and pagination (if backend doesn't support directly)
    // This part would be removed or simplified if your backend handles it efficiently
    const filteredPackages = PackageData.filter(item => {
        const matchesCategory = selectedCategory === 'All' || item.tourType === selectedCategory;
        const matchesMinPrice = minPrice === '' || item.price >= parseFloat(minPrice);
        const matchesMaxPrice = maxPrice === '' || item.price <= parseFloat(maxPrice);
        const matchesSearchTerm = searchTerm === '' || item.tripTitle.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesMinPrice && matchesMaxPrice && matchesSearchTerm;
    });

    // Client-side pagination
    const totalPages = Math.ceil(filteredPackages.length / itemsPerPage);
    const paginatedPackages = filteredPackages.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );


    const handleWishlist = async (id, tourType, tripTitle, price, spotPhoto) => {
        const userEmail = user?.email;
        const packageInfo = { id, tourType, tripTitle, price, spotPhoto, userEmail };

        try {
            const { data } = await axiosCommon.post(`/wishlist`, packageInfo);

            if (data.insertedId) {
                toast.success('has been added to the wishlist');
            }
            return data;
        } catch (err) {
            console.log(err);
        }
    };

    // Refetch data when filters or pagination change (if using server-side filtering)
    useEffect(() => {
        refetch();
    }, [selectedCategory, minPrice, maxPrice, searchTerm, currentPage, itemsPerPage, refetch]);


    return (
        <div className="my-40 px-4 sm:px-6 lg:px-8">
            <div>
                <p className="text-3xl font-bold text-center my-20">Tourism and Travel Guide</p>
            </div>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="flex justify-center border-b-2 border-gray-300">
                    <Tab className="mx-2 px-4 py-2 cursor-pointer hover:bg-gray-100">Overview</Tab>
                    <Tab className="mx-2 px-4 py-2 cursor-pointer hover:bg-gray-100">Our Packages</Tab>
                    <Tab className="mx-2 px-4 py-2 cursor-pointer hover:bg-gray-100">Meet Our Tour Guides</Tab>
                </TabList>
                <TabPanel>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold my-4 text-center sm:text-left">Discover the Beauty of Bangladesh</h2>
                        <p className="mb-4 text-justify">
                            Bangladesh is a land of natural beauty and rich cultural heritage. From the world s largest mangrove forest, the Sundarbans, to the longest natural sea beach, Cox s Bazar, there is much to explore and experience.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/paNOhUirl9A?si=cZjwNv7xS3YXHd-R" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/8PYwoxt-OfE?si=iccvc3qEW5-JMprU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/rDYdeq3JW_E?si=J95gr7sD0zH0l7rK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/Cn4G2lZ_g2I?si=DEBaMq4nGL_DkS1s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                        <p className="text-justify mt-4">
                            Experience the vibrant culture, delicious cuisine, and warm hospitality of the people. Whether you are an adventure seeker, a history enthusiast, or just looking to relax, Bangladesh has something for everyone.
                        </p>
                        <h3 className="text-xl font-bold my-4">Popular Destinations:</h3>
                        <ul className="list-disc ml-8">
                            <li>Sundarbans</li>
                            <li>Cox s Bazar</li>
                            <li>Srimangal</li>
                            <li>Rangamati</li>
                        </ul>
                        <h3 className="text-xl font-bold my-4">Things to Do:</h3>
                        <ul className="list-disc ml-8">
                            <li>Jungle Safari</li>
                            <li>Beach Relaxation</li>
                            <li>Trekking in the Hills</li>
                            <li>Exploring Tribal Culture</li>
                        </ul>
                    </div>
                </TabPanel>
                <TabPanel>
                    {/* Filter and Search Inputs */}
                    <div className="flex flex-wrap gap-4 justify-center my-8">
                        <select
                            className="select select-bordered w-full max-w-xs"
                            onChange={(e) => { setSelectedCategory(e.target.value); setCurrentPage(1); }}
                            value={selectedCategory}
                        >
                            <option value="All">All Categories</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Cultural">Cultural</option>
                            <option value="Beach">Beach</option>
                            {/* Add more categories as needed, or fetch dynamically */}
                        </select>

                        <input
                            type="number"
                            placeholder="Min Price"
                            className="input input-bordered w-full max-w-xs"
                            value={minPrice}
                            onChange={(e) => { setMinPrice(e.target.value); setCurrentPage(1); }}
                        />
                        <input
                            type="number"
                            placeholder="Max Price"
                            className="input input-bordered w-full max-w-xs"
                            value={maxPrice}
                            onChange={(e) => { setMaxPrice(e.target.value); setCurrentPage(1); }}
                        />
                        <input
                            type="text"
                            placeholder="Search by title"
                            className="input input-bordered w-full max-w-xs"
                            value={searchTerm}
                            onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                        {paginatedPackages.map(item => (
                            <div key={item?._id} className="card bg-base-100 shadow-xl relative">
                                <figure>
                                    <img src={item.spotPhoto} alt="image" className="w-full h-48 md:h-64 lg:h-72 object-cover" />
                                </figure>
                                <FaHeart onClick={() => handleWishlist(item?._id, item?.tourType, item?.tripTitle, item?.price, item.spotPhoto)} className="text-fuchsia-600 text-2xl hover:text-pink-600 absolute right-4 top-4 cursor-pointer" />
                                <div className="card-body">
                                    <h2 className="text-xl font-bold">{item?.tourType}</h2>
                                    <p>{item?.tripTitle}</p>
                                    <p>Price: ${item?.price}</p>
                                    <div className="card-actions justify-start">
                                        <Link to={`/package-detaisl/${item?._id}`}><button className="btn btn-secondary btn-sm">View Package</button></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Controls */}
                    <div className="flex justify-center items-center w-full mt-10 space-x-4">
                        <button
                            className="btn btn-primary"
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <span>Page {currentPage} of {totalPages}</span>
                        <button
                            className="btn btn-primary"
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages || totalPages === 0}
                        >
                            Next
                        </button>
                    </div>

                    <div className="flex justify-center items-center w-full mt-10 md:mt-16">
                        <Link to='/all-package'><button className="btn btn-primary">All Package</button></Link>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                        {data.map(item => (
                            <div key={item._id} className="card bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={item.profile} alt="Shoes" className="rounded-full h-28 w-28 object-cover" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{item.name}</h2>
                                    <p>{item.education}</p>
                                    <div className="card-actions">
                                        <Link to={`/guide-details/${item._id}`}><button className="btn btn-secondary btn-sm">Details</button></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabTourist;