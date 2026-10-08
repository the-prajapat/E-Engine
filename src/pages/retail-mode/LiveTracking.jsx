/**
 * LiveTracking.js
 * Retail Mode (B2C) Checkout Success / Live Order Tracking Screen
 * Directly styled after reference images (media_1791378922... Live Tracking)
 *
 * Features:
 *   • Top half: Crisp 3D isometric city scene with white buildings, trees,
 *     a dynamic blue route, and an animated delivery rider on a blue scooter
 *   • Destination map pin with house symbol at target residence
 *   • Bottom half: Elegant floating white card with subtle top drag handle
 *   • Bold header: "Arriving in 9 minutes" with real-time countdown
 *   • Delivery Partner card:
 *       – Circular photo avatar (Rahul Sharma)
 *       – Live status: "● On the way to deliver"
 *       – Bright blue "Call" button with phone icon
 *   • Order fulfillment milestones and item summary chips
 */

import React, { useState, useEffect } from 'react';

// ─── Keyframe Animations & Styles ─────────────────────────────────────────────────
const TRACK_KF_ID = 'live-tracking-kf';
if (typeof document !== 'undefined' && !document.getElementById(TRACK_KF_ID)) {
  const s = document.createElement('style');
  s.id = TRACK_KF_ID;
  s.textContent = `
    * { box-sizing: border-box; }
    @keyframes scooterDrive {
      0%, 100% { transform: translateY(0px) rotate(-1deg); }
      50% { transform: translateY(-4px) rotate(1deg); }
    }
    @keyframes pulsePin {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.08); }
    }
    @keyframes routeFlow {
      0% { stroke-dashoffset: 60; }
      100% { stroke-dashoffset: 0; }
    }
    .call-btn-active:hover {
      background-color: #1d4ed8 !important;
      transform: translateY(-1px);
      box-shadow: 0 4px 14px rgba(29, 78, 216, 0.3) !important;
    }
    .call-btn-active:active {
      transform: scale(0.97);
    }
  `;
  document.head.appendChild(s);
}

