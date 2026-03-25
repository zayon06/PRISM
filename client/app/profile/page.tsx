'use client';

import React, { useState, useMemo, useEffect } from 'react';
import HubNavbar from '@/components/block/hub-navbar';
import ProfileHeader from '@/components/block/profile/profile-header';
import SkillMatrix from '@/components/block/profile/skill-matrix';
import ProfileSidebar from '@/components/block/profile/profile-sidebar';
import HubFooter from '@/components/block/hub-footer';
import { motion, AnimatePresence } from 'motion/react';

// Define the Skill type to match SkillMatrix
interface Skill {
    id: string;
    name: string;
    description: string;
    level: string;
    percentage: number;
    type: 'verified' | 'inferred' | 'self-declared';
    category: string;
}

const INITIAL_SKILLS: Skill[] = [
    {
        id: '1',
        name: 'React & Next.js',
        description: 'Expertise in SPA & SSR',
        level: 'Master',
        percentage: 95,
        type: 'verified',
        category: 'Core Technology'
    },
    {
        id: '10', // Changed ID to avoid potential conflict if someone adds a skill with '2'
        name: 'Node.js Ecosystem',
        description: 'Backend Architectures',
        level: 'Advanced',
        percentage: 82,
        type: 'inferred',
        category: 'Core Technology'
    },
    {
        id: '3',
        name: 'AWS Architecting',
        description: 'Certified Practitioner',
        level: 'Intermediate',
        percentage: 65,
        type: 'self-declared',
        category: 'Cloud & DevOps'
    },
    {
        id: '4',
        name: 'Docker/K8s',
        description: 'Containerization',
        level: 'Advanced',
        percentage: 78,
        type: 'verified',
        category: 'Cloud & DevOps'
    }
];

const DEFAULT_PROFILE = {
    name: 'Alex Rivera',
    title: 'Senior Software Engineer',
    location: 'London Hub',
    department: 'Product Engineering',
    experience: '4.5 Years'
};

