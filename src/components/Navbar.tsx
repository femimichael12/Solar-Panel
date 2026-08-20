import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Phone, 
  MessageSquare, 
  Menu, 
  X, 
  ChevronRight, 
  ShieldCheck, 
  Sparkles,
  Zap,
  Clock
} from 'lucide-react';
import { ProductCategoryType } from '../types';

interface NavbarProps {
  onOpenQuoteModal: (context?: { title?: string; details?: string }) => void;
  onSelectCategory?: (category: ProductCategoryType | 'all') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenQuoteModal,
  onSelectCategory 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        'home', 
        'categories', 
        'products', 
        'systems', 
        'calculator', 
        'services', 
        'about', 
        'why-us', 
        'projects', 
        'contact'
      ];

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string, categoryFilter?: ProductCategoryType | 'all') => {
    setMobileMenuOpen(false);
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

  return (
    <>
      {/* Top Notification & Fast Contact Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs font-medium border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Direct Tier-1 Importer & Certified Solar EPC</span>
            </div>
            <span className="hidden sm:inline text-slate-600">|</span>
            <div className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a 
              href="tel:+2348030009988" 
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+234 (0) 803 000 9988</span>
            </a>
            <a 
              href="https://wa.me/2348030009988?text=Hello%20Solara%20Energy,%20I%20would%20like%20to%20inquire%20about%20a%20solar%20installation."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-3' 
            : 'bg-white border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2.5 text-left group focus:outline-none"
              id="brand-logo-btn"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-sm shadow-emerald-500/20 group-hover:scale-105 transition-transform">
                <Sun className="w-6 h-6 animate-[spin_20s_linear_infinite]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-bold tracking-tight text-slate-900 font-display">
                    SOLARA
                  </span>
                  <span className="text-xs px-1.5 py-0.5 rounded font-bold bg-emerald-100 text-emerald-800 tracking-wider">
                    ENERGY
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 font-medium tracking-wide uppercase">
                  Power Systems & Engineering
                </p>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-slate-600">
              <button
                onClick={() => scrollToSection('home')}
                className={`px-3 py-2 rounded-lg transition-colors hover:text-emerald-700 hover:bg-slate-50 ${
                  activeSection === 'home' ? 'text-emerald-700 font-semibold bg-emerald-50/60' : ''
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('products', 'solar-panels')}
                className="px-3 py-2 rounded-lg transition-colors hover:text-emerald-700 hover:bg-slate-50"
              >
                Solar Panels
              </button>
              <button
                onClick={() => scrollToSection('systems')}
                className={`px-3 py-2 rounded-lg transition-colors hover:text-emerald-700 hover:bg-slate-50 ${
                  activeSection === 'systems' ? 'text-emerald-700 font-semibold bg-emerald-50/60' : ''
                }`}
              >
                Solar Systems
              </button>
              <button
                onClick={() => scrollToSection('products', 'batteries')}
                className="px-3 py-2 rounded-lg transition-colors hover:text-emerald-700 hover:bg-slate-50"
              >
                Batteries
              </button>
              <button
                onClick={() => scrollToSection('products', 'inverters')}
                className="px-3 py-2 rounded-lg transition-colors hover:text-emerald-700 hover:bg-slate-50"
              >
                Inverters
              </button>
              <button
                onClick={() => scrollToSection('products', 'accessories')}
                className="px-3 py-2 rounded-lg transition-colors hover:text-emerald-700 hover:bg-slate-50"
              >
                Accessories
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className={`px-3 py-2 rounded-lg transition-colors hover:text-emerald-700 hover:bg-slate-50 ${
                  activeSection === 'services' ? 'text-emerald-700 font-semibold bg-emerald-50/60' : ''
                }`}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`px-3 py-2 rounded-lg transition-colors hover:text-emerald-700 hover:bg-slate-50 ${
                  activeSection === 'about' ? 'text-emerald-700 font-semibold bg-emerald-50/60' : ''
                }`}
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-3 py-2 rounded-lg transition-colors hover:text-emerald-700 hover:bg-slate-50 ${
                  activeSection === 'contact' ? 'text-emerald-700 font-semibold bg-emerald-50/60' : ''
                }`}
              >
                Contact
              </button>
            </nav>

            {/* Desktop Action CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => scrollToSection('calculator')}
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
                title="Calculate your home power requirement"
              >
                <Zap className="w-3.5 h-3.5 text-amber-600" />
                <span>Solar Calculator</span>
              </button>

              <button
                onClick={() => onOpenQuoteModal()}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg shadow-sm shadow-emerald-600/20 transition-all hover:shadow-md"
                id="navbar-get-quote-btn"
              >
                <span>Get a Quote</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => onOpenQuoteModal()}
                className="px-3 py-1.5 text-xs font-bold text-white bg-emerald-600 rounded-lg shadow-sm"
              >
                Quote
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[110px] bg-white border-b border-slate-200 shadow-xl max-h-[85vh] overflow-y-auto px-4 py-5 animate-in slide-in-from-top-2">
            <div className="flex flex-col space-y-1">
              <button
                onClick={() => scrollToSection('home')}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-900 hover:bg-slate-50 text-left"
              >
                <span>Home</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
              
              <div className="pt-2 pb-1 border-t border-slate-100">
                <span className="px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Product Categories
                </span>
              </div>

              <button
                onClick={() => scrollToSection('products', 'solar-panels')}
                className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 text-left"
              >
                <span>Solar Panels (Tier-1)</span>
                <span className="text-xs text-emerald-600 font-medium">550W - 650W</span>
              </button>
              <button
                onClick={() => scrollToSection('products', 'inverters')}
                className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 text-left"
              >
                <span>Inverters (Hybrid & Off-Grid)</span>
                <span className="text-xs text-emerald-600 font-medium">1kVA - 50kVA</span>
              </button>
              <button
                onClick={() => scrollToSection('products', 'batteries')}
                className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 text-left"
              >
                <span>Batteries (LiFePO4 Lithium)</span>
                <span className="text-xs text-emerald-600 font-medium">5kWh - 60kWh</span>
              </button>
              <button
                onClick={() => scrollToSection('products', 'charge-controllers')}
                className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 text-left"
              >
                <span>Charge Controllers (MPPT)</span>
                <span className="text-xs text-slate-400">60A - 100A</span>
              </button>
              <button
                onClick={() => scrollToSection('products', 'accessories')}
                className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 text-left"
              >
                <span>Solar Accessories & Racks</span>
                <span className="text-xs text-slate-400">Breakers & Cables</span>
              </button>

              <div className="pt-2 pb-1 border-t border-slate-100">
                <span className="px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Solutions & Tools
                </span>
              </div>

              <button
                onClick={() => scrollToSection('systems')}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-900 hover:bg-slate-50 text-left"
              >
                <span>Pre-Configured Solar Packages</span>
                <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">All-In-One</span>
              </button>
              <button
                onClick={() => scrollToSection('calculator')}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-900 hover:bg-slate-50 text-left"
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span>Solar Load Sizing Calculator</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-900 hover:bg-slate-50 text-left"
              >
                <span>Installation & Engineering Services</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-900 hover:bg-slate-50 text-left"
              >
                <span>Completed Installations Portfolio</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-900 hover:bg-slate-50 text-left"
              >
                <span>About Solara Energy</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-900 hover:bg-slate-50 text-left"
              >
                <span>Contact & Offices</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-200 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-center shadow-sm"
              >
                Request a Custom Quote
              </button>
              <a
                href="https://wa.me/2348030009988?text=Hello%20Solara%20Energy,%20I%20would%20like%20to%20inquire%20about%20a%20solar%20installation."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-slate-900 text-emerald-400 font-semibold rounded-lg text-center flex items-center justify-center gap-2 text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat with an Engineer on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
