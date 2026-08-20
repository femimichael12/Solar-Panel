import React from 'react';
import { 
  ShieldCheck, 
  Wrench, 
  Users, 
  FileCheck2, 
  Headphones, 
  HeartHandshake, 
  Sparkles,
  Check
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      id: 'quality-products',
      title: 'Quality Products',
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      desc: 'Zero counterfeit or refurbished parts. We exclusively deploy Tier-1 Bloomberg rated PV modules, authentic pure sine wave inverters, and Grade-A lithium cells backed by manufacturer warranty certificates.'
    },
    {
      id: 'professional-installation',
      title: 'Professional Installation',
      icon: <Wrench className="w-6 h-6 text-emerald-600" />,
      desc: 'Our installations follow rigid electrical safety guidelines with high-grade DC changeovers, Class II surge protection devices (SPDs), waterproof roof anchoring, and fire-resistant trunking.'
    },
    {
      id: 'experienced-technicians',
      title: 'Experienced Technicians',
      icon: <Users className="w-6 h-6 text-emerald-600" />,
      desc: 'Certified solar installers with university engineering backgrounds and specialized training across high-voltage lithium battery management and industrial 3-phase hybrid synchronization.'
    },
    {
      id: 'transparent-pricing',
      title: 'Transparent Pricing',
      icon: <FileCheck2 className="w-6 h-6 text-emerald-600" />,
      desc: 'No hidden surcharges or surprise billing. You receive an itemized Bill of Engineering Measurement and Evaluation (BEME) detailing every cable meter, breaker, and panel before work begins.'
    },
    {
      id: 'after-sales-support',
      title: 'After-Sales Support',
      icon: <Headphones className="w-6 h-6 text-emerald-600" />,
      desc: 'We do not disappear after installation. Every client receives scheduled quarterly performance audits, free firmware upgrades, and 24/7 dedicated technician hotlines.'
    },
    {
      id: 'reliable-customer-service',
      title: 'Reliable Customer Service',
      icon: <HeartHandshake className="w-6 h-6 text-emerald-600" />,
      desc: 'Prompt, courteous, and transparent communication. We provide real-time mobile app setup so you can track your energy generation, battery state-of-charge, and cost savings 24/7.'
    }
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>The Solara Advantage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Hundreds of Nigerians Choose Us
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Investing in solar is a 15-25 year commitment. Here is why homeowners and businesses trust Solara Energy Systems for their power autonomy.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50 hover:bg-emerald-50/40 border border-slate-200 hover:border-emerald-300 shadow-xs hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-emerald-100/80 shadow-xs border border-slate-200 flex items-center justify-center mb-5 transition-colors">
                {reason.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
