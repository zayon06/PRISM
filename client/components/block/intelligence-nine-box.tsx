import { cn } from '@/lib/utils';

interface BoxCell {
	label: string;
	highlight?: boolean;
	highlightColor?: string;
	avatars: { initials: string; hasBorder?: boolean }[];
}

const grid: BoxCell[][] = [
	// Row 1 (top) — High Potential
	[
		{ label: 'Enigma', avatars: [{ initials: 'JD' }] },
		{ label: 'High Potential', avatars: [{ initials: 'MK' }, { initials: 'SL' }] },
		{
			label: 'Asset Tier 1: Star',
			highlight: true,
			highlightColor: 'border-primary-container/40 bg-primary-container/5',
			avatars: [{ initials: 'AK', hasBorder: true }, { initials: 'RM', hasBorder: true }],
		},
	],
	// Row 2 (middle)
	[
		{ label: 'Dilemma', avatars: [] },
		{
			label: 'Core Player',
			avatars: [{ initials: 'TW' }, { initials: 'JP' }, { initials: 'LK' }],
		},
		{ label: 'High Professional', avatars: [{ initials: 'AB' }] },
	],
	// Row 3 (bottom) — Low Potential
	[
		{
			label: 'Performance Risk',
			highlight: true,
			highlightColor: 'border-rose-500/30 bg-rose-500/5',
			avatars: [{ initials: 'DG', hasBorder: true }],
		},
		{ label: 'Effective', avatars: [] },
		{ label: 'Trusted', avatars: [] },
	],
];

export function IntelligenceNineBox() {
	return (
		<div className='flex flex-col rounded-lg border border-white/5 bg-white/[0.02]'>
			{/* Header */}
			<div className='flex flex-wrap items-center justify-between border-b border-white/5 px-5 py-3.5'>
				<div className='flex items-center gap-3'>
					<span className='text-[10px] font-black tracking-[0.15em] text-white uppercase'>
						Asset Calibration
					</span>
					<span className='text-[10px] font-semibold tracking-wider text-muted-foreground uppercase'>
						9-Box Analysis
					</span>
				</div>
				<span className='text-[10px] tracking-wider text-muted-foreground'>
					Calibrated: 10:45 AM
				</span>
			</div>

			{/* Grid */}
			<div className='relative flex p-5'>
				{/* Vertical "POTENTIAL" Label */}
				<div className='mr-3 hidden items-center md:flex'>
					<span
						className='text-[9px] font-bold tracking-[0.2em] text-muted-foreground/40 uppercase'
						style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}
					>
						Potential
					</span>
				</div>

				{/* 3x3 Grid */}
				<div className='grid flex-1 grid-cols-3 gap-px overflow-hidden rounded-md bg-white/5'>
					{grid.flat().map((cell, i) => (
						<div
							key={i}
							className={cn(
								'flex min-h-28 flex-col justify-between bg-surface-dim p-3 lg:min-h-32',
								cell.highlight && cell.highlightColor
							)}
						>
							<span
								className={cn(
									'text-[9px] font-bold tracking-[0.12em] uppercase',
									cell.highlight &&
										cell.highlightColor?.includes('primary')
										? 'text-primary-container'
										: cell.highlight &&
											  cell.highlightColor?.includes('rose')
											? 'text-rose-400'
											: 'text-muted-foreground'
								)}
							>
								{cell.label}
							</span>

							{/* Avatars */}
							{cell.avatars.length > 0 && (
								<div className='mt-2 flex gap-1.5'>
									{cell.avatars.map((av, j) => (
										<div
											key={j}
											className={cn(
												'flex size-8 items-center justify-center rounded-full text-[10px] font-bold',
												av.hasBorder
													? 'bg-surface-container-high text-white ring-1 ring-white/20'
													: 'bg-surface-container-high text-muted-foreground'
											)}
										>
											{av.initials}
										</div>
									))}
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
