// src/Pages/AllPackagesPage.jsx
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import useAxiosCommon from "../../Pages/hooks/useAxiosCommon"; // Adjust path as needed
import useAuth from "../../Pages/hooks/useAuth"; // Adjust path as needed

const AllPackagesPage = () => {
    const { user } = useAuth();
    const axiosCommon = useAxiosCommon();

    const [selectedCategory, setSelectedCategory] = useState('All');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);

    const { data: PackageData = [], refetch } = useQuery({
        queryKey: ['all-packages', selectedCategory, minPrice, maxPrice, searchTerm, currentPage, itemsPerPage],
        queryFn: async () => {
            const params = {
                category: selectedCategory === 'All' ? '' : selectedCategory,
                minPrice,
                maxPrice,
                maxPrice, // Corrected typo: maxPrice should be here
                searchTerm,
                page: currentPage,
                limit: itemsPerPage,
            };
            const { data } = await axiosCommon.get('/add-package', { params });
            return data;
        }
    });

    // Client-side filtering and pagination (if backend doesn't support directly)
    const filteredPackages = PackageData.filter(item => {
        const matchesCategory = selectedCategory === 'All' || item.tourType === selectedCategory;
        const matchesMinPrice = minPrice === '' || item.price >= parseFloat(minPrice);
        const matchesMaxPrice = maxPrice === '' || item.price <= parseFloat(maxPrice);
        const matchesSearchTerm = searchTerm === '' || item.tripTitle.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesMinPrice && matchesMaxPrice && matchesSearchTerm;
    });

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
            console.error(err); // Use console.error for errors
        }
    };

    // Refetch data when filters or pagination change
    // useEffect(() => {
    //     refetch();
    // }, [selectedCategory, minPrice, maxPrice, searchTerm, currentPage, itemsPerPage, refetch]); // This useEffect is still useful if you want to trigger a refetch on every filter/pagination change

    return (
        <div className="my-20 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center my-10">Our Tour Packages</h1>

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
                                <Link to={`/package-details/${item?._id}`}><button className="btn btn-secondary btn-sm">View Package</button></Link>
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
        </div>
    );
};

export default AllPackagesPage;