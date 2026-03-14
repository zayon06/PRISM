import React from 'react';
import NavLinks from './nav-links';
import { NavLinksProps } from '@/types/navbar';

const linksData: NavLinksProps[] = [
	{
		label: 'Platform',
		href: './platform',
	},
	{
		label: 'Intelligence',
		href: './intelligence',
	},
	{
		label: 'Solution',
		href: './solution',
	},
	{
		label: 'Pricing',
		href: './pricing',
	},
	{
		label: 'Blog',
		href: './blog',
	},
];

const NavbarLink = () => {
	return (
		<div className='hidden md:flex gap-7 items-center'>
			{linksData.map((items) => (
				<NavLinks key={items.label} href={items.href} label={items.label} />
			))}
		</div>
	);
};

export default NavbarLink;
