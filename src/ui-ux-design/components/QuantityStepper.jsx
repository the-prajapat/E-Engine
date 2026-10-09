import React from 'react';

/**
 * QuantityStepper (Dumb Presentation Component)
 * Fluid, mobile-first "+ ADD" to "- count +" stepper with comfortable min 44px tap targets.
 *
 * @param {Object} props
 * @param {number} props.quantity
 * @param {Function} props.onChange
 */
export default function QuantityStepper({ quantity = 0, onChange }) {
  if (quantity <= 0) {
    return (
      <button
        onClick={() => onChange && onChange(1)}
        type="button"
        className="min-h-[44px] min-w-[68px] sm:min-w-[76px] px-2.5 sm:px-3 py-1.5 bg-white border border-emerald-600 text-emerald-700 hover:bg-emerald-50 active:bg-emerald-100 rounded-xl font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-1 select-none active:scale-95"
      >
        <span className="text-sm font-black leading-none">+</span>
        <span>ADD</span>
      </button>
    );
  }

  return (
    <div className="flex items-center justify-between min-h-[44px] min-w-[78px] sm:min-w-[88px] bg-emerald-600 text-white rounded-xl shadow-xs px-0.5 select-none">
      <button
        onClick={() => onChange && onChange(quantity - 1)}
        type="button"
        aria-label="Decrease quantity"
        className="w-8 sm:w-9 h-11 flex items-center justify-center text-white font-black text-base active:scale-90 transition-transform"
      >
        −
      </button>

      <span className="text-xs font-black min-w-[16px] text-center">
        {quantity}
      </span>

      <button
        onClick={() => onChange && onChange(quantity + 1)}
        type="button"
        aria-label="Increase quantity"
        className="w-8 sm:w-9 h-11 flex items-center justify-center text-white font-black text-base active:scale-90 transition-transform"
      >
        +
      </button>
    </div>
  );
}
