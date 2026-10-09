import React from 'react';

/**
 * StitchQuickCommerceHome
 * Stitch AI Screen: "Quick-Commerce Home Screen"
 * STRICT RULE: Pure presentation component. Accepts callbacks and dynamic props.
 */
export default function StitchQuickCommerceHome({ onNavigate, onAction, data, ...props }) {
  return (
    <div className="stitch-screen-container w-full min-h-screen text-on-surface">
<header className="fixed top-0 w-full z-50 pt-safe bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 px-margin flex items-center justify-between gap-space-sm"><div className="flex items-center gap-space-sm min-w-0 flex-1"><div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-primary text-[20px]">bolt</span></div><div className="flex flex-col min-w-0"><div className="flex items-center gap-space-xs"><span className="font-label-badge text-label-badge bg-secondary-container text-on-secondary-fixed px-space-xs py-0.5 rounded-full uppercase tracking-wider">10 MINS</span><span className="font-headline-sm text-headline-sm text-on-surface truncate">Home</span></div><span className="font-body-sm text-body-sm text-on-surface-variant truncate">B-Block, Green Avenue, Metro Sector</span></div></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></header><main className="flex-1 flex flex-col relative w-full pt-16 pb-24 bg-surface"><div className="flex flex-col w-full gap-space-lg px-margin pb-6">
{/*  Micro Delivery Context & Address Strip  */}
<div className="flex items-center justify-between gap-space-sm pt-space-xs">
<div className="flex items-center gap-space-xs min-w-0 flex-1">
<div className="w-8 h-8 rounded-full bg-primary-container/10 flex items-center justify-center shrink-0 shadow-sm">
<span className="material-symbols-outlined text-primary text-[20px]" style={{"fontVariationSettings":"'FILL' 1"}}>location_on</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1">
<span className="font-label-badge text-label-badge uppercase tracking-wider text-on-surface-variant font-bold">Deliver to</span>
<span className="material-symbols-outlined text-on-surface-variant text-[16px]">expand_more</span>
</div>
<span className="font-body-sm text-body-sm font-bold text-on-surface truncate">Home - 42 Elm Street, Brooklyn, NY</span>
</div>
</div>
<div className="flex items-center gap-1 bg-secondary-container px-space-sm py-1 rounded-full shadow-sm shrink-0">
<span className="material-symbols-outlined text-on-secondary-fixed text-[15px]" style={{"fontVariationSettings":"'FILL' 1"}}>bolt</span>
<span className="font-label-badge text-label-badge text-on-secondary-fixed font-black tracking-tight">10 MINS</span>
</div>
</div>
{/*  Search Bar with Micro-interactions  */}
<div className="relative w-full">
<div className="w-full h-12 bg-surface-container-lowest rounded-full shadow-md flex items-center px-space-md gap-space-sm">
<span className="material-symbols-outlined text-primary text-[22px]">search</span>
<input className="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none" placeholder='Search "fresh milk, avocados, chips..."' type="text"/>
<div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center shrink-0 active:scale-95 transition-transform">
<span className="material-symbols-outlined text-primary text-[19px]">mic</span>
</div>
</div>
</div>
{/*  Instant Express Promo Carousel / Stories Strip  */}
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface">Explore Aisles</span>
<span className="font-label-action text-label-action text-primary flex items-center gap-0.5">See All <span className="material-symbols-outlined text-[16px]">chevron_right</span></span>
</div>
<div className="flex items-center gap-space-sm overflow-x-auto -mr-margin pr-margin pb-1">
{/*  Category Pill 1  */}
<div className="flex items-center gap-space-xs bg-primary text-on-primary px-space-md py-2 rounded-full shrink-0 shadow-sm active:scale-95 transition-transform cursor-pointer">
<span className="material-symbols-outlined text-[18px]">bolt</span>
<span className="font-label-action text-label-action tracking-tight whitespace-nowrap">Superfast 10m</span>
</div>
{/*  Category Pill 2  */}
<div className="flex items-center gap-space-xs bg-surface-container-lowest text-on-surface px-space-md py-2 rounded-full shrink-0 shadow-sm active:scale-95 transition-transform cursor-pointer">
<span className="material-symbols-outlined text-primary text-[18px]">local_convenience_store</span>
<span className="font-label-action text-label-action whitespace-nowrap">Daily Essentials</span>
</div>
{/*  Category Pill 3  */}
<div className="flex items-center gap-space-xs bg-surface-container-lowest text-on-surface px-space-md py-2 rounded-full shrink-0 shadow-sm active:scale-95 transition-transform cursor-pointer">
<span className="material-symbols-outlined text-primary text-[18px]">nutrition</span>
<span className="font-label-action text-label-action whitespace-nowrap">Fresh Produce</span>
</div>
{/*  Category Pill 4  */}
<div className="flex items-center gap-space-xs bg-surface-container-lowest text-on-surface px-space-md py-2 rounded-full shrink-0 shadow-sm active:scale-95 transition-transform cursor-pointer">
<span className="material-symbols-outlined text-primary text-[18px]">cookie</span>
<span className="font-label-action text-label-action whitespace-nowrap">Snacks &amp; Munchies</span>
</div>
{/*  Category Pill 5  */}
<div className="flex items-center gap-space-xs bg-surface-container-lowest text-on-surface px-space-md py-2 rounded-full shrink-0 shadow-sm active:scale-95 transition-transform cursor-pointer">
<span className="material-symbols-outlined text-primary text-[18px]">egg</span>
<span className="font-label-action text-label-action whitespace-nowrap">Dairy &amp; Breakfast</span>
</div>
</div>
</div>
{/*  Promotional Delight Banner  */}
<div className="relative w-full rounded-2xl bg-gradient-to-r from-primary via-primary-container to-primary p-space-md text-on-primary shadow-md overflow-hidden flex items-center justify-between">
<div className="flex flex-col z-10 max-w-[65%]">
<div className="inline-flex items-center gap-1 bg-secondary-container text-on-secondary-fixed rounded-full px-2 py-0.5 w-fit mb-1 shadow-sm">
<span className="material-symbols-outlined text-[12px]" style={{"fontVariationSettings":"'FILL' 1"}}>local_fire_department</span>
<span className="font-label-badge text-label-badge font-black uppercase tracking-wider">Flash Sale</span>
</div>
<span className="font-headline-sm text-headline-sm leading-tight text-on-primary">Up to 40% OFF</span>
<span className="font-body-sm text-body-sm text-on-primary-container mt-0.5">Morning farm harvest arrives in minutes</span>
</div>
<div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 shadow-sm bg-surface-container-lowest/15">
<img className="w-full h-full object-cover" data-alt="High resolution commercial studio still life of a fresh produce box containing crisp green lettuce, ripe red tomatoes, and lemons with warm lighting and subtle water droplets on a clean surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd9YWYtwOza-0ZrufFzwj-CyaJYZz-vhbsByKXcvbFgLIa0SKJoE_--TR6tuukfwgfU_ekaxSncuxtsokU0fTHJM52K_sFEJY99EZ7GVu0aCKLgWq5pdJ7KtjKXvPO2R81utTVwUPa06HdrpDIeMJDB0pWI7XcbTudVLJuSLh26-25tvKkUOY0DTH-8RTEwQyjwKJ4Nz2QAfediRloCzF13D7mW2rK-Uer3P_IVCME60QsJTh8s3NV"/>
</div>
</div>
{/*  Grocery Product Cards 2-Column Grid  */}
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface">Trending in Brooklyn</span>
<span className="bg-secondary-fixed text-on-secondary-fixed text-label-badge font-label-badge px-1.5 py-0.5 rounded-full font-black">POPULAR</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant font-bold">6 items</span>
</div>
<div className="grid grid-cols-2 gap-gutter">
{/*  Product Card 1: Fresh Hass Avocados  */}
<div className="flex flex-col bg-surface-container-lowest rounded-2xl p-space-sm shadow-md justify-between gap-space-xs relative">
<div className="relative w-full aspect-square bg-surface-container-low rounded-xl overflow-hidden flex items-center justify-center">
<img className="w-full h-full object-cover" data-alt="Two ripe Hass avocados, one sliced in half showing perfect creamy lime-green flesh and round pit, clean bright studio product shot on isolated soft background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCayV23h4haFrhmOZwmsLlrcbHULr27k3IYzAdNRafGUWsqhX3zT4Cnmwxd89N88Rj12csRvAh13NZSl9E4TLCJDmS8kAN2Zp5ea-BVhqJEqODStkWQLeDu1jnweozNTFmB6HaWigfVmC5wbuwmLem3LMtieUJuT5HeMLSCBdMp4mcfexVitUsTcUaQszt3W1VAOBPSCJiYzOp69y0AoSPnLM8W7FPZ-nfyanY9BRrDQ6DMZ55cA9kG"/>
<span className="absolute top-1.5 left-1.5 bg-secondary-container text-on-secondary-fixed font-label-badge text-label-badge px-2 py-0.5 rounded-full shadow-sm flex items-center gap-0.5">
<span className="material-symbols-outlined text-[12px]" style={{"fontVariationSettings":"'FILL' 1"}}>timer</span>
            8-12 mins
          </span>
<span className="absolute top-1.5 right-1.5 bg-primary-container text-on-primary font-label-badge text-label-badge px-1.5 py-0.5 rounded-full shadow-sm font-black">
            17% OFF
          </span>
</div>
<div className="flex flex-col min-w-0 mt-1">
<span className="font-body-md text-body-md font-bold text-on-surface line-clamp-1">Fresh Hass Avocados</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Pack of 2</span>
</div>
<div className="flex items-end justify-between gap-1 pt-1">
<div className="flex flex-col">
<span className="font-price-strike text-price-strike line-through text-outline">$4.20</span>
<span className="font-price-display text-price-display text-primary leading-tight">$3.49</span>
</div>
{/*  Quantity Stepper  */}
<div className="flex items-center bg-primary text-on-primary rounded-full px-1 py-1 shadow-md shrink-0 select-none">
<button aria-label="Decrease quantity" className="stepper-btn stepper-dec w-6 h-6 rounded-full flex items-center justify-center active:scale-75 transition-transform" type="button">
<span className="material-symbols-outlined text-[16px] font-black">remove</span>
</button>
<span className="stepper-count font-label-action text-label-action px-2 text-on-primary min-w-[18px] text-center">1</span>
<button aria-label="Increase quantity" className="stepper-btn stepper-inc w-6 h-6 rounded-full flex items-center justify-center active:scale-75 transition-transform" type="button">
<span className="material-symbols-outlined text-[16px] font-black">add</span>
</button>
</div>
</div>
</div>
{/*  Product Card 2: Organic Whole Milk  */}
<div className="flex flex-col bg-surface-container-lowest rounded-2xl p-space-sm shadow-md justify-between gap-space-xs relative">
<div className="relative w-full aspect-square bg-surface-container-low rounded-xl overflow-hidden flex items-center justify-center">
<img className="w-full h-full object-cover" data-alt="Chilled organic whole milk in a glass bottle jug with a clean label, surrounded by a subtle splash of fresh milk on high-key crisp lighting studio setup" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWRB5N1QPgQyaycQMuepScdoebBcN4eGa9jx02CIWuF2XhtiaQ0Kc4GqzlqBhwdyoK51mz-V524e3AIQwAE2G0uwNDRg1ie61zjf7iMqE7V2F-oQkn8iIqnAHkFQ5EypJjClZX3O_ztzfEDdtkpeKALXlwg5upjJ-NTUpnZ9gytGbBCszY0XNvX7ntPmLMteTsVC-uVgQEmRh1bRAuWSZTssmJU4RGhuFONHdNJYgIUhjUxwQ9kH1O"/>
<span className="absolute top-1.5 left-1.5 bg-secondary-container text-on-secondary-fixed font-label-badge text-label-badge px-2 py-0.5 rounded-full shadow-sm flex items-center gap-0.5">
<span className="material-symbols-outlined text-[12px]" style={{"fontVariationSettings":"'FILL' 1"}}>timer</span>
            10 mins
          </span>
</div>
<div className="flex flex-col min-w-0 mt-1">
<span className="font-body-md text-body-md font-bold text-on-surface line-clamp-1">Organic Whole Milk</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">1 Gallon, 3.8L</span>
</div>
<div className="flex items-end justify-between gap-1 pt-1">
<div className="flex flex-col">
<span className="font-price-strike text-price-strike text-transparent select-none"> </span>
<span className="font-price-display text-price-display text-primary leading-tight">$4.19</span>
</div>
{/*  Quantity Stepper  */}
<div className="flex items-center bg-primary text-on-primary rounded-full px-1 py-1 shadow-md shrink-0 select-none">
<button aria-label="Decrease quantity" className="stepper-btn stepper-dec w-6 h-6 rounded-full flex items-center justify-center active:scale-75 transition-transform" type="button">
<span className="material-symbols-outlined text-[16px] font-black">remove</span>
</button>
<span className="stepper-count font-label-action text-label-action px-2 text-on-primary min-w-[18px] text-center">1</span>
<button aria-label="Increase quantity" className="stepper-btn stepper-inc w-6 h-6 rounded-full flex items-center justify-center active:scale-75 transition-transform" type="button">
<span className="material-symbols-outlined text-[16px] font-black">add</span>
</button>
</div>
</div>
</div>
{/*  Product Card 3: Ripe Roma Tomatoes  */}
<div className="flex flex-col bg-surface-container-lowest rounded-2xl p-space-sm shadow-md justify-between gap-space-xs relative">
<div className="relative w-full aspect-square bg-surface-container-low rounded-xl overflow-hidden flex items-center justify-center">
<img className="w-full h-full object-cover" data-alt="Vibrant cluster of ripe red Roma plum tomatoes on the vine with green calyx and dewy water droplets, high detail natural grocery catalog photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJDbve-cyqIKxdSQD06y5jmE-lfQDZ5tARZs7OBr9Rij1bQ40uljUMYPKen5Q_w9gY3E-9Lssmusil0t2tiyLlavxEKtDmSvz0u9ktYJhMaK-5LAHs-erCeCKryrYa_jP74pYhUkuBdYe-226v7I5R26IFg8J-g5WVHw2RnskxP7tmgvdBAUp41e78m5XxyGqvfXKOmNHjBdTHpOwa6FE7UlOnv8x3u1hc8ffYK_sKb8A_MgTXSN_c"/>
<span className="absolute top-1.5 left-1.5 bg-secondary-container text-on-secondary-fixed font-label-badge text-label-badge px-2 py-0.5 rounded-full shadow-sm flex items-center gap-0.5">
<span className="material-symbols-outlined text-[12px]" style={{"fontVariationSettings":"'FILL' 1"}}>timer</span>
            10 MINS
          </span>
</div>
<div className="flex flex-col min-w-0 mt-1">
<span className="font-body-md text-body-md font-bold text-on-surface line-clamp-1">Ripe Roma Tomatoes</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">500g</span>
</div>
<div className="flex items-end justify-between gap-1 pt-1">
<div className="flex flex-col">
<span className="font-price-strike text-price-strike line-through text-outline">$2.30</span>
<span className="font-price-display text-price-display text-primary leading-tight">$1.89</span>
</div>
{/*  Quantity Stepper  */}
<div className="flex items-center bg-primary text-on-primary rounded-full px-1 py-1 shadow-md shrink-0 select-none">
<button aria-label="Decrease quantity" className="stepper-btn stepper-dec w-6 h-6 rounded-full flex items-center justify-center active:scale-75 transition-transform" type="button">
<span className="material-symbols-outlined text-[16px] font-black">remove</span>
</button>
<span className="stepper-count font-label-action text-label-action px-2 text-on-primary min-w-[18px] text-center">1</span>
<button aria-label="Increase quantity" className="stepper-btn stepper-inc w-6 h-6 rounded-full flex items-center justify-center active:scale-75 transition-transform" type="button">
<span className="material-symbols-outlined text-[16px] font-black">add</span>
</button>
</div>
</div>
</div>
{/*  Product Card 4: Artisan Sourdough Loaf  */}
<div className="flex flex-col bg-surface-container-lowest rounded-2xl p-space-sm shadow-md justify-between gap-space-xs relative">
<div className="relative w-full aspect-square bg-surface-container-low rounded-xl overflow-hidden flex items-center justify-center">
<img className="w-full h-full object-cover" data-alt="Crusty freshly baked golden sourdough bread loaf with flour dusted scoring on top, rustic bakery lighting with warm appetizing tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpS_jX1womAhYD9_1Pr9Og-Abpm9p3adQiI2v8Yq6schlnZC3PEIOVeFgDS1gTjQrqJUlRdnW6I_G4cxHdfkn53i6gvS-l3SyO_2VzirY3EV9tnR88KNqUH2Xc_ehQXwJcJcyn-M1G_dwT7GmjywcqxrCMh01iZ28MsThEpZ9MXGaZSCmzNV0pv3MBDxiZHWaITqvwQBfHic3KLDzfvUn8yUS52c-031feYRDBiJLravylPoWu1i3U"/>
<span className="absolute top-1.5 left-1.5 bg-secondary-container text-on-secondary-fixed font-label-badge text-label-badge px-2 py-0.5 rounded-full shadow-sm flex items-center gap-0.5">
<span className="material-symbols-outlined text-[12px]" style={{"fontVariationSettings":"'FILL' 1"}}>timer</span>
            8-12 mins
          </span>
<span className="absolute top-1.5 right-1.5 bg-secondary-container text-on-secondary-fixed font-label-badge text-label-badge px-1.5 py-0.5 rounded-full shadow-sm font-black">
            BAKED TODAY
          </span>
</div>
<div className="flex flex-col min-w-0 mt-1">
<span className="font-body-md text-body-md font-bold text-on-surface line-clamp-1">Artisan Sourdough Loaf</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Freshly baked</span>
</div>
<div className="flex items-end justify-between gap-1 pt-1">
<div className="flex flex-col">
<span className="font-price-strike text-price-strike text-transparent select-none"> </span>
<span className="font-price-display text-price-display text-primary leading-tight">$3.99</span>
</div>
{/*  Quantity Stepper  */}
<div className="flex items-center bg-primary text-on-primary rounded-full px-1 py-1 shadow-md shrink-0 select-none">
<button aria-label="Decrease quantity" className="stepper-btn stepper-dec w-6 h-6 rounded-full flex items-center justify-center active:scale-75 transition-transform" type="button">
<span className="material-symbols-outlined text-[16px] font-black">remove</span>
</button>
<span className="stepper-count font-label-action text-label-action px-2 text-on-primary min-w-[18px] text-center">1</span>
<button aria-label="Increase quantity" className="stepper-btn stepper-inc w-6 h-6 rounded-full flex items-center justify-center active:scale-75 transition-transform" type="button">
<span className="material-symbols-outlined text-[16px] font-black">add</span>
</button>
</div>
</div>
</div>
{/*  Product Card 5: Farm Fresh Grade-A Eggs  */}
<div className="flex flex-col bg-surface-container-lowest rounded-2xl p-space-sm shadow-md justify-between gap-space-xs relative">
<div className="relative w-full aspect-square bg-surface-container-low rounded-xl overflow-hidden flex items-center justify-center">
<img className="w-full h-full object-cover" data-alt="Brown farm-fresh organic eggs nestled in an open molded pulp carton, clean kitchen lighting highlighting the natural shell texture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs17_6ae9HPqlj3fS7bQ1-xwbbncqFUoMqAnvRBhoZJjbM76_q_ZiXUQcT4VohP3GpNzGwMs38AE96Rtm7Ta2wPYFno0aQqqIneoCa90uIjNZVlYmxscDnQvna4eCRxagsxc4oLXZ4jRgcsJcaZnjZ0N3rQI3gV5wY9Xm6AFC-KpA0sMQPnN4Gbc9fD8oE-lCG-qeRcKzuU8za55kuxy6vcFOdhpmEBicw5fA1wpeGOdg9-tRcAGxU"/>
<span className="absolute top-1.5 left-1.5 bg-secondary-container text-on-secondary-fixed font-label-badge text-label-badge px-2 py-0.5 rounded-full shadow-sm flex items-center gap-0.5">
<span className="material-symbols-outlined text-[12px]" style={{"fontVariationSettings":"'FILL' 1"}}>timer</span>
            10 mins
          </span>
</div>
<div className="flex flex-col min-w-0 mt-1">
<span className="font-body-md text-body-md font-bold text-on-surface line-clamp-1">Farm Fresh Grade-A Eggs</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">12 count</span>
</div>
<div className="flex items-end justify-between gap-1 pt-1">
<div className="flex flex-col">
<span className="font-price-strike text-price-strike text-transparent select-none"> </span>
<span className="font-price-display text-price-display text-primary leading-tight">$4.49</span>
</div>
{/*  Quantity Stepper  */}
<div className="flex items-center bg-primary text-on-primary rounded-full px-1 py-1 shadow-md shrink-0 select-none">
<button aria-label="Decrease quantity" className="stepper-btn stepper-dec w-6 h-6 rounded-full flex items-center justify-center active:scale-75 transition-transform" type="button">
<span className="material-symbols-outlined text-[16px] font-black">remove</span>
</button>
<span className="stepper-count font-label-action text-label-action px-2 text-on-primary min-w-[18px] text-center">1</span>
<button aria-label="Increase quantity" className="stepper-btn stepper-inc w-6 h-6 rounded-full flex items-center justify-center active:scale-75 transition-transform" type="button">
<span className="material-symbols-outlined text-[16px] font-black">add</span>
</button>
</div>
</div>
</div>
{/*  Product Card 6: Greek Style Plain Yogurt  */}
<div className="flex flex-col bg-surface-container-lowest rounded-2xl p-space-sm shadow-md justify-between gap-space-xs relative">
<div className="relative w-full aspect-square bg-surface-container-low rounded-xl overflow-hidden flex items-center justify-center">
<img className="w-full h-full object-cover" data-alt="Chilled tub of Greek style authentic whole milk plain yogurt with a clean blue and white aesthetic, beside a ceramic bowl with creamy spoonful, studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8Rhjj2pMkBa1bFZeyRn1o8j5cFDCguw4bmREVmNiqfarhpGczyRHvBctTGrsK0PyCpSDS45N2BD1CGO-1Mg4Mccq-BOSY0Ee0tfl3FnKi-N5PDK4qQzp1m15K3YLou5BeSa6dTep3J7bF1Y4X49r0DvBjG1yWfTkCKHlmgJI64oxs1MI-0qqQYCvcjiMCYjBeQ_--VU1jEFqAdFPLAGCPsirVHjlEuVa4W4EgqasOUrDQeq77gsuW"/>
<span className="absolute top-1.5 left-1.5 bg-secondary-container text-on-secondary-fixed font-label-badge text-label-badge px-2 py-0.5 rounded-full shadow-sm flex items-center gap-0.5">
<span className="material-symbols-outlined text-[12px]" style={{"fontVariationSettings":"'FILL' 1"}}>timer</span>
            9 mins
          </span>
</div>
<div className="flex flex-col min-w-0 mt-1">
<span className="font-body-md text-body-md font-bold text-on-surface line-clamp-1">Greek Style Plain Yogurt</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">450g</span>
</div>
<div className="flex items-end justify-between gap-1 pt-1">
<div className="flex flex-col">
<span className="font-price-strike text-price-strike line-through text-outline">$3.49</span>
<span className="font-price-display text-price-display text-primary leading-tight">$2.99</span>
</div>
{/*  Quantity Stepper  */}
<div className="flex items-center bg-primary text-on-primary rounded-full px-1 py-1 shadow-md shrink-0 select-none">
<button aria-label="Decrease quantity" className="stepper-btn stepper-dec w-6 h-6 rounded-full flex items-center justify-center active:scale-75 transition-transform" type="button">
<span className="material-symbols-outlined text-[16px] font-black">remove</span>
</button>
<span className="stepper-count font-label-action text-label-action px-2 text-on-primary min-w-[18px] text-center">1</span>
<button aria-label="Increase quantity" className="stepper-btn stepper-inc w-6 h-6 rounded-full flex items-center justify-center active:scale-75 transition-transform" type="button">
<span className="material-symbols-outlined text-[16px] font-black">add</span>
</button>
</div>
</div>
</div>
</div>
</div>
{/*  Trust & Lightning Delivery Assurance Card  */}
<div className="rounded-2xl bg-surface-container p-space-md flex items-center gap-space-md shadow-sm">
<div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[28px]">electric_moped</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-headline-sm text-headline-sm text-on-surface">Hyperlocal Dark Stores</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Dispatched within 120 seconds from Fulton Market, Brooklyn Hub.</span>
</div>
</div>
{/*  Interactive JavaScript for Live Steppers  */}

</div></main><nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-4px_16px_rgba(18,23,20,0.06)]" data-active-classes="text-primary font-bold"><div className="flex items-center justify-around h-16 px-space-sm"><a aria-current="page" className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-0.5 transition-colors text-primary font-bold" data-path="home" href="#"><span className="material-symbols-outlined text-[24px]">home</span><span className="font-label-action text-label-action">Home</span></a><a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-0.5 text-on-surface-variant hover:text-on-surface transition-colors" data-path="categories" href="#"><span className="material-symbols-outlined text-[24px]">grid_view</span><span className="font-label-action text-label-action">Categories</span></a><a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-0.5 text-on-surface-variant hover:text-on-surface transition-colors relative" data-path="cart" href="#"><div className="relative flex items-center justify-center"><span className="material-symbols-outlined text-[24px]">shopping_cart</span><span className="absolute -top-1.5 -right-2 bg-secondary-container text-on-secondary-fixed font-label-badge text-label-badge min-w-[18px] h-[18px] px-1 rounded-full flex items-center justify-center leading-none">3</span></div><span className="font-label-action text-label-action">Cart</span></a><a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-0.5 text-on-surface-variant hover:text-on-surface transition-colors" data-path="profile" href="#"><span className="material-symbols-outlined text-[24px]">account_circle</span><span className="font-label-action text-label-action">Profile</span></a></div></nav>
    </div>
  );
}
