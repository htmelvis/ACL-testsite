import React from 'react';
import Sidebar from '../components/partials/Sidebar';

const Careers = props => (
	<div className="main">
		<div className="container mx-auto flex">
			<div className="leader lg_w-2--3 sm_w-full">
				<p>
					ACL/CPI endeavors to make www.associatedclinicallabs.com accessible to any and all users. If you
					would like to contact us regarding the accessibility of our website or need assistance completing
					the application process, please contact Human Resources at <a href="tel:8144612415">814-461-2415</a>{' '}
					or via <a href="mailto:denise.m.dunbar@questdiagnostics.com">email</a>
				</p>
				<h3 className="text-blue-900 mb-4 font-bold text-2xl">View ACL Job Postings</h3>
				<p>
					<a
						target="_blank"
						href="http://associatedclinicallabs.hrmdirect.com/employment/job-openings.php?search=true&dept=-1&city=-1&state=-1"
					>
						Explore Career Opportunities
					</a>
				</p>
				<hr className="mt-4 mb-8" />

				<div>
					<img
						className="bg-white p-4 rounded-xl shadow-md float-left mr-4"
						src="images/Picture1.png"
						alt="ACL Dr. Richmond, MD FCAP"
					/>

					<blockquote className="text-xl text-blue-900 mb-4">
						“In the clinical Laboratory, we offer answers to diagnostic questions. Working in the clinical
						lab provides an opportunity to interact with our clinical colleagues and play an active role in
						patient care. At ACL, we perform much of our testing on hospital inpatients, placing us even
						closer to the front lines of medical decision-making.”
					</blockquote>
					<p className="font-bold text-gray-800">
						{' '}
						- <em>Dr. Richmond, MD FCAP </em>
					</p>
				</div>
				<hr className="mt-4 mb-8" />

				<p>
					ACL/CPI is an equal opportunity employer. Qualified applicants will receive consideration for
					employment without regard to race, color, religion, sex, sexual orientation, gender identity,
					national origin, disability or protected veteran status. For our EEO Policy Statement, please{' '}
					<a href="docs/Notice.pdf" target="_blank">
						click here
					</a>
					. If you'd like more information on your <a href="docs/eeo.pdf">EEO rights under the law</a>, please{' '}
					<a href="docs/eeo.pdf">click here</a>.
				</p>
				<hr className="mb-8 mt-4" />
				<h3 className="text-blue-900 mb-4 font-bold text-2xl">Questions, & Feedback</h3>
				<p>
					Please email the{' '}
					<a className="font-bold text-underline" href="mailto:admin@associatedclinicallabs.com">
						site administrator
					</a>{' '}
					to report broken links or pass along comments and questions. Comments and questions will be
					forwarded to the appropriate party for a response.
				</p>
			</div>
			<div className="lg_w-1--3 sm_w-full justify-center">
				<Sidebar />
			</div>
		</div>
	</div>
);

export default Careers;
