/**
 * BusinessLogin.js
 * Wholesale Mode (B2B) Corporate Authentication Component
 * Located in dedicated `/src/pages/login/` module
 *
 * Features:
 *   • WholesaleHub branding & corporate security emblem
 *   • Corporate Work Email or Registered GSTIN entry
 *   • Password / Enterprise Magic Link option
 *   • Fast-track B2B KYC onboarding application link
 *   • Seamless switch to Personal Login
 *   • Prepared for Supabase Enterprise Auth / Magic Link
 */

import React, { useState } from 'react';

// ─── Keyframe Animations & Styles ─────────────────────────────────────────────────
const BLOGIN_KF_ID = 'business-login-kf';
if (typeof document !== 'undefined' && !document.getElementById(BLOGIN_KF_ID)) {
  const s = document.createElement('style');
  s.id = BLOGIN_KF_ID;
  s.textContent = `
    * { box-sizing: border-box; }
    .b2b-login-btn:hover {
      background-color: #07173b !important;
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(10, 35, 92, 0.28) !important;
    }
    .b2b-login-btn:active { transform: scale(0.99); }
    .input-field-focus:focus {
      border-color: #1a56db !important;
      box-shadow: 0 0 0 3px rgba(26, 86, 219, 0.12) !important;
      outline: none;
    }
  `;
  document.head.appendChild(s);
}

