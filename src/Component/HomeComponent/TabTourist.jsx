import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import 'react-tabs/style/react-tabs.css';
const TabTourist = () => {
	const [tabIndex, setTabIndex] = useState(0)
	return (
		<div className="my-40">
			<div>
				<p className="text-3xl font-bold text-center my-20">Tourism and Travel Guide S</p>
			</div>
			<Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
				<TabList>
					<Tab>Overview</Tab>
					<Tab>Our Packages</Tab>
					<Tab>Meet Our Tour Guides</Tab>
				</TabList>
				<TabPanel>
					Overview
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