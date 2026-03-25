import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface MarketingNavbarProps {
  activePage?: 'platform' | 'solutions' | 'intelligence' | 'pricing';
}

const MarketingNavbar = ({ activePage }: MarketingNavbarProps) => {
  return (
    <header className="fixed top-0 z-50 w-full bg-black border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="text-primary">
              <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                diamond
              </span>
            </div>
            <h2 className="text-xl font-black tracking-tighter uppercase text-white">PRISM</h2>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          <Link 
            href="/platform" 
            className={cn(
              "text-sm font-semibold transition-colors",
              activePage === 'platform' ? "text-primary" : "text-slate-400 hover:text-primary"
            )}
          >
            Platform
          </Link>
          <Link 
            href="/solutions" 
            className={cn(
              "text-sm font-semibold transition-colors",
              activePage === 'solutions' ? "text-primary" : "text-slate-400 hover:text-primary"
            )}
          >
            Solutions
          </Link>
          <Link 
            href="/intelligence" 
            className={cn(
              "text-sm font-semibold transition-colors",
              activePage === 'intelligence' ? "text-primary" : "text-slate-400 hover:text-primary"
            )}
          >
            Intelligence
          </Link>
          <Link 
            href="/pricing" 
            className={cn(
              "text-sm font-semibold transition-colors",
              activePage === 'pricing' ? "text-primary" : "text-slate-400 hover:text-primary"
            )}
          >
            Pricing
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-bold px-6 py-2.5 rounded-lg border border-primary/20 text-white hover:bg-primary/10 transition-all">
            Login
          </Link>
          <Link href="/profile" className="bg-primary hover:bg-primary/90 text-white text-sm font-bold px-6 py-2.5 rounded-lg shadow-lg shadow-primary/20 transition-all text-center">
            Request Demo
          </Link>
        </div>
      </div>
    </header>
  );
};

export default MarketingNavbar;
