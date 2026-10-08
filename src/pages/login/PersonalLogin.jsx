/**
 * PersonalLogin.js
 * Retail Mode (B2C) Customer Authentication Component
 * Located in dedicated `/src/pages/login/` module
 *
 * Features:
 *   • QuickCart branding with speed lightning accent
 *   • Mobile number (+91) input with validation
 *   • Step 1: Mobile entry -> Step 2: Animated 4-digit OTP entry
 *   • OTP auto-advance, countdown resend timer (00:29s)
 *   • Google 1-Tap & Social Quick Sign-In
 *   • Seamless switch to Business Login
 *   • Prepared for Supabase Phone Auth / OAuth integration
 */

import React, { useState, useEffect } from 'react';

// ─── Keyframe Animations & Hover Effects ──────────────────────────────────────────
const PLOGIN_KF_ID = 'personal-login-kf';
if (typeof document !== 'undefined' && !document.getElementById(PLOGIN_KF_ID)) {
  const s = document.createElement('style');
  s.id = PLOGIN_KF_ID;
  s.textContent = `
    * { box-sizing: border-box; }
    @keyframes otpPop {
      0% { transform: scale(0.9); opacity: 0; }
      100% { transform: scale(1); opacity: 1; }
    }
    .social-btn-hover:hover {
      background-color: #f8fafc !important;
      border-color: #93c5fd !important;
      box-shadow: 0 4px 12px rgba(26, 86, 219, 0.08) !important;
    }
    .social-btn-hover { transition: all 180ms ease; }
    .otp-input-field:focus {
      border-color: #1a56db !important;
      box-shadow: 0 0 0 3px rgba(26, 86, 219, 0.15) !important;
      outline: none;
    }
  `;
  document.head.appendChild(s);
}

