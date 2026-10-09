import React, { useState } from 'react';

/**
 * RoleSelection Screen (ISSUE 4: Mandatory Root Gate & Role-Based Entry Routing)
 * Fully fluid, mobile-first gate with safe-area padding and 44px+ tap targets.
 *
 * @param {Object} props
 * @param {Function} props.onSelectRole - Callback receiving ('retail' | 'wholesale')
 */
export default function RoleSelection({ onSelectRole }) {
  const [selectedRole, setSelectedRole] = useState('retail');

  const handleContinue = () => {
    if (onSelectRole) {
      onSelectRole(selectedRole);
    }
  };

  return (
    <div className="w-full flex-1 flex flex-col justify-between px-4 sm:px-6 py-5 gap-4 overflow-y-auto select-none font-sans">
      {/* ─── Top Brand Header ────────────────────────────────────────── */}
      <div className="flex flex-col gap-4">
        <header className="flex items-center justify-between pt-1 pb-2">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-blue-700 text-white flex items-center justify-center font-black text-lg shadow-md shadow-blue-500/20 shrink-0">
              E
            </div>
            <div className="min-w-0">
              <h1 className="text-base font-extrabold text-slate-900 tracking-tight leading-none truncate">
                E-Engine
              </h1>
              <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block mt-0.5">
                Commerce Operating System
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
            <span
              className="material-symbols-outlined text-[14px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
            <span className="text-[11px] font-bold">Entry Gate</span>
          </div>
        </header>

        {/* ─── Headline Section ─────────────────────────────────────────── */}
        <div className="flex flex-col gap-1">
          <span className="self-start text-[11px] font-extrabold text-blue-700 uppercase tracking-wider bg-blue-50 px-2.5 py-0.5 rounded-md">
            Account Type Setup
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
            How do you plan to trade?
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Select your primary workspace experience. You can switch modes anytime from your Profile screen.
          </p>
        </div>

        {/* ─── Dual Selection Cards ─────────────────────────────────────── */}
        <div className="flex flex-col gap-3" role="radiogroup" aria-label="Account Type Selection">
          {/* Option 1: Personal Use (Retail) */}
          <div
            onClick={() => setSelectedRole('retail')}
            role="radio"
            aria-checked={selectedRole === 'retail'}
            tabIndex={0}
            className={`w-full p-4 rounded-2xl border transition-all duration-200 cursor-pointer relative ${
              selectedRole === 'retail'
                ? 'bg-white border-blue-600 shadow-md ring-2 ring-blue-600/20'
                : 'bg-white/80 border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    selectedRole === 'retail'
                      ? 'bg-blue-700 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  <span
                    className="material-symbols-outlined text-[24px]"
                    style={{ fontVariationSettings: selectedRole === 'retail' ? "'FILL' 1" : "'FILL' 0" }}
                  >
                    shopping_bag
                  </span>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-extrabold text-slate-900 truncate">
                      For Personal Use
                    </h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 shrink-0">
                      Retail
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 truncate block">
                    Individual Shoppers &amp; Households
                  </span>
                </div>
              </div>

              {/* Radio Indicator */}
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all ${
                  selectedRole === 'retail'
                    ? 'bg-blue-700 text-white'
                    : 'border-2 border-slate-300 bg-white'
                }`}
              >
                {selectedRole === 'retail' && (
                  <span className="material-symbols-outlined text-[16px] font-bold">check</span>
                )}
              </div>
            </div>

            <p className="text-xs text-slate-600 mb-2.5 leading-snug">
              Blinkit-style 10-minute quick commerce, local grocery, electronics, and 1-click ₹ checkout.
            </p>

            <div className="flex flex-wrap gap-1.5 pt-0.5">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-100 text-[11px] font-semibold text-slate-700">
                <span className="material-symbols-outlined text-[13px] text-emerald-600" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                ⚡ 10-Min Fast Dispatch
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-100 text-[11px] font-semibold text-slate-700">
                <span className="material-symbols-outlined text-[13px] text-blue-600" style={{ fontVariationSettings: "'FILL' 1" }}>currency_rupee</span>
                ₹ Rupee Retail Pricing
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-100 text-[11px] font-semibold text-slate-700">
                <span className="material-symbols-outlined text-[13px] text-emerald-600" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
                Free Over ₹499
              </span>
            </div>
          </div>

          {/* Option 2: For Business (Wholesale) */}
          <div
            onClick={() => setSelectedRole('wholesale')}
            role="radio"
            aria-checked={selectedRole === 'wholesale'}
            tabIndex={0}
            className={`w-full p-4 rounded-2xl border transition-all duration-200 cursor-pointer relative ${
              selectedRole === 'wholesale'
                ? 'bg-white border-blue-600 shadow-md ring-2 ring-blue-600/20'
                : 'bg-white/80 border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    selectedRole === 'wholesale'
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  <span
                    className="material-symbols-outlined text-[24px]"
                    style={{ fontVariationSettings: selectedRole === 'wholesale' ? "'FILL' 1" : "'FILL' 0" }}
                  >
                    domain
                  </span>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-extrabold text-slate-900 truncate">
                      For Business
                    </h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 shrink-0">
                      Wholesale
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 truncate block">
                    Commercial Merchants &amp; Bulk Buyers
                  </span>
                </div>
              </div>

              {/* Radio Indicator */}
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all ${
                  selectedRole === 'wholesale'
                    ? 'bg-blue-700 text-white'
                    : 'border-2 border-slate-300 bg-white'
                }`}
              >
                {selectedRole === 'wholesale' && (
                  <span className="material-symbols-outlined text-[16px] font-bold">check</span>
                )}
              </div>
            </div>

            <p className="text-xs text-slate-600 mb-2.5 leading-snug">
              Direct manufacturer rates, minimum order quantities (MOQ), live price negotiation, and GST input credit.
            </p>

            <div className="flex flex-wrap gap-1.5 pt-0.5">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-100 text-[11px] font-semibold text-slate-700">
                <span className="material-symbols-outlined text-[13px] text-blue-700" style={{ fontVariationSettings: "'FILL' 1" }}>price_check</span>
                Tiered Volume Discounts
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-100 text-[11px] font-semibold text-slate-700">
                <span className="material-symbols-outlined text-[13px] text-orange-600" style={{ fontVariationSettings: "'FILL' 1" }}>receipt_long</span>
                GST Invoicing &amp; Tax Input
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-100 text-[11px] font-semibold text-slate-700">
                <span className="material-symbols-outlined text-[13px] text-purple-600" style={{ fontVariationSettings: "'FILL' 1" }}>forum</span>
                Live Negotiation Room
              </span>
            </div>
          </div>
        </div>

        {/* Security Snapshot */}
        <div className="p-3 rounded-xl bg-slate-100/80 border border-slate-200/60 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 min-w-0">
            <span
              className="material-symbols-outlined text-[20px] text-emerald-700 shrink-0"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              shield_with_heart
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-bold text-slate-800 truncate">
                Secure &amp; Verified Platform
              </p>
              <p className="text-[10px] text-slate-500 truncate">
                256-bit SSL encryption &amp; GSTIN verification
              </p>
            </div>
          </div>
          <span className="text-[10px] font-bold text-slate-400 shrink-0">MCB v1</span>
        </div>
      </div>

      {/* ─── Bottom Action CTA ───────────────────────────────────────── */}
      <div className="pt-2 flex flex-col gap-2">
        <button
          onClick={handleContinue}
          type="button"
          className="w-full min-h-[50px] bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-700/25 active:scale-[0.99] transition-all"
        >
          <span>
            Continue to {selectedRole === 'retail' ? 'Retail Store (B2C)' : 'Wholesale Hub (B2B)'}
          </span>
          <span className="material-symbols-outlined text-[18px]">
            arrow_forward
          </span>
        </button>

        <p className="text-[11px] text-center text-slate-500">
          You can toggle anytime inside your Profile settings.
        </p>
      </div>
    </div>
  );
}
