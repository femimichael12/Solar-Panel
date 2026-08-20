import React, { useState } from 'react';
import { SERVICES } from '../data/services';
import { ServiceItem } from '../types';
import { 
  Wrench, 
  Sun, 
  Cpu, 
  Zap, 
  BatteryCharging, 
  ShieldCheck, 
  TrendingUp, 
  Building2, 
  Check, 
  Clock, 
  ArrowRight, 
  HelpCircle,
  PhoneCall
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceQuote: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem>(SERVICES[0]);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sun': return <Sun className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'BatteryCharging': return <BatteryCharging className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      default: return <Wrench className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5 text-emerald-700" />
            <span>Engineering & Field Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Solar Engineering Services
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            From preliminary site audits to turnkey mounting, wiring, high-voltage battery storage, and 24/7 preventative maintenance.
          </p>
        </div>

        {/* 8 Services Interactive Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: List of 8 Services */}
          <div className="lg:col-span-5 space-y-2.5">
            {SERVICES.map((service) => {
              const isSelected = selectedService.id === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`w-full text-left p-4 rounded-xl transition-all border flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2.5 rounded-lg ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-700'
                    }`}>
                      {getServiceIcon(service.iconName)}
                    </div>
                    <div>
                      <div className="text-sm font-bold leading-tight">
                        {service.title}
                      </div>
                      <div className={`text-xs mt-0.5 ${isSelected ? 'text-emerald-100' : 'text-slate-500'}`}>
                        Turnaround: {service.turnaroundTime}
                      </div>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${
                    isSelected ? 'translate-x-1 text-white' : 'text-slate-400'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed View of Selected Service */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            
            {/* Header */}
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-emerald-600 text-white shadow-sm">
                  {getServiceIcon(selectedService.iconName)}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    Service Details
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{selectedService.turnaroundTime}</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Service Scope & Process
              </h4>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {selectedService.fullDesc}
              </p>
            </div>

            {/* Deliverables Checklist */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                What's Included & Deliverables:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 text-xs sm:text-sm text-slate-800">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal For */}
            <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs sm:text-sm text-emerald-900 flex items-start gap-2.5">
              <Building2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <strong>Recommended For:</strong> {selectedService.idealFor}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <a
                href="tel:+2348030009988"
                className="px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-700 font-semibold rounded-xl border border-slate-300 text-xs sm:text-sm flex items-center gap-2 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-slate-500" />
                <span>Speak with an Engineer</span>
              </a>

              <button
                onClick={() => onSelectServiceQuote(selectedService)}
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold rounded-xl text-xs sm:text-sm shadow-sm transition-all flex items-center gap-2"
                id={`book-service-${selectedService.id}`}
              >
                <span>Book This Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
