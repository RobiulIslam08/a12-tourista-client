import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosCommon from "../../Pages/hooks/useAxiosCommon";
import { FacebookIcon, FacebookShareButton } from "react-share";


const StoryDetailsPage = () => {
	const { id } = useParams()
	const axiosCommon = useAxiosCommon()
	const shareUrl = `https://yourwebsite.com/story-details/${id}`;
	const { data = {} } = useQuery({
		queryKey: ['story-details'],
		queryFn: async () => {
			const { data } = await axiosCommon.get(`/story-details/${id}`)
			return data
		}
	})
	return (
		<div className="md:mb-32 mb-20">
			<p className="text-center font-bold text-lg md:text-2xl lg:text-3xl mt-20 mb-16">Story Details Page</p>
			<div className="card bg-base-100 shadow-xl">
				<figure className="w-full h-60 md:h-80 lg:h-96 overflow-hidden"><img src={data?.spotImage} className="w-full h-auto object-cover" alt="Movie" /></figure>
				<div className="card-body">
					<h2 className="card-title font-bold lg:text-3xl">{data?.title}</h2>
					<div className="font-semibold">
						<p>{data?.tourType}</p>
						<p>{data?.location}</p>
						<p>tour date: {data?.formateData}</p>
					</div>
					<p className="text-gray-400">{data?.description}</p>
					<div className="flex items-center gap-3">
						<span className="text-fuchsia-400 font-medium">share to </span>
						<FacebookShareButton url={shareUrl} quote={data.title}>
							<FacebookIcon size={32} round />
						</FacebookShareButton>
					</div>

				</div>
			</div>
		</div>
	);
};

export default StoryDetailsPage;