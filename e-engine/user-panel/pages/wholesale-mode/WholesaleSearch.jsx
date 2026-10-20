import React, { useState, useEffect } from 'react';
import { ProductCard, LoadingSkeleton } from '../../ui-ux-design/index.js';
import { fetchProductCatalog } from '../../../shared-core/api-client.js';

/**
 * WholesaleSearch (Smart Container Page)
 * Fully fluid, mobile-first B2B Search with safe padding and responsive controls.
 */
export default function WholesaleSearch() {
  const [query, setQuery] = useState('');
  const [maxMoq, setMaxMoq] = useState('all');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadCatalog() {
      try {
        setLoading(true);
        const data = await fetchProductCatalog({ mode: 'wholesale' });
        if (isMounted) {
          setProducts(data || []);
        }
      } catch (err) {
        if (isMounted) setProducts([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadCatalog();
    return () => {
      isMounted = false;
    };
  }, []);

  const filtered = products.filter((p) => {
    const matchesQuery =
      !query ||
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.category?.toLowerCase().includes(query.toLowerCase());
    const matchesMoq =
      maxMoq === 'all' ||
      (maxMoq === 'low' && (p.moq || 0) <= 5) ||
      (maxMoq === 'medium' && (p.moq || 0) <= 10);
    return matchesQuery && matchesMoq;
  });

  return (
    <div className="w-full flex-1 flex flex-col gap-3 pb-28 select-none overflow-y-auto">
      {/* ─── Search Header ───────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 px-4 sm:px-5 py-3 shadow-xs flex flex-col gap-2">
        <h1 className="text-base font-extrabold text-slate-900 tracking-tight">
          B2B Wholesale Search
        </h1>
        <div className="relative flex items-center w-full">
          <span className="material-symbols-outlined absolute left-3.5 text-slate-400 text-[20px]">
            search
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by lot title, category, or spec..."
            className="w-full min-h-[44px] pl-10 pr-9 bg-slate-50 border border-slate-200/80 rounded-2xl text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all shadow-xs"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              type="button"
              className="absolute right-3 w-7 h-7 flex items-center justify-center text-slate-400 hover:text-slate-600 text-xs font-bold"
            >
              ✕
            </button>
          )}
        </div>
      </header>

      {/* ─── MOQ Filter Strip ────────────────────────────────────────── */}
      <div className="px-4 sm:px-5 flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
        <span className="text-[11px] font-bold text-slate-500 shrink-0">MOQ Filter:</span>
        {[
          { id: 'all', label: 'Any MOQ' },
          { id: 'low', label: 'MOQ ≤ 5' },
          { id: 'medium', label: 'MOQ ≤ 10' },
        ].map((f) => (
          <button
            key={f.id}
            onClick={() => setMaxMoq(f.id)}
            type="button"
            className={`min-h-[38px] px-3.5 rounded-xl text-xs font-bold shrink-0 transition-all border ${
              maxMoq === f.id
                ? 'bg-blue-700 text-white border-blue-700 shadow-xs'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* ─── Results List ────────────────────────────────────────────── */}
      <div className="px-4 sm:px-5 flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
            Verified Lots ({filtered.length})
          </span>
          <span className="text-[11px] font-semibold text-slate-500">
            GST Input Eligible
          </span>
        </div>

        {loading ? (
          <LoadingSkeleton count={3} message="Searching wholesale database..." />
        ) : filtered.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col items-center gap-1">
            <span className="text-3xl">📦</span>
            <p className="text-xs font-bold text-slate-800 mt-1">No wholesale lots match</p>
            <p className="text-[11px] text-slate-400">Try loosening the MOQ filter or search query</p>
          </div>
        ) : (
          <div className="w-full grid grid-cols-2 gap-3">
            {filtered.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                onAddToCart={(p) => alert(`Inquiry initiated for ${p.title}`)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
