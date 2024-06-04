import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { ToastContainer } from "react-toastify";


const MainLayout = () => {
	return (
		<div>
			<Navbar></Navbar>
			<ToastContainer></ToastContainer>
			<div className='max-w-screen-xl mx-auto'>
				<Outlet></Outlet>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default MainLayout;