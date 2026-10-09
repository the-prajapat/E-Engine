import React from 'react';

/**
 * StitchAccountTypeOnboarding
 * Stitch AI Screen: "Account Type Onboarding"
 * STRICT RULE: Pure presentation component. Accepts callbacks and dynamic props.
 */
export default function StitchAccountTypeOnboarding({ onNavigate, onAction, data, ...props }) {
  return (
    <div className="stitch-screen-container w-full min-h-screen text-on-surface">
<main className="flex-1 flex flex-col relative w-full bg-surface"><div className="flex flex-col w-full px-margin-mobile pb-space-xl">
{/*  Brand Logo & Progress Pill Header  */}
<header className="flex items-center justify-between py-space-sm mb-space-md">
<div className="flex items-center">
<img alt="Nexus Commerce Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1XKEB8DgN-yXJedYabu7lN2_Y-Ic1nkO03XZHfBDy61uc_dhlfrVITdDYB7MnDBdSXoufIjetBvfHIz2Ayslu7QmtI_6tFzIXgGOfXBs0gVqo_wI3BeL4uIThZkKt4C6nNa8TK6BbROEPCKj5IWmYWRw6lPgLWkLnt1PAox0JqMcR3lkCnGHArJv9iZJ0_gVoMmqWT-u3c9bPgvYlNytuzdQ8x2vosYPTT9A5RRoGcS9hMX-cobsFek9zQ"/>
</div>
<div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-primary">
<span className="material-symbols-outlined text-sm" style={{"fontVariationSettings":"'FILL' 1"}}>verified</span>
<span className="font-label-sm text-label-sm">Step 1 of 3</span>
</div>
</header>
{/*  Step Track  */}
<div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden mb-space-lg flex gap-1">
<div className="h-full bg-primary-container rounded-full flex-1 transition-all duration-300"></div>
<div className="h-full bg-surface-variant rounded-full flex-1"></div>
<div className="h-full bg-surface-variant rounded-full flex-1"></div>
</div>
{/*  Editorial Headline Section  */}
<div className="mb-space-lg">
<div className="inline-flex items-center gap-1.5 mb-1.5 px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant">
<span className="font-label-sm text-label-sm">Onboarding</span>
</div>
<h1 className="font-headline-xl-mobile text-headline-xl-mobile text-on-surface mb-2 tracking-tight">
      How do you plan to shop?
    </h1>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
      Choose an account type to customize your experience and unlock relevant tiered pricing.
    </p>
</div>
{/*  Interactive Selection Area  */}
<form className="flex flex-col gap-space-md mb-space-xl" id="accountSelectionForm" onSubmit={(e) => e.preventDefault()}>
{/*  Option 1: Personal (Pre-selected)  */}
<label className="group relative flex flex-col p-4 rounded-xl cursor-pointer transition-all duration-200 select-none bg-surface-container shadow-sm active:scale-[0.99]" id="card-personal">
<input defaultChecked className="sr-only" name="account_type" type="radio" value="personal"/>
<div className="flex items-start justify-between gap-3 mb-3">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary-container text-on-primary transition-colors duration-200" id="icon-box-personal">
<span className="material-symbols-outlined text-2xl" style={{"fontVariationSettings":"'FILL' 1"}}>shopping_bag</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-headline-md text-headline-md text-on-surface">Personal Use</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm">Retail</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">For individual shoppers</span>
</div>
</div>
{/*  Custom Radio Indicator  */}
<div className="w-6 h-6 rounded-full flex items-center justify-center mt-1 bg-primary-container text-on-primary transition-all duration-200 shadow-sm" id="indicator-personal">
<span className="material-symbols-outlined text-base">check</span>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-3 leading-snug">
        Discover curated items, exclusive personal member discounts, and seamless 1-click checkout.
      </p>
{/*  Benefit Micro-Pills  */}
<div className="flex flex-wrap gap-1.5 pt-1">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-container-low text-on-surface font-label-sm text-label-sm">
<span className="material-symbols-outlined text-sm text-primary" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
          Individual pricing
        </span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-container-low text-on-surface font-label-sm text-label-sm">
<span className="material-symbols-outlined text-sm text-primary" style={{"fontVariationSettings":"'FILL' 1"}}>local_shipping</span>
          Free shipping perks
        </span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-container-low text-on-surface font-label-sm text-label-sm">
<span className="material-symbols-outlined text-sm text-primary" style={{"fontVariationSettings":"'FILL' 1"}}>bolt</span>
          Fast delivery
        </span>
</div>
</label>
{/*  Option 2: Business / Wholesale  */}
<label className="group relative flex flex-col p-4 rounded-xl cursor-pointer transition-all duration-200 select-none bg-surface-container-low shadow-none active:scale-[0.99]" id="card-business">
<input className="sr-only" name="account_type" type="radio" value="business"/>
<div className="flex items-start justify-between gap-3 mb-3">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-xl flex items-center justify-center bg-surface-variant text-on-surface-variant transition-colors duration-200" id="icon-box-business">
<span className="material-symbols-outlined text-2xl">handshake</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-headline-md text-headline-md text-on-surface">For Business</span>
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm">Wholesale</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Commercial &amp; bulk buyers</span>
</div>
</div>
{/*  Custom Radio Indicator  */}
<div className="w-6 h-6 rounded-full flex items-center justify-center mt-1 bg-surface-variant text-on-surface-variant transition-all duration-200" id="indicator-business">
<span className="material-symbols-outlined text-base opacity-0">check</span>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-3 leading-snug">
        Unlock volume tier pricing, bulk purchasing, tax exemption status, and dedicated corporate account support.
      </p>
{/*  Benefit Micro-Pills  */}
<div className="flex flex-wrap gap-1.5 pt-1">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-container text-on-surface font-label-sm text-label-sm">
<span className="material-symbols-outlined text-sm text-secondary" style={{"fontVariationSettings":"'FILL' 1"}}>price_check</span>
          Tiered volume discounts
        </span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-container text-on-surface font-label-sm text-label-sm">
<span className="material-symbols-outlined text-sm text-secondary" style={{"fontVariationSettings":"'FILL' 1"}}>receipt_long</span>
          Net-30 invoicing
        </span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-container text-on-surface font-label-sm text-label-sm">
<span className="material-symbols-outlined text-sm text-secondary" style={{"fontVariationSettings":"'FILL' 1"}}>support_agent</span>
          Dedicated manager
        </span>
</div>
</label>
</form>
{/*  Interactive Trust Metrics / Reassurance Snapshot  */}
<div className="p-4 rounded-xl bg-surface-container-low mb-space-lg flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-surface-container-highest flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-lg" style={{"fontVariationSettings":"'FILL' 1"}}>shield</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface">Safe &amp; Verified Data</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Enterprise-grade 256-bit encryption</p>
</div>
</div>
<span className="material-symbols-outlined text-outline">lock</span>
</div>
{/*  Persistent Sticky Bottom Action Wrapper  */}
<div className="sticky bottom-0 bg-surface/95 backdrop-blur-md pt-3 pb-space-sm flex flex-col gap-2">
<button className="w-full h-12 bg-primary-container text-on-primary rounded-lg font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-md hover:bg-secondary-container active:scale-[0.98] transition-all" id="submitBtn" type="button">
<span>Continue</span>
<span className="material-symbols-outlined text-xl">arrow_forward</span>
</button>
<div className="flex items-center justify-center gap-1.5 text-center px-4">
<span className="material-symbols-outlined text-sm text-outline">info</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
        You can change or add account types anytime in Settings.
      </p>
</div>
</div>
</div>
</main>
    </div>
  );
}
