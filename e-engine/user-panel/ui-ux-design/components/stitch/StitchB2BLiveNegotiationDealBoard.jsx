import React from 'react';

/**
 * StitchB2BLiveNegotiationDealBoard
 * Stitch AI Screen: "B2B Live Negotiation & Deal Board"
 * STRICT RULE: Pure presentation component. Accepts callbacks and dynamic props.
 */
export default function StitchB2BLiveNegotiationDealBoard({ onNavigate, onAction, data, ...props }) {
  return (
    <div className="stitch-screen-container w-full min-h-screen text-on-surface">
<header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl pt-safe shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 px-space-xs flex items-center justify-between gap-space-xs"><div className="flex items-center min-w-0 flex-1"><button aria-label="Go back" className="w-11 h-11 flex items-center justify-center text-on-surface hover:text-primary transition-colors shrink-0 rounded-full" ><span className="material-symbols-outlined text-[24px]">arrow_back</span></button><div className="flex items-center gap-space-sm min-w-0 pr-space-xs"><div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-primary text-[20px]">apartment</span></div><div className="flex flex-col min-w-0 justify-center"><div className="flex items-center gap-1 min-w-0"><span className="font-label-md text-label-md text-on-surface truncate font-semibold leading-tight">Active Negotiation Deal Room</span><span className="material-symbols-outlined text-primary text-[15px] shrink-0 leading-none" title="Verified Enterprise Supplier">verified</span></div><div className="flex items-center gap-1.5 min-w-0"><span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span><span className="font-label-sm text-label-sm text-on-surface-variant truncate text-[11px] leading-tight">Verified Wholesale Partner</span></div></div></div></div><div className="flex items-center shrink-0"><button aria-label="Call supplier representative" className="w-11 h-11 flex items-center justify-center text-on-surface hover:text-primary transition-colors rounded-full"><span className="material-symbols-outlined text-[22px]">call</span></button><button aria-label="Negotiation actions menu" className="w-11 h-11 flex items-center justify-center text-on-surface hover:text-primary transition-colors rounded-full"><span className="material-symbols-outlined text-[22px]">more_vert</span></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 ml-1 mr-2"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main className="flex flex-col relative w-full pt-16 bg-surface flex-1"><div className="flex flex-col w-full pb-safe">
{/*  Sticky Negotiation Context Bar  */}
<section className="sticky top-0 z-40 bg-surface-container-lowest/95 backdrop-blur-md shadow-sm px-space-md py-space-sm flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-error animate-ping"></span>
          Round #3 Active
        </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Room ID: #NEG-8821</span>
</div>
<div className="flex items-center gap-1 bg-surface-container px-2 py-0.5 rounded-full text-primary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px]">lock</span>
<span>Escrow Secured</span>
</div>
</div>
{/*  Active Product Strip  */}
<div className="flex items-center gap-space-sm bg-surface-container-low p-2 rounded-xl">
<div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-surface-container-highest">
<img className="w-full h-full object-cover" data-alt="Commercial 15L metal square tins of refined golden soybean oil neatly stacked on an industrial warehouse wooden pallet in sharp studio warehouse lighting with high clarity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7nqADya4kXcRnGKZ5_UGXkNX5EaO4v6XM-46I2vYGNW-DzKS91rQyCCfLFAe2BruyMhiX_biTZQjgxjUPMcnaUqEApK1E94ksoClaCnhoLJnz3VUnj7ppo4fYusELseoZeuFgvWFQkkRPFbvadzg9hYQTZ5y7h-kSIR4kevGsf3Jyuu6tSzWccc4JGChLuMRDgrruahOp4TSdIpgf4YQSeYVNE9wQEAHw1llhxhAHUitL4Dz0kPH9"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-1">
<h2 className="font-label-md text-label-md text-on-surface truncate">Refined Soybean Oil (15L Tins)</h2>
<span className="font-label-sm text-label-sm text-on-surface-variant font-semibold shrink-0">₹112 Base</span>
</div>
<div className="flex items-center gap-2 mt-0.5 text-on-surface-variant font-body-sm text-body-sm">
<span>Vol: <strong className="text-on-surface">250 tins</strong></span>
<span>•</span>
<span className="truncate">Apex Agro Milling (Tier 1)</span>
</div>
</div>
</div>
</section>
{/*  Main Scrollable Chat & Live Deal Space  */}
<div className="flex flex-col px-space-md pt-space-sm pb-space-lg gap-space-md">
{/*  Live Deal Board Widget  */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></div>
<span className="font-label-md text-label-md text-on-surface uppercase tracking-wide">Live Deal Board</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[15px]">sync</span>
<span>Real-time sync</span>
</div>
</div>
{/*  Split Offer Comparator Grid  */}
<div className="grid grid-cols-2 gap-space-sm">
{/*  Buyer Offer Card  */}
<div className="bg-surface-container-low rounded-lg p-3 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Your Offer</span>
<span className="w-2 h-2 rounded-full bg-outline-variant"></span>
</div>
<div className="mt-1">
<span className="font-headline-lg text-headline-lg text-on-surface font-bold">₹100</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">/unit</span>
</div>
<p className="font-label-sm text-label-sm text-on-surface font-medium mt-0.5">Total: ₹25,000</p>
</div>
<div className="mt-2.5 pt-2 border-t border-surface-container">
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[13px] text-primary">schedule</span>
              Sent 2m ago
            </span>
</div>
</div>
{/*  Supplier Counter Card  */}
<div className="bg-secondary-fixed/30 rounded-lg p-3 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-secondary-fixed-variant font-medium">Dealer Counter</span>
<span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
</div>
<div className="mt-1">
<span className="font-headline-lg text-headline-lg text-primary font-bold">₹105</span>
<span className="font-body-sm text-body-sm text-on-secondary-fixed-variant">/unit</span>
</div>
<p className="font-label-sm text-label-sm text-primary font-medium mt-0.5">Total: ₹26,250</p>
</div>
<div className="mt-2.5 pt-2 border-t border-secondary-fixed/50">
<span className="font-label-sm text-label-sm text-primary font-semibold flex items-center gap-1" id="timer-badge">
<span className="material-symbols-outlined text-[14px]">timer</span>
<span id="countdown">04:47</span> left
            </span>
</div>
</div>
</div>
{/*  Spread Indicator Banner  */}
<div className="bg-surface-container px-3 py-2 rounded-lg flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary text-[18px]">balance</span>
<span className="font-body-sm text-body-sm text-on-surface">Spread: <strong>₹5/unit</strong> (Margin delta 4.8%)</span>
</div>
<span className="font-label-sm text-label-sm text-primary font-semibold">₹1,250 Gap</span>
</div>
{/*  Tactical Quick Action Pills  */}
<div className="flex items-center gap-2 overflow-x-auto pt-1 pb-0.5">
<button className="shrink-0 px-3 py-1.5 bg-primary text-on-primary rounded-full font-label-sm text-label-sm flex items-center gap-1 shadow-sm active:scale-95 transition-transform" id="btn-quick-accept">
<span className="material-symbols-outlined text-[16px]">check_circle</span>
          Accept ₹105
        </button>
<button className="shrink-0 px-3 py-1.5 bg-surface-container-high text-on-surface rounded-full font-label-sm text-label-sm flex items-center gap-1 hover:bg-surface-variant active:scale-95 transition-transform" id="btn-split-diff">
<span className="material-symbols-outlined text-[16px]">pie_chart</span>
          Split Diff (₹102.5)
        </button>
<button className="shrink-0 px-3 py-1.5 bg-surface-container-high text-on-surface rounded-full font-label-sm text-label-sm flex items-center gap-1 hover:bg-surface-variant active:scale-95 transition-transform" id="btn-free-freight">
<span className="material-symbols-outlined text-[16px]">local_shipping</span>
          Free Freight
        </button>
</div>
</div>
{/*  Negotiation Chat Stream  */}
<div className="flex flex-col gap-space-sm pt-1">
<div className="flex items-center justify-center my-1">
<span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
          Today, 11:28 AM • Dispatch Yard: Nhava Sheva
        </span>
</div>
{/*  Outgoing Buyer Offer Message  */}
<div className="flex flex-col items-end max-w-[88%] self-end">
<div className="bg-primary text-on-primary rounded-2xl rounded-tr-xs p-3 shadow-sm">
<div className="flex items-center justify-between gap-4 pb-1 mb-1 border-b border-primary-fixed-dim/30">
<span className="font-label-sm text-label-sm text-primary-fixed">Formal Offer #1</span>
<span className="font-label-md text-label-md font-bold">₹100/unit</span>
</div>
<p className="font-body-md text-body-md leading-relaxed">
            Placing PO for 250 tins at ₹100/unit. Net-30 Escrow terms through verified channel. Ready for quick payment release.
          </p>
</div>
<div className="flex items-center gap-1 mt-1 pr-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">11:32 AM</span>
<span className="material-symbols-outlined text-[14px] text-primary" style={{"fontVariationSettings":"'FILL' 1"}}>done_all</span>
</div>
</div>
{/*  Dealer Message with Profile Badge  */}
<div className="flex items-start gap-2 max-w-[90%] self-start">
<div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 mt-1">
<span className="material-symbols-outlined text-primary text-[18px]">storefront</span>
</div>
<div className="flex flex-col items-start min-w-0">
<span className="font-label-sm text-label-sm text-on-surface-variant pl-1">Vikram Sharma (Apex Milling)</span>
<div className="bg-surface-container-lowest text-on-surface rounded-2xl rounded-tl-xs p-3 shadow-sm mt-0.5">
<p className="font-body-md text-body-md leading-relaxed">
              We can do <strong className="text-primary font-semibold">₹105/unit</strong> if you take dispatch by Thursday morning. Raw import tariff revisions pushed edible oils up 3.2% this morning.
            </p>
{/*  Formal Counter Sheet Card  */}
<div className="mt-2.5 bg-surface-container-low rounded-lg p-2.5 flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-primary font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[15px]">description</span>
                  Apex Binding Sheet #APX-41
                </span>
<span className="font-label-sm text-label-sm px-1.5 py-0.2 rounded bg-surface-container-highest text-primary">Pre-Approved</span>
</div>
<div className="grid grid-cols-2 gap-1 text-[11px] font-body-sm text-on-surface-variant">
<div>Payment: <span className="text-on-surface font-medium">Net-30 Escrow</span></div>
<div>Transit: <span className="text-on-surface font-medium">Carrier Insured</span></div>
<div>Delivery: <span className="text-on-surface font-medium">Ex-Works Kandla</span></div>
<div>Batch Validity: <span className="text-on-surface font-medium">Nov 2025</span></div>
</div>
</div>
</div>
<div className="flex items-center gap-1 mt-1 pl-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">11:34 AM</span>
</div>
</div>
</div>
{/*  Supplier Real-time Typing Bubble  */}
<div className="flex items-center gap-2 self-start pl-10" id="typing-bubble">
<div className="bg-surface-container-lowest px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce"></span>
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:0.2s]"></span>
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:0.4s]"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant ml-1">Vikram is typing...</span>
</div>
</div>
</div>
</div>
{/*  Interactive Counter-Offer Dock & Number Pad  */}
<div className="mt-auto bg-surface-container-lowest rounded-t-2xl shadow-xl flex flex-col p-space-md gap-space-sm">
{/*  Active Input State Display  */}
<div className="flex items-center justify-between bg-surface-container-low px-space-md py-2.5 rounded-xl">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">New Counter Offer</span>
<div className="flex items-baseline gap-1">
<span className="font-headline-xl-mobile text-headline-xl-mobile font-bold text-primary">₹</span>
<span className="font-headline-xl-mobile text-headline-xl-mobile font-bold text-on-surface tracking-tight" id="display-amount">102</span>
<span className="font-body-md text-body-md text-on-surface-variant ml-1">/ tin</span>
</div>
</div>
<div className="flex flex-col items-end">
<span className="font-label-sm text-label-sm text-on-surface-variant">Order Total</span>
<span className="font-label-lg text-label-lg font-bold text-on-surface" id="display-total">₹25,500</span>
<span className="font-body-sm text-body-sm text-secondary">250 units</span>
</div>
</div>
{/*  Quick Presets  */}
<div className="grid grid-cols-4 gap-2">
<button className="py-1.5 bg-surface-container text-on-surface rounded-lg font-label-sm text-label-sm active:bg-surface-variant transition-colors" >+₹1</button>
<button className="py-1.5 bg-surface-container text-on-surface rounded-lg font-label-sm text-label-sm active:bg-surface-variant transition-colors" >+₹2</button>
<button className="py-1.5 bg-surface-container text-on-surface rounded-lg font-label-sm text-label-sm active:bg-surface-variant transition-colors" >₹102.5</button>
<button className="py-1.5 bg-surface-container text-on-surface rounded-lg font-label-sm text-label-sm active:bg-surface-variant transition-colors" >₹103</button>
</div>
{/*  Tactile B2B Keypad Grid  */}
<div className="grid grid-cols-3 gap-2">
<button className="h-11 bg-surface-container-low text-on-surface rounded-lg font-headline-md text-headline-md active:bg-surface-container transition-colors flex items-center justify-center" >1</button>
<button className="h-11 bg-surface-container-low text-on-surface rounded-lg font-headline-md text-headline-md active:bg-surface-container transition-colors flex items-center justify-center" >2</button>
<button className="h-11 bg-surface-container-low text-on-surface rounded-lg font-headline-md text-headline-md active:bg-surface-container transition-colors flex items-center justify-center" >3</button>
<button className="h-11 bg-surface-container-low text-on-surface rounded-lg font-headline-md text-headline-md active:bg-surface-container transition-colors flex items-center justify-center" >4</button>
<button className="h-11 bg-surface-container-low text-on-surface rounded-lg font-headline-md text-headline-md active:bg-surface-container transition-colors flex items-center justify-center" >5</button>
<button className="h-11 bg-surface-container-low text-on-surface rounded-lg font-headline-md text-headline-md active:bg-surface-container transition-colors flex items-center justify-center" >6</button>
<button className="h-11 bg-surface-container-low text-on-surface rounded-lg font-headline-md text-headline-md active:bg-surface-container transition-colors flex items-center justify-center" >7</button>
<button className="h-11 bg-surface-container-low text-on-surface rounded-lg font-headline-md text-headline-md active:bg-surface-container transition-colors flex items-center justify-center" >8</button>
<button className="h-11 bg-surface-container-low text-on-surface rounded-lg font-headline-md text-headline-md active:bg-surface-container transition-colors flex items-center justify-center" >9</button>
<button className="h-11 bg-surface-container-low text-on-surface rounded-lg font-headline-md text-headline-md active:bg-surface-container transition-colors flex items-center justify-center" >.</button>
<button className="h-11 bg-surface-container-low text-on-surface rounded-lg font-headline-md text-headline-md active:bg-surface-container transition-colors flex items-center justify-center" >0</button>
<button aria-label="Backspace" className="h-11 bg-surface-container-low text-on-surface-variant rounded-lg active:bg-surface-container transition-colors flex items-center justify-center" >
<span className="material-symbols-outlined text-[22px]">backspace</span>
</button>
</div>
{/*  Escrow Option Toggle  */}
<div className="flex items-center justify-between px-1">
<label className="flex items-center gap-2 cursor-pointer select-none">
<input defaultChecked className="w-4 h-4 rounded bg-surface-container text-primary focus:ring-0" type="checkbox"/>
<span className="font-body-sm text-body-sm text-on-surface">Standard Net-30 Escrow terms applied</span>
</label>
<span className="font-label-sm text-label-sm text-primary font-medium">Details</span>
</div>
{/*  Final Submission CTA  */}
<button className="w-full h-12 bg-primary hover:bg-primary-container text-on-primary rounded-lg font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-md active:scale-[0.99] transition-transform" id="btn-submit-offer">
<span className="material-symbols-outlined text-[20px]">send</span>
<span>Broadcast Offer ₹<span id="btn-price-label">102</span></span>
</button>
<p className="font-body-sm text-body-sm text-center text-on-surface-variant -mt-1">
      Direct API broadcast into Apex Milling ERP • Binding 15 mins
    </p>
</div>
</div>
</main>
    </div>
  );
}
