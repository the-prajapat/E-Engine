import React from 'react';

/**
 * StitchB2BWholesaleMarketplace
 * Stitch AI Screen: "B2B Wholesale Marketplace Dashboard"
 * STRICT RULE: Pure presentation component. Accepts callbacks and dynamic props.
 */
export default function StitchB2BWholesaleMarketplace({ onNavigate, onAction, data, ...props }) {
  return (
    <div className="stitch-screen-container w-full min-h-screen text-on-surface">
<header className="fixed top-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe"><div className="h-16 px-gutter flex items-center justify-between"><div className="flex items-center gap-space-sm"><div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-on-primary font-headline-md text-headline-md">N</div><div className="flex flex-col"><span className="font-label-md text-label-md text-on-surface leading-tight font-semibold tracking-tight">Nexus Wholesale</span><span className="font-label-sm text-label-sm text-outline leading-tight">Dealers</span></div></div><div className="flex items-center gap-space-xs"><button aria-label="Notifications" className="w-11 h-11 flex items-center justify-center relative rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"><span className="material-symbols-outlined text-[22px]">notifications</span><span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-error"></span></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm ml-1"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main className="flex-1 flex flex-col relative w-full pt-16 pb-24 bg-surface"><div className="flex flex-col w-full">
{/*  Hub & Location Indicator Bar  */}
<section className="px-gutter pt-3 pb-2 bg-surface-container-low shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5 min-w-0">
<span className="material-symbols-outlined text-[18px] text-primary shrink-0" style={{"fontVariationSettings":"'FILL' 1"}}>warehouse</span>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Supply Fulfillment Node</span>
<span className="font-label-md text-label-md text-on-surface font-semibold truncate">North East Distribution Zone</span>
</div>
</div>
<button aria-label="Change Wholesale Hub" className="shrink-0 px-2.5 py-1 bg-surface rounded-full shadow-sm text-primary font-label-sm text-label-sm font-semibold flex items-center gap-0.5 active:bg-surface-container transition-colors">
<span>Change</span>
<span className="material-symbols-outlined text-[15px]">expand_more</span>
</button>
</div>
</section>
{/*  Search & Filter Controls  */}
<section className="px-gutter pt-3 pb-2 flex flex-col gap-2.5 bg-surface-container-lowest shadow-sm">
<div className="flex items-center gap-2">
<div className="flex-1 flex items-center bg-surface-container px-3 h-11 rounded-lg gap-2 focus-within:bg-surface-container-low transition-colors shadow-inner">
<span className="material-symbols-outlined text-outline text-[20px] shrink-0">search</span>
<input className="w-full bg-transparent border-none outline-none font-body-md text-body-md text-on-surface placeholder:text-outline" placeholder="Find Local Dealers, SKU, or bulk commodities..." type="text"/>
</div>
<button className="h-11 px-3.5 bg-primary text-on-primary rounded-lg font-label-md text-label-md flex items-center gap-1.5 shadow-sm active:bg-primary-container transition-colors shrink-0">
<span className="material-symbols-outlined text-[18px]">tune</span>
<span>Filters</span>
<span className="w-5 h-5 rounded-full bg-surface text-primary font-label-sm text-label-sm flex items-center justify-center font-bold">2</span>
</button>
</div>
{/*  Category Chips Scroll  */}
<div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
<button className="px-3 py-1.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm shrink-0 font-semibold shadow-sm">
        All Dealers
      </button>
<button className="px-3 py-1.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm shrink-0 font-medium active:bg-surface-container-high transition-colors">
        Grains &amp; Staples
      </button>
<button className="px-3 py-1.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm shrink-0 font-medium active:bg-surface-container-high transition-colors">
        FMCG &amp; Beverages
      </button>
<button className="px-3 py-1.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm shrink-0 font-medium active:bg-surface-container-high transition-colors">
        Packaging
      </button>
<button className="px-3 py-1.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm shrink-0 font-medium active:bg-surface-container-high transition-colors">
        Cold Chain
      </button>
<button className="px-3 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm shrink-0 font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">verified</span>
        Net-30 Eligible
      </button>
</div>
</section>
{/*  Trade Assurance Value Proposition Strip  */}
<section className="px-gutter py-2.5">
<div className="bg-primary/5 rounded-xl p-3 flex items-center justify-between gap-3 shadow-sm">
<div className="flex items-center gap-2.5 min-w-0">
<div className="w-9 h-9 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings":"'FILL' 1"}}>verified_user</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1">
<span className="font-label-md text-label-md text-on-surface font-semibold tracking-tight truncate">Nexus B2B Trade Assurance</span>
<span className="px-1.5 py-0.2 rounded bg-primary text-on-primary font-label-sm text-[10px] uppercase font-bold tracking-wider">Protected</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">100% Escrow Protection &amp; Third-Party Quality Inspection Included</span>
</div>
</div>
<span className="material-symbols-outlined text-outline text-[18px] shrink-0">chevron_right</span>
</div>
</section>
{/*  Bulk Deals of the Day Carousel  */}
<section className="pt-2 pb-4 flex flex-col gap-2.5">
<div className="px-gutter flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-error animate-pulse"></div>
<h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">Bulk Deals of the Day</h2>
<div className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">timer</span>
<span>Ends in 06h 42m</span>
</div>
</div>
<a className="font-label-sm text-label-sm text-primary font-semibold hover:underline" href="#">View All</a>
</div>
<div className="flex items-stretch gap-3 overflow-x-auto px-gutter pb-2 no-scrollbar">
{/*  Deal 1  */}
<article className="w-72 shrink-0 bg-surface-container-lowest rounded-xl p-3.5 flex flex-col justify-between shadow-md relative overflow-hidden">
<div className="flex flex-col gap-2">
<div className="relative w-full h-28 rounded-lg overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Commercial metal bulk tins of refined pure soybean oil stacked neatly on industrial wooden freight pallets inside a state of the art bright distribution center warehouse." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr5cfKenB5rY10YHDIJh8y2mJNQNxvgVeuvP2OphD2HecajwsobAQEEaVUSkCSalge4Use6M9dxG9KvDSlt1sioOxmxn1rCl9YwzzK_TfCGWqAyZKlO2KZTdju9k5vPsLbYM-ukJAXwg684164p3iGoWSHO02qgX91vgSovPh6mbMrX1UwwGcC1UtQu4Fbs8hChU8GuLuo1aDk_Bo9ageEyeW1h7PLRfUa9HhNGYBi6AT9_6ehZPgA"/>
<div className="absolute top-2 left-2 bg-primary text-on-primary px-2 py-0.5 rounded font-label-sm text-label-sm font-bold shadow-sm">
              -18% on 50+
            </div>
