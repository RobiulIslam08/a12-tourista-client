import AdminMenu from "./Menu/AdminMenu";
import TourGuideMenu from "./Menu/TourGuideMenu";
import TouristMenu from "./Menu/TouristMenu";


const Sidebar = () => {
	return (
		<div className="">
			<AdminMenu></AdminMenu>
			<TourGuideMenu></TourGuideMenu>
			<TouristMenu></TouristMenu>
		</div>
	);
};

export default Sidebar;