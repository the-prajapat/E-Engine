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
import { useCart, useUserRole } from './logic/index.js';
import { useGlobalBridge } from '../shared-core/global-bridge.js';

/**
 * Root User Panel Container
 * Clean Domain Architecture: /e-engine/user-panel/App.jsx
 *
 * Adheres strictly to UI & Layout requirements:
 * 1. Mobile-First & Fully Fluid: w-full, max-w-md, flex, percentage, zero fixed px bottlenecks.
 * 2. Safe Scrolling: min-h-screen with overflow-y-auto on main container.
 * 3. Flexbox/Grid Layout: flex-col with gap- utilities for spacing.
 * 4. Safe Areas & Padding: px-4 to px-6 safe horizontal padding.
 * 5. Responsive Controls: min-height 44px on all touch targets.
 * 6. Synchronized with Shared Core Bridge (Admin & Dealer updates).
 */
export default function App() {
  const { userRole, selectRole, switchRole, resetRole } = useUserRole();
  const { cartItems, totalCartCount, updateQuantity } = useCart();
  const { config: sharedConfig } = useGlobalBridge();

  const [activeTab, setActiveTab] = useState('home');

  // Smooth scroll to top when tab or role switches
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab, userRole]);

  const handleSelectRole = (role) => {
    selectRole(role);
    setActiveTab('home');
  };

  const handleSwitchRole = (newRole) => {
    switchRole(newRole);
    setActiveTab('home');
  };

  const handleResetRole = () => {
    resetRole();
    setActiveTab('home');
  };

  // ─── GATE 1: Unauthenticated / First Launch Root Gate ────────────────
  if (!userRole) {
    return (
      <div className="w-full min-h-screen bg-slate-900/90 flex justify-center items-start">
        <div className="w-full max-w-md mx-auto min-h-screen bg-neutral-50 relative overflow-x-hidden overflow-y-auto shadow-2xl border-x border-slate-200/60 flex flex-col">
          <RoleSelection onSelectRole={handleSelectRole} />
        </div>
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
            onUpdateCart={updateQuantity}
            onNavigateTab={setActiveTab}
          />
        );
      case 'categories':
        return (
          <RetailCategories
            cartItems={cartItems}
            onUpdateCart={updateQuantity}
          />
        );
      case 'cart':
        return (
          <RetailCart
            cartItems={cartItems}
            onUpdateCart={updateQuantity}
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
            onUpdateCart={updateQuantity}
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
      {/* ─── Strict Mobile-First Fluid Container ──────────────────────── */}
      <div className="w-full max-w-md mx-auto min-h-screen bg-neutral-50 relative pb-20 overflow-x-hidden overflow-y-auto shadow-2xl border-x border-slate-200/60 flex flex-col">
        {/* Dynamic Global Bridge Banner if active */}
        {sharedConfig?.promotionalBanners?.find((b) => b.active && b.audience === userRole) && (
          <div className="w-full bg-gradient-to-r from-blue-700 to-indigo-800 text-white px-4 py-2 flex items-center justify-between text-xs font-semibold shadow-inner shrink-0">
            <div className="flex items-center gap-1.5 truncate">
              <span className="material-symbols-outlined text-sm text-yellow-300">campaign</span>
              <span className="truncate">
                {sharedConfig.promotionalBanners.find((b) => b.active && b.audience === userRole).title}
              </span>
            </div>
            <span className="bg-white/20 text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider shrink-0 ml-2">
              {sharedConfig.promotionalBanners.find((b) => b.active && b.audience === userRole).badge}
            </span>
          </div>
        )}

        <main className="w-full flex-1 flex flex-col min-h-0">
          {userRole === 'retail' ? renderRetailContent() : renderWholesaleContent()}
        </main>

        {/* ─── Production Bottom Navigation Bar ──────────────────────── */}
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
