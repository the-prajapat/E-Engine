import React from 'react';

/**
 * StitchB2BBusinessProfileDashboard
 * Stitch AI Screen: "B2B Business Profile Dashboard"
 * STRICT RULE: Pure presentation component. Accepts callbacks and dynamic props.
 */
export default function StitchB2BBusinessProfileDashboard({ onNavigate, onAction, data, ...props }) {
  return (
    <div className="stitch-screen-container w-full min-h-screen text-on-surface">
<header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl pt-safe shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 px-margin-mobile flex items-center justify-between"><div className="flex items-center gap-space-sm"><button aria-label="Go back" className="min-w-[44px] min-h-[44px] flex items-center justify-center -ml-2 text-on-surface hover:text-primary transition-colors"  type="button"><span className="material-symbols-outlined text-[24px]">arrow_back</span></button><h1 className="font-headline-md text-headline-md text-on-surface truncate">Account</h1></div><div className="flex items-center gap-space-sm"><button aria-label="Notifications" className="min-w-[44px] min-h-[44px] flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" type="button"><span className="material-symbols-outlined text-[22px]">notifications</span></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main className="flex-1 flex flex-col relative w-full pt-16 pb-24 bg-surface min-h-screen"><div className="flex flex-col w-full">
{/*  Toast Notification Container  */}
<div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-inverse-surface text-inverse-on-surface px-space-md py-space-xs rounded-full shadow-lg transition-all duration-300 opacity-0 pointer-events-none flex items-center gap-space-xs" id="copy-toast">
<span className="material-symbols-outlined text-primary-fixed text-[18px]">check_circle</span>
<span className="font-label-sm text-label-sm">GSTIN copied to clipboard</span>
</div>
{/*  Hero Profile Banner Card  */}
<div className="px-margin-mobile pt-space-sm pb-space-md">
<div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary via-primary-container to-secondary text-on-primary p-space-md shadow-md">
{/*  Subtle Micro Grid Pattern Overlay  */}
<div className="absolute inset-0 opacity-10 pointer-events-none" style={{"backgroundImage":"radial-gradient(circle at 2px 2px, white 1px, transparent 0)","backgroundSize":"16px 16px"}}></div>
<div className="relative z-10 flex flex-col gap-space-sm">
{/*  Top Row: Avatar & Badges  */}
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-14 h-14 rounded-lg bg-surface-container-lowest text-primary flex items-center justify-center font-headline-lg text-headline-lg shadow-sm shrink-0">
              AR
            </div>
<div className="min-w-0">
<h2 className="font-headline-md text-headline-md text-on-primary truncate">
                Apex Retail Solutions
              </h2>
<p className="font-body-sm text-body-sm text-on-primary-container truncate">Pvt. Ltd. • ID: #NEX-88419</p>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-surface-container-lowest/20 backdrop-blur-md text-on-primary font-label-sm text-label-sm shrink-0 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
            Active
          </span>
</div>
{/*  Badges Row  */}
<div className="flex flex-wrap items-center gap-space-xs pt-1">
<div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-100 font-label-sm text-label-sm backdrop-blur-sm">
<span className="material-symbols-outlined text-[16px] text-emerald-300" style={{"fontVariationSettings":"'FILL' 1"}}>verified</span>
            Verified Business
          </div>
<div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-lowest/15 text-on-primary font-label-sm text-label-sm backdrop-blur-sm">
<span className="material-symbols-outlined text-[15px] text-primary-fixed">workspace_premium</span>
            Tier-1 Enterprise Buyer
          </div>
</div>
{/*  Tax & Copy Bar  */}
<div className="flex items-center justify-between bg-surface-container-lowest/10 backdrop-blur-sm rounded-lg px-space-sm py-1.5 mt-1">
<div className="flex items-center gap-1.5 min-w-0">
<span className="font-label-sm text-label-sm text-on-primary-container">GSTIN:</span>
<span className="font-label-md text-label-md text-on-primary tracking-wide truncate" id="gstin-text">27AABCS1429B1Z8</span>
</div>
<button aria-label="Copy GSTIN" className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container-lowest/20 hover:bg-surface-container-lowest/30 transition-colors text-on-primary font-label-sm text-label-sm" id="copy-gstin-btn" type="button">
<span className="material-symbols-outlined text-[16px]">content_copy</span>
<span>Copy</span>
</button>
</div>
{/*  Quick Meta Row  */}
<div className="flex items-center justify-between text-on-primary-container font-body-sm text-body-sm pt-0.5">
<span className="flex items-center gap-1 truncate">
<span className="material-symbols-outlined text-[16px]">hub</span>
            Hub: Mumbai West
          </span>
<span className="shrink-0 flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">calendar_today</span>
            Member since Oct 2021
          </span>
</div>
</div>
</div>
</div>
{/*  Key Metrics Row (3-Grid Cards)  */}
<div className="px-margin-mobile mb-space-md">
<div className="grid grid-cols-3 gap-2">
{/*  Stat 1: Active Orders  */}
<div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm text-on-surface-variant truncate">Orders</span>
<div className="w-6 h-6 rounded bg-surface-container-low text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[15px]">local_shipping</span>
</div>
</div>
<div>
<span className="font-headline-md text-headline-md text-on-surface">14</span>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-0.5 truncate mt-0.5">
<span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
            3 in transit
          </p>
</div>
</div>
{/*  Stat 2: Total Spends  */}
<div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm text-on-surface-variant truncate">Spends</span>
<div className="w-6 h-6 rounded bg-surface-container-low text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[15px]">account_balance_wallet</span>
</div>
</div>
<div>
<span className="font-headline-md text-headline-md text-on-surface truncate">₹42.8L</span>
<p className="font-body-sm text-body-sm text-emerald-600 flex items-center gap-0.5 truncate mt-0.5">
<span className="material-symbols-outlined text-[14px]">trending_up</span>
            +12% mo
          </p>
</div>
</div>
{/*  Stat 3: Saved Dealers  */}
<div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm text-on-surface-variant truncate">Dealers</span>
<div className="w-6 h-6 rounded bg-surface-container-low text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[15px]">storefront</span>
</div>
</div>
<div>
<span className="font-headline-md text-headline-md text-on-surface">38</span>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-0.5 truncate mt-0.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
            5 online
          </p>
</div>
</div>
</div>
</div>
{/*  Credit Line & Escrow Snapshot Card  */}
<div className="px-margin-mobile mb-space-md">
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<div className="w-8 h-8 rounded-lg bg-surface-container text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
</div>
<div>
<span className="font-label-md text-label-md text-on-surface">Nexus Credit Line</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Revolving B2B Financed Facility</p>
</div>
</div>
<button className="text-primary font-label-sm text-label-sm hover:underline flex items-center gap-0.5" type="button">
          View Limit
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
</button>
</div>
{/*  Progress Meter  */}
<div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-2">
<div className="flex items-baseline justify-between">
<div className="flex items-baseline gap-1">
<span className="font-headline-md text-headline-md text-primary">₹6,50,000</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">available</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Limit: ₹15,00,000</span>
</div>
{/*  Meter bar (57% utilized, 43% remaining)  */}
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden flex">
<div className="bg-primary h-full rounded-full transition-all duration-500" style={{"width":"57%"}}></div>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span>Utilized: ₹8,50,000 (57%)</span>
<span className="text-emerald-700 font-label-sm text-label-sm">Next cycle: 28 Days</span>
</div>
</div>
</div>
</div>
{/*  Verified Entities Showcase Slider  */}
<div className="px-margin-mobile mb-space-md">
<div className="flex items-center justify-between mb-space-xs">
<h3 className="font-label-md text-label-md text-on-surface">Associated Warehouses</h3>
<span className="font-label-sm text-label-sm text-primary">3 Active</span>
</div>
<div className="flex gap-space-sm overflow-x-auto pb-1">
<div className="min-w-[200px] bg-surface-container-lowest p-space-sm rounded-lg shadow-sm flex items-center gap-space-sm shrink-0">
<img className="w-10 h-10 rounded-lg object-cover bg-surface-container shrink-0" data-alt="A clean modern logistics warehouse exterior with blue commercial signage and loading docks under morning sunlight, corporate architectural photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZeWxLm1J99nK-5PYsTTtuOYxRta2FK6jES3c5PVeBcyuHhlDSeoFsYRClXMdj7Wov1gYQrzdS5dAXiQDL8U8xqaImhvC3PJN5-pXY5LkFd1aqWneuEasxX8tP4PD-ienFOqtxgg3eYCVZiDQte0xwaBuCqaC62uzc2gPtYZEbvlaIBVFdzgKFse1BkEdDdQOCzguuK7hOe_lsD7adxCHWS3K-RhF20hxzAELRKjn11cP4d69Ufl5p"/>
<div className="min-w-0">
<p className="font-label-sm text-label-sm text-on-surface truncate">Bhiwandi Central</p>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Zone 4 • Primary Hub</p>
</div>
</div>
<div className="min-w-[200px] bg-surface-container-lowest p-space-sm rounded-lg shadow-sm flex items-center gap-space-sm shrink-0">
<img className="w-10 h-10 rounded-lg object-cover bg-surface-container shrink-0" data-alt="Modern indoor distribution center with automated sorting conveyors and enterprise pallet racks, commercial enterprise lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4D8EvTAKeU7f4gdcwIgrty5wM302wEOExqrUQ7eEDJNPnXh6B_S-kpdNKuG_im01v6ZjfjiFOFx9Vx7n9BPcdO2-5qgZmvNqXgvo8ded2qeOQRotXwWKAgQ6b0Lgu6iIL4UtB_Nw-8uRunjre2x3Pd4XFtRmQiPW6v_MpbJemqcntW7e4eecX4qhS_Pbuw336yZqUCx3k-VIkstxC1R48902cwsyapqBV1F3tDt0bfQN3Bzz-Byba"/>
<div className="min-w-0">
<p className="font-label-sm text-label-sm text-on-surface truncate">Navi Mumbai Depot</p>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Cold chain enabled</p>
</div>
</div>
</div>
</div>
{/*  Account & Compliance Navigation Section  */}
<div className="px-margin-mobile flex flex-col gap-space-xs mb-space-md">
<h3 className="font-label-md text-label-md text-on-surface px-1">Account &amp; Compliance</h3>
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
{/*  Item 1: Manage Tax & GST  */}
<a className="flex items-center justify-between p-space-md hover:bg-surface-container-low transition-colors" href="#">
<div className="flex items-center gap-space-md min-w-0">
<div className="w-10 h-10 rounded-lg bg-surface-container text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]">badge</span>
</div>
<div className="min-w-0">
<p className="font-label-md text-label-md text-on-surface truncate">Manage Tax &amp; GST</p>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Certificates, HSN exemptions &amp; billing entities</p>
</div>
</div>
<span className="material-symbols-outlined text-outline-variant shrink-0 text-[20px]">chevron_right</span>
</a>
{/*  Item 2: Wallet & Escrow  */}
<a className="flex items-center justify-between p-space-md hover:bg-surface-container-low transition-colors bg-surface-container-lowest/50" href="#">
<div className="flex items-center gap-space-md min-w-0">
<div className="w-10 h-10 rounded-lg bg-surface-container text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]">payments</span>
</div>
<div className="min-w-0">
<div className="flex items-center gap-1.5">
<p className="font-label-md text-label-md text-on-surface truncate">Escrow Wallet</p>
<span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-label-sm text-label-sm">Active</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Balance ₹2,45,000 • Auto-reload ON</p>
</div>
</div>
<span className="material-symbols-outlined text-outline-variant shrink-0 text-[20px]">chevron_right</span>
</a>
{/*  Item 3: Business Settings  */}
<a className="flex items-center justify-between p-space-md hover:bg-surface-container-low transition-colors" href="#">
<div className="flex items-center gap-space-md min-w-0">
<div className="w-10 h-10 rounded-lg bg-surface-container text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]">tune</span>
</div>
<div className="min-w-0">
<p className="font-label-md text-label-md text-on-surface truncate">Business Settings</p>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Permissions, multi-user access &amp; branches</p>
</div>
</div>
<span className="material-symbols-outlined text-outline-variant shrink-0 text-[20px]">chevron_right</span>
</a>
{/*  Item 4: Dark Mode Switch  */}
<div className="flex items-center justify-between p-space-md bg-surface-container-lowest/50">
<div className="flex items-center gap-space-md min-w-0">
<div className="w-10 h-10 rounded-lg bg-surface-container text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]" id="dark-mode-icon">dark_mode</span>
</div>
<div className="min-w-0">
<p className="font-label-md text-label-md text-on-surface truncate">Dark Mode</p>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Switch app appearance</p>
</div>
</div>
{/*  Interactive Pill Switch  */}
<button aria-checked="false" aria-label="Toggle dark mode" className="w-12 h-6 rounded-full bg-surface-container relative transition-colors duration-200 focus:outline-none p-0.5" id="dark-toggle-btn" role="switch" type="button">
<span className="block w-5 h-5 rounded-full bg-surface-container-lowest shadow-sm transform transition-transform duration-200" id="toggle-thumb"></span>
</button>
</div>
</div>
</div>
{/*  Additional Enterprise Actions  */}
<div className="px-margin-mobile flex flex-col gap-space-xs mb-space-lg">
<h3 className="font-label-md text-label-md text-on-surface px-1">Enterprise Operations</h3>
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
<a className="flex items-center justify-between p-space-md hover:bg-surface-container-low transition-colors" href="#">
<div className="flex items-center gap-space-md">
<span className="material-symbols-outlined text-primary text-[20px]">download</span>
<span className="font-label-md text-label-md text-on-surface">Download Annual Invoices &amp; Ledger</span>
</div>
<span className="material-symbols-outlined text-outline-variant text-[20px]">chevron_right</span>
</a>
<a className="flex items-center justify-between p-space-md hover:bg-surface-container-low transition-colors" href="#">
<div className="flex items-center gap-space-md">
<span className="material-symbols-outlined text-primary text-[20px]">support_agent</span>
<span className="font-label-md text-label-md text-on-surface">Dedicated Account Manager</span>
</div>
<span className="font-label-sm text-label-sm text-primary">Siddharth K.</span>
</a>
<a className="flex items-center justify-between p-space-md hover:bg-surface-container-low transition-colors" href="#">
<div className="flex items-center gap-space-md">
<span className="material-symbols-outlined text-primary text-[20px]">policy</span>
<span className="font-label-md text-label-md text-on-surface">Help &amp; Compliance Support</span>
</div>
<span className="material-symbols-outlined text-outline-variant text-[20px]">chevron_right</span>
</a>
</div>
</div>
{/*  Sign Out & Build Footer  */}
<div className="px-margin-mobile pb-space-lg flex flex-col items-center gap-space-sm text-center">
<button className="w-full py-space-sm bg-surface-container-low hover:bg-surface-container text-error rounded-lg font-label-md text-label-md transition-colors flex items-center justify-center gap-1.5" type="button">
<span className="material-symbols-outlined text-[18px]">logout</span>
      Sign Out of Apex Retail Account
    </button>
<div className="flex flex-col items-center gap-0.5 pt-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="font-label-sm text-label-sm">Nexus Wholesale Enterprise Suite</span>
<span>Build v2.4.1 (Enterprise Production) • ISO 27001 Certified</span>
</div>
</div>
</div>
</main><nav aria-label="Primary Navigation" className="fixed bottom-0 w-full z-50 pb-safe bg-surface/80 backdrop-blur-xl shadow-[0_-1px_8px_rgba(0,0,0,0.04)]" data-active-classes="text-primary font-semibold"><div className="h-16 px-margin-mobile flex items-center justify-around"><a className="flex flex-col items-center justify-center min-w-[44px] min-h-[44px] py-1 text-on-surface-variant hover:text-on-surface transition-colors" data-path="dealers" href="#"><span className="material-symbols-outlined text-[24px]">store</span><span className="font-label-sm text-label-sm mt-0.5">Dealers</span></a><a className="flex flex-col items-center justify-center min-w-[44px] min-h-[44px] py-1 text-on-surface-variant hover:text-on-surface transition-colors" data-path="orders" href="#"><span className="material-symbols-outlined text-[24px]">receipt_long</span><span className="font-label-sm text-label-sm mt-0.5">Orders</span></a><a className="flex flex-col items-center justify-center min-w-[44px] min-h-[44px] py-1 text-on-surface-variant hover:text-on-surface transition-colors" data-path="rfq-quotes" href="#"><span className="material-symbols-outlined text-[24px]">request_quote</span><span className="font-label-sm text-label-sm mt-0.5">Quotes</span></a><a aria-current="page" className="flex flex-col items-center justify-center min-w-[44px] min-h-[44px] py-1 transition-colors text-primary font-semibold" data-path="account" href="#"><span className="material-symbols-outlined text-[24px]">business</span><span className="font-label-sm text-label-sm mt-0.5">Account</span></a></div></nav>
    </div>
  );
}
