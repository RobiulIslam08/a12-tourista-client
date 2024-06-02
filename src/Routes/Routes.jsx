import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import DashboardLayout from "../Layout/DashboardLayout";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
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
				}
			
		]
	}
]);