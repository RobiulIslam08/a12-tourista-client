import { FaUser } from "react-icons/fa";
import MenuItem from "./MenuItem";
import { MdChecklistRtl } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
const TouristMenu = () => {
	return (
		<div>
			<MenuItem icon={FaUser} label='My Profile' address='/dashboard/my-profile'></MenuItem>
			<MenuItem icon={FaCartPlus} label='My Booking' address='my-booking'></MenuItem>
			<MenuItem icon={MdChecklistRtl} label='My Wishlist' address='my-wishlist'></MenuItem>
			<MenuItem icon={VscGitPullRequestGoToChanges} label='Request to Admin' address='Request-admin'></MenuItem>
		</div>
	);
};

export default TouristMenu;