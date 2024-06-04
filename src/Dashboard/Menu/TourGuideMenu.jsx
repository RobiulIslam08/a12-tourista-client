import { FaUser } from "react-icons/fa";
import MenuItem from "./MenuItem";

import { CiBacon } from "react-icons/ci";
const TourGuideMenu = () => {
	return (
		<div>
			<MenuItem icon={FaUser} label='My Profile' address='my-profile'></MenuItem>
			<MenuItem icon={CiBacon} label='My Assigned Tours' address='my-assigned-tour' />
		</div>
	);
};

export default TourGuideMenu;