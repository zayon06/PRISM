import React from 'react';
import { cn } from '@/lib/utils';

interface SkillCardProps {
    name: string;
    description: string;
    level: string;
    percentage: number;
    type: 'verified' | 'inferred' | 'self-declared';
}

const SkillCard = ({ name, description, level, percentage, type }: SkillCardProps) => {
    const typeConfigs = {
        'verified': {
            icon: 'check_circle',
            colorClass: 'text-primary',
            barClass: 'bg-primary shadow-[0_0_8px_rgba(13,166,242,0.5)]',
            iconStyle: { fontVariationSettings: "'FILL' 1" }
        },
        'inferred': {
            icon: 'auto_awesome',
            colorClass: 'text-white/60',
            barClass: 'bg-primary/60',
            iconStyle: {}
        },
        'self-declared': {
            icon: 'person',
            colorClass: 'text-white/40',
            barClass: 'bg-primary/40',
            iconStyle: {}
        }
    };

    const config = typeConfigs[type] || typeConfigs['self-declared'];

    return (
        <div className="skill-card-hover border border-white/5 rounded-xl p-4 bg-[#111] flex flex-col justify-between group transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <p className="font-bold text-white transition-colors duration-300">{name}</p>
                    <p className="text-xs text-slate-500">{description}</p>
                </div>
                <span className={cn("material-symbols-outlined text-xl transition-colors duration-300", config.colorClass)} style={config.iconStyle}>
                    {config.icon}
                </span>
            </div>
            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                <div 
                    className={cn("h-full rounded-full transition-all duration-700 ease-out", config.barClass)} 
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
            <div className="flex justify-between mt-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                <span>{level}</span>
                <span className={cn("transition-colors duration-300", config.colorClass)}>{percentage}%</span>
            </div>
        </div>
    );
};

export default SkillCard;
