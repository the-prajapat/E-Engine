/**
 * UserProfile.js
 * Shared Module — User Account & Profile Screen
 * Directly styled after reference image (media_1791378922... User Profile)
 *
 * Features:
 *   • Curved gradient blue top wave banner with delivery scooter silhouette
 *   • Profile avatar: Aarav Mehta (+91 98765 43210) with verified border
 *   • Menu list items with crisp icons and chevrons:
 *       – My Orders
 *       – Saved Addresses
 *       – Wallet & Payments
 *       – Help & Support
 *   • Settings section:
 *       – Interactive Dark Mode toggle switch
 *   • Role Switcher indicator (Retail ⇄ Wholesale)
 */

import React, { useState } from 'react';
import { applyTheme } from '../../ui-ux-design/theme.config.js';

// ─── Keyframe Animations & Global Styles ──────────────────────────────────────────
const PROFILE_KF_ID = 'user-profile-kf';
if (typeof document !== 'undefined' && !document.getElementById(PROFILE_KF_ID)) {
  const s = document.createElement('style');
  s.id = PROFILE_KF_ID;
  s.textContent = `
    * { box-sizing: border-box; }
    .profile-menu-row {
      transition: all 180ms ease;
    }
    .profile-menu-row:hover {
      transform: translateX(3px);
      box-shadow: 0 4px 16px rgba(26, 86, 219, 0.08) !important;
      border-color: #93c5fd !important;
    }
    .profile-menu-row:active {
      transform: scale(0.99);
    }
    .switch-slider {
      transition: transform 220ms ease;
    }
  `;
  document.head.appendChild(s);
}

