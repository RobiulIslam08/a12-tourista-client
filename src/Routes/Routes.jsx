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

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		errorElement:<ErrorPage></ErrorPage>,
		children:[
			{
				path: '/',
				element: <Home></Home>
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
			}
		]
	},
	{
		path: 'dashboard',
		element: <DashboardLayout></DashboardLayout>,
		children: [
			
				{
					path: 'register',
					element: <RegisterPage></RegisterPage>
				},
				{
					path: 'my-profile',
					element: <Profile></Profile>
				},
				{
					path: 'add-package',
					element: <AddPackage></AddPackage>
				}
			
		]
	}
]);