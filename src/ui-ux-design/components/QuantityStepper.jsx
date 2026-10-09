import React from 'react';

/**
 * QuantityStepper (Dumb Presentation Component)
 * Dynamic "+ ADD" to "- count +" stepper with normalized 44px tap targets.
 *
 * @param {Object} props
 * @param {number} props.quantity
 * @param {Function} props.onChange
 * @param {string} [props.size='md']
 */
export default function QuantityStepper({ quantity = 0, onChange, size = 'md' }) {
  if (quantity <= 0) {
    return (
      <button
        onClick={() => onChange && onChange(1)}
        type="button"
        className="min-h-[44px] min-w-[76px] px-3.5 py-1.5 bg-white border border-emerald-600 text-emerald-700 hover:bg-emerald-50 active:bg-emerald-100 rounded-xl font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-1 select-none active:scale-95"
      >
        <span className="text-sm font-black">+</span>
        <span>ADD</span>
      </button>
    );
  }

  return (
    <div className="flex items-center justify-between min-h-[44px] min-w-[92px] bg-emerald-600 text-white rounded-xl shadow-xs px-1 select-none">
      <button
        onClick={() => onChange && onChange(quantity - 1)}
        type="button"
        aria-label="Decrease quantity"
        className="w-10 h-10 flex items-center justify-center text-white font-black text-lg active:scale-90 transition-transform"
      >
        −
      </button>

      <span className="text-xs font-black min-w-[20px] text-center px-1">
        {quantity}
      </span>

      <button
        onClick={() => onChange && onChange(quantity + 1)}
        type="button"
        aria-label="Increase quantity"
        className="w-10 h-10 flex items-center justify-center text-white font-black text-lg active:scale-90 transition-transform"
      >
        +
      </button>
    </div>
  );
}
