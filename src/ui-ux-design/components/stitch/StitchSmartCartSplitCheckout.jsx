import React from 'react';

/**
 * StitchSmartCartSplitCheckout
 * Stitch AI Screen: "Smart Cart & Split Checkout"
 * STRICT RULE: Pure presentation component. Accepts callbacks and dynamic props.
 */
export default function StitchSmartCartSplitCheckout({ onNavigate, onAction, data, ...props }) {
  return (
    <div className="stitch-screen-container w-full min-h-screen text-on-surface">
<header className="fixed top-0 w-full z-50 pt-safe bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-sm min-w-0 flex-1"><div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-primary text-[20px]">bolt</span></div><div className="flex flex-col min-w-0"><div className="flex items-center gap-space-xs"><span className="font-label-badge text-label-badge bg-secondary-container text-on-secondary-fixed px-space-xs py-0.5 rounded-full uppercase tracking-wider">10 MINS</span><span className="font-headline-sm text-headline-sm text-on-surface truncate">Home</span></div><span className="font-body-sm text-body-sm text-on-surface-variant truncate">B-Block, Green Avenue, Metro Sector</span></div></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></header><main className="flex-1 flex flex-col relative w-full pt-16 pb-24 bg-surface"><div className="flex flex-col w-full pb-28">
{/*  Top Progress & Context Sub-Header  */}
<div className="px-margin pt-space-xs pb-space-sm flex flex-col gap-space-sm">
{/*  Back & Header Row  */}
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<button className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]">arrow_back</span>
</button>
<div className="flex flex-col">
<h1 className="font-headline-sm text-headline-sm text-on-surface leading-tight">Cart &amp; Checkout</h1>
<span className="font-body-sm text-body-sm text-on-surface-variant">Deliver to: <strong className="text-on-surface font-semibold">Home, 42 Elm Street</strong></span>
</div>
</div>
<span className="font-label-badge text-label-badge bg-primary/10 text-primary px-2.5 py-1 rounded-full uppercase tracking-wide">
        4 Items • ₹1,420
      </span>
</div>
{/*  Free Delivery Gamified Progress Meter  */}
<div className="bg-surface-container-low rounded-xl p-space-sm shadow-sm flex flex-col gap-1.5">
<div className="flex items-center justify-between text-on-surface">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary text-[18px]" style={{"fontVariationSettings":"'FILL' 1"}}>eco</span>
<span className="font-body-sm text-body-sm text-on-surface font-semibold">Add ₹75 more for Free Next-Day shipping</span>
</div>
<span className="font-label-badge text-label-badge text-primary font-bold">83%</span>
</div>
{/*  Meter bar with pulse dot  */}
<div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden relative">
<div className="h-full bg-primary rounded-full transition-all duration-500 ease-out" style={{"width":"83.5%"}}></div>
</div>
</div>
</div>
{/*  Cart Lists Wrapper  */}
<div className="px-margin flex flex-col gap-space-md mt-space-xs">
{/*  SECTION 1: Dark Store Instant Delivery  */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm relative overflow-hidden">
{/*  Ambient corner glow for hyper-speed  */}
<div className="absolute -right-6 -top-6 w-24 h-24 bg-secondary-container/20 rounded-full blur-xl pointer-events-none"></div>
{/*  Section Title & ETA Tag  */}
<div className="flex items-center justify-between pb-1">
<div className="flex items-center gap-1.5">
<span className="font-headline-sm text-headline-sm text-on-surface leading-snug">Dark Store Express</span>
</div>
<span className="font-label-badge text-label-badge bg-secondary-container text-on-secondary-fixed px-2.5 py-1 rounded-full flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]" style={{"fontVariationSettings":"'FILL' 1"}}>bolt</span>
          10 MINS SUPERFAST
        </span>
</div>
{/*  Item 1: Hass Avocados  */}
<div className="flex items-center justify-between gap-space-sm py-1.5">
<div className="flex items-center gap-space-sm min-w-0 flex-1">
<div className="w-14 h-14 rounded-lg bg-surface-container-low shrink-0 overflow-hidden flex items-center justify-center p-1">
<img className="w-full h-full object-contain" data-alt="Two ripe Hass avocados sliced in half showing seed and creamy green flesh against a soft studio backdrop with gentle bright studio lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdd6B0IRWgGXdgSgmMX16oBKQWlxiZhFlDF7ErEgWBDzzrnYAlIENP-DaZJfof0W-vxnHPk8fzjUd13PkDxtEOkYnZ5T-5n0psKj34Cke49mbtP6pqiquv5FP0W6sY93Uv4MGQDWBwzPr0yyizhNQqxBEbVB71EsvBrGEDySpulweQ_uMfu7Hs7TzNIWN6ktCcN9Fbl3svqcbqvxzhHRMMNGHeoLzXvVAvdl6Q6I5yGa9Kr167wtRR"/>
</div>
<div className="flex flex-col min-w-0">
<span className="font-body-md text-body-md text-on-surface font-semibold truncate">Fresh Hass Avocados</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Pack of 2 • 320g</span>
<div className="flex items-baseline gap-1 mt-0.5">
<span className="font-price-display text-price-display text-on-surface">₹149</span>
<span className="font-price-strike text-price-strike text-outline line-through">₹180</span>
</div>
</div>
</div>
{/*  Stepper  */}
<div className="flex items-center bg-primary-container text-on-primary-container rounded-full px-1 py-0.5 shadow-sm">
<button className="w-7 h-7 rounded-full flex items-center justify-center text-on-primary-container hover:bg-white/20 active:scale-95 transition-all" type="button">
<span className="material-symbols-outlined text-[16px]">remove</span>
</button>
<span className="font-label-action text-label-action px-2 text-on-primary-container min-w-[18px] text-center">1</span>
<button className="w-7 h-7 rounded-full flex items-center justify-center text-on-primary-container hover:bg-white/20 active:scale-95 transition-all" type="button">
<span className="material-symbols-outlined text-[16px]">add</span>
</button>
</div>
</div>
{/*  Item 2: Organic Whole Milk  */}
<div className="flex items-center justify-between gap-space-sm py-1.5">
<div className="flex items-center gap-space-sm min-w-0 flex-1">
<div className="w-14 h-14 rounded-lg bg-surface-container-low shrink-0 overflow-hidden flex items-center justify-center p-1">
<img className="w-full h-full object-contain" data-alt="Clear gallon jug of farm organic fresh whole milk with fresh condensate drops in a clean premium kitchen setting with light green tint." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRjZ4QCl1idmpdY-1086J3qJ9SKp7LTh2rRdBoMgT4OyTbByej77AQc20WPvQ-cI6ntQe7J3j-uuoF-38NqLFSaSfPl--WWnsXdUDd0Dr2vzmKoDC9JVRKaV76VSXb9Al_4jLLEJuKYVN18TgwSTsXeakr42U0_z-FR1pM_x9Q-7O4d-_IRT4C3tCvkyuhgyniQzZe6l7MYX0e9HujAI7zQIxcCGuIjEleuV15VavgfEWZDkUBCVU3"/>
</div>
<div className="flex flex-col min-w-0">
<span className="font-body-md text-body-md text-on-surface font-semibold truncate">Organic Whole Milk</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">1 Gallon • 3.8L</span>
<div className="flex items-baseline gap-1 mt-0.5">
<span className="font-price-display text-price-display text-on-surface">₹175</span>
<span className="font-price-strike text-price-strike text-outline line-through">₹210</span>
</div>
</div>
</div>
{/*  Stepper  */}
<div className="flex items-center bg-primary-container text-on-primary-container rounded-full px-1 py-0.5 shadow-sm">
<button className="w-7 h-7 rounded-full flex items-center justify-center text-on-primary-container hover:bg-white/20 active:scale-95 transition-all" type="button">
<span className="material-symbols-outlined text-[16px]">remove</span>
</button>
<span className="font-label-action text-label-action px-2 text-on-primary-container min-w-[18px] text-center">1</span>
<button className="w-7 h-7 rounded-full flex items-center justify-center text-on-primary-container hover:bg-white/20 active:scale-95 transition-all" type="button">
<span className="material-symbols-outlined text-[16px]">add</span>
</button>
</div>
</div>
{/*  Delivery & Subtotal Footer Strip  */}
<div className="bg-surface-container-low rounded-lg p-2.5 flex items-center justify-between mt-1">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary text-[18px]">verified</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Dark Store Express delivery</span>
</div>
<div className="flex items-center gap-2">
<span className="font-body-sm text-body-sm text-outline line-through">₹80</span>
<span className="font-label-action text-label-action text-primary uppercase">Free</span>
<span className="font-headline-sm text-headline-sm text-on-surface ml-1">₹385</span>
</div>
</div>
</div>
{/*  SECTION 2: Partner Dealer Delivery  */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm relative overflow-hidden">
{/*  Section Title & Schedule Tag  */}
<div className="flex items-center justify-between pb-1">
<div className="flex items-center gap-1.5">
<span className="font-headline-sm text-headline-sm text-on-surface leading-snug">Partner Dealer Warehouse</span>
</div>
<span className="font-label-badge text-label-badge bg-tertiary-fixed text-on-tertiary-fixed px-2.5 py-1 rounded-full flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">local_shipping</span>
          Tomorrow 9 AM - 12 PM
        </span>
</div>
{/*  Item 3: Sharbati Atta  */}
<div className="flex items-center justify-between gap-space-sm py-1.5">
<div className="flex items-center gap-space-sm min-w-0 flex-1">
<div className="w-14 h-14 rounded-lg bg-surface-container-low shrink-0 overflow-hidden flex items-center justify-center p-1">
<img className="w-full h-full object-contain" data-alt="Sturdy brown paper sack packaging of 5kg stone ground whole wheat flour with golden wheat stalks and natural warm rustic lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW-Ne94FJlCcCv_OkeIkKr0BeUXYiueHsxBh8I9Di2bcl6bKqIGksMMstl2Mac75P4VvXntEQwJU1NPQ4Vsv3MGlYnMqGAlnhsc2jZGQGUkXexmysDpRjmjRMrSMFQh8bph5T6rMRXoELNMZlIWQqY_mAUaolVrLg79-6cugPX0pz3cb799xQZn3R0qwdqldr6yMkmbZgHwrudNkWwjnVhtZvI-ZZ_TjuCPlI7i4s4uazp0u7ok3km"/>
</div>
<div className="flex flex-col min-w-0">
<span className="font-body-md text-body-md text-on-surface font-semibold truncate">Premium Sharbati Atta</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">100% Whole Wheat • 5 kg</span>
<div className="flex items-baseline gap-1 mt-0.5">
<span className="font-price-display text-price-display text-on-surface">₹749</span>
<span className="font-price-strike text-price-strike text-outline line-through">₹899</span>
</div>
</div>
</div>
{/*  Stepper  */}
<div className="flex items-center bg-primary-container text-on-primary-container rounded-full px-1 py-0.5 shadow-sm">
<button className="w-7 h-7 rounded-full flex items-center justify-center text-on-primary-container hover:bg-white/20 active:scale-95 transition-all" type="button">
<span className="material-symbols-outlined text-[16px]">remove</span>
</button>
<span className="font-label-action text-label-action px-2 text-on-primary-container min-w-[18px] text-center">1</span>
<button className="w-7 h-7 rounded-full flex items-center justify-center text-on-primary-container hover:bg-white/20 active:scale-95 transition-all" type="button">
<span className="material-symbols-outlined text-[16px]">add</span>
</button>
</div>
</div>
{/*  Item 4: Mustard Oil  */}
<div className="flex items-center justify-between gap-space-sm py-1.5">
<div className="flex items-center gap-space-sm min-w-0 flex-1">
<div className="w-14 h-14 rounded-lg bg-surface-container-low shrink-0 overflow-hidden flex items-center justify-center p-1">
<img className="w-full h-full object-contain" data-alt="Traditional glass bottle of cold pressed golden amber virgin mustard oil on a marble surface with clean botanical reflection." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1TwVzi9LdtguiVC1M6r_YARcR7aNjuJEzl-1sLP5xdvPw20ABRbH30uXodadzzDkcq_RglvEJ9X4bmdRWuPe3ctObU_SRurTAOfnKHgfzMJKIQLyz-ZcaJypceHaUIf-S4L-gJooDiGZcFSbi0m8OZtxqjIfgdl7NU6c1F3qDdspoOmlNEFgAb3HYtlvpImBmANBMFJUrzy4NMxvICq0oA1jBjP3K98hV6g3gP2_bv8ED_ajSpja-"/>
</div>
<div className="flex flex-col min-w-0">
<span className="font-body-md text-body-md text-on-surface font-semibold truncate">Cold-Pressed Mustard Oil</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Pure Virgin • 1 L</span>
<div className="flex items-baseline gap-1 mt-0.5">
<span className="font-price-display text-price-display text-on-surface">₹285</span>
<span className="font-price-strike text-price-strike text-outline line-through">₹325</span>
</div>
</div>
</div>
{/*  Stepper  */}
<div className="flex items-center bg-primary-container text-on-primary-container rounded-full px-1 py-0.5 shadow-sm">
<button className="w-7 h-7 rounded-full flex items-center justify-center text-on-primary-container hover:bg-white/20 active:scale-95 transition-all" type="button">
<span className="material-symbols-outlined text-[16px]">remove</span>
</button>
<span className="font-label-action text-label-action px-2 text-on-primary-container min-w-[18px] text-center">1</span>
<button className="w-7 h-7 rounded-full flex items-center justify-center text-on-primary-container hover:bg-white/20 active:scale-95 transition-all" type="button">
<span className="material-symbols-outlined text-[16px]">add</span>
</button>
</div>
</div>
{/*  Delivery & Subtotal Footer Strip  */}
<div className="bg-surface-container-low rounded-lg p-2.5 flex items-center justify-between mt-1">
<div className="flex flex-col">
<span className="font-body-sm text-body-sm text-on-surface-variant">Standard Scheduled delivery</span>
<span className="font-label-badge text-label-badge text-primary">Free on orders above ₹499</span>
</div>
<div className="flex items-center gap-2">
<span className="font-body-sm text-body-sm text-on-surface-variant">+₹120</span>
<span className="font-headline-sm text-headline-sm text-on-surface ml-1">₹1,160</span>
</div>
</div>
</div>
{/*  AI SMART ALERT BOX  */}
<div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-primary-fixed via-secondary-container to-tertiary-fixed shadow-md overflow-hidden">
<div className="bg-surface-container-lowest rounded-[14px] p-space-md flex flex-col gap-2.5 relative">
{/*  Top AI Badge & Sparkle  */}
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-fixed">
<span className="material-symbols-outlined text-[15px]" style={{"fontVariationSettings":"'FILL' 1"}}>auto_awesome</span>
</span>
<span className="font-label-badge text-label-badge uppercase tracking-wider text-on-surface font-extrabold">AI SAVINGS TIP</span>
</div>
<span className="font-label-badge text-label-badge bg-primary-fixed text-on-primary-fixed px-2 py-0.5 rounded-full">
            Save ₹50 Now
          </span>
</div>
{/*  Suggestion Copy  */}
<div className="flex flex-col">
<p className="font-headline-sm text-headline-sm text-on-surface leading-tight">
            Add 1 more Atta — 20% OFF today!
          </p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            Crossing ₹499 also unlocks <strong className="text-primary font-bold">FREE Next-Day Delivery</strong> automatically.
          </p>
</div>
{/*  Action Button  */}
<div className="pt-1">
<button className="w-full bg-primary text-on-primary rounded-xl py-2.5 px-3 flex items-center justify-between font-label-action text-label-action hover:bg-primary-container active:scale-[0.99] transition-all shadow-sm" type="button">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px]">add_circle</span>
<span>Add Atta (5kg) for ₹599</span>
</span>
<span className="bg-white/20 text-on-primary text-[11px] font-bold px-2 py-0.5 rounded-full uppercase">
              Apply Offer
            </span>
</button>
</div>
</div>
</div>
{/*  COUPON / SAVINGS CONFETTI CARD  */}
<div className="bg-surface-container-low rounded-xl p-space-sm flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings":"'FILL' 1"}}>sell</span>
</div>
<div className="flex flex-col">
<span className="font-label-action text-label-action text-on-surface">SUPER20 Applied</span>
<span className="font-body-sm text-body-sm text-primary font-semibold">You saved ₹40 on fresh essentials</span>
</div>
</div>
<button className="font-label-action text-label-action text-primary hover:text-on-surface-variant transition-colors" type="button">
        Edit
      </button>