export default function BusinessLogin({
  isDark = false,
  onLoginSuccess = () => {},
  onSwitchToPersonal = () => {},
}) {
  const [identifier, setIdentifier] = useState('procurement@prajapat.com');
  const [password, setPassword] = useState('••••••••••••');
  const [authMethod, setAuthMethod] = useState('password'); // 'password' | 'magic_link'
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!identifier) return;
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess({
        role: 'business',
        identifier,
        company: 'Prajapat Enterprises',
        gstin: '27ABCDE1234F1Z5',
      });
    }, 600);
  };

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
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 16px',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: '460px',
          width: '100%',
          backgroundColor: cardBg,
          borderRadius: '24px',
          border: `1.5px solid ${borderCol}`,
          padding: '36px 30px',
          boxShadow: '0 8px 32px rgba(10, 35, 92, 0.08)',
        }}
      >
        {/* Corporate Header */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#eff6ff',
              padding: '6px 14px',
              borderRadius: '9999px',
              color: brandBlue,
              fontSize: '13px',
              fontWeight: 800,
              marginBottom: '14px',
            }}
          >
            🏢 WholesaleHub B2B Enterprise
          </div>

          <h2
            style={{
              fontSize: '24px',
              fontWeight: 900,
              margin: '0 0 6px',
              color: textPrimary,
              letterSpacing: '-0.02em',
            }}
          >
            Corporate Business Sign In
          </h2>

          <p style={{ fontSize: '13px', color: textSecondary, margin: 0, lineHeight: '1.4' }}>
            Access verified wholesale catalogs, bulk tier pricing, and real-time deal rooms
          </p>
        </div>

        {/* Auth Method Toggle Tabs */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            backgroundColor: isDark ? '#16233d' : '#f1f5f9',
            borderRadius: '12px',
            padding: '4px',
            marginBottom: '22px',
          }}
        >
          <button
            type="button"
            onClick={() => setAuthMethod('password')}
            style={{
              border: 'none',
              borderRadius: '10px',
              padding: '8px',
              fontSize: '13px',
              fontWeight: authMethod === 'password' ? 800 : 500,
              backgroundColor: authMethod === 'password' ? cardBg : 'transparent',
              color: authMethod === 'password' ? brandBlue : textSecondary,
              cursor: 'pointer',
              boxShadow: authMethod === 'password' ? '0 2px 6px rgba(0,0,0,0.06)' : 'none',
            }}
          >
            Password Access
          </button>

          <button
            type="button"
            onClick={() => setAuthMethod('magic_link')}
            style={{
              border: 'none',
              borderRadius: '10px',
              padding: '8px',
              fontSize: '13px',
              fontWeight: authMethod === 'magic_link' ? 800 : 500,
              backgroundColor: authMethod === 'magic_link' ? cardBg : 'transparent',
              color: authMethod === 'magic_link' ? brandBlue : textSecondary,
              cursor: 'pointer',
              boxShadow: authMethod === 'magic_link' ? '0 2px 6px rgba(0,0,0,0.06)' : 'none',
            }}
          >
            Magic Link OTP
          </button>
        </div>

        {/* Corporate Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div>
            <label style={{ fontSize: '12px', fontWeight: 700, color: textSecondary, marginBottom: '6px', display: 'block' }}>
              Work Email or GSTIN
            </label>
            <input
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="e.g. procurement@company.com or 27ABCDE1234F1Z5"
              className="input-field-focus"
              required
              style={{
                width: '100%',
                backgroundColor: isDark ? '#16233d' : '#f8fafc',
                border: `1.5px solid ${borderCol}`,
                borderRadius: '14px',
                padding: '12px 16px',
                fontSize: '14px',
                color: textPrimary,
                fontWeight: 600,
              }}
            />
          </div>

          {authMethod === 'password' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <label style={{ fontSize: '12px', fontWeight: 700, color: textSecondary }}>
                  Corporate Password
                </label>
                <span style={{ fontSize: '12px', color: brandBlue, fontWeight: 700, cursor: 'pointer' }}>
                  Forgot Password?
                </span>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="input-field-focus"
                required
                style={{
                  width: '100%',
                  backgroundColor: isDark ? '#16233d' : '#f8fafc',
                  border: `1.5px solid ${borderCol}`,
                  borderRadius: '14px',
                  padding: '12px 16px',
                  fontSize: '14px',
                  color: textPrimary,
                }}
              />
            </div>
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
            <input type="checkbox" id="remember-terminal" defaultChecked style={{ accentColor: brandBlue }} />
            <label htmlFor="remember-terminal" style={{ color: textSecondary, cursor: 'pointer' }}>
              Remember this authorized terminal
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="b2b-login-btn"
            style={{
              backgroundColor: deepNavy,
              color: '#ffffff',
              border: 'none',
              borderRadius: '14px',
              padding: '14px',
              fontSize: '15px',
              fontWeight: 800,
              cursor: 'pointer',
              marginTop: '6px',
              boxShadow: '0 4px 16px rgba(10, 35, 92, 0.22)',
              transition: 'all 180ms ease',
            }}
          >
            {isLoading
              ? 'Authenticating...'
              : authMethod === 'password'
              ? 'Access B2B Portal ➔'
              : 'Send Magic Sign-in Link ➔'}
          </button>
        </form>

        {/* GSTIN / MSME Buyer Verification Strip */}
        <div
          style={{
            marginTop: '20px',
            backgroundColor: isDark ? '#16233d' : '#f0fdf4',
            border: `1px solid ${isDark ? '#23385e' : '#bbf7d0'}`,
            borderRadius: '12px',
            padding: '12px 14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontSize: '12px', fontWeight: 800, color: '#16a34a' }}>
              New Corporate Buyer?
            </div>
            <div style={{ fontSize: '11px', color: textSecondary }}>
              Register with GSTIN to unlock 30-day credit line
            </div>
          </div>
          <span style={{ fontSize: '12px', fontWeight: 700, color: brandBlue, cursor: 'pointer' }}>
            Apply ➔
          </span>
        </div>

        {/* ─── Footer: Switch to Retail / Personal ─── */}
        <div style={{ marginTop: '24px', textAlign: 'center', borderTop: `1px solid ${borderCol}`, paddingTop: '16px' }}>
          <p style={{ fontSize: '13px', color: textSecondary, margin: '0 0 6px' }}>
            Looking for personal retail delivery?
          </p>
          <button
            onClick={onSwitchToPersonal}
            style={{
              background: 'none',
              border: 'none',
              color: brandBlue,
              fontSize: '13px',
              fontWeight: 800,
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            Switch to Personal QuickCart Mode ➔
          </button>
        </div>
      </div>
    </div>
  );
}
