import { Outlet } from "react-router-dom";
import Sidebar from "../Dashboard/Sidebar";



const DashboardLayout = () => {
	return (
		<div className="relative md:flex  min-h-screen">
			{/* sidebar */}
			<div className="w-64 min-h-screen bg-[#e69a28a4]">
				<Sidebar></Sidebar>
			</div>

			{/* dynamic content for outlet */}
			<div className="flex-1 md:ml-64">
				<div className="p-5"> 
				<Outlet></Outlet>
				</div>
			
			</div>
		</div>
	);
};

export default DashboardLayout;