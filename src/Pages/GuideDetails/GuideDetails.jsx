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
				<figure><img src={data?.profile} className="lg:h-56 md:52 h-32 rounded-full" alt="Movie" /></figure>
				<div className="card-body">
					<h2 className="card-title">Name: {data?.name}</h2>
					<p><span className="font-bold">Education</span>: {data?.education}</p>
					<p><span className="font-bold">Skill</span>: {data?.skills}</p>
					<p><span className="font-bold">Work Experience</span>: {data?.workExperience}</p>
					<p><span className="font-bold">Rating</span>: <div className="rating">
						<input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
						<input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
						<input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
						<input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
						<input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
					</div></p>
					<textarea className="textarea textarea-secondary" placeholder="Comment"></textarea>
					<div className="divider">Contact Me</div>
					<p><span className="font-bold">Email</span>: {data?.email}</p>
					<p><span className="font-bold">Phone</span>: {data?.phone}</p>



				</div>
			</div>
		</div>
	);
};

export default GuideDetails;