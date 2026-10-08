/**
 * RoleSelection.js
 * Onboarding / Mode Selection Screen
 * Directly designed after reference media_1791378922690.jpg
 *
 * Prompts user: "How will you use our store?"
 * Option 1: "For Personal Use (Retail)" -> Launches B2C Quick-Commerce Mode
 * Option 2: "For Business (Wholesale)" -> Launches B2B Corporate Wholesale Mode
 */

import React, { useState } from 'react';

// ─── Keyframe Animations ───────────────────────────────────────────────────────────
const ROLE_KF_ID = 'role-selection-kf';
if (typeof document !== 'undefined' && !document.getElementById(ROLE_KF_ID)) {
  const s = document.createElement('style');
  s.id = ROLE_KF_ID;
  s.textContent = `
    * { box-sizing: border-box; }
    @keyframes popIn {
      from { opacity: 0; transform: scale(0.96) translateY(12px); }
      to { opacity: 1; transform: scale(1) translateY(0); }
    }
    .role-card-btn {
      transition: all 240ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    .role-card-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 32px rgba(26, 86, 219, 0.16) !important;
      border-color: #1a56db !important;
    }
    .role-card-btn:active {
      transform: scale(0.98);
    }
  `;
  document.head.appendChild(s);
}

export default function RoleSelection({
  isDark = false,
  onSelectRetail = () => {},
  onSelectWholesale = () => {},
}) {
  const [selectedRole, setSelectedRole] = useState(null);

  const bg = isDark ? '#070d1a' : '#ffffff';
  const cardBg = isDark ? '#0f1829' : 'rgba(255, 255, 255, 0.85)';
  const borderCol = isDark ? '#1e2d47' : '#dbeafe';
  const textPrimary = isDark ? '#f0f6ff' : '#0d1b3e';
  const brandBlue = '#1a56db';

  const handleChoose = (role) => {
    setSelectedRole(role);
    setTimeout(() => {
      if (role === 'retail') {
        onSelectRetail();
      } else {
        onSelectWholesale();
      }
    }, 200);
  };

  return (
    <div
      style={{
        backgroundColor: bg,
        color: textPrimary,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 16px',
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: '480px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          animation: 'popIn 350ms ease forwards',
        }}
      >
        {/* ─── Top Brand Logo Symbol ────────────────────────────────────────── */}
        <div
          style={{
            marginBottom: '32px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Custom SVG Matching reference image bag-and-s logo */}
          <svg width="84" height="84" viewBox="0 0 100 100" fill="none">
            <defs>
              <linearGradient id="bagGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>
            {/* Bag Handle */}
            <path
              d="M32 30 C32 18, 68 18, 68 30"
              stroke="#2563eb"
              strokeWidth="9"
              strokeLinecap="round"
            />
            {/* Bag Body */}
            <rect
              x="16"
              y="30"
              width="68"
              height="60"
              rx="18"
              fill="url(#bagGrad)"
            />
            {/* Dynamic Fold S Ribbon inside bag */}
            <path
              d="M30 46 L70 46 L34 74 L70 74"
              stroke="#ffffff"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* ─── Main Question Heading ────────────────────────────────────────── */}
        <h1
          style={{
            fontSize: '28px',
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: '40px',
            letterSpacing: '-0.02em',
            color: textPrimary,
          }}
        >
          How will you use our store?
        </h1>

        {/* ─── Choice Cards Container ───────────────────────────────────────── */}
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          {/* ─── Option 1: For Personal Use (Retail) ────────────────────────── */}
          <button
            onClick={() => handleChoose('retail')}
            className="role-card-btn"
            style={{
              width: '100%',
              backgroundColor: cardBg,
              border: `2px solid ${selectedRole === 'retail' ? brandBlue : borderCol}`,
              borderRadius: '22px',
              padding: '20px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(37, 99, 235, 0.08)',
              backdropFilter: 'blur(10px)',
              outline: 'none',
              textAlign: 'left',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              {/* Shopping Bag Icon Container */}
              <div
                style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '18px',
                  backgroundColor: '#eaf2ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: 'inset 0 1px 3px rgba(37, 99, 235, 0.12)',
                }}
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 8 L18 8 L19 20 C19 21.1 18.1 22 17 22 L7 22 C5.9 22 5 21.1 5 20 L6 8 Z"
                    fill="#1a56db"
                  />
                  <path
                    d="M9 8 V6 C9 4.34 10.34 3 12 3 C13.66 3 15 4.34 15 6 V8"
                    stroke="#1a56db"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="9" cy="11" r="1.2" fill="#ffffff" />
                  <circle cx="15" cy="11" r="1.2" fill="#ffffff" />
                </svg>
              </div>

              {/* Text Label */}
              <div>
                <div
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: textPrimary,
                  }}
                >
                  For Personal Use (Retail)
                </div>
                <div style={{ fontSize: '13px', color: '#64748b', marginTop: '3px' }}>
                  Groceries, snacks & quick 10-min delivery
                </div>
              </div>
            </div>

            {/* Blue Chevron Arrow */}
            <div
              style={{
                fontSize: '24px',
                fontWeight: 700,
                color: brandBlue,
                marginLeft: '12px',
              }}
            >
              ›
            </div>
          </button>

          {/* ─── Option 2: For Business (Wholesale) ─────────────────────────── */}
          <button
            onClick={() => handleChoose('wholesale')}
            className="role-card-btn"
            style={{
              width: '100%',
              backgroundColor: cardBg,
              border: `2px solid ${selectedRole === 'wholesale' ? brandBlue : borderCol}`,
              borderRadius: '22px',
              padding: '20px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(37, 99, 235, 0.08)',
              backdropFilter: 'blur(10px)',
              outline: 'none',
              textAlign: 'left',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              {/* Business Warehouse & Handshake Icon Container */}
              <div
                style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '18px',
                  backgroundColor: '#eaf2ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: 'inset 0 1px 3px rgba(37, 99, 235, 0.12)',
                }}
              >
                <svg width="42" height="42" viewBox="0 0 24 24" fill="none">
                  {/* Warehouse building roof */}
                  <path
                    d="M3 9 L12 4 L21 9 V18 C21 19.1 20.1 20 19 20 H5 C3.9 20 3 19.1 3 18 Z"
                    stroke="#1a56db"
                    strokeWidth="2.2"
                    strokeLinejoin="round"
                  />
                  {/* Stock Pallets */}
                  <rect x="7" y="9" width="3" height="4" fill="#93c5fd" />
                  <rect x="11" y="9" width="3" height="4" fill="#93c5fd" />
                  <rect x="15" y="9" width="3" height="4" fill="#93c5fd" />
                  {/* Handshake graphic in lower half */}
                  <path
                    d="M6 16 L9 13.5 L12 16 L15 13.5 L18 16"
                    stroke="#1a56db"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Text Label */}
              <div>
                <div
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: textPrimary,
                  }}
                >
                  For Business (Wholesale)
                </div>
                <div style={{ fontSize: '13px', color: '#64748b', marginTop: '3px' }}>
                  Bulk tiers, dealer discounts & live negotiations
                </div>
              </div>
            </div>

            {/* Blue Chevron Arrow */}
            <div
              style={{
                fontSize: '24px',
                fontWeight: 700,
                color: brandBlue,
                marginLeft: '12px',
              }}
            >
              ›
            </div>
          </button>
        </div>

        {/* ─── Footer Helper Note ───────────────────────────────────────────── */}
        <p
          style={{
            marginTop: '36px',
            fontSize: '13px',
            color: '#94a3b8',
            textAlign: 'center',
          }}
        >
          You can effortlessly switch modes at any time from your account settings.
        </p>
      </div>
    </div>
  );
}