export default function UserProfile({
  isDark = false,
  onToggleDarkMode = () => {},
  onNavigateOrders = () => {},
  onNavigateAddresses = () => {},
  onNavigateWallet = () => {},
  onNavigateSupport = () => {},
  onBack = () => {},
}) {
  const [darkModeActive, setDarkModeActive] = useState(isDark);

  const handleToggle = () => {
    const nextState = !darkModeActive;
    setDarkModeActive(nextState);
    applyTheme(nextState ? 'dark' : 'light');
    if (onToggleDarkMode) onToggleDarkMode(nextState);
  };

  const bg = darkModeActive ? '#070d1a' : '#f5f7fc';
  const cardBg = darkModeActive ? '#0f1829' : '#ffffff';
  const borderCol = darkModeActive ? '#1e2d47' : '#e2e8f0';
  const textPrimary = darkModeActive ? '#f0f6ff' : '#0d1b3e';
  const textSecondary = darkModeActive ? '#94a3b8' : '#64748b';
  const brandBlue = '#1a56db';

  const MENU_ITEMS = [
    {
      id: 'orders',
      title: 'My Orders',
      iconColor: '#1a56db',
      onClick: onNavigateOrders,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      ),
    },
    {
      id: 'addresses',
      title: 'Saved Addresses',
      iconColor: '#1a56db',
      onClick: onNavigateAddresses,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
    {
      id: 'wallet',
      title: 'Wallet & Payments',
      iconColor: '#1a56db',
      onClick: onNavigateWallet,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M6 8h12" />
          <circle cx="17" cy="14" r="1.5" />
        </svg>
      ),
    },
    {
      id: 'support',
      title: 'Help & Support',
      iconColor: '#1a56db',
      onClick: onNavigateSupport,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
      ),
    },
  ];

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
      {/* ─── Top Curved Blue Gradient Banner ─────────────────────────────────── */}
      <div
        style={{
          background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 55%, #3b82f6 100%)',
          padding: '24px 20px 48px',
          borderBottomLeftRadius: '32px',
          borderBottomRightRadius: '32px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 8px 24px rgba(37, 99, 235, 0.25)',
        }}
      >
        {/* Decorative Wave & Scooter Silhouette in Top Right */}
        <div
          style={{
            position: 'absolute',
            right: '16px',
            top: '20px',
            opacity: 0.22,
            pointerEvents: 'none',
          }}
        >
          <svg width="140" height="90" viewBox="0 0 100 65" fill="#ffffff">
            {/* Scooter silhouette */}
            <circle cx="28" cy="50" r="10" />
            <circle cx="78" cy="50" r="10" />
            <path d="M28 50 L42 50 L48 34 L72 34 L78 50" stroke="#ffffff" strokeWidth="4" fill="none" />
            <rect x="18" y="22" width="18" height="16" rx="3" />
            <path d="M68 20 C68 15 75 15 75 20 L72 34" stroke="#ffffff" strokeWidth="4" fill="none" />
            {/* Location pin above */}
            <circle cx="50" cy="12" r="5" />
          </svg>
        </div>

        {/* User Profile Card Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {/* Circular Photo Avatar with White Border */}
          <div
            style={{
              width: '82px',
              height: '82px',
              borderRadius: '50%',
              border: '3.5px solid #ffffff',
              boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
              overflow: 'hidden',
              flexShrink: 0,
              backgroundColor: '#e2e8f0',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&h=160&fit=crop&crop=faces"
              alt="Aarav Mehta"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>

          <div style={{ color: '#ffffff' }}>
            <h2
              style={{
                fontSize: '24px',
                fontWeight: 800,
                margin: 0,
                letterSpacing: '-0.02em',
              }}
            >
              Aarav Mehta
            </h2>
            <div
              style={{
                fontSize: '15px',
                fontWeight: 600,
                opacity: 0.92,
                marginTop: '4px',
                letterSpacing: '0.02em',
              }}
            >
              +91 98765 43210
            </div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                backgroundColor: 'rgba(255,255,255,0.2)',
                padding: '2px 8px',
                borderRadius: '9999px',
                fontSize: '11px',
                fontWeight: 700,
                marginTop: '6px',
              }}
            >
              ⭐ Prime Quick Member
            </div>
          </div>
        </div>
      </div>

      {/* ─── Profile Options Menu List ───────────────────────────────────────── */}
      <div
        style={{
          maxWidth: '480px',
          width: '100%',
          margin: '-16px auto 0',
          padding: '0 16px 32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          position: 'relative',
          zIndex: 5,
        }}
      >
        {/* Menu Buttons Group */}
        {MENU_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={item.onClick}
            className="profile-menu-row"
            style={{
              backgroundColor: cardBg,
              border: `1px solid ${borderCol}`,
              borderRadius: '16px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
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
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </div>
              <span
                style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: textPrimary,
                }}
              >
                {item.title}
              </span>
            </div>

            {/* Chevron Right */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        ))}

        {/* ─── Settings Section ──────────────────────────────────────────────── */}
        <div style={{ marginTop: '16px' }}>
          <div
            style={{
              fontSize: '13px',
              fontWeight: 700,
              color: textSecondary,
              marginBottom: '10px',
              paddingLeft: '4px',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            Settings
          </div>

          {/* Dark Mode Toggle Card */}
          <div
            style={{
              backgroundColor: cardBg,
              border: `1px solid ${borderCol}`,
              borderRadius: '16px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1a56db"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              </div>
              <span
                style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: textPrimary,
                }}
              >
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
                className="switch-slider"
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

        {/* ─── Mode Switching Banner ────────────────────────────────────────── */}
        <div
          style={{
            marginTop: '20px',
            backgroundColor: darkModeActive ? '#16233d' : '#eff6ff',
            border: `1px dashed ${brandBlue}`,
            borderRadius: '14px',
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: textPrimary }}>
              Need wholesale bulk procurement?
            </div>
            <div style={{ fontSize: '12px', color: textSecondary }}>
              Switch directly to B2B Wholesale Mode
            </div>
          </div>
          <button
            onClick={() => {
              window.location.hash = '/wholesale-mode/dealers';
            }}
            style={{
              backgroundColor: brandBlue,
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              padding: '6px 12px',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Switch Mode ➔
          </button>
        </div>
      </div>
    </div>
  );
}
