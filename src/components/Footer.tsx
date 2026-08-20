import React from 'react';
import { 
  Sun, 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  ShieldCheck, 
  ArrowUp,
  Award
} from 'lucide-react';
import { ProductCategoryType } from '../types';

interface FooterProps {
  onSelectCategory?: (category: ProductCategoryType | 'all') => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onOpenQuoteModal }) => {
  const scrollTo = (id: string, categoryFilter?: ProductCategoryType | 'all') => {
    if (categoryFilter && onSelectCategory) {
      onSelectCategory(categoryFilter);
    }
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      
      {/* Upper Footer CTA Strip */}
      <div className="bg-slate-900 border-b border-slate-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              Ready to eliminate generator noise and fuel bills?
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Speak with a certified solar engineer today for free advice and sizing calculations.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/2348030009988?text=Hello%20Solara%20Energy,%20I%20am%20interested%20in%20solar%20installation."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
            <button
              onClick={onOpenQuoteModal}
              className="px-5 py-2.5 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-xl text-xs sm:text-sm transition-colors"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand & Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-sm shadow-emerald-500/20">
                <Sun className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white font-display">
                  SOLARA
                </span>
                <span className="ml-1.5 text-xs px-1.5 py-0.5 rounded font-bold bg-emerald-900 text-emerald-300">
                  ENERGY
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Solara Energy Systems is Nigeria's premier engineering firm providing Tier-1 solar panels, pure sine wave inverters, and Grade-A LiFePO4 lithium batteries for uninterrupted 24/7 power independence.
            </p>

            {/* Certifications Badge */}
            <div className="flex items-center gap-3 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 bg-slate-900 px-2.5 py-1.5 rounded-lg border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>COREN Certified</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900 px-2.5 py-1.5 rounded-lg border border-slate-800">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Tier-1 Partner</span>
              </div>
            </div>
          </div>

          {/* Col 3: Solar Products */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Solar Products
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => scrollTo('products', 'solar-panels')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  Monocrystalline Panels (550W - 650W)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('products', 'inverters')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  Hybrid & Off-Grid Inverters
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('products', 'batteries')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  LiFePO4 Lithium Batteries
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('products', 'charge-controllers')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  MPPT Charge Controllers
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('products', 'accessories')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  DC Surge Boxes & Cables
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('systems')}
                  className="hover:text-emerald-400 transition-colors text-left text-emerald-400 font-semibold"
                >
                  Complete Solar Packages
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Engineering Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Services & Tools
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  Solar Panel Installation
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  Energy Load Auditing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  Lithium Battery Retrofits
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  Commercial Microgrids
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('calculator')}
                  className="hover:text-emerald-400 transition-colors text-left text-amber-400 font-semibold"
                >
                  Solar Load Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('projects')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  Completed Projects
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Contact & Offices
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Plot 14, Admiralty Way, Lekki Phase 1, Lagos State</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Suite 204, Capital Hub, Banex Expressway, Abuja</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+2348030009988" className="hover:text-white transition-colors">
                  +234 803 000 9988
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:info@solaraenergy.ng" className="hover:text-white transition-colors">
                  info@solaraenergy.ng
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} Solara Energy Systems Ltd. All rights reserved. Registered Solar EPC in Nigeria.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
