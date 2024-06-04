import { GrLogout } from "react-icons/gr";
import AdminMenu from "./Menu/AdminMenu";
import TourGuideMenu from "./Menu/TourGuideMenu";
import { HiOutlineLogin } from "react-icons/hi";
import TouristMenu from "./Menu/TouristMenu";
import useAuth from "../Pages/hooks/useAuth";
import { useState } from "react";
import { Link } from "react-router-dom";



const Sidebar = () => {
	const { logOut } = useAuth()
	const [isActive, setActive] = useState(false)

	const handleToggle = () => {
		setActive(!isActive)
	}
	return (
		<div className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden  w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
			}  md:translate-x-0  transition duration-200 ease-in-out`}>
			<div>
				{/* <AdminMenu></AdminMenu> */}
				{/* <TourGuideMenu></TourGuideMenu> */}
				<TouristMenu></TouristMenu>
			</div>
			<div>
			<Link to='/'><button
					
					className='flex w-full items-center px-4 py-2 mt-5 text-gray-900 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
				>
					<HiOutlineLogin className='w-5 h-5' />

					<span className='mx-4 font-medium'>Home</span>
				</button></Link>
				
				<button
					onClick={logOut}
					className='flex w-full items-center px-4 py-2 mt-5 text-gray-900 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
				>
					<GrLogout className='w-5 h-5' />

					<span className='mx-4 font-medium'>Logout</span>
				</button>

			</div>
		</div>
	);
};

export default Sidebar;