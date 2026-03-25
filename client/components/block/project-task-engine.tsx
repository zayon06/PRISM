import { LayoutTemplate, ChevronDown, Plus } from 'lucide-react';

export function ProjectTaskEngine() {
	return (
		<div className='flex flex-col rounded-lg border border-white/5 bg-white/[0.02]'>
			{/* Header */}
			<div className='flex items-center gap-2 border-b border-white/5 px-5 py-3.5'>
				<LayoutTemplate className='size-4 text-primary-container' />
				<span className='text-[10px] font-black tracking-[0.15em] text-white uppercase'>
					Task Engine
				</span>
			</div>

			{/* Filters Row */}
			<div className='grid grid-cols-1 gap-6 p-5 sm:grid-cols-2 lg:grid-cols-4'>
				{/* Operation Title */}
				<div className='flex flex-col gap-2'>
					<label className='text-[9px] font-bold tracking-[0.1em] text-muted-foreground uppercase'>
						Operation Title
					</label>
					<input
						type='text'
						placeholder='Task description...'
						className='h-9 rounded border border-white/10 bg-white/5 px-3 text-xs text-white placeholder:text-muted-foreground focus:border-primary-container/40 focus:outline-none'
					/>
				</div>

				{/* Category */}
				<div className='flex flex-col gap-2'>
					<label className='text-[9px] font-bold tracking-[0.1em] text-muted-foreground uppercase'>
						Category
					</label>
					<div className='relative'>
						<select className='h-9 w-full appearance-none rounded border border-white/10 bg-white/5 pl-3 pr-8 text-xs text-white focus:border-primary-container/40 focus:outline-none'>
							<option value='micro-internship'>Micro-internship</option>
							<option value='bounty'>Bounty</option>
							<option value='mentorship'>Mentorship</option>
						</select>
						<ChevronDown className='pointer-events-none absolute right-3 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground' />
					</div>
				</div>

				{/* Scope */}
				<div className='flex flex-col gap-2'>
					<label className='text-[9px] font-bold tracking-[0.1em] text-muted-foreground uppercase'>
						Scope
					</label>
					<input
						type='text'
						placeholder='Estimated hours'
						className='h-9 rounded border border-white/10 bg-white/5 px-3 text-xs text-white placeholder:text-muted-foreground focus:border-primary-container/40 focus:outline-none'
					/>
				</div>

				{/* Primary Assets */}
				<div className='flex flex-col gap-2'>
					<label className='text-[9px] font-bold tracking-[0.1em] text-muted-foreground uppercase'>
						Primary Assets
					</label>
					<button className='flex h-9 w-32 items-center justify-center gap-1.5 rounded border border-white/10 bg-white/5 px-3 text-[10px] font-bold tracking-wider text-muted-foreground uppercase transition-colors hover:bg-white/10 hover:text-white'>
						<Plus className='size-3' />
						Add Skill
					</button>
				</div>
			</div>
		</div>
	);
}
