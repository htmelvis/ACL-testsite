import React from 'react';
import classNames from 'classnames';
import Sidebar from '../components/partials/Sidebar';

const Locations = props => (
	<div className="main">
		<div className="container mx-auto md_flex">
			<div className="leader md_w-2--3 w-full">
				<p className="px-4 md_px-0">
					Through our affiliation with Quest Diagnostics Incorporated we are pleased to offer our patients
					access to the following services:
				</p>
				<h3 className="text-blue-900 mb-4 font-bold text-2xl my-6 px-4 md_px-0">PSC Locator and Appointment Scheduler</h3>
				<p className="px-4 md_px-0">
					Use the Quest Diagnostics{' '}
					<a href="https://secure.questdiagnostics.com/hcp/psc/jsp/SearchLocation.do">
						PSC Locator and Appointment Scheduler
					</a>{' '}
					to find an ACL Patient Service Center and schedule an appointment.
				</p>
				<LocationsTabs />
			</div>
			<br/>
			<Sidebar />
		</div>
	</div>
);

const LocationsTabs = () => {
	const [activeTab, setActiveTab] = React.useState(0);
	const handleTabSelection = (e, i) => {
		e.preventDefault();
		setActiveTab(i);
	};
	const handleChangeTab = (e) => {
		setActiveTab(e.target.value)
	};
	return (
		<>
			<div>
				<div className="px-4 md_hidden">
					<select defaultValue={0} onChange={(e) => handleChangeTab(e)} className="form-select block w-full">
						<option value={0}>Erie Locations</option>
						<option value={1}>NY Locations</option>
						<option value={2}>Other Locations</option>
					</select>
				</div>
				<div className="hidden sm_block">
					<div className="border-b border-gray-200">
						<nav className="-mb-px flex">
							<a href="#"
								 onClick={(e) => handleTabSelection(e, 0)}
								 className={classNames({
									 "w-1--4 py-4 px-1 text-center border-b-2 font-medium text-sm leading-5 text-gray-400 hover_text-gray-700 hover_border-gray-300 focus_outline-none focus_text-gray-700 focus_border-gray-300": true,
									 "border-indigo-500": activeTab === 0,
									 "text-indigo-500": activeTab === 0,
									 "font-bold": activeTab === 0
								 })}>
								Erie Locations
							</a>
							<a href="#"
								 onClick={(e) => handleTabSelection(e, 1)}
								 className={classNames({
									 "w-1--4 py-4 px-1 text-center border-b-2 border-transparent font-medium text-sm leading-5 text-gray-400 hover_text-gray-700 hover_border-gray-300 focus_outline-none focus_text-gray-700 focus_border-gray-300": true,
									 "border-indigo-500": activeTab === 1,
									 "text-indigo-500": activeTab === 1,
									 "font-bold": activeTab === 1
								 })}>
								NY Locations
							</a>
							<a href="#"
								 onClick={(e) => handleTabSelection(e, 2)}
								 className={classNames({
									 "w-1--4 py-4 px-1 text-center border-b-2 border-transparent font-medium text-sm leading-5 text-gray-400 focus_outline-none focus_text-indigo-800 focus_border-indigo-700": true,
									 "border-indigo-500": activeTab === 2,
									 "text-indigo-500": activeTab === 2,
									 "font-bold": activeTab === 2
								 })}>
								Other Locations
							</a>
						</nav>
					</div>
				</div>
			</div>
			<div className="tabs">
				{locationTabs[activeTab]}
			</div>
		</>
	);
};

const OtherLocations = props => (
	<>
		<div className="tab-header">
			<h3 className="px-4 text-blue-900 mb-4 font-bold text-2xl my-6">Other PSC Locations </h3>
		</div>
		<div className="tab-body">
		<iframe
			className="mapbox w-full p-4 bg-green-600 rounded-lg shadow-md"
			width="350"
			height="350"
			frameBorder="0"
			scrolling="no"
			marginHeight="0"
			marginWidth="0"
			src="https://www.google.com/maps/d/embed?mid=zBx3a54ww2nM.kQtWuFETU4sY"
		></iframe>
		<p className="px-4">
			<a href="https://www.google.com/maps/d/embed?mid=zBx3a54ww2nM.kQtWuFETU4sY">
				View ACL Other PA Locations in a larger map
			</a>
		</p>
		</div>
	</>
);

const NewYorkLocation = props => (
	<>
		<div className="tab-header">
			<h3 className="px-4 text-blue-900 mb-4 font-bold text-2xl my-6">PSC Locations in Western New York</h3>
		</div>
		<div className="tab-body">
		<iframe
			className="mapbox w-full p-4 bg-green-600 rounded-lg shadow-md"
			frameBorder="0"
			scrolling="no"
			marginHeight="0"
			marginWidth="0"
			src="https://maps.google.com/maps/ms?msa=0&amp;msid=208325745493819797190.0004cf0258cd6c9c55abc&amp;ie=UTF8&amp;t=m&amp;ll=42.344335,-79.359741&amp;spn=0.710509,0.961304&amp;z=9&amp;output=embed"
		></iframe>
		<p className="px-4">
			<a href="https://maps.google.com/maps/ms?msa=0&msid=208325745493819797190.0004cf0258cd6c9c55abc&ie=UTF8&t=m&ll=42.344335,-79.359741&spn=0.710509,0.961304&z=9&source=embed">
				View ACL NY Locations in a larger map
			</a>
		</p>
		</div>
	</>
);

const ErieLocation = props => (
	<>
		<div className="tab-header">
			<h3 className="px-4 text-blue-900 mb-4 font-bold text-2xl my-6">PSC Locations in Erie County, PA</h3>
		</div>
		<div className="tab-body">
			<iframe
				className="w-full p-4 bg-green-600 rounded-lg shadow-md mapbox"
				frameBorder="0"
				scrolling="no"
				marginHeight="100"
				marginWidth="0"
				src="https://maps.google.com/maps/ms?msid=208325745493819797190.0004cea31c30fc764fc89&amp;msa=0&amp;ie=UTF8&amp;t=m&amp;z=10&amp;output=embed"
			></iframe>
			<a
				className="px-4 text-blue-500 font-bold"
				href="https://www.google.com/maps/d/viewer?mid=1Eo231_VUHsSRN2M1K-JXkdWenGA&msa=0&ie=UTF8&t=m&ll=41.95846899999999%2C-80.09994499999999&spn=0.674004%2C0.65918&z=10&source=embed"
				target="_blank"
			>
				View Erie County, PA ACL Locations on a full-screen map
			</a>
		</div>
	</>
);
const locationTabs = [<ErieLocation />,
	<NewYorkLocation />,
	<OtherLocations/>];

export default Locations;
