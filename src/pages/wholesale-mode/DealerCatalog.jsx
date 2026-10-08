/**
 * DealerCatalog.js
 * Phase 3 — Wholesale Mode (B2B) Dealer Inventory & Catalog View
 * Directly styled after reference image (Trusted Industrial Dealer - Precision Industrial Supplies)
 *
 * Features:
 *   • Dealer Header Banner:
 *       – Shield badge icon with checkmark
 *       – Title: "Trusted Industrial Dealer"
 *       – Dealer Name: "Precision Industrial Supplies Pvt. Ltd." + "✓ Verified"
 *       – Location: "📍 Mumbai, Maharashtra, India"
 *       – Industrial factory sketch overlay
 *   • Header Controls:
 *       – "Bulk Products" title
 *       – Search input: "Search products" with magnifying glass
 *       – Filter funnel button
 *   • 2-Column Product Cards Grid:
 *       – Deep Groove Ball Bearing ($120.00 / unit, MOQ: 50 units)
 *       – Hex Bolt (SS 304) ($18.50 / unit, MOQ: 200 units)
 *       – Gate Valve (Flanged) ($1,850.00 / unit, MOQ: 10 units)
 *       – Hydraulic Hose (High Pressure) ($240.00 / unit, MOQ: 25 units)
 *   • "Add to Bulk Cart" full-width solid blue buttons with quantity increment
 *   • Floating bulk cart summary drawer
 */

import React, { useState } from 'react';

// ─── Keyframe Animations & Styles ─────────────────────────────────────────────────
const DCAT_KF_ID = 'dealer-cat-kf';
if (typeof document !== 'undefined' && !document.getElementById(DCAT_KF_ID)) {
  const s = document.createElement('style');
  s.id = DCAT_KF_ID;
  s.textContent = `
    * { box-sizing: border-box; }
    .b2b-prod-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 24px rgba(26, 86, 219, 0.1) !important;
      border-color: #93c5fd !important;
    }
    .b2b-prod-card { transition: all 200ms ease; }
    .bulk-cart-btn:hover {
      background-color: #0b1f4d !important;
      transform: translateY(-1px);
    }
    .bulk-cart-btn:active { transform: scale(0.98); }
  `;
  document.head.appendChild(s);
}

// ─── Dummy Data (Exact match to reference photo) ──────────────────────────────────
const DEALER_INFO = {
  title: 'Trusted Industrial Dealer',
  name: 'Precision Industrial Supplies Pvt. Ltd.',
  verified: true,
  location: 'Mumbai, Maharashtra, India',
};

const PRODUCTS = [
  {
    id: 1,
    name: 'Deep Groove Ball Bearing',
    price: 120.0,
    priceDisplay: '$120.00 / unit',
    moq: 50,
    moqDisplay: '50 units',
    icon: '⚙️',
    img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=200&h=200&fit=crop',
  },
  {
    id: 2,
    name: 'Hex Bolt (SS 304)',
    price: 18.5,
    priceDisplay: '$18.50 / unit',
    moq: 200,
    moqDisplay: '200 units',
    icon: '🔩',
    img: 'https://images.unsplash.com/photo-1589792905750-74630de88424?w=200&h=200&fit=crop',
  },
  {
    id: 3,
    name: 'Gate Valve (Flanged)',
    price: 1850.0,
    priceDisplay: '$1,850.00 / unit',
    moq: 10,
    moqDisplay: '10 units',
    icon: '🚰',
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=200&h=200&fit=crop',
  },
  {
    id: 4,
    name: 'Hydraulic Hose (High Pressure)',
    price: 240.0,
    priceDisplay: '$240.00 / unit',
    moq: 25,
    moqDisplay: '25 units',
    icon: '〰️',
    img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&h=200&fit=crop',
  },
];

