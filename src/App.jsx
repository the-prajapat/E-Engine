import React, { useState, useEffect } from 'react';
import { MobileBottomNav } from './ui-ux-design/index.js';
import {
  RoleSelection,
  RetailHome,
  RetailCategories,
  RetailCart,
  RetailProfile,
  WholesaleHome,
  WholesaleSearch,
  WholesaleOrders,
  WholesaleMessages,
  WholesaleProfile,
} from './pages/index.js';

const STORAGE_KEY = 'e_engine_user_role';

/**
 * Root Application Container
 * Production-ready mobile client strictly adhering to:
 * - ISSUE 1: Strict mobile container (w-full max-w-md mx-auto min-h-screen bg-neutral-50 relative pb-20 overflow-x-hidden)
 * - ISSUE 2: High-contrast elevated design system
 * - ISSUE 3: Zero developer overlays or debug switchers
 * - ISSUE 4: Mandatory Root Gate (RoleSelection) & persistent role state
 * - ISSUE 5: Fully interactive Bottom Navigation Bar tied to active state
 * - ISSUE 6: Zero-loop architecture and state safety
 */
export default function App() {
  // Read saved role session on initialization
  const [userRole, setUserRole] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) || null;
    } catch {
      return null;
    }
  });

  const [activeTab, setActiveTab] = useState('home');
  const [cartItems, setCartItems] = useState({});

  // Scroll to top smoothly on tab or role switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab, userRole]);

  // Set role from Root Gate (ISSUE 4)
  const handleSelectRole = (role) => {
    try {
      localStorage.setItem(STORAGE_KEY, role);
    } catch (err) {
      console.warn('LocalStorage unavailable:', err);
    }
    setUserRole(role);
    setActiveTab('home');
  };

  // Switch role only from Profile screens (ISSUE 4)
  const handleSwitchRole = (newRole) => {
    try {
      localStorage.setItem(STORAGE_KEY, newRole);
    } catch (err) {
      console.warn('LocalStorage unavailable:', err);
    }
    setUserRole(newRole);
    setActiveTab('home');
  };

  // Reset role session to return to Root Gate
  const handleResetRole = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (err) {
      console.warn('LocalStorage unavailable:', err);
    }
    setUserRole(null);
    setActiveTab('home');
  };

  // Cart quantity update handler
  const handleUpdateCart = (product, newQty) => {
    setCartItems((prev) => {
      const next = { ...prev };
      if (newQty <= 0) {
        delete next[product.id];
      } else {
        next[product.id] = {
          ...product,
          quantity: newQty,
        };
      }
      return next;
    });
  };

  const totalCartCount = Object.values(cartItems).reduce(
    (acc, item) => acc + (item.quantity || 0),
    0
  );

  // ─── GATE 1: Unauthenticated / First Launch Root Gate ────────────────
  if (!userRole) {
    return (
      <div className="w-full min-h-screen bg-slate-900 flex justify-center items-start">
        <RoleSelection onSelectRole={handleSelectRole} />
      </div>
    );
  }

  // ─── GATE 2: Render Retail Experience (B2C) ──────────────────────────
  const renderRetailContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <RetailHome
            cartItems={cartItems}
            onUpdateCart={handleUpdateCart}
            onNavigateTab={setActiveTab}
          />
        );
      case 'categories':
        return (
          <RetailCategories
            cartItems={cartItems}
            onUpdateCart={handleUpdateCart}
          />
        );
      case 'cart':
        return (
          <RetailCart
            cartItems={cartItems}
            onUpdateCart={handleUpdateCart}
            onNavigateTab={setActiveTab}
          />
        );
      case 'profile':
        return (
          <RetailProfile
            onSwitchMode={handleSwitchRole}
            onResetRole={handleResetRole}
          />
        );
      default:
        return (
          <RetailHome
            cartItems={cartItems}
            onUpdateCart={handleUpdateCart}
            onNavigateTab={setActiveTab}
          />
        );
    }
  };

  // ─── GATE 3: Render Wholesale Experience (B2B) ───────────────────────
  const renderWholesaleContent = () => {
    switch (activeTab) {
      case 'home':
        return <WholesaleHome onNavigateTab={setActiveTab} />;
      case 'search':
        return <WholesaleSearch />;
      case 'orders':
        return <WholesaleOrders />;
      case 'messages':
        return <WholesaleMessages />;
      case 'profile':
        return (
          <WholesaleProfile
            onSwitchMode={handleSwitchRole}
            onResetRole={handleResetRole}
          />
        );
      default:
        return <WholesaleHome onNavigateTab={setActiveTab} />;
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-900/90 flex justify-center items-start">
      {/* ─── Strict Mobile Viewport Container (ISSUE 1) ───────────────── */}
      <div className="w-full max-w-md mx-auto min-h-screen bg-neutral-50 relative pb-20 overflow-x-hidden shadow-2xl border-x border-slate-200/60">
        <main className="w-full min-h-screen">
          {userRole === 'retail' ? renderRetailContent() : renderWholesaleContent()}
        </main>

        {/* ─── Production Bottom Navigation Bar (ISSUE 5) ─────────────── */}
        <MobileBottomNav
          mode={userRole}
          activeTab={activeTab}
          onSelectTab={setActiveTab}
          cartCount={userRole === 'retail' ? totalCartCount : 0}
        />
      </div>
    </div>
  );
}
