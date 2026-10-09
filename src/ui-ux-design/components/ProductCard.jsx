import React from 'react';
import QuantityStepper from './QuantityStepper.jsx';

/**
 * ProductCard Component (Dumb Presentation Component)
 * ISSUE 1 & ISSUE 2: Normalized mobile card with 44px+ tap targets, high contrast,
 * Deep Trust Blue, Quick-Commerce Green & Warning Orange badges.
 *
 * @param {Object} props
 * @param {Object} props.product
 * @param {string|number} props.product.id
 * @param {string} props.product.title
 * @param {number} props.product.price
 * @param {string} [props.product.category]
 * @param {string} [props.product.image]
 * @param {string} [props.product.weight]
 * @param {number} [props.product.moq]
 * @param {number} [props.quantity=0]
 * @param {Function} [props.onAddToCart]
 * @param {Function} [props.onQuantityChange]
 */
export default function ProductCard({
  product,
  quantity = 0,
  onAddToCart,
  onQuantityChange,
}) {
  if (!product) return null;

  const handleStep = (newQty) => {
    if (onQuantityChange) {
      onQuantityChange(product, newQty);
    } else if (onAddToCart && newQty > 0) {
      onAddToCart(product);
    }
  };

  return (
    <div className="flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm p-3 transition-all duration-200 hover:shadow-md relative overflow-hidden select-none">
      {/* Visual Badge / Image Area */}
      <div className="w-full h-32 rounded-xl bg-slate-50 border border-slate-100/80 flex items-center justify-center relative overflow-hidden mb-2.5">
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <span className="text-3xl">📦</span>
        )}

        {/* Top Badges */}
        {product.moq ? (
          <div className="absolute top-2 left-2 bg-orange-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs flex items-center gap-1">
            <span className="material-symbols-outlined text-[13px] leading-none">inventory_2</span>
            MOQ: {product.moq} Units
          </div>
        ) : (
          <div className="absolute top-2 left-2 bg-emerald-600 text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded-md shadow-xs flex items-center gap-0.5">
            <span className="material-symbols-outlined text-[12px] leading-none" style={{ fontVariationSettings: "'FILL' 1" }}>
              bolt
            </span>
            10 MINS
          </div>
        )}
      </div>

      {/* Category Pill */}
      {product.category && (
        <span className="self-start text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md mb-1.5">
          {product.category}
        </span>
      )}

      {/* Product Title */}
      <h3 className="text-xs font-bold text-slate-900 line-clamp-2 leading-snug mb-1 min-h-[32px]">
        {product.title}
      </h3>

      {/* Weight / Spec */}
      <p className="text-[11px] font-medium text-slate-500 mb-2">
        {product.weight || (product.moq ? `Bulk Lot • Tier 1` : '1 unit')}
      </p>

      {/* Price & Action Stepper */}
      <div className="mt-auto pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
        <div className="flex flex-col min-w-0">
          <span className="text-[10px] font-medium text-slate-400">Price</span>
          <span className="text-sm font-extrabold text-blue-900 truncate">
            ₹{Number(product.price).toLocaleString('en-IN')}
          </span>
        </div>

        <div className="shrink-0">
          <QuantityStepper
            quantity={quantity}
            onChange={handleStep}
          />
        </div>
      </div>
    </div>
  );
}
