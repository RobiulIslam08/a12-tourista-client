import { Link } from "react-router-dom";


const ErrorPage = () => {
	return (
		<div className="flex justify-center items-center h-screen ">
			<div>
			<p className="text-3xl mb-6">Page Not Found</p>
			<Link to="/"><button className="btn ">Back Home</button></Link>
			</div>
		</div>
	);
};

export default ErrorPage;