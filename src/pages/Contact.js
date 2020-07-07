import React from 'react';
import {Link} from "react-router-dom";
import Sidebar from '../components/partials/Sidebar';

const ContactUs = props => (
	<div className="main">
		<div className="container mx-auto md_flex">
			<div className="leader md_w-2--3 w-full px-4 md_px-0">
				<p>
					Send us a letter, an email, or call us. We like hearing from you so we've provided multiple
					communication options whenever possible.
				</p>

				<h3 className="text-center md_text-left text-blue-900 mb-4 font-bold text-2xl my-6">Telephone Inquiries</h3>
				<table className="table-auto">
					<thead>
						<tr>
							<th className="px-8 py-2">Department</th>
							<th className="px-8 py-2">Number</th>
						</tr>
					</thead>
					<tbody>
						<tr className="bg-gray-200">
							<td className="px-8 py-2 border">Customer Service</td>
							<td className="px-8 py-2 border">
								<a href="tel:8144612420">814-461-2420</a>
							</td>
						</tr>
						<tr className="bg-gray-100">
							<td className="px-8 py-2 border">Billing Inquiries</td>
							<td className="px-8 py-2 border">
								<a href="tel:8144612437">814-461-2437</a>
							</td>
						</tr>
						<tr className="bg-gray-200">
							<td className="px-8 py-2 border">Courier Dispatch</td>
							<td className="px-8 py-2 border">
								<a href="tel:8144612450">814-461-2450</a>
							</td>
						</tr>
						<tr className="bg-gray-100">
							<td className="px-8 py-2 border">IT Help Desk</td>
							<td className="px-8 py-2 border">
								<a href="tel:8144612555">814-461-2555</a>
							</td>
						</tr>
						<tr className="bg-gray-200">
							<td className="px-8 py-2 border">Human Resources</td>
							<td className="px-8 py-2 border">
								<a href="tel:8144612415">814-461-2415</a>
							</td>
						</tr>
						<tr className="bg-gray-100">
							<td className="px-8 py-2 border">Toll Free</td>
							<td className="px-8 py-2 border">
								<a href="tel:8009378028">800-937-8028</a>
							</td>
						</tr>
					</tbody>
				</table>

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
			<Sidebar />
		</div>
	</div>
);

export default ContactUs;
