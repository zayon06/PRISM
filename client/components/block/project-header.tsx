import { Plus } from 'lucide-react';

export function ProjectHeader() {
	return (
		<div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
			<div>
				<h1 className='text-3xl font-black italic tracking-tight text-white uppercase md:text-4xl'>
					Project Board
				</h1>
				<p className='mt-1 text-xs font-semibold tracking-wide text-muted-foreground'>
					Operational oversight for micro-internships and skill development.
				</p>
			</div>
			<button className='flex items-center gap-2 rounded bg-primary-container px-6 py-2.5 text-[11px] font-black tracking-[0.1em] text-surface-dim uppercase transition-colors hover:bg-primary-container/90'>
				<Plus className='size-4' />
				Initiate Task
			</button>
		</div>
	);
}
