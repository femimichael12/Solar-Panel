import React from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Wrench, 
  Headphones, 
  CheckCircle2, 
  ArrowRight, 
  Sun, 
  Sparkles,
  Award,
  BatteryCharging,
  TrendingDown
} from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onExploreProducts: () => void;
  onOpenCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenQuoteModal,
  onExploreProducts,
  onOpenCalculator
}) => {
  return (
    <section id="home" className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100/70 border-b border-slate-200">
      {/* Decorative Subtle Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-24 right-10 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-slate-800 font-medium">Nigeria's Trusted Solar EPC</span>
              <span className="text-emerald-700">✦ Tier-1 Equipment & Turnkey Installation</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Reliable Solar Energy For Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-700">
                Home & Business
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              We provide certified Tier-1 solar panels, pure sine wave inverters, high-cycle LiFePO4 lithium batteries, and complete turnkey solar installations tailored for Nigerian homes, duplexes, offices, hospitals, and commercial facilities.
            </p>

            {/* Key Quick Benefit Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-xs sm:text-sm font-medium text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Generator Noise</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Up to 90% Fuel Savings</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>24/7 Uninterrupted Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>10+ Yr Battery Lifespan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>25-Yr Panel Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Certified COREN Engineers</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold rounded-xl shadow-md shadow-emerald-600/25 transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2.5 text-base"
                id="hero-get-quote-cta"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onExploreProducts}
                className="px-6 sm:px-7 py-3.5 sm:py-4 bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-800 font-semibold rounded-xl border border-slate-300 shadow-xs transition-all hover:border-slate-400 flex items-center justify-center gap-2 text-base"
                id="hero-explore-products-cta"
              >
                <Sun className="w-4 h-4 text-emerald-600" />
                <span>Explore Products</span>
              </button>

              <button
                onClick={onOpenCalculator}
                className="w-full sm:w-auto px-5 py-3.5 bg-amber-50 hover:bg-amber-100 text-amber-900 font-semibold rounded-xl border border-amber-200 transition-all flex items-center justify-center gap-2 text-sm"
                id="hero-load-calc-cta"
              >
                <Zap className="w-4 h-4 text-amber-600" />
                <span>Calculate Your Load</span>
              </button>
            </div>

            {/* Fuel Savings Calculation Metric */}
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-500">
              <div className="p-1.5 rounded-md bg-emerald-100 text-emerald-800">
                <TrendingDown className="w-4 h-4" />
              </div>
              <p>
                Average client saves <strong className="text-slate-900 font-semibold">₦450,000 - ₦2.5M+ per month</strong> on petrol and diesel generator maintenance.
              </p>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Image Container with subtle framing */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-4/3 sm:aspect-5/4">
                <img 
                  src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80" 
                  alt="Modern rooftop solar panel installation on contemporary building"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Image Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-1">
                    <Award className="w-4 h-4" />
                    <span>Lekki Phase 1, Lagos • 10kVA Hybrid Solar</span>
                  </div>
                  <p className="text-sm font-medium text-slate-200">
                    Dual MPPT System with LiFePO4 Smart Battery Storage
                  </p>
                </div>
              </div>

              {/* Floating Trust Card: 24/7 Power */}
              <div className="absolute -top-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl shadow-lg border border-slate-200 flex items-center gap-3 animate-in fade-in slide-in-from-left-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Uptime Reliability
                  </div>
                  <div className="text-sm sm:text-base font-extrabold text-slate-900">
                    24/7 Silent Power
                  </div>
                  <div className="text-[11px] text-emerald-600 font-semibold">
                    Sub-4ms Transfer Switch
                  </div>
                </div>
              </div>

              {/* Floating Trust Card: Warranty */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl shadow-lg border border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Equipment Protection
                  </div>
                  <div className="text-sm sm:text-base font-extrabold text-slate-900">
                    25-Year Warranty
                  </div>
                  <div className="text-[11px] text-slate-600">
                    Direct Tier-1 Factory Backed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Trust Indicators Banner */}
        <div className="mt-16 pt-10 border-t border-slate-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-emerald-300 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-slate-900">Quality Products</h2>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                  Only authentic Tier-1 solar modules, German & Asian grade hybrid inverters and Grade-A lithium cells.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-emerald-300 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-slate-900">Professional Installation</h2>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                  Certified solar electrical engineers adhering strictly to IEEE wiring regulations and roof-waterproofing standards.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-emerald-300 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                <Headphones className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-slate-900">Reliable Support</h2>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                  Dedicated Nigerian customer helpline, rapid on-site technician dispatch, and scheduled preventive maintenance.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-emerald-300 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-slate-900">Affordable Solar Solutions</h2>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                  Direct factory pricing with transparent, itemized invoices and modular systems that can scale with your budget.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
