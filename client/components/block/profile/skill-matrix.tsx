import React from 'react';
import SkillCard from './skill-card';

interface Skill {
    id: string;
    name: string;
    description: string;
    level: string;
    percentage: number;
    type: 'verified' | 'inferred' | 'self-declared';
    category: string;
}

interface SkillMatrixProps {
    skills: Skill[];
    onAddSkill: () => void;
}

const SkillMatrix = ({ skills, onAddSkill }: SkillMatrixProps) => {
    const categories = Array.from(new Set(skills.map(s => s.category)));

    return (
        <div className="bg-[#111] rounded-2xl p-6 border border-white/5 shadow-sm transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2 text-white transition-colors duration-300">
                    <span className="material-symbols-outlined text-primary">tactic</span> Skill Matrix
                </h2>
                <div className="flex gap-2">
                    <button className="text-xs bg-white/5 p-2 rounded hover:bg-primary/10 hover:text-primary transition-all text-slate-400">
                        <span className="material-symbols-outlined text-base">filter_list</span>
                    </button>
                    <button onClick={onAddSkill} className="text-xs bg-white/5 p-2 rounded hover:bg-primary/10 hover:text-primary transition-all text-slate-400">
                        <span className="material-symbols-outlined text-base">add</span>
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="text-xs font-bold uppercase tracking-wide">Verified</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/70">
                    <span className="material-symbols-outlined text-lg">auto_awesome</span>
                    <span className="text-xs font-bold uppercase tracking-wide">Inferred</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/70">
                    <span className="material-symbols-outlined text-lg">person</span>
                    <span className="text-xs font-bold uppercase tracking-wide">Self-Declared</span>
                </div>
            </div>
            <div className="space-y-8">
                {categories.map(category => (
                    <div key={category}>
                        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">{category}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {skills.filter(s => s.category === category).map(skill => (
                                <SkillCard 
                                    key={skill.id}
                                    name={skill.name}
                                    description={skill.description}
                                    level={skill.level}
                                    percentage={skill.percentage}
                                    type={skill.type}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <button 
                onClick={onAddSkill}
                className="w-full mt-8 py-3 border-2 border-dashed border-white/5 rounded-xl text-slate-500 hover:text-primary hover:border-primary/50 transition-all font-medium flex items-center justify-center gap-2"
            >
                <span className="material-symbols-outlined">add_circle</span> Add New Skill Assessment
            </button>
        </div>
    );
};

export default SkillMatrix;
