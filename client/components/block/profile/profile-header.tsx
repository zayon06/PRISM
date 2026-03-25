import React, { useRef } from 'react';
import Image from 'next/image';

interface ProfileHeaderProps {
    name: string;
    title: string;
    location: string;
    department: string;
    experience: string;
    onEdit: () => void;
}

const ProfileHeader = ({ name, title, location, department, experience, onEdit }: ProfileHeaderProps) => {
    const shareInputRef = useRef<HTMLInputElement>(null);

    const handleShareClick = () => {
        shareInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            console.log('CV shared:', file.name);
            // Logic to share the CV
        }
    };

    return (
        <div className="bg-[#111] rounded-2xl p-8 mb-8 border border-white/5 shadow-sm transition-all duration-300">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                    <div className="relative group">
                        <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-primary shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-105">
                            <Image 
                                className="object-cover" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCteqbrSbzJyXzsLk1byA1saY8luLuDSYn-ZjvfZBtgf0BWOaQSiGh-dIbW6SyLAhtllnB26x0PUvSd62cFFyrzMbI0fqCwe0BDmLw-n55mpkbFXa6gqvf91nGA8wY7HWt0U8rIhOEBhKPWEsvEBbeSBVzl93jAn5ih_tSXvlRrYWvbuzpawpXHp2FBHfGsNGcoz5ATopfJakzsxDmCaIAVJIA42XU3XOH3CEJ1B1hhab9eWwv3U2J2FHVSqpC-YHDNmtS1gOma3o" 
                                alt={name}
                                fill
                                sizes="128px"
                            />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-primary text-white p-1.5 rounded-lg shadow-lg">
                            <span className="material-symbols-outlined text-sm block">verified</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col md:flex-row items-center gap-3">
                            <h1 className="text-3xl font-bold text-white tracking-tight">{name}</h1>
                            <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20">Level 5</span>
                        </div>
                        <p className="text-slate-400 font-medium text-lg mt-1">{title}</p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-3 text-sm text-slate-500">
                            <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base">domain</span> {department}</span>
                            <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base">location_on</span> {location}</span>
                            <span className="flex items-center gap-1.5 text-primary/80 font-medium"><span className="material-symbols-outlined text-base">schedule</span> {experience}</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-3 w-full lg:w-auto">
                    <button 
                        onClick={onEdit}
                        className="flex-1 lg:flex-none flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white px-6 py-2.5 rounded-xl font-semibold border border-white/5 transition-all group/btn"
                    >
                        <span className="material-symbols-outlined text-xl group-hover/btn:text-primary transition-colors">edit</span> Edit Profile
                    </button>
                    
                    {/* Share CV - Opens file manager */}
                    <input 
                        type="file" 
                        ref={shareInputRef} 
                        onChange={handleFileChange} 
                        className="hidden" 
                    />
                    <button 
                        onClick={handleShareClick}
                        className="flex-1 lg:flex-none flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg shadow-primary/20 transition-all active:scale-95"
                    >
                        <span className="material-symbols-outlined text-xl">share</span> Share CV
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;