<div className="absolute top-2 right-2 bg-surface/90 backdrop-blur-sm text-on-surface px-1.5 py-0.5 rounded font-label-sm text-[11px] font-semibold flex items-center gap-0.5">
<span className="material-symbols-outlined text-primary text-[13px]" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
              Verified
            </div>
</div>
<div>
<span className="font-label-sm text-label-sm text-outline font-medium uppercase tracking-wider">Edible Oils</span>
<h3 className="font-label-lg text-label-lg text-on-surface font-bold leading-snug truncate">Refined Soybean Oil (15L Tins)</h3>
</div>
<div className="bg-surface-container-low p-2 rounded-lg flex items-baseline justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline">Bulk Tier</span>
<div className="flex items-baseline gap-1">
<span className="font-headline-md text-headline-md text-primary font-bold">$18.50</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">/tin</span>
</div>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-outline block">MOQ: 25 units</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold">420 avail</span>
</div>
</div>
</div>
<button className="mt-3 w-full py-2 bg-primary text-on-primary rounded-lg font-label-md text-label-md font-semibold flex items-center justify-center gap-1 active:bg-primary-container transition-colors shadow-sm">
<span className="material-symbols-outlined text-[17px]">bolt</span>
<span>Claim Bulk Lot</span>
</button>
</article>
{/*  Deal 2  */}
<article className="w-72 shrink-0 bg-surface-container-lowest rounded-xl p-3.5 flex flex-col justify-between shadow-md relative overflow-hidden">
<div className="flex flex-col gap-2">
<div className="relative w-full h-28 rounded-lg overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Pristine stacks of heavyweight burlap and woven poly bags filled with premium aged aromatic organic Basmati rice arranged inside a spotless dry commodity warehouse depot." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoAekVtKx30stj_UT5Ej9ahOlptizqUoF8x1agb3RLGAxBX5FhmVPMJ0iic7pXaiCoenqFAHRmAE2ZAEoTUBOWYFyXt7cFyuI0rUKptaFzML92bp4ceOrqwZUFiLNarYh4fl39aeVV2Ibsgbc0c_MFQ1Af8oUfiA0LQ1UaH_d2rTdiYEFWRdhDGYVzkH4JmPfIDO3DZF7Idle9y3rvm3H6XDHzamgo6xXdaYlK7sXyrQns_XOlgE8Y"/>
<div className="absolute top-2 left-2 bg-primary text-on-primary px-2 py-0.5 rounded font-label-sm text-label-sm font-bold shadow-sm">
              -22% on 100+
            </div>