</div>
{/*  DETAILED BILL SUMMARY  */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-2.5">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Bill Breakdown</h2>
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-body-md text-body-md">Items Total (4 items)</span>
<span className="font-body-md text-body-md text-on-surface font-semibold">₹1,420</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-body-md text-body-md">Store Delivery Fee</span>
<div className="flex items-center gap-1.5">
<span className="font-body-sm text-body-sm line-through text-outline">₹80</span>
<span className="font-body-md text-body-md text-primary font-bold">FREE</span>
</div>
</div>
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-body-md text-body-md">Partner Warehouse Shipping</span>
<span className="font-body-md text-body-md text-on-surface font-semibold">₹120</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant">
<div className="flex items-center gap-1">
<span className="font-body-md text-body-md">Handling &amp; Packaging</span>
<span className="material-symbols-outlined text-[15px] text-outline">info</span>
</div>
<span className="font-body-md text-body-md text-on-surface font-semibold">₹49</span>
</div>
<div className="flex items-center justify-between text-primary">
<span className="font-body-md text-body-md font-semibold">Coupon Discount (SUPER20)</span>
<span className="font-body-md text-body-md font-bold">-₹40</span>
</div>
{/*  Separation & Net Amount  */}
<div className="h-px bg-surface-container-high my-1"></div>
<div className="flex items-center justify-between text-on-surface">
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm font-extrabold">To Pay</span>
<span className="font-label-badge text-label-badge text-primary bg-primary-fixed/30 px-1.5 py-0.5 rounded-full inline-block mt-0.5">
            🎉 Total savings ₹90 on this order
          </span>
</div>
<span className="font-headline-xl-mobile text-headline-xl-mobile font-extrabold text-on-surface">
          ₹1,494
        </span>
</div>
</div>
{/*  Safe & Fresh Assurance Note  */}
<div className="flex items-center justify-center gap-2 py-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[16px] text-primary">lock</span>
<span className="font-body-sm text-body-sm">100% Secure contactless checkout &amp; fresh guarantee</span>
</div>
</div>
{/*  STICKY BOTTOM CHECKOUT ACTION BAR  */}
<aside className="fixed bottom-16 inset-x-0 z-40 px-margin pb-2 pt-2 bg-surface/90 backdrop-blur-xl shadow-[0_-4px_16px_rgba(18,23,20,0.08)]">
<div className="max-w-md mx-auto flex items-center justify-between gap-space-md">
{/*  Total Display & Quick Breakdown link  */}
<div className="flex flex-col min-w-0">
<div className="flex items-baseline gap-1.5">
<span className="font-headline-xl-mobile text-headline-xl-mobile font-extrabold text-on-surface">₹1,494</span>
<span className="font-price-strike text-price-strike text-outline line-through">₹1,720</span>
</div>
<button className="font-label-badge text-label-badge text-primary font-bold flex items-center gap-0.5 hover:underline" type="button">
<span>View Detailed Bill</span>
<span className="material-symbols-outlined text-[12px]">keyboard_arrow_up</span>
</button>
</div>
{/*  Proceed CTA Button  */}
<button className="bg-primary text-on-primary px-space-xl py-3 rounded-full flex items-center justify-center gap-2 font-headline-sm text-headline-sm shadow-md hover:bg-primary-container active:scale-[0.98] transition-all" type="button">
<span>Proceed to Pay</span>
<span className="material-symbols-outlined text-[20px]">arrow_forward</span>
</button>
</div>
</aside>
</div></main><nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-4px_16px_rgba(18,23,20,0.06)]" data-active-classes="text-primary font-bold"><div className="flex items-center justify-around h-16 px-space-sm"><a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-0.5 text-on-surface-variant hover:text-on-surface transition-colors" data-path="home" href="#"><span className="material-symbols-outlined text-[24px]">home</span><span className="font-label-action text-label-action">Home</span></a><a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-0.5 text-on-surface-variant hover:text-on-surface transition-colors" data-path="categories" href="#"><span className="material-symbols-outlined text-[24px]">grid_view</span><span className="font-label-action text-label-action">Categories</span></a><a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-0.5 text-on-surface-variant hover:text-on-surface transition-colors relative" data-path="cart" href="#"><div className="relative flex items-center justify-center"><span className="material-symbols-outlined text-[24px]">shopping_cart</span><span className="absolute -top-1.5 -right-2 bg-secondary-container text-on-secondary-fixed font-label-badge text-label-badge min-w-[18px] h-[18px] px-1 rounded-full flex items-center justify-center leading-none">3</span></div><span className="font-label-action text-label-action">Cart</span></a><a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-0.5 text-on-surface-variant hover:text-on-surface transition-colors" data-path="profile" href="#"><span className="material-symbols-outlined text-[24px]">account_circle</span><span className="font-label-action text-label-action">Profile</span></a></div></nav>
    </div>
  );
}
