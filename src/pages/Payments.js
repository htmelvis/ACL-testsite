import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/partials/Sidebar';

const Payments = props => (
	<div className="main">
		<div className="container mx-auto md_flex">
			<div className="leader md_w-2--3 w-full px-4 md_px-0">
				<p>
					Use the{' '}
					<a href="http://www.questdiagnostics.com/bill" target="_blank">
						Quest Diagnostics Payment and Insurance Services
					</a>{' '}
					to conveniently pay your ACL invoice or submit/update your insurance information online.
				</p>

				<p>
					<a
						className="bg-green-600 px-8 py-4 rounded-xl shadow-md text-white button"
						href="http://www.questdiagnostics.com/bill"
						target="_blank"
					>
						Make Payment
					</a>
				</p>

				<h3 className="text-blue-900 mb-4 font-bold text-2xl my-6">Questions, & Feedback</h3>

				<p>
					Please email the{' '}
					<a className="font-bold text-underline" href="mailto:admin@associatedclinicallabs.com">
						site administrator
					</a>{' '}
					to report broken links or pass along comments and questions. Comments and questions will be
					forwarded to the appropriate party for a response.
				</p>
			</div>
			<br/>
				<Sidebar />
		</div>
	</div>
);

export default Payments;
