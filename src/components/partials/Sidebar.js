import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
	<aside className="pl-4">
		<h4 className="text-center uppercase text-blue-900 text-xl font-bold my-4">Mailing Address</h4>
		<p className="text-center">
			Associated Clinical Laboratories <br />
			1526 Peach Street
			<br />
			Erie, PA 16501
		</p>
		<h4 className="text-center uppercase text-blue-900 text-xl font-bold my-4">Toll Free Telephone</h4>
		<h3 className="text-center font-bold text-blue-900 text-2xl my-4 mb-8">1-800-937-8028</h3>
		<Link to="/locations">
			<img src="images/Location.png" alt="Find ACL Location" className="mx-auto" />
		</Link>
	</aside>
);

export default Sidebar;
