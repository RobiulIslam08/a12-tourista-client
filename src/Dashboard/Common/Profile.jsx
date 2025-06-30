import { Helmet } from "react-helmet";
import useAuth from "../../Pages/hooks/useAuth";
import useRole from "../../Pages/hooks/useRole";
import AdminProfile from "../Profile/AdminProfile";
import TourGuideProfile from "../Profile/TourGuideProfile";
import TouristProfile from "../Profile/TouristProfile";



const Profile = () => {
	const [role] = useRole()
	const { user } = useAuth() || {}

	return (
		<div data-aos="fade-up"
			data-aos-offset="200"
			data-aos-delay="50"
			data-aos-duration="1000"
			data-aos-easing="ease-in-out"
			data-aos-mirror="true"
			data-aos-once="false"
			data-aos-anchor-placement="top-center">
			{/* profile design  */}
			<Helmet>
				<title>Profile Page</title>
			</Helmet>
			<div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
				<div className="bg-pink-500 h-32 flex items-center justify-center">
					<div className="relative">
						<img
							className="w-24 h-24 rounded-full border-4 border-white -mt-12"
							src={user?.photoURL}
							alt="Profile"
						/>
						<span className="absolute bottom-0 right-0 bg-pink-600 text-white text-xs px-2 py-1 rounded-full">
							{role}
						</span>
					</div>
				</div>
				<div className="p-6">
					<h2 className="text-center text-xl font-semibold">{user?.displayName}</h2>
					<p className="text-center text-gray-600">{user?.email}</p>
					<div className="mt-4">
						<p className="text-center text-gray-800 font-bold">User Id: dN7hEP0kSAQIZtKnFibUke3uQa12</p>
					</div>
				
				</div>
			</div>

			{/* inpute data */}
			{role === 'Admin' && <AdminProfile></AdminProfile>}
			{role === 'Tourist' && <TouristProfile></TouristProfile>}
			{role === 'Tour Guide' && <TourGuideProfile></TourGuideProfile>}

		</div>
	);
};

export default Profile;
