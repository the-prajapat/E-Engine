import React from 'react';

/**
 * MobileBottomNav (Dumb Presentation Component)
 * Fully fluid, mobile-first bottom navigation bar with min 48px tap targets.
 *
 * @param {Object} props
 * @param {'retail'|'wholesale'} props.mode
 * @param {string} props.activeTab
 * @param {Function} props.onSelectTab
 * @param {number} [props.cartCount=0]
 */
export default function MobileBottomNav({
  mode = 'retail',
  activeTab = 'home',
  onSelectTab,
  cartCount = 0,
}) {
  const retailTabs = [
    { id: 'home', label: 'Home', icon: 'storefront' },
    { id: 'categories', label: 'Categories', icon: 'grid_view' },
    { id: 'cart', label: 'Cart', icon: 'shopping_bag', badge: cartCount },
    { id: 'profile', label: 'Profile', icon: 'person' },
  ];

  const wholesaleTabs = [
    { id: 'home', label: 'Home', icon: 'storefront' },
    { id: 'search', label: 'Search', icon: 'search' },
    { id: 'orders', label: 'Orders', icon: 'receipt_long' },
    { id: 'messages', label: 'Messages', icon: 'forum' },
    { id: 'profile', label: 'Profile', icon: 'domain' },
  ];

  const tabs = mode === 'wholesale' ? wholesaleTabs : retailTabs;

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="fixed bottom-0 left-0 right-0 z-50 w-full max-w-md mx-auto bg-white/95 backdrop-blur-lg border-t border-slate-200/80 shadow-[0_-4px_20px_rgba(15,23,42,0.08)] pb-safe"
    >
      <div className="flex items-center justify-around h-16 px-1.5 sm:px-3">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab && onSelectTab(tab.id)}
              type="button"
              className={`flex flex-col items-center justify-center flex-1 min-w-0 min-h-[48px] py-1 transition-all duration-150 relative select-none rounded-xl active:scale-95 ${
                isActive ? 'text-blue-700' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <div className="relative flex items-center justify-center w-7 h-7 shrink-0">
                <span
                  className="material-symbols-outlined text-[24px] leading-none transition-transform"
                  style={{
                    fontVariationSettings: isActive ? "'FILL' 1, 'wght' 600" : "'FILL' 0, 'wght' 400",
                  }}
                >
                  {tab.icon}
                </span>

                {/* Badge indicator */}
                {Boolean(tab.badge && tab.badge > 0) && (
                  <span className="absolute -top-1 -right-2 bg-emerald-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center shadow-xs animate-pulse">
                    {tab.badge}
                  </span>
                )}
              </div>

              <span
                className={`text-[11px] mt-0.5 tracking-tight truncate max-w-full transition-colors ${
                  isActive ? 'font-bold text-blue-800' : 'font-medium text-slate-500'
                }`}
              >
                {tab.label}
              </span>

              {/* Active Underline Pill */}
              {isActive && (
                <span className="absolute bottom-1 w-5 h-1 bg-blue-700 rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
