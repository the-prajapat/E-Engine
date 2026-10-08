/**
 * QuantityStepper.js
 * Phase 1 — Core UI Component
 *
 * Smart CTA button:
 *   • Default state  → "Add to Cart" full-width button
 *   • Active state   → "– qty +" stepper with animated transition
 * Supports optional max/min limits and onQuantityChange callback.
 * Dark mode via CSS vars.
 */

import React, { useState } from 'react';

// ─── Animation keyframe string (injected once) ─────────────────────────────────
const KEYFRAME_ID = 'qs-scale-in';
if (typeof document !== 'undefined' && !document.getElementById(KEYFRAME_ID)) {
  const style = document.createElement('style');
  style.id = KEYFRAME_ID;
  style.textContent = `
    @keyframes qsScaleIn {
      from { transform: scale(0.88); opacity: 0; }
      to   { transform: scale(1);    opacity: 1; }
    }
    @keyframes qsBounce {
      0%  { transform: scale(1); }
      40% { transform: scale(1.18); }
      70% { transform: scale(0.94); }
      100%{ transform: scale(1); }
    }
    .qs-stepper-enter { animation: qsScaleIn 200ms cubic-bezier(0.34,1.56,0.64,1) forwards; }
    .qs-bounce        { animation: qsBounce  280ms cubic-bezier(0.34,1.56,0.64,1) forwards; }
  `;
  document.head.appendChild(style);
}

// ─── Main Component ────────────────────────────────────────────────────────────

/**
 * @param {Object}   props
 * @param {Function} [props.onQuantityChange]  - Called with (newQty) every time qty changes
 * @param {Function} [props.onAddToCart]       - Called when first "Add to Cart" is tapped
 * @param {number}   [props.min=0]             - Minimum qty (0 = allows removal)
 * @param {number}   [props.max=99]            - Maximum qty
 * @param {number}   [props.initialQty=0]      - Pre-seeded quantity
 * @param {string}   [props.variant='primary'] - 'primary' | 'accent' (orange CTA)
 * @param {boolean}  [props.compact=false]     - Smaller size for tight product cards
 * @param {Object}   [props.style]             - Wrapper override
 */
const QuantityStepper = ({
  onQuantityChange,
  onAddToCart,
  min = 0,
  max = 99,
  initialQty = 0,
  variant = 'primary',
  compact = false,
  style = {},
}) => {
  const [qty, setQty] = useState(initialQty);
  const [bounce, setBounce] = useState(null); // 'minus' | 'plus'

  // ── Handlers ──
  const handleAdd = () => {
    setQty(1);
    onAddToCart && onAddToCart();
    onQuantityChange && onQuantityChange(1);
  };

  const triggerBounce = (side) => {
    setBounce(side);
    setTimeout(() => setBounce(null), 320);
  };

  const decrement = () => {
    triggerBounce('minus');
    const next = Math.max(min, qty - 1);
    setQty(next);
    onQuantityChange && onQuantityChange(next);
  };

  const increment = () => {
    triggerBounce('plus');
    const next = Math.min(max, qty + 1);
    setQty(next);
    onQuantityChange && onQuantityChange(next);
  };

  // ── Colors ──
  const isAccent  = variant === 'accent';
  const btnBg     = isAccent ? '#f97316' : '#1a56db';
  const btnHover  = isAccent ? '#ea6c0a' : '#1e429f';
  const stepperBg = isAccent
    ? 'rgba(249,115,22,0.08)'
    : 'rgba(26,86,219,0.08)';
  const stepperBorder = isAccent ? 'rgba(249,115,22,0.3)' : 'rgba(26,86,219,0.25)';
  const textColor = isAccent ? '#f97316' : '#1a56db';

  const height  = compact ? '34px' : '40px';
  const fontSize = compact ? '13px' : '15px';
  const iconSize = compact ? '18px' : '22px';

  // ─── Render: "Add to Cart" ───
  if (qty === 0) {
    return (
      <button
        id="qty-add-to-cart"
        onClick={handleAdd}
        aria-label="Add to cart"
        style={{
          ...styles.addBtn,
          background:   btnBg,
          height,
          fontSize,
          ...style,
        }}
        onMouseEnter={e => { e.currentTarget.style.background = btnHover; e.currentTarget.style.transform = 'translateY(-1px)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = btnBg;   e.currentTarget.style.transform = 'translateY(0)'; }}
      >
        Add to Cart
      </button>
    );
  }

  // ─── Render: Stepper ───
  return (
    <div
      className="qs-stepper-enter"
      style={{
        ...styles.stepper,
        background:   stepperBg,
        border:       `1.5px solid ${stepperBorder}`,
        height,
        ...style,
      }}
    >
      {/* Minus */}
      <button
        id="qty-decrement"
        aria-label="Decrease quantity"
        onClick={decrement}
        className={bounce === 'minus' ? 'qs-bounce' : ''}
        style={{ ...styles.stepBtn, color: textColor, fontSize: iconSize }}
      >
        −
      </button>

      {/* Count */}
      <span
        style={{ ...styles.count, color: textColor, fontSize }}
        aria-live="polite"
        aria-label={`Quantity: ${qty}`}
      >
        {qty}
      </span>

      {/* Plus */}
      <button
        id="qty-increment"
        aria-label="Increase quantity"
        onClick={increment}
        disabled={qty >= max}
        className={bounce === 'plus' ? 'qs-bounce' : ''}
        style={{
          ...styles.stepBtn,
          color:   qty >= max ? '#a0aec0' : textColor,
          fontSize: iconSize,
        }}
      >
        +
      </button>
    </div>
  );
};

// ─── Styles ────────────────────────────────────────────────────────────────────
const styles = {
  addBtn: {
    display:       'flex',
    alignItems:    'center',
    justifyContent:'center',
    width:         '100%',
    border:        'none',
    borderRadius:  '10px',
    color:         '#fff',
    fontWeight:    700,
    cursor:        'pointer',
    letterSpacing: '0.01em',
    transition:    'background 150ms ease, transform 150ms ease, box-shadow 150ms ease',
    boxShadow:     '0 2px 8px rgba(26,86,219,0.25)',
  },
  stepper: {
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'space-between',
    borderRadius:   '10px',
    overflow:       'hidden',
    width:          '100%',
  },
  stepBtn: {
    background:  'transparent',
    border:      'none',
    cursor:      'pointer',
    fontWeight:  700,
    padding:     '0 14px',
    height:      '100%',
    lineHeight:  1,
    transition:  'opacity 120ms ease',
    flexShrink:  0,
  },
  count: {
    fontWeight:  700,
    textAlign:   'center',
    flex:        1,
    userSelect:  'none',
  },
};

export default QuantityStepper;
