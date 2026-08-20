import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCategories } from './components/ProductCategories';
import { FeaturedProducts } from './components/FeaturedProducts';
import { SolarPackages } from './components/SolarPackages';
import { SolarCalculator } from './components/SolarCalculator';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProjectsPortfolio } from './components/ProjectsPortfolio';
import { TestimonialsSection } from './components/TestimonialsSection';
import { QuoteSection } from './components/QuoteSection';
import { Footer } from './components/Footer';
import { QuickQuoteModal } from './components/QuickQuoteModal';
import { ProductCategoryType, SolarPackage, ServiceItem, QuoteFormData } from './types';
import { MessageSquare, Phone, ChevronUp, Sun, Zap } from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategoryType | 'all'>('all');
  const [quickQuoteModalOpen, setQuickQuoteModalOpen] = useState(false);
  const [modalContext, setModalContext] = useState<{ title?: string; details?: string }>({});
  const [quoteSectionInitialData, setQuoteSectionInitialData] = useState<Partial<QuoteFormData>>({});

  const handleOpenQuoteModal = (context?: { title?: string; details?: string }) => {
    setModalContext(context || { title: 'Request a Solar Energy Quote' });
    setQuickQuoteModalOpen(true);
  };

  const handleSelectPackageQuote = (pkg: SolarPackage) => {
    // Fill the bottom quote section and scroll there
    setQuoteSectionInitialData({
      solarRequirement: `Turnkey Solar Package: ${pkg.name} (${pkg.capacity})`,
      estimatedBudget: pkg.priceDisplay,
      message: `I am interested in the ${pkg.name} (${pkg.capacity}). Includes: ${pkg.components.join(', ')}.`
    });

    const el = document.getElementById('contact');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleSelectServiceQuote = (service: ServiceItem) => {
    setQuoteSectionInitialData({
      solarRequirement: service.title,
      message: `Inquiry for engineering service: ${service.title}. Turnaround expectation: ${service.turnaroundTime}.`
    });

    const el = document.getElementById('contact');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleApplyCalculationToQuote = (calcSummary: {
    totalDailyKwh: number;
    peakWatts: number;
    recommendedInverterKva: string;
    recommendedBatteryKwh: string;
    recommendedPanelsWatts: string;
    appliancesBreakdown: string;
  }) => {
    setQuoteSectionInitialData({
      solarRequirement: `Custom Load: ${calcSummary.recommendedInverterKva}`,
      applianceDetails: `Daily Load: ${calcSummary.totalDailyKwh.toFixed(1)} kWh/day | Peak Continuous: ${calcSummary.peakWatts}W\nRecommended Inverter: ${calcSummary.recommendedInverterKva}\nRecommended Storage: ${calcSummary.recommendedBatteryKwh}\nRecommended PV Array: ${calcSummary.recommendedPanelsWatts}\nAppliances: ${calcSummary.appliancesBreakdown}`,
      message: `Hello Solara Engineers, please provide a quotation based on my calculated daily requirement of ${calcSummary.totalDailyKwh.toFixed(1)} kWh/day (${calcSummary.recommendedInverterKva}).`
    });
  };

  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-emerald-500 selection:text-white">
      {/* Header & Navigation */}
      <Navbar
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onExploreProducts={scrollToProducts}
          onOpenCalculator={scrollToCalculator}
        />

        {/* Product Categories */}
        <ProductCategories
          onSelectCategory={(cat) => setSelectedCategory(cat)}
        />

        {/* Featured Hardware Catalog with Filters & Live Modals */}
        <FeaturedProducts
          selectedCategory={selectedCategory}
          onCategoryChange={(cat) => setSelectedCategory(cat)}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* Predefined Turnkey Solar Packages */}
        <SolarPackages
          onSelectPackageQuote={handleSelectPackageQuote}
        />

        {/* Interactive Solar Sizing Load Calculator */}
        <SolarCalculator
          onApplyCalculationToQuote={handleApplyCalculationToQuote}
        />

        {/* Engineering Services Explorer */}
        <ServicesSection
          onSelectServiceQuote={handleSelectServiceQuote}
        />

        {/* About Company & Mission */}
        <AboutSection />

        {/* Why Choose Us 6 Pillars */}
        <WhyChooseUs />

        {/* Completed Projects Portfolio */}
        <ProjectsPortfolio
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* Customer Testimonials */}
        <TestimonialsSection />

        {/* Contact & Itemized Quote Section */}
        <QuoteSection
          initialData={quoteSectionInitialData}
        />
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={(cat) => setSelectedCategory(cat)}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Quick Quote Floating Modal */}
      <QuickQuoteModal
        isOpen={quickQuoteModalOpen}
        onClose={() => setQuickQuoteModalOpen(false)}
        contextTitle={modalContext.title}
        contextDetails={modalContext.details}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <a
          href="https://wa.me/2347016783058?text=Hello%20Solara%20Energy,%20I%20would%20like%20to%20inquire%20about%20a%20solar%20solution."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold px-4 py-3 rounded-full shadow-lg shadow-emerald-600/30 transition-all hover:scale-105"
          id="floating-whatsapp-btn"
          aria-label="Chat on WhatsApp"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-200"></span>
          </span>
          <MessageSquare className="w-5 h-5 fill-white text-emerald-600" />
          <span className="text-xs sm:text-sm font-bold tracking-wide">
            Chat on WhatsApp
          </span>
        </a>
      </aside>
    </div>
  );
}
