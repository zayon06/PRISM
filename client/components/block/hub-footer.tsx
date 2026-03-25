import React from 'react';
import Link from 'next/link';

const HubFooter = () => {
    return (
        <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 py-10 px-6 md:px-12 bg-black transition-colors duration-300">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-3 opacity-60 text-slate-900 dark:text-white transition-colors duration-300">
                    <span className="material-symbols-outlined">deployed_code</span>
                    <span className="text-sm font-bold uppercase tracking-tight">PRISM Growth Hub</span>
                </div>
                <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-500 font-medium">
                    <Link className="hover:text-primary transition-colors" href="#">Privacy Policy</Link>
                    <Link className="hover:text-primary transition-colors" href="#">Career Pathways</Link>
                    <Link className="hover:text-primary transition-colors" href="#">Help Center</Link>
                    <Link className="hover:text-primary transition-colors" href="#">Admin Portal</Link>
                </div>
                <p className="text-xs text-slate-400">© {new Date().getFullYear()} PRISM Technologies. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default HubFooter;
