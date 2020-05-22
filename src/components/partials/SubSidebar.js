import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
	<aside className="self-start shadow-md blue-bg pb-8 md_ml-8 rounded-lg p-4 w-full md_w-1--3">
		<h4 className="mt-8 text-center uppercase text-blue-300 text-xl font-bold my-4">Mailing Address</h4>
		<p className="text-center text-blue-100">
			Associated Clinical Laboratories <br />
			1526 Peach Street
			<br />
			Erie, PA 16501
		</p>
		<h4 className="text-center uppercase text-blue-300 text-xl font-bold my-4">Toll Free Telephone</h4>
		<h3 className="text-center font-bold text-blue-100 text-2xl my-4 mb-8">1-800-937-8028</h3>
		<Link to="/locations">
			<img src="images/Location.png" alt="Find ACL Location" className="mx-auto" />
		</Link>
	</aside>
);

export default Sidebar;
