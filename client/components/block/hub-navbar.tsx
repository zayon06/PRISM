'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';

interface HubNavbarProps {
    onSearchChange?: (term: string) => void;
}

const HubNavbar = ({ onSearchChange }: HubNavbarProps) => {
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const notifications = [
        { id: 1, text: "Skill 'Kubernetes' auto-verified by GitHub activity.", time: "2h ago", icon: "verified" },
        { id: 2, text: "New internal role matches your skill profile.", time: "5h ago", icon: "stars" },
        { id: 3, text: "Organization-wide skill gap analysis updated.", time: "1d ago", icon: "analytics" }
    ];

    return (
        <nav className="sticky top-0 z-50 w-full h-20 bg-black border-b border-white/5 px-6 md:px-12 flex items-center justify-between backdrop-blur-md">
            {/* Logo linked to landing page */}
            <Link href="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-white text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                        account_tree
                    </span>
                </div>
                <div className="hidden lg:block">
                    <span className="text-xl font-bold text-white tracking-widest font-headline">PRISM</span>
                    <span className="block text-[8px] text-primary font-bold uppercase tracking-[0.3em] -mt-1">Growth Hub</span>
                </div>
            </Link>

            {/* Middle: Search bar (Functional) */}
            <div className="flex-1 max-w-xl mx-8">
                <div className="relative group">
                    <input 
                        type="text" 
                        placeholder="Search your skill matrix..." 
                        onChange={(e) => onSearchChange?.(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-3 text-sm text-white focus:outline-none focus:border-primary/50 transition-all placeholder:text-slate-600 focus:bg-white/10"
                    />
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors">
                        search
                    </span>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex gap-1">
                        <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-slate-500">⌘</kbd>
                        <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-slate-500">K</kbd>
                    </div>
                </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-6">
                {/* Notification Dropdown */}
                <div className="relative">
                    <button 
                        onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                        className="relative w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all transition-colors duration-300"
                    >
                        <span className="material-symbols-outlined text-2xl">notifications</span>
                        <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-black"></span>
                    </button>

                    <AnimatePresence>
                        {isNotificationsOpen && (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                className="absolute right-0 mt-4 w-80 bg-[#111] border border-white/10 rounded-2xl p-4 shadow-2xl z-[100]"
                            >
                                <div className="flex items-center justify-between mb-4 px-2">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">Notifications</h4>
                                    <button className="text-[10px] text-primary hover:underline">Mark all read</button>
                                </div>
                                <div className="space-y-1">
                                    {notifications.map(notif => (
                                        <div key={notif.id} className="p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
                                            <div className="flex gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                                                    <span className="material-symbols-outlined text-lg">{notif.icon}</span>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-white leading-relaxed">{notif.text}</p>
                                                    <p className="text-[10px] text-slate-500 mt-1">{notif.time}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <Link href="/profile/notifications" className="block text-center mt-4 pt-4 border-t border-white/5 text-xs text-slate-500 hover:text-white transition-colors font-medium">
                                    View full notification history
                                </Link>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="flex items-center gap-3 cursor-pointer group">
                    <div className="hidden md:block text-right">
                        <p className="text-xs font-bold text-white group-hover:text-primary transition-colors">Alex Rivera</p>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Pro Account</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/10 group-hover:border-primary/50 transition-all duration-300">
                        <Image 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCteqbrSbzJyXzsLk1byA1saY8luLuDSYn-ZjvfZBtgf0BWOaQSiGh-dIbW6SyLAhtllnB26x0PUvSd62cFFyrzMbI0fqCwe0BDmLw-n55mpkbFXa6gqvf91nGA8wY7HWt0U8rIhOEBhKPWEsvEBbeSBVzl93jAn5ih_tSXvlRrYWvbuzpawpXHp2FBHfGsNGcoz5ATopfJakzsxDmCaIAVJIA42XU3XOH3CEJ1B1hhab9eWwv3U2J2FHVSqpC-YHDNmtS1gOma3o" 
                            alt="User Profile" 
                            width={40} 
                            height={40} 
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default HubNavbar;
