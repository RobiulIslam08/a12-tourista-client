// import { useQuery } from "@tanstack/react-query";
// import { useParams } from "react-router-dom";
// import useAxiosCommon from "../../Pages/hooks/useAxiosCommon";


// const PackageDetails = () => {
// 	const axiosCommon = useAxiosCommon()
// 	const { id } = useParams()
// 	const { data = [], isLoading, error } = useQuery({
// 		queryKey: ['package-details'],
// 		queryFn: async () => {
// 			const { data } = await axiosCommon.get(`/package-detaisl/${id}`)
// 			return data
// 		}
// 	})
// 	if (isLoading) {
// 		return <div className="text-center text-lg">Loading...</div>;
// 	}

// 	if (error) {
// 		return <div className="text-center text-lg text-red-500">Error loading package details.</div>;
// 	}
// 	return (
// 		<div>
// 			{/* gallary img */}
// 			<div className="flex flex-col ">
// 				<div className=""><img src={data.gallery1} className="" alt="" /></div>
// 				<div className="flex ">
// 					<div><img src={data.gallery1} className=" flex-1" alt="" /></div>
// 					<div><img src={data.gallery1} className=" flex-1" alt="" /></div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default PackageDetails;
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import useAxiosCommon from "../../Pages/hooks/useAxiosCommon";
import useAuth from "../../Pages/hooks/useAuth";

const PackageDetails = () => {
	const axiosCommon = useAxiosCommon();
	const {user} = useAuth()
	const { id } = useParams();

	// tour guide data get from db
	const { data: guides = [] } = useQuery({
		queryKey: ['guidee'],
		queryFn: async () => {
			const { data } = await axiosCommon.get('/guideInfo');
			return data;
		}
	})



	// package details data get from db
	const { data = {}, isLoading, error } = useQuery({
		queryKey: ['package-details', id],
		queryFn: async () => {
			const response = await axiosCommon.get(`/package-detaisl/${id}`);
			return response.data;
		},
	});

	if (isLoading) {
		return <div className="text-center text-lg">Loading...</div>;
	}

	if (error) {
		return <div className="text-center text-lg text-red-500">Error loading package details.</div>;
	}

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-center mt-10 mb-20">Package Details Here</h1>
			{/* galary img */}
			<div className="container mx-auto ">
				<div className="flex flex-col items-center space-y-4">
					<div className="w-full h-64">
						<img src={data.gallery1} className="w-full h-full object-cover rounded-lg shadow-md" alt="Main Gallery Image" />
					</div>
					<div className="flex w-full space-x-4">
						{data.gallery2 && (
							<div className="flex-1 h-48">
								<img src={data.gallery2} className="w-full h-full object-cover rounded-lg shadow-md" alt="Gallery Image 2" />
							</div>
						)}
						{data.gallery3 && (
							<div className="flex-1 h-48">
								<img src={data.gallery3} className="w-full h-full object-cover rounded-lg shadow-md" alt="Gallery Image 3" />
							</div>
						)}
						{data.gallery4 && (
							<div className="flex-1 h-48">
								<img src={data.gallery4} className="w-full h-full object-cover rounded-lg shadow-md" alt="Gallery Image 4" />
							</div>
						)}
					</div>
				</div>
			</div>
			{/* description */}

			<p className="my-14"><span className="font-bold text-lg">About The Tour:</span> {data?.description}</p>
			{/* tour plane */}
			<div>
				<p className="text-center font-bold underline text-xl md:text-2xl my-14">Tour Plane</p>
				<p className=""><span className="bg-fuchsia-500 text-black px-2 rounded-md font-semibold">Day 1:</span></p>
				<p className="mb-3">{data?.day1}</p>
				<p ><span className="bg-fuchsia-500 text-black px-2 rounded-md font-semibold">Day 2:</span></p>
				<p className="mb-3">{data?.day2}</p>
				<p ><span className="bg-fuchsia-500 text-black px-2 rounded-md font-semibold">Day 3:</span></p>
				<p className="mb-3">{data?.day3}</p>
				<p ><span className="bg-fuchsia-500 text-black px-2 rounded-md font-semibold">Day 4:</span></p>
				<p className="mb-3">{data?.day4}</p>
				<p className=" font-bold mb-14"> --End Of Tour--</p>
			</div>

			{/* tour guide list */}
			<div>
				<p className="text-center font-bold underline text-xl md:text-2xl my-14">All Tour Guide</p>
				<div className="overflow-x-auto">
					<table className="table">
						{/* head */}
						<thead>
							<tr>

								<th>Name</th>
								<th>Work Experience</th>
								<th>Phone</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{/* row 1 */}

							{
								guides.map(guide => <tr key={guide._id}>

									<td>
										<div className="flex items-center gap-3">
											<div className="avatar">
												<div className="mask mask-squircle w-12 h-12">
													<img src={guide?.profile} />
												</div>
											</div>
											<div>
												<div className="font-bold">{guide?.name}</div>
											
											</div>
										</div>
									</td>
									<td>
										
										{guide?.workExperience}
									</td>
									<td>{guide?.phone}</td>
									<th>
										<Link to={`/guide-details/${guide._id}`}><button className="btn btn-secondary btn-xs">details</button></Link>
									</th>
								</tr>)
							}

						</tbody>
						{/* foot */}


					</table>
				</div>
			</div>

			{/* booking form here */}
			
		</div>
	);
};

export default PackageDetails;
