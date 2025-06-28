
// // export default Navbar;
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import useAuth from "../../Pages/hooks/useAuth";
// import { toast } from "react-toastify";

// const Navbar = () => {
//   const { user, logOut } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logOut()
//       .then(() => {
//         toast("Successful logout");
//         navigate('/');
//       })
//       .catch(error => {
//         console.log('Error during logout: ', error);
//       });
//   };

//   const navLinks = (
//     <>
//       <li>
//         <NavLink
//           to="/"
//           className={({ isActive }) =>
//             isActive ? "text-[#ff52d9] font-bold" : "text-gray-500"
//           }
//         >
//           Home
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/community"
//           className={({ isActive }) =>
//             isActive ? "text-[#ff52d9] font-bold" : "text-gray-500"
//           }
//         >
//           Community
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/blogs"
//           className={({ isActive }) =>
//             isActive ? "text-[#ff52d9] font-bold" : "text-gray-500"
//           }
//         >
//           Blogs
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/about-us"
//           className={({ isActive }) =>
//             isActive ? "text-[#ff52d9] font-bold" : "text-gray-500"
//           }
//         >
//           About Us
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/contact-us"
//           className={({ isActive }) =>
//             isActive ? "text-[#ff52d9] font-bold" : "text-gray-500"
//           }
//         >
//         Contact Us
//         </NavLink>
//       </li>
//     </>
//   );

