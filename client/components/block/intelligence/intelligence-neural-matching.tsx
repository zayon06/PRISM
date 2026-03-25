'use client';

import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

const IntelligenceNeuralMatching = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    
    // Mouse position relative to the container center
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth physics for the followers
    const springConfig = { damping: 25, stiffness: 150 };
    const smoothedX = useSpring(mouseX, springConfig);
    const smoothedY = useSpring(mouseY, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Normalize mouse position from -0.5 to 0.5
        mouseX.set((e.clientX - centerX) / rect.width);
        mouseY.set((e.clientY - centerY) / rect.height);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <section className="py-24 px-8 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <div>
                        <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2 block">Proprietary Algorithms</span>
                        <h2 className="text-4xl font-bold text-white tracking-tight font-headline h-10">
                            Neural Matching & <br/>Predictive Analytics
                        </h2>
                    </div>
                    <p className="text-slate-400 leading-relaxed text-lg pt-12">
                        Our proprietary Neural Matching engine doesn't just look for keywords; it understands technical proficiency through contextual vector mapping. By analyzing over 400 data points per individual, we predict performance outcomes with 94% accuracy.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-6 border border-white/5 bg-[#111] rounded-lg group hover:border-primary/50 transition-all cursor-crosshair">
                            <div className="text-primary mb-2 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined" aria-hidden="true">hub</span>
                            </div>
                            <div className="text-white font-bold mb-1">Vector Mapping</div>
                            <div className="text-xs text-slate-500">Context-aware skill extraction from unstructured data.</div>
                        </div>
                        <div className="p-6 border border-white/5 bg-[#111] rounded-lg group hover:border-primary/50 transition-all cursor-crosshair">
                            <div className="text-primary mb-2 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined" aria-hidden="true">trending_up</span>
                            </div>
                            <div className="text-white font-bold mb-1">Outcome Prediction</div>
                            <div className="text-xs text-slate-500">Forecasting 12-month tenure success rates.</div>
                        </div>
                    </div>
                </div>
                
                <div 
                    ref={containerRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="relative aspect-square bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden p-8 flex items-center justify-center cursor-none group/radar"
                >
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                    
                    {/* Visualizer Background Lines */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                        <div className="w-[1px] h-full bg-primary/20"></div>
                        <div className="h-[1px] w-full bg-primary/20 absolute"></div>
                    </div>

                    {/* Concentric Circles (Indicated by user as interactive) */}
                    <motion.div 
                        style={{ x: useTransform(smoothedX, x => x * 20), y: useTransform(smoothedY, y => y * 20) }}
                        className="relative w-full h-full flex items-center justify-center"
                    >
                        {/* Outer Ring */}
                        <motion.div 
                            style={{ scale: useTransform(smoothedX, x => 1 + Math.abs(x) * 0.1) }}
                            className="absolute w-[90%] h-[90%] border border-primary/10 rounded-full"
                        />
                        
                        {/* Middle Ring */}
                        <div className="w-[70%] h-[70%] border border-primary/20 rounded-full flex items-center justify-center p-8 relative">
                             {/* Rotating Node on Middle Ring */}
                             <motion.div 
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0"
                             >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full shadow-[0_0_15px_rgba(13,166,242,0.8)]"></div>
                             </motion.div>
                             
                            {/* Inner Ring */}
                            <div className="w-full h-full border border-primary/40 rounded-full flex items-center justify-center p-8 relative">
                                <div className="w-full h-full border border-primary/60 rounded-full flex items-center justify-center bg-primary/5">
                                    <motion.span 
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                        className="material-symbols-outlined text-primary text-5xl" 
                                        aria-hidden="true" 
                                        style={{ fontVariationSettings: "'FILL' 1" }}
                                    >
                                        insights
                                    </motion.span>
                                </div>
                            </div>
                        </div>

                        {/* Mouse Follower Node */}
                        <motion.div 
                            style={{ 
                                x: useTransform(smoothedX, x => x * 400), 
                                y: useTransform(smoothedY, y => y * 400),
                                opacity: useTransform(smoothedX, x => Math.abs(x) > 0 || Math.abs(mouseX.get()) > 0 ? 1 : 0)
                            }}
                            className="absolute w-4 h-4 bg-white rounded-full shadow-[0_0_20px_white] z-20 pointer-events-none"
                        />

                        {/* Indicated Elements (Reactive Nodes) */}
                        <motion.div 
                            style={{ x: useTransform(smoothedX, x => x * -60), y: useTransform(smoothedY, y => y * -60) }}
                            className="absolute top-1/4 left-1/4 w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                        />
                        <motion.div 
                            style={{ x: useTransform(smoothedX, x => x * -90), y: useTransform(smoothedY, y => y * -90) }}
                            className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(13,166,242,0.5)]"
                        />
                    </motion.div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/5 pointer-events-none"></div>
                </div>
            </div>
        </section>
    );
};

export default IntelligenceNeuralMatching;
