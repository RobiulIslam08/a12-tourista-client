
// import { useQuery } from "@tanstack/react-query";
// import useAxiosCommon from "../../Pages/hooks/useAxiosCommon";
// import { toast } from "react-toastify";
// import Select from 'react-select'
// import { useState } from "react";


// const ManageUser = () => {
// 	const axiosCommon = useAxiosCommon()
// 	const [search, setSearch] = useState('')
// 	const [filterRole, setFilterRole] = useState("")

// 	const { data = [], refetch } = useQuery({
// 		queryKey: ['get-user-data', search],
// 		queryFn: async () => {
// 			const { data } = await axiosCommon.get(`/users?search=${search}`)
// 			return data
// 		}
// 	})
// 	// updata user role


// 	const updateUserRole = async (role, updateUserEmail) => {
// 		console.log('update this role', role, updateUserEmail)
// 		const user = {
// 			role: role,
// 			status: 'Verified',
// 		}
// 		// const {muteteAsync} = useMutation({
// 		// 	mutationFn: async () => {
// 		// 		const {data} = await axiosCommon.patch(`/users/update/${updateUserEmail}`, user)
// 		// 		return data
// 		// 	}
// 		// })
// 		try {
// 			const { data } = await axiosCommon.patch(`/users/update/${updateUserEmail}`, user)
// 			toast.success('updtae user role successfully')
// 			refetch()
// 			return data
// 		}
// 		catch (err) {
// 			console.log(err)
// 		}
// 	}
// 	const options = [
//         { value: '', label: 'All Roles' },
//         { value: 'Admin', label: 'Admin' },
//         { value: 'Tour Guide', label: 'Tour Guide' },
//         // Add other roles here if needed
//     ];

// 	// search implente 
// 	const handleSearch = (e) =>{
// 		e.preventDefault()
// 		const searchText = e.target.search.value;
// 		setSearch(searchText)
// 		console.log(searchText)
// 		refetch()
// 	}
// 	// fiter by role 
// 	// const handleFilterRole = (e) =>{
// 	// 	e.preventDefault()
// 	// 	const filterRoleText = e.target.select.value;
// 	// 	console.log(filterRoleText)
// 	// }
// 	console.log(options.value)
// 	return (
// 		<div>
// 			<p className="text-xl md:text-2xl lg:text-3xl font-bold text-center my-16">Manage User</p>
// 			<div className="mb-10  gap-8   ">
// 				<div className="mb-4 flex justify-center">
// 					<form onSubmit={handleSearch}>
// 						<div className="join">
// 							<input name="search" className="input input-bordered join-item" placeholder="Email" />
// 							<button type="submit" className="btn join-item rounded-r-full">Search</button>
// 						</div>
// 					</form>
// 				</div>
// 				<div className="flex  justify-center gap-5 items-center">
// 				<Select options={options} />
// 				<button className="btn  ">Search</button>
// 				</div>
// 			</div>

// 			<div className="overflow-x-auto">
// 				<table className="table">
// 					{/* head */}
// 					<thead>
// 						<tr>

// 							<th>Email</th>
// 							<th>Status</th>
// 							<th>Role</th>
// 							<th>Action</th>
// 						</tr>
// 					</thead>
// 					<tbody>
// 						{/* row 1 */}
// 						{data.map(item => <>
// 							<tr key={item._id}>

// 								<td>
// 									{item?.email}
// 								</td>
// 								<td>
// 									{item?.status}
// 								</td>
// 								<td>{item?.role}</td>
// 								<th>
// 									<button onClick={() => updateUserRole('Tour Guide', item?.email)} className="btn btn-secondary mr-2 mb-2 btn-xs">Make Tour Guide</button>
// 									<button onClick={() => updateUserRole('Admin', item?.email)} className="btn btn-secondary btn-xs">Make Admin</button>
// 								</th>
// 							</tr>
// 						</>)}



// 					</tbody>


// 				</table>
// 			</div>
// 		</div>
// 	);
// };

// export default ManageUser;



// // ------------------------------------------------------------------------------

// // import { useState } from 'react';
// // import { useQuery } from "@tanstack/react-query";
// // import useAxiosCommon from "../../Pages/hooks/useAxiosCommon";

// // const ManageUser = () => {
// //     const axiosCommon = useAxiosCommon();
// //     const { data = [] } = useQuery({
// //         queryKey: ['get-user-data'],
// //         queryFn: async () => {
// //             const { data } = await axiosCommon.get('/users');
// //             return data;
// //         }
// //     });

