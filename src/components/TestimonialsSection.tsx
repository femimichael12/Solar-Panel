import React from 'react';
import { TESTIMONIALS } from '../data/testimonials';
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  MapPin, 
  MessageSquare,
  Sparkles,
  Zap
} from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
            <span>Verified Customer Feedback</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Homes & Businesses Across Nigeria
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Read firsthand accounts from families, doctors, tech executives, and commercial business owners who replaced noisy generators with Solara Energy.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between relative"
            >
              <Quote className="w-8 h-8 text-emerald-200 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>

                {/* Installed System Spec Tag */}
                <div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-100/60 text-emerald-900 text-xs font-semibold">
                  <Zap className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{testimonial.systemSize}</span>
                </div>
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {testimonial.role}
                  </p>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{testimonial.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
