import React from 'react';
import { Link } from 'react-router-dom';

const Footer = props => (
	<footer className="bg-green-500 p-4">
		<div className="container">
			<img
				className="block mx-auto shadow-lg rounded-lg bg-white p-2 mt-4 mb-6"
				src="/images/acl_color.png"
				alt="ACL Erie, Associated Clinical Labs"
				style={{ maxWidth: '180px' }}
			/>
			<div className="footer-navigation text-white">
				<ul className="text-center md_flex items-center justify-center align-center uppercase">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link className="hover_text-red-200" to="/locations">
							Locations
						</Link>
					</li>
					<li>
						<Link to="/payments">Make Payments</Link>
					</li>
					<li>
						<Link to="/appointments">Make Appointment</Link>
					</li>
					<li>
						<Link to="/careers">Careers</Link>
					</li>
					<li>
						<Link to="/contact-us">Contact Us</Link>
					</li>
				</ul>
			</div>
			<p className="copyright text-center text-gray-200 text-xs">
				© 2020 Associated Clinical Laboratories. All third party marks — ®' and ™' — are the property of their
				respective owners.
			</p>
		</div>
	</footer>
);

export default Footer;
