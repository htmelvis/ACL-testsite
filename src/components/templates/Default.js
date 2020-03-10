import React from 'react';
import Toolbar from '../partials/Toolbar';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import Nav from '../Nav';

const DefaultTemplate = props => (
	<div>
		<Toolbar />
		<Header />
		<Nav />

		{props.children}
		<Footer />
	</div>
);

export default DefaultTemplate;