export default function DealerCatalog({
  isDark = false,
  onBack = () => {},
  onNavigateCheckout = () => {},
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartQuantities, setCartQuantities] = useState({});

  const handleAdd = (id, moq) => {
    setCartQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + moq,
    }));
  };

  const totalCartCount = Object.values(cartQuantities).reduce((a, b) => a + b, 0);

  // Theming
  const bg = isDark ? '#080e1a' : '#f5f7fc';
  const cardBg = isDark ? '#0f1829' : '#ffffff';
  const borderCol = isDark ? '#1e2d47' : '#e2e8f0';
  const textPrimary = isDark ? '#f0f6ff' : '#0d1b3e';
  const textSecondary = isDark ? '#94a3b8' : '#64748b';
  const brandBlue = '#1a56db';
  const deepNavy = '#0a235c';

  return (
    <div
      style={{
        backgroundColor: bg,
        color: textPrimary,
        minHeight: '100vh',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: '920px',
          margin: '0 auto',
          padding: '20px 16px 60px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        {/* ─── Top Dealer Banner (Trusted Industrial Dealer) ────────────────── */}
        <div
          style={{
            backgroundColor: cardBg,
            borderRadius: '20px',
            border: `1px solid ${borderCol}`,
            padding: '22px 26px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Subtle Factory Sketch Illustration in Background */}
          <div
            style={{
              position: 'absolute',
              right: '16px',
              top: '8px',
              opacity: 0.12,
              pointerEvents: 'none',
            }}
          >
            <svg width="180" height="110" viewBox="0 0 100 60" fill="none" stroke="#1a56db" strokeWidth="1.8">
              <path d="M10 50 L10 30 L25 40 L25 30 L40 40 L40 20 L55 30 L55 50" />
              <rect x="55" y="10" width="35" height="40" />
              <circle cx="72" cy="30" r="8" />
              <line x1="72" y1="18" x2="72" y2="42" />
              <line x1="60" y1="30" x2="84" y2="30" />
            </svg>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', position: 'relative', zIndex: 2 }}>
            {/* Shield with Checkmark Badge */}
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                backgroundColor: '#eff6ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1.5px solid #dbeafe',
                flexShrink: 0,
              }}
            >
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
            </div>

            <div>
              <h1
                style={{
                  fontSize: '26px',
                  fontWeight: 900,
                  color: '#0d2b6b',
                  margin: '0 0 6px',
                  letterSpacing: '-0.02em',
                }}
              >
                {DEALER_INFO.title}
              </h1>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '15px', fontWeight: 700, color: textPrimary }}>
                  {DEALER_INFO.name}
                </span>
                <span
                  style={{
                    color: '#2563eb',
                    fontSize: '12px',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Verified
                </span>
              </div>

              <div style={{ fontSize: '13px', color: textSecondary, marginTop: '4px' }}>
                📍 {DEALER_INFO.location}
              </div>
            </div>
          </div>
        </div>

        {/* ─── Controls Header: Bulk Products Title + Search & Filter ─────────── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '14px',
          }}
        >
          <h2
            style={{
              fontSize: '22px',
              fontWeight: 800,
              margin: 0,
              color: textPrimary,
              letterSpacing: '-0.01em',
            }}
          >
            Bulk Products
          </h2>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Search Input */}
            <div
              style={{
                backgroundColor: cardBg,
                border: `1.5px solid ${borderCol}`,
                borderRadius: '12px',
                padding: '8px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                width: '240px',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products"
                style={{
                  border: 'none',
                  background: 'transparent',
                  fontSize: '13px',
                  color: textPrimary,
                  outline: 'none',
                  width: '100%',
                }}
              />
            </div>

            {/* Filter Funnel Icon Button */}
            <button
              style={{
                backgroundColor: cardBg,
                border: `1.5px solid ${borderCol}`,
                borderRadius: '12px',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: textPrimary,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
              </svg>
            </button>
          </div>
        </div>

        {/* ─── 2-Column Product Cards Grid ──────────────────────────────────── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px',
          }}
        >
          {PRODUCTS.filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase())).map((prod) => (
            <div
              key={prod.id}
              className="b2b-prod-card"
              style={{
                backgroundColor: cardBg,
                borderRadius: '18px',
                border: `1px solid ${borderCol}`,
                padding: '18px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
              }}
            >
              <div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  {/* Product Thumbnail */}
                  <div
                    style={{
                      width: '90px',
                      height: '90px',
                      borderRadius: '14px',
                      backgroundColor: '#f8fafc',
                      border: `1px solid ${borderCol}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '44px',
                      flexShrink: 0,
                      overflow: 'hidden',
                    }}
                  >
                    {prod.icon}
                  </div>

                  {/* Title & Wholesale Price */}
                  <div>
                    <h3
                      style={{
                        fontSize: '16px',
                        fontWeight: 800,
                        margin: '0 0 8px',
                        color: textPrimary,
                        lineHeight: '1.3',
                      }}
                    >
                      {prod.name}
                    </h3>
                    <div style={{ fontSize: '12px', color: textSecondary }}>
                      Wholesale Price
                    </div>
                    <div
                      style={{
                        fontSize: '18px',
                        fontWeight: 900,
                        color: '#1a56db',
                        marginTop: '2px',
                      }}
                    >
                      {prod.priceDisplay}
                    </div>
                  </div>
                </div>

                {/* MOQ Tag */}
                <div
                  style={{
                    marginTop: '16px',
                    fontSize: '13px',
                    color: textSecondary,
                  }}
                >
                  MOQ
                  <div style={{ fontWeight: 800, color: textPrimary, fontSize: '14px' }}>
                    {prod.moqDisplay}
                  </div>
                </div>
              </div>

              {/* Add to Bulk Cart Button */}
              <button
                onClick={() => handleAdd(prod.id, prod.moq)}
                className="bulk-cart-btn"
                style={{
                  width: '100%',
                  backgroundColor: deepNavy,
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '12px',
                  fontSize: '14px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  marginTop: '16px',
                  transition: 'all 160ms ease',
                }}
              >
                {cartQuantities[prod.id] ? `Added (${cartQuantities[prod.id]} units)` : 'Add to Bulk Cart'}
              </button>
            </div>
          ))}
        </div>

        {/* ─── Floating Bulk Cart Footer ────────────────────────────────────── */}
        {totalCartCount > 0 && (
          <div
            style={{
              position: 'fixed',
              bottom: '24px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#0a235c',
              color: '#ffffff',
              borderRadius: '9999px',
              padding: '14px 28px',
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              boxShadow: '0 8px 32px rgba(10, 35, 92, 0.35)',
              zIndex: 50,
            }}
          >
            <div>
              <div style={{ fontSize: '14px', fontWeight: 800 }}>
                {totalCartCount} units in Bulk Cart
              </div>
              <div style={{ fontSize: '11px', opacity: 0.8 }}>
                Ready for Tax Invoice & Dispatch
              </div>
            </div>

            <button
              onClick={onNavigateCheckout}
              style={{
                backgroundColor: '#ffffff',
                color: '#0a235c',
                border: 'none',
                borderRadius: '9999px',
                padding: '8px 18px',
                fontSize: '13px',
                fontWeight: 800,
                cursor: 'pointer',
              }}
            >
              Checkout Now ➔
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
