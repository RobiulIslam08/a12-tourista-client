// import { Outlet } from "react-router-dom";
// import Sidebar from "../Dashboard/Sidebar";
// import { ToastContainer } from "react-toastify";
// import useAuth from "../Pages/hooks/useAuth";



// const DashboardLayout = () => {
// 	const {loading} = useAuth()
// 	if(loading) {
// 		return <>
// 		<div className="flex justify-center items-center h-screen">
// 		<span className="loading text-fuchsia-800  loading-bars loading-lg"></span>
// 		</div>
// 		</>
// 	}
// 	return (
// 		<div className="relative md:flex justify-evenly min-h-screen">
// 			{/* sidebar */}
// 			<div className="w-64 min-h-screen bg-pink-400">
// 				<Sidebar></Sidebar>
// 			</div>

// 			{/* dynamic content for outlet */}
// 			<div className="flex-1">
// 				<div className="p-5"> 
// 				<ToastContainer></ToastContainer>
// 				<Outlet></Outlet>
// 				</div>
			
// 			</div>
// 		</div>
// 	);
// };

// export default DashboardLayout;
import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Toastify CSS ইম্পোর্ট করুন

import useAuth from "../Pages/hooks/useAuth";
import Sidebar from "../Dashboard/Sidebar";

const DashboardLayout = () => {
    const { loading } = useAuth(); // Auth লোডিং স্টেট

    // লোডিং অবস্থায় একটি সেন্ট্রালাইজড স্পিনার
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen w-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
                <span className="loading loading-spinner loading-lg text-emerald-500"></span>
            </div>
        );
    }

    return (
        <div className="md:flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            {/* Sidebar */}
            {/* Sidebar কম্পোনেন্ট নিজেই তার পজিশনিং এবং রেসপন্সিভনেস হ্যান্ডেল করবে।
                তাই এখানে w-64, min-h-screen, bg-pink-400 এর মতো ক্লাসগুলো সরিয়ে দিচ্ছি।
                Sidebar এর ভিতরের ক্লাসগুলোই যথেষ্ট।
            */}
            <Sidebar />

            {/* Main Content Area */}
            {/* md:ml-64 ক্লাসটি ডেস্কটপে মূল কন্টেন্টকে সাইডবারের ডানদিকে ঠেলে দেবে।
                মোবাইলে এটি কাজ করবে না, কারণ সাইডবার তখন transform দিয়ে স্লাইড করে আসবে।
            */}
            <div className="flex-1 md:ml-64 p-4 md:p-8 lg:p-10">
                <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;