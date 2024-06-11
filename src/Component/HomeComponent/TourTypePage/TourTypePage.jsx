import { Link, useParams } from "react-router-dom";
import useAxiosCommon from "../../../Pages/hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";



const TourTypePage = () => {
	const { typeName } = useParams();
	const axiosCommon = useAxiosCommon()
	console.log(typeName)
	const { data: packages = [] } = useQuery({
		queryKey: ['add-package'],
		queryFn: async () => {
			const { data } = await axiosCommon.get('/add-package')
			return data
		}
	})

	// Filter the packages based on the typeName parameter
	// const filteredPackages = packages.filter(pkg => pkg.type === typeName);
	const Package = packages.filter(pkg => pkg.tourType === typeName)
	console.log(Package)

	return (
		<div>
			<p className="text-lg md:text-2xl lg:text-3xl font-bold text-center my-14">Tour Type {typeName}</p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
				{
					Package.map(item => <div key={item?._id} className="card  bg-base-100 shadow-xl">
						<figure>
							<img src={item.spotPhoto} alt="Shoes" />
						</figure>

						<div className="card-body">
							<h2 className="text-xl font-bold">{item?.tourType}</h2>
							<p className="">{item?.tripTitle}</p>
							<p >Price: {item?.price}$</p>
							<div className="card-actions justify-start">
								<Link to={`/package-detaisl/${item?._id}`}><button className="btn btn-secondary btn-sm">View Package</button></Link>
							</div>
						</div>
					</div>)
				}
			</div>
		</div>
	);
};

export default TourTypePage;