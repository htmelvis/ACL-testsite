import React from 'react';
import { Link } from 'react-router-dom'

const TitleHeader = props => (
	<div className="w-full">
		<header className="relative w-full pb-4">
			<div className="short-header-bg text-white object-cover w-full">
				<div className="container w-5--6 mx-auto pt-8 ">
					<p className="text-white uppercase text-xs">Associated Clinical Labs</p>
					<h1 className=" font-bold text-3xl uppercase">{props.title}</h1>
					<p className="text-white text-sm lg_w-2--3">
						Northwestern Pennsylvania’s leading provider of diagnostic testing, information and services
					</p>
				</div>
			</div>
			<img src="/images/hero-wave.png" className="wave w-full absolute" alt="ACL Hero Wave" />
		</header>
	</div>
);

export default TitleHeader;