<div className="absolute top-2 right-2 bg-surface/90 backdrop-blur-sm text-on-surface px-1.5 py-0.5 rounded font-label-sm text-[11px] font-semibold flex items-center gap-0.5">
<span className="material-symbols-outlined text-secondary text-[13px]" style={{"fontVariationSettings":"'FILL' 1"}}>factory</span>
              Factory Direct
            </div>
</div>
<div>
<span className="font-label-sm text-label-sm text-outline font-medium uppercase tracking-wider">Food &amp; Staples</span>
<h3 className="font-label-lg text-label-lg text-on-surface font-bold leading-snug truncate">Organic Basmati Rice (25kg bags)</h3>
</div>
<div className="bg-surface-container-low p-2 rounded-lg flex items-baseline justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline">Bulk Tier</span>
<div className="flex items-baseline gap-1">
<span className="font-headline-md text-headline-md text-primary font-bold">$29.00</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">/bag</span>
</div>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-outline block">MOQ: 40 units</span>
<span className="font-label-sm text-label-sm text-error font-semibold flex items-center justify-end gap-0.5">
<span className="material-symbols-outlined text-[13px]">trending_up</span>
                Fast Moving
              </span>
</div>
</div>
</div>
<button className="mt-3 w-full py-2 bg-primary text-on-primary rounded-lg font-label-md text-label-md font-semibold flex items-center justify-center gap-1 active:bg-primary-container transition-colors shadow-sm">
<span className="material-symbols-outlined text-[17px]">bolt</span>
<span>Claim Bulk Lot</span>
</button>
</article>
{/*  Deal 3  */}
<article className="w-72 shrink-0 bg-surface-container-lowest rounded-xl p-3.5 flex flex-col justify-between shadow-md relative overflow-hidden">
<div className="flex flex-col gap-2">
<div className="relative w-full h-28 rounded-lg overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Heavy multi-ply industrial paper sacks of white refined granulated pure cane sugar palletized and shrink-wrapped under industrial skylight illumination." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpW4EXkzbNm29_CFdSOic5gajgeLivCobaGyMoTkfhLm7qno8XpeERyYdrA4s50A6qG-PwEZLNRcmFAKCqlrLpcwZRmrITMti4nf2gzMA-Dhcd99nszQwCyR3Q4Ek32imTlhxyrvOOz19SkWE4P7R_5oJN9mpzbwvIzopELR4aiCU6zS7LgxsDpi15iFu0CqyxAKlOHsT0QnwZcOOohASj4uR6pYPsRb0rDr4o0dljDcT3AarzJ8qa"/>
<div className="absolute top-2 left-2 bg-primary text-on-primary px-2 py-0.5 rounded font-label-sm text-label-sm font-bold shadow-sm">
              -15% bulk lot
            </div>
<div className="absolute top-2 right-2 bg-surface/90 backdrop-blur-sm text-on-surface px-1.5 py-0.5 rounded font-label-sm text-[11px] font-semibold flex items-center gap-0.5">
<span className="material-symbols-outlined text-primary text-[13px]" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
              In Stock
            </div>