//   return (
//     <div>
//       <div className="navbar bg-base-100 px-14">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//               </svg>
//             </div>
//             <ul tabIndex={0}  className="menu z-40 menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52">
//               {navLinks}
//             </ul>
//           </div>
//           <div className="flex gap-2 items-center">
//             <img className="w-10 h-10 text-[#cc1d69cb]" src="/travelling.png" alt="logo" />
//             <p className="text-2xl font-bold">Tour<span className="text-[#ff52d9]">ista</span></p>
//           </div>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">
//             {navLinks}
//           </ul>
//         </div>
//         <div className="navbar-end z-50">
//           {user ? (
//             <div className="dropdown dropdown-end">
//               <div className="w-10 h-10" tabIndex={0}>
//                 <img className="rounded-full" src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} alt="profile" />
//               </div>
//               <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
//                 <li><Link to='/dashboard/my-profile'>Dashboard</Link></li>
//                 <li className="disabled"><a>{user.displayName}</a></li>
//                 <li className="disabled"><a>{user.email}</a></li>
//                 <li>
//                   <button className="btn btn-error btn-sm" onClick={handleLogout}>Log Out</button>
//                 </li>
//               </ul>
//             </div>
//           ) : (
//             <div>
//               <Link to='/login'><button className="btn btn-secondary btn-sm">Login</button></Link>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Pages/hooks/useAuth";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const megaMenuRef = useRef(null); // Ref for detecting clicks outside mega menu

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Successfully logged out!");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error during logout: ", error);
        toast.error("Logout failed. Please try again.");
      });
  };

  // Nav Links defined as an array for easy mapping
  const navLinks = [
    {
      key: "home",
      label: "Home",
      path: "/",
      isMegaMenu: false,
    },
    {
      key: "destinations",
      label: "Destinations",
      path: "/destinations/sylhet",
      isMegaMenu: true, // Mark this link as triggering a mega menu
      megaMenuContent: (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
          {/* Column 1: Popular Regions - ONLY THIS ONE REMAINS */}
          <div>
            <h3 className="font-bold text-lg text-gray-800 mb-3 border-b border-gray-200 pb-2">
              Popular Regions
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/destinations/sylhet" className="text-gray-700 hover:text-[#ff52d9] transition-colors block py-1">
                  Sylhet Division
                </Link>
              </li>
              <li>
                <Link to="/destinations/coxsbazar" className="text-gray-700 hover:text-[#ff52d9] transition-colors block py-1">
                  Cox's Bazar & Chittagong
                </Link>
              </li>
              <li>
                <Link to="/destinations/sundarbans" className="text-gray-700 hover:text-[#ff52d9] transition-colors block py-1">
                  The Sundarbans
                </Link>
              </li>
              <li>
                <Link to="/destinations/dhaka" className="text-gray-700 hover:text-[#ff52d9] transition-colors block py-1">
                  Dhaka & Central
                </Link>
              </li>
              <li>
                <Link to="/destinations/chittagong-hill-tracts" className="text-gray-700 hover:text-[#ff52d9] transition-colors block py-1">
                  Chittagong Hill Tracts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      key: "community",
      label: "Community",
      path: "/community",
      isMegaMenu: false,
    },
    {
      key: "blogs",
      label: "Blogs",
      path: "/blogs",
      isMegaMenu: false,
    },
    {
      key: "about-us",
      label: "About Us",
      path: "/about-us",
      isMegaMenu: false,
    },
    {
      key: "contact-us",
      label: "Contact Us",
      path: "/contact-us",
      isMegaMenu: false,
    },
  ];

  return (
    // Apply sticky to the outermost div, and ensure it has a background and z-index.
    // The inner 'navbar' div already has bg-base-100, which is good.
    <div className="sticky top-0 z-50 shadow-sm bg-base-100"> {/* Moved bg-base-100 here as well for consistency, though inner one also has it */}
      <div className="navbar px-4 md:px-8 lg:px-14">
        <div className="navbar-start">
          {/* Mobile Dropdown Menu (Hamburger Icon) */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-[99]"
            >
              {navLinks.map((link) => (
                <li key={link.key}>
                  {link.isMegaMenu ? (
                    // For mobile, "Destinations" becomes a simple dropdown/accordion
                    <details>
                      <summary className="font-bold text-gray-700 hover:text-[#ff52d9]">
                        {link.label}
                      </summary>
                      <ul className="p-2 bg-base-100 rounded-box ml-4">
                        {/* Mobile-friendly specific destination links (Popular Regions) */}
                        <li>
                          <Link to="/destinations/sylhet" className="hover:text-[#ff52d9]">Sylhet Division</Link>
                        </li>
                        <li>
                          <Link to="/destinations/coxsbazar" className="hover:text-[#ff52d9]">Cox's Bazar</Link>
                        </li>
                        <li>
                          <Link to="/destinations/sundarbans" className="hover:text-[#ff52d9]">The Sundarbans</Link>
                        </li>
                        <li>
                          <Link to="/destinations/dhaka" className="hover:text-[#ff52d9]">Dhaka & Central</Link>
                        </li>
                        <li>
                          <Link to="/destinations/hilltracts" className="hover:text-[#ff52d9]">Chittagong Hill Tracts</Link>
                        </li>
                      </ul>
                    </details>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        isActive ? "text-[#ff52d9] font-bold" : "text-gray-400 hover:text-[#ff52d9]"
                      }
                    >
                      {link.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <img className="w-10 h-10" src="/travelling.png" alt="logo" />
            <p className="text-2xl font-bold text-white">
              Tour<span className="text-[#ff52d9]">ista</span>
            </p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">
            {navLinks.map((link) => (
              <li key={link.key} className={link.isMegaMenu ? "relative group" : ""}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `py-2 px-3 block ${
                      isActive ? "text-[#ff52d9] font-bold" : "text-gray-400 hover:text-[#ff52d9] transition-colors"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
                {link.isMegaMenu && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:block hover:bg-fuchsia-50 bg-white shadow-xl lg:w-[400px] xl:w-[450px] p-8 rounded-lg z-50 animate-fadeIn transition-all duration-300 ease-in-out border border-gray-100 transform origin-top">
                    {link.megaMenuContent}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end z-50">
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full overflow-hidden border-2 border-[#ff52d9]">
                  <img
                    src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}
                    alt="User Profile"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 border border-gray-200"
              >
                <li>
                  <Link to="/dashboard/my-profile" className="justify-between text-gray-700 hover:text-[#ff52d9]">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <a className="disabled text-gray-500 cursor-default hover:bg-transparent">
                    {user.displayName || "User"}
                  </a>
                </li>
                <li>
                  <a className="disabled text-gray-500 cursor-default hover:bg-transparent">
                    {user.email}
                  </a>
                </li>
                <li className="mt-2">
                  <button className="btn btn-error btn-sm w-full text-white" onClick={handleLogout}>
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <Link to="/login">
                <button className="btn bg-[#ff52d9] hover:bg-[#e03ebf] text-white btn-sm px-4 py-2 rounded-md transition-colors">
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;