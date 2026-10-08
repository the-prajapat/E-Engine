/**
 * WholesaleHubSearch.js
 * Wholesale Mode (B2B) Discovery & Search Screen
 * Directly styled after reference image (WholesaleHub - Find Wholesale Products)
 *
 * Features:
 *   • Top Navy Navbar with hamburger menu ☰, WholesaleHub logo, and notification bell
 *   • Large heading: "Find Wholesale Products"
 *   • Prominent search bar with magnifying glass and voice mic
 *   • Interactive filter pills:
 *       – Active "Minimum Order Quantity ✕"
 *       – "Location ⌵"
 *       – "Verified Dealers ⌵"
 *       – "Price Range ⌵"
 *   • Results tally bar: "Search Results 1,240,000+" and "Clear All ✕"
 *   • "Shop by Categories" stacked rows:
 *       – ⚙️ Industrial Hardware
 *       – 📦 Packaging Materials
 *       – ⚡ Electrical Supplies
 *   • "Suggested Distributors" list cards with verified badges and "View Profile" buttons:
 *       – Metro Supply Co. (Mumbai, India)
 *       – Packwell Industries (Delhi, India)
 */

import React, { useState } from 'react';

// ─── Keyframe Animations & Styles ─────────────────────────────────────────────────
const HUB_KF_ID = 'wholesale-hub-kf';
if (typeof document !== 'undefined' && !document.getElementById(HUB_KF_ID)) {
  const s = document.createElement('style');
  s.id = HUB_KF_ID;
  s.textContent = `
    * { box-sizing: border-box; }
    .hub-category-row:hover {
      background-color: #f8fafd !important;
      border-color: #93c5fd !important;
      transform: translateX(2px);
    }
    .distributor-card:hover {
      border-color: #1a56db !important;
      box-shadow: 0 6px 20px rgba(26, 86, 219, 0.08) !important;
    }
    .view-profile-btn:hover {
      background-color: #1a56db !important;
      color: #ffffff !important;
    }
  `;
  document.head.appendChild(s);
}

const CATEGORIES = [
  {
    id: 'hardware',
    title: 'Industrial Hardware',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    id: 'packaging',
    title: 'Packaging Materials',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    id: 'electrical',
    title: 'Electrical Supplies',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

const DISTRIBUTORS = [
  {
    id: 1,
    name: 'Metro Supply Co.',
    location: 'Mumbai, India',
    specialty: 'Specializes in Industrial Hardware',
    verified: true,
    initials: 'M',
    subLabel: 'METRO SUPPLY',
    logoBg: '#0f2952',
  },
  {
    id: 2,
    name: 'Packwell Industries',
    location: 'Delhi, India',
    specialty: 'Specializes in Packaging Materials',
    verified: true,
    initials: 'P',
    subLabel: 'PACKWELL INDUSTRIES',
    logoBg: '#1e5366',
  },
];

export default function WholesaleHubSearch({
  isDark = false,
  onSelectCategory = () => {},
  onSelectDistributor = () => {},
  onVoiceSearch = () => {},
}) {
  const [query, setQuery] = useState('');
  const [moqActive, setMoqActive] = useState(true);

  // Theming
  const bg = isDark ? '#080e1a' : '#f5f7fc';
  const cardBg = isDark ? '#0f1829' : '#ffffff';
  const borderCol = isDark ? '#1e2d47' : '#e2e8f0';
  const textPrimary = isDark ? '#f0f6ff' : '#0d1b3e';
  const textSecondary = isDark ? '#94a3b8' : '#64748b';
  const brandBlue = '#1a56db';
  const darkNav = '#0b2046';

  return (
    <div
      style={{
        backgroundColor: bg,
        color: textPrimary,
        minHeight: '100vh',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* ─── Top Navy Navbar ─────────────────────────────────────────────────── */}
      <header
        style={{
          backgroundColor: darkNav,
          color: '#ffffff',
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Hamburger Menu */}
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

          {/* WholesaleHub Brand Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255,255,255,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              </svg>
            </div>
            <span style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '-0.01em' }}>
              WholesaleHub
            </span>
          </div>
        </div>

        {/* Notification Bell with Badge */}
        <div style={{ position: 'relative', cursor: 'pointer' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <div
            style={{
              position: 'absolute',
              top: '-4px',
              right: '-4px',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#ef4444',
            }}
          />
        </div>
      </header>

      {/* ─── Search & Discovery Body ────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: '820px',
          width: '100%',
          margin: '0 auto',
          padding: '24px 16px 48px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        {/* Main Heading */}
        <h1
          style={{
            fontSize: '28px',
            fontWeight: 800,
            margin: '0 0 4px',
            color: isDark ? '#f0f6ff' : '#0c234b',
            letterSpacing: '-0.02em',
          }}
        >
          Find Wholesale Products
        </h1>

        {/* ─── Search Bar with Voice Mic ─────────────────────────────────────── */}
        <div
          style={{
            backgroundColor: cardBg,
            border: `1.5px solid ${borderCol}`,
            borderRadius: '9999px',
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
          }}
        >
          {/* Magnifying Glass */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>

          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, categories or dealers"
            style={{
              flex: 1,
              border: 'none',
              background: 'transparent',
              fontSize: '15px',
              color: textPrimary,
              outline: 'none',
            }}
          />

          {/* Voice Microphone Icon */}
          <button
            onClick={onVoiceSearch}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: brandBlue,
              display: 'flex',
              alignItems: 'center',
              padding: '4px',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" y1="19" x2="12" y2="23" />
              <line x1="8" y1="23" x2="16" y2="23" />
            </svg>
          </button>
        </div>

        {/* ─── Filter Chips Row ──────────────────────────────────────────────── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            overflowX: 'auto',
            paddingBottom: '4px',
          }}
        >
          {/* Active MOQ Filter Pill */}
          {moqActive && (
            <button
              onClick={() => setMoqActive(false)}
              style={{
                backgroundColor: brandBlue,
                color: '#ffffff',
                border: 'none',
                borderRadius: '9999px',
                padding: '8px 16px',
                fontSize: '13px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
              </svg>
              Minimum Order Quantity ✕
            </button>
          )}

          {/* Location Dropdown Pill */}
          <button
            style={{
              backgroundColor: cardBg,
              color: textPrimary,
              border: `1px solid ${borderCol}`,
              borderRadius: '9999px',
              padding: '8px 16px',
              fontSize: '13px',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            📍 Location ⌵
          </button>

          {/* Verified Dealers Dropdown Pill */}
          <button
            style={{
              backgroundColor: cardBg,
              color: textPrimary,
              border: `1px solid ${borderCol}`,
              borderRadius: '9999px',
              padding: '8px 16px',
              fontSize: '13px',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            🛡️ Verified Dealers ⌵
          </button>

          {/* Price Range Dropdown Pill */}
          <button
            style={{
              backgroundColor: cardBg,
              color: textPrimary,
              border: `1px solid ${borderCol}`,
              borderRadius: '9999px',
              padding: '8px 16px',
              fontSize: '13px',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            🏷️ Price Range ⌵
          </button>
        </div>

        {/* ─── Search Results Count Bar ──────────────────────────────────────── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '13px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontWeight: 600, color: textPrimary }}>Search Results</span>
            <span
              style={{
                backgroundColor: '#eff6ff',
                color: brandBlue,
                fontSize: '12px',
                fontWeight: 700,
                padding: '2px 8px',
                borderRadius: '6px',
              }}
            >
              1,240,000+
            </span>
          </div>

          <button
            onClick={() => {
              setQuery('');
              setMoqActive(false);
            }}
            style={{
              background: 'none',
              border: 'none',
              color: brandBlue,
              fontWeight: 700,
              cursor: 'pointer',
              fontSize: '13px',
            }}
          >
            Clear All ✕
          </button>
        </div>

        {/* ─── Section: Shop by Categories ──────────────────────────────────── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 800, margin: '4px 0 6px', color: textPrimary }}>
            Shop by Categories
          </h2>

          <div
            style={{
              backgroundColor: cardBg,
              borderRadius: '16px',
              border: `1px solid ${borderCol}`,
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
            }}
          >
            {CATEGORIES.map((cat, idx) => (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className="hub-category-row"
                style={{
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  borderBottom: idx < CATEGORIES.length - 1 ? `1px solid ${borderCol}` : 'none',
                  transition: 'all 160ms ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      backgroundColor: '#eff6ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {cat.icon}
                  </div>
                  <span style={{ fontSize: '15px', fontWeight: 600, color: textPrimary }}>
                    {cat.title}
                  </span>
                </div>

                <span style={{ fontSize: '18px', color: '#94a3b8' }}>›</span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Section: Suggested Distributors ──────────────────────────────── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h2 style={{ fontSize: '16px', fontWeight: 800, margin: 0, color: textPrimary }}>
              Suggested Distributors
            </h2>
            <span style={{ fontSize: '13px', color: brandBlue, fontWeight: 700, cursor: 'pointer' }}>
              View All ›
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {DISTRIBUTORS.map((dist) => (
              <div
                key={dist.id}
                className="distributor-card"
                style={{
                  backgroundColor: cardBg,
                  borderRadius: '16px',
                  border: `1px solid ${borderCol}`,
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                  transition: 'all 180ms ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  {/* Distributor Logo Box */}
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '12px',
                      backgroundColor: dist.logoBg,
                      color: '#ffffff',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '4px',
                      textAlign: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <div style={{ fontSize: '20px', fontWeight: 900 }}>{dist.initials}</div>
                    <div style={{ fontSize: '6px', fontWeight: 800, letterSpacing: '0.04em' }}>
                      {dist.subLabel}
                    </div>
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontWeight: 800, fontSize: '15px', color: textPrimary }}>
                        {dist.name}
                      </span>
                      {dist.verified && (
                        <span
                          style={{
                            color: brandBlue,
                            fontSize: '12px',
                            fontWeight: 700,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '3px',
                          }}
                        >
                          ✓ Verified
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: '12px', color: textSecondary, marginTop: '2px' }}>
                      📍 {dist.location}
                    </div>
                    <div style={{ fontSize: '12px', color: textSecondary, marginTop: '2px' }}>
                      {dist.specialty}
                    </div>
                  </div>
                </div>

                {/* View Profile Button */}
                <button
                  onClick={() => onSelectDistributor(dist.id)}
                  className="view-profile-btn"
                  style={{
                    backgroundColor: 'transparent',
                    border: `1.5px solid ${borderCol}`,
                    borderRadius: '10px',
                    padding: '8px 16px',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: textPrimary,
                    cursor: 'pointer',
                    transition: 'all 160ms ease',
                  }}
                >
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
