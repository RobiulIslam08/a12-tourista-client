import { FaUser } from "react-icons/fa";
import MenuItem from "./MenuItem";
import { MdChecklistRtl } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
// import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import Swal from "sweetalert2";
import useAuth from "../../Pages/hooks/useAuth";
import useAxiosCommon from "../../Pages/hooks/useAxiosCommon";
import { toast } from "react-toastify";
const TouristMenu = () => {
	const {user} = useAuth()
	const axiosCommon = useAxiosCommon()
	const handleRequesttoAdmin = () => {
		Swal.fire({
			title: "Become a Tour Guide?",
			text: "if you become a tour guide , please click yes button",
			icon: "question",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, I want"
		}).then( async(result) => {
			if (result.isConfirmed) {
				
				try{
					const currentUser = {
						email: user?.email,
						role: 'Tourist',
						status: 'Requested'

					}
					const {data} = await axiosCommon.put('user', currentUser)
					console.log('change status ', data)
					if(data.modifiedCount > 0 ) {
						Swal.fire({
							title: "Successful!",
							text: "Your request has been successful.",
							icon: "success"
						});
					}else{
						toast.success('please wait for admin aproval')
					}
					

				}
				catch(err){
					console.log(err)
				}
			}
		});
	}
	
	return (
		<div>
			<MenuItem icon={FaUser} label='My Profile' address='/dashboard/my-profile'></MenuItem>
			<MenuItem icon={FaCartPlus} label='My Booking' address='my-bookings'></MenuItem> 
			<MenuItem icon={MdChecklistRtl} label='My Wishlist' address='my-wishlist'></MenuItem>
			{/* <MenuItem icon={VscGitPullRequestGoToChanges} label='Request to Admin' address='Request-admin'></MenuItem> */}
			<button className="btn btn-secondary btn-sm" onClick={handleRequesttoAdmin}>Request To Admin</button>
		</div>
	);
};

export default TouristMenu;