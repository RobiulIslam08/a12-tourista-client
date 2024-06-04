
import axios from 'axios';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import {useQuery} from '@tanstack/react-query'
import useAxiosCommon from './useAxiosCommon';

const useRole = () => {
	const {user,loading} = useAuth()
	
	const axiosSecure = useAxiosSecure()
	const axiosCommon = useAxiosCommon()
	const {data: role='', isLoading} = useQuery({
		queryKey: ['user-role',user?.email],
		enabled: !loading && !!user?.email,
		queryFn : async () =>{
			const {data} = await axiosCommon.get(`http://localhost:5000/user/${user.email}`)
			return data.role
		}
	})
	return [role, isLoading]
};

export default useRole;



// ------------------------------------------------------------------------------------------------



// import { useQuery } from '@tanstack/react-query';
// import useAuth from './useAuth';
// import useAxiosSecure from './useAxiosSecure';

// const useRole = () => {
//   const { user, loading } = useAuth();
//   const axiosSecure = useAxiosSecure();

//   const { data: role = '', isLoading } = useQuery({
//     queryKey: ['user-role', user?.email],
//     enabled: !loading && !!user?.email,
//     queryFn: async () => {
//       if (user?.email) {
//         const response = await fetch(`http://localhost:5000/user/${user.email}`, {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });
        
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         return data.role;
//       }
//       return '';
//     },
//   });

//   return [role, isLoading];
// };

// export default useRole;
