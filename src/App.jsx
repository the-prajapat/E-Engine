import React, { useState, useEffect } from 'react';
import RoleSelection from './pages/onboarding/RoleSelection.jsx';
import RetailHome from './pages/retail-mode/RetailHome.jsx';
import RetailCart from './pages/retail-mode/RetailCart.jsx';
import LiveTracking from './pages/retail-mode/LiveTracking.jsx';
import UserProfile from './pages/shared/UserProfile.jsx';
import WholesaleHome from './pages/wholesale-mode/WholesaleHome.jsx';
import WholesaleHubSearch from './pages/wholesale-mode/WholesaleHubSearch.jsx';
import DealerCatalog from './pages/wholesale-mode/DealerCatalog.jsx';
import LiveDealRoom from './pages/wholesale-mode/LiveDealRoom.jsx';
import WholesaleCartCheckout from './pages/wholesale-mode/WholesaleCartCheckout.jsx';
import BusinessDashboard from './pages/wholesale-mode/BusinessDashboard.jsx';
import { UnifiedLogin, PersonalLogin, BusinessLogin } from './pages/login/index.js';
import VoiceSearchModal from './experimental-features/voice-search/VoiceSearchModal.jsx';
import { applyTheme } from './ui-ux-design/theme.config.js';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('role-select');
  const [isDark, setIsDark] = useState(false);
  const [showVoiceSearch, setShowVoiceSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Sync hash routing if present
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) setCurrentScreen(hash);
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (screenId) => {
    setCurrentScreen(screenId);
    window.location.hash = screenId;
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleDarkMode = (dark) => {
    const next = typeof dark === 'boolean' ? dark : !isDark;
    setIsDark(next);
    applyTheme(next ? 'dark' : 'light');
  };

  const SCREENS_LIST = [
    { category: 'Onboarding & Auth' },
    { id: 'role-select', label: '1. Role Selection', icon: '🛍️' },
    { id: 'unified-login', label: '2. Unified Login (Tabs)', icon: '🔐' },
    { id: 'personal-login', label: '3. Personal Retail Login', icon: '📱' },
    { id: 'business-login', label: '4. Business Wholesale Login', icon: '🏢' },

    { category: 'Retail Mode (B2C)' },
    { id: 'retail-home', label: '5. QuickCart Home', icon: '🛒' },
    { id: 'retail-cart', label: '6. Retail Smart Cart', icon: '🧺' },
    { id: 'live-tracking', label: '7. Live Tracking (3D Map)', icon: '🛵' },
    { id: 'user-profile', label: '8. User Profile (Aarav)', icon: '👤' },

    { category: 'Wholesale Mode (B2B)' },
    { id: 'wholesale-home', label: '9. Wholesale Marketplace', icon: '📦' },
    { id: 'wholesale-search', label: '10. Wholesale Hub Search', icon: '🔍' },
    { id: 'dealer-catalog', label: '11. Dealer Catalog', icon: '⚙️' },
    { id: 'deal-room', label: '12. Live Deal Room', icon: '💬' },
    { id: 'wholesale-checkout', label: '13. Bulk Cart & Checkout', icon: '📑' },
    { id: 'business-dashboard', label: '14. Prajapat Business Hub', icon: '🏢' },
  ];

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: isDark ? '#070d1a' : '#f5f7fc' }}>
      {/* ─── Floating Mobile Quick Navigation Bubble ───────────────────────── */}
      <div
        style={{
          position: 'fixed',
          top: '12px',
          right: '12px',
          zIndex: 9999,
          display: 'flex',
          gap: '8px',
        }}
      >
        {/* Voice Search Quick Button */}
        <button
          onClick={() => setShowVoiceSearch(true)}
          style={{
            backgroundColor: '#1a56db',
            color: '#ffffff',
            border: 'none',
            borderRadius: '9999px',
            width: '42px',
            height: '42px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 14px rgba(26,86,219,0.35)',
            cursor: 'pointer',
            fontSize: '18px',
          }}
          title="Open Voice Search"
        >
          🎙️
        </button>

        {/* Menu Drawer Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            backgroundColor: isDark ? '#1e293b' : '#0d1b3e',
            color: '#ffffff',
            border: 'none',
            borderRadius: '9999px',
            padding: '8px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
            cursor: 'pointer',
            fontSize: '13px',
            fontWeight: 800,
          }}
        >
          <span>{menuOpen ? '✕' : '☰'}</span>
          <span>Screens</span>
        </button>
      </div>

      {/* ─── Interactive Screen Switcher Drawer Overlay ─────────────────────── */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.55)',
            backdropFilter: 'blur(4px)',
            zIndex: 9998,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
          onClick={() => setMenuOpen(false)}
        >
          <div
            style={{
              width: '320px',
              maxWidth: '85%',
              height: '100%',
              backgroundColor: isDark ? '#0f1829' : '#ffffff',
              color: isDark ? '#f0f6ff' : '#0d1b3e',
              padding: '24px 18px',
              overflowY: 'auto',
              boxShadow: '-8px 0 32px rgba(0,0,0,0.3)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${isDark ? '#1e2d47' : '#e2e8f0'}`, paddingBottom: '14px' }}>
              <div>
                <h3 style={{ fontSize: '17px', fontWeight: 900, margin: 0 }}>All 14 Screens</h3>
                <span style={{ fontSize: '11px', opacity: 0.7 }}>Tap any screen to preview</span>
              </div>
              <button
                onClick={() => toggleDarkMode()}
                style={{
                  backgroundColor: isDark ? '#1e293b' : '#f1f5f9',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '6px 10px',
                  cursor: 'pointer',
                  fontSize: '14px',
                }}
              >
                {isDark ? '☀️ Light' : '🌙 Dark'}
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {SCREENS_LIST.map((item, idx) => {
                if (item.category) {
                  return (
                    <div
                      key={idx}
                      style={{
                        fontSize: '11px',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        color: '#94a3b8',
                        marginTop: '12px',
                        marginBottom: '4px',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {item.category}
                    </div>
                  );
                }

                const isActive = currentScreen === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => navigateTo(item.id)}
                    style={{
                      backgroundColor: isActive ? '#1a56db' : isDark ? '#16233d' : '#f8fafc',
                      color: isActive ? '#ffffff' : isDark ? '#e2e8f0' : '#1e293b',
                      border: `1px solid ${isActive ? '#1a56db' : isDark ? '#1e2d47' : '#e2e8f0'}`,
                      borderRadius: '12px',
                      padding: '10px 14px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      cursor: 'pointer',
                      fontSize: '13px',
                      fontWeight: isActive ? 800 : 600,
                      textAlign: 'left',
                    }}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ─── Render Active Screen ───────────────────────────────────────────── */}
      <main>
        {currentScreen === 'role-select' && (
          <RoleSelection
            isDark={isDark}
            onSelectRetail={() => navigateTo('retail-home')}
            onSelectWholesale={() => navigateTo('wholesale-home')}
          />
        )}

        {currentScreen === 'unified-login' && (
          <UnifiedLogin
            isDark={isDark}
            onLoginSuccess={(res) => {
              if (res.role === 'personal') navigateTo('retail-home');
              else navigateTo('wholesale-home');
            }}
          />
        )}

        {currentScreen === 'personal-login' && (
          <PersonalLogin
            isDark={isDark}
            onLoginSuccess={() => navigateTo('retail-home')}
            onSwitchToBusiness={() => navigateTo('business-login')}
          />
        )}

        {currentScreen === 'business-login' && (
          <BusinessLogin
            isDark={isDark}
            onLoginSuccess={() => navigateTo('wholesale-home')}
            onSwitchToPersonal={() => navigateTo('personal-login')}
          />
        )}

        {currentScreen === 'retail-home' && (
          <RetailHome
            isDark={isDark}
            onNavigateCart={() => navigateTo('retail-cart')}
            onVoiceSearch={() => setShowVoiceSearch(true)}
            onNavigateProfile={() => navigateTo('user-profile')}
          />
        )}

        {currentScreen === 'retail-cart' && (
          <RetailCart
            isDark={isDark}
            onBack={() => navigateTo('retail-home')}
            onProceedToPay={() => navigateTo('live-tracking')}
          />
        )}

        {currentScreen === 'live-tracking' && (
          <LiveTracking
            onBack={() => navigateTo('retail-home')}
          />
        )}

        {currentScreen === 'user-profile' && (
          <UserProfile
            isDark={isDark}
            onToggleDarkMode={toggleDarkMode}
            onNavigateOrders={() => navigateTo('retail-cart')}
            onBack={() => navigateTo('retail-home')}
          />
        )}

        {currentScreen === 'wholesale-home' && (
          <WholesaleHome
            isDark={isDark}
            onNavigateDealRoom={() => navigateTo('deal-room')}
            onNavigateCatalog={() => navigateTo('dealer-catalog')}
            onNavigateProfile={() => navigateTo('business-dashboard')}
          />
        )}

        {currentScreen === 'wholesale-search' && (
          <WholesaleHubSearch
            isDark={isDark}
            onSelectCategory={() => navigateTo('dealer-catalog')}
            onSelectDistributor={() => navigateTo('dealer-catalog')}
            onVoiceSearch={() => setShowVoiceSearch(true)}
          />
        )}

        {currentScreen === 'dealer-catalog' && (
          <DealerCatalog
            isDark={isDark}
            onBack={() => navigateTo('wholesale-home')}
            onNavigateCheckout={() => navigateTo('wholesale-checkout')}
          />
        )}

        {currentScreen === 'deal-room' && (
          <LiveDealRoom
            isDark={isDark}
            onBack={() => navigateTo('wholesale-home')}
            onDealAccepted={() => navigateTo('wholesale-checkout')}
          />
        )}

        {currentScreen === 'wholesale-checkout' && (
          <WholesaleCartCheckout
            isDark={isDark}
            onBack={() => navigateTo('dealer-catalog')}
            onConfirmOrder={() => navigateTo('business-dashboard')}
          />
        )}

        {currentScreen === 'business-dashboard' && (
          <BusinessDashboard
            isDark={isDark}
            onToggleDarkMode={toggleDarkMode}
            onSelectMenu={(id) => {
              if (id === 'wallet') navigateTo('wholesale-checkout');
            }}
            onBack={() => navigateTo('wholesale-home')}
          />
        )}
      </main>

      {/* ─── Experimental Voice Search Overlay ──────────────────────────────── */}
      {showVoiceSearch && (
        <VoiceSearchModal
          isOpen={showVoiceSearch}
          onClose={() => setShowVoiceSearch(false)}
          onQueryRecognized={(q) => {
            setShowVoiceSearch(false);
            alert(`Voice Search query detected: "${q}"`);
          }}
        />
      )}
    </div>
  );
}
