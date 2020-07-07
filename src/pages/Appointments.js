import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/partials/Sidebar';
const Appointments = props => (
	<div className="main">
		<div className="container mx-auto md_flex">
			<div className="leader md_w-2--3 w-full px-4 md_px-0">
				<h3 className="text-blue-900 mb-4 font-bold text-2xl">Schedule an Appointment</h3>

				<p>
					Use the Quest Diagnostics{' '}
					<a href="https://secure.questdiagnostics.com/hcp/psc/jsp/SearchLocation.do" target="_blank">
						PSC Locator and Appointment Scheduler
					</a>{' '}
					to find an ACL Patient Service Center and schedule an appointment.
				</p>

				<h3 className="text-blue-900 mb-4 font-bold text-2xl">Quest Diagnostics Test Menu</h3>
				<p>
					The <a href="https://testdirectory.questdiagnostics.com/test/home">Quest Diagnostics Test Menu</a>{' '}
					provides general reference information on many of the tests offered by ACL and Quest Diagnostics.
				</p>
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
			<br/>
				<Sidebar />
		</div>
	</div>
);

export default Appointments;
