'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import StarsBackground from '@/components/ui/stars-background';

const LandingHero = () => {
    return (
        <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-black">
            {/* Interactive Stars Background */}
            <StarsBackground />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" as const }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Next-Gen Talent Intelligence
                    </div>
                    <h1 className="text-6xl md:text-7xl font-black leading-[1.1] tracking-tight text-white">
                        The Future of <span className="text-primary">AI Talent</span> Intelligence
                    </h1>
                    <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
                        Revolutionize your hiring workflow with deep charcoal aesthetics and electric blue precision. Experience the next generation of SaaS talent management powered by neural matching.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-primary/30"
                        >
                            Start Free Trial
                        </motion.button>
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all backdrop-blur-sm"
                        >
                            View Product Tour
                        </motion.button>
                    </div>
                    <div className="flex items-center gap-6 pt-8 grayscale opacity-50 text-white">
                        <p className="text-sm font-bold uppercase tracking-widest text-slate-500">Trusted by</p>
                        <span className="material-symbols-outlined text-3xl">token</span>
                        <span className="material-symbols-outlined text-3xl">deployed_code</span>
                        <span className="material-symbols-outlined text-3xl">shield_with_heart</span>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="relative"
                >
                    <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full pointer-events-none"></div>
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] group">
                        <Image 
                            alt="Futuristic glowing digital brain and network infrastructure" 
                            className="object-cover transition-transform duration-700 group-hover:scale-110" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBztcWUPXCwIdsO3CkH50rr1pYTM4VkmMT2czmfhttmGV3Ii2sFrI1juTt-PyCw-1Mg5nv355MuHYL71m5ezW3COzKFMnvPfwzdPmiiAtDLlXKvkODlVW7FHOYjaz9b9c9UBm_hKUWtz9lxTer7WnUKyi1vW16PK9ml7moPc6KK7jNKWHCA4AGeoQ4uTcrzZQ7-W2mgWE2My5kHqO_GR8MgtRHL5rMZ_i4lcoMUgUj323FX6oMVJN7QxnOik9_CiSp2dH4vOzVhY24"
                            fill 
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LandingHero;
