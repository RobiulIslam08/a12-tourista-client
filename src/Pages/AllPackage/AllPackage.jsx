import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../hooks/useAxiosCommon";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";


const AllPackage = () => {
	const axiosCommon = useAxiosCommon()
	const {user} = useAuth()
	const { data: Package = [] } = useQuery({
		queryKey: ['add-package'],
		queryFn: async () => {
			const { data } = await axiosCommon.get('/add-package')
			return data
		}
	})
	const handleWishlist =async (id,tourType, tripTitle,price,spotPhoto) => {
		const userEmail = user?.email
		const packageInfo = {id,tourType, tripTitle,price,spotPhoto, userEmail}
		

		try{
			const {data} = await axiosCommon.post(`/wishlist`,packageInfo)
			
			if(data.insertedId){
				toast.success('has been added to the wishlist')
			}
			return data
		}
		catch(err){
			console.log(err)
		}
	}
	return (
		<div className="mb-36">
			<p className="text-lg md:text-2xl lg:text-3xl font-bold text-center mt-36  mb-20">All Package</p>
			<div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
					{
						Package.map(item => <div key={item?._id} className="card  bg-base-100 shadow-xl">
						<figure>
							<img src={item.spotPhoto} alt="image" className="w-full h-48 md:h-64 lg:h-72 object-cover"  />
						</figure>
							<FaHeart onClick={()=>handleWishlist(item?._id,item?.tourType,item?.tripTitle,item?.price,item.spotPhoto)} className="text-fuchsia-600 text-2xl hover:text-pink-600 absolute right-4  top-4"/>
						<div className="card-body">
							<h2 className="text-xl font-bold">{item?.tourType}</h2>
							<p className="">{item?.tripTitle}</p>
							<p >Price: {item?.price}$</p>
							<div className="card-actions justify-start">
								<Link to={`/package-detaisl/${item?._id}`}><button className="btn btn-secondary btn-sm">View Package</button></Link>
							</div>
						</div>
					</div>)
					}
					
					</div>
		</div>
	);
};

export default AllPackage;