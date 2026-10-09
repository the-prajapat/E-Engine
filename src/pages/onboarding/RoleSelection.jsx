import React, { useState } from 'react';

/**
 * RoleSelection Screen (ISSUE 4: Mandatory Root Gate & Role-Based Entry Routing)
 * Clean, production mobile gate for Retail vs Wholesale mode.
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
    <div className="w-full max-w-md mx-auto min-h-screen bg-neutral-50 relative pb-8 overflow-x-hidden flex flex-col justify-between p-5 select-none font-sans">
      {/* ─── Top Brand Header ────────────────────────────────────────── */}
      <div>
        <header className="flex items-center justify-between pt-2 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-blue-700 text-white flex items-center justify-center font-black text-lg shadow-md shadow-blue-500/20">
              E
            </div>
            <div>
              <h1 className="text-base font-extrabold text-slate-900 tracking-tight leading-none">
                E-Engine
              </h1>
              <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                Commerce Operating System
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
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
        <div className="mt-4 mb-6">
          <span className="inline-block text-[11px] font-extrabold text-blue-700 uppercase tracking-wider bg-blue-50 px-2.5 py-0.5 rounded-md mb-2">
            Account Type Setup
          </span>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight leading-tight">
            How do you plan to trade?
          </h2>
          <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
            Select your primary workspace experience. You can seamlessly switch modes anytime from your Profile screen.
          </p>
        </div>

        {/* ─── Dual Selection Cards ─────────────────────────────────────── */}
        <div className="flex flex-col gap-3.5" role="radiogroup" aria-label="Account Type Selection">
          {/* Option 1: Personal Use (Retail) */}
          <div
            onClick={() => setSelectedRole('retail')}
            role="radio"
            aria-checked={selectedRole === 'retail'}
            tabIndex={0}
            className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer relative ${
              selectedRole === 'retail'
                ? 'bg-white border-blue-600 shadow-md ring-2 ring-blue-600/20'
                : 'bg-white/80 border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
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
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-extrabold text-slate-900">
                      For Personal Use
                    </h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      Retail
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500">
                    Individual Shoppers & Households
                  </span>
                </div>
              </div>

              {/* Radio Indicator */}
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
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

            <p className="text-xs text-slate-600 mb-3 leading-snug pl-1">
              Blinkit-style 10-minute quick commerce, local grocery, electronics, and 1-click ₹ checkout.
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
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
            className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer relative ${
              selectedRole === 'wholesale'
                ? 'bg-white border-blue-600 shadow-md ring-2 ring-blue-600/20'
                : 'bg-white/80 border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
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
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-extrabold text-slate-900">
                      For Business
                    </h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                      Wholesale
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500">
                    Commercial Merchants & Bulk Buyers
                  </span>
                </div>
              </div>

              {/* Radio Indicator */}
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
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

            <p className="text-xs text-slate-600 mb-3 leading-snug pl-1">
              Direct manufacturer rates, minimum order quantities (MOQ), live price negotiation, and GST input credit.
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-100 text-[11px] font-semibold text-slate-700">
                <span className="material-symbols-outlined text-[13px] text-blue-700" style={{ fontVariationSettings: "'FILL' 1" }}>price_check</span>
                Tiered Volume Discounts
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-100 text-[11px] font-semibold text-slate-700">
                <span className="material-symbols-outlined text-[13px] text-orange-600" style={{ fontVariationSettings: "'FILL' 1" }}>receipt_long</span>
                GST Invoicing & Tax Input
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-100 text-[11px] font-semibold text-slate-700">
                <span className="material-symbols-outlined text-[13px] text-purple-600" style={{ fontVariationSettings: "'FILL' 1" }}>forum</span>
                Live Negotiation Room
              </span>
            </div>
          </div>
        </div>

        {/* Security Snapshot */}
        <div className="mt-4 p-3 rounded-xl bg-slate-100/80 border border-slate-200/60 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span
              className="material-symbols-outlined text-[20px] text-emerald-700"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              shield_with_heart
            </span>
            <div>
              <p className="text-[11px] font-bold text-slate-800">
                Secure & Verified Platform
              </p>
              <p className="text-[10px] text-slate-500">
                256-bit SSL encryption & GSTIN verification
              </p>
            </div>
          </div>
          <span className="text-[10px] font-bold text-slate-400">MCB v1</span>
        </div>
      </div>

      {/* ─── Bottom Action CTA ───────────────────────────────────────── */}
      <div className="pt-6">
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

        <p className="text-[11px] text-center text-slate-500 mt-2.5">
          You can toggle anytime inside your Profile settings.
        </p>
      </div>
    </div>
  );
}