</div>
<div>
<span className="font-label-sm text-label-sm text-outline font-medium uppercase tracking-wider">Dry Ingredients</span>
<h3 className="font-label-lg text-label-lg text-on-surface font-bold leading-snug truncate">A-Grade Granulated Sugar (50kg)</h3>
</div>
<div className="bg-surface-container-low p-2 rounded-lg flex items-baseline justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline">Bulk Tier</span>
<div className="flex items-baseline gap-1">
<span className="font-headline-md text-headline-md text-primary font-bold">$41.20</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">/bag</span>
</div>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-outline block">MOQ: 30 units</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Ready to Ship</span>
</div>
</div>
</div>
<button className="mt-3 w-full py-2 bg-primary text-on-primary rounded-lg font-label-md text-label-md font-semibold flex items-center justify-center gap-1 active:bg-primary-container transition-colors shadow-sm">
<span className="material-symbols-outlined text-[17px]">bolt</span>
<span>Claim Bulk Lot</span>
</button>
</article>
</div>
</section>
{/*  Feed Header: Verified Local Dealers  */}
<section className="px-gutter pt-2 pb-2">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">Verified Local Dealers</h2>
<span className="font-body-sm text-body-sm text-on-surface-variant">38 Active in your region</span>
</div>
<button className="px-2.5 py-1.5 bg-surface-container-low rounded-lg text-on-surface font-label-sm text-label-sm font-semibold flex items-center gap-1 shadow-sm active:bg-surface-container">
<span className="material-symbols-outlined text-[16px] text-outline">sort</span>
<span>Rating &amp; Volume</span>
<span className="material-symbols-outlined text-[14px]">arrow_drop_down</span>
</button>
</div>
</section>
{/*  Main Feed: Verified Dealer List Cards  */}
<section className="px-gutter flex flex-col gap-3.5 pb-6">
{/*  Card 1: Apex Agro Logistics & Milling Co.  */}
<article className="bg-surface-container-lowest rounded-xl p-4 shadow-md flex flex-col gap-3">
{/*  Dealer Header  */}
<div className="flex items-start justify-between gap-2.5">
<div className="flex gap-2.5 min-w-0">
<div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-on-primary shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[24px]">agriculture</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1 flex-wrap">
<h3 className="font-label-lg text-label-lg text-on-surface font-bold tracking-tight truncate">Apex Agro Logistics &amp; Milling Co.</h3>
</div>
<div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
<span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-surface-container text-primary font-label-sm text-[11px] font-semibold">
<span className="material-symbols-outlined text-[13px]" style={{"fontVariationSettings":"'FILL' 1"}}>verified</span>
                Verified B2B Dealer
              </span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[11px] font-bold">
                Tier 1 Supplier
              </span>
</div>
</div>
</div>
<button aria-label="Save Dealer" className="text-outline hover:text-primary transition-colors p-1">
<span className="material-symbols-outlined text-[20px]">bookmark_border</span>
</button>
</div>
{/*  Rating & Operational Metrics  */}
<div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant flex-wrap py-0.5">
<div className="flex items-center gap-0.5 text-primary font-bold">
<span className="material-symbols-outlined text-[15px]" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span>4.9</span>
<span className="text-outline font-normal">(340+ orders)</span>
</div>
<span className="text-outline">•</span>
<div className="flex items-center gap-1 font-semibold text-on-surface">
<span className="material-symbols-outlined text-[15px] text-secondary">schedule</span>
<span>99.4% on-time dispatch</span>
</div>
<span className="text-outline">•</span>
<span className="text-outline">1.4 miles away</span>
</div>
{/*  Core Categories Chips  */}
<div className="flex items-center gap-1.5 flex-wrap">
<span className="px-2 py-0.5 bg-surface-container-low rounded font-label-sm text-label-sm text-on-surface">Commercial Grains</span>
<span className="px-2 py-0.5 bg-surface-container-low rounded font-label-sm text-label-sm text-on-surface">Edible Oils</span>
<span className="px-2 py-0.5 bg-surface-container-low rounded font-label-sm text-label-sm text-on-surface">Dry Staples</span>
</div>
{/*  Key Metrics Dense Grid  */}
<div className="grid grid-cols-3 gap-2 bg-surface-container-low p-2.5 rounded-lg">
<div className="flex flex-col">
<span className="font-label-sm text-[11px] text-outline font-medium">Min Order (MOQ)</span>
<span className="font-label-sm text-label-sm text-primary font-bold truncate">50 units / $1,500</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-[11px] text-outline font-medium">Payment Terms</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold truncate">Net-30 / Escrow</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-[11px] text-outline font-medium">Lead Time</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold truncate">24-48 Hours</span>
</div>
</div>
{/*  Action Row  */}
<div className="grid grid-cols-2 gap-2 pt-0.5">
<button className="h-10 bg-primary text-on-primary rounded-lg font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 shadow-sm active:bg-primary-container transition-colors">
<span className="material-symbols-outlined text-[18px]">forum</span>
<span>Chat / Negotiate</span>
</button>
<button className="h-10 bg-surface-container text-on-surface rounded-lg font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 active:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-[18px] text-primary">request_quote</span>
<span>Request Quote</span>
</button>
</div>
</article>
{/*  Card 2: Metro Wholesale FMCG Distribution  */}
<article className="bg-surface-container-lowest rounded-xl p-4 shadow-md flex flex-col gap-3">
{/*  Dealer Header  */}
<div className="flex items-start justify-between gap-2.5">
<div className="flex gap-2.5 min-w-0">
<div className="w-12 h-12 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[24px]">local_shipping</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1 flex-wrap">
<h3 className="font-label-lg text-label-lg text-on-surface font-bold tracking-tight truncate">Metro Wholesale FMCG Distribution</h3>
</div>
<div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
<span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-surface-container text-primary font-label-sm text-[11px] font-semibold">
<span className="material-symbols-outlined text-[13px]" style={{"fontVariationSettings":"'FILL' 1"}}>verified</span>
                Verified B2B Dealer
              </span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[11px] font-bold">
                Direct Importer
              </span>
