import { cn } from '@/lib/utils';

interface IntelStatCardProps {
	label: string;
	value: string;
	change: string;
	changeColor: string;
}

const stats: IntelStatCardProps[] = [
	{
		label: 'Workforce Baseline',
		value: '1,284',
		change: '+2.4%',
		changeColor: 'text-emerald-400',
	},
	{
		label: 'Critical Exposure',
		value: '42',
		change: '-5.2%',
		changeColor: 'text-rose-400',
	},
	{
		label: 'Readiness Index',
		value: '15%',
		change: 'Stable',
		changeColor: 'text-muted-foreground',
	},
];

export function IntelligenceStats() {
	return (
		<div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
			{stats.map((stat) => (
				<div
					key={stat.label}
					className='rounded-lg border border-white/5 bg-white/[0.02] p-5'
				>
					<span className='text-[10px] font-semibold tracking-[0.15em] text-muted-foreground uppercase'>
						{stat.label}
					</span>
					<div className='mt-2 flex items-baseline gap-2'>
						<span className='text-3xl font-black tracking-tight text-white'>
							{stat.value}
						</span>
						<span
							className={cn(
								'text-xs font-semibold',
								stat.changeColor
							)}
						>
							{stat.change}
						</span>
					</div>
				</div>
			))}
		</div>
	);
}
