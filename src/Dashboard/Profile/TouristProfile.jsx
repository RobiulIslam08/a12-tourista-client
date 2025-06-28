import ReactDatePicker from "react-datepicker";
import {useState} from 'react'
import useAuth from "../../Pages/hooks/useAuth";
import useAxiosCommon from "../../Pages/hooks/useAxiosCommon";
import Swal from "sweetalert2";


const TouristProfile = () => {
	
	const [tourDate, setTourDate] = useState(new Date())
	const {user} = useAuth()
	const axiosCommon = useAxiosCommon()
	const handleForm = (e) =>{
		e.preventDefault()
		const spotImage = e.target.spotImage.value;
		const tourType = e.target.tourType.value;
		const title = e.target.title.value;
		const location = e.target.location.value;
		const description = e.target.description.value;
		const formateData = tourDate.toLocaleDateString()
		const email = user?.email
		const profile = user?.photoURL
		const name = user?.displayName
		console.table({email,name,profile, spotImage,description,location,title,formateData, tourType})
		const storyInfo = {email,name,profile, spotImage,description,location,title,formateData, tourType}
		axiosCommon.post('/story',storyInfo)
		.then(res => {
			if (res.data.insertedId) {
				console.log(res.data)
				Swal.fire({
					title: "Successfully",
					text: "Your Story added",
					icon: "success"
				})
				

			}
		})
		
		
		
	}
	return (
		<div  data-aos="fade-up"
		>
			<h1 className="text-lg md:text-3xl font-bold text-center mt-20"> Add Your Story</h1>
			<div className="max-w-2xl mx-auto my-10 p-6 bg-fuchsia-300 rounded-lg shadow-md">
				<form onSubmit={handleForm}>
					<div className="form-control mb-4">
						<label className="label">
							<span className="label-text text-black font-semibold">Spot Image</span>
						</label>
						<input type="text"  name="spotImage"  className="input input-bordered w-full" />
					</div>
					<div className="form-control mb-4">
						<label className="label">
							<span className="label-text text-black font-semibold">Tour Type</span>
						</label>
						<input type="text"  name="tourType"  className="input input-bordered w-full" />
					</div>
					<div className="form-control mb-4">
						<label className="label">
							<span className="label-text text-black font-semibold">Title</span>
						</label>
						<input type="text"  name="title"  className="input input-bordered w-full" />
					</div>
					<div className="form-control mb-4">
						<label className="label">
							<span className="label-text text-black font-semibold">Location</span>
						</label>
						<input type="text"  name="location" className="input input-bordered w-full" />
					</div>
					<div className="form-control mb-4">
						<label className="label">
							<span className="label-text text-black font-semibold">Tour Start Date</span>
						</label>
						<ReactDatePicker
							selected={tourDate}
							onChange={(date) => setTourDate(date)}
							className="input input-bordered w-full"
						/>
					</div>
					<div className="form-control mb-4">
						<label className="label">
							<span className="label-text text-black font-semibold">Description</span>
						</label>
						<textarea   name="description" className="input input-bordered w-full" />
					</div>
				
					
					<button type="submit" className="btn btn-primary w-full">Add Story</button>
				</form>
			</div>
		
		</div>
	);
};

export default TouristProfile;