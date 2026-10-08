/**
 * LiveDealRoom.js
 * Phase 3 — Wholesale Mode (B2B) Real-Time Live Negotiation Room
 * Directly styled after reference image (Live Negotiation Room - 500 units of boxes)
 *
 * Features:
 *   • Top Header: Back arrow, "Live Negotiation Room", "500 units of boxes", "● Live", menu ⋮
 *   • Product Header Card:
 *       – Corrugated Shipping Boxes (Type: 5-Ply | Size: 50x40x40 cm | Delivery: Within 7 days)
 *       – "500 units" badge, "View Details >"
 *   • Live Deal Board:
 *       – "Updates in real time 📶"
 *       – "Your Offer": ₹2,450.00 / total with pencil edit icon
 *       – "Dealer's Counter Offer": ₹2,750.00 / total (₹5.50 per unit) with pencil edit icon
 *   • Real-Time Chat Message Stream:
 *       – Buyer and Dealer message bubbles with timestamps and blue double checkmarks
 *   • Interactive "Make Your Offer" Widget:
 *       – Real-time price per unit calculator: "Price per unit: ₹ 5.20"
 *       – Numeric price input: "₹ 2,600.00" (Total for 500 units)
 *       – Interactive price slider (Range: ₹2,000 to ₹3,000)
 *       – Attachment button 📎 + "Send Offer" solid navy CTA button
 */

import React, { useState, useEffect, useRef } from 'react';

// ─── Keyframe Animations & Styles ─────────────────────────────────────────────────
const DEAL_KF_ID = 'live-deal-room-kf';
if (typeof document !== 'undefined' && !document.getElementById(DEAL_KF_ID)) {
  const s = document.createElement('style');
  s.id = DEAL_KF_ID;
  s.textContent = `
    * { box-sizing: border-box; }
    @keyframes liveGlow {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(0.85); }
    }
    .deal-card-hover:hover {
      border-color: #93c5fd !important;
      box-shadow: 0 4px 16px rgba(26, 86, 219, 0.08) !important;
    }
    .send-offer-btn:hover {
      background-color: #07173b !important;
      transform: translateY(-1px);
    }
    .send-offer-btn:active { transform: scale(0.99); }
  `;
  document.head.appendChild(s);
}

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: 'buyer',
    senderLabel: 'You',
    initial: 'B',
    time: '10:21 AM',
    text: 'Hi, thanks for the response. My target budget is ₹2,450 for 500 units. Please let me know.',
    read: true,
  },
  {
    id: 2,
    sender: 'dealer',
    senderLabel: 'Dealer',
    initial: 'D',
    time: '10:23 AM',
    text: 'Thanks for your offer. Best I can do is ₹2,750 for 500 units delivered.',
    read: true,
  },
  {
    id: 3,
    sender: 'buyer',
    senderLabel: 'You',
    initial: 'B',
    time: '10:25 AM',
    text: 'I can meet you in the middle at ₹2,600. Looking forward to your confirmation.',
    read: true,
  },
];

