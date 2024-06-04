// import { Link, NavLink, useNavigate } from "react-router-dom";
// import useAuth from "../../Pages/hooks/useAuth";
// import { toast } from "react-toastify";

// const Navbar = () => {
// 	const {user, logout} = useAuth()
// 	console.log('user ache to ', user)
// 	const navigate = useNavigate()
// 	const handleLogout = () => {
// 		logout()
// 			.then(() => {
// 				toast("Successful logout");
// 				navigate('/')
				
// 			})
// 			.catch(error => {
// 				console.log('error khaiso logout ', error)
// 			})
// 	}
// 	const navLinks = <>
// 		<li>
// 			<NavLink
// 				to="/"
// 				className={({ isActive }) =>
// 					isActive ? "text-[#ff52d9] font-bold" : "text-gray-500"
// 				}
// 			>
// 				Home
// 			</NavLink>
// 		</li>
// 		<li>
// 			<NavLink
// 				to="/community"
// 				className={({ isActive }) =>
// 					isActive ? "text-[#ff52d9] font-bold" : "text-gray-500"
// 				}
// 			>
// 				Community
// 			</NavLink>
// 		</li>
// 		<li>
// 			<NavLink
// 				to="/blogs"
// 				className={({ isActive }) =>
// 					isActive ? "text-[#ff52d9] font-bold" : ""
// 				}
// 			>
// 				Blogs
// 			</NavLink>
// 		</li>
// 		<li>
// 			<NavLink
// 				to="/about-us"
// 				className={({ isActive }) =>
// 					isActive ? "text-[#ff52d9] font-bold" : "text-gray-500"
// 				}
// 			>
// 				About Us
// 			</NavLink>
// 		</li>
// 	</>;
// 	return (
// 		<div>
// 			<div className="navbar bg-base-100  px-14">
// 				<div className="navbar-start">
// 					<div className="dropdown">
// 						<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
// 							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
// 						</div>
// 						<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
// 							{navLinks}
// 						</ul>
// 					</div>
// 					<div className="flex gap-2 items-center">
// 						<img className="w-10 h-10 text-[#cc1d69cb]" src="../../../public/travelling.png" alt="" />
// 						<p className=" text-2xl font-bold">Tour<span className="text-[#ff52d9]">ista</span></p>
// 					</div>
// 				</div>
// 				<div className="navbar-center hidden lg:flex">
// 					<ul className="menu menu-horizontal px-1">
// 						{navLinks}
// 					</ul>
// 				</div>
// 				<div className="navbar-end z-50"> 
				
// 					{
// 						user? <> <div className="dropdown dropdown-end">
// 						{/* after login */}
// 						<div>
// 							<div  className="w-10 h-10 z-40" tabIndex={0}><img className="rounded-full"  src={user.photoURL ? user.photoURL : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} alt="" /></div>
// 							<ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box ">
// 								<li><Link to='/dashboard/register'>Dashboard</Link></li>
// 								<li className="disabled"><a>{user?.displayName}</a></li>
// 								<li className="disabled"><a>{user?.email}</a></li>
// 								<button className="btn btn-error btn-sm" onClick={handleLogout}>Log Out</button>

// 							</ul>
// 						</div>
// 					</div></>
// 					: 	<div>
// 					<Link to='/login'><button className="btn btn-secondary btn-sm">Login</button></Link>
// 				</div>
// 					}
				
				
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Navbar;
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Pages/hooks/useAuth";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
      .then(() => {
        toast("Successful logout");
        navigate('/');
      })
      .catch(error => {
        console.log('Error during logout: ', error);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#ff52d9] font-bold" : "text-gray-500"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/community"
          className={({ isActive }) =>
            isActive ? "text-[#ff52d9] font-bold" : "text-gray-500"
          }
        >
          Community
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive ? "text-[#ff52d9] font-bold" : "text-gray-500"
          }
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            isActive ? "text-[#ff52d9] font-bold" : "text-gray-500"
          }
        >
          About Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 px-14">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <img className="w-10 h-10 text-[#cc1d69cb]" src="/travelling.png" alt="logo" />
            <p className="text-2xl font-bold">Tour<span className="text-[#ff52d9]">ista</span></p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end z-50">
          {user ? (
            <div className="dropdown dropdown-end">
              <div className="w-10 h-10" tabIndex={0}>
                <img className="rounded-full" src={user.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} alt="profile" />
              </div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
                <li><Link to='/dashboard/my-profile'>Dashboard</Link></li>
                <li className="disabled"><a>{user.displayName}</a></li>
                <li className="disabled"><a>{user.email}</a></li>
                <li>
                  <button className="btn btn-error btn-sm" onClick={handleLogout}>Log Out</button>
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <Link to='/login'><button className="btn btn-secondary btn-sm">Login</button></Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