// ─── 3D Isometric City Map Component ──────────────────────────────────────────────
const IsometricCityMap = ({ etaMinutes }) => {
  return (
    <div
      style={{
        position: 'relative',
        height: '360px',
        width: '100%',
        backgroundColor: '#eaf2fc',
        overflow: 'hidden',
        background: 'linear-gradient(175deg, #e4effb 0%, #edf4fc 60%, #e2ecf9 100%)',
      }}
    >
      <svg
        viewBox="0 0 500 420"
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Building linear gradients for 3D depth */}
          <linearGradient id="topRoof" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>
          <linearGradient id="leftWall" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>
          <linearGradient id="rightWall" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="3" dy="6" stdDeviation="4" floodColor="#94a3b8" floodOpacity="0.18" />
          </filter>
        </defs>

        {/* ── Street Road Network (Isometric light roads) ── */}
        <path
          d="M -50 140 L 550 140"
          stroke="#f8fafc"
          strokeWidth="32"
          strokeLinecap="round"
        />
        <path
          d="M -50 280 L 550 280"
          stroke="#f8fafc"
          strokeWidth="32"
          strokeLinecap="round"
        />
        <path
          d="M 120 -50 L 120 450"
          stroke="#f8fafc"
          strokeWidth="32"
          strokeLinecap="round"
        />
        <path
          d="M 360 -50 L 360 450"
          stroke="#f8fafc"
          strokeWidth="32"
          strokeLinecap="round"
        />

        {/* ── 3D Isometric Buildings ── */}
        {/* Building Group 1 (Top Left) */}
        <g filter="url(#softShadow)" transform="translate(40, 40)">
          <polygon points="40,10 70,25 40,40 10,25" fill="url(#topRoof)" />
          <polygon points="10,25 40,40 40,75 10,60" fill="url(#leftWall)" />
          <polygon points="40,40 70,25 70,60 40,75" fill="url(#rightWall)" />
        </g>
        <g filter="url(#softShadow)" transform="translate(180, 20)">
          <polygon points="60,10 100,30 60,50 20,30" fill="url(#topRoof)" />
          <polygon points="20,30 60,50 60,95 20,75" fill="url(#leftWall)" />
          <polygon points="60,50 100,30 100,75 60,95" fill="url(#rightWall)" />
        </g>
        <g filter="url(#softShadow)" transform="translate(260, 50)">
          <polygon points="40,10 70,25 40,40 10,25" fill="url(#topRoof)" />
          <polygon points="10,25 40,40 40,65 10,50" fill="url(#leftWall)" />
          <polygon points="40,40 70,25 70,50 40,65" fill="url(#rightWall)" />
        </g>

        {/* Building Group 2 (Center & Bottom Left) */}
        <g filter="url(#softShadow)" transform="translate(20, 180)">
          <polygon points="50,15 85,32 50,50 15,32" fill="url(#topRoof)" />
          <polygon points="15,32 50,50 50,90 15,72" fill="url(#leftWall)" />
          <polygon points="50,50 85,32 85,72 50,90" fill="url(#rightWall)" />
        </g>
        <g filter="url(#softShadow)" transform="translate(160, 160)">
          <polygon points="40,10 70,25 40,40 10,25" fill="url(#topRoof)" />
          <polygon points="10,25 40,40 40,65 10,50" fill="url(#leftWall)" />
          <polygon points="40,40 70,25 70,50 40,65" fill="url(#rightWall)" />
        </g>

        {/* Building at Target Destination (Top Right) */}
        <g filter="url(#softShadow)" transform="translate(360, 60)">
          <polygon points="50,12 85,30 50,48 15,30" fill="url(#topRoof)" />
          <polygon points="15,30 50,48 50,85 15,67" fill="url(#leftWall)" />
          <polygon points="50,48 85,30 85,67 50,85" fill="url(#rightWall)" />
        </g>

        {/* Trees / Greenery Sprinkled across the map */}
        {[
          { cx: 135, cy: 95 },
          { cx: 330, cy: 190 },
          { cx: 415, cy: 65 },
          { cx: 275, cy: 220 },
        ].map((t, idx) => (
          <g key={idx} transform={`translate(${t.cx}, ${t.cy})`}>
            <circle cx="0" cy="0" r="10" fill="#a7f3d0" />
            <circle cx="-2" cy="-2" r="8" fill="#34d399" />
          </g>
        ))}

        {/* ── Active Blue Delivery Route Line ── */}
        <path
          d="M 50 310 L 210 215 L 290 170 L 330 135 L 380 90"
          fill="none"
          stroke="#1a56db"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="10 0"
        />

        {/* Destination Target Ring on Road */}
        <circle cx="380" cy="90" r="8" fill="#ffffff" stroke="#1a56db" strokeWidth="4" />

        {/* ── Destination House Map Pin (Exact match to Reference 1 & 4) ── */}
        <g transform="translate(380, 52)" style={{ animation: 'pulsePin 2s infinite ease-in-out' }}>
          {/* Blue Map Pin */}
          <path
            d="M 0 -34 C -16 -34 -24 -22 -24 -10 C -24 8 0 24 0 24 C 0 24 24 8 24 -10 C 24 -22 16 -34 0 -34 Z"
            fill="#1a56db"
            filter="url(#softShadow)"
          />
          {/* White Home Icon inside Pin */}
          <path
            d="M -8 -8 L 0 -16 L 8 -8 V 0 H -8 Z"
            fill="#ffffff"
          />
          <rect x="-3" y="-5" width="6" height="5" fill="#1a56db" />
        </g>

        {/* ── Delivery Partner on Blue Scooter (Animated) ── */}
        <g transform="translate(205, 212)" style={{ animation: 'scooterDrive 1.8s infinite ease-in-out' }}>
          {/* Scooter shadow */}
          <ellipse cx="2" cy="18" rx="20" ry="7" fill="rgba(15,23,42,0.18)" />

          {/* Scooter Rear Wheel & Front Wheel */}
          <circle cx="-14" cy="14" r="8" fill="#334155" stroke="#ffffff" strokeWidth="2" />
          <circle cx="18" cy="14" r="8" fill="#334155" stroke="#ffffff" strokeWidth="2" />

          {/* Scooter Body (Vibrant Blue) */}
          <path
            d="M -14 14 L 0 14 L 6 4 L 16 4 L 18 14"
            stroke="#1d4ed8"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="-18" y="2" width="16" height="10" rx="3" fill="#2563eb" />

          {/* Delivery Box with Speed Symbol on back */}
          <rect x="-24" y="-12" width="16" height="16" rx="4" fill="#1e40af" stroke="#ffffff" strokeWidth="1.5" />
          <path d="M -18 -4 L -12 -4" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />

          {/* Delivery Rider (Rahul Sharma) */}
          {/* Body in Blue */}
          <circle cx="2" cy="-6" r="8" fill="#1d4ed8" />
          {/* Arm holding handlebar */}
          <path d="M 2 -4 L 14 0" stroke="#1d4ed8" strokeWidth="3.5" strokeLinecap="round" />
          {/* Helmet (Blue) */}
          <circle cx="4" cy="-18" r="7" fill="#2563eb" stroke="#ffffff" strokeWidth="1" />
        </g>
      </svg>

      {/* Floating Status Badge on Map */}
      <div
        style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(8px)',
          padding: '6px 12px',
          borderRadius: '9999px',
          fontSize: '12px',
          fontWeight: 700,
          color: '#1a56db',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        }}
      >
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }} />
        Live GPS Tracking Active
      </div>
    </div>
  );
};

