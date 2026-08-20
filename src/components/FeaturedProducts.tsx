import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import { Product, ProductCategoryType } from '../types';
import { 
  Search, 
  Filter, 
  Check, 
  Eye, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Star, 
  SlidersHorizontal,
  PackageCheck
} from 'lucide-react';
import { formatNaira } from '../lib/formatters';
import { ProductDetailModal } from './ProductDetailModal';

interface FeaturedProductsProps {
  selectedCategory: ProductCategoryType | 'all';
  onCategoryChange: (cat: ProductCategoryType | 'all') => void;
  onOpenQuoteModal: (context?: { title?: string; details?: string }) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  selectedCategory,
  onCategoryChange,
  onOpenQuoteModal
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string>('all');

  const categoriesList: { id: ProductCategoryType | 'all'; label: string }[] = [
    { id: 'all', label: 'All Products' },
    { id: 'solar-panels', label: 'Solar Panels' },
    { id: 'inverters', label: 'Inverters' },
    { id: 'batteries', label: 'Solar Batteries' },
    { id: 'charge-controllers', label: 'Charge Controllers' },
    { id: 'accessories', label: 'Accessories' }
  ];

  const allBrands = useMemo(() => {
    const brands = new Set(PRODUCTS.map((p) => p.brand));
    return ['all', ...Array.from(brands)];
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const matchesBrand = selectedBrand === 'all' || p.brand === selectedBrand;
      const matchesSearch = 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.powerRating.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesBrand && matchesSearch;
    });
  }, [selectedCategory, selectedBrand, searchQuery]);

  const handleRequestQuote = (product: Product) => {
    onOpenQuoteModal({
      title: `Quote Request for ${product.brand} ${product.name}`,
      details: `Product: ${product.name}\nBrand: ${product.brand}\nPower Rating: ${product.powerRating}\nEstimated Unit Price: ${formatNaira(product.price)}`
    });
  };

  return (
    <section id="products" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Zap className="w-3.5 h-3.5 text-emerald-700" />
              <span>Genuine Hardware Store</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Solar Hardware & Modules
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              Compare power ratings, manufacturer warranties, and wholesale pricing on certified equipment ready for immediate nationwide deployment.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs">
              Showing <strong className="text-slate-900 font-bold">{filteredProducts.length}</strong> items
            </span>
          </div>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs mb-8 space-y-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categoriesList.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onCategoryChange(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search bar & Brand dropdown */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-2 border-t border-slate-100">
            <div className="sm:col-span-8 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by product name, wattage, brand (e.g. Deye, 550W, Growatt, Lithium)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-slate-900 placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="sm:col-span-4 relative">
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full py-2.5 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
              >
                <option value="all">All Brands / Manufacturers</option>
                {allBrands.filter((b) => b !== 'all').map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300">
            <PackageCheck className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No products match your criteria</h3>
            <p className="text-sm text-slate-500 mt-1">
              Try adjusting your search terms or clearing the selected brand filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedBrand('all');
                onCategoryChange('all');
              }}
              className="mt-4 px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-emerald-400/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                {/* Product Thumbnail & Badges */}
                <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Brand Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-slate-900/85 backdrop-blur-xs text-white uppercase tracking-wider shadow-xs">
                      {product.brand}
                    </span>
                  </div>

                  {/* Stock Pill */}
                  <div className="absolute top-3 right-3">
                    {product.inStock ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-600 text-white shadow-xs">
                        <Check className="w-3 h-3" />
                        In Stock
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-600 text-white">
                        On Order
                      </span>
                    )}
                  </div>

                  {/* Rating Overlay */}
                  <div className="absolute bottom-2 left-3 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded text-[11px] font-bold text-slate-800 flex items-center gap-1 shadow-xs">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>{product.rating.toFixed(1)}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Power Rating Tag */}
                    <div className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded mb-2">
                      <Zap className="w-3 h-3" />
                      <span>{product.powerRating}</span>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2 min-h-[44px]">
                      {product.name}
                    </h3>

                    {/* Description preview */}
                    <p className="mt-1.5 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Warranty Tag */}
                    <div className="mt-3 flex items-center gap-1.5 text-[11px] text-slate-600 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate">{product.warranty}</span>
                    </div>
                  </div>

                  {/* Pricing & Actions */}
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <div className="flex items-baseline justify-between mb-3">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400">Unit Price</span>
                        <div className="text-lg font-extrabold text-slate-900">
                          {formatNaira(product.price)}
                        </div>
                      </div>
                      <span className="text-[10px] text-slate-400 font-medium">Incl. VAT</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setActiveModalProduct(product)}
                        className="py-2 px-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1"
                        id={`view-details-${product.id}`}
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Details</span>
                      </button>

                      <button
                        onClick={() => handleRequestQuote(product)}
                        className="py-2 px-2.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-xs font-bold rounded-lg shadow-xs transition-colors flex items-center justify-center gap-1"
                        id={`get-quote-${product.id}`}
                      >
                        <span>Get Quote</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={activeModalProduct}
        isOpen={Boolean(activeModalProduct)}
        onClose={() => setActiveModalProduct(null)}
        onRequestQuote={(product) => handleRequestQuote(product)}
      />
    </section>
  );
};
