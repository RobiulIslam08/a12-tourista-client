
import { Helmet } from "react-helmet";
import Banner from "../../Component/HomeComponent/Banner";
import TabTourist from "../../Component/HomeComponent/TabTourist";
import TourTypeSection from "../../Component/HomeComponent/TourTypeSection";
import TouristStorySection from "../../Component/HomeComponent/TouristStorySection";
import WhyChooseUs from "../../Component/HomeComponent/WhyChosseUs";
import CustomerReviews from "../../Component/HomeComponent/CustomerReview";
import ContactUs from "../../Component/HomeComponent/ContactUs";


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
			<WhyChooseUs></WhyChooseUs>
			<CustomerReviews></CustomerReviews>
			<ContactUs></ContactUs>

		</div>
	);
};

export default Home;