// ─── Main LiveTracking Screen ─────────────────────────────────────────────────────
export default function LiveTracking({
  onBack = () => {},
  onCallPartner = () => {},
}) {
  const [eta, setEta] = useState(9); // 9 minutes as in reference image

  useEffect(() => {
    if (eta <= 0) return;
    const interval = setInterval(() => {
      setEta((prev) => (prev > 1 ? prev - 1 : 1));
    }, 60000);
    return () => clearInterval(interval);
  }, [eta]);

  const handleCall = () => {
    if (onCallPartner) onCallPartner();
    alert('Connecting call to Rahul Sharma (+91 98112 00412)...');
  };

  return (
    <div
      style={{
        maxWidth: '480px',
        margin: '0 auto',
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      {/* ─── Top 3D Isometric Map ────────────────────────────────────────────── */}
      <IsometricCityMap etaMinutes={eta} />

      {/* ─── Bottom Floating Card (Matching Reference 1 & 4) ────────────────── */}
      <div
        style={{
          backgroundColor: '#ffffff',
          borderTopLeftRadius: '32px',
          borderTopRightRadius: '32px',
          marginTop: '-30px',
          padding: '16px 24px 32px',
          position: 'relative',
          zIndex: 10,
          boxShadow: '0 -8px 30px rgba(15, 23, 42, 0.08)',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        {/* Subtle Top Drag Indicator */}
        <div
          style={{
            width: '42px',
            height: '4px',
            borderRadius: '9999px',
            backgroundColor: '#e2e8f0',
            margin: '0 auto 8px',
          }}
        />

        {/* ─── Prominent ETA Header ─────────────────────────────────────────── */}
        <div>
          <h1
            style={{
              fontSize: '32px',
              fontWeight: 800,
              color: '#0d1b3e',
              margin: '0 0 6px',
              letterSpacing: '-0.02em',
            }}
          >
            Arriving in {eta} minutes
          </h1>
          <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
            Order #QC-84920 · 4 items from Dark Store
          </p>
        </div>

        {/* ─── Delivery Partner Row (Rahul Sharma + Call Button) ────────────── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 0',
            borderTop: '1px solid #f1f5f9',
            borderBottom: '1px solid #f1f5f9',
          }}
        >
          {/* Driver Avatar & Name */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {/* Circular Photo Avatar */}
            <div
              style={{
                width: '62px',
                height: '62px',
                borderRadius: '50%',
                overflow: 'hidden',
                backgroundColor: '#eff6ff',
                flexShrink: 0,
                border: '2px solid #e2e8f0',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=140&h=140&fit=crop&crop=faces"
                alt="Rahul Sharma"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div>
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#0d1b3e' }}>
                Rahul Sharma
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '13px',
                  color: '#64748b',
                  marginTop: '4px',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#10b981',
                  }}
                />
                On the way to deliver
              </div>
            </div>
          </div>

          {/* Solid Blue Call Button */}
          <button
            onClick={handleCall}
            className="call-btn-active"
            style={{
              backgroundColor: '#1a56db',
              color: '#ffffff',
              border: 'none',
              borderRadius: '14px',
              padding: '14px 24px',
              fontSize: '15px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 14px rgba(26, 86, 219, 0.25)',
              transition: 'all 160ms ease',
            }}
          >
            {/* Phone Icon */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call
          </button>
        </div>

        {/* ─── Delivery Item Summary Pills ──────────────────────────────────── */}
        <div>
          <div style={{ fontSize: '12px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '8px' }}>
            Items in this delivery
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {[
              '🌾 Aashirvaad Atta (5 kg)',
              '🥛 Amul Taaza (2 L)',
              '🍌 Fresh Bananas (1 kg)',
              '🎧 boAt Earbuds',
            ].map((item, idx) => (
              <span
                key={idx}
                style={{
                  backgroundColor: '#f1f5f9',
                  color: '#334155',
                  fontSize: '12px',
                  fontWeight: 600,
                  padding: '6px 12px',
                  borderRadius: '9999px',
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ─── Back to Store CTA ────────────────────────────────────────────── */}
        <button
          onClick={onBack}
          style={{
            width: '100%',
            backgroundColor: '#f8fafc',
            border: '1.5px solid #e2e8f0',
            borderRadius: '12px',
            padding: '14px',
            fontSize: '14px',
            fontWeight: 700,
            color: '#1a56db',
            cursor: 'pointer',
            marginTop: 'auto',
          }}
        >
          Return to QuickCart Home ➔
        </button>
      </div>
    </div>
  );
}
