import React, { useState, useEffect } from 'react';
import { ProductCard, LoadingSkeleton } from '../../ui-ux-design/index.js';
import { fetchProductCatalog } from '../../../shared-core/api-client.js';

const CATEGORY_AISLES = [
  { id: 'all', title: 'All Aisles', icon: 'grid_view', bg: 'bg-blue-50 text-blue-700' },
  { id: 'electronics', title: 'Electronics', icon: 'devices', bg: 'bg-indigo-50 text-indigo-700' },
  { id: 'home & office', title: 'Home & Office', icon: 'desk', bg: 'bg-emerald-50 text-emerald-700' },
  { id: 'lifestyle', title: 'Lifestyle', icon: 'diamond', bg: 'bg-purple-50 text-purple-700' },
  { id: 'accessories', title: 'Accessories', icon: 'watch', bg: 'bg-amber-50 text-amber-700' },
];

/**
 * RetailCategories (Smart Container Page)
 * Fully fluid, mobile-first categories browser with safe padding and responsive aisles.
 */
export default function RetailCategories({ cartItems = {}, onUpdateCart }) {
  const [activeAisle, setActiveAisle] = useState('all');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      try {
        setLoading(true);
        const data = await fetchProductCatalog({ mode: 'retail' });
        if (isMounted) {
          setProducts(data || []);
        }
      } catch (err) {
        if (isMounted) setProducts([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadData();
    return () => {
      isMounted = false;
    };
  }, []);

  const filtered = products.filter((p) => {
    if (activeAisle === 'all') return true;
    return p.category?.toLowerCase() === activeAisle.toLowerCase();
  });

  return (
    <div className="w-full flex-1 flex flex-col gap-3 pb-28 select-none overflow-y-auto">
      {/* ─── Header ──────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 px-4 sm:px-5 py-3 shadow-xs">
        <h1 className="text-base font-extrabold text-slate-900 tracking-tight">
          Explore Categories
        </h1>
        <p className="text-[11px] font-medium text-slate-500">
          Browse by specialized department &amp; curated aisles
        </p>
      </header>

      {/* ─── Aisle Tiles Grid ────────────────────────────────────────── */}
      <div className="px-4 sm:px-5 flex flex-col gap-3">
        <div className="w-full grid grid-cols-2 gap-2.5">
          {CATEGORY_AISLES.map((aisle) => {
            const isSelected = activeAisle === aisle.id;
            return (
              <button
                key={aisle.id}
                onClick={() => setActiveAisle(aisle.id)}
                type="button"
                className={`w-full p-3 rounded-2xl border text-left flex items-center gap-2.5 transition-all active:scale-95 min-h-[52px] ${
                  isSelected
                    ? 'bg-blue-700 text-white border-blue-700 shadow-xs'
                    : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-white/20 text-white' : aisle.bg
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {aisle.icon}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-xs font-bold block truncate">
                    {aisle.title}
                  </span>
                  <span
                    className={`text-[10px] font-medium block truncate ${
                      isSelected ? 'text-blue-100' : 'text-slate-400'
                    }`}
                  >
                    10-min delivery
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* ─── Filtered Items Section ──────────────────────────────────── */}
        <div className="flex flex-col gap-2.5 pt-1">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
              {activeAisle === 'all' ? 'All Items' : activeAisle}
              <span className="text-slate-400 ml-1.5 font-semibold">({filtered.length})</span>
            </h2>
          </div>

          {loading ? (
            <LoadingSkeleton count={3} message="Loading department items..." />
          ) : (
            <div className="w-full grid grid-cols-2 gap-3">
              {filtered.map((prod) => (
                <ProductCard
                  key={prod.id}
                  product={prod}
                  quantity={cartItems[prod.id]?.quantity || 0}
                  onQuantityChange={onUpdateCart}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
