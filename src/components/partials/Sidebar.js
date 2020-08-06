import React from 'react';
import { Link, NavLink, useRouteMatch } from 'react-router-dom';

const Sidebar = () => {
	const match = useRouteMatch('/about');
	const locationsMatch = useRouteMatch('/locations');
	const home = useRouteMatch('/');
	return (
	<aside className="self-start shadow-md blue-bg pb-8 md_ml-8 rounded-lg p-4 w-full md_w-1--3">
		{ match && match.url === '/about' &&
			<>
				<p className="text-xs text-center pt-2 uppercase text-white mb-0 leading-none">
					Affiliated with
				</p>
				<img
					src="images/quest.gif"
					alt="Quest Diagnostics ACL Partner"
					className="p-2 pt-0 mt-0 block bg-white rounded-lg shadow-md mx-auto"
				/>
			</>
		}
		{ home && !home.isExact &&
			<div className="link-list">
				<h4 className="mt-8 text-center uppercase text-blue-300 text-xl font-bold my-4">Site Navigation</h4>

				<ul>
					<li><NavLink className="bg-blue-green-gradient border-2 border-blue-900 shadow-lg hover_bg-green-500 pt-2 pb-2 px-3 rounded-lg" to="/locations">
						Find A Location
					</NavLink></li>
					<li><NavLink className="bg-blue-green-gradient border-2 border-blue-900 shadow-lg hover_bg-green-500 pt-2 pb-2 px-3 rounded-lg" to="/appointments">
						Schedule An Appointment
					</NavLink></li>
					<li><NavLink className="bg-blue-green-gradient border-2 border-blue-900 shadow-lg hover_bg-green-500 pt-2 pb-2 px-3 rounded-lg" to="/payments">
						Make Payment
					</NavLink></li>
					<li><NavLink className="bg-blue-green-gradient border-2 border-blue-900 shadow-lg hover_bg-green-500 pt-2 pb-2 px-3 rounded-lg" to="/careers">
						Careers
					</NavLink></li>
					<li><NavLink className="bg-blue-green-gradient border-2 border-blue-900 shadow-lg hover_bg-green-500 pt-2 pb-2 px-3 rounded-lg" to="/about">
						About ACL
					</NavLink></li>
				</ul>
			</div>
		}
		<h4 className="mt-8 text-center uppercase text-blue-300 text-xl font-bold my-4">Mailing Address</h4>
		<p className="text-center text-blue-100">
			Associated Clinical Laboratories <br />
			1526 Peach Street
			<br />
			Erie, PA 16501
		</p>
		<h4 className="text-center uppercase text-blue-300 text-xl font-bold my-4">Toll Free Telephone</h4>
		<h3 className="text-center font-bold text-blue-100 text-2xl my-4 mb-8">1-800-937-8028</h3>
		{!locationsMatch && !home &&
		<Link to="/locations">
			<img src="images/Location.png" alt="Find ACL Location" className="mx-auto" />
		</Link>
		}
		{ locationsMatch && locationsMatch.isExact &&
		<a href="https://secure.questdiagnostics.com/hcp/psc/jsp/SearchLocation.do" target={"_blank"}>
			<img src="images/scheduleanapptbutton.png" alt="Schedule an Appointment" className="mx-auto" />
		</a>
		}
	</aside>
)};

export default Sidebar;
