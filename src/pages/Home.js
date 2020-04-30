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
						<div>
							<p>
								<strong>Associated Clinical Laboratories</strong> <em>(ACL)</em> is a regional reference
								laboratory serving Northwest Pennsylvania, Chautauqua County, New York and Ashtabula County,
								Ohio. Formed in 1986, the laboratory is a regional asset and resource for physicians and
								patients living and working in the service area.{' '}
							</p>
						</div>
						<div className={classNames({
							"lg_block": true,
							"block": isExpanded,
							"hidden": !isExpanded
						})}>
							<p>
								As a local laboratory, the medical directors, technical staff and administrative staff are
								readily available to both physicians and patients should questions arise regarding ACL's
								services. Members of Pathology Associates of Erie serve as the Medical Directors of local
								hospital laboratories as well as ACL. This oversight ensures that the laboratories focus on
								meeting the service needs of physicians and patients in our community. ACL also employs two
								Ph.D. level scientists who provide oversight to the technical areas of the laboratory.{' '}
							</p>
							<p>
								The partnership of the local medical community with Quest Diagnostics Incorporated enables local
								access to the expertise of the nation's largest reference laboratory. Testing not performed at
								ACL is referenced into the Quest facilities in Pittsburgh, PA, and the Quest Diagnostics Nichols
								Institute esoteric testing facilities in Chantilly, VA, and San Juan Capistrano, CA. ACL
								performs approximately 95% of all testing in the Erie facility.{' '}
							</p>
						</div>
						<div onClick={() => setExpanded(!isExpanded)} className="lg_hidden">
							<button className="font-bold text-blue-800">View More {!isExpanded ? '+' : '-'}</button>
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
