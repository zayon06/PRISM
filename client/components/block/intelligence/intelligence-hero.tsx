'use client';

import React from 'react';
import { motion } from 'motion/react';
import StarsBackground from '@/components/ui/stars-background';

const IntelligenceHero = () => {
    return (
        <section className="relative min-h-[716px] flex flex-col items-center justify-center px-8 overflow-hidden pt-24 bg-black">
            {/* Interactive Stars Background */}
            <StarsBackground />

            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full"></div>
            </div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" as const }}
                className="relative z-10 text-center max-w-4xl"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Neural Engine v4.0 Active</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-[0.9] font-headline">
                    The Core of <br/>Talent Clarity.
                </h1>
                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    Beyond simple analytics. PRISM Intelligence leverages architectural neural networks to decode the complex DNA of high-performance organizations.
                </p>
            </motion.div>
        </section>
    );
};

export default IntelligenceHero;
