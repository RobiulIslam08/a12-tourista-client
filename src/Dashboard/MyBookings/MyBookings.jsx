import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../Pages/hooks/useAxiosCommon";
import useAuth from "../../Pages/hooks/useAuth";
import Swal from "sweetalert2";



const MyBookings = () => {
	const { user } = useAuth()
	const axiosCommon = useAxiosCommon()
	const { data = [], refetch } = useQuery({
		queryKey: ['booking-data', user?.email],
		queryFn: async () => {
			const { data } = await axiosCommon.get(`add-booking/${user.email}`)
			return data
		},
		enabled: !!user?.email,
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
					const { data } = await axiosCommon.delete(`/booking-delete/${id}`)
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
			<p className="text-lg md:text-2xl lg:text-3xl text-center my-14 font-bold">My Booking</p>
			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead>
						<tr>

							<th>Package Name</th>
							<th>Guide Name</th>
							<th>Tour Start Date</th>
							<th>Tour End Date</th>
							<th>Tour Price</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{
							data.map(item => <tr key={item._id}>

								<td>
									{item?.packageName}
								</td>
								<td>
									{item?.selectedGuide}
								</td>
								<td>{item?.StartTourDate}</td>
								<td>{item?.EndTourDate}</td>
								<td>{item?.price}</td>
								<td>{item?.status}</td>
								<td><button className="btn btn-sm text-black bg-[#f472b6] hover:bg-[#f355a7]">Pay</button></td>
								<td><button onClick={() => handleDelete(item?._id)} className="btn btn-sm text-black btn-error">Cencel</button></td>

							</tr>)
						}


					</tbody>


				</table>
			</div>
		</div>
	);
};

export default MyBookings;