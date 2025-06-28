
import { Helmet } from "react-helmet";
import Banner from "../../Component/HomeComponent/Banner";
import TabTourist from "../../Component/HomeComponent/TabTourist";
import TourTypeSection from "../../Component/HomeComponent/TourTypeSection";
import TouristStorySection from "../../Component/HomeComponent/TouristStorySection";


const Home = () => {
	return (
		<div >
			<Helmet>
				<title>Home</title>
			</Helmet>
			<Banner></Banner>
			<TabTourist></TabTourist>
			<TourTypeSection></TourTypeSection>
			<TouristStorySection></TouristStorySection>

		</div>
	);
};

export default Home;