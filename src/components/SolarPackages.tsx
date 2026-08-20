import React from 'react';
import { SOLAR_PACKAGES } from '../data/packages';
import { SolarPackage } from '../types';
import { 
  Check, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  Cpu, 
  BatteryCharging, 
  Sun,
  Flame
} from 'lucide-react';

interface SolarPackagesProps {
  onSelectPackageQuote: (pkg: SolarPackage) => void;
}

export const SolarPackages: React.FC<SolarPackagesProps> = ({ onSelectPackageQuote }) => {
  return (
    <section id="systems" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5 text-emerald-700" />
            <span>Turnkey Power Solutions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pre-Engineered Solar Packages
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            All-inclusive complete solar installations designed for seamless day and night uninterrupted power. Includes Tier-1 panels, smart inverters, lithium batteries, safety switchgear, and certified engineering installation.
          </p>
        </div>

        {/* 4 Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {SOLAR_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 ${
                pkg.popular
                  ? 'bg-slate-900 text-white shadow-xl ring-2 ring-emerald-500 scale-[1.02] md:-translate-y-2'
                  : 'bg-slate-50 text-slate-900 border border-slate-200 hover:border-slate-300 hover:shadow-lg'
              }`}
            >
              {/* Popular / Badge Tag */}
              {pkg.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-sm flex items-center gap-1 ${
                      pkg.popular
                        ? 'bg-emerald-500 text-slate-950'
                        : 'bg-slate-800 text-emerald-300 border border-slate-700'
                    }`}
                  >
                    <Sparkles className="w-3 h-3" />
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Package Title & Capacity */}
                <div className="mt-2">
                  <h3 className={`text-xl font-extrabold ${pkg.popular ? 'text-white' : 'text-slate-900'}`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-xs mt-1 ${pkg.popular ? 'text-slate-300' : 'text-slate-500'}`}>
                    {pkg.tagline}
                  </p>
                </div>

                {/* Capacity Box */}
                <div
                  className={`mt-4 p-3 rounded-xl flex items-center gap-2.5 ${
                    pkg.popular ? 'bg-slate-800/80 border border-slate-700' : 'bg-white border border-slate-200'
                  }`}
                >
                  <Zap className="w-5 h-5 text-emerald-500 shrink-0" />
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                      System Capacity
                    </div>
                    <div className={`text-sm font-extrabold ${pkg.popular ? 'text-emerald-400' : 'text-slate-900'}`}>
                      {pkg.capacity}
                    </div>
                  </div>
                </div>

                {/* Price Display */}
                <div className="mt-5 pb-4 border-b border-slate-200/40">
                  <div className="text-[11px] font-medium text-slate-400">Turnkey Estimated Package</div>
                  <div className={`text-xl sm:text-2xl font-extrabold mt-0.5 ${pkg.popular ? 'text-white' : 'text-emerald-700'}`}>
                    {pkg.priceDisplay}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    Includes equipment, cabling & full installation
                  </div>
                </div>

                {/* Recommended Appliance Usage */}
                <div className="mt-4 space-y-2">
                  <div className={`text-xs font-bold uppercase tracking-wider ${pkg.popular ? 'text-emerald-400' : 'text-slate-700'}`}>
                    Powerable Appliances:
                  </div>
                  <ul className="space-y-1.5">
                    {pkg.applianceList.map((app, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className={pkg.popular ? 'text-slate-200' : 'text-slate-700'}>
                          <strong>{app.name}</strong> ({app.qty})
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* System Specs List */}
                <div className={`mt-5 pt-4 border-t ${pkg.popular ? 'border-slate-800' : 'border-slate-200'} space-y-2`}>
                  <div className={`text-xs font-bold uppercase tracking-wider ${pkg.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                    Core Components:
                  </div>
                  <ul className="space-y-1.5 text-xs">
                    <li className="flex items-center gap-1.5">
                      <Sun className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span className={pkg.popular ? 'text-slate-300' : 'text-slate-600'}>
                        {pkg.panelSpec}
                      </span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <BatteryCharging className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className={pkg.popular ? 'text-slate-300' : 'text-slate-600'}>
                        {pkg.batterySpec}
                      </span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span className={pkg.popular ? 'text-slate-300' : 'text-slate-600'}>
                        Backup: <strong>{pkg.backupHours}</strong>
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Warranty snippet */}
                <div className={`mt-4 p-2.5 rounded-lg text-[11px] font-medium flex items-center gap-2 ${
                  pkg.popular ? 'bg-slate-800/60 text-slate-300' : 'bg-emerald-50 text-emerald-800'
                }`}>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>{pkg.warranty}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-2">
                <button
                  onClick={() => onSelectPackageQuote(pkg)}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-xs ${
                    pkg.popular
                      ? 'bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-slate-950 shadow-md shadow-emerald-500/20'
                      : 'bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white'
                  }`}
                  id={`request-quote-${pkg.id}`}
                >
                  <span>Request This Package</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Sizing Banner CTA */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-bold">
              Need a Custom Engineered Solar System?
            </h4>
            <p className="text-sm text-slate-300 max-w-xl">
              Our registered engineers can audit your specific energy profile, machinery, or complex building layout and construct an exact Bill of Quantities.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('calculator');
              if (el) {
                const yOffset = -80;
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
            className="shrink-0 px-6 py-3.5 bg-white text-slate-900 hover:bg-slate-100 font-bold rounded-xl text-sm shadow-md transition-all flex items-center gap-2"
          >
            <Zap className="w-4 h-4 text-amber-500" />
            <span>Launch Solar Load Calculator</span>
          </button>
        </div>

      </div>
    </section>
  );
};
