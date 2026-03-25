import React from 'react';

const ProfileSidebar = () => {
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            console.log('File selected:', file.name);
            // In a real app, upload the file here
        }
    };

    return (
        <aside className="space-y-8">
            {/* CV Upload Zone */}
            <div className="bg-[#111] rounded-2xl p-6 border border-white/5 shadow-sm">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Professional Data</h3>
                <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleFileChange} 
                    className="hidden" 
                    accept=".pdf,.doc,.docx"
                />
                <div 
                    onClick={handleUploadClick}
                    className="relative group cursor-pointer border-2 border-dashed border-white/5 rounded-xl p-6 flex flex-col items-center justify-center gap-3 transition-all hover:border-primary/50 hover:bg-primary/5"
                >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-2xl">upload_file</span>
                    </div>
                    <div className="text-center">
                        <p className="text-sm font-bold text-white">Upload New CV</p>
                        <p className="text-xs text-slate-500 mt-1">AI parsing will update skills</p>
                    </div>
                </div>
            </div>

            {/* Growth Insights */}
            <div className="bg-[#111] rounded-2xl p-6 border border-white/5 shadow-sm">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">analytics</span> Growth Insights 
                    </div>
                    <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded border border-primary/20">Updated</span>
                </h3>
                <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                        <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Market Gap</p>
                        <p className="text-sm font-semibold text-white group-hover:text-primary transition-colors">Kubernetes Security Specialist</p>
                        <p className="text-xs text-slate-500 mt-1">Increasing demand in your sector</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                        <p className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-1">Certification Ready</p>
                        <p className="text-sm font-semibold text-white group-hover:text-emerald-500 transition-colors">AWS Solutions Architect</p>
                        <p className="text-xs text-slate-500 mt-1">85% skill coverage achieved</p>
                    </div>
                </div>
            </div>

            {/* Team Benchmark */}
            <div className="bg-[#111] rounded-2xl p-6 border border-white/5 shadow-sm">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">Team Benchmark</h3>
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-2">
                            <span className="text-slate-400">Tech Lead Ready</span>
                            <span className="text-primary">92%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full" style={{ width: '92%' }}></div>
                        </div>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed italic">
                        "Alex is currently performing at the 98th percentile of Senior Engineers in the Product Engineering department."
                    </p>
                </div>
            </div>
        </aside>
    );
};

export default ProfileSidebar;
