import { cn } from '@/lib/utils';

interface VelocityWorker {
	name: string;
	role: string;
	initials: string;
	avatarColor: string;
	task: string;
	symmetry: number; // 0 to 5
	state: string;
	stateColor: string;
}

const workers: VelocityWorker[] = [
	{
		name: 'Maria Garcia',
		role: 'Micro-Intern',
		initials: 'MG',
		avatarColor: 'bg-[#fbdca7]', // For demo purposes, flat color
		task: 'Market Research Analysis',
		symmetry: 4,
		state: 'On Schedule',
		stateColor: 'bg-primary-container/20 text-primary-container',
	},
	{
		name: 'Jordan Smith',
		role: 'Skill Lab Student',
		initials: 'JS',
		avatarColor: 'bg-[#eecda3]',
		task: 'UI Accessibility Audit',
		symmetry: 5,
		state: 'Optimal',
		stateColor: 'bg-emerald-500/20 text-emerald-400',
	},
];

export function ProjectTalentVelocity() {
	return (
		<div className='flex flex-col gap-4'>
			{/* Header */}
			<div className='flex items-center justify-between'>
				<h2 className='text-base font-black italic tracking-wide text-white uppercase'>
					Talent Velocity
				</h2>
				<span className='text-[9px] font-bold tracking-[0.15em] text-muted-foreground uppercase'>
					Performance Audit • 7 Day Cycle
				</span>
			</div>

			{/* Table Container */}
			<div className='overflow-x-auto rounded-lg border border-white/5 bg-white/[0.02]'>
				<table className='w-full text-left'>
					{/* Table Head */}
					<thead>
						<tr className='border-b border-white/5 text-[9px] font-bold tracking-[0.15em] text-muted-foreground uppercase'>
							<th className='px-6 py-4 font-bold'>Specialist</th>
							<th className='px-6 py-4 font-bold'>Operation</th>
							<th className='px-6 py-4 font-bold'>Symmetry</th>
							<th className='px-6 py-4 font-bold'>State</th>
							<th className='px-6 py-4 text-right font-bold'>Protocol</th>
						</tr>
					</thead>

					{/* Table Body */}
					<tbody className='divide-y divide-white/5 text-xs text-muted-foreground'>
						{workers.map((worker) => (
							<tr
								key={worker.name}
								className='transition-colors hover:bg-white/[0.02]'
							>
								{/* Specialist */}
								<td className='px-6 py-4'>
									<div className='flex items-center gap-3'>
										<div
											className={cn(
												'flex size-8 items-center justify-center rounded-full',
												worker.avatarColor
											)}
										>
											<img
												src={`https://api.dicebear.com/7.x/notionists/svg?seed=${worker.initials}`}
												alt='avatar'
												className='size-6 rounded-full'
											/>
										</div>
										<div className='flex flex-col'>
											<span className='font-black tracking-wide text-white uppercase'>
												{worker.name}
											</span>
											<span className='text-[9px] tracking-wider uppercase'>
												{worker.role}
											</span>
										</div>
									</div>
								</td>

								{/* Operation */}
								<td className='px-6 py-4 text-[11px] font-semibold text-white'>
									{worker.task}
								</td>

								{/* Symmetry (Dots) */}
								<td className='px-6 py-4'>
									<div className='flex gap-1.5'>
										{[...Array(5)].map((_, i) => (
											<div
												key={i}
												className={cn(
													'size-1.5 rounded-full',
													i < worker.symmetry
														? 'bg-primary-container'
														: 'bg-white/10'
												)}
											/>
										))}
									</div>
								</td>

								{/* State (Pill) */}
								<td className='px-6 py-4'>
									<span
										className={cn(
											'rounded border border-white/5 px-2.5 py-1 text-[9px] font-black tracking-wider uppercase',
											worker.stateColor
										)}
									>
										{worker.state}
									</span>
								</td>

								{/* Protocol (Action Link) */}
								<td className='px-6 py-4 text-right'>
									<button className='text-[10px] font-black tracking-wider text-primary-container uppercase hover:underline'>
										Analyze
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
