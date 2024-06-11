
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../Pages/hooks/useAxiosCommon";
import { toast } from "react-toastify";


const ManageUser = () => {
	const axiosCommon = useAxiosCommon()
	const {data = [], refetch} = useQuery({
		queryKey: ['get-user-data'],
		queryFn: async () =>{
			const {data} = await axiosCommon.get('/users')
			return data
		}
	})
	// updata user role
	
	
	const updateUserRole =async (role, updateUserEmail) =>{
		console.log('update this role',role, updateUserEmail )
		const user = {
			role: role,
			status: 'Verified',
		}
		// const {muteteAsync} = useMutation({
		// 	mutationFn: async () => {
		// 		const {data} = await axiosCommon.patch(`/users/update/${updateUserEmail}`, user)
		// 		return data
		// 	}
		// })
		try{
			const {data} = await axiosCommon.patch(`/users/update/${updateUserEmail}`, user)
			toast.success('updtae user role successfully')
			refetch()
			return data
		}
		catch(err) {
			console.log(err)
		}

		
		
	}
	return (
		<div>
			<p className="text-xl md:text-2xl lg:text-3xl font-bold text-center my-10">Manage User</p>
			
			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead>
						<tr>

							<th>Email</th>
							<th>Status</th>
							<th>Role</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						{data.map(item => <>
						<tr key={item._id}>

							<td>
								{item?.email}
							</td>
							<td>
								{item?.status}
							</td>
							<td>{item?.role}</td>
							<th>
								<button onClick={()=>updateUserRole('Tour Guide', item?.email)} className="btn btn-secondary mr-2 mb-2 btn-xs">Make Tour Guide</button>
								<button onClick={()=>updateUserRole('Admin', item?.email)} className="btn btn-secondary btn-xs">Make Admin</button>
							</th>
						</tr>
						</>)}

						

					</tbody>


				</table>
			</div>
		</div>
	);
};

export default ManageUser;



// ------------------------------------------------------------------------------

// import { useState } from 'react';
// import { useQuery } from "@tanstack/react-query";
// import useAxiosCommon from "../../Pages/hooks/useAxiosCommon";

// const ManageUser = () => {
//     const axiosCommon = useAxiosCommon();
//     const { data = [] } = useQuery({
//         queryKey: ['get-user-data'],
//         queryFn: async () => {
//             const { data } = await axiosCommon.get('/users');
//             return data;
//         }
//     });

//     // State to track disabled buttons
//     const [disabledButtons, setDisabledButtons] = useState({});

//     // Update user role
//     const updateUserRole = (id, role) => {
//         console.log('update this role', role);
//         // Disable both buttons for the clicked user
//         setDisabledButtons(prevState => ({ ...prevState, [id]: true }));
//     };

//     return (
//         <div>
//             <p className="text-xl md:text-2xl lg:text-3xl font-bold text-center my-10">Manage User</p>

//             <div className="overflow-x-auto">
//                 <table className="table">
//                     {/* head */}
//                     <thead>
//                         <tr>
//                             <th>Email</th>
//                             <th>Status</th>
//                             <th>Role</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {/* row 1 */}
//                         {data.map(item => (
//                             <tr key={item._id}>
//                                 <td>{item?.email}</td>
//                                 <td>{item?.status}</td>
//                                 <td>{item?.role}</td>
//                                 <th>
//                                     <button 
//                                         onClick={() => updateUserRole(item._id, 'Tour Guide')} 
//                                         className="btn btn-secondary mr-2 mb-2 btn-xs"
//                                         disabled={disabledButtons[item._id]}
//                                     >
//                                         Make Tour Guide
//                                     </button>
//                                     <button 
//                                         onClick={() => updateUserRole(item._id, 'Admin')} 
//                                         className="btn btn-secondary btn-xs"
//                                         disabled={disabledButtons[item._id]}
//                                     >
//                                         Make Admin
//                                     </button>
//                                 </th>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default ManageUser;
