import React from 'react';

/**
 * RetailProfile (Smart Container Page)
 * Fully fluid, mobile-first profile page with mode switcher and safe areas.
 *
 * @param {Object} props
 * @param {Function} props.onSwitchMode - Callback to switch mode ('wholesale' | 'retail')
 * @param {Function} [props.onResetRole] - Reset session to return to RoleSelection gate
 */
export default function RetailProfile({ onSwitchMode, onResetRole }) {
  return (
    <div className="w-full flex-1 flex flex-col gap-3 pb-28 select-none overflow-y-auto">
      {/* ─── Header ──────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 px-4 sm:px-5 py-3 shadow-xs">
        <h1 className="text-base font-extrabold text-slate-900 tracking-tight">
          Shopper Profile
        </h1>
        <p className="text-[11px] font-medium text-slate-500">
          Personal account settings &amp; mode switcher
        </p>
      </header>

      <div className="px-4 sm:px-5 flex flex-col gap-3.5">
        {/* ─── Profile Card ────────────────────────────────────────────── */}
        <div className="w-full bg-white rounded-2xl border border-slate-200/80 p-4 shadow-xs flex items-center gap-3.5">
          <div className="w-14 h-14 rounded-2xl bg-blue-700 text-white flex items-center justify-center font-black text-xl shadow-md shadow-blue-700/20 shrink-0">
            KP
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-extrabold text-slate-900 truncate">
                Khushal Prajapat
              </h2>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 shrink-0">
                Retail
              </span>
            </div>
            <p className="text-xs text-slate-500 truncate mt-0.5">
              khushalprajapat2007@gmail.com
            </p>
            <p className="text-[11px] text-slate-400 font-medium truncate">
              +91 98765 43210 • Jaipur, India
            </p>
          </div>
        </div>

        {/* ─── MANDATORY SWITCH MODE CARD (ISSUE 4) ────────────────────── */}
        <div className="w-full bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl p-4 shadow-md relative overflow-hidden flex flex-col gap-2.5">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-blue-600/30 border border-blue-400/30 flex items-center justify-center text-blue-300 shrink-0">
                <span className="material-symbols-outlined text-[20px]">domain</span>
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold text-blue-300 uppercase tracking-wider block">
                  Role Switcher
                </span>
                <h3 className="text-sm font-extrabold text-white truncate">
                  Wholesale Marketplace (B2B)
                </h3>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Need bulk inventory for your store? Switch to Wholesale mode for MOQ pricing, direct manufacturer lots, and GST invoicing.
          </p>

          <button
            onClick={() => onSwitchMode && onSwitchMode('wholesale')}
            type="button"
            className="w-full min-h-[46px] bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
          >
            <span>Switch to Wholesale (B2B) Mode</span>
            <span className="material-symbols-outlined text-[16px]">
              swap_horiz
            </span>
          </button>
        </div>

        {/* ─── Saved Addresses ─────────────────────────────────────────── */}
        <div className="w-full bg-white rounded-2xl border border-slate-200/80 p-3.5 shadow-xs flex flex-col gap-2">
          <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
            Default Delivery Address
          </h4>
          <div className="flex items-start gap-2.5">
            <span className="material-symbols-outlined text-emerald-600 text-[20px] mt-0.5 shrink-0">
              location_on
            </span>
            <div className="flex-1 min-w-0">
              <span className="text-xs font-bold text-slate-900 block truncate">Home • Civil Lines</span>
              <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                Flat 402, Metro Enclave, Sector 14, Civil Lines, Jaipur 302006
              </p>
            </div>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 shrink-0">
              Primary
            </span>
          </div>
        </div>

        {/* ─── Orders Snapshot ─────────────────────────────────────────── */}
        <div className="w-full bg-white rounded-2xl border border-slate-200/80 p-3.5 shadow-xs flex flex-col gap-2">
          <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
            Recent Quick-Commerce Orders
          </h4>
          <div className="space-y-2">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-2">
              <div className="min-w-0 flex-1">
                <span className="text-xs font-bold text-slate-800 block truncate">#ORD-2026-IN882</span>
                <span className="text-[10px] text-slate-500 block truncate">2 Items • Delivered in 9 mins</span>
              </div>
              <span className="text-xs font-extrabold text-blue-900 shrink-0">₹1,849</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-2">
              <div className="min-w-0 flex-1">
                <span className="text-xs font-bold text-slate-800 block truncate">#ORD-2026-IN731</span>
                <span className="text-[10px] text-slate-500 block truncate">4 Items • Delivered in 11 mins</span>
              </div>
              <span className="text-xs font-extrabold text-blue-900 shrink-0">₹2,499</span>
            </div>
          </div>
        </div>

        {/* ─── Session Reset / Gate Return ─────────────────────────────── */}
        <div className="pt-1">
          <button
            onClick={() => onResetRole && onResetRole()}
            type="button"
            className="w-full min-h-[44px] bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-600 font-bold text-xs rounded-xl border border-slate-200 transition-all active:scale-95 flex items-center justify-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[16px]">logout</span>
            <span>Switch Role or Log Out</span>
          </button>
        </div>
      </div>
    </div>
  );
}
