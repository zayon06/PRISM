import React from 'react';

const VerticalArchitectures = () => {
    return (
        <section className="px-8 max-w-7xl mx-auto mt-32">
            <div className="mb-16">
                <h2 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500 mb-4">Vertical Architectures</h2>
                <h3 className="text-3xl font-bold text-white tracking-tight">Sector-Specific Solutions</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Talent Acquisition */}
                <div className="group p-8 bg-black/40 border border-white/5 hover:border-primary/50 transition-all duration-300">
                    <div className="mb-8">
                        <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 0" }}>diversity_3</span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-4">Talent Acquisition</h4>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">Advanced AI matching protocols that analyze cognitive fit and technical velocity beyond standard resume metrics.</p>
                    <div className="pt-6 border-t border-white/5 flex items-center justify-between group-hover:text-primary transition-colors">
                        <span className="text-[10px] font-bold uppercase tracking-widest">AI Matching</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </div>
                </div>
                {/* HR Operations */}
                <div className="group p-8 bg-black/40 border border-white/5 hover:border-primary/50 transition-all duration-300">
                    <div className="mb-8">
                        <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 0" }}>account_tree</span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-4">HR Operations</h4>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">Real-time skill mapping and dependency analysis to prevent operational bottlenecks in complex project cycles.</p>
                    <div className="pt-6 border-t border-white/5 flex items-center justify-between group-hover:text-primary transition-colors">
                        <span className="text-[10px] font-bold uppercase tracking-widest">Skill Mapping</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </div>
                </div>
                {/* Executive Leadership */}
                <div className="group p-8 bg-black/40 border border-white/5 hover:border-primary/50 transition-all duration-300">
                    <div className="mb-8">
                        <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 0" }}>shield_person</span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-4">Executive Leadership</h4>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">Strategic succession planning using predictive retention models and leadership trajectory forecasting.</p>
                    <div className="pt-6 border-t border-white/5 flex items-center justify-between group-hover:text-primary transition-colors">
                        <span className="text-[10px] font-bold uppercase tracking-widest">Succession Planning</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VerticalArchitectures;
