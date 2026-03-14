import React from 'react';
import NavbarLogo from '../ui/navbar-logo';
import NavbarButtons from '../ui/navbar-buttons';
import NavbarLinks from '../ui/navbar-links';

const Navbar = () => {
	return (
		<nav className='flex justify-between items-center bg-linear-to-r from-[#4f2099] via-[#6637bd] to-[#8152e7] px-4 py-4'>
			<NavbarLogo />
			<NavbarLinks />
			<NavbarButtons />
		</nav>
	);
};

export default Navbar;
