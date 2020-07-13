import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Sidebar from '../components/partials/Sidebar';

const About = () => {
	const [isExpanded, setExpanded] = React.useState(false)
	return (

		<div className="main">
			<div className="container mx-auto md_flex justify-center">
				<div className="leader md_w-2--3 w-full px-4 md_px-0">
					<p>
						<strong>Associated Clinical Laboratories</strong> <em>(ACL)</em> is a regional reference laboratory
						serving Northwest Pennsylvania, Chautauqua County, New York and Ashtabula County, Ohio. Formed in
						1986, the laboratory is a regional asset and resource for physicians and patients living and working
						in the service area.
					</p>
					<div className={classNames({
						"lg_block": true,
						"block": isExpanded,
						"hidden": !isExpanded
					})}>
						<p>
							As a local laboratory, the medical directors, technical staff and administrative staff are
							readily available to both physicians and patients should questions arise regarding ACL's
							services. Members of Pathology Associates of Erie serve as the Medical Directors of local
							hospital laboratories as well as ACL. This oversight ensures that the laboratories focus on
							meeting the service needs of physicians and patients in our community. ACL also employs two
							Ph.D. level scientists who provide oversight to the technical areas of the laboratory.{' '}
						</p>
						<p>
							The partnership of the local medical community with Quest Diagnostics Incorporated enables local
							access to the expertise of the nation's largest reference laboratory. Testing not performed at
							ACL is referenced into the Quest facilities in Pittsburgh, PA, and the Quest Diagnostics Nichols
							Institute esoteric testing facilities in Chantilly, VA, and San Juan Capistrano, CA. ACL
							performs approximately 95% of all testing in the Erie facility.{' '}
						</p>
					</div>
					<div onClick={() => setExpanded(!isExpanded)} className="lg_hidden">
						<a href="#" className="font-bold text-blue-800">View More {!isExpanded ? '+' : '-'}</a>
					</div>
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
}

export default About;
