import { Outlet } from "react-router-dom";
import Sidebar from "../Dashboard/Sidebar";
import { ToastContainer } from "react-toastify";



const DashboardLayout = () => {
	return (
		<div className="relative md:flex justify-evenly min-h-screen">
			{/* sidebar */}
			<div className="w-64 min-h-screen bg-pink-400">
				<Sidebar></Sidebar>
			</div>

			{/* dynamic content for outlet */}
			<div className="flex-1">
				<div className="p-5"> 
				<ToastContainer></ToastContainer>
				<Outlet></Outlet>
				</div>
			
			</div>
		</div>
	);
};

export default DashboardLayout;