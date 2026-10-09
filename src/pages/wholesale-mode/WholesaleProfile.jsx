import React from 'react';

/**
 * WholesaleProfile (Smart Container Page)
 * ISSUE 4: Profile Page containing the persistent "Switch Mode" toggle to Retail.
 *
 * @param {Object} props
 * @param {Function} props.onSwitchMode - Callback to switch mode ('retail' | 'wholesale')
 * @param {Function} [props.onResetRole] - Reset session to return to RoleSelection gate
 */
export default function WholesaleProfile({ onSwitchMode, onResetRole }) {
  return (
    <div className="w-full flex flex-col pb-28 select-none">
      {/* ─── Header ──────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 px-4 py-3 shadow-xs">
        <h1 className="text-base font-extrabold text-slate-900 tracking-tight">
          Enterprise Profile
        </h1>
        <p className="text-[11px] font-medium text-slate-500">
          GSTIN credentials, commercial credit &amp; role switcher
        </p>
      </header>

      <div className="px-4 py-3 flex flex-col gap-3.5">
        {/* ─── Enterprise Profile Card ─────────────────────────────────── */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-xs flex items-center gap-3.5">
          <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-xl shadow-md">
            PL
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-extrabold text-slate-900 truncate">
                Prajapat Logistics &amp; Trade
              </h2>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                B2B
              </span>
            </div>
            <p className="text-xs text-slate-500 truncate mt-0.5">
              GSTIN: 08AAAAA0000A1Z5 (Active)
            </p>
            <p className="text-[11px] text-slate-400 font-medium">
              Authorized: Khushal Prajapat
            </p>
          </div>
        </div>

        {/* ─── MANDATORY SWITCH MODE CARD (ISSUE 4) ────────────────────── */}
        <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white rounded-2xl p-4 shadow-md relative overflow-hidden">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  shopping_bag
                </span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-blue-200 uppercase tracking-wider block">
                  Role Switcher
                </span>
                <h3 className="text-sm font-extrabold text-white">
                  Retail Storefront (Personal Use)
                </h3>
              </div>
            </div>
          </div>

          <p className="text-xs text-blue-100 mb-3.5 leading-relaxed">
            Done with bulk purchasing? Switch to personal mode for 10-minute quick-commerce delivery, fresh essentials, and 1-click checkout.
          </p>

          <button
            onClick={() => onSwitchMode && onSwitchMode('retail')}
            type="button"
            className="w-full min-h-[46px] bg-white text-blue-900 hover:bg-blue-50 active:bg-blue-100 font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
          >
            <span>Switch to Retail (Personal) Mode</span>
            <span className="material-symbols-outlined text-[16px]">
              swap_horiz
            </span>
          </button>
        </div>

        {/* ─── Credit Limit & Financials ───────────────────────────────── */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-3.5 shadow-xs">
          <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-2.5">
            Trade Credit Line
          </h4>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-500">Sanctioned Limit:</span>
              <span className="font-bold text-slate-800">₹5,00,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Available Balance:</span>
              <span className="font-extrabold text-emerald-700">₹3,45,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Payment Term:</span>
              <span className="font-semibold text-slate-800">Net-30 Commercial Terms</span>
            </div>
          </div>
        </div>

        {/* ─── Tax Invoices & Compliance ──────────────────────────────── */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-3.5 shadow-xs">
          <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-2">
            Tax Documents
          </h4>
          <div className="space-y-2">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-800 block">Q2 GST Return Filing (GSTR-1)</span>
                <span className="text-[10px] text-slate-500">Filed on 20 Sep 2026 • Verified</span>
              </div>
              <span className="text-xs font-extrabold text-emerald-700">Reconciled</span>
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