export default function LiveDealRoom({
  isDark = false,
  onBack = () => {},
  onOfferSent = () => {},
}) {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [yourOffer, setYourOffer] = useState(2450);
  const [dealerOffer, setDealerOffer] = useState(2750);
  const [customOffer, setCustomOffer] = useState(2600); // 2600 as in reference slider
  const chatScrollRef = useRef(null);

  const units = 500;
  const pricePerUnit = (customOffer / units).toFixed(2);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSliderChange = (e) => {
    setCustomOffer(Number(e.target.value));
  };

  const handleSendOffer = () => {
    const newMsg = {
      id: Date.now(),
      sender: 'buyer',
      senderLabel: 'You',
      initial: 'B',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: `Updated offer to ₹${customOffer.toLocaleString('en-IN')} (₹${pricePerUnit}/unit for ${units} units).`,
      read: true,
    };
    setMessages((prev) => [...prev, newMsg]);
    setYourOffer(customOffer);
    if (onOfferSent) onOfferSent(customOffer);

    // Simulate dealer acceptance if close enough
    if (customOffer >= 2650) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            sender: 'dealer',
            senderLabel: 'Dealer',
            initial: 'D',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            text: `Deal accepted at ₹${customOffer.toLocaleString('en-IN')}! Generating commercial invoice.`,
            read: true,
          },
        ]);
        setDealerOffer(customOffer);
      }, 2000);
    }
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
        minHeight: '100vh',
        fontFamily: "'Inter', sans-serif",
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* ─── Top Header (Matching Reference Photo) ───────────────────────────── */}
      <header
        style={{
          backgroundColor: cardBg,
          borderBottom: `1px solid ${borderCol}`,
          padding: '12px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 40,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <button
            onClick={onBack}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '20px',
              cursor: 'pointer',
              color: textPrimary,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            ←
          </button>

          <div>
            <h1 style={{ fontSize: '18px', fontWeight: 800, margin: 0, color: textPrimary }}>
              Live Negotiation Room
            </h1>
            <span style={{ fontSize: '13px', color: textSecondary }}>
              500 units of boxes
            </span>
          </div>
        </div>

        {/* Live Indicator & Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: '#16a34a',
              fontSize: '13px',
              fontWeight: 700,
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#16a34a',
                animation: 'liveGlow 1.8s infinite',
              }}
            />
            Live
          </div>

          <button
            style={{
              background: 'none',
              border: 'none',
              fontSize: '18px',
              color: textSecondary,
              cursor: 'pointer',
            }}
          >
            ⋮
          </button>
        </div>
      </header>

      {/* ─── Main Content Container ─────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: '680px',
          width: '100%',
          margin: '0 auto',
          padding: '16px 16px 32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          flex: 1,
        }}
      >
        {/* ─── Product Card: Corrugated Shipping Boxes ───────────────────────── */}
        <div
          style={{
            backgroundColor: cardBg,
            borderRadius: '16px',
            border: `1px solid ${borderCol}`,
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {/* Box Image / Graphic */}
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '12px',
                backgroundColor: '#f8fafc',
                border: `1px solid ${borderCol}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                flexShrink: 0,
              }}
            >
              📦
            </div>

            <div>
              <h2 style={{ fontSize: '15px', fontWeight: 800, margin: '0 0 3px', color: textPrimary }}>
                Corrugated Shipping Boxes
              </h2>
              <div style={{ fontSize: '12px', color: textSecondary }}>
                Type: 5-Ply | Size: 50x40x40 cm
              </div>
              <div style={{ fontSize: '12px', color: textSecondary, marginTop: '2px' }}>
                Delivery: Within 7 days
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <span
              style={{
                backgroundColor: '#eff6ff',
                color: brandBlue,
                fontSize: '12px',
                fontWeight: 800,
                padding: '4px 10px',
                borderRadius: '6px',
                display: 'inline-block',
                marginBottom: '6px',
              }}
            >
              500 units
            </span>
            <div style={{ fontSize: '12px', color: brandBlue, fontWeight: 700, cursor: 'pointer' }}>
              View Details ›
            </div>
          </div>
        </div>

        {/* ─── Section: Live Deal Board ─────────────────────────────────────── */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '10px',
            }}
          >
            <h3 style={{ fontSize: '15px', fontWeight: 800, margin: 0, color: textPrimary }}>
              Live Deal Board
            </h3>
            <span style={{ fontSize: '12px', color: '#16a34a', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
              Updates in real time 📶
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {/* Your Offer Card */}
            <div
              className="deal-card-hover"
              style={{
                backgroundColor: cardBg,
                borderRadius: '14px',
                border: `1px solid ${borderCol}`,
                padding: '14px 18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: '#0a235c',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <span style={{ fontSize: '14px', fontWeight: 700, color: textPrimary }}>
                  Your Offer
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '17px', fontWeight: 800, color: textPrimary, fontFamily: 'monospace' }}>
                  ₹{yourOffer.toFixed(2)} / total
                </span>
                <button
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '8px',
                    border: `1px solid ${borderCol}`,
                    backgroundColor: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: textSecondary,
                  }}
                >
                  ✏️
                </button>
              </div>
            </div>

            {/* Dealer's Counter Offer Card */}
            <div
              className="deal-card-hover"
              style={{
                backgroundColor: cardBg,
                borderRadius: '14px',
                border: `1px solid ${borderCol}`,
                padding: '14px 18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: '#eff6ff',
                    color: brandBlue,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2.5">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <span style={{ fontSize: '14px', fontWeight: 700, color: textPrimary }}>
                  Dealer's Counter Offer
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '17px', fontWeight: 800, color: textPrimary, fontFamily: 'monospace' }}>
                    ₹{dealerOffer.toFixed(2)} / total
                  </div>
                  <div style={{ fontSize: '11px', color: textSecondary }}>
                    ₹{(dealerOffer / units).toFixed(2)} per unit
                  </div>
                </div>
                <button
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '8px',
                    border: `1px solid ${borderCol}`,
                    backgroundColor: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: textSecondary,
                  }}
                >
                  ✏️
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Real-Time Negotiation Chat Stream ─────────────────────────────── */}
        <div
          ref={chatScrollRef}
          style={{
            flex: 1,
            backgroundColor: cardBg,
            borderRadius: '16px',
            border: `1px solid ${borderCol}`,
            padding: '16px',
            overflowY: 'auto',
            maxHeight: '260px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {messages.map((m) => {
            const isBuyer = m.sender === 'buyer';
            return (
              <div
                key={m.id}
                style={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'flex-start',
                }}
              >
                {/* User initial avatar circle */}
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: isBuyer ? '#0a235c' : '#eff6ff',
                    color: isBuyer ? '#ffffff' : brandBlue,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '13px',
                    fontWeight: 800,
                    flexShrink: 0,
                  }}
                >
                  {m.initial}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: textPrimary }}>
                      {m.senderLabel}
                    </span>
                    <span style={{ fontSize: '11px', color: textSecondary }}>
                      {m.time}
                    </span>
                  </div>

                  <div
                    style={{
                      backgroundColor: isBuyer ? '#eff6ff' : '#f8fafc',
                      border: `1px solid ${isBuyer ? '#dbeafe' : borderCol}`,
                      color: textPrimary,
                      padding: '10px 14px',
                      borderRadius: '12px',
                      fontSize: '13px',
                      lineHeight: '1.4',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-end',
                      gap: '12px',
                    }}
                  >
                    <span>{m.text}</span>
                    <span style={{ color: '#2563eb', fontSize: '11px', fontWeight: 700, whiteSpace: 'nowrap' }}>
                      {m.time} ✓✓
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── Make Your Offer Interactive Widget ───────────────────────────── */}
        <div
          style={{
            backgroundColor: cardBg,
            borderRadius: '16px',
            border: `1px solid ${borderCol}`,
            padding: '16px 18px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '12px',
            }}
          >
            <span style={{ fontSize: '14px', fontWeight: 800, color: textPrimary }}>
              Make Your Offer
            </span>
            <div style={{ fontSize: '13px', color: textSecondary, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span>🧮</span>
              Price per unit: <strong style={{ color: textPrimary }}>₹ {pricePerUnit}</strong>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '150px 1fr',
              gap: '16px',
              alignItems: 'center',
              marginBottom: '14px',
            }}
          >
            {/* Left Price Display Box */}
            <div
              style={{
                backgroundColor: isDark ? '#16233d' : '#f8fafc',
                border: `1.5px solid ${borderCol}`,
                borderRadius: '12px',
                padding: '10px 12px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ fontSize: '16px', fontWeight: 700, color: textSecondary }}>₹</span>
                <span style={{ fontSize: '18px', fontWeight: 900, color: textPrimary, fontFamily: 'monospace' }}>
                  {customOffer.toLocaleString('en-IN')}.00
                </span>
              </div>
              <div style={{ fontSize: '10px', color: textSecondary, marginTop: '2px' }}>
                Total for 500 units
              </div>
            </div>

            {/* Right Price Slider with Min/Max markers */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: textSecondary, marginBottom: '4px' }}>
                <span>₹2,000</span>
                <span>₹3,000</span>
              </div>
              <input
                type="range"
                min="2000"
                max="3000"
                step="10"
                value={customOffer}
                onChange={handleSliderChange}
                style={{
                  width: '100%',
                  accentColor: deepNavy,
                  cursor: 'pointer',
                }}
              />
              <div style={{ textAlign: 'center', fontSize: '11px', fontWeight: 800, color: textPrimary, marginTop: '2px' }}>
                ₹{customOffer.toLocaleString('en-IN')}
              </div>
            </div>
          </div>

          {/* Action Row: Attachment button + Send Offer */}
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <button
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                border: `1.5px solid ${borderCol}`,
                backgroundColor: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '18px',
                color: textSecondary,
                flexShrink: 0,
              }}
            >
              📎
            </button>

            <button
              onClick={handleSendOffer}
              className="send-offer-btn"
              style={{
                flex: 1,
                backgroundColor: deepNavy,
                color: '#ffffff',
                border: 'none',
                borderRadius: '12px',
                padding: '14px',
                fontSize: '15px',
                fontWeight: 800,
                cursor: 'pointer',
                transition: 'all 160ms ease',
                boxShadow: '0 4px 14px rgba(10, 35, 92, 0.25)',
              }}
            >
              Send Offer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
