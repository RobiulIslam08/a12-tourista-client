import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Pages/hooks/useAuth";
import useAxiosCommon from "../../Pages/hooks/useAxiosCommon";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";


const AssignTour = () => {
	const { user } = useAuth()
	const axiosCommon = useAxiosCommon()
	const { data = [] } = useQuery({
		queryKey: ['assigned-tour', user?.email],
		queryFn: async () => {
			const { data } = await axiosCommon.get(`/assigned-tour/${user.displayName}`)
			return data
		}
	})
	const handleStatus = async (status, id) => {
		
		const updateInfo = { status }
		try {
			const { data } = await axiosCommon.patch(`/update-status/${id}`, updateInfo)
			
			if(data.modifiedCount > 0){
				toast.success('successfully updated')
			}
			return data
		}
		catch (err) {
			console.log(err)
		}
	}
	return (
		<div>
			<Helmet>
                <title>My Assign Tour Page</title>
            </Helmet>
			<p className="text-center text-lg md:text-2xl lg:text-3xl font-bold my-14">My Assigned Tour</p>
			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead>
						<tr>

							<th>Package Name</th>
							<th>Tourist Name</th>
							<th>Tour Start Date</th>
							<th>Tour End Date</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>

						{
							data.map(item => <tr key={item?._id}>

								<td>
									{item?.packageName}
								</td>

								<td>{item?.touristName}</td>
								<td>{item?.StartTourDate}</td>
								<td>{item?.EndTourDate}</td>
								<td>{item?.price}$</td>
								<th>
									<button onClick={() => handleStatus('Accepted', item?._id)} className="btn  text-black bg-[#f472b6] hover:bg-[#f355a7] btn-xs">Accepted</button>
								</th>
								<th>
									<button onClick={() => handleStatus('Rejected', item?._id)} className="btn btn-error btn-xs">Rejected</button>
								</th>
							</tr>)
						}

					</tbody>


				</table>
			</div>
		</div>
	);
};

export default AssignTour;