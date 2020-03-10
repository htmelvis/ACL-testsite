import React from 'react';
import Sidebar from '../components/partials/Sidebar';

const Locations = props => (
	<div className="main">
		<div className="container mx-auto flex">
			<div className="leader lg_w-2--3 sm_w-full">
				<p>
					Through our affiliation with Quest Diagnostics Incorporated we are pleased to offer our patients
					access to the following services:
				</p>
				<h3 className="text-blue-900 mb-4 font-bold text-2xl my-6">PSC Locator and Appointment Scheduler</h3>
				<p>
					Use the Quest Diagnostics{' '}
					<a href="https://secure.questdiagnostics.com/hcp/psc/jsp/SearchLocation.do">
						PSC Locator and Appointment Scheduler
					</a>{' '}
					to find an ACL Patient Service Center and schedule an appointment.
				</p>
				<LocationsTabs />
			</div>
			<div className="lg_w-1--3 sm_w-full justify-center">
				<Sidebar />
			</div>
		</div>
	</div>
);

const LocationsTabs = () => {
	return (
		<>
			<div className="tab-header">
				<h3 className="text-blue-900 mb-4 font-bold text-2xl my-6">PSC Locations in Erie County, PA</h3>
			</div>
			<div className="tab-body">
				<iframe
					className="w-full p-4 bg-green-200 rounded-lg shadow-md mapbox"
					frameborder="0"
					scrolling="no"
					marginheight="100"
					marginwidth="0"
					src="https://maps.google.com/maps/ms?msid=208325745493819797190.0004cea31c30fc764fc89&amp;msa=0&amp;ie=UTF8&amp;t=m&amp;z=10&amp;output=embed"
				></iframe>
				<a
					className="text-blue-600 font-bold"
					href="https://www.google.com/maps/d/viewer?mid=1Eo231_VUHsSRN2M1K-JXkdWenGA&msa=0&ie=UTF8&t=m&ll=41.95846899999999%2C-80.09994499999999&spn=0.674004%2C0.65918&z=10&source=embed"
					target="_blank"
				>
					View Erie County, PA ACL Locations on a full-screen map
				</a>
			</div>
		</>
	);
};

const OtherLocations = props => (
	<>
		<iframe
			className="mapbox w-full p-4 bg-green-200 rounded-lg shadow-md"
			width="350"
			height="350"
			frameborder="0"
			scrolling="no"
			marginheight="0"
			marginwidth="0"
			src="https://www.google.com/maps/d/embed?mid=zBx3a54ww2nM.kQtWuFETU4sY"
		></iframe>
		<p>
			<a href="https://www.google.com/maps/d/embed?mid=zBx3a54ww2nM.kQtWuFETU4sY">
				View ACL Other PA Locations in a larger map
			</a>
		</p>
	</>
);

const NewYorkLocation = props => (
	<>
		<iframe
			className="mapbox w-full p-4 bg-green-200 rounded-lg shadow-md"
			frameborder="0"
			scrolling="no"
			marginheight="0"
			marginwidth="0"
			src="https://maps.google.com/maps/ms?msa=0&amp;msid=208325745493819797190.0004cf0258cd6c9c55abc&amp;ie=UTF8&amp;t=m&amp;ll=42.344335,-79.359741&amp;spn=0.710509,0.961304&amp;z=9&amp;output=embed"
		></iframe>
		<p>
			<a href="https://maps.google.com/maps/ms?msa=0&msid=208325745493819797190.0004cf0258cd6c9c55abc&ie=UTF8&t=m&ll=42.344335,-79.359741&spn=0.710509,0.961304&z=9&source=embed">
				View ACL NY Locations in a larger map
			</a>
		</p>
	</>
);

export default Locations;
