import React, { useState } from 'react';
import {
  StitchQuickCommerceHome,
  StitchSmartCartSplitCheckout,
  StitchLiveOrderTracking,
  StitchAccountTypeOnboarding,
  StitchB2BWholesaleMarketplace,
  StitchB2BLiveNegotiationDealBoard,
  StitchB2BBusinessProfileDashboard,
} from './ui-ux-design/components/stitch/index.js';
import { RetailHome, WholesaleHome } from './pages/index.js';

const STITCH_SCREENS = [
  { id: 'quick-home', label: '1. Quick-Commerce Home', category: 'Retail (B2C)', icon: '🛍️' },
  { id: 'smart-cart', label: '2. Smart Cart & Split Checkout', category: 'Retail (B2C)', icon: '🛒' },
  { id: 'live-tracking', label: '3. Live Order Tracking', category: 'Retail (B2C)', icon: '🛵' },
  { id: 'onboarding', label: '4. Account Type Onboarding', category: 'Shared', icon: '👤' },
  { id: 'wholesale-market', label: '5. B2B Wholesale Marketplace', category: 'Wholesale (B2B)', icon: '📦' },
  { id: 'deal-board', label: '6. B2B Live Negotiation & Deal Board', category: 'Wholesale (B2B)', icon: '💬' },
  { id: 'business-profile', label: '7. B2B Business Profile Dashboard', category: 'Wholesale (B2B)', icon: '🏢' },
  { id: 'smart-retail', label: '⚡ Smart Retail (MCB Connected)', category: 'API Feed', icon: '🔄' },
  { id: 'smart-wholesale', label: '⚡ Smart Wholesale (MCB Connected)', category: 'API Feed', icon: '🔄' },
];

/**
 * Root Application Container
 * Seamlessly integrates all 7 Stitch AI Screens with live MCB Smart Pages.
 */
export default function App() {
  const [activeScreen, setActiveScreen] = useState('quick-home');
  const [menuOpen, setMenuOpen] = useState(false);

  const navigateTo = (screenId) => {
    setActiveScreen(screenId);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentScreen = () => {
    switch (activeScreen) {
      case 'quick-home':
        return <StitchQuickCommerceHome onNavigate={navigateTo} />;
      case 'smart-cart':
        return <StitchSmartCartSplitCheckout onNavigate={navigateTo} />;
      case 'live-tracking':
        return <StitchLiveOrderTracking onNavigate={navigateTo} />;
      case 'onboarding':
        return <StitchAccountTypeOnboarding onNavigate={navigateTo} />;
      case 'wholesale-market':
        return <StitchB2BWholesaleMarketplace onNavigate={navigateTo} />;
      case 'deal-board':
        return <StitchB2BLiveNegotiationDealBoard onNavigate={navigateTo} />;
      case 'business-profile':
        return <StitchB2BBusinessProfileDashboard onNavigate={navigateTo} />;
      case 'smart-retail':
        return <RetailHome onSwitchToWholesale={() => setActiveScreen('smart-wholesale')} />;
      case 'smart-wholesale':
        return <WholesaleHome onSwitchToRetail={() => setActiveScreen('smart-retail')} />;
      default:
        return <StitchQuickCommerceHome onNavigate={navigateTo} />;
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
      {/* ─── Floating Stitch Screen Switcher ─────────────────────────── */}
      <div
        style={{
          position: 'fixed',
          top: '12px',
          right: '12px',
          zIndex: 99999,
          display: 'flex',
          gap: '8px',
        }}
      >
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          style={{
            backgroundColor: '#0f172a',
            color: '#f8fafc',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '9999px',
            padding: '8px 16px',
            fontSize: '13px',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
            cursor: 'pointer',
            backdropFilter: 'blur(12px)',
          }}
        >
          <span>✨ Stitch Screens ({STITCH_SCREENS.find((s) => s.id === activeScreen)?.icon})</span>
          <span>{menuOpen ? '✕' : '▼'}</span>
        </button>
      </div>

      {/* ─── Screen Switcher Drawer Modal ─────────────────────────────── */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99998,
            backgroundColor: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
          onClick={() => setMenuOpen(false)}
        >
          <div
            style={{
              width: '320px',
              maxWidth: '85vw',
              height: '100%',
              backgroundColor: '#0b1120',
              color: '#f8fafc',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '-8px 0 32px rgba(0,0,0,0.4)',
              overflowY: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 800 }}>Stitch AI Gallery</h3>
                <p style={{ margin: '0.2rem 0 0', fontSize: '0.75rem', color: '#94a3b8' }}>
                  Project: &quot;E Engine&quot; • 7 Screens Live
                </p>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                type="button"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#94a3b8',
                  fontSize: '18px',
                  cursor: 'pointer',
                }}
              >
                ✕
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {STITCH_SCREENS.map((s) => {
                const isActive = s.id === activeScreen;
                return (
                  <button
                    key={s.id}
                    onClick={() => navigateTo(s.id)}
                    type="button"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '10px 12px',
                      borderRadius: '10px',
                      border: isActive ? '1px solid #3b82f6' : '1px solid rgba(255,255,255,0.06)',
                      backgroundColor: isActive ? 'rgba(59,130,246,0.18)' : 'rgba(255,255,255,0.02)',
                      color: isActive ? '#60a5fa' : '#e2e8f0',
                      textAlign: 'left',
                      fontSize: '13px',
                      fontWeight: isActive ? 700 : 500,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <span style={{ fontSize: '18px' }}>{s.icon}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{s.label}</div>
                      <div style={{ fontSize: '10px', color: '#64748b', textTransform: 'uppercase' }}>{s.category}</div>
                    </div>
                    {isActive && <span style={{ color: '#60a5fa', fontSize: '12px' }}>●</span>}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ─── Active Screen Render ─────────────────────────────────────── */}
      <main style={{ minHeight: '100vh', width: '100%' }}>
        {renderCurrentScreen()}
      </main>
    </div>
  );
}
