import React from 'react';
import Image from 'next/image';

const EnterpriseUseCases = () => {
    return (
        <section className="px-8 max-w-7xl mx-auto mt-32">
            <div className="mb-16 text-center">
                <h2 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500 mb-4">Operational Impact</h2>
                <h3 className="text-3xl font-bold text-white tracking-tight">Enterprise Use Cases</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
                {/* Case 1: Strategic Right-Sizing */}
                <div className="md:col-span-8 relative group overflow-hidden bg-slate-900 border border-white/5">
                    <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity">
                        <Image 
                            alt="Data visualization" 
                            className="w-full h-full object-cover" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAybRvmn4Gv6u7F6Ml_yauPRR6NMV3vVu8jK0O88r73BhV-4ytmAk-eigmjB1w1iNtEktJxNhMt46Khx8mdHJMnEoe_N3QvyIJltVy8P89-tfnVb6CGiEgMC0xQ14tzCXQiKLE_CBA9nHCQ2AzypGZwL8zz9Q-p_YGUgYVNILvdXtlV7Y68fxYogH-UzHqv9XvKhwQlAimstoLxo2dlX8qUR5zbm8dVlBf3P4hYu20bwRFQ-3j7Z6GXINfMeiQIpCuQDJzbJtMACcQ"
                            fill
                            sizes="(max-width: 768px) 100vw, 66vw"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-10">
                        <h4 className="text-2xl font-black text-white mb-3 text-shadow-md">Strategic Right-Sizing</h4>
                        <p className="text-slate-300 max-w-md text-sm font-light">Eliminate redundancies and optimize headcount distribution through architectural workload analysis.</p>
                    </div>
                    <div className="absolute top-8 right-8">
                        <span className="px-4 py-1 text-[10px] font-bold tracking-widest border border-primary text-primary bg-primary/5 uppercase">Active Protocol</span>
                    </div>
                </div>
                {/* Case 2: High-Potential Identification */}
                <div className="md:col-span-4 relative group overflow-hidden bg-slate-900 border border-white/5">
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-[120px] text-white/10">psychology</span>
                    </div>
                    <div className="p-10 h-full flex flex-col justify-end relative z-10">
                        <h4 className="text-2xl font-black text-white mb-3">High-Potential ID</h4>
                        <p className="text-slate-300 text-sm font-light">Identify "hidden" talent hubs within your organization using behavioral velocity data.</p>
                    </div>
                </div>
                {/* Case 3: Global Workforce Visibility */}
                <div className="md:col-span-4 relative group overflow-hidden bg-slate-900 border border-white/5">
                    <div className="p-10 h-full flex flex-col justify-end relative z-10">
                        <h4 className="text-2xl font-black text-white mb-3">Global Visibility</h4>
                        <p className="text-slate-300 text-sm font-light">Unify disparate HR data into a single, high-fidelity command center for global decision making.</p>
                    </div>
                    <div className="absolute top-10 left-10">
                        <span className="material-symbols-outlined text-primary text-4xl">language</span>
                    </div>
                </div>
                {/* Decorative Static */}
                <div className="md:col-span-8 bg-slate-900/50 border border-white/5 p-10 flex items-center justify-center relative overflow-hidden">
                    <div className="text-center z-10">
                        <h5 className="text-4xl font-black text-white/5 tracking-[0.2em] mb-4">OPERATIONAL EFFICIENCY</h5>
                        <p className="text-primary text-[10px] font-bold uppercase tracking-[0.5em]">+42% DATA RESOLUTION</p>
                    </div>
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EnterpriseUseCases;
