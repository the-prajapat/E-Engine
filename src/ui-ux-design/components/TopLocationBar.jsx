import React from 'react';

/**
 * TopLocationBar (Dumb Presentation Component)
 * Normalized Blinkit/Zepto-style Quick Commerce Header with 44px tap targets.
 *
 * @param {Object} props
 * @param {string} [props.address="Civil Lines, Metro Hub, Jaipur"]
 * @param {string} [props.eta="10 MINS"]
 * @param {Function} [props.onSelectAddress]
 * @param {Function} [props.onProfileClick]
 */
export default function TopLocationBar({
  address = 'Civil Lines, Metro Hub, Jaipur',
  eta = '10 MINS',
  onSelectAddress,
  onProfileClick,
}) {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm px-4 py-2.5">
      <div className="flex items-center justify-between gap-3">
        {/* Delivery Location Section */}
        <button
          onClick={onSelectAddress}
          type="button"
          className="flex items-center gap-2.5 min-w-0 flex-1 text-left min-h-[44px] -ml-1 pl-1 pr-2 rounded-xl active:bg-slate-50 transition-colors"
        >
          <div className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
            <span
              className="material-symbols-outlined text-emerald-600 text-[20px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              location_on
            </span>
          </div>

          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-black tracking-wider uppercase bg-amber-400 text-slate-900 px-1.5 py-0.5 rounded-md shadow-xs">
                ⚡ {eta}
              </span>
              <span className="text-xs font-bold text-slate-900 flex items-center gap-0.5">
                Deliver to
                <span className="material-symbols-outlined text-slate-400 text-[16px]">
                  expand_more
                </span>
              </span>
            </div>
            <span className="text-xs font-semibold text-slate-600 truncate mt-0.5">
              {address}
            </span>
          </div>
        </button>

        {/* Profile / Action Avatar */}
        <button
          onClick={onProfileClick}
          type="button"
          aria-label="User Profile"
          className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 shrink-0 transition-colors active:scale-95"
        >
          <span className="material-symbols-outlined text-[20px]">
            person
          </span>
        </button>
      </div>
    </header>
  );
}
