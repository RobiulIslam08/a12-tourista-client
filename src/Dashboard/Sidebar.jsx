// import { GrLogout } from "react-icons/gr";
// import AdminMenu from "./Menu/AdminMenu";
// import TourGuideMenu from "./Menu/TourGuideMenu";
// import { HiOutlineLogin } from "react-icons/hi";
// import TouristMenu from "./Menu/TouristMenu";
// import useAuth from "../Pages/hooks/useAuth";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import useRole from "../Pages/hooks/useRole";



// const Sidebar = () => {
// 	const [role] = useRole()
// 	const { logOut } = useAuth()
// 	const [isActive, setActive] = useState(false)
// 	const navigate = useNavigate()
// 	const handleToggle = () => {
// 		setActive(!isActive)
// 	}
// 	const handleLogout = () => {
// 		logOut()
// 			.then(() => {
// 				toast("Successful logout");
// 				navigate('/');
// 			})
// 			.catch(error => {
// 				console.log('Error during logout: ', error);
// 			});
// 	};
// 	return (
// 		<div className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden  w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
// 			}  md:translate-x-0  transition duration-200 ease-in-out`}>
// 			<div>
// 				{/* <AdminMenu></AdminMenu> */}
// 				{/* <TourGuideMenu></TourGuideMenu> */}
			
// 				{role === 'Admin' && <AdminMenu></AdminMenu>}
// 			{role === 'Tourist' && <TouristMenu></TouristMenu>}
// 			{role === 'Tour Guide' && <TourGuideMenu></TourGuideMenu>}
// 			</div>
// 			<div>
// 				<Link to='/'><button

// 					className='flex w-full items-center px-4 py-2 mt-5 text-gray-900 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
// 				>
// 					<HiOutlineLogin className='w-5 h-5' />

// 					<span className='mx-4 font-medium'>Home</span>
// 				</button></Link>

// 				<button
// 					onClick={handleLogout}
// 					className='flex w-full items-center px-4 py-2 mt-5 text-gray-900 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
// 				>
// 					<GrLogout className='w-5 h-5' />

// 					<span className='mx-4 font-medium'>Logout</span>
// 				</button>

// 			</div>
// 		</div>
// 	);
// };

// export default Sidebar;


import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { GrLogout } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5"; // For a more appropriate home icon
import { AiOutlineClose } from "react-icons/ai"; // For the close button on mobile
import { FiMenu } from "react-icons/fi"; // For the hamburger menu icon

// আপনার কাস্টম হুকস এবং মেনু কম্পোনেন্টগুলো
import useAuth from "../Pages/hooks/useAuth";
import useRole from "../Pages/hooks/useRole";
import AdminMenu from "./Menu/AdminMenu";
import TourGuideMenu from "./Menu/TourGuideMenu";
import TouristMenu from "./Menu/TouristMenu";

