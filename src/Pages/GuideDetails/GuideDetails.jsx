import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosCommon from "../hooks/useAxiosCommon";


const GuideDetails = () => {
	const { id } = useParams()
	const axiosCommon = useAxiosCommon()
	const { data } = useQuery({
		queryKey: ['guideDetails', id],
		queryFn: async () => {
			const { data } = await axiosCommon(`/guide-details/${id}`)
			return data
		}
	})
	return (
		<div className="my-40">
			<div className="card card-side bg-base-100 shadow-xl">
				<figure><img src={data?.profile} className="h-52" alt="Movie" /></figure>
				<div className="card-body">
					<h2 className="card-title">Name: {data?.name}</h2>
					<p><span className="font-bold">Education</span>: {data?.education}</p>
					<p><span className="font-bold">Skill</span>: {data?.skills}</p>
					<p><span className="font-bold">Work Experience</span>: {data?.skills}</p>
					<div className="card-actions justify-end">
						<button className="btn btn-primary">Watch</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GuideDetails;