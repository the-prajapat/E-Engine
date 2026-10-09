import React from 'react';

/**
 * StitchLiveOrderTracking
 * Stitch AI Screen: "Live Order Tracking"
 * STRICT RULE: Pure presentation component. Accepts callbacks and dynamic props.
 */
export default function StitchLiveOrderTracking({ onNavigate, onAction, data, ...props }) {
  return (
    <div className="stitch-screen-container w-full min-h-screen text-on-surface">
<header className="fixed top-0 inset-x-0 z-50 pointer-events-none pt-safe"><div className="h-16 px-margin flex items-center justify-between"><button aria-label="Go back" className="pointer-events-auto w-11 h-11 flex items-center justify-center rounded-full bg-surface-container-lowest/90 backdrop-blur-xl text-on-surface shadow-[0_1px_8px_rgba(0,0,0,0.06)] hover:bg-surface-container-lowest transition-colors"  type="button"><span className="material-symbols-outlined text-[20px]">arrow_back</span></button><button aria-label="Delivery support" className="pointer-events-auto h-11 px-space-md flex items-center gap-space-xs rounded-full bg-surface-container-lowest/90 backdrop-blur-xl text-on-surface shadow-[0_1px_8px_rgba(0,0,0,0.06)] hover:bg-surface-container-lowest transition-colors" type="button"><span className="material-symbols-outlined text-primary text-[20px]">support_agent</span><span className="font-label-action text-label-action text-on-surface">Help</span></button></div></header><main className="flex flex-col relative w-full min-h-screen bg-surface"><div className="flex flex-col w-full relative pb-safe">
{/*  Top Map Section (Interactive Isometric View)  */}
<div className="relative w-full h-[360px] overflow-hidden bg-surface-container-high">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out" data-alt="Modern clean 3D isometric vector city map showing streets, pastel buildings, small parks, and an illuminated cyan-blue glowing navigation delivery route trajectory with store icon at start and blue destination flag pin" id="mapCanvas" style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuDZOC1GRctcBOtOeR0HsPOD7gFlLIMZgyzgOEvPX4TmdcEVtfZWyVYnAFLjXXxXPZs7qnfGCTawRS-NyVWeOpQqY4HK6SmaT4kXFca_6DfdHB_vTmelBXXFhSSWvSDURxMXgp12-3xAvJIElpyQABApCanU2wiAWTKNfBeMR7-3dEIXLaxmxIe2E_uP3KAZlztqCJXazW2c4Des-HUcHAC5bOfuTMABXi9lQSgjOQ4iDjaa53gZbg8C')"}}>
</div>
{/*  Soft Vignette Scrim at Top & Edges  */}
<div className="absolute inset-0 bg-gradient-to-b from-inverse-surface/15 via-transparent to-surface pointer-events-none"></div>
{/*  Floating Live Trajectory & GPS Chip  */}
<div className="absolute top-20 left-margin z-10 flex flex-col gap-space-xs pointer-events-auto">
<div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-md shadow-sm">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
</span>
<span className="font-label-badge text-label-badge tracking-wider text-primary uppercase">LIVE GPS TRACKING</span>
</div>
<div className="inline-flex items-center gap-1.5 px-space-md py-1 rounded-full bg-surface-container-lowest/85 backdrop-blur-md text-on-surface text-body-sm font-body-sm shadow-sm">
<span className="material-symbols-outlined text-[16px] text-tertiary">storefront</span>
<span className="font-semibold text-on-surface">Fulton Dark Store</span>
<span className="text-on-surface-variant font-normal">→</span>
<span className="font-semibold text-on-surface">42 Elm St</span>
</div>
</div>
{/*  Map Floating Controls (Recenter / Layer)  */}
<div className="absolute top-20 right-margin z-10 flex flex-col gap-space-xs pointer-events-auto">
<button aria-label="Focus on Courier" className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-lowest/95 backdrop-blur-md text-on-surface shadow-sm active:scale-95 transition-transform hover:bg-surface-container-lowest" id="centerScooterBtn" type="button">
<span className="material-symbols-outlined text-primary text-[20px]">near_me</span>
</button>
<button aria-label="Toggle Route View" className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-lowest/95 backdrop-blur-md text-on-surface shadow-sm active:scale-95 transition-transform hover:bg-surface-container-lowest" type="button">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">layers</span>
</button>
</div>
{/*  Animated Scooter Radar Indicator Tag  */}
<div className="absolute top-[52%] left-[58%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-lowest/95 shadow-md backdrop-blur-sm pointer-events-none animate-bounce">
<span className="material-symbols-outlined text-[15px] text-primary">two_wheeler</span>
<span className="font-label-badge text-label-badge text-on-surface">Liam • 0.8 mi</span>
</div>
</div>
{/*  Bottom Tracking Sheet Card  */}
<div className="relative -mt-6 z-20 flex flex-col w-full bg-surface-container-lowest rounded-t-[28px] shadow-[0_-8px_30px_rgba(0,0,0,0.06)] px-margin pt-space-md pb-space-xl">
{/*  Sheet Drag Notch Indicator  */}
<div className="w-10 h-1.5 rounded-full bg-surface-variant mx-auto mb-space-md"></div>
{/*  ETA Header Section  */}
<div className="flex items-start justify-between gap-space-md">
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Arriving in</span>
<span className="inline-flex items-center px-space-md py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-headline-sm text-headline-sm animate-pulse">
            9 mins
          </span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mt-1 flex items-center gap-1.5">