export default function PersonalLogin({
  isDark = false,
  onLoginSuccess = () => {},
  onSwitchToBusiness = () => {},
}) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [step, setStep] = useState('phone'); // 'phone' | 'otp'
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(29);
  const [isLoading, setIsLoading] = useState(false);

  // OTP Countdown
  useEffect(() => {
    if (step !== 'otp' || timer <= 0) return;
    const interval = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [step, timer]);

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.length < 10) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep('otp');
      setTimer(29);
    }, 600);
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) value = value.slice(-1);
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleOtpVerify = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join('');
    if (enteredOtp.length < 4) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess({
        role: 'personal',
        phone: `+91 ${phoneNumber}`,
        user: { name: 'Aarav Mehta', id: 'USR-8492' },
      });
    }, 700);
  };

  // Theming
  const bg = isDark ? '#080e1a' : '#f5f7fc';
  const cardBg = isDark ? '#0f1829' : '#ffffff';
  const borderCol = isDark ? '#1e2d47' : '#e2e8f0';
  const textPrimary = isDark ? '#f0f6ff' : '#0d1b3e';
  const textSecondary = isDark ? '#94a3b8' : '#64748b';
  const brandBlue = '#1a56db';

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
          maxWidth: '440px',
          width: '100%',
          backgroundColor: cardBg,
          borderRadius: '24px',
          border: `1.5px solid ${borderCol}`,
          padding: '32px 28px',
          boxShadow: '0 8px 32px rgba(26, 86, 219, 0.08)',
        }}
      >
        {/* Brand Header */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
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
              marginBottom: '12px',
            }}
          >
            ⚡ QuickCart Retail
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
            {step === 'phone' ? 'Log in or Sign up' : 'Verify Mobile OTP'}
          </h2>

          <p style={{ fontSize: '13px', color: textSecondary, margin: 0, lineHeight: '1.4' }}>
            {step === 'phone'
              ? 'Enter your mobile number to get instant 10-minute grocery delivery'
              : `Enter the 4-digit verification code sent to +91 ${phoneNumber}`}
          </p>
        </div>

        {/* ─── Step 1: Mobile Number Input ─── */}
        {step === 'phone' && (
          <form onSubmit={handlePhoneSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ fontSize: '12px', fontWeight: 700, color: textSecondary, marginBottom: '6px', display: 'block' }}>
                Phone Number
              </label>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  border: `1.5px solid ${borderCol}`,
                  borderRadius: '14px',
                  backgroundColor: isDark ? '#16233d' : '#f8fafc',
                  overflow: 'hidden',
                  padding: '2px 14px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', paddingRight: '10px', borderRight: `1px solid ${borderCol}` }}>
                  <span style={{ fontSize: '16px' }}>🇮🇳</span>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: textPrimary }}>+91</span>
                </div>

                <input
                  type="tel"
                  maxLength="10"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                  placeholder="Enter 10-digit number"
                  autoFocus
                  style={{
                    flex: 1,
                    border: 'none',
                    background: 'transparent',
                    padding: '12px 14px',
                    fontSize: '15px',
                    fontWeight: 600,
                    color: textPrimary,
                    outline: 'none',
                    letterSpacing: '0.04em',
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={phoneNumber.length < 10 || isLoading}
              style={{
                backgroundColor: phoneNumber.length === 10 ? brandBlue : '#94a3b8',
                color: '#ffffff',
                border: 'none',
                borderRadius: '14px',
                padding: '14px',
                fontSize: '15px',
                fontWeight: 800,
                cursor: phoneNumber.length === 10 ? 'pointer' : 'not-allowed',
                boxShadow: phoneNumber.length === 10 ? '0 4px 16px rgba(26, 86, 219, 0.28)' : 'none',
                transition: 'all 180ms ease',
              }}
            >
              {isLoading ? 'Sending OTP...' : 'Continue with OTP ➔'}
            </button>
          </form>
        )}

        {/* ─── Step 2: 4-Digit OTP Entry ─── */}
        {step === 'otp' && (
          <form onSubmit={handleOtpVerify} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  id={`otp-input-${idx}`}
                  type="text"
                  inputMode="numeric"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(idx, e.target.value)}
                  className="otp-input-field"
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '14px',
                    border: `2px solid ${borderCol}`,
                    textAlign: 'center',
                    fontSize: '22px',
                    fontWeight: 800,
                    backgroundColor: isDark ? '#16233d' : '#f8fafc',
                    color: textPrimary,
                  }}
                />
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px' }}>
              <button
                type="button"
                onClick={() => setStep('phone')}
                style={{ background: 'none', border: 'none', color: brandBlue, fontWeight: 700, cursor: 'pointer', padding: 0 }}
              >
                ← Edit Number
              </button>

              <span style={{ color: textSecondary }}>
                {timer > 0 ? (
                  `Resend in 00:${String(timer).padStart(2, '0')}`
                ) : (
                  <button
                    type="button"
                    onClick={() => setTimer(29)}
                    style={{ background: 'none', border: 'none', color: brandBlue, fontWeight: 700, cursor: 'pointer', padding: 0 }}
                  >
                    Resend Code
                  </button>
                )}
              </span>
            </div>

            <button
              type="submit"
              disabled={otp.join('').length < 4 || isLoading}
              style={{
                backgroundColor: otp.join('').length === 4 ? brandBlue : '#94a3b8',
                color: '#ffffff',
                border: 'none',
                borderRadius: '14px',
                padding: '14px',
                fontSize: '15px',
                fontWeight: 800,
                cursor: otp.join('').length === 4 ? 'pointer' : 'not-allowed',
                boxShadow: otp.join('').length === 4 ? '0 4px 16px rgba(26, 86, 219, 0.28)' : 'none',
              }}
            >
              {isLoading ? 'Verifying...' : 'Verify & Enter Store ✓'}
            </button>
          </form>
        )}

        {/* ─── Social Login Alternative ─── */}
        <div style={{ margin: '22px 0 16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ flex: 1, height: '1px', backgroundColor: borderCol }} />
          <span style={{ fontSize: '12px', color: textSecondary, fontWeight: 600 }}>or continue with</span>
          <div style={{ flex: 1, height: '1px', backgroundColor: borderCol }} />
        </div>

        <button
          onClick={() => {
            onLoginSuccess({ role: 'personal', user: { name: 'Aarav Mehta', email: 'aarav@gmail.com' } });
          }}
          className="social-btn-hover"
          style={{
            width: '100%',
            backgroundColor: 'transparent',
            border: `1.5px solid ${borderCol}`,
            borderRadius: '14px',
            padding: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 700,
            color: textPrimary,
          }}
        >
          {/* Google Icon */}
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.27v3.15C3.25 21.32 7.31 24 12 24z"/>
            <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.27C.46 8.2 0 10.05 0 12s.46 3.8 1.27 5.42l4.01-3.15z"/>
            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.68 1.27 6.58l4.01 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
          </svg>
          Google 1-Tap Sign In
        </button>

        {/* ─── Footer: Switch to Wholesale / Business ─── */}
        <div style={{ marginTop: '24px', textAlign: 'center', borderTop: `1px solid ${borderCol}`, paddingTop: '16px' }}>
          <p style={{ fontSize: '13px', color: textSecondary, margin: '0 0 6px' }}>
            Procuring bulk inventory for business?
          </p>
          <button
            onClick={onSwitchToBusiness}
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
            Switch to Wholesale B2B Corporate Portal ➔
          </button>
        </div>
      </div>
    </div>
  );
}
