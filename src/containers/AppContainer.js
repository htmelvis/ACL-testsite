import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import Toolbar from '../components/partials/Toolbar';
import Header from '../components/partials/Header';
import Footer from '../components/partials/Footer';
import Home from '../pages/Home';
import About from '../pages/About';
import Appointments from '../pages/Appointments';
import Careers from '../pages/Careers';
import Locations from '../pages/Locations';
import ContactUs from '../pages/Contact';
import Payments from '../pages/Payments';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import DefaultTemplate from '../components/templates/Default';
import SecondaryLayout from '../components/templates/SecondaryLayout';
import { useLocation } from 'react-router-dom';
const AppContainer = props => {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/">
						<DefaultTemplate>
							<Hero />
							<Home />
						</DefaultTemplate>
					</Route>
					<Route exact path="/about">
						<SecondaryLayout pageTitle="About Us">
							<About />
						</SecondaryLayout>
					</Route>
					<Route exact path="/appointments">
						<SecondaryLayout pageTitle="Appointments">
							<Appointments />
						</SecondaryLayout>
					</Route>
					<Route exact path="/locations">
						<SecondaryLayout pageTitle="Find a Location">
							<Locations />
						</SecondaryLayout>
					</Route>
					<Route exact path="/payments">
						<SecondaryLayout pageTitle="Payments">
							<Payments />
						</SecondaryLayout>
					</Route>
					<Route exact path="/careers">
						<SecondaryLayout pageTitle="Careers">
							<Careers />
						</SecondaryLayout>
					</Route>
					<Route exact path="/contact-us">
						<SecondaryLayout pageTitle="Contact Us">
							<ContactUs />
						</SecondaryLayout>
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default AppContainer;
