import React from 'react';
import { PRODUCT_CATEGORIES } from '../data/products';
import { ArrowRight, Layers } from 'lucide-react';
import { ProductCategoryType } from '../types';

interface ProductCategoriesProps {
  onSelectCategory: (catId: ProductCategoryType | 'all') => void;
}

export const ProductCategories: React.FC<ProductCategoriesProps> = ({ onSelectCategory }) => {
  const handleCategoryClick = (catId: string) => {
    if (catId === 'solar-systems') {
      const el = document.getElementById('systems');
      if (el) {
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        return;
      }
    }

    onSelectCategory(catId as ProductCategoryType);
    const el = document.getElementById('products');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="categories" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Product Categories</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Premium Solar Power Equipment
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Engineered for the Nigerian climate. We source directly from globally certified Tier-1 manufacturers to guarantee peak efficiency, long cycle life, and dependable performance.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PRODUCT_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="group relative bg-slate-50 hover:bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-emerald-500/60 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Category Image */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-xs text-slate-900 text-xs font-bold shadow-xs">
                    {category.badge}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3.5 text-xs text-white font-medium bg-slate-900/70 px-2 py-0.5 rounded">
                  {category.count}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {category.shortDesc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80">
                  <button
                    onClick={() => handleCategoryClick(category.id)}
                    className="w-full py-2.5 px-4 bg-white group-hover:bg-emerald-600 text-slate-800 group-hover:text-white font-semibold text-sm rounded-xl border border-slate-300 group-hover:border-emerald-600 shadow-xs transition-all flex items-center justify-center gap-2"
                  >
                    <span>Browse {category.title}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