export default function ProfilePage() {
    const [userProfile, setUserProfile] = useState(DEFAULT_PROFILE);
    const [skills, setSkills] = useState<Skill[]>(INITIAL_SKILLS);
    const [searchQuery, setSearchQuery] = useState('');
    const [isHydrated, setIsHydrated] = useState(false);
    
    // Skill Modal State
    const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);
    const [skillFormData, setSkillFormData] = useState({ name: '', level: 'Beginner' });
    
    // Profile Modal State
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
    const [profileFormData, setProfileFormData] = useState({ ...DEFAULT_PROFILE });

    // Load from localStorage on mount
    useEffect(() => {
        const savedProfile = localStorage.getItem('prism_user_profile');
        const savedSkills = localStorage.getItem('prism_skills');
        
        if (savedProfile) {
            try {
                setUserProfile(JSON.parse(savedProfile));
                setProfileFormData(JSON.parse(savedProfile));
            } catch (e) { console.error("Error loading profile", e); }
        }
        
        if (savedSkills) {
            try {
                setSkills(JSON.parse(savedSkills));
            } catch (e) { console.error("Error loading skills", e); }
        }
        
        setIsHydrated(true);
    }, []);

    // Save to localStorage on change
    useEffect(() => {
        if (isHydrated) {
            localStorage.setItem('prism_user_profile', JSON.stringify(userProfile));
        }
    }, [userProfile, isHydrated]);

    useEffect(() => {
        if (isHydrated) {
            localStorage.setItem('prism_skills', JSON.stringify(skills));
        }
    }, [skills, isHydrated]);

    const handleAddSkill = () => setIsSkillModalOpen(true);
    const handleEditProfile = () => {
        setProfileFormData({ ...userProfile });
        setIsProfileModalOpen(true);
    };

    const handleSkillSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!skillFormData.name) return;

        const levelMapping: Record<string, number> = {
            'Beginner': 25,
            'Intermediate': 50,
            'Advanced': 75,
            'Master': 95
        };

        const newSkill: Skill = {
            id: Math.random().toString(36).substr(2, 9),
            name: skillFormData.name,
            description: 'User Declared Capability',
            level: skillFormData.level,
            percentage: levelMapping[skillFormData.level] || 50,
            type: 'self-declared',
            category: 'Additional Skills'
        };
        
        setSkills([...skills, newSkill]);
        setIsSkillModalOpen(false);
        setSkillFormData({ name: '', level: 'Beginner' });
    };

    const handleProfileSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setUserProfile({ ...profileFormData });
        setIsProfileModalOpen(false);
    };

    // Filtered skills based on search query
    const filteredSkills = useMemo(() => {
        if (!searchQuery) return skills;
        return skills.filter(skill => 
            skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            skill.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [skills, searchQuery]);

    if (!isHydrated) {
        return <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>;
    }

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-black text-slate-100 antialiased font-display">
            <HubNavbar onSearchChange={setSearchQuery} />
            
            <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-12 py-10">
                <ProfileHeader 
                    name={userProfile.name} 
                    title={userProfile.title} 
                    location={userProfile.location}
                    department={userProfile.department}
                    experience={userProfile.experience}
                    onEdit={handleEditProfile} 
                />
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Skill Matrix */}
                    <div className="lg:col-span-2 space-y-8">
                        <SkillMatrix skills={filteredSkills} onAddSkill={handleAddSkill} />
                        
                        {filteredSkills.length === 0 && searchQuery && (
                            <div className="bg-[#111] border border-white/5 rounded-2xl p-12 text-center">
                                <span className="material-symbols-outlined text-5xl text-slate-700 mb-4 block">search_off</span>
                                <h3 className="text-xl font-bold text-white mb-2">No skills found</h3>
                                <p className="text-slate-500">No skills match your search for "{searchQuery}"</p>
                                <button 
                                    onClick={() => setSearchQuery('')}
                                    className="mt-6 text-primary font-bold hover:underline"
                                >
                                    Clear search
                                </button>
                            </div>
                        )}
                    </div>
                    
                    {/* Right Column: Sidebar */}
                    <ProfileSidebar />
                </div>
            </main>
            
            <HubFooter />

            {/* Modals Container */}
            <AnimatePresence>
                {/* Add Skill Modal */}
                {isSkillModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-[#111] border border-white/10 p-8 rounded-2xl w-full max-w-md shadow-2xl"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-bold flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">add_circle</span>
                                    Add New Skill
                                </h3>
                                <button onClick={() => setIsSkillModalOpen(false)} className="text-slate-500 hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">close</span>
                                </button>
                            </div>

                            <form onSubmit={handleSkillSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Skill Name</label>
                                    <input 
                                        autoFocus
                                        type="text" 
                                        value={skillFormData.name}
                                        onChange={(e) => setSkillFormData({ ...skillFormData, name: e.target.value })}
                                        placeholder="e.g. Python, GraphQL, Figma"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Proficiency Level</label>
                                    <select 
                                        value={skillFormData.level}
                                        onChange={(e) => setSkillFormData({ ...skillFormData, level: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                                    >
                                        <option value="Beginner" className="bg-[#111]">Beginner</option>
                                        <option value="Intermediate" className="bg-[#111]">Intermediate</option>
                                        <option value="Advanced" className="bg-[#111]">Advanced</option>
                                        <option value="Master" className="bg-[#111]">Master</option>
                                    </select>
                                </div>
                                <button 
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all uppercase tracking-widest text-xs"
                                >
                                    Add to Matrix
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}

                {/* Elaborate Edit Profile Modal */}
                {isProfileModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-[#111] border border-white/10 p-8 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden"
                        >
                            <div className="flex justify-between items-center bg-white/5 p-6 border-b border-white/10">
                                <h3 className="text-xl font-bold flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">person_edit</span>
                                    Professional Profile
                                </h3>
                                <button onClick={() => setIsProfileModalOpen(false)} className="text-slate-500 hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">close</span>
                                </button>
                            </div>

                            <form onSubmit={handleProfileSubmit} className="p-8 space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Full Name</label>
                                        <input 
                                            autoFocus
                                            type="text" 
                                            value={profileFormData.name}
                                            onChange={(e) => setProfileFormData({ ...profileFormData, name: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Professional Title</label>
                                        <input 
                                            type="text" 
                                            value={profileFormData.title}
                                            onChange={(e) => setProfileFormData({ ...profileFormData, title: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Department</label>
                                        <input 
                                            type="text" 
                                            value={profileFormData.department}
                                            onChange={(e) => setProfileFormData({ ...profileFormData, department: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Location Hub</label>
                                        <input 
                                            type="text" 
                                            value={profileFormData.location}
                                            onChange={(e) => setProfileFormData({ ...profileFormData, location: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Experience (Years)</label>
                                        <input 
                                            type="text" 
                                            value={profileFormData.experience}
                                            onChange={(e) => setProfileFormData({ ...profileFormData, experience: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                        />
                                    </div>
                                </div>
                                
                                <div className="flex gap-4 pt-4 border-t border-white/10">
                                    <button 
                                        type="button"
                                        onClick={() => setIsProfileModalOpen(false)}
                                        className="flex-1 bg-white/5 hover:bg-white/10 text-white font-bold py-4 rounded-xl transition-all border border-white/10 uppercase tracking-widest text-xs"
                                    >
                                        Cancel
                                    </button>
                                    <button 
                                        type="submit"
                                        className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all uppercase tracking-widest text-xs"
                                    >
                                        Validate Changes
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
