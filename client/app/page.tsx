'use client';
import { ThemeSwitcher } from '@/components/kibo-ui/theme-switcher';
import Navbar from '@/components/template/navbar';
import ThemeSwitcherWrapper from '@/components/ui/theme-switcher-wrapper';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function Home() {
	return (
		<div>
			<Navbar />
			<h1 className=''>a Blank canvas ready to be painted</h1>
		</div>
	);
}
