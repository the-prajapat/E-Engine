import React, { useState, useEffect } from 'react';
import {
  HeaderBar,
  ProductCard,
  ProjectCard,
  LoadingSkeleton,
} from '../../ui-ux-design/index.js';
import {
  fetchUserDetails,
  fetchProjectList,
  fetchProductCatalog,
  fetchStitchProjectDetails,
} from '../../../shared-core/api-client.js';
import { useGlobalBridge } from '../../../shared-core/global-bridge.js';

/**
 * WholesaleHome (Smart Container Page)
 * Fully fluid, mobile-first B2B Marketplace Hub with safe-area padding and 44px+ controls.
 */
export default function WholesaleHome({ onNavigateTab }) {
  const { config: sharedConfig } = useGlobalBridge();
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([]);
  const [wholesaleProducts, setWholesaleProducts] = useState([]);
  const [stitchProject, setStitchProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    let isMounted = true;

    async function loadWholesaleData() {
      try {
        setLoading(true);
        const [userData, projectData, catalogData, stitchData] = await Promise.all([
          fetchUserDetails('current'),
          fetchProjectList(),
          fetchProductCatalog({ mode: 'wholesale' }),
          fetchStitchProjectDetails('e engine'),
        ]);

        if (isMounted) {
          setUser(userData);
          setProjects(projectData || []);
          setWholesaleProducts(catalogData || []);
          setStitchProject(stitchData || null);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Unable to connect to B2B Wholesale Engine');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadWholesaleData();
    return () => {
      isMounted = false;
    };
  }, []);

  const categories = ['all', 'Warehousing & Logistics', 'Electronics & Components', 'Packaging', 'Machinery & Tools'];

  const filteredProducts = wholesaleProducts.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category?.toLowerCase() === selectedCategory.toLowerCase();
  });

  return (
    <div className="w-full flex-1 flex flex-col gap-3 pb-28 select-none overflow-y-auto">
      {/* ─── Production Header Bar ───────────────────────────────────── */}
      <HeaderBar
        title="B2B Wholesale Hub"
        subtitle={`GSTIN: ${user?.businessGstin || '08AAAAA0000A1Z5'} • Verified`}
        userName={user?.name || 'Enterprise'}
        onProfileClick={() => onNavigateTab && onNavigateTab('profile')}
        onSearchClick={() => onNavigateTab && onNavigateTab('search')}
      />

      {/* ─── Enterprise Banner ───────────────────────────────────────── */}
      <div className="px-4 sm:px-5">
        <div className="w-full bg-slate-900 rounded-2xl p-4 text-white shadow-sm border border-slate-800 relative overflow-hidden flex flex-col gap-2.5">
          <div className="relative z-10 flex flex-col gap-1">
            <div className="self-start inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full">
              <span>●</span> VERIFIED B2B MERCHANT PORTAL
            </div>
            <h2 className="text-base font-extrabold tracking-tight">
              Direct Manufacturer Lots
            </h2>
            <p className="text-[11px] text-slate-300">
              Minimum Order Quantities (MOQ) with automated GST Input Invoicing
            </p>
          </div>
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px]">
            <span className="text-slate-400">Credit Line Available:</span>
            <span className="font-extrabold text-emerald-400">₹3,45,000 / ₹5,00,000</span>
          </div>
        </div>
      </div>

      {/* ─── Category Filter Chips ────────────────────────────────────── */}
      <div className="px-4 sm:px-5 overflow-x-auto no-scrollbar flex items-center gap-2 py-0.5">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              type="button"
              className={`min-h-[44px] px-3.5 rounded-xl text-xs font-bold shrink-0 transition-all active:scale-95 border ${
                isActive
                  ? 'bg-blue-700 text-white border-blue-700 shadow-xs'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat === 'all' ? 'All B2B Lots' : cat}
            </button>
          );
        })}
      </div>

      {/* ─── Bulk Product Catalog ─────────────────────────────────────── */}
      <div className="px-4 sm:px-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
            Wholesale Catalog
            <span className="text-slate-400 ml-1.5 font-semibold">({filteredProducts.length})</span>
          </h3>
          <button
            onClick={() => onNavigateTab && onNavigateTab('messages')}
            type="button"
            className="text-[11px] font-bold text-blue-700 hover:text-blue-900 flex items-center gap-0.5 min-h-[44px]"
          >
            <span>Live Deal Room</span>
            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </button>
        </div>

        {loading && (
          <LoadingSkeleton count={3} message="Syncing B2B inventory and MOQ tiers from MCB..." />
        )}

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl">
            ⚠️ {error}
          </div>
        )}

        {!loading && !error && (
          <div className="w-full grid grid-cols-2 gap-3">
            {filteredProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onAddToCart={(p) => alert(`Bulk Lot Order initiated for: ${p.title} (MOQ: ${p.moq || 5} units)`)}
              />
            ))}
          </div>
        )}

        {/* ─── Verified Dealers Directory (Bridge Synchronized) ───── */}
        <div className="flex flex-col gap-2.5 pt-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
              Verified Suppliers &amp; Dealers
            </h3>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              Live Vetted
            </span>
          </div>

          <div className="w-full flex flex-col gap-2">
            {(sharedConfig?.dealersList || []).map((dealer) => (
              <div
                key={dealer.id}
                className="p-3 bg-white border border-slate-200/80 rounded-2xl shadow-xs flex flex-col gap-2"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1">
                      {dealer.name}
                      {dealer.verified && (
                        <span className="material-symbols-outlined text-emerald-600 text-sm">verified</span>
                      )}
                    </h4>
                    <p className="text-[10px] text-slate-500 mt-0.5">{dealer.category} • {dealer.city}</p>
                  </div>
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                    ★ {dealer.rating}
                  </span>
                </div>

                {/* Badges Pill Row */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-slate-100">
                  {dealer.verified && (
                    <span className="inline-flex items-center gap-0.5 text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                      <span className="material-symbols-outlined text-[11px]">verified</span> Verified Dealer
                    </span>
                  )}
                  {dealer.fastDispatch && (
                    <span className="inline-flex items-center gap-0.5 text-[9px] font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">
                      <span className="material-symbols-outlined text-[11px]">bolt</span> 10m Express
                    </span>
                  )}
                  {dealer.isoCertified && (
                    <span className="inline-flex items-center gap-0.5 text-[9px] font-bold text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded border border-purple-200">
                      <span className="material-symbols-outlined text-[11px]">shield_with_heart</span> ISO 9001
                    </span>
                  )}
                  {dealer.qualityAssured && (
                    <span className="inline-flex items-center gap-0.5 text-[9px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                      <span className="material-symbols-outlined text-[11px]">workspace_premium</span> Assured
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Active Enterprise Projects ──────────────────────────────── */}
        <div className="flex flex-col gap-2.5 pt-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
              Active Project Portfolios
            </h3>
            <span className="text-[10px] font-bold text-slate-500">
              {projects.length} Active Contracts
            </span>
          </div>

          <div className="w-full flex flex-col gap-2.5">
            {projects.map((proj) => (
              <ProjectCard
                key={proj.id}
                project={proj}
                onSelectProject={(p) => alert(`Selected B2B Project: ${p.name} (Budget: ₹${Number(p.budget).toLocaleString('en-IN')})`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
