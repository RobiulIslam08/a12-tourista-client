
import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import useAxiosCommon from "../../Pages/hooks/useAxiosCommon";
import useAuth from "../../Pages/hooks/useAuth";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
const PackageDetails = () => {
	const axiosCommon = useAxiosCommon();
	const { id } = useParams();
	const { user } = useAuth()
	const [StartTourDate, setStartTourDate] = useState(new Date());
	const [EndTourDate, setEndTourDate] = useState(new Date());
	const [selectedGuide, setSelectedGuide] = useState("");
	const navigate = useNavigate()
	// tour guide data get from db
	const { data: guides = [] } = useQuery({
		queryKey: ['guidee'],
		queryFn: async () => {
			const { data } = await axiosCommon.get('/guideInfo');
			return data;
		}
	})

	const handleBooking = (event) => {
		event.preventDefault();
		// Handle booking logic here
		const form = event.target;
		const packageName = form.packageName.value;
		const touristName = form.touristName.value;
		const price = form.price.value;
		const touristImage = form.touristImage.value;
		const touristEmail = form.touristEmail.value;
		let status = 'Review';

		// Convert dates to readable format
		const formattedStartTourDate = StartTourDate.toLocaleDateString();
		const formattedEndTourDate = EndTourDate.toLocaleDateString();
		console.table({ packageName, touristEmail, touristImage, touristName, price, StartTourDate: formattedStartTourDate, EndTourDate: formattedEndTourDate, status, selectedGuide })
		const bookingData = { packageName, touristEmail, touristImage, touristName, price, StartTourDate: formattedStartTourDate, EndTourDate: formattedEndTourDate, status, selectedGuide }
		// book data added in db when click book now btn
		Swal.fire({
			title: "Are you confirm booking this package?",
		
			icon: "question",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, I confirmed"
		}).then(async (result) => {
			if (result.isConfirmed) {

				axiosCommon.post('/add-booking', bookingData)
					.then(res => {


						if (res.data.insertedId) {
							console.log(res.data)
							Swal.fire({
								title: "Booked",
								text: "Your package is booked",
								icon: "success"
							}).then(() => {

								navigate('/dashboard/my-bookings')
							})

						}
					})

			}
		});

	};



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
				<p className=""><span className="bg-fuchsia-400 text-black px-2 rounded-md font-semibold">Day 1:</span></p>
				<p className="mb-3">{data?.day1}</p>
				<p ><span className="bg-fuchsia-400 text-black px-2 rounded-md font-semibold">Day 2:</span></p>
				<p className="mb-3">{data?.day2}</p>
				<p ><span className="bg-fuchsia-400 text-black px-2 rounded-md font-semibold">Day 3:</span></p>
				<p className="mb-3">{data?.day3}</p>
				<p ><span className="bg-fuchsia-400 text-black px-2 rounded-md font-semibold">Day 4:</span></p>
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
			<h2 className="text-2xl font-bold mb-6 text-center my-20">Book Your Tour</h2>
			<div className="max-w-2xl mx-auto my-10 p-6 bg-fuchsia-300 rounded-lg shadow-md">
				<form onSubmit={handleBooking}>
					<div className="form-control mb-4">
						<label className="label">
							<span className="label-text text-black font-semibold">Name of the Package</span>
						</label>
						<input type="text" defaultValue={data?.tourType} name="packageName" readOnly className="input input-bordered w-full" />
					</div>
					<div className="form-control mb-4">
						<label className="label">
							<span className="label-text text-black font-semibold">Tourist Name</span>
						</label>
						<input type="text" value={user?.displayName} name="touristName" readOnly className="input input-bordered w-full" />
					</div>
					<div className="form-control mb-4">
						<label className="label">
							<span className="label-text text-black font-semibold">Tourist Email</span>
						</label>
						<input type="email" value={user?.email} readOnly name="touristEmail" className="input input-bordered w-full" />
					</div>
					<div className="form-control mb-4">
						<label className="label">
							<span className="label-text text-black font-semibold">Tourist Image URL</span>
						</label>
						<input type="text" value={user?.photoURL} readOnly name="touristImage" className="input input-bordered w-full" />
					</div>
					<div className="form-control mb-4">
						<label className="label">
							<span className="label-text text-black font-semibold">Price (USD)</span>
						</label>
						<input type="text" value={data?.price} readOnly name="price" className="input input-bordered w-full" />
					</div>
					<div className="form-control mb-4">
						<label className="label">
							<span className="label-text text-black font-semibold">Tour Start Date</span>
						</label>
						<ReactDatePicker
							selected={StartTourDate}
							onChange={(date) => setStartTourDate(date)}
							className="input input-bordered w-full"
						/>
					</div>
					<div className="form-control mb-4">
						<label className="label">
							<span className="label-text text-black font-semibold">Tour End Date</span>
						</label>
						<ReactDatePicker
							selected={EndTourDate}
							onChange={(date) => setEndTourDate(date)}
							className="input input-bordered w-full"
						/>
					</div>
					<div className="form-control mb-6">
						<label className="label">
							<span className="label-text text-black font-semibold">Tour Guide</span>
						</label>
						
						<select className="select select-bordered w-full" onChange={(e) => setSelectedGuide(e.target.value)}>
							<option value="">Select a guide</option>
							{guides.map((guide) => (
								<option key={guide._id} value={guide.name}>
									{guide.name}
								</option>
							))}
						</select>
					</div>
					<button type="submit" className="btn btn-primary w-full">Book Now</button>
				</form>
			</div>
		</div>
	);
};

export default PackageDetails;