<span className="inline-block w-2 h-2 rounded-full bg-primary"></span>
<span>On schedule • Courier is 0.8 mi away on E-Scooter</span>
</p>
</div>
{/*  Security Delivery OTP Badge  */}
<div className="flex flex-col items-end shrink-0">
<span className="font-label-badge text-label-badge text-on-surface-variant uppercase">Delivery PIN</span>
<div className="mt-0.5 px- space-md px-2.5 py-1 rounded-lg bg-surface-container text-primary font-headline-sm text-headline-sm tracking-widest font-extrabold shadow-sm">
          4 8 2 1
        </div>
</div>
</div>
{/*  Segmented Multi-Step Delivery Progress Bar  */}
<div className="flex flex-col mt-space-lg gap-space-xs">
<div className="grid grid-cols-4 gap-1.5 w-full">
<div className="h-1.5 rounded-full bg-primary"></div>
<div className="h-1.5 rounded-full bg-primary"></div>
<div className="h-1.5 rounded-full bg-primary relative overflow-hidden">
<div className="absolute inset-0 bg-primary-fixed-dim animate-pulse"></div>
</div>
<div className="h-1.5 rounded-full bg-surface-container"></div>
</div>
<div className="flex justify-between items-center text-body-sm font-body-sm text-on-surface-variant pt-1">
<span className="text-primary font-bold">Confirmed</span>
<span className="text-primary font-bold">Packed</span>
<span className="text-on-surface font-extrabold flex items-center gap-0.5">
<span className="material-symbols-outlined text-[14px] text-primary">electric_scooter</span>
          On the way
        </span>
<span className="text-on-surface-variant">Delivered</span>
</div>
</div>
{/*  Courier Partner Card  */}
<div className="mt-space-lg p-space-md rounded-2xl bg-surface-container-low flex flex-col gap-space-md">
<div className="flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-md min-w-0">
<div className="relative shrink-0">
<img alt="Liam Davis" className="w-14 h-14 rounded-full object-cover shadow-sm bg-surface-container" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5E2qE2fsiiXhXEI9XpHnfeJhxWbnHUhweRXJJXxjOBehwJyh7PqvEU2UhB3MrCrictPLNwDqUyFM3cl1yRg5q4q2qa7JkN_Jqfa6qS7Mo6cO7wXXFV6EQLwn8f0n0DHez4iUY4sg8UrFKpec7My-8sZp6fX32o65ezOJtYGtgMIOPrjYX78WhrhvBSyaP7UTraxvG2-Gj46BU32W-SvzparFxaWLVemHUGyeeiy0xEj8kR8R5SJiX"/>
<span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-primary border-2 border-surface-container-lowest flex items-center justify-center">
<span className="material-symbols-outlined text-[10px] text-on-primary">check</span>
</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-headline-sm text-headline-sm text-on-surface truncate">Liam Davis</span>
<span className="material-symbols-outlined text-[18px] text-tertiary" title="Verified Courier">verified</span>
</div>
<div className="flex items-center gap-space-xs mt-0.5 flex-wrap">
<span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-label-badge font-label-badge">
<span className="material-symbols-outlined text-[12px] text-secondary">star</span>
                4.9
              </span>
<span className="text-body-sm font-body-sm text-on-surface-variant">1,240 deliveries</span>
</div>
<span className="text-[11px] leading-tight text-on-surface-variant mt-0.5 flex items-center gap-1">
<span className="material-symbols-outlined text-[13px] text-primary">health_and_safety</span>
              Temp: 98.4°F • Masked
            </span>
