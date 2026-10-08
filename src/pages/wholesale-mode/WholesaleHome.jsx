/**
 * WholesaleHome.js
 * Phase 3 — Wholesale Mode (B2B) Main Marketplace Dashboard
 * Directly styled after reference image (Wholesale Marketplace - Source. Negotiate. Grow.)
 *
 * Features:
 *   • Top Navy Header:
 *       – "Wholesale Marketplace" & "Source. Negotiate. Grow."
 *       – Notification bell with badge & hamburger menu ☰
 *       – Search bar: "Find Local Dealers" with magnifying glass
 *   • "Bulk Deals of the Day" Section:
 *       – Link: "View All Deals >"
 *       – PP Woven Bags (25kg · White | ₹105 / bag | Min. Order: 500 bags)
 *       – PET Water Bottles (1L · Clear | ₹7.20 / piece | Min. Order: 1,000 pcs)
 *       – Corrugated Boxes (18 x 12 x 10 in | ₹22.50 / box | Min. Order: 250 boxes)
 *   • "Top Dealers Near You" Section:
 *       – Link: "📍 Change Location"
 *       – Sharma Packaging Co. (Delhi, India | MOQ: 500 units | Bulk Discounts)
 *       – Patel Plastics Pvt. Ltd. (Ahmedabad, India | MOQ: 1,000 units | Bulk Discounts)
 *       – Khan Traders (Mumbai, India | MOQ: 250 units | Bulk Discounts)
 *       – Verified Dealer badges + "Chat / Negotiate" buttons
 *   • Bottom B2B Navigation Bar (Home, Search, Orders, Messages, Profile)
 */

import React, { useState } from 'react';

// ─── Keyframe Animations & Hover Effects ──────────────────────────────────────────
const WH_KF_ID = 'wholesale-marketplace-kf';
if (typeof document !== 'undefined' && !document.getElementById(WH_KF_ID)) {
  const s = document.createElement('style');
  s.id = WH_KF_ID;
  s.textContent = `
    * { box-sizing: border-box; }
    .deal-card-hover:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(26, 86, 219, 0.1) !important;
      border-color: #93c5fd !important;
    }
    .deal-card-hover { transition: all 180ms ease; }
    .dealer-row-card:hover {
      box-shadow: 0 6px 20px rgba(26, 86, 219, 0.08) !important;
      border-color: #93c5fd !important;
    }
    .dealer-row-card { transition: all 180ms ease; }
    .chat-negotiate-btn:hover {
      background-color: #0b2046 !important;
      color: #ffffff !important;
    }
    .chat-negotiate-btn { transition: all 160ms ease; }
  `;
  document.head.appendChild(s);
}

// ─── Dummy Data (Exact match to reference photo) ──────────────────────────────────
const BULK_DEALS = [
  {
    id: 1,
    name: 'PP Woven Bags',
    spec: '25kg • White',
    price: '₹105 / bag',
    minOrder: 'Min. Order: 500 bags',
    icon: '🌾',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=160&h=160&fit=crop',
  },
  {
    id: 2,
    name: 'PET Water Bottles',
    spec: '1L • Clear',
    price: '₹7.20 / piece',
    minOrder: 'Min. Order: 1,000 pcs',
    icon: '🧴',
    img: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=160&h=160&fit=crop',
  },
  {
    id: 3,
    name: 'Corrugated Boxes',
    spec: '18 x 12 x 10 in',
    price: '₹22.50 / box',
    minOrder: 'Min. Order: 250 boxes',
    icon: '📦',
    img: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=160&h=160&fit=crop',
  },
];

const TOP_DEALERS = [
  {
    id: 1,
    name: 'Sharma Packaging Co.',
    category: 'Packaging Materials',
    location: 'Delhi, India',
    verified: true,
    moq: '500 units',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=faces',
  },
  {
    id: 2,
    name: 'Patel Plastics Pvt. Ltd.',
    category: 'Plastic Products',
    location: 'Ahmedabad, India',
    verified: true,
    moq: '1,000 units',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=faces',
  },
  {
    id: 3,
    name: 'Khan Traders',
    category: 'Industrial Supplies',
    location: 'Mumbai, India',
    verified: true,
    moq: '250 units',
    avatar: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=120&h=120&fit=crop',
  },
];

