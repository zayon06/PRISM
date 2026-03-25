'use client';

import { Search, Bell, Settings } from 'lucide-react';
import { SidebarTrigger } from '@/components/ui/sidebar';

const tabs = [
	{ label: 'Strategic Overview', active: false },
	{ label: 'Project Board', active: true },
	{ label: 'Task Analysis', active: false },
];

export function ProjectTopbar() {
	return (
		<header className='flex h-12 items-center justify-between border-b border-white/5 bg-surface-dim px-4 lg:px-6'>
			{/* Left — Mobile trigger + Tabs */}
			<div className='flex items-center gap-4'>
				<SidebarTrigger className='text-muted-foreground md:hidden' />

				{/* Tabs */}
				<nav className='flex items-center gap-2'>
					{tabs.map((tab) => (
						<button
							key={tab.label}
							className={`px-3 py-1.5 text-[11px] font-bold tracking-wide transition-colors ${
								tab.active
									? 'text-primary-container'
									: 'text-muted-foreground hover:text-white'
							}`}
						>
							{tab.label}
						</button>
					))}
				</nav>
			</div>

			{/* Right — Search + Icons + Avatar */}
			<div className='flex items-center gap-4'>
				<div className='relative hidden sm:block'>
					<Search className='pointer-events-none absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground' />
					<input
						type='text'
						placeholder='Search operations...'
						className='h-8 w-48 rounded-md border border-white/10 bg-white/5 pl-8 pr-3 text-xs text-white placeholder:text-muted-foreground focus:border-primary-container/40 focus:outline-none lg:w-56'
					/>
				</div>
				<div className='flex items-center gap-2'>
					<button className='flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-white/5 hover:text-white'>
						<Bell className='size-4' />
					</button>
					<button className='flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-white/5 hover:text-white'>
						<Settings className='size-4' />
					</button>
				</div>
				<div className='flex size-8 items-center justify-center rounded-full bg-[#fbdca7]'>
					<span className='text-[10px] font-bold text-surface-dim'>
						<svg
							className='size-4'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
							/>
						</svg>
					</span>
				</div>
			</div>
		</header>
	);
}