</div>
</div>
</div>
<button aria-label="Save Dealer" className="text-outline hover:text-primary transition-colors p-1">
<span className="material-symbols-outlined text-[20px]">bookmark_border</span>
</button>
</div>
{/*  Rating & Operational Metrics  */}
<div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant flex-wrap py-0.5">
<div className="flex items-center gap-0.5 text-primary font-bold">
<span className="material-symbols-outlined text-[15px]" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span>4.8</span>
<span className="text-outline font-normal">(820+ orders)</span>
</div>
<span className="text-outline">•</span>
<div className="flex items-center gap-1 font-semibold text-on-surface">
<span className="material-symbols-outlined text-[15px] text-secondary">schedule</span>
<span>98.9% on-time dispatch</span>
</div>
<span className="text-outline">•</span>
<span className="text-outline">3.2 miles away</span>
</div>
{/*  Core Categories Chips  */}
<div className="flex items-center gap-1.5 flex-wrap">
<span className="px-2 py-0.5 bg-surface-container-low rounded font-label-sm text-label-sm text-on-surface">Beverages</span>
<span className="px-2 py-0.5 bg-surface-container-low rounded font-label-sm text-label-sm text-on-surface">Packaged Foods</span>
<span className="px-2 py-0.5 bg-surface-container-low rounded font-label-sm text-label-sm text-on-surface">Confectionery</span>
</div>
{/*  Key Metrics Dense Grid  */}
<div className="grid grid-cols-3 gap-2 bg-surface-container-low p-2.5 rounded-lg">
<div className="flex flex-col">
<span className="font-label-sm text-[11px] text-outline font-medium">Min Order (MOQ)</span>
<span className="font-label-sm text-label-sm text-primary font-bold truncate">100 cases / $2,200</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-[11px] text-outline font-medium">Payment Terms</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold truncate">Net-45 Available</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-[11px] text-outline font-medium">Lead Time</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold truncate">Same Day Dispatch</span>
</div>
</div>
{/*  Action Row  */}
<div className="grid grid-cols-2 gap-2 pt-0.5">
<button className="h-10 bg-primary text-on-primary rounded-lg font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 shadow-sm active:bg-primary-container transition-colors">
<span className="material-symbols-outlined text-[18px]">forum</span>
<span>Chat / Negotiate</span>
</button>
<button className="h-10 bg-surface-container text-on-surface rounded-lg font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 active:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-[18px] text-primary">request_quote</span>
<span>Request Quote</span>
</button>
</div>
</article>
{/*  Card 3: Pinnacle Packaging & Container Supply  */}
<article className="bg-surface-container-lowest rounded-xl p-4 shadow-md flex flex-col gap-3">
{/*  Dealer Header  */}
<div className="flex items-start justify-between gap-2.5">
<div className="flex gap-2.5 min-w-0">
<div className="w-12 h-12 rounded-xl bg-tertiary-container text-on-tertiary-container flex items-center justify-center shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[24px]">inventory_2</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1 flex-wrap">
<h3 className="font-label-lg text-label-lg text-on-surface font-bold tracking-tight truncate">Pinnacle Packaging &amp; Supply</h3>
</div>
<div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
<span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-surface-container text-primary font-label-sm text-[11px] font-semibold">
<span className="material-symbols-outlined text-[13px]" style={{"fontVariationSettings":"'FILL' 1"}}>verified</span>
                Verified B2B Dealer
              </span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-[11px] font-bold">
                ISO 9001 Certified
              </span>
