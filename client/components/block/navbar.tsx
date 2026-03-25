import React from 'react';
import NavbarLogo from '../ui/navbar-logo';
import NavbarButtons from '../ui/navbar-buttons';
import NavbarLinks from '../ui/navbar-links';

const Navbar = () => {
	return (
		<nav className='flex justify-between items-center bg-black px-4 py-4'>
			<NavbarLogo />
			<NavbarLinks />
			<NavbarButtons />
		</nav>
	);
};

export default Navbar;
