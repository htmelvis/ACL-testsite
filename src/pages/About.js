import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/partials/Sidebar';
const About = () => (
	<div className="main">
		<div className="container mx-auto flex justify-center">
			<div className="leader lg_w-2--3 sm_w-full">
				<p>
					<strong>Associated Clinical Laboratories</strong> <em>(ACL)</em> is a regional reference laboratory
					serving Northwest Pennsylvania, Chautauqua County, New York and Ashtabula County, Ohio. Formed in
					1986, the laboratory is a regional asset and resource for physicians and patients living and working
					in the service area.
				</p>
				<p>
					Through our affiliation with Quest Diagnostics Incorporated we are pleased to offer our patients
					access to the following services:
				</p>
				<h3 className="text-blue-900 mb-4 font-bold text-2xl">Questions, & Feedback</h3>
				<p>
					Please email the{' '}
					<a className="font-bold text-underline" href="mailto:admin@associatedclinicallabs.com">
						site administrator
					</a>{' '}
					to report broken links or pass along comments and questions. Comments and questions will be
					forwarded to the appropriate party for a response.
				</p>
				<h3 className="text-blue-900 mb-4 font-bold text-2xl">Contact Information</h3>
				<p>
					Visit the
					<Link className="font-bold text-underline" to="/contact-us">
						{' '}
						Contact Us
					</Link>{' '}
					section for mailing address, phone numbers and inquiry details.
				</p>
			</div>
			<div className="lg_w-1--3 sm_w-full justify-center">
				<Sidebar />
			</div>
		</div>
	</div>
);

export default About;
