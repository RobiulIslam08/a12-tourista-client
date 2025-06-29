import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import DashboardLayout from "../Layout/DashboardLayout";
import Profile from "../Dashboard/Common/Profile";
import GuideDetails from "../Pages/GuideDetails/GuideDetails";
import AddPackage from "../Dashboard/AddPackage/AddPackage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PackageDetails from "./PackageDetails/PackageDetails";
import ManageUser from "../Dashboard/ManageUser/ManageUser";
import MyBookings from "../Dashboard/MyBookings/MyBookings";
import AssignTour from "../Dashboard/Assign-Tour/AssignTour";
import MyWishlist from "../Dashboard/MyWishlist/MyWishlist";
import TourTypePage from "../Component/HomeComponent/TourTypePage/TourTypePage";
import Community from "../Pages/Community/Community";
import Blogs from "../Pages/Blogs/Blogs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AboutUs from "../Pages/AboutUs/AboutUs";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Payment from "../Dashboard/Payment/Payment";
import StoryDetailsPage from "../Dashboard/StoryDetailsPage/StoryDetailsPage";
import AllStoriesPage from "../Pages/AllStoriesPage/AllStoriesPage";
import AllPackage from "../Pages/AllPackage/AllPackage";
import SylhetPage from "../Pages/Destination/SylhetPage";
import CoxsBazarPage from "../Pages/Destination/CoxsBazarPage";
import ChittagongHillTractsPage from "../Pages/Destination/ChittagongHillTractsPage";
import DhakaCentralPage from "../Pages/Destination/DhakaCentralPage";
import SundarbansPage from "../Pages/Destination/SundarbansPage";
import AllPackagesPage from "../Pages/AllPackage/AllPackagePage";
// import AssignTour from "../Dashboard/AssignTour/AssignTour";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: '/',
				element: <Home></Home>
			},
			{
				path: "/destinations/sylhet", // New route
				element: <SylhetPage />,
			},
			{
				path: "/destinations/coxsbazar", // New route
				element: <CoxsBazarPage />,
			},
			{
				path: "/destinations/chittagong-hill-tracts", // New route
				element: <ChittagongHillTractsPage />,
			},
			{
				path: "/destinations/dhaka", // New route
				element: <DhakaCentralPage />,
			},
			{
				path: "/destinations/sundarbans", // New route
				element: <SundarbansPage />,
			},
			{
				path: 'login',
				element: <LoginPage></LoginPage>
			},
			{
				path: 'register',
				element: <RegisterPage></RegisterPage>
			},
			{
				path: 'guide-details/:id',
				element: <GuideDetails></GuideDetails>
			},
			{
				path: 'package-detaisl/:id',
				element: <PackageDetails></PackageDetails>
			},
			{
				path: 'TourTypePage/:typeName',
				element: <TourTypePage></TourTypePage>
			},
			{
				path: 'community',
				element: <Community></Community>
			},
			{
				path: 'all-package',
				element: <AllPackagesPage></AllPackagesPage>
			},
			{
				path: 'blogs',
				element: <Blogs></Blogs>,
			},

			{
				path: 'contact-us',
				element: <ContactUs></ContactUs>,
			},
			{
				path: 'about-us',
				element: <AboutUs></AboutUs>,

			},
			{
				path: 'story-details-page/:id',
				element: <StoryDetailsPage></StoryDetailsPage>
			},
			{
				path: 'all-story',
				element: <AllStoriesPage></AllStoriesPage>
			},
			{
				path: 'all-package',
				element: <AllPackage></AllPackage>
			}

		]
	},
	{
		path: 'dashboard',
		element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
		children: [

			{
				path: 'register',
				element: <RegisterPage></RegisterPage>
			},
			{
				path: 'payment/:price',
				element: <Payment></Payment>
			},
			{
				path: 'my-profile',
				element: <Profile></Profile>
			},
			{
				path: 'add-package',
				element: <AddPackage></AddPackage>
			},
			{
				path: 'manage-users',
				element: <ManageUser></ManageUser>
			},
			{
				path: 'my-bookings',
				element: <MyBookings></MyBookings>
			},
			{
				path: 'my-assigned-tour',
				element: <AssignTour></AssignTour>
			},
			{
				path: 'my-wishlist',
				element: <MyWishlist></MyWishlist>
			}

		]
	}
]);