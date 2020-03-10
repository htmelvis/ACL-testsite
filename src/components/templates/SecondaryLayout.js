import React from 'react';
import Toolbar from '../partials/Toolbar';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import TitleHeader from '../partials/TitleHeader';
import Nav from '../Nav';

const SecondaryLayout = props => (
	<div>
		<Toolbar />
		<Header />
		<Nav />
		<TitleHeader title={props.pageTitle} />
		{props.children}
		<Footer />
	</div>
);

export default SecondaryLayout;
