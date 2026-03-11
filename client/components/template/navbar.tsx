import React from 'react';
import NavbarButtonSection from '../block/navbar-button-section';
import NavbarLinksSection from '../block/navbar-links-section';
import NavbarLogoSection from '../block/navbar-logo-section';

const Navbar = () => {
	return (
		<div className='flex justify-between items-center bg-[#7C3AED] px-4 py-4'>
			<NavbarLogoSection />
			<NavbarLinksSection />
			<NavbarButtonSection />
		</div>
	);
};

export default Navbar;
