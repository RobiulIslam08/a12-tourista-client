
import useAuth from "../../Pages/hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosCommon from "../../Pages/hooks/useAxiosCommon";
import useRole from "../../Pages/hooks/useRole";



const TourGuideProfile = () => {
	const { user } = useAuth() || {}
	const [role] = useRole()
	const axiosCommon = useAxiosCommon()
	
	const handleForm = (e) => {
		e.preventDefault()
		const form = e.target;
		const phone = form.phone.value;
		const education = form.education.value;
		const skills = form.skills.value;
		const workExperience = form.workExperience.value;
		const name = user?.displayName;
		const email = user?.email;
		const profile = user?.photoURL
		// console.log({phone,education,skills,workExperience, name, email, profile}) 
		const tourGuideInfo = { phone, education, skills, workExperience, name, email, profile, role }
		console.log(tourGuideInfo)
		axiosCommon.post('/guideInfo', tourGuideInfo)
			.then(res => {
				console.log(res.data)
				if (res.data.insertedId) {
					Swal.fire({
						position: "top-center",
						icon: "success",
						title: `My data has been added`,
						showConfirmButton: false,
						timer: 1500
					});
					// refetch()
				}
			})
	}
	return (
		<div>
			<form onSubmit={handleForm} className="w-[70%] mx-auto">
				<h1 className="text-5xl my-10" >Added My information</h1>
				{/* <div className="mb-4">
					<label  className="block text-sm font-medium text-gray-700">Name</label>
					<input type="text" id="name" name="name" className="input input-bordered w-full mt-1"/>
				</div>

				<div className="mb-4">
					<label  className="block text-sm font-medium text-gray-700">Profile Picture</label>
					<input type="file" id="profile-picture" name="profile-picture" className="file-input file-input-bordered w-full mt-1"/>
				</div>

				<div className="mb-4">
					<label className="block text-sm font-medium text-gray-700">Email</label>
					<input type="email" id="email" name="email" className="input input-bordered w-full mt-1"/>
				</div> */}

				<div className="mb-4">
					<label className="block text-sm font-medium text-gray-700">Phone Number</label>
					<input type="number" id="phone" name="phone" className="input input-bordered w-full mt-1" />
				</div>

				<div className="mb-4">
					<label className="block text-sm font-medium text-gray-700">Education</label>
					<textarea id="education" name="education" rows="3" className="textarea textarea-bordered w-full mt-1"></textarea>
				</div>

				<div className="mb-4">
					<label className="block text-sm font-medium text-gray-700">Skills</label>
					<textarea id="skills" name="skills" rows="3" className="textarea textarea-bordered w-full mt-1"></textarea>
				</div>

				<div className="mb-4">
					<label className="block text-sm font-medium text-gray-700">Work Experience</label>
					<textarea id="work-experience" name="workExperience" rows="3" className="textarea textarea-bordered w-full mt-1"></textarea>
				</div>

				<div className="flex justify-end mt-6">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</div>
			</form>

		</div>
	);
};

export default TourGuideProfile;