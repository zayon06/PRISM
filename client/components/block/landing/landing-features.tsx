'use client';

import React from 'react';
import { motion } from 'motion/react';

const LandingFeatures = () => {
    const features = [
        {
            icon: 'psychology',
            title: 'Neural Matching',
            description: 'Precision candidate matching using advanced neural networks that understand context beyond keywords.',
            highlight: false
        },
        {
            icon: 'insights',
            title: 'Predictive Analytics',
            description: 'Data-driven insights to forecast hiring needs, retention risks, and market-wide talent trends.',
            highlight: true
        },
        {
            icon: 'rocket_launch',
            title: 'Automated Sourcing',
            description: 'Streamlined sourcing across multiple platforms instantly with autonomous agent exploration.',
            highlight: false
        }
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="py-24 px-6 relative bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20 space-y-4"
                >
                    <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Capabilities</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-white">Intelligent Features</h3>
                    <p className="text-slate-400 max-w-2xl mx-auto">Cutting-edge AI tools designed for modern recruitment teams to scale human potential with machine precision.</p>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {features.map((feature, idx) => (
                        <motion.div 
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className={`p-10 rounded-2xl transition-all group border ${
                                feature.highlight 
                                ? 'bg-primary/5 border-primary/40 shadow-lg shadow-primary/10' 
                                : 'bg-white/5 border-white/5 hover:border-white/20'
                            }`}
                        >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ${
                                feature.highlight ? 'bg-primary text-white shadow-lg shadow-primary/40' : 'bg-primary/20 text-primary'
                            }`}>
                                <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                            </div>
                            <h4 className="text-xl font-bold mb-4 text-white">{feature.title}</h4>
                            <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default LandingFeatures;
