import { FaUser, FaUserCog } from "react-icons/fa";
import MenuItem from "./MenuItem";
import { BsFillHouseAddFill } from "react-icons/bs";


const AdminMenu = () => {
	
	return (
		<div>
			<MenuItem icon={FaUser} label='My Profile' address='my-profile'></MenuItem>
			<MenuItem icon={BsFillHouseAddFill} label='Add Package' address='add-package' />
			<MenuItem icon={FaUserCog} label='Manage Users' address='manage-users'></MenuItem>
		</div>
	); 
};

export default AdminMenu;