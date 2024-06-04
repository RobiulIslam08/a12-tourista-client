/* eslint-disable react/no-unknown-property */
// import { useState } from "react";
// import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

// import 'react-tabs/style/react-tabs.css';
// const TabTourist = () => {
// 	const [tabIndex, setTabIndex] = useState(0)
// 	return (
// 		<div className="my-40 ">
// 			<div>
// 				<p className="text-3xl font-bold text-center my-20">Tourism and Travel Guide S</p>
// 			</div>
// 			<Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
// 				<TabList>
// 					<Tab>Overview</Tab>
// 					<Tab>Our Packages</Tab>
// 					<Tab>Meet Our Tour Guides</Tab>
// 				</TabList>
// 				<TabPanel>
// 					Overview
// 				</TabPanel>
// 				<TabPanel>
// 					Our Packages
// 				</TabPanel>
// 				<TabPanel>
// 					Meet Our Tour Guides
// 				</TabPanel>
// 			</Tabs>
// 		</div>
// 	);
// };

// export default TabTourist;
import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

const TabTourist = () => {
	const [tabIndex, setTabIndex] = useState(0);
	return (
		<div className="my-40 px-4 sm:px-6 lg:px-8">
			<div>
				<p className="text-3xl font-bold text-center my-20">Tourism and Travel Guide</p>
			</div>
			<Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
				<TabList className="flex justify-center border-b-2 border-gray-300">
					<Tab className="mx-2 px-4 py-2 cursor-pointer hover:bg-gray-100">Overview</Tab>
					<Tab className="mx-2 px-4 py-2 cursor-pointer hover:bg-gray-100">Our Packages</Tab>
					<Tab className="mx-2 px-4 py-2 cursor-pointer hover:bg-gray-100">Meet Our Tour Guides</Tab>
				</TabList>
				<TabPanel>
					<div className="max-w-4xl mx-auto">
						<h2 className="text-2xl font-bold my-4 text-center sm:text-left">Discover the Beauty of Bangladesh</h2>
						<p className="mb-4 text-justify">
							Bangladesh is a land of natural beauty and rich cultural heritage. From the world s largest mangrove forest, the Sundarbans, to the longest natural sea beach, Cox s Bazar, there is much to explore and experience.
						</p>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<iframe className="w-full aspect-video" src="https://www.youtube.com/embed/paNOhUirl9A?si=cZjwNv7xS3YXHd-R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

							</iframe>
							<iframe className="w-full aspect-video" src="https://www.youtube.com/embed/8PYwoxt-OfE?si=iccvc3qEW5-JMprU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
							<iframe className="w-full aspect-video" src="https://www.youtube.com/embed/rDYdeq3JW_E?si=J95gr7sD0zH0l7rK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
							<iframe className="w-full aspect-video" src="https://www.youtube.com/embed/Cn4G2lZ_g2I?si=DEBaMq4nGL_DkS1s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
							

						</div>
						<p className="text-justify mt-4">
							Experience the vibrant culture, delicious cuisine, and warm hospitality of the people. Whether you are an adventure seeker, a history enthusiast, or just looking to relax, Bangladesh has something for everyone.
						</p>
						<h3 className="text-xl font-bold my-4">Popular Destinations:</h3>
						<ul className="list-disc ml-8">
							<li>Sundarbans</li>
							<li>Cox s Bazar</li>
							<li>Srimangal</li>
							<li>Rangamati</li>
						</ul>
						<h3 className="text-xl font-bold my-4">Things to Do:</h3>
						<ul className="list-disc ml-8">
							<li>Jungle Safari</li>
							<li>Beach Relaxation</li>
							<li>Trekking in the Hills</li>
							<li>Exploring Tribal Culture</li>
						</ul>
					</div>
				</TabPanel>
				<TabPanel>
					Our Packages
				</TabPanel>
				<TabPanel>
					Meet Our Tour Guides
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default TabTourist;
