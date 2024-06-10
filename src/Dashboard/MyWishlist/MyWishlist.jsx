import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../Pages/hooks/useAxiosCommon";
import useAuth from "../../Pages/hooks/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyWishlist = () => {
	const {user} = useAuth()
	const axiosCommon = useAxiosCommon()
	const {data = [], refetch} = useQuery({
		queryKey : ['wishlist-data', user?.email],
		queryFn: async () =>{
			const {data} = await axiosCommon.get(`/wishlist/${user.email}`)
      console.log(data)
			return data
		}
	})
  const handleDelete =  (id) => {
		console.log('delete this', id)
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!"
		}).then(async(result) => {
			if (result.isConfirmed) {
				
				try {
					const { data } = await axiosCommon.delete(`/mywishlist-delete/${id}`)
					Swal.fire({
						title: "Deleted!",
						text: "Your file has been deleted.",
						icon: "success"
					});
					refetch()
					return data
				}
				catch (err) {
					console.log('delete korar somoy problem hoiche', err)
				}
			}
		});
		
	}
	return (
		<div>
			<h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-center my-14">My Wishlist</h1>
			<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>Spot Phot</th>
        <th>Tour Type</th>
        <th>Trip Title</th>
        <th>Price</th>
        
      </tr>
    </thead>
    <tbody>
      
      {
        data?.map(item =><tr key={item?._id}>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={item?.spotPhoto} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              
            </div>
          </td>
          <td>
            {item?.tourType}
          </td>
          <td>{item?.tripTitle}</td>
          <td>{item?.price}$</td>
          <th><Link Link to={`/package-detaisl/${item?.id}`}><button  className="btn btn-xs text-black bg-[#f472b6] hover:bg-[#f355a7]">Visit Details</button></Link></th>
          <th><button onClick={() => handleDelete(item?._id)} className="btn btn-xs btn-error">Delete</button></th>
        </tr>)
      }
      
    </tbody>
  
    
  </table>
</div>
		</div>
	);
};

export default MyWishlist;