import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => (
	<div className="header-bar bg-white w-full py-2">
		<div className="container inner-content flex px-4 md_px-2">
			<div className="logo">
				<Link className="p-1" to={'/'}>
					<img src="/images/acl_color.png" alt="ACL Erie, Associated Clinical Labs" />
				</Link>
			</div>
			<div className="tagline text-lg text-blue-900 w-full flex items-center justify-end">
				<h3>Results for you!</h3>
			</div>
		</div>
	</div>
);

export default Header;
