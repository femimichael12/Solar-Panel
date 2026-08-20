import React, { useState, useEffect } from 'react';
import { QuoteFormData } from '../types';
import { 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  Zap,
  Building,
  FileCheck
} from 'lucide-react';
import { createWhatsAppQuoteLink } from '../lib/formatters';

interface QuoteSectionProps {
  initialData?: Partial<QuoteFormData>;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({ initialData }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    locationState: 'Lagos State',
    propertyType: 'Home',
    solarRequirement: 'Complete Turnkey Solar & Battery System',
    estimatedBudget: '₦3,000,000 - ₦6,000,000',
    preferredTimeline: 'Within 2 Weeks',
    message: '',
    applianceDetails: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        ...initialData
      }));
    }
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable API processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const whatsappDirectLink = createWhatsAppQuoteLink({
    customerName: formData.fullName,
    location: formData.locationState,
    productOrPackageName: `${formData.propertyType} - ${formData.solarRequirement}`,
    message: `${formData.message}\nBudget: ${formData.estimatedBudget}\nTimeline: ${formData.preferredTimeline}${
      formData.applianceDetails ? `\n\nAppliance Load Specs:\n${formData.applianceDetails}` : ''
    }`
  });

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fast Turnaround Quotation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Request an Itemized Solar Quote
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Fill out the form below or chat directly with a certified engineer. Receive a customized Bill of Engineering Measurement & Evaluation (BEME) within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Form Card */}
          <div className="lg:col-span-7 bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-200">
            
            {submitted ? (
              <div className="py-8 text-center space-y-5 animate-in fade-in zoom-in-95">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Quote Request Received!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong>{formData.fullName}</strong>. A Solara senior electrical engineer will review your load specifications and reach out via phone/email within 12 business hours.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs text-slate-700 space-y-1.5 max-w-md mx-auto">
                  <div><strong>Location:</strong> {formData.locationState}</div>
                  <div><strong>Property:</strong> {formData.propertyType}</div>
                  <div><strong>Requirement:</strong> {formData.solarRequirement}</div>
                  <div><strong>Estimated Budget:</strong> {formData.estimatedBudget}</div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={whatsappDirectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm shadow-sm flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Expedite via WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        phoneNumber: '',
                        email: '',
                        locationState: 'Lagos State',
                        propertyType: 'Home',
                        solarRequirement: 'Complete Turnkey Solar & Battery System',
                        estimatedBudget: '₦3,000,000 - ₦6,000,000',
                        preferredTimeline: 'Within 2 Weeks',
                        message: '',
                        applianceDetails: ''
                      });
                    }}
                    className="w-full sm:w-auto px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-sm"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" id="main-quote-form">
                
                {/* Notice if loaded from Calculator */}
                {formData.applianceDetails && (
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-start gap-2">
                    <Zap className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Solar Calculator Specs Attached:</strong>
                      <p className="text-slate-700 mt-0.5 line-clamp-2">{formData.applianceDetails}</p>
                    </div>
                  </div>
                )}

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g., Engr. Tunde Adeleke"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full py-2.5 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      required
                      placeholder="e.g., 0701 678 3058"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full py-2.5 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-slate-900"
                    />
                  </div>
                </div>

                {/* Email & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g., tunde@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full py-2.5 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      State / Location in Nigeria *
                    </label>
                    <select
                      name="locationState"
                      value={formData.locationState}
                      onChange={handleChange}
                      className="w-full py-2.5 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-slate-900"
                    >
                      <option value="Lagos State (Island / Lekki / VI)">Lagos (Island / Lekki / VI / Ikoyi)</option>
                      <option value="Lagos State (Mainland / Ikeja / Magodo)">Lagos (Mainland / Ikeja / Magodo)</option>
                      <option value="Abuja FCT">Abuja FCT</option>
                      <option value="Rivers State (Port Harcourt)">Rivers State (Port Harcourt)</option>
                      <option value="Oyo State (Ibadan)">Oyo State (Ibadan)</option>
                      <option value="Ogun State (Abeokuta / Mowe / Sagamu)">Ogun State</option>
                      <option value="Enugu State">Enugu State</option>
                      <option value="Delta State (Asaba / Warri)">Delta State</option>
                      <option value="Edo State (Benin City)">Edo State</option>
                      <option value="Kano State">Kano State</option>
                      <option value="Kaduna State">Kaduna State</option>
                      <option value="Other Nigerian State">Other Nigerian State</option>
                    </select>
                  </div>
                </div>

                {/* Property Type & Solar Requirement */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Property Type *
                    </label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full py-2.5 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-slate-900"
                    >
                      <option value="Home">Home / Detached Duplex</option>
                      <option value="Apartment">Flat / Apartment</option>
                      <option value="Shop">Shop / Retail Store</option>
                      <option value="Office">Corporate Office / Commercial Space</option>
                      <option value="School">School / Educational Facility</option>
                      <option value="Hospital">Hospital / Medical Clinic</option>
                      <option value="Business">Factory / Production Plant</option>
                      <option value="Other">Other / Religious Center</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Solar Requirement *
                    </label>
                    <select
                      name="solarRequirement"
                      value={formData.solarRequirement}
                      onChange={handleChange}
                      className="w-full py-2.5 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-slate-900"
                    >
                      <option value="Complete Turnkey Solar & Battery System">Complete Turnkey Solar & Battery System</option>
                      <option value="Lithium Battery Bank Upgrade Only">Lithium Battery Bank Upgrade Only</option>
                      <option value="Inverter & Solar Panel Addition">Inverter & Solar Panel Addition</option>
                      <option value="Commercial 3-Phase Industrial Microgrid">Commercial 3-Phase Industrial Microgrid</option>
                      <option value="System Troubleshooting & Repair">System Troubleshooting & Repair</option>
                      <option value="Routine Maintenance & Panel Cleaning">Routine Maintenance & Panel Cleaning</option>
                      <option value="On-Site Energy Load Audit">On-Site Energy Load Audit</option>
                    </select>
                  </div>
                </div>

                {/* Estimated Budget & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Estimated Budget (NGN)
                    </label>
                    <select
                      name="estimatedBudget"
                      value={formData.estimatedBudget}
                      onChange={handleChange}
                      className="w-full py-2.5 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-slate-900"
                    >
                      <option value="Under ₦2.5 Million">Under ₦2.5 Million (Basic Starter)</option>
                      <option value="₦2.5 Million - ₦5 Million">₦2.5 Million - ₦5 Million (Standard Home)</option>
                      <option value="₦5 Million - ₦10 Million">₦5 Million - ₦10 Million (Premium Duplex / ACs)</option>
                      <option value="₦10 Million - ₦25 Million">₦10 Million - ₦25 Million (Executive / Heavy Load)</option>
                      <option value="₦25 Million+">₦25 Million+ (Commercial / Industrial)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Target Installation Timeline
                    </label>
                    <select
                      name="preferredTimeline"
                      value={formData.preferredTimeline}
                      onChange={handleChange}
                      className="w-full py-2.5 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-slate-900"
                    >
                      <option value="Immediately (Within 7 Days)">Immediately (Within 7 Days)</option>
                      <option value="Within 2 to 4 Weeks">Within 2 to 4 Weeks</option>
                      <option value="1 to 3 Months">1 to 3 Months (Building in progress)</option>
                      <option value="Just Inquiring / Researching">Just Inquiring / Researching</option>
                    </select>
                  </div>
                </div>

                {/* Message / Appliance details */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Additional Details / Specific Appliances
                  </label>
                  <textarea
                    rows={3}
                    name="message"
                    placeholder="List specific appliances you want to run (e.g., 2 Inverter ACs, 1 Freezer, 1HP Pumping Machine, etc.) or any roof constraints..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full py-2 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-slate-900 placeholder:text-slate-400"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 disabled:opacity-70 text-white font-bold rounded-xl text-sm shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Processing Request...</span>
                    ) : (
                      <>
                        <span>Submit Quote Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-slate-500 text-center pt-1">
                  🔒 We respect your privacy. No spam. Your phone number is only used for engineer contact and site quotation.
                </p>

              </form>
            )}

          </div>

          {/* Right Column: Contact Channels, Direct WhatsApp, Lagos & Abuja Hubs */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Direct Action Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-800 text-white shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Fast WhatsApp Response</h3>
                  <p className="text-xs text-emerald-100">
                    Connect directly with an engineering consultant
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-emerald-50 leading-relaxed">
                Prefer to chat right now? Send your building photos, energy bills, or roof specifications directly to our official WhatsApp business desk.
              </p>

              <a
                href="https://wa.me/2347016783058?text=Hello%20Solara%20Energy,%20I%20would%20like%20to%20get%20an%20urgent%20solar%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-white hover:bg-slate-100 text-emerald-900 font-bold rounded-xl text-center flex items-center justify-center gap-2 text-sm shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp (+234 701 678 3058)</span>
              </a>
            </div>

            {/* Direct Phone & Email Cards */}
            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                Direct Contact Lines
              </h3>

              <div className="space-y-3">
                <a
                  href="tel:+2347016783058"
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-700/60 hover:border-emerald-500/50 transition-colors"
                >
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-400">Hotline & Urgent Dispatch</div>
                    <div className="text-sm font-bold text-white">+234 (0) 701 678 3058</div>
                    <div className="text-[11px] text-emerald-400 font-medium">Mon - Sat: 8am - 6pm</div>
                  </div>
                </a>

                <a
                  href="mailto:quotes@solaraenergy.ng"
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-700/60 hover:border-emerald-500/50 transition-colors"
                >
                  <Mail className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-400">Engineering & Tenders</div>
                    <div className="text-sm font-bold text-white">quotes@solaraenergy.ng</div>
                    <div className="text-[11px] text-slate-400">info@solaraenergy.ng</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Physical Office Hubs */}
            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                Physical Experience Centers
              </h3>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-700/60 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-white">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Lagos Experience Hub</span>
                  </div>
                  <p className="text-slate-300 pl-5 leading-relaxed">
                    Plot 14, Admiralty Way, Lekki Phase 1, Lagos State, Nigeria.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-700/60 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-white">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Abuja Regional Office</span>
                  </div>
                  <p className="text-slate-300 pl-5 leading-relaxed">
                    Suite 204, Capital Hub Mall, Banex/Mabushi Expressway, Abuja FCT.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
