export function IntelligenceHeader() {
	return (
		<div className='flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between'>
			{/* Left — Label + Title + Subtitle */}
			<div className='max-w-2xl'>
				<div className='mb-2 flex items-center gap-2'>
					<div className='h-px w-6 bg-primary-container' />
					<span className='text-[10px] font-bold tracking-[0.15em] text-red-400 uppercase'>
						Intelligence Hub
					</span>
				</div>
				<h2 className='text-3xl font-black tracking-tight text-white uppercase md:text-4xl'>
					Risk Monitor
				</h2>
				<p className='mt-2 text-sm leading-relaxed text-muted-foreground'>
					Real-time attrition modeling and executive succession
					intelligence for global leadership assets.
				</p>
			</div>

			{/* Right — Actions */}
			<div className='flex items-center gap-2'>
				<button className='h-9 rounded-md border border-white/20 bg-transparent px-5 text-xs font-bold tracking-wider text-white uppercase transition-colors hover:bg-white/10'>
					New Report
				</button>
				<button className='h-9 rounded-md border border-white/20 bg-transparent px-5 text-xs font-bold tracking-wider text-white uppercase transition-colors hover:bg-white/10'>
					Filter
				</button>
			</div>
		</div>
	);
}
