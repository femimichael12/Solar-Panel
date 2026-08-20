import React from 'react';
import { 
  Building2, 
  Sun, 
  ShieldCheck, 
  Users, 
  Award, 
  CheckCircle2, 
  Zap, 
  Globe2, 
  BatteryCharging 
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Imagery & Visual Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 aspect-4/3 sm:aspect-5/4">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                alt="Solar engineers conducting system commissioning in Nigeria"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Engineering Excellence
                </div>
                <p className="text-sm font-medium text-slate-200 mt-0.5">
                  Over 3.2 Megawatts of clean, silent solar capacity deployed across Nigeria.
                </p>
              </div>
            </div>

            {/* Experience Floating Tag */}
            <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-200 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-extrabold text-xl font-display">
                  10+
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase">Track Record</div>
                  <div className="text-sm font-extrabold text-slate-900">Years of Solar Innovation</div>
                  <div className="text-[11px] text-emerald-600 font-semibold">500+ Verified Installations</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Company Story & Mission */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-emerald-700" />
              <span>About Solara Energy Systems</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Pioneering Nigeria's Transition to Clean, Uninterrupted Power
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                Founded in Nigeria with a clear engineering mandate, <strong>Solara Energy Systems</strong> solves the fundamental challenge of unpredictable grid outages and exorbitant generator fuel expenses for homeowners and businesses.
              </p>
              <p>
                We do not sell generic or grey-market electronics. Every solar panel, pure sine wave inverter, and LiFePO4 lithium battery is directly imported from globally certified Tier-1 manufacturers, tested in our laboratory, and installed by registered electrical engineers.
              </p>
            </div>

            {/* 3 Core Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm mb-2">
                  <Sun className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Tier-1 Hardware</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Canadian Solar, Jinko, Deye, Growatt, and Felicity original procurement.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm mb-2">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">IEEE Standards</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Surge protection, fire-rated cabling, and precision earthing on every roof.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm mb-2">
                  <BatteryCharging className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Long-term SLA</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Guaranteed uptime SLAs, quarterly health checks, and rapid repair dispatch.
                </p>
              </div>
            </div>

            {/* Quick Stat Bar */}
            <div className="pt-4 border-t border-slate-200 grid grid-cols-3 gap-4 text-center sm:text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                  500+
                </div>
                <div className="text-xs text-slate-500 font-medium">Nigerian Installs</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 font-display">
                  3.2 MW
                </div>
                <div className="text-xs text-slate-500 font-medium">Installed Capacity</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                  99.8%
                </div>
                <div className="text-xs text-slate-500 font-medium">System Reliability</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
