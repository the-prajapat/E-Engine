import React, { useState } from 'react';
import { useAdminBridge } from '../logic/useAdminBridge.js';
import { AdminStatCard, AdminSectionHeader, ToggleSwitch } from '../ui-ux-design/AdminUI.jsx';

/**
 * AdminRoot — /e-engine/admin-panel/pages/AdminRoot.jsx
 * Fully functional Master Admin Dashboard & Bridge Orchestrator.
 *
 * Capabilities:
 * 1. Promotional Banners: Add, remove, audience filter, toggle live status.
 * 2. 10-Min Delivery SLA: Interactive slider (5-60m), custom guarantee copy, express dispatch toggle.
 * 3. AI Smart Cart Rules: Split order alerts, thresholds, free delivery minimums.
 * 4. Dealer Badges: 1-click granting/revoking Verified, Fast Dispatch, ISO-9001, Quality Assured.
 * 5. Wholesale MOQ: Default MOQ, strict mode toggle, dynamic tiered volume discounts.
 * 6. Live Bridge Broadcast: Real-time sync with User Panel.
 */
export default function AdminRoot({ onNavigatePortal }) {
  const {
    config,
    addBanner,
    removeBanner,
    toggleBanner,
    setSlaMinutes,
    setSlaMessage,
    toggleExpressDispatch,
    updateSmartCartRules,
    toggleDealerBadge,
    setDefaultMOQ,
    toggleStrictMOQ,
    addDiscountTier,
    removeDiscountTier,
    resetToDefaults,
  } = useAdminBridge();

  const [activeTab, setActiveTab] = useState('overview');
  const [toastMessage, setToastMessage] = useState(null);

  // Banner Modal Form State
  const [showBannerModal, setShowBannerModal] = useState(false);
  const [bannerForm, setBannerForm] = useState({
    title: '',
    subtitle: '',
    audience: 'retail',
    badge: 'PROMO',
    code: '',
  });

  // Volume Tier Form State
  const [showTierForm, setShowTierForm] = useState(false);
  const [tierForm, setTierForm] = useState({
    minUnits: 250,
    discountPct: 15,
    label: '',
  });

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleCreateBanner = (e) => {
    e.preventDefault();
    if (!bannerForm.title.trim()) return;

    addBanner(bannerForm);
    setBannerForm({ title: '', subtitle: '', audience: 'retail', badge: 'PROMO', code: '' });
    setShowBannerModal(false);
    triggerToast('New promotional banner broadcasted to User Panel! 📢');
  };

  const handleCreateTier = (e) => {
    e.preventDefault();
    if (!tierForm.minUnits || !tierForm.discountPct) return;

    addDiscountTier({
      minUnits: tierForm.minUnits,
      discountPct: tierForm.discountPct,
      label: tierForm.label || `Wholesale Volume (${tierForm.discountPct}% Off)`,
    });
    setTierForm({ minUnits: 250, discountPct: 15, label: '' });
    setShowTierForm(false);
    triggerToast('Wholesale discount tier updated across catalogs! 🏷️');
  };

  // ─── TAB 1: OVERVIEW ────────────────────────────────────────────────────────
  const renderOverviewTab = () => {
    const activeBannersCount = config.promotionalBanners?.filter((b) => b.active).length || 0;
    const verifiedDealersCount = config.dealersList?.filter((d) => d.verified).length || 0;

    return (
      <div className="space-y-6">
        {/* KPI Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AdminStatCard
            title="10-Min SLA Delivery"
            value={`${config.slaTimerMinutes} Mins`}
            subtext="Target Dark Store SLA"
            trend={config.expressDispatchEnabled ? 'Express ON 🟢' : 'Standard'}
            icon="timer"
            color="blue"
          />
          <AdminStatCard
            title="Active Banners"
            value={activeBannersCount}
            subtext={`${config.promotionalBanners?.length || 0} Total configured`}
            trend="Live Broadcasting"
            icon="campaign"
            color="emerald"
          />
          <AdminStatCard
            title="Verified Dealers"
            value={verifiedDealersCount}
            subtext={`${config.dealersList?.length || 0} Registered suppliers`}
            trend="100% Vetted"
            icon="verified"
            color="purple"
          />
          <AdminStatCard
            title="Default MOQ"
            value={`${config.moqLimits?.defaultMOQ || 50} Units`}
            subtext={`${config.moqLimits?.discountTiers?.length || 0} Discount tiers`}
            trend={config.moqLimits?.enforceStrictMOQ ? 'Strict Mode' : 'Flexible'}
            icon="inventory_2"
            color="amber"
          />
        </div>

        {/* Quick Orchestration Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Quick SLA Adjuster */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-blue-400 text-lg">bolt</span>
                  Live SLA Quick Dispatch
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">Control quick-commerce countdown on User app</p>
              </div>
              <span className="text-xl font-black text-blue-400 bg-blue-500/10 px-3 py-1 rounded-xl border border-blue-500/20">
                {config.slaTimerMinutes}m
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>5 mins (Ultra Fast)</span>
                <span>20 mins</span>
                <span>45 mins</span>
              </div>
              <input
                type="range"
                min="5"
                max="45"
                step="1"
                value={config.slaTimerMinutes}
                onChange={(e) => {
                  setSlaMinutes(e.target.value);
                  triggerToast(`SLA updated to ${e.target.value} minutes!`);
                }}
                className="w-full accent-blue-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>

            <div className="pt-2 border-t border-slate-800">
              <ToggleSwitch
                checked={config.expressDispatchEnabled}
                onChange={(val) => {
                  toggleExpressDispatch(val);
                  triggerToast(val ? 'Express dispatch enabled!' : 'Express dispatch disabled');
                }}
                label="Express 10-Minute Dark Store Lock"
                description="Prioritizes nearest warehouse hub automatically"
              />
            </div>
          </div>

          {/* Quick AI Smart Cart Rule Snapshot */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-400 text-lg">auto_awesome</span>
                  AI Smart Cart Split Rules
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">Live order split thresholds across dark store & dealers</p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Active
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-400">Dark Store Minimum</span>
                <div className="text-base font-bold text-white mt-1">₹{config.aiSmartCartRules?.darkStoreThreshold}</div>
              </div>
              <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-400">Partner Dealer Min</span>
                <div className="text-base font-bold text-white mt-1">₹{config.aiSmartCartRules?.partnerDealerThreshold}</div>
              </div>
            </div>

            <ToggleSwitch
              checked={config.aiSmartCartRules?.enableSplitAlert}
              onChange={(val) => {
                updateSmartCartRules({ enableSplitAlert: val });
                triggerToast(val ? 'AI Split Alert Enabled' : 'AI Split Alert Disabled');
              }}
              label="Enable Real-Time Split Order Notice"
              description="Notifies users when carts split across multiple fulfillment hubs"
            />
          </div>
        </div>
      </div>
    );
  };

  // ─── TAB 2: PROMOTIONAL BANNERS ──────────────────────────────────────────
  const renderBannersTab = () => {
    return (
      <div className="space-y-6">
        <AdminSectionHeader
          title="Promotional Banners Manager"
          subtitle="Configure live marketing banners syncing in real time to Retail B2C & Wholesale B2B home screens"
        >
          <button
            onClick={() => setShowBannerModal(true)}
            className="text-xs bg-blue-600 hover:bg-blue-500 text-white font-semibold px-3.5 py-2 rounded-xl transition-all shadow-md shadow-blue-600/30 flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-sm">add_circle</span>
            Add New Banner
          </button>
        </AdminSectionHeader>

        {/* Banners List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(config.promotionalBanners || []).map((banner) => (
            <div
              key={banner.id}
              className={`bg-slate-900 border rounded-2xl p-5 shadow-lg transition-all flex flex-col justify-between ${
                banner.active ? 'border-slate-800' : 'border-slate-800/40 opacity-60'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase bg-blue-500/20 text-blue-400 border border-blue-500/30">
                      {banner.badge}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase bg-slate-800 text-slate-300">
                      {banner.audience === 'retail' ? '🛒 Retail' : '🏢 Wholesale'}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => {
                        toggleBanner(banner.id);
                        triggerToast(`Banner status updated`);
                      }}
                      className={`text-xs px-2.5 py-1 rounded-lg font-medium transition-colors ${
                        banner.active ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {banner.active ? 'Active' : 'Paused'}
                    </button>
                    <button
                      onClick={() => {
                        removeBanner(banner.id);
                        triggerToast('Banner deleted');
                      }}
                      className="text-slate-500 hover:text-red-400 p-1 rounded-lg transition-colors"
                      title="Delete banner"
                    >
                      <span className="material-symbols-outlined text-base">delete</span>
                    </button>
                  </div>
                </div>

                <h4 className="text-sm font-bold text-white mt-2">{banner.title}</h4>
                <p className="text-xs text-slate-400 mt-1">{banner.subtitle}</p>
              </div>

              {banner.code && (
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Coupon Code:</span>
                  <span className="font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    {banner.code}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // ─── TAB 3: 10-MIN SLA & DISPATCH ─────────────────────────────────────────
  const renderSlaTab = () => {
    return (
      <div className="space-y-6">
        <AdminSectionHeader
          title="10-Minute SLA & Dispatch Orchestrator"
          subtitle="Fine-tune quick-commerce target delivery timings, countdown timers, and regional warehouse thresholds"
        />

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6 max-w-2xl">
          {/* Live Preview Card */}
          <div className="bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-slate-900 border border-blue-500/30 rounded-2xl p-5 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-400">User App Live Badge Preview</span>
              <div className="text-xl font-black text-white mt-1 flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-400 text-2xl animate-pulse">timer</span>
                {config.slaTimerMinutes} Mins Delivery
              </div>
              <p className="text-xs text-slate-400 mt-1">{config.slaAlertMessage}</p>
            </div>
            <div className="text-right">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Live Broadcast
              </span>
            </div>
          </div>

          {/* SLA Minutes Slider */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-200">Delivery SLA Target Time</label>
              <span className="text-sm font-black text-blue-400">{config.slaTimerMinutes} Minutes</span>
            </div>
            <input
              type="range"
              min="5"
              max="45"
              step="1"
              value={config.slaTimerMinutes}
              onChange={(e) => setSlaMinutes(e.target.value)}
              className="w-full accent-blue-500 h-2.5 bg-slate-800 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-500">
              <span>5m (Ultra Dark Store)</span>
              <span>10m (Standard Express)</span>
              <span>20m</span>
              <span>45m (Hyperlocal)</span>
            </div>
          </div>

          {/* Guarantee Copy Editor */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-200">SLA Guarantee Banner Copy</label>
            <input
              type="text"
              value={config.slaAlertMessage}
              onChange={(e) => setSlaMessage(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
              placeholder="e.g. Express Dark Store dispatch in under 10 minutes"
            />
          </div>

          {/* Dispatch Toggles */}
          <div className="pt-4 border-t border-slate-800 space-y-2">
            <ToggleSwitch
              checked={config.expressDispatchEnabled}
              onChange={toggleExpressDispatch}
              label="Enforce Guaranteed 10-Minute Dark Store Dispatch"
              description="Automatically throttles order batching to keep riders under 10 minutes"
            />
          </div>
        </div>
      </div>
    );
  };

  // ─── TAB 4: AI SMART CART RULES ───────────────────────────────────────────
  const renderSmartCartTab = () => {
    const rules = config.aiSmartCartRules || {};

    return (
      <div className="space-y-6">
        <AdminSectionHeader
          title="AI Smart Cart Rules & Order Split Engine"
          subtitle="Manage threshold algorithms that split retail orders between local 10-min Dark Stores and verified Partner Dealers"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {/* Thresholds Form */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-400 text-lg">tune</span>
              Delivery & Free Shipping Thresholds
            </h3>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-slate-300">Dark Store Min Delivery Threshold (₹)</label>
                <input
                  type="number"
                  value={rules.darkStoreThreshold}
                  onChange={(e) => updateSmartCartRules({ darkStoreThreshold: Number(e.target.value) || 0 })}
                  className="w-full mt-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300">Partner Dealer Min Delivery Threshold (₹)</label>
                <input
                  type="number"
                  value={rules.partnerDealerThreshold}
                  onChange={(e) => updateSmartCartRules({ partnerDealerThreshold: Number(e.target.value) || 0 })}
                  className="w-full mt-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300">Free Delivery Minimum Cart Value (₹)</label>
                <input
                  type="number"
                  value={rules.freeDeliveryMinimum}
                  onChange={(e) => updateSmartCartRules({ freeDeliveryMinimum: Number(e.target.value) || 0 })}
                  className="w-full mt-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* AI Split Alert Rules */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-emerald-400 text-lg">psychology</span>
              AI Split Order Warning
            </h3>

            <ToggleSwitch
              checked={rules.enableSplitAlert}
              onChange={(val) => updateSmartCartRules({ enableSplitAlert: val })}
              label="Enable AI Split Order Banner in Cart"
              description="Displays split fulfillment explanation when cart contains both quick-grocery and dealer items"
            />

            <div className="space-y-1.5 pt-2">
              <label className="text-xs font-semibold text-slate-300">Split Warning Notice Copy</label>
              <textarea
                rows="3"
                value={rules.splitWarningText}
                onChange={(e) => updateSmartCartRules({ splitWarningText: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-300 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  // ─── TAB 5: DEALER VERIFICATIONS ──────────────────────────────────────────
  const renderDealersTab = () => {
    return (
      <div className="space-y-6">
        <AdminSectionHeader
          title="Dealer Directory & Trust Badging"
          subtitle="Issue and revoke official trust badges (Verified Dealer, Fast Dispatch, ISO 9001) in real time"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(config.dealersList || []).map((dealer) => (
            <div key={dealer.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    {dealer.name}
                    {dealer.verified && (
                      <span className="material-symbols-outlined text-emerald-400 text-sm">verified</span>
                    )}
                  </h4>
                  <div className="text-xs text-slate-400 mt-0.5">{dealer.category}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{dealer.city} • GSTIN: {dealer.gstin}</div>
                </div>
                <div className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  ★ {dealer.rating}
                </div>
              </div>

              {/* Badges Toggles */}
              <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-2 text-xs">
                <button
                  onClick={() => {
                    toggleDealerBadge(dealer.id, 'verified');
                    triggerToast(`Toggled Verified badge for ${dealer.name}`);
                  }}
                  className={`p-2 rounded-xl border flex items-center justify-between transition-all ${
                    dealer.verified ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300' : 'bg-slate-950 border-slate-800 text-slate-500'
                  }`}
                >
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="material-symbols-outlined text-sm">verified</span> Verified
                  </span>
                  <span className="text-[10px] font-bold">{dealer.verified ? 'ON' : 'OFF'}</span>
                </button>

                <button
                  onClick={() => {
                    toggleDealerBadge(dealer.id, 'fastDispatch');
                    triggerToast(`Toggled Fast Dispatch for ${dealer.name}`);
                  }}
                  className={`p-2 rounded-xl border flex items-center justify-between transition-all ${
                    dealer.fastDispatch ? 'bg-blue-500/15 border-blue-500/40 text-blue-300' : 'bg-slate-950 border-slate-800 text-slate-500'
                  }`}
                >
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="material-symbols-outlined text-sm">bolt</span> 10m Dispatch
                  </span>
                  <span className="text-[10px] font-bold">{dealer.fastDispatch ? 'ON' : 'OFF'}</span>
                </button>

                <button
                  onClick={() => {
                    toggleDealerBadge(dealer.id, 'isoCertified');
                    triggerToast(`Toggled ISO-9001 for ${dealer.name}`);
                  }}
                  className={`p-2 rounded-xl border flex items-center justify-between transition-all ${
                    dealer.isoCertified ? 'bg-purple-500/15 border-purple-500/40 text-purple-300' : 'bg-slate-950 border-slate-800 text-slate-500'
                  }`}
                >
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="material-symbols-outlined text-sm">shield_with_heart</span> ISO 9001
                  </span>
                  <span className="text-[10px] font-bold">{dealer.isoCertified ? 'ON' : 'OFF'}</span>
                </button>

                <button
                  onClick={() => {
                    toggleDealerBadge(dealer.id, 'qualityAssured');
                    triggerToast(`Toggled Quality Assured for ${dealer.name}`);
                  }}
                  className={`p-2 rounded-xl border flex items-center justify-between transition-all ${
                    dealer.qualityAssured ? 'bg-amber-500/15 border-amber-500/40 text-amber-300' : 'bg-slate-950 border-slate-800 text-slate-500'
                  }`}
                >
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="material-symbols-outlined text-sm">workspace_premium</span> Assured
                  </span>
                  <span className="text-[10px] font-bold">{dealer.qualityAssured ? 'ON' : 'OFF'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // ─── TAB 6: WHOLESALE MOQ & VOLUME TIERS ──────────────────────────────────
  const renderMoqTab = () => {
    const moqConfig = config.moqLimits || {};

    return (
      <div className="space-y-6">
        <AdminSectionHeader
          title="Wholesale MOQ & Volume Pricing Tier Builder"
          subtitle="Configure default minimum order quantities and bulk volume discounts applied in B2B catalog & deal rooms"
        >
          <button
            onClick={() => setShowTierForm(true)}
            className="text-xs bg-amber-600 hover:bg-amber-500 text-white font-semibold px-3.5 py-2 rounded-xl transition-all shadow-md shadow-amber-600/30 flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-sm">add_circle</span>
            Add Volume Tier
          </button>
        </AdminSectionHeader>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* MOQ Core Settings */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-amber-400 text-lg">inventory_2</span>
              Global MOQ Standards
            </h3>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300">Default Catalog Minimum Order Quantity</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="1"
                  value={moqConfig.defaultMOQ}
                  onChange={(e) => setDefaultMOQ(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                />
                <span className="text-xs text-slate-400 font-bold shrink-0">Units</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800">
              <ToggleSwitch
                checked={moqConfig.enforceStrictMOQ}
                onChange={toggleStrictMOQ}
                label="Enforce Strict MOQ at Checkout"
                description="Prevents B2B orders with quantities less than vendor minimum"
              />
            </div>
          </div>

          {/* Volume Tiers List */}
          <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-400 text-lg">percent</span>
                Volume Discount Tiers (B2B Marketplace)
              </h3>
              <span className="text-xs text-slate-400 font-semibold">
                {moqConfig.discountTiers?.length || 0} Active Tiers
              </span>
            </div>

            <div className="space-y-2.5">
              {(moqConfig.discountTiers || []).map((tier) => (
                <div
                  key={tier.id}
                  className="bg-slate-950/80 border border-slate-800 p-3.5 rounded-xl flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-black text-xs">
                      {tier.discountPct}%
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{tier.label}</div>
                      <div className="text-[11px] text-slate-400">Orders above {tier.minUnits} units</div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      removeDiscountTier(tier.id);
                      triggerToast('Discount tier removed');
                    }}
                    className="text-slate-500 hover:text-red-400 p-1.5 rounded-lg transition-colors"
                    title="Remove tier"
                  >
                    <span className="material-symbols-outlined text-base">delete</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 text-xs font-semibold animate-bounce border border-blue-400/30">
          <span className="material-symbols-outlined text-sm">check_circle</span>
          {toastMessage}
        </div>
      )}

      {/* ─── Top Admin Bar ────────────────────────────────────────── */}
      <header className="w-full bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-black text-white text-lg shadow-lg shadow-blue-500/20">
            E
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base font-bold text-white tracking-tight">E-Engine Master Admin</h1>
              <span className="text-[10px] uppercase font-extrabold bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full border border-blue-500/30">
                Core v1.0
              </span>
            </div>
            <p className="text-xs text-slate-400">Live Global Bridge Orchestrator & Multi-Vendor Control</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              resetToDefaults();
              triggerToast('Bridge reset to default master state');
            }}
            className="text-xs bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white px-3 py-2 rounded-lg font-medium transition-colors hidden sm:flex items-center gap-1.5"
            title="Reset bridge state"
          >
            <span className="material-symbols-outlined text-sm">restart_alt</span>
            Reset Defaults
          </button>

          {onNavigatePortal && (
            <button
              onClick={() => onNavigatePortal('user')}
              className="text-xs bg-blue-600 hover:bg-blue-500 text-white px-3.5 py-2 rounded-xl font-bold transition-all shadow-md shadow-blue-600/30 flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-sm">smartphone</span>
              View Live User App
            </button>
          )}

          <div className="flex items-center gap-2 pl-3 border-l border-slate-800">
            <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-200">
              KP
            </div>
            <div className="text-left hidden md:block">
              <div className="text-xs font-semibold text-slate-200">Khushal Prajapat</div>
              <div className="text-[10px] text-emerald-400">Bridge Synchronized 🟢</div>
            </div>
          </div>
        </div>
      </header>

      {/* ─── Main Admin Deck ──────────────────────────────────────── */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar Nav */}
        <aside className="w-64 bg-slate-900/60 border-r border-slate-800 p-4 flex flex-col justify-between shrink-0">
          <div className="space-y-1">
            <div className="text-[10px] font-bold uppercase text-slate-500 tracking-wider px-3 mb-2">
              Control Domains
            </div>
            {[
              { id: 'overview', label: 'Dashboard Overview', icon: 'dashboard' },
              { id: 'banners', label: 'Promotional Banners', icon: 'campaign' },
              { id: 'sla', label: '10-Min SLA & Dispatch', icon: 'timer' },
              { id: 'smart-cart', label: 'AI Smart Cart Rules', icon: 'shopping_basket' },
              { id: 'dealers', label: 'Dealer Verifications', icon: 'verified' },
              { id: 'moq', label: 'Wholesale MOQ Tiers', icon: 'inventory_2' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <span className="material-symbols-outlined text-base">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3 text-xs">
            <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Bridge Live Broadcast
            </div>
            <p className="text-[10px] text-slate-500 mt-1">Changes propagate instantly to mobile client</p>
          </div>
        </aside>

        {/* Content Body */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          <div className="max-w-5xl mx-auto">
            {activeTab === 'overview' && renderOverviewTab()}
            {activeTab === 'banners' && renderBannersTab()}
            {activeTab === 'sla' && renderSlaTab()}
            {activeTab === 'smart-cart' && renderSmartCartTab()}
            {activeTab === 'dealers' && renderDealersTab()}
            {activeTab === 'moq' && renderMoqTab()}
          </div>
        </main>
      </div>

      {/* ─── MODAL: ADD PROMOTIONAL BANNER ─────────────────────────── */}
      {showBannerModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-400 text-lg">campaign</span>
                Broadcast New Banner
              </h3>
              <button onClick={() => setShowBannerModal(false)} className="text-slate-500 hover:text-slate-200">
                <span className="material-symbols-outlined text-base">close</span>
              </button>
            </div>

            <form onSubmit={handleCreateBanner} className="space-y-3 text-xs">
              <div>
                <label className="text-slate-300 font-semibold">Banner Headline</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 20% OFF on First Industrial Order"
                  value={bannerForm.title}
                  onChange={(e) => setBannerForm({ ...bannerForm, title: e.target.value })}
                  className="w-full mt-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-slate-300 font-semibold">Subtitle / Terms</label>
                <input
                  type="text"
                  placeholder="e.g. Valid on minimum order ₹499"
                  value={bannerForm.subtitle}
                  onChange={(e) => setBannerForm({ ...bannerForm, subtitle: e.target.value })}
                  className="w-full mt-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-300 font-semibold">Target Audience</label>
                  <select
                    value={bannerForm.audience}
                    onChange={(e) => setBannerForm({ ...bannerForm, audience: e.target.value })}
                    className="w-full mt-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="retail">Retail B2C Mode</option>
                    <option value="wholesale">Wholesale B2B Mode</option>
                  </select>
                </div>
                <div>
                  <label className="text-slate-300 font-semibold">Badge Label</label>
                  <input
                    type="text"
                    placeholder="e.g. MEGA DEAL"
                    value={bannerForm.badge}
                    onChange={(e) => setBannerForm({ ...bannerForm, badge: e.target.value })}
                    className="w-full mt-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-300 font-semibold">Promo / Coupon Code (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. FLASH20"
                  value={bannerForm.code}
                  onChange={(e) => setBannerForm({ ...bannerForm, code: e.target.value })}
                  className="w-full mt-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowBannerModal(false)}
                  className="px-3.5 py-2 rounded-xl text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-md shadow-blue-600/30"
                >
                  Broadcast Banner
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ─── MODAL: ADD DISCOUNT TIER ──────────────────────────────── */}
      {showTierForm && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-sm w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-amber-400 text-lg">percent</span>
                Add Volume Discount Tier
              </h3>
              <button onClick={() => setShowTierForm(false)} className="text-slate-500 hover:text-slate-200">
                <span className="material-symbols-outlined text-base">close</span>
              </button>
            </div>

            <form onSubmit={handleCreateTier} className="space-y-3 text-xs">
              <div>
                <label className="text-slate-300 font-semibold">Minimum Units Threshold</label>
                <input
                  type="number"
                  required
                  min="1"
                  value={tierForm.minUnits}
                  onChange={(e) => setTierForm({ ...tierForm, minUnits: Number(e.target.value) })}
                  className="w-full mt-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="text-slate-300 font-semibold">Discount Percentage (%)</label>
                <input
                  type="number"
                  required
                  min="1"
                  max="90"
                  value={tierForm.discountPct}
                  onChange={(e) => setTierForm({ ...tierForm, discountPct: Number(e.target.value) })}
                  className="w-full mt-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="text-slate-300 font-semibold">Tier Label</label>
                <input
                  type="text"
                  placeholder="e.g. Master Distributor (15% Off)"
                  value={tierForm.label}
                  onChange={(e) => setTierForm({ ...tierForm, label: e.target.value })}
                  className="w-full mt-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowTierForm(false)}
                  className="px-3.5 py-2 rounded-xl text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold transition-all shadow-md shadow-amber-600/30"
                >
                  Add Tier
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
