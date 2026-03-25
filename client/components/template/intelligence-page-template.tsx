import { IntelligenceTopbar } from '@/components/block/intelligence-topbar';
import { IntelligenceHeader } from '@/components/block/intelligence-header';
import { IntelligenceStats } from '@/components/block/intelligence-stats';
import { IntelligenceNineBox } from '@/components/block/intelligence-nine-box';
import { IntelligenceFlightRisk } from '@/components/block/intelligence-flight-risk';

export default function IntelligencePageTemplate() {
	return (
		<>
			<IntelligenceTopbar />
			<div className='flex flex-col gap-6 p-6 lg:p-8'>
				{/* Header */}
				<IntelligenceHeader />

				{/* Stats */}
				<IntelligenceStats />

				{/* 9-Box + Flight Risk */}
				<div className='grid grid-cols-1 gap-4 xl:grid-cols-[1fr_300px]'>
					<IntelligenceNineBox />
					<IntelligenceFlightRisk />
				</div>
			</div>
		</>
	);
}
