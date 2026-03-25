import { Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FlightRiskPerson {
	name: string;
	role: string;
	exposure: number;
	initials: string;
	tags: { label: string; color: string }[];
}

const risks: FlightRiskPerson[] = [
	{
		name: 'Elena Rodriguez',
		role: 'Cloud Architect',
		exposure: 92,
		initials: 'ER',
		tags: [
			{ label: 'Market Mismatch', color: 'bg-rose-500/20 text-rose-400 border-rose-500/30' },
			{ label: 'Tier 1 Asset', color: 'bg-white/5 text-muted-foreground border-white/10' },
		],
	},
	{
		name: 'Marcus Chen',
		role: 'UX Specialist',
		exposure: 88,
		initials: 'MC',
		tags: [
			{ label: 'Recent Leave', color: 'bg-rose-500/20 text-rose-400 border-rose-500/30' },
			{ label: 'Crucial Skill', color: 'bg-white/5 text-muted-foreground border-white/10' },
		],
	},
];

export function IntelligenceFlightRisk() {
	return (
		<div className='flex flex-col rounded-lg border border-white/5 bg-white/[0.02]'>
			{/* Header */}
			<div className='flex items-center justify-between border-b border-white/5 px-5 py-3.5'>
				<span className='text-[10px] font-black tracking-[0.15em] text-white uppercase'>
					Flight Risk Tracker
				</span>
				<button className='text-[10px] font-bold tracking-wider text-primary-container uppercase hover:underline'>
					Full Log
				</button>
			</div>

			{/* Risk Cards */}
			<div className='flex flex-col divide-y divide-white/5 p-3'>
				{risks.map((person) => (
					<div key={person.name} className='flex flex-col gap-3 py-3'>
						{/* Person Info */}
						<div className='flex items-center justify-between'>
							<div className='flex items-center gap-3'>
								<div className='relative'>
									<div className='flex size-10 items-center justify-center rounded-full bg-surface-container-high'>
										<span className='text-xs font-bold text-white'>
											{person.initials}
										</span>
									</div>
									{/* Red dot */}
									<div className='absolute -top-0.5 -right-0.5 size-2.5 rounded-full border border-surface-dim bg-rose-500' />
								</div>
								<div>
									<h4 className='text-xs font-bold tracking-wide text-white uppercase'>
										{person.name}
									</h4>
									<p className='text-[10px] tracking-wider text-muted-foreground uppercase'>
										{person.role}
									</p>
								</div>
							</div>
							<div className='text-right'>
								<span className='text-lg font-black text-rose-400'>
									{person.exposure}%
								</span>
								<p className='text-[9px] tracking-wider text-muted-foreground uppercase'>
									Exposure
								</p>
							</div>
						</div>

						{/* Tags */}
						<div className='flex items-center gap-2'>
							{person.tags.map((tag) => (
								<span
									key={tag.label}
									className={cn(
										'rounded border px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase',
										tag.color
									)}
								>
									{tag.label}
								</span>
							))}
							<button className='ml-auto text-muted-foreground hover:text-white'>
								<Shield className='size-3.5' />
							</button>
						</div>
					</div>
				))}
			</div>

			{/* Action */}
			<div className='px-3 pb-4'>
				<button className='w-full rounded-md border border-white/10 bg-white/[0.03] py-2.5 text-[10px] font-bold tracking-[0.15em] text-white uppercase transition-colors hover:bg-white/[0.06]'>
					Run Deep Analysis
				</button>
			</div>
		</div>
	);
}
