import React, { useState, useMemo } from 'react';
import { DEFAULT_CALCULATOR_APPLIANCES } from '../data/calculatorAppliances';
import { CalculatorAppliance } from '../types';
import { 
  Calculator, 
  Plus, 
  Minus, 
  RotateCcw, 
  Zap, 
  BatteryCharging, 
  Sun, 
  Cpu, 
  ShieldAlert, 
  ArrowRight, 
  TrendingDown,
  Info,
  Check,
  Tv,
  Fan,
  Lightbulb,
  Wifi,
  Wind,
  Droplet,
  Laptop,
  Monitor,
  Shirt,
  Flame,
  HelpCircle
} from 'lucide-react';
import { formatNaira, formatNumber } from '../lib/formatters';

interface SolarCalculatorProps {
  onApplyCalculationToQuote: (calcSummary: {
    totalDailyKwh: number;
    peakWatts: number;
    recommendedInverterKva: string;
    recommendedBatteryKwh: string;
    recommendedPanelsWatts: string;
    appliancesBreakdown: string;
  }) => void;
}

export const SolarCalculator: React.FC<SolarCalculatorProps> = ({ onApplyCalculationToQuote }) => {
  const [appliances, setAppliances] = useState<CalculatorAppliance[]>(DEFAULT_CALCULATOR_APPLIANCES);
  const [customName, setCustomName] = useState('');
  const [customWatts, setCustomWatts] = useState('200');
  const [customHours, setCustomHours] = useState('4');
  const [sunHoursPerDay, setSunHoursPerDay] = useState(5.0); // 5 peak sun hours average in Nigeria

  // Update count
  const handleCountChange = (id: string, delta: number) => {
    setAppliances((prev) =>
      prev.map((app) => {
        if (app.id === id) {
          const newCount = Math.max(0, app.count + delta);
          return { ...app, count: newCount };
        }
        return app;
      })
    );
  };

  // Update hours
  const handleHoursChange = (id: string, hours: number) => {
    const validHours = Math.max(0.5, Math.min(24, hours));
    setAppliances((prev) =>
      prev.map((app) => (app.id === id ? { ...app, hours: validHours } : app))
    );
  };

  // Add custom appliance
  const handleAddCustomAppliance = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customName.trim()) return;

    const watts = parseFloat(customWatts) || 100;
    const hours = parseFloat(customHours) || 4;

    const newApp: CalculatorAppliance = {
      id: `custom-${Date.now()}`,
      name: customName.trim(),
      category: 'heavy',
      icon: 'Zap',
      defaultWatts: watts,
      defaultHours: hours,
      count: 1,
      hours: hours
    };

    setAppliances((prev) => [...prev, newApp]);
    setCustomName('');
    setCustomWatts('200');
    setCustomHours('4');
  };

  // Reset to default
  const handleReset = () => {
    setAppliances(DEFAULT_CALCULATOR_APPLIANCES);
  };

  // Calculation logic
  const calculation = useMemo(() => {
    let totalContinuousWatts = 0;
    let totalDailyWattHours = 0;
    const activeItems: string[] = [];

    appliances.forEach((app) => {
      if (app.count > 0) {
        const itemWatts = app.count * app.defaultWatts;
        const itemWh = itemWatts * app.hours;
        totalContinuousWatts += itemWatts;
        totalDailyWattHours += itemWh;
        activeItems.push(`${app.count}x ${app.name} (${itemWatts}W, ${app.hours}h/day)`);
      }
    });

    const totalDailyKwh = totalDailyWattHours / 1000;
    const peakKw = totalContinuousWatts / 1000;

    // Recommended Inverter Size with 30% safety / surge margin
    let inverterKva = 1.5;
    if (totalContinuousWatts <= 1000) {
      inverterKva = 1.5;
    } else if (totalContinuousWatts <= 2000) {
      inverterKva = 2.5;
    } else if (totalContinuousWatts <= 3000) {
      inverterKva = 3.5;
    } else if (totalContinuousWatts <= 4500) {
      inverterKva = 5.0;
    } else if (totalContinuousWatts <= 7000) {
      inverterKva = 8.0;
    } else if (totalContinuousWatts <= 9000) {
      inverterKva = 10.0;
    } else if (totalContinuousWatts <= 14000) {
      inverterKva = 15.0;
    } else if (totalContinuousWatts <= 25000) {
      inverterKva = 30.0;
    } else {
      inverterKva = Math.ceil((totalContinuousWatts * 1.3) / 1000);
    }

    // Recommended Lithium Battery Storage (assuming 80% Depth of Discharge and night backup)
    // Approx 65% of energy consumed during non-sun hours
    const nightEnergyNeededKwh = totalDailyKwh * 0.65;
    const batteryCapacityKwh = Math.max(2.5, (nightEnergyNeededKwh / 0.85));
    const batteryAhAt48V = Math.round((batteryCapacityKwh * 1000) / 48);

    // Recommended Solar Array (accounting for 5 hours peak sun + 20% system losses)
    const requiredSolarKwh = totalDailyKwh * 1.25;
    const requiredSolarWatts = (requiredSolarKwh / sunHoursPerDay) * 1000;
    const numberOf550WPanels = Math.max(2, Math.ceil(requiredSolarWatts / 550));
    const totalPanelWattage = numberOf550WPanels * 550;

    // Estimated monthly fuel savings in Nigeria
    // Assuming typical petrol/diesel genset runs ~8 hours/day @ ~₦750/liter
    const estLitersSavedPerMonth = Math.round(totalDailyKwh * 1.6 * 30);
    const estMonthlyFuelSavings = estLitersSavedPerMonth * 750;

    return {
      totalContinuousWatts,
      totalDailyKwh,
      peakKw,
      inverterKva,
      batteryCapacityKwh: batteryCapacityKwh.toFixed(1),
      batteryAhAt48V,
      numberOf550WPanels,
      totalPanelWattage,
      estMonthlyFuelSavings,
      activeItems
    };
  }, [appliances, sunHoursPerDay]);

  const handleApply = () => {
    onApplyCalculationToQuote({
      totalDailyKwh: calculation.totalDailyKwh,
      peakWatts: calculation.totalContinuousWatts,
      recommendedInverterKva: `${calculation.inverterKva}kVA Pure Sine Inverter`,
      recommendedBatteryKwh: `${calculation.batteryCapacityKwh}kWh (approx. ${calculation.batteryAhAt48V}Ah @ 48V) Lithium LiFePO4`,
      recommendedPanelsWatts: `${calculation.totalPanelWattage}W (${calculation.numberOf550WPanels}x 550W Tier-1 Panels)`,
      appliancesBreakdown: calculation.activeItems.join(', ')
    });

    const el = document.getElementById('contact');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="calculator" className="py-16 md:py-24 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-amber-700" />
            <span>Interactive Load Estimator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Solar Requirement Calculator
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Select the appliances you wish to power in your home or office, adjust quantities and daily runtime hours to receive an instant engineering recommendation for inverter, lithium battery, and solar panel sizing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Appliance Selector & Adjuster */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Your Appliances</h3>
                <p className="text-xs text-slate-500">
                  Select quantities and daily operating hours
                </p>
              </div>
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
                title="Reset to default home configuration"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Defaults</span>
              </button>
            </div>

            {/* Appliance List Items */}
            <div className="space-y-3 max-h-[480px] overflow-y-auto pr-1">
              {appliances.map((app) => (
                <div
                  key={app.id}
                  className={`p-3.5 rounded-xl border transition-all ${
                    app.count > 0
                      ? 'bg-emerald-50/40 border-emerald-300 shadow-xs'
                      : 'bg-slate-50/60 border-slate-200'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    
                    {/* Item Info */}
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold ${
                        app.count > 0 ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'
                      }`}>
                        {app.defaultWatts}W
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">
                          {app.name}
                        </div>
                        <div className="text-xs text-slate-500">
                          Total: <strong>{app.count * app.defaultWatts} Watts</strong> continuous
                        </div>
                      </div>
                    </div>

                    {/* Controls: Count & Runtime */}
                    <div className="flex items-center gap-4 self-end sm:self-auto">
                      
                      {/* Hours Slider / Select */}
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs text-slate-500 font-medium whitespace-nowrap">Hours:</span>
                        <input
                          type="number"
                          min="0.5"
                          max="24"
                          step="0.5"
                          value={app.hours}
                          onChange={(e) => handleHoursChange(app.id, parseFloat(e.target.value) || 1)}
                          disabled={app.count === 0}
                          className="w-16 py-1 px-2 text-center text-xs font-bold bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-40"
                        />
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-lg p-0.5 shadow-2xs">
                        <button
                          onClick={() => handleCountChange(app.id, -1)}
                          disabled={app.count === 0}
                          className="w-7 h-7 flex items-center justify-center rounded text-slate-700 hover:bg-slate-100 disabled:opacity-30"
                          aria-label={`Decrease ${app.name}`}
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 text-center text-xs font-extrabold text-slate-900">
                          {app.count}
                        </span>
                        <button
                          onClick={() => handleCountChange(app.id, 1)}
                          className="w-7 h-7 flex items-center justify-center rounded text-slate-700 hover:bg-slate-100"
                          aria-label={`Increase ${app.name}`}
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Custom Appliance Form */}
            <form onSubmit={handleAddCustomAppliance} className="pt-4 border-t border-slate-200">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 block">
                + Add Custom Appliance / Heavy Machinery
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
                <div className="sm:col-span-6">
                  <input
                    type="text"
                    placeholder="e.g., Dental Chair, Welding Machine, Server"
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                    className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                  />
                </div>
                <div className="sm:col-span-3">
                  <input
                    type="number"
                    placeholder="Watts (e.g. 500)"
                    value={customWatts}
                    onChange={(e) => setCustomWatts(e.target.value)}
                    className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                  />
                </div>
                <div className="sm:col-span-3">
                  <button
                    type="submit"
                    className="w-full py-2 px-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-colors"
                  >
                    Add Appliance
                  </button>
                </div>
              </div>
            </form>

          </div>

          {/* Right Column: Calculated Results & Sizing Metrics */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-xl border border-slate-800 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Zap className="w-5 h-5 text-amber-400" />
                    <span>Estimated System Sizing</span>
                  </h3>
                  <p className="text-xs text-slate-400">
                    Engineered based on your selected appliance load
                  </p>
                </div>
                <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-bold rounded-md border border-emerald-500/30">
                  Tropical Sized
                </span>
              </div>

              {/* Two Top Metric Cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/80">
                  <div className="text-[11px] font-medium text-slate-400">Daily Energy Demand</div>
                  <div className="text-2xl font-extrabold text-emerald-400 mt-0.5">
                    {calculation.totalDailyKwh.toFixed(1)} <span className="text-sm font-bold text-slate-300">kWh/day</span>
                  </div>
                </div>

                <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/80">
                  <div className="text-[11px] font-medium text-slate-400">Peak Continuous Load</div>
                  <div className="text-2xl font-extrabold text-white mt-0.5">
                    {formatNumber(calculation.totalContinuousWatts)} <span className="text-sm font-bold text-slate-300">Watts</span>
                  </div>
                </div>
              </div>

              {/* Recommended Components Breakdown */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Recommended System Sizing:
                </div>

                {/* Inverter */}
                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Inverter Capacity</div>
                      <div className="text-sm font-bold text-white">
                        {calculation.inverterKva}kVA Pure Sine Wave
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">48V System</span>
                </div>

                {/* Battery Storage */}
                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <BatteryCharging className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Lithium Battery Storage</div>
                      <div className="text-sm font-bold text-emerald-400">
                        {calculation.batteryCapacityKwh} kWh LiFePO4
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">~{calculation.batteryAhAt48V}Ah @ 48V</span>
                </div>

                {/* Solar Panels */}
                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                      <Sun className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Solar PV Array</div>
                      <div className="text-sm font-bold text-white">
                        {formatNumber(calculation.totalPanelWattage)} Watts ({calculation.numberOf550WPanels} Panels)
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">550W Tier-1</span>
                </div>
              </div>

              {/* Estimated Monthly Fuel Savings */}
              <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-800/60 flex items-start gap-3">
                <TrendingDown className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-emerald-300">
                    Estimated Generator Fuel Savings
                  </div>
                  <div className="text-lg font-extrabold text-white mt-0.5">
                    ~ {formatNaira(calculation.estMonthlyFuelSavings)} / month
                  </div>
                  <p className="text-[11px] text-emerald-200/80 mt-0.5">
                    Based on eliminating 8-12 hours of generator fueling & servicing daily.
                  </p>
                </div>
              </div>

              {/* Action Button: Apply to Quote */}
              <button
                onClick={handleApply}
                className="w-full py-3.5 px-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold rounded-xl shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 text-sm"
                id="apply-calculator-to-quote-btn"
              >
                <span>Request Quotation with these Specs</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Engineering Disclaimer */}
              <div className="flex items-start gap-2 p-3 rounded-lg bg-slate-800/40 text-[11px] text-slate-400 border border-slate-800">
                <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <p>
                  <strong>Disclaimer:</strong> This calculator provides an engineering estimation. Actual consumption depends on ambient room temperature, inverter power factor, and startup inrush currents. Our certified engineers carry out on-site audits before final installation.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
