import React from 'react';
import { NavLink } from 'react-router-dom';

const Toolbar = () => (
	<div className="top-toolbar bg-blue-900 w-full">
		<div className="container">
			<ul className="text-xs flex justify-end content-end text-white">
				<li className="mr-4">
					<NavLink to={'/locations'}>Find a location</NavLink>
				</li>
				<li>
					<NavLink to={'/contact-us'}>Contact Us</NavLink>
				</li>
			</ul>
		</div>
	</div>
);

export default Toolbar;