</div>
</div>
</div>
<button aria-label="Save Dealer" className="text-outline hover:text-primary transition-colors p-1">
<span className="material-symbols-outlined text-[20px]">bookmark_border</span>
</button>
</div>
{/*  Rating & Operational Metrics  */}
<div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant flex-wrap py-0.5">
<div className="flex items-center gap-0.5 text-primary font-bold">
<span className="material-symbols-outlined text-[15px]" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span>4.95</span>
<span className="text-outline font-normal">(1,150+ orders)</span>
</div>
<span className="text-outline">•</span>
<div className="flex items-center gap-1 font-semibold text-on-surface">
<span className="material-symbols-outlined text-[15px] text-secondary">schedule</span>
<span>99.8% on-time</span>
</div>
<span className="text-outline">•</span>
<span className="text-outline">5.0 miles away</span>
</div>
{/*  Core Categories Chips  */}
<div className="flex items-center gap-1.5 flex-wrap">
<span className="px-2 py-0.5 bg-surface-container-low rounded font-label-sm text-label-sm text-on-surface">Corrugated Boxes</span>
<span className="px-2 py-0.5 bg-surface-container-low rounded font-label-sm text-label-sm text-on-surface">Biodegradable Pouches</span>
<span className="px-2 py-0.5 bg-surface-container-low rounded font-label-sm text-label-sm text-on-surface">Tape</span>
</div>
{/*  Key Metrics Dense Grid  */}
<div className="grid grid-cols-3 gap-2 bg-surface-container-low p-2.5 rounded-lg">
<div className="flex flex-col">
<span className="font-label-sm text-[11px] text-outline font-medium">Min Order (MOQ)</span>
<span className="font-label-sm text-label-sm text-primary font-bold truncate">500 units / $850</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-[11px] text-outline font-medium">Payment Terms</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold truncate">Net-30 / Credit Card</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-[11px] text-outline font-medium">Lead Time</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold truncate">2 Business Days</span>
</div>
</div>
{/*  Action Row  */}
<div className="grid grid-cols-2 gap-2 pt-0.5">
<button className="h-10 bg-primary text-on-primary rounded-lg font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 shadow-sm active:bg-primary-container transition-colors">
<span className="material-symbols-outlined text-[18px]">forum</span>
<span>Chat / Negotiate</span>
</button>
<button className="h-10 bg-surface-container text-on-surface rounded-lg font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 active:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-[18px] text-primary">request_quote</span>
<span>Request Quote</span>
</button>
</div>
</article>
</section>
{/*  Floating Quick Bulk RFQ Bar for Procurement Officers  */}
<div className="sticky bottom-0 w-full px-gutter py-2.5 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_-4px_16px_rgba(15,23,42,0.06)] flex items-center justify-between gap-3">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold font-label-sm text-label-sm">
        RFQ
      </div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-bold leading-tight">Fast Custom Procurement</span>
<span className="font-body-sm text-[11px] text-on-surface-variant leading-tight">Broadcast RFP to 38 verified regional distributors</span>
</div>
</div>
<button className="px-4 py-2 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm font-semibold shrink-0 shadow-sm active:bg-primary-container transition-transform active:scale-95">
      Post RFP
    </button>
</div>
</div></main><nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface-container-lowest/80 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.05)]" data-active-classes="text-primary font-semibold"><div className="flex justify-around items-center h-16 px-gutter-mobile"><a aria-current="page" className="flex flex-col items-center justify-center min-w-[56px] h-12 transition-colors gap-0.5 text-primary font-semibold" data-path="dealers" href="#"><span className="material-symbols-outlined text-[24px]">storefront</span><span className="font-label-sm text-label-sm">Dealers</span></a><a className="flex flex-col items-center justify-center min-w-[56px] h-12 text-on-surface-variant hover:text-on-surface transition-colors gap-0.5" data-path="orders" href="#"><span className="material-symbols-outlined text-[24px]">assignment</span><span className="font-label-sm text-label-sm">Orders</span></a><a className="flex flex-col items-center justify-center min-w-[56px] h-12 text-on-surface-variant hover:text-on-surface transition-colors gap-0.5" data-path="rfq-quotes" href="#"><span className="material-symbols-outlined text-[24px]">request_quote</span><span className="font-label-sm text-label-sm">RFQ / Quotes</span></a><a className="flex flex-col items-center justify-center min-w-[56px] h-12 text-on-surface-variant hover:text-on-surface transition-colors gap-0.5" data-path="account" href="#"><span className="material-symbols-outlined text-[24px]">domain</span><span className="font-label-sm text-label-sm">Account</span></a></div></nav>
    </div>
  );
}
