import React from 'react';

const Hero = props => (
	<section className="cd-hero js-cd-hero js-cd-autoplay relative">
		<ul className="cd-hero__slider">
			<li className="cd-hero__slide cd-hero__slide--video js-cd-slide cd-hero__slide--selected cd-hero__slide--from-right">
				<div className="cd-hero__content cd-hero__content--full-width">
					<div className="content-container p-6 pl-0 pb-0 container">
						<p className="text-white text-base uppercase leading-none mb-1">Welcome to</p>
						<h2 className="text-white font-bold text-3xl leading-none mt-1">Associated Clinical Labs</h2>
						<p className="text-white text-lg mt-4 leading-6">
							Northwestern Pennsylvania’s leading provider of diagnostic testing, information and services
						</p>
					</div>
				</div>

				<div className="cd-hero__content cd-hero__content--bg-video js-cd-bg-video" data-video="assets/video">
					<img src="/images/bg-colored.png" className="bg-image object-cover" />
				</div>
			</li>
		</ul>
		<img src="/images/hero-wave.svg" className="wave w-full absolute" alt="ACL Hero Wave" />
	</section>
);

export default Hero;
