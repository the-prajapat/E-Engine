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
} from '../../backend-engine/api-integration/api-client.js';

/**
 * WholesaleHome (Smart Container Page)
 * ISSUE 1, 2, 4, 5: B2B Marketplace Hub with dealer cards, MOQ, tiered lot pricing,
 * project portfolio, and zero-loop state safety.
 */
export default function WholesaleHome({ onNavigateTab }) {
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
    <div className="w-full flex flex-col pb-24 select-none">
      {/* ─── Production Header Bar ───────────────────────────────────── */}
      <HeaderBar
        title="B2B Wholesale Hub"
        subtitle={`GSTIN: ${user?.businessGstin || '08AAAAA0000A1Z5'} • Verified`}
        userName={user?.name || 'Enterprise'}
        onProfileClick={() => onNavigateTab && onNavigateTab('profile')}
        onSearchClick={() => onNavigateTab && onNavigateTab('search')}
      />

      {/* ─── Enterprise Banner ───────────────────────────────────────── */}
      <div className="px-4 pt-3 pb-1">
        <div className="bg-slate-900 rounded-2xl p-4 text-white shadow-sm border border-slate-800 relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full mb-1.5">
              <span>●</span> VERIFIED B2B MERCHANT PORTAL
            </div>
            <h2 className="text-base font-extrabold tracking-tight">
              Direct Manufacturer Lots
            </h2>
            <p className="text-[11px] text-slate-300 mt-0.5">
              Minimum Order Quantities (MOQ) with automated GST Input Invoicing
            </p>
          </div>
          <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between text-[11px]">
            <span className="text-slate-400">Credit Line Available:</span>
            <span className="font-extrabold text-emerald-400">₹3,45,000 / ₹5,00,000</span>
          </div>
        </div>
      </div>

      {/* ─── Category Filter Chips ────────────────────────────────────── */}
      <div className="px-4 py-3 overflow-x-auto no-scrollbar flex items-center gap-2">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              type="button"
              className={`min-h-[44px] px-3.5 rounded-xl text-xs font-bold shrink-0 transition-all active:scale-95 border ${
                isActive
                  ? 'bg-blue-700 text-white border-blue-700 shadow-sm'
                  : 'bg-white text-slate-600 border-slate-200/80 hover:bg-slate-50'
              }`}
            >
              {cat === 'all' ? 'All B2B Lots' : cat}
            </button>
          );
        })}
      </div>

      {/* ─── Bulk Product Catalog ─────────────────────────────────────── */}
      <div className="px-4 pt-1">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
            Wholesale Catalog
            <span className="text-slate-400 ml-1.5 font-semibold">({filteredProducts.length})</span>
          </h3>
          <button
            onClick={() => onNavigateTab && onNavigateTab('messages')}
            type="button"
            className="text-[11px] font-bold text-blue-700 hover:text-blue-900 flex items-center gap-0.5"
          >
            <span>Live Deal Room</span>
            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </button>
        </div>

        {loading && (
          <LoadingSkeleton count={3} message="Syncing B2B inventory and MOQ tiers from MCB..." />
        )}

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl mb-3">
            ⚠️ {error}
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-2 gap-3 mb-5">
            {filteredProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onAddToCart={(p) => alert(`Bulk Lot Order initiated for: ${p.title} (MOQ: ${p.moq || 5} units)`)}
              />
            ))}
          </div>
        )}

        {/* ─── Active Enterprise Projects ──────────────────────────────── */}
        <div className="mb-2">
          <div className="flex items-center justify-between mb-2.5">
            <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
              Active Project Portfolios
            </h3>
            <span className="text-[10px] font-bold text-slate-500">
              {projects.length} Active Contracts
            </span>
          </div>

          <div className="flex flex-col gap-2.5">
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
