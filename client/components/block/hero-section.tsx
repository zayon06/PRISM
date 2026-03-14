import React from 'react';
import HeroBannerSvg from '../ui/hero-banner-svg';
import HeroText from '../ui/hero-text';
import HeroImage from '../ui/hero-image';

// this was not tested for mobile responsiveness
const HeroSection = () => {
	return (
		<section className='relative'>
			<div className='grid grid-cols-1 md:grid-cols-2 items-center gap-7 bg-linear-to-r from-[#4f2099] via-[#6637bd] to-[#8152e7] px-4 pt-12 pb-24'>
				<HeroText />
				<HeroImage />
			</div>
			<HeroBannerSvg />
		</section>
	);
};

export default HeroSection;
