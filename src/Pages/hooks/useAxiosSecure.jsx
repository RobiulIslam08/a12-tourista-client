// import axios from 'axios'
// import { useEffect } from 'react'
// import useAuth from './useAuth'
// import { useNavigate } from 'react-router-dom'

// export const axiosSecure = axios.create({
//   baseURL: import.meta.env.VITE_API_URL,
//   withCredentials: true,
// })
// const useAxiosSecure = () => {
//   const { logOut } = useAuth()
//   const navigate = useNavigate()
//   useEffect(() => {
//     axiosSecure.interceptors.response.use(
//       res => {
//         return res
//       },
//       async error => {
//         console.log('error tracked in the interceptor', error.response)
//         if (error.response.status === 401 || error.response.status === 403) {
//           await logOut()
//           navigate('/login')
//         }
//         return Promise.reject(error)
//       }
//     )
//   }, [logOut, navigate])

//   return axiosSecure
// }

// export default useAxiosSecure
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
})
const useAxiosSecure = () => {
	const navigate = useNavigate()
	const {logOutUser} = useAuth()
	// request interceptor to add authorization header for every secure call to the api
	axiosSecure.interceptors.request.use(function (config) {
		// Do something before request is sent
		const token = localStorage.getItem('access-token')
		// console.log('request stop by interseptor', token)
		config.headers.authorization = `Bearer ${token}`
		return config;
	}, function (error) {
		// Do something with request error
		return Promise.reject(error);
	});

	// Add a response interceptor
	axiosSecure.interceptors.response.use(function (response) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return response;
	},async function (error) {
		const status = error.response.status
		console.log('status error in the interseptor', status)
		if(status == '401' || status =='403'){
			await logOutUser()
			navigate('/signin')
		}
		return Promise.reject(error);
	});
	return axiosSecure;
};

export default useAxiosSecure;