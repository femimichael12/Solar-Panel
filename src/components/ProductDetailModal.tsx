import React from 'react';
import { Product } from '../types';
import { 
  X, 
  Check, 
  ShieldCheck, 
  Zap, 
  MessageSquare, 
  ArrowRight, 
  Star, 
  Layers,
  FileText,
  Clock,
  Package
} from 'lucide-react';
import { formatNaira, createWhatsAppQuoteLink } from '../lib/formatters';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
  onRequestQuote
}) => {
  if (!isOpen || !product) return null;

  const whatsappLink = createWhatsAppQuoteLink({
    productOrPackageName: `${product.brand} - ${product.name}`,
    capacity: product.powerRating,
    message: `I would like to purchase or request a quotation for ${product.name} (${product.powerRating}).`
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-emerald-100 text-emerald-800 uppercase tracking-wider">
              {product.brand}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              ID: {product.id}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* Product Image */}
            <div className="md:col-span-5 relative rounded-xl overflow-hidden bg-slate-100 border border-slate-200 aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                {product.inStock ? (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-600 text-white shadow-xs">
                    <Check className="w-3.5 h-3.5" />
                    In Stock (Ready for Dispatch)
                  </span>
                ) : (
                  <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-amber-600 text-white">
                    Available on Order
                  </span>
                )}
              </div>
            </div>

            {/* Product Quick Info */}
            <div className="md:col-span-7 space-y-3">
              <div className="flex items-center gap-1.5 text-amber-500 text-xs font-bold">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>{product.rating.toFixed(1)}</span>
                <span className="text-slate-400 font-normal">({product.reviewsCount} verified installations)</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                {product.name}
              </h3>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 text-slate-800 text-sm font-semibold">
                <Zap className="w-4 h-4 text-emerald-600" />
                <span>{product.powerRating}</span>
              </div>

              {/* Price */}
              <div className="pt-2">
                <div className="text-xs text-slate-500 font-medium">Estimated Price (Inclusive of VAT)</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700">
                  {formatNaira(product.price)}
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  *Discounts apply on wholesale panel pallets and complete bundle purchases.
                </p>
              </div>

              {/* Warranty Pill */}
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-emerald-50/80 border border-emerald-200 text-emerald-900 text-xs font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span><strong>Warranty:</strong> {product.warranty}</span>
              </div>
            </div>

          </div>

          {/* Description */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-slate-500">
              Overview
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-slate-500">
              Key Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div className="space-y-3 pt-2">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-slate-500">
              Technical Specifications
            </h4>
            <div className="rounded-xl border border-slate-200 overflow-hidden text-xs sm:text-sm">
              <table className="w-full text-left">
                <tbody>
                  {Object.entries(product.specifications).map(([key, val], i) => (
                    <tr key={key} className={i % 2 === 0 ? 'bg-slate-50/70' : 'bg-white'}>
                      <td className="px-4 py-2.5 font-semibold text-slate-700 w-1/2 border-r border-slate-200">
                        {key}
                      </td>
                      <td className="px-4 py-2.5 text-slate-900 font-medium">
                        {val}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>Chat on WhatsApp</span>
          </a>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-700 font-semibold rounded-xl border border-slate-300 text-xs sm:text-sm transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestQuote(product);
              }}
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md shadow-emerald-600/20 flex items-center gap-1.5 transition-all"
            >
              <span>Request Quote / Order</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
