'use client';

import React from 'react';
import { motion } from 'motion/react';

const LandingPricing = () => {
    const plans = [
        {
            name: 'Starter',
            price: '$499',
            features: ['Up to 5 active jobs', 'Basic neural matching', 'Standard support'],
            highlight: false,
            cta: 'Choose Starter'
        },
        {
            name: 'Professional',
            price: '$1,299',
            priceHighlight: true,
            features: [
                'Unlimited active jobs', 
                'Advanced predictive analytics', 
                'Autonomous sourcing agents', 
                'Priority 24/7 support'
            ],
            highlight: true,
            cta: 'Start Free Trial',
            badge: 'Most Popular'
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            features: ['Custom model training', 'On-premise deployment', 'Dedicated success manager'],
            highlight: false,
            cta: 'Contact Sales'
        }
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as const }
        }
    };

    return (
        <section className="py-24 px-6 bg-black relative">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "linear" as const }}
                    className="text-center mb-16 space-y-4"
                >
                    <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Pricing Plans</h2>
                    <h3 className="text-4xl font-black text-white">Scalable Intelligence</h3>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-3 gap-8 items-stretch"
                >
                    {plans.map((plan, idx) => (
                        <motion.div 
                            key={idx}
                            variants={cardVariants}
                            whileHover={{ y: plan.highlight ? -5 : -10 }}
                            className={`p-8 rounded-2xl flex flex-col relative transition-all border ${
                                plan.highlight 
                                ? 'bg-primary/5 border-primary/50 shadow-2xl shadow-primary/10 scale-105 z-10' 
                                : 'bg-white/5 border-white/5 hover:border-white/10'
                            }`}
                        >
                            {plan.badge && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full z-20">
                                    {plan.badge}
                                </div>
                            )}

                            <div className="mb-8">
                                <h4 className="text-lg font-bold text-white">{plan.name}</h4>
                                <div className={`mt-4 flex items-baseline gap-1 ${plan.priceHighlight ? 'text-primary' : 'text-white'}`}>
                                    <span className="text-4xl font-black">{plan.price}</span>
                                    {plan.price !== 'Custom' && <span className="text-slate-500">/mo</span>}
                                </div>
                            </div>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {plan.features.map((feature, fIdx) => (
                                    <li key={fIdx} className={`flex items-start gap-3 text-sm ${plan.highlight ? 'text-white font-medium' : 'text-slate-400'}`}>
                                        <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full py-4 rounded-xl font-bold transition-all ${
                                    plan.highlight 
                                    ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                                    : 'border border-primary/30 text-white hover:bg-primary/5'
                                }`}
                            >
                                {plan.cta}
                            </motion.button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default LandingPricing;
