/**
 * WholesaleCartCheckout.js
 * Wholesale Mode (B2B) Cart & Checkout Screen
 * Directly styled after reference image (Wholesale Cart & Checkout)
 *
 * Features:
 *   • Header with back button and "Wholesale Cart & Checkout" title
 *   • "Bulk Order Review" banner with clipboard icon
 *   • Full B2B items table showing:
 *       – Item image, title, SKU, Size
 *       – Units & unit measure (PCS, ROLLS, SETS, PAIRS)
 *       – Unit price & pricing basis
 *       – Weight in kg
 *       – Line item total in INR
 *   • Dual summary metrics: "Total Units" (1,100) and "Total Weight" (47.50 kg)
 *   • Tax & Invoice Summary card with 18% GST breakdown and Grand Total
 *   • End-to-end encryption assurance badge
 *   • "Generate Invoice & Confirm Order" primary CTA button
 */

import React, { useState } from 'react';

// ─── Keyframe Animations & Hover Effects ──────────────────────────────────────────
const CHK_KF_ID = 'wholesale-checkout-kf';
if (typeof document !== 'undefined' && !document.getElementById(CHK_KF_ID)) {
  const s = document.createElement('style');
  s.id = CHK_KF_ID;
  s.textContent = `
    * { box-sizing: border-box; }
    .table-row-hover:hover {
      background-color: rgba(26, 86, 219, 0.03) !important;
    }
    .confirm-btn:hover {
      background-color: #0b1f4d !important;
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(11, 31, 77, 0.28) !important;
    }
    .confirm-btn:active {
      transform: scale(0.99);
    }
  `;
  document.head.appendChild(s);
}

// ─── Dummy B2B Order Items (Exact match to reference image) ──────────────────────
const BULK_ITEMS = [
  {
    id: 1,
    name: 'Industrial Ball Bearings',
    sku: 'BRG-6205-2RS',
    size: '25mm ID',
    units: 100,
    unitMeasure: 'PCS',
    unitPrice: 120.0,
    unitPriceLabel: 'per PCS',
    weight: 12.5,
    total: 12000.0,
    img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=100&h=100&fit=crop',
    iconEmoji: '⚙️',
  },
  {
    id: 2,
    name: 'Industrial PVC Tape',
    sku: 'TAP-PVC-19X20',
    size: '19mm x 20m',
    units: 200,
    unitMeasure: 'ROLLS',
    unitPrice: 35.0,
    unitPriceLabel: 'per ROLL',
    weight: 8.0,
    total: 7000.0,
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=100&h=100&fit=crop',
    iconEmoji: '📼',
  },
  {
    id: 3,
    name: 'SS Hex Bolt & Nut',
    sku: 'BOLT-SS-M8X25',
    size: 'M8 x 25mm',
    units: 500,
    unitMeasure: 'SETS',
    unitPrice: 8.5,
    unitPriceLabel: 'per SET',
    weight: 15.0,
    total: 4250.0,
    img: 'https://images.unsplash.com/photo-1589792905750-74630de88424?w=100&h=100&fit=crop',
    iconEmoji: '🔩',
  },
  {
    id: 4,
    name: 'Nitrile Coated Gloves',
    sku: 'GLV-NIT-L',
    size: 'Large',
    units: 300,
    unitMeasure: 'PAIRS',
    unitPrice: 45.0,
    unitPriceLabel: 'per PAIR',
    weight: 12.0,
    total: 13500.0,
    img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=100&h=100&fit=crop',
    iconEmoji: '🧤',
  },
];

