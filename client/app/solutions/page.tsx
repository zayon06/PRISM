import React from 'react';
import MarketingNavbar from '@/components/block/marketing-navbar';
import MarketingFooter from '@/components/block/marketing-footer';
import SolutionsHero from '@/components/block/solutions/solutions-hero';
import VerticalArchitectures from '@/components/block/solutions/vertical-architectures';
import EnterpriseUseCases from '@/components/block/solutions/enterprise-use-cases';
import ExecutiveValidation from '@/components/block/solutions/executive-validation';

export default function SolutionsPage() {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background">
            <MarketingNavbar activePage="solutions" />
            
            <main className="pt-24 pb-20">
                <SolutionsHero />
                <VerticalArchitectures />
                <EnterpriseUseCases />
                <ExecutiveValidation />
            </main>
            
            <MarketingFooter />
        </div>
    );
}
