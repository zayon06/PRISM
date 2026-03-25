import { ProjectTopbar } from '@/components/block/project-topbar';
import { ProjectHeader } from '@/components/block/project-header';
import { ProjectTaskEngine } from '@/components/block/project-task-engine';
import { ProjectKanbanBoard } from '@/components/block/project-kanban-board';
import { ProjectTalentVelocity } from '@/components/block/project-talent-velocity';

export default function ProjectPageTemplate() {
	return (
		<>
			<ProjectTopbar />
			<div className='flex flex-col gap-10 p-6 lg:p-8 xl:px-12'>
				{/* Header */}
				<ProjectHeader />

				{/* Task Engine */}
				<ProjectTaskEngine />

				{/* Kanban Board */}
				<ProjectKanbanBoard />

				{/* Talent Velocity */}
				<ProjectTalentVelocity />
			</div>
		</>
	);
}