// //     // State to track disabled buttons
// //     const [disabledButtons, setDisabledButtons] = useState({});

// //     // Update user role
// //     const updateUserRole = (id, role) => {
// //         console.log('update this role', role);
// //         // Disable both buttons for the clicked user
// //         setDisabledButtons(prevState => ({ ...prevState, [id]: true }));
// //     };

// //     return (
// //         <div>
// //             <p className="text-xl md:text-2xl lg:text-3xl font-bold text-center my-10">Manage User</p>

// //             <div className="overflow-x-auto">
// //                 <table className="table">
// //                     {/* head */}
// //                     <thead>
// //                         <tr>
// //                             <th>Email</th>
// //                             <th>Status</th>
// //                             <th>Role</th>
// //                             <th>Action</th>
// //                         </tr>
// //                     </thead>
// //                     <tbody>
// //                         {/* row 1 */}
// //                         {data.map(item => (
// //                             <tr key={item._id}>
// //                                 <td>{item?.email}</td>
// //                                 <td>{item?.status}</td>
// //                                 <td>{item?.role}</td>
// //                                 <th>
// //                                     <button
// //                                         onClick={() => updateUserRole(item._id, 'Tour Guide')}
// //                                         className="btn btn-secondary mr-2 mb-2 btn-xs"
// //                                         disabled={disabledButtons[item._id]}
// //                                     >
// //                                         Make Tour Guide
// //                                     </button>
// //                                     <button
// //                                         onClick={() => updateUserRole(item._id, 'Admin')}
// //                                         className="btn btn-secondary btn-xs"
// //                                         disabled={disabledButtons[item._id]}
// //                                     >
// //                                         Make Admin
// //                                     </button>
// //                                 </th>
// //                             </tr>
// //                         ))}
// //                     </tbody>
// //                 </table>
// //             </div>
// //         </div>
// //     );
// // };

// // export default ManageUser;



import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../Pages/hooks/useAxiosCommon";
import { toast } from "react-toastify";
import Select from 'react-select';
import { useState } from "react";
import { Helmet } from "react-helmet";

const ManageUser = () => {
    const axiosCommon = useAxiosCommon();
    const [search, setSearch] = useState('');
    const [filterRole, setFilterRole] = useState('');

    const { data = [], refetch } = useQuery({
        queryKey: ['get-user-data', search, filterRole],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/users?search=${search}&role=${filterRole}`);
            return data;
        }
    });

    const updateUserRole = async (role, updateUserEmail) => {
        console.log('update this role', role, updateUserEmail);
        const user = {
            role: role,
            status: 'Verified',
        };
        try {
            const { data } = await axiosCommon.patch(`/users/update/${updateUserEmail}`, user);
            toast.success('Updated user role successfully');
            refetch();
            return data;
        } catch (err) {
            console.log(err);
        }
    };

  

    const handleSearch = (e) => {
        e.preventDefault();
        const searchText = e.target.search.value;
        setSearch(searchText);
        refetch();
    };

	const options = [
        { value: '', label: 'All Roles' },
        { value: 'Admin', label: 'Admin' },
        { value: 'Tour Guide', label: 'Tour Guide' },
        // Add other roles here if needed
    ];

    const handleRoleChange = (selectedOption) => {
        setFilterRole(selectedOption.value);
        refetch();
    };

    return (
        <div  data-aos="fade-left"
       >
            <Helmet>
                <title>Manage User Page</title>
            </Helmet>
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-center my-16">Manage User</p>
            <div className="mb-10 lg:flex gap-8 items-center justify-evenly">
                <div className="mb-4 flex justify-center">
                    <form onSubmit={handleSearch}>
                        <div className="join">
                            <input name="search" className="input input-bordered join-item" placeholder="Email" />
                            <button type="submit" className="btn join-item rounded-r-full">Search</button>
                        </div>
                    </form>
                </div>
                <div className="flex justify-center gap-5 items-center">
                    <Select options={options} onChange={handleRoleChange} />
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item._id}>
                                <td>{item?.email}</td>
                                <td>{item?.status}</td>
                                <td>{item?.role}</td>
                                <th>
                                    <button onClick={() => updateUserRole('Tour Guide', item?.email)} className="btn btn-secondary mr-2 mb-2 btn-xs">Make Tour Guide</button>
                                    <button onClick={() => updateUserRole('Admin', item?.email)} className="btn btn-secondary btn-xs">Make Admin</button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;