const Sidebar = () => {
    const [role, loadingRole] = useRole(); // useRole থেকে loading state টি নিচ্ছি
    const { logOut, loading: loadingAuth } = useAuth(); // useAuth থেকে loading state টি নিচ্ছি

    const [isOpen, setIsOpen] = useState(false); // সাইডবার খোলা/বন্ধ করার জন্য স্টেট
    const navigate = useNavigate();
    const location = useLocation(); // বর্তমান লোকেশন পেতে useLocation ব্যবহার করুন

    // মোবাইল ডিভাইসে সাইডবার টগল করার ফাংশন
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    // লগআউট হ্যান্ডেলার
    const handleLogout = async () => {
        try {
            await logOut();
            toast.success("Successfully logged out!");
            navigate('/login'); // লগআউটের পর লগইন পেজে রিডাইরেক্ট করা ভালো প্র্যাকটিস
        } catch (error) {
            console.error('Error during logout:', error);
            toast.error("Logout failed. Please try again.");
        }
    };

    // মেনু আইটেমগুলির জন্য বেস এবং অ্যাক্টিভ ক্লাস
    const baseLinkClasses = 'flex items-center px-4 py-3 text-lg font-medium rounded-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 group';
    const defaultLinkColors = 'text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-gray-700 hover:text-emerald-600 dark:hover:text-teal-400';
    const activeLinkColors = 'bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-teal-400 font-semibold shadow-sm'; // অ্যাক্টিভ হলে আরও বোল্ড ও শ্যাডো

    // যদি অথেন্টিকেশন বা রোল লোড হতে দেরি হয়, একটি লোডিং স্পিনার দেখান
    if (loadingRole || loadingAuth) {
        return (
            <div className="flex items-center justify-center h-screen w-full bg-gray-100 dark:bg-gray-900">
                <span className="loading loading-spinner loading-lg text-emerald-500"></span>
            </div>
        );
    }

    return (
        <>
            {/* Overlay for mobile when sidebar is open */}
            <div
                onClick={handleToggle}
                className={`${isOpen ? 'block' : 'hidden'} md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out`}
            ></div>

            {/* Hamburger icon for mobile (always visible on small screens) */}
            <div className="md:hidden fixed top-4 left-4 z-50">
                <button
                    onClick={handleToggle}
                    className="p-3 text-gray-700 bg-white dark:bg-gray-800 dark:text-gray-200 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300 transform hover:scale-105"
                    aria-label="Toggle sidebar"
                >
                    <FiMenu className="w-6 h-6" />
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`fixed z-50 flex flex-col justify-between overflow-y-auto bg-white dark:bg-gray-800 w-64 space-y-6 px-4 py-6 shadow-2xl transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out border-r border-gray-200 dark:border-gray-700 h-full md:h-screen`}
            >
                {/* Close button for mobile (inside sidebar) */}
                <div className="absolute top-4 right-4 md:hidden">
                    <button
                        onClick={handleToggle}
                        className="p-2 text-gray-700 dark:text-gray-200 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors duration-300"
                        aria-label="Close sidebar"
                    >
                        <AiOutlineClose className="w-7 h-7" />
                    </button>
                </div>

                <div>
                    {/* Brand Logo/Name */}
                    <div className="flex items-center px-4 py-2 mb-10 border-b border-gray-200  dark:border-gray-700">
                        <Link to="/" className="flex items-center space-x-3 text-3xl font-extrabold  text-emerald-600 dark:text-teal-400">
                            {/* আপনার লোগো বা আইকন এখানে দিন */}
                            <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13.435m0-13.435C10.825 6.726 10.375 7 10 7c-.642 0-1.125-.375-1.5-.75L6 7m6 0a2 2 0 110 4 2 2 0 010-4zm0 0l-6-6-6 6c-.375.375-.825.625-1.5.75L6 7c-.375-.125-.825-.375-1.5-.75L0 7m6 0a2 2 0 110 4 2 2 0 010-4zm0 0l-6-6-6 6c-.375.375-.825.625-1.5.75L6 7z"></path></svg>
                            <span>Tourista</span> {/* নতুন ড্যাশবোর্ড নেম */}
                        </Link>
                    </div>

                    {/* Dynamic Menu based on Role */}
                    <nav className="space-y-3 "> {/* স্পেস বাড়ানো হয়েছে */}
                        {/* গুরুত্বপূর্ণ: আপনার AdminMenu, TouristMenu, TourGuideMenu কম্পোনেন্টগুলোর ভেতরে 
                            মেনু আইটেমগুলো `NavLink` ব্যবহার করে ডিজাইন করা উচিত। 
                            যদি `Link` ব্যবহার করেন, তবে প্রতিটি লিংকের জন্য `isActive` চেক করে ক্লাস হ্যান্ডেল করতে হবে।
                            NavLink ব্যবহার করলে এটি স্বয়ংক্রিয়ভাবে activeClassName বা className={({ isActive }) => ...} হ্যান্ডেল করবে।
                        */}
                        {role === 'Admin' && <AdminMenu />}
                        {role === 'Tourist' && <TouristMenu />}
                        {role === 'Tour Guide' && <TourGuideMenu />}
                    </nav>
                </div>

                {/* Bottom Navigation (Home, Logout) */}
                <div className="pb-4">
                    {/* Home Link */}
                    <Link
                        to='/'
                        // বর্তমান রুট '/' হলে activeLinkColors ক্লাসগুলো যোগ হবে
                        className={`${baseLinkClasses} ${defaultLinkColors} ${location.pathname === '/' ? activeLinkColors : ''}`}
                        onClick={handleToggle} // মোবাইল সাইডবার বন্ধ করতে
                    >
                        <IoHomeOutline className='w-6 h-6 mr-4 transition-transform duration-300 group-hover:scale-110' />
                        <span>Home</span>
                    </Link>

                    {/* Logout Button */}
                    <button
                        onClick={handleLogout}
                        className={`w-full ${baseLinkClasses} text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-gray-700 hover:text-red-700 dark:hover:text-red-500 mt-3`}
                    >
                        <GrLogout className='w-6 h-6 mr-4 transition-transform duration-300 group-hover:scale-110' />
                        <span>Logout</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Sidebar;