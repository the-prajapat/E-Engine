/**
 * BusinessDashboard.js
 * Phase 3 — Wholesale Mode (B2B) Corporate Profile & Business Management Dashboard
 * Directly styled after reference image (Prajapat Enterprises)
 *
 * Features:
 *   • Top Banner: Dark corporate blue with building architectural wireframe graphic
 *   • Profile: Male business avatar, "Prajapat Enterprises", "✓ Verified Business" green badge, GSTIN
 *   • Quick Stats Row:
 *       – Active Orders: 28 (₹12,45,000 in progress)
 *       – Total Spends: ₹45,60,000 (This Financial Year)
 *       – Saved Dealers: 156 (Across India)
 *   • Business Menu List:
 *       – Manage Tax & GST Documents
 *       – Wallet & Payments
 *       – Business Settings
 *       – Help & Support
 *   • Settings: Interactive Dark Mode toggle switch
 */

import React, { useState } from 'react';
import { applyTheme } from '../../ui-ux-design/theme.config.js';

// ─── Keyframe Animations & Styles ─────────────────────────────────────────────────
const BDASH_KF_ID = 'business-dash-kf';
if (typeof document !== 'undefined' && !document.getElementById(BDASH_KF_ID)) {
  const s = document.createElement('style');
  s.id = BDASH_KF_ID;
  s.textContent = `
    * { box-sizing: border-box; }
    .menu-row-hover:hover {
      transform: translateX(3px);
      border-color: #93c5fd !important;
      box-shadow: 0 4px 16px rgba(26, 86, 219, 0.08) !important;
    }
    .menu-row-hover { transition: all 180ms ease; }
    .stat-card-hover:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(26, 86, 219, 0.08) !important;
    }
    .stat-card-hover { transition: all 180ms ease; }
    .switch-thumb { transition: transform 200ms ease; }
  `;
  document.head.appendChild(s);
}

const STATS = [
  {
    id: 1,
    title: 'Active Orders',
    value: '28',
    subtext: '₹12,45,000 in progress',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        <line x1="9" y1="12" x2="15" y2="12" />
        <line x1="9" y1="16" x2="15" y2="16" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Total Spends',
    value: '₹45,60,000',
    subtext: 'This Financial Year',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M6 8h12" />
        <circle cx="17" cy="14" r="1.5" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Saved Dealers',
    value: '156',
    subtext: 'Across India',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const MENU_ITEMS = [
  {
    id: 'tax',
    title: 'Manage Tax & GST Documents',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    id: 'wallet',
    title: 'Wallet & Payments',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M6 8h12" />
        <circle cx="17" cy="14" r="1.5" />
      </svg>
    ),
  },
  {
    id: 'settings',
    title: 'Business Settings',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    id: 'support',
    title: 'Help & Support',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
  },
];

export default function BusinessDashboard({
  isDark = false,
  onToggleDarkMode = () => {},
  onSelectMenu = () => {},
  onBack = () => {},
}) {
  const [darkModeActive, setDarkModeActive] = useState(isDark);

  const handleToggle = () => {
    const next = !darkModeActive;
    setDarkModeActive(next);
    applyTheme(next ? 'dark' : 'light');
    if (onToggleDarkMode) onToggleDarkMode(next);
  };

  const bg = darkModeActive ? '#070d1a' : '#f5f7fc';
  const cardBg = darkModeActive ? '#0f1829' : '#ffffff';
  const borderCol = darkModeActive ? '#1e2d47' : '#e2e8f0';
  const textPrimary = darkModeActive ? '#f0f6ff' : '#0d1b3e';
  const textSecondary = darkModeActive ? '#94a3b8' : '#64748b';
  const brandBlue = '#1a56db';

  return (
    <div
      style={{
        backgroundColor: bg,
        color: textPrimary,
        minHeight: '100vh',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* ─── Top Corporate Banner (Dark Navy with Skyscraper Motif) ─────────── */}
      <div
        style={{
          background: 'linear-gradient(135deg, #091a3e 0%, #0d265a 60%, #133374 100%)',
          padding: '28px 20px 36px',
          position: 'relative',
          overflow: 'hidden',
          color: '#ffffff',
        }}
      >
        {/* Subtle Architectural Wireframe Skyscraper Graphic on Right */}
        <div
          style={{
            position: 'absolute',
            right: '-10px',
            top: '8px',
            opacity: 0.16,
            pointerEvents: 'none',
          }}
        >
          <svg width="180" height="150" viewBox="0 0 120 100" fill="none" stroke="#ffffff" strokeWidth="2.5">
            <polygon points="40,20 80,0 80,95 40,95" />
            <polygon points="80,0 115,18 115,95 80,95" />
            <polygon points="5,40 40,20 40,95 5,95" />
            <line x1="40" y1="35" x2="80" y2="15" />
            <line x1="40" y1="50" x2="80" y2="30" />
            <line x1="40" y1="65" x2="80" y2="45" />
            <line x1="40" y1="80" x2="80" y2="60" />
          </svg>
        </div>

        {/* Profile Details Container */}
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            gap: '18px',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {/* Circular Professional Avatar with White Ring */}
          <div
            style={{
              width: '88px',
              height: '88px',
              borderRadius: '50%',
              border: '3.5px solid #ffffff',
              boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
              overflow: 'hidden',
              backgroundColor: '#1e293b',
              flexShrink: 0,
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=faces"
              alt="Prajapat Enterprises"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div>
            <h1
              style={{
                fontSize: '24px',
                fontWeight: 800,
                margin: '0 0 6px',
                letterSpacing: '-0.02em',
                color: '#ffffff',
              }}
            >
              Prajapat Enterprises
            </h1>

            {/* Verified Business Green Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: '#16a34a',
                color: '#ffffff',
                padding: '3px 10px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: 700,
                marginBottom: '8px',
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Verified Business
            </div>

            {/* GSTIN Number */}
            <div
              style={{
                fontSize: '13px',
                opacity: 0.9,
                fontFamily: 'monospace',
                letterSpacing: '0.04em',
              }}
            >
              GSTIN: 27ABCDE1234F1Z5
            </div>
          </div>
        </div>
      </div>

      {/* ─── Main Content Container ─────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: '680px',
          margin: '0 auto',
          padding: '20px 16px 40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        {/* ─── Section: Quick Stats ─────────────────────────────────────────── */}
        <div>
          <h2
            style={{
              fontSize: '17px',
              fontWeight: 800,
              margin: '0 0 12px',
              color: textPrimary,
            }}
          >
            Quick Stats
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '12px',
            }}
          >
            {STATS.map((st) => (
              <div
                key={st.id}
                className="stat-card-hover"
                style={{
                  backgroundColor: cardBg,
                  border: `1px solid ${borderCol}`,
                  borderRadius: '16px',
                  padding: '14px 12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: '#eff6ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: brandBlue,
                  }}
                >
                  {st.icon}
                </div>

                <div style={{ fontSize: '12px', color: textSecondary, fontWeight: 600 }}>
                  {st.title}
                </div>

                <div
                  style={{
                    fontSize: '18px',
                    fontWeight: 800,
                    color: '#0d1b3e',
                    fontFamily: st.id === 2 ? "'Inter', sans-serif" : 'inherit',
                  }}
                >
                  {st.value}
                </div>

                <div style={{ fontSize: '11px', color: textSecondary }}>
                  {st.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Section: Business Menu ───────────────────────────────────────── */}
        <div>
          <h2
            style={{
              fontSize: '17px',
              fontWeight: 800,
              margin: '0 0 12px',
              color: textPrimary,
            }}
          >
            Business Menu
          </h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            {MENU_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => onSelectMenu(item.id)}
                className="menu-row-hover"
                style={{
                  backgroundColor: cardBg,
                  border: `1px solid ${borderCol}`,
                  borderRadius: '16px',
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                  outline: 'none',
                  textAlign: 'left',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      backgroundColor: '#eff6ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: brandBlue,
                    }}
                  >
                    {item.icon}
                  </div>
                  <span style={{ fontSize: '15px', fontWeight: 600, color: textPrimary }}>
                    {item.title}
                  </span>
                </div>

                <span style={{ fontSize: '18px', color: '#94a3b8', fontWeight: 700 }}>
                  ›
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ─── Section: Dark Mode Toggle ────────────────────────────────────── */}
        <div
          style={{
            backgroundColor: cardBg,
            border: `1px solid ${borderCol}`,
            borderRadius: '16px',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                backgroundColor: '#eff6ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: brandBlue,
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </div>
            <span style={{ fontSize: '15px', fontWeight: 600, color: textPrimary }}>
              Dark Mode
            </span>
          </div>

          {/* Toggle Switch */}
          <div
            onClick={handleToggle}
            style={{
              width: '52px',
              height: '30px',
              backgroundColor: darkModeActive ? '#1a56db' : '#cbd5e1',
              borderRadius: '9999px',
              padding: '3px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              transition: 'background-color 200ms ease',
            }}
          >
            <div
              className="switch-thumb"
              style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#ffffff',
                borderRadius: '50%',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                transform: darkModeActive ? 'translateX(22px)' : 'translateX(0)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
