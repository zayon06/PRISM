'use client';

import React from 'react';
import { motion } from 'motion/react';
import StarsBackground from '@/components/ui/stars-background';

const SolutionsHero = () => {
    return (
        <section className="relative min-h-[716px] flex items-center px-8 bg-black overflow-hidden">
            {/* Interactive Stars Background */}
            <StarsBackground />

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" as const }}
                    className="w-full md:w-3/4"
                >
                    <div className="inline-block px-3 py-1 mb-6 border border-white/10 bg-white/5 rounded-sm">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">Strategic Infrastructure</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-8">
                        Refracting Data into Strategic Advantage.
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl font-light leading-relaxed mb-10">
                        High-stakes organizational intelligence designed for elite technical leadership. Deploy PRISM to map, measure, and optimize your human capital architecture.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white text-black font-black uppercase text-xs tracking-widest hover:bg-slate-200 transition-colors"
                        >
                            Request Briefing
                        </motion.button>
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 border border-white/10 bg-white/5 text-white font-black uppercase text-xs tracking-widest hover:bg-white/10 transition-colors"
                        >
                            View Ecosystem
                        </motion.button>
                    </div>
                </motion.div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full opacity-20 pointer-events-none">
                <div className="w-full h-full bg-gradient-to-l from-primary/20 to-transparent blur-3xl"></div>
            </div>
        </section>
    );
};

export default SolutionsHero;
