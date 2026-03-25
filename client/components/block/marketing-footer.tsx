import React from 'react';
import Link from 'next/link';

const MarketingFooter = () => {
    return (
        <footer className="bg-black py-20 px-6 border-t border-primary/10">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="text-primary">
                                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
                            </div>
                            <h2 className="text-xl font-black tracking-tighter uppercase text-white">PRISM</h2>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Redefining the boundaries of talent intelligence with electric precision and advanced neural AI.
                        </p>
                        <div className="flex gap-4">
                            <Link className="text-slate-500 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></Link>
                            <Link className="text-slate-500 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></Link>
                            <Link className="text-slate-500 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">brand_awareness</span></Link>
                        </div>
                    </div>
                    <div>
                        <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-white">Product</h5>
                        <ul className="space-y-4 text-slate-500 text-sm">
                            <li><Link className="hover:text-primary transition-colors" href="#">Neural Matching</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#">Predictive Analytics</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#">Sourcing Engine</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#">Integrations</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-white">Company</h5>
                        <ul className="space-y-4 text-slate-500 text-sm">
                            <li><Link className="hover:text-primary transition-colors" href="#">About Us</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#">Careers</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#">Privacy Policy</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#">Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-white">Stay Updated</h5>
                        <p className="text-slate-500 text-sm mb-4">Join our newsletter for the latest in AI talent news.</p>
                        <div className="flex gap-2">
                            <input className="bg-slate-900 border border-primary/20 rounded-lg px-4 py-2 text-sm w-full focus:ring-1 focus:ring-primary focus:border-primary outline-none text-white" placeholder="Email address" type="email"/>
                            <button className="bg-primary text-white p-2 rounded-lg flex items-center justify-center"><span className="material-symbols-outlined">send</span></button>
                        </div>
                    </div>
                </div>
                <div className="pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-600 text-xs">© {new Date().getFullYear()} PRISM Intelligence Systems Inc. All rights reserved.</p>
                    <div className="flex gap-6 text-xs text-slate-600">
                        <Link className="hover:text-primary" href="#">Status</Link>
                        <Link className="hover:text-primary" href="#">Security</Link>
                        <Link className="hover:text-primary" href="#">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default MarketingFooter;
