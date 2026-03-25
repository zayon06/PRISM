import { MoreHorizontal, MessageSquare, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Types ---
type CardType = 'backlog' | 'active' | 'review' | 'completed';

interface TaskCardProps {
	id: string;
	type: CardType;
	title: string;
	tagLabel: string;
	tagColor: string;
	description?: string;
	progress?: number;
	assignee?: { initials: string; name?: string };
	comments?: number;
	date?: string;
	actionLabel?: string;
}

// --- Dummy Data ---
const columns = [
	{
		id: 'backlog',
		title: 'Backlog',
		count: '03',
		dotColor: 'bg-white/20',
		cards: [
			{
				id: 't1',
				type: 'backlog' as CardType,
				tagLabel: 'Design',
				tagColor: 'text-primary-container',
				title: 'User Persona Development',
				description:
					'Refining user interaction protocols for Fintech tier-1.',
				assignee: { initials: 'T' },
				date: 'OCT 24',
			},
		],
	},
	{
		id: 'active',
		title: 'Active',
		count: '02',
		dotColor: 'bg-primary-container',
		cards: [
			{
				id: 't2',
				type: 'active' as CardType,
				tagLabel: 'Dev',
				tagColor: 'text-primary-container',
				title: 'API Documentation Sync',
				progress: 60,
				assignee: { initials: 'AJ', name: 'ALEX J.' },
				comments: 4,
			},
		],
	},
	{
		id: 'review',
		title: 'Review',
		count: '01',
		dotColor: 'bg-white/20',
		cards: [
			{
				id: 't3',
				type: 'review' as CardType,
				tagLabel: 'Legal',
				tagColor: 'text-muted-foreground',
				title: 'Contract Draft Review',
				actionLabel: 'Approve',
				assignee: { initials: 'R' },
			},
		],
	},
	{
		id: 'completed',
		title: 'Completed',
		count: '12',
		dotColor: 'bg-emerald-400',
		cards: [
			{
				id: 't4',
				type: 'completed' as CardType,
				tagLabel: 'Marketing',
				tagColor: 'text-emerald-400',
				title: 'Social Media Assets Prep',
			},
		],
	},
];

// --- Subcomponent ---
function KanbanCard({ card }: { card: TaskCardProps }) {
	return (
		<div
			className={cn(
				'flex flex-col gap-4 rounded border border-white/5 bg-white/[0.02] p-4 transition-colors hover:border-white/10',
				card.type === 'active' && 'border-l-2 border-l-primary-container'
			)}
		>
			{/* Tag & Menu */}
			<div className='flex items-center justify-between'>
				<span
					className={cn(
						'flex items-center gap-1.5 text-[9px] font-black tracking-wider uppercase',
						card.tagColor
					)}
				>
					{card.type === 'completed' && <CheckCircle2 className='size-3' />}
					{card.tagLabel}
				</span>
				{card.type !== 'completed' && (
					<button className='text-muted-foreground hover:text-white'>
						<MoreHorizontal className='size-4' />
					</button>
				)}
			</div>

			{/* Title & Desc */}
			<div>
				<h4 className='text-sm font-bold tracking-tight text-white'>
					{card.title}
				</h4>
				{card.description && (
					<p className='mt-2 text-[10px] italic leading-relaxed text-muted-foreground'>
						{card.description}
					</p>
				)}
			</div>

			{/* Progress Bar (Active) */}
			{card.progress !== undefined && (
				<div className='h-0.5 w-full bg-white/10'>
					<div
						className='h-full bg-primary-container'
						style={{ w: `${card.progress}%` }}
					/>
				</div>
			)}

			{/* Footer (Assignee, Date, Action, Comments) */}
			{(card.assignee || card.date || card.actionLabel) && (
				<div className='mt-2 border-t border-white/5 pt-3 flex items-center justify-between'>
					{/* Left part of footer */}
					<div className='flex items-center gap-2'>
						{card.assignee && (
							<div className='flex items-center gap-2'>
								<div
									className={cn(
										'flex size-5 items-center justify-center rounded-full bg-surface-container-high',
										card.type === 'backlog' && 'bg-emerald-900', // Just for visual demo
										card.type === 'active' && 'bg-[#fbdca7]',
										card.type === 'review' && 'bg-[#eecda3]'
									)}
								>
									{card.type === 'active' ? (
										<img
											src={`https://api.dicebear.com/7.x/notionists/svg?seed=${card.assignee.initials}`}
											alt='avatar'
											className='size-4 rounded-full'
										/>
									) : (
										<span className='text-[8px] font-bold text-white'>
											{card.type === 'backlog' ? '+2' : card.assignee.initials}
										</span>
									)}
								</div>
								{card.assignee.name && (
									<span className='text-[9px] font-bold tracking-wider text-muted-foreground uppercase'>
										{card.assignee.name}
									</span>
								)}
							</div>
						)}

						{card.actionLabel && (
							<button className='text-[10px] font-black tracking-wider text-primary-container uppercase hover:underline'>
								{card.actionLabel}
							</button>
						)}
					</div>

					{/* Right part of footer */}
					<div className='flex items-center gap-2'>
						{card.date && (
							<span className='text-[9px] font-bold tracking-wider text-muted-foreground uppercase'>
								{card.date}
							</span>
						)}
						{card.comments !== undefined && (
							<div className='flex items-center gap-1 text-[9px] font-bold text-primary-container'>
								<MessageSquare className='size-3' />
								{card.comments}
							</div>
						)}
					</div>
				</div>
			)}
		</div>
	);
}

// --- Main Component ---
export function ProjectKanbanBoard() {
	return (
		<div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4'>
			{columns.map((col) => (
				<div key={col.id} className='flex flex-col gap-4'>
					{/* Column Header */}
					<div className='flex items-center justify-between border-b border-white/5 pb-2'>
						<div className='flex items-center gap-2'>
							<div className={cn('size-1.5 rounded-full', col.dotColor)} />
							<span
								className={cn(
									'text-[10px] font-black tracking-[0.15em] uppercase',
									col.id === 'active' || col.id === 'completed'
										? col.dotColor.replace('bg-', 'text-')
										: 'text-muted-foreground'
								)}
							>
								{col.title}
							</span>
						</div>
						<span className='text-[10px] tracking-wider text-muted-foreground'>
							{col.count}
						</span>
					</div>

					{/* Column Cards */}
					<div className='flex flex-col gap-3'>
						{col.cards.map((card) => (
							<KanbanCard key={card.id} card={card} />
						))}
					</div>
				</div>
			))}
		</div>
	);
}