export default function WholesaleCartCheckout({
  isDark = false,
  onBack = () => {},
  onConfirmOrder = () => {},
}) {
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  // Computations
  const subtotal = BULK_ITEMS.reduce((sum, item) => sum + item.total, 0); // 36,750
  const gstRate = 0.18;
  const gstAmount = Math.round(subtotal * gstRate); // 6,615
  const deliveryCharges = 500;
  const grandTotal = subtotal + gstAmount + deliveryCharges; // 43,865

  const totalUnits = BULK_ITEMS.reduce((sum, item) => sum + item.units, 0); // 1,100
  const totalWeight = BULK_ITEMS.reduce((sum, item) => sum + item.weight, 0); // 47.50

  // Theming
  const bg = isDark ? '#080e1a' : '#f5f7fc';
  const cardBg = isDark ? '#0f1829' : '#ffffff';
  const borderCol = isDark ? '#1e2d47' : '#e2e8f0';
  const textPrimary = isDark ? '#f0f6ff' : '#0d1b3e';
  const textSecondary = isDark ? '#94a3b8' : '#64748b';
  const brandBlue = '#1a56db';
  const deepNavy = '#0a235c';

  const handleConfirm = () => {
    setOrderConfirmed(true);
    if (onConfirmOrder) {
      onConfirmOrder({
        subtotal,
        gstAmount,
        grandTotal,
        totalUnits,
        totalWeight,
      });
    }
  };

  return (
    <div
      style={{
        backgroundColor: bg,
        color: textPrimary,
        minHeight: '100vh',
        fontFamily: "'Inter', system-ui, sans-serif",
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* ─── Top Header ──────────────────────────────────────────────────────── */}
      <header
        style={{
          backgroundColor: cardBg,
          borderBottom: `1px solid ${borderCol}`,
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 40,
        }}
      >
        <button
          onClick={onBack}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '22px',
            color: textPrimary,
            padding: '4px 8px',
            display: 'flex',
            alignItems: 'center',
            marginRight: '16px',
          }}
        >
          ‹
        </button>

        <h1
          style={{
            fontSize: '20px',
            fontWeight: 800,
            margin: 0,
            textAlign: 'center',
            flex: 1,
            letterSpacing: '-0.01em',
            paddingRight: '40px', // Balance back button
          }}
        >
          Wholesale Cart & Checkout
        </h1>
      </header>

      {/* ─── Main Content Container ─────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: '920px',
          width: '100%',
          margin: '0 auto',
          padding: '24px 16px 40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        {/* ─── Bulk Order Review Banner ─────────────────────────────────────── */}
        <div
          style={{
            backgroundColor: cardBg,
            borderRadius: '16px',
            border: `1px solid ${borderCol}`,
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
          }}
        >
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '10px',
              backgroundColor: '#eff6ff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: brandBlue,
              flexShrink: 0,
            }}
          >
            {/* Clipboard Icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
              <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
              <line x1="9" y1="12" x2="15" y2="12" />
              <line x1="9" y1="16" x2="15" y2="16" />
            </svg>
          </div>

          <div>
            <h2 style={{ fontSize: '16px', fontWeight: 800, margin: 0, color: textPrimary }}>
              Bulk Order Review
            </h2>
            <div style={{ fontSize: '13px', color: textSecondary, marginTop: '2px' }}>
              Review your items, totals and taxes before confirming.
            </div>
          </div>
        </div>

        {/* ─── Wholesale Items Table Card ───────────────────────────────────── */}
        <div
          style={{
            backgroundColor: cardBg,
            borderRadius: '16px',
            border: `1px solid ${borderCol}`,
            overflowX: 'auto',
            boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
          }}
        >
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              textAlign: 'left',
              minWidth: '650px',
            }}
          >
            <thead>
              <tr
                style={{
                  borderBottom: `1.5px solid ${borderCol}`,
                  fontSize: '12px',
                  fontWeight: 600,
                  color: textSecondary,
                }}
              >
                <th style={{ padding: '14px 18px' }}>Item Description</th>
                <th style={{ padding: '14px 12px', textAlign: 'center' }}>Units</th>
                <th style={{ padding: '14px 12px', textAlign: 'right' }}>Unit Price</th>
                <th style={{ padding: '14px 12px', textAlign: 'right' }}>Weight</th>
                <th style={{ padding: '14px 18px', textAlign: 'right' }}>Total</th>
              </tr>
            </thead>
            <tbody>
              {BULK_ITEMS.map((item) => (
                <tr
                  key={item.id}
                  className="table-row-hover"
                  style={{
                    borderBottom: `1px solid ${borderCol}`,
                    transition: 'background-color 150ms ease',
                  }}
                >
                  {/* Item Image + Details */}
                  <td style={{ padding: '14px 18px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <div
                        style={{
                          width: '52px',
                          height: '52px',
                          borderRadius: '10px',
                          backgroundColor: '#f1f5f9',
                          border: `1px solid ${borderCol}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '24px',
                          flexShrink: 0,
                          overflow: 'hidden',
                        }}
                      >
                        {item.iconEmoji}
                      </div>

                      <div>
                        <div style={{ fontWeight: 700, fontSize: '14px', color: textPrimary }}>
                          {item.name}
                        </div>
                        <div style={{ fontSize: '12px', color: textSecondary, marginTop: '2px' }}>
                          SKU: <span style={{ fontFamily: 'monospace' }}>{item.sku}</span>
                        </div>
                        <div style={{ fontSize: '12px', color: textSecondary }}>
                          Size: {item.size}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Units */}
                  <td style={{ padding: '14px 12px', textAlign: 'center' }}>
                    <div style={{ fontWeight: 700, fontSize: '14px', color: textPrimary }}>
                      {item.units}
                    </div>
                    <div style={{ fontSize: '11px', color: textSecondary, textTransform: 'uppercase' }}>
                      {item.unitMeasure}
                    </div>
                  </td>

                  {/* Unit Price */}
                  <td style={{ padding: '14px 12px', textAlign: 'right' }}>
                    <div style={{ fontWeight: 700, fontSize: '14px', color: textPrimary }}>
                      ₹{item.unitPrice.toFixed(2)}
                    </div>
                    <div style={{ fontSize: '11px', color: textSecondary }}>
                      {item.unitPriceLabel}
                    </div>
                  </td>

                  {/* Weight */}
                  <td style={{ padding: '14px 12px', textAlign: 'right' }}>
                    <div style={{ fontWeight: 700, fontSize: '14px', color: textPrimary }}>
                      {item.weight.toFixed(2)}
                    </div>
                    <div style={{ fontSize: '11px', color: textSecondary }}>
                      kg
                    </div>
                  </td>

                  {/* Total */}
                  <td style={{ padding: '14px 18px', textAlign: 'right' }}>
                    <div style={{ fontWeight: 800, fontSize: '15px', color: textPrimary, fontFamily: 'monospace' }}>
                      ₹{item.total.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ─── Metric Summaries: Total Units & Total Weight ──────────────────── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '14px',
          }}
        >
          {/* Card 1: Total Units */}
          <div
            style={{
              backgroundColor: cardBg,
              borderRadius: '16px',
              border: `1px solid ${borderCol}`,
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
            }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: '#eff6ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {/* Box icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: '12px', color: textSecondary, fontWeight: 600 }}>
                Total Units
              </div>
              <div style={{ fontSize: '22px', fontWeight: 800, color: textPrimary, marginTop: '2px' }}>
                {totalUnits.toLocaleString('en-IN')}
              </div>
            </div>
          </div>

          {/* Card 2: Total Weight */}
          <div
            style={{
              backgroundColor: cardBg,
              borderRadius: '16px',
              border: `1px solid ${borderCol}`,
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
            }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: '#eff6ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {/* Weight KG icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="7" r="4" />
                <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
                <text x="8.5" y="19" fontSize="6" fontWeight="bold" fill="#1a56db">KG</text>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: '12px', color: textSecondary, fontWeight: 600 }}>
                Total Weight
              </div>
              <div style={{ fontSize: '22px', fontWeight: 800, color: textPrimary, marginTop: '2px' }}>
                {totalWeight.toFixed(2)} <span style={{ fontSize: '14px', fontWeight: 600 }}>kg</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Tax & Invoice Summary Card ─────────────────────────────────────── */}
        <div
          style={{
            backgroundColor: cardBg,
            borderRadius: '16px',
            border: `1px solid ${borderCol}`,
            padding: '20px 24px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              borderBottom: `1px solid ${borderCol}`,
              paddingBottom: '14px',
              marginBottom: '16px',
            }}
          >
            {/* Document Rupee Icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="9" y1="13" x2="15" y2="13" />
              <line x1="9" y1="17" x2="13" y2="17" />
            </svg>
            <h3 style={{ fontSize: '16px', fontWeight: 800, margin: 0, color: textPrimary }}>
              Tax & Invoice Summary
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: textSecondary }}>
              <span>Subtotal</span>
              <span style={{ fontWeight: 700, color: textPrimary }}>
                ₹{subtotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
              </span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', color: textSecondary }}>
              <span>GST (18%)</span>
              <span style={{ fontWeight: 700, color: textPrimary }}>
                ₹{gstAmount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
              </span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', color: textSecondary }}>
              <span>Delivery Charges</span>
              <span style={{ fontWeight: 700, color: textPrimary }}>
                ₹{deliveryCharges.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
              </span>
            </div>

            <div
              style={{
                marginTop: '10px',
                paddingTop: '14px',
                borderTop: `1px solid ${borderCol}`,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span style={{ fontSize: '15px', fontWeight: 800, color: textPrimary }}>
                Grand Total (Inclusive of Taxes)
              </span>
              <span
                style={{
                  fontSize: '22px',
                  fontWeight: 900,
                  color: brandBlue,
                  fontFamily: 'monospace',
                }}
              >
                ₹{grandTotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
              </span>
            </div>
          </div>
        </div>

        {/* ─── Bottom Action & Security Bar ──────────────────────────────────── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            marginTop: '8px',
          }}
        >
          {/* Security Assurance */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', maxWidth: '300px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: '#eff6ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <span style={{ fontSize: '12px', color: textSecondary, lineHeight: '1.4' }}>
              Your order is secure and encrypted end-to-end.
            </span>
          </div>

          {/* Confirm Button */}
          <button
            onClick={handleConfirm}
            className="confirm-btn"
            style={{
              backgroundColor: deepNavy,
              color: '#ffffff',
              border: 'none',
              borderRadius: '12px',
              padding: '16px 28px',
              fontSize: '15px',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 4px 14px rgba(10, 35, 92, 0.22)',
              transition: 'all 200ms ease',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Generate Invoice & Confirm Order
          </button>
        </div>

        {/* Confirmation Modal / Alert */}
        {orderConfirmed && (
          <div
            style={{
              marginTop: '16px',
              backgroundColor: '#ecfdf5',
              border: '1.5px solid #10b981',
              borderRadius: '12px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: '#065f46',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '20px' }}>✅</span>
              <div>
                <strong>B2B Purchase Order Confirmed!</strong>
                <div style={{ fontSize: '12px', opacity: 0.9 }}>
                  Tax Invoice #INV-2026-9049 generated. Dispatched to registered warehouse.
                </div>
              </div>
            </div>
            <button
              onClick={() => setOrderConfirmed(false)}
              style={{
                background: 'none',
                border: 'none',
                color: '#065f46',
                cursor: 'pointer',
                fontWeight: 700,
              }}
            >
              ✕
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