export default function WholesaleHome({
  isDark = false,
  onNavigateDealRoom = () => {},
  onNavigateCatalog = () => {},
  onNavigateProfile = () => {},
}) {
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');

  // Theming
  const bg = isDark ? '#080e1a' : '#f5f7fc';
  const cardBg = isDark ? '#0f1829' : '#ffffff';
  const borderCol = isDark ? '#1e2d47' : '#e2e8f0';
  const textPrimary = isDark ? '#f0f6ff' : '#0d1b3e';
  const textSecondary = isDark ? '#94a3b8' : '#64748b';
  const brandBlue = '#1a56db';
  const darkNav = '#091c3e';

  return (
    <div
      style={{
        backgroundColor: bg,
        color: textPrimary,
        minHeight: '100vh',
        fontFamily: "'Inter', sans-serif",
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* ─── Top Navy Header Bar (Wholesale Marketplace) ──────────────────────── */}
      <header
        style={{
          backgroundColor: darkNav,
          color: '#ffffff',
          padding: '20px 20px 24px',
        }}
      >
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {/* Top Row: Title + Notification & Hamburger */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: '22px',
                  fontWeight: 800,
                  margin: 0,
                  letterSpacing: '-0.01em',
                }}
              >
                Wholesale Marketplace
              </h1>
              <div style={{ fontSize: '12px', opacity: 0.85, marginTop: '2px' }}>
                Source. Negotiate. Grow.
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              {/* Notification Bell with Badge */}
              <div style={{ position: 'relative', cursor: 'pointer' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
                <div
                  style={{
                    position: 'absolute',
                    top: '-3px',
                    right: '-2px',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#3b82f6',
                  }}
                />
              </div>

              {/* Hamburger Menu ☰ */}
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#ffffff',
                  fontSize: '22px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                ☰
              </button>
            </div>
          </div>

          {/* Search Input Bar (Find Local Dealers) */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 4px 14px rgba(0,0,0,0.12)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Find Local Dealers"
              style={{
                border: 'none',
                background: 'transparent',
                fontSize: '14px',
                color: '#0d1b3e',
                outline: 'none',
                width: '100%',
              }}
            />
          </div>
        </div>
      </header>

      {/* ─── Main Content Container ─────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: '820px',
          width: '100%',
          margin: '0 auto',
          padding: '24px 16px 80px',
          display: 'flex',
          flexDirection: 'column',
          gap: '26px',
          flex: 1,
        }}
      >
        {/* ─── Section 1: Bulk Deals of the Day ──────────────────────────────── */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '14px',
            }}
          >
            <h2
              style={{
                fontSize: '20px',
                fontWeight: 800,
                margin: 0,
                color: textPrimary,
                letterSpacing: '-0.01em',
              }}
            >
              Bulk Deals of the Day
            </h2>

            <span
              onClick={onNavigateCatalog}
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: brandBlue,
                cursor: 'pointer',
              }}
            >
              View All Deals ›
            </span>
          </div>

          {/* Horizontal Scrolling Deals Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '14px',
            }}
          >
            {BULK_DEALS.map((deal) => (
              <div
                key={deal.id}
                onClick={onNavigateCatalog}
                className="deal-card-hover"
                style={{
                  backgroundColor: cardBg,
                  borderRadius: '16px',
                  border: `1px solid ${borderCol}`,
                  padding: '14px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                }}
              >
                {/* Image Container with BULK SAVE Badge */}
                <div
                  style={{
                    height: '110px',
                    borderRadius: '12px',
                    backgroundColor: '#f8fafc',
                    border: `1px solid ${borderCol}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    marginBottom: '10px',
                    fontSize: '44px',
                  }}
                >
                  {/* BULK SAVE Badge */}
                  <span
                    style={{
                      position: 'absolute',
                      top: '8px',
                      left: '8px',
                      backgroundColor: '#1d4ed8',
                      color: '#ffffff',
                      fontSize: '10px',
                      fontWeight: 800,
                      padding: '3px 8px',
                      borderRadius: '9999px',
                      letterSpacing: '0.04em',
                    }}
                  >
                    BULK SAVE
                  </span>
                  {deal.icon}
                </div>

                <h3
                  style={{
                    fontSize: '15px',
                    fontWeight: 800,
                    margin: '0 0 2px',
                    color: textPrimary,
                  }}
                >
                  {deal.name}
                </h3>
                <div style={{ fontSize: '12px', color: textSecondary }}>
                  {deal.spec}
                </div>

                <div
                  style={{
                    fontSize: '16px',
                    fontWeight: 900,
                    color: brandBlue,
                    marginTop: '8px',
                  }}
                >
                  {deal.price}
                </div>

                <div style={{ fontSize: '11px', color: textSecondary, marginTop: '2px' }}>
                  {deal.minOrder}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Section 2: Top Dealers Near You ───────────────────────────────── */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '14px',
            }}
          >
            <h2
              style={{
                fontSize: '20px',
                fontWeight: 800,
                margin: 0,
                color: textPrimary,
                letterSpacing: '-0.01em',
              }}
            >
              Top Dealers Near You
            </h2>

            <span
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: brandBlue,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              📍 Change Location
            </span>
          </div>

          {/* Dealers List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {TOP_DEALERS.map((dealer) => (
              <div
                key={dealer.id}
                className="dealer-row-card"
                style={{
                  backgroundColor: cardBg,
                  borderRadius: '16px',
                  border: `1px solid ${borderCol}`,
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                  flexWrap: 'wrap',
                  gap: '14px',
                }}
              >
                {/* Left: Avatar & Info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  {/* Avatar with Green Online Dot */}
                  <div style={{ position: 'relative' }}>
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        backgroundColor: '#e2e8f0',
                        border: '2px solid #ffffff',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      }}
                    >
                      <img
                        src={dealer.avatar}
                        alt={dealer.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '2px',
                        right: '2px',
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: '#16a34a',
                        border: '2px solid #ffffff',
                      }}
                    />
                  </div>

                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 800, margin: '0 0 2px', color: textPrimary }}>
                      {dealer.name}
                    </h3>
                    <div style={{ fontSize: '13px', color: textSecondary }}>
                      {dealer.category}
                    </div>
                    <div style={{ fontSize: '12px', color: textSecondary, marginTop: '2px' }}>
                      📍 {dealer.location}
                    </div>
                    <div
                      style={{
                        color: brandBlue,
                        fontSize: '12px',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        marginTop: '3px',
                      }}
                    >
                      ✓ Verified Dealer
                    </div>
                  </div>
                </div>

                {/* Middle Right: MOQ Badge */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '11px', color: textSecondary, fontWeight: 600 }}>
                      📋 MOQ
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 800, color: textPrimary }}>
                      {dealer.moq}
                    </div>
                    <span
                      style={{
                        backgroundColor: '#eff6ff',
                        color: brandBlue,
                        fontSize: '11px',
                        fontWeight: 700,
                        padding: '2px 8px',
                        borderRadius: '6px',
                        display: 'inline-block',
                        marginTop: '4px',
                      }}
                    >
                      Bulk Discounts
                    </span>
                  </div>

                  {/* Chat / Negotiate CTA */}
                  <button
                    onClick={onNavigateDealRoom}
                    className="chat-negotiate-btn"
                    style={{
                      backgroundColor: 'transparent',
                      color: '#0d1b3e',
                      border: `1.5px solid ${borderCol}`,
                      borderRadius: '10px',
                      padding: '10px 18px',
                      fontSize: '13px',
                      fontWeight: 700,
                      cursor: 'pointer',
                    }}
                  >
                    Chat / Negotiate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Bottom Navigation Bar (Home, Search, Orders, Messages, Profile) ── */}
      <nav
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: cardBg,
          borderTop: `1px solid ${borderCol}`,
          padding: '10px 16px',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          boxShadow: '0 -4px 16px rgba(0,0,0,0.04)',
          zIndex: 50,
        }}
      >
        {[
          { id: 'home', label: 'Home', icon: '🏠' },
          { id: 'search', label: 'Search', icon: '🔍' },
          { id: 'orders', label: 'Orders', icon: '📦' },
          { id: 'messages', label: 'Messages', icon: '💬' },
          { id: 'profile', label: 'Profile', icon: '👤', onClick: onNavigateProfile },
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                if (tab.onClick) tab.onClick();
              }}
              style={{
                background: 'none',
                border: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                cursor: 'pointer',
                color: isActive ? brandBlue : textSecondary,
              }}
            >
              <span style={{ fontSize: '20px' }}>{tab.icon}</span>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: isActive ? 800 : 500,
                  color: isActive ? brandBlue : textSecondary,
                }}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
