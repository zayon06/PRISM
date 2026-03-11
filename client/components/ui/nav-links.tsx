import React from 'react';
import Link from 'next/link';
import { NavLinksProps } from '@/types/navbar';

const NavLinks = ({ href, label }: NavLinksProps) => {
	return (
		<div>
			<Link
				href={href}
				className='text-white text-[14px] leading-5 font-medium'
			>
				{label}
			</Link>
		</div>
	);
};

export default NavLinks;
