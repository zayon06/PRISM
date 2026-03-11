'use client';
import { useTheme } from 'next-themes';
import { ThemeSwitcher } from '@/components/kibo-ui/theme-switcher';

const ThemeSwitcherWrapper = () => {
	const { setTheme } = useTheme();
	return (
		<div className=''>
			<ThemeSwitcher onChange={(theme) => setTheme(theme)} />
		</div>
	);
};

export default ThemeSwitcherWrapper;