</div>
</div>
{/*  Quick Contact Actions  */}
<div className="flex items-center gap-space-xs shrink-0">
{/*  Sleek Secondary Message Icon Button  */}
<button aria-label="Chat with courier" className="w-11 h-11 rounded-full bg-surface-container-lowest flex items-center justify-center text-on-surface shadow-sm active:scale-95 transition-all hover:bg-surface-container" id="chatBtn" type="button">
<span className="material-symbols-outlined text-[20px] text-on-surface-variant">chat_bubble</span>
</button>
{/*  Prominent Trust Call Button (Deep Electric Blue CTA)  */}
<a aria-label="Call Courier Liam Davis" className="h-11 px- space-md px-4 rounded-full bg-tertiary text-on-tertiary flex items-center gap-1.5 shadow-md active:scale-95 transition-all hover:bg-tertiary-container" href="tel:18005550199">
<span className="material-symbols-outlined text-[20px]">call</span>
<span className="font-label-action text-label-action text-on-tertiary">Call</span>
</a>
</div>
</div>
{/*  Quick Courier Tip Selector (Delight Micro-Interaction)  */}
<div className="pt-space-xs flex items-center justify-between border-t-0">
<span className="font-label-action text-label-action text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-secondary">volunteer_activism</span>
          Tip Liam
        </span>
<div className="flex items-center gap-1.5" id="tipGroup">
<button className="tip-pill px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface font-label-action text-label-action shadow-sm hover:bg-primary-container hover:text-on-primary-container transition-colors" data-amount="1" type="button">₹20</button>
<button className="tip-pill px-3 py-1 rounded-full bg-primary text-on-primary font-label-action text-label-action shadow-sm transition-colors" data-amount="2" type="button">₹50</button>
<button className="tip-pill px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface font-label-action text-label-action shadow-sm hover:bg-primary-container hover:text-on-primary-container transition-colors" data-amount="3" type="button">₹100</button>
<button className="tip-pill px-2.5 py-1 rounded-full bg-surface-container-lowest text-on-surface font-label-action text-label-action shadow-sm hover:bg-surface-container transition-colors" data-amount="custom" type="button">Other</button>
</div>
</div>
</div>
{/*  Collapsible Order Details Summary Section  */}
<div className="mt-space-md p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">shopping_bag</span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface">Order #BK-88421</span>
<span className="text-body-sm font-body-sm text-on-surface-variant">4 items • Fulton Dark Store</span>
</div>
</div>
<button aria-expanded="false" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors" id="toggleItemsBtn" type="button">
<span className="material-symbols-outlined text-[20px] transition-transform duration-200" id="chevronIcon">expand_more</span>
</button>
</div>
{/*  Item Previews Row  */}
<div className="flex items-center gap-2 pt-1 overflow-x-auto pb-1" id="itemsPreview">
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container text-body-sm font-body-sm text-on-surface shrink-0">
<span>🥑</span>
<span>Hass Avocados (2x)</span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container text-body-sm font-body-sm text-on-surface shrink-0">
<span>🥛</span>
<span>Oat Milk 1L</span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container text-body-sm font-body-sm text-on-surface shrink-0">
<span>🍞</span>
<span>Sourdough Bread</span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container text-body-sm font-body-sm text-on-surface shrink-0">
<span>🍅</span>
<span>Roma Tomatoes</span>
</div>
</div>
{/*  Delivery Instructions Snippet  */}
<div className="mt-space-xs p-2.5 rounded-xl bg-surface-container-low flex items-start gap-2">
<span className="material-symbols-outlined text-[18px] text-on-surface-variant shrink-0 mt-0.5">doorbell</span>
<div className="flex flex-col">
<span className="font-label-badge text-label-badge text-on-surface-variant">DELIVERY INSTRUCTIONS</span>
<span className="text-body-sm font-body-sm text-on-surface mt-0.5">Leave at front door, ring doorbell once. Please do not block screen gate.</span>
</div>
</div>
</div>
{/*  Live Toast Message Container for Tipping / Action Interactions  */}
<div className="fixed bottom-6 left-margin right-margin z-50 transform translate-y-24 opacity-0 transition-all duration-300 pointer-events-none" id="actionToast">
<div className="p-space-md rounded-2xl bg-inverse-surface text-inverse-on-surface shadow-xl flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary-fixed text-[20px]">check_circle</span>
<span className="font-body-md text-body-md text-inverse-on-surface" id="toastMessage">Tip updated</span>
</div>
<button className="text-primary-fixed font-label-action text-label-action" type="button">DISMISS</button>
</div>
</div>
</div>
</div>
</main>
    </div>
  );
}
