import React from 'react';
import Image from 'next/image';

const ExecutiveValidation = () => {
    return (
        <section className="px-8 max-w-7xl mx-auto mt-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500 mb-4">Executive Validation</h2>
                    <h3 className="text-4xl font-black text-white tracking-tighter silver-text mb-8">Trusted by the Architect Class.</h3>
                    <p className="text-slate-400 leading-relaxed">Our partners represent the leading edge of global infrastructure, logistics, and technology.</p>
                </div>
                <div className="space-y-12">
                    <blockquote className="relative pl-12">
                        <span className="absolute left-0 top-0 text-6xl text-primary/20 font-serif leading-none">“</span>
                        <p className="text-xl text-white font-light italic leading-relaxed mb-6">
                            PRISM provided the surgical precision we needed to restructure our engineering divisions without losing momentum. It's an indispensable asset for modern scale.
                        </p>
                        <footer className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-slate-800 rounded-sm relative overflow-hidden">
                                <Image 
                                    alt="Marcus Thorne" 
                                    className="w-full h-full object-cover grayscale opacity-80" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuASBnmSiG7rkKn5GtdEYmlZK7-efP8u6B0ksqdOB43pd9d_0_taT-qER8jNX-2t9Pydf09qq1RWPZWRDDBx3og9ZRwnG0Yypiv95pDsu66CuKo0p4644z1iujonJGysevUHP0Tb0nxv0f_YOHCeBVdxQ88Wwi5bu9xEzxb_7q_MrbSqzXwh8YQYbuplZLDMvUD1vqDJxCkMh8XxXPCy3ZI1DXdvk470C9PzGIzenOf0M2ga-tW_96kQH7Bsq_DZEJLG_-AuUS7QNrE"
                                    fill
                                    sizes="40px"
                                />
                            </div>
                            <div>
                                <div className="text-sm font-bold text-white uppercase tracking-wider">Marcus Thorne</div>
                                <div className="text-[10px] text-slate-500 uppercase tracking-widest">CTO, Vertex Logistics</div>
                            </div>
                        </footer>
                    </blockquote>
                    <blockquote className="relative pl-12 border-t border-white/5 pt-12">
                        <span className="absolute left-0 top-12 text-6xl text-primary/20 font-serif leading-none">“</span>
                        <p className="text-xl text-white font-light italic leading-relaxed mb-6">
                            The level of insight PRISM offers into our human capital hierarchy is unprecedented. We no longer guess—we execute based on structural data.
                        </p>
                        <footer className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-slate-800 rounded-sm relative overflow-hidden">
                                <Image 
                                    alt="Elena Vance" 
                                    className="w-full h-full object-cover grayscale opacity-80" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM5H8EW4GocmIAvKZpnEP3uh9t2ULFHDfPvMDyv-j3WagTT_k8qPhLaI1oCSbNXsiB6Jslmtw4t_NnqZd3SG1jx-FUJcrViUWBlvmzRXxIAs-sjGxtbcytDzgLjPK9qDE31Oyp5PsnPlA0Jk4K7UCxIqcrwVQpQ6a0WSH7-mU_xhHAddYnxVtPG8umq5FDqTb_U_7viJMg2xXhKNdjVP0cZqVnL_40E_gT0LbJ899gB8VfnxFr1DTKOb_rlgXDv7OcNIoeUPyIGGI"
                                    fill
                                    sizes="40px"
                                />
                            </div>
                            <div>
                                <div className="text-sm font-bold text-white uppercase tracking-wider">Elena Vance</div>
                                <div className="text-[10px] text-slate-500 uppercase tracking-widest">VP Strategy, Aetheric Corp</div>
                            </div>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </section>
    );
};

export default ExecutiveValidation;
