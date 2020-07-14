import React from 'react';
import classNames from 'classnames'
import Sidebar from '../components/partials/Sidebar';

const Home = props => {
	const [isExpanded, setExpanded] = React.useState(false)
	return (
		<section className="wave main">
			<div className="container mx-auto">
				<div className="md_flex p-8 md_p-0">
					<div className="content lg_w-2--3 md_w-full">
						<div className="mb-4">
						{/*	Navigational Area*/}
						<div className="flex flex-wrap lg_flex-no-wrap xl_flex-no-wrap">
							<a className="mb-2 w-1--3 md_w-1--3 lg_w-1--6 sm_w-1--3 link-box flex items-stretch text-center leading-none" href="/locations">
								<div className="w-full nav-block blue-bg hover_bg-green-500 flex items-center justify-center px-4 pt-3 mr-2 text-blue-100 rounded-lg">
									<p>Locations</p>
								</div>
							</a>
							<a className="mb-2 w-1--3 md_w-1--3 lg_w-1--6 sm_w-1--3 link-box flex items-stretch text-center leading-none" href="/appointments">
								<div className="w-full nav-block blue-bg hover_bg-green-500 flex items-center justify-center px-3 pt-3 mr-2 text-blue-100 rounded-lg">
									<p className="text-sm leading-none">Schedule Appointment</p>
								</div>
							</a>
							<a className="mb-2 w-1--3 md_w-1--3 lg_w-1--6 sm_w-1--3 link-box flex items-stretch text-center leading-none" href="/payments">
								<div className="w-full nav-block blue-bg hover_bg-green-500 flex items-center justify-center px-4 pt-3 mr-2 text-blue-100 rounded-lg">
									<p className="leading-none">Make Payment</p>
								</div>
							</a>
							<a className="mb-2 w-1--3 md_w-1--3 lg_w-1--6 sm_w-1--3 link-box flex items-stretch text-center leading-none" href="/careers">
								<div className="w-full nav-block blue-bg hover_bg-green-500 flex items-center justify-center px-4 pt-3 mr-2 text-blue-100 rounded-lg">
									<p>Careers</p>
								</div>
							</a>
						<a className="mb-2 w-1--3 md_w-1--3 lg_w-1--6 sm_w-1--3 link-box flex items-stretch text-center leading-none" href="/about">
							<div className="w-full nav-block blue-bg hover_bg-green-500 flex items-center justify-center px-4 pt-3 mr-2 text-blue-100 rounded-lg">
								<p>About Us</p>
							</div>
						</a>
							<a className="mb-2 w-1--3 md_w-1--3 lg_w-1--6 sm_w-1--3 link-box flex items-stretch text-center leading-none" href="/contact-us">
								<div className="w-full nav-block blue-bg hover_bg-green-500 flex items-center justify-center px-4 pt-3 mr-2 text-blue-100 rounded-lg">
									<p>Contact Us</p>
								</div>
							</a>
						</div>
						</div>

						<div>
							<p>
								<strong>Associated Clinical Laboratories</strong> <em>(ACL)</em> is a regional reference
								laboratory serving Northwest Pennsylvania, Chautauqua County, New York and Ashtabula County,
								Ohio. Formed in 1986, the laboratory is a regional asset and resource for physicians and
								patients living and working in the service area.{' '}
							</p>
						</div>
					</div>
					{/*  ASIDE */}
					<Sidebar/>
				</div>
			</div>
		</section>
	)
}

export default Home;
