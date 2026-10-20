import React, { useState, useEffect } from 'react';
import {
  TopLocationBar,
  ProductCard,
  LoadingSkeleton,
} from '../../ui-ux-design/index.js';
import { fetchProductCatalog, fetchUserDetails } from '../../../shared-core/api-client.js';
import { useGlobalBridge } from '../../../shared-core/global-bridge.js';

const QUICK_CATEGORIES = [
  { id: 'all', label: 'All', icon: 'apps' },
  { id: 'electronics', label: 'Electronics', icon: 'headphones' },
  { id: 'home', label: 'Home & Office', icon: 'chair' },
  { id: 'lifestyle', label: 'Lifestyle', icon: 'local_mall' },
  { id: 'accessories', label: 'Accessories', icon: 'cable' },
];

/**
 * RetailHome (Smart Container Page)
 * Fully fluid, mobile-first quick commerce storefront with safe areas and gap spacing.
 */
export default function RetailHome({
  cartItems = {},
  onUpdateCart,
  onNavigateTab,
}) {
  const { config: sharedConfig } = useGlobalBridge();
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function loadRetailData() {
      try {
        setLoading(true);
        const [userData, productList] = await Promise.all([
          fetchUserDetails('current'),
          fetchProductCatalog({ mode: 'retail' }),
        ]);

        if (isMounted) {
          setUser(userData);
          setProducts(productList || []);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Unable to load retail catalog');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadRetailData();
    return () => {
      isMounted = false;
    };
  }, []);

  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      p.category?.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      !searchQuery ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalCartCount = Object.values(cartItems).reduce(
    (acc, item) => acc + (item.quantity || 0),
    0
  );
  const totalCartValue = Object.values(cartItems).reduce(
    (acc, item) => acc + (item.price || 0) * (item.quantity || 0),
    0
  );

  const handleQuantityChange = (product, newQty) => {
    if (onUpdateCart) {
      onUpdateCart(product, newQty);
    }
  };

  return (
    <div className="w-full flex-1 flex flex-col gap-3 pb-28 select-none overflow-y-auto">
      {/* ─── Top Location Bar ────────────────────────────────────────── */}
      <TopLocationBar
        address="Civil Lines, Metro Hub, Jaipur"
        eta={`${sharedConfig.slaTimerMinutes} MINS`}
        onProfileClick={() => onNavigateTab && onNavigateTab('profile')}
        onSelectAddress={() => alert(`Delivery address: Civil Lines, Jaipur (${sharedConfig.slaTimerMinutes} Mins)`)}
      />

      {/* ─── Search Bar ──────────────────────────────────────────────── */}
      <div className="px-4 sm:px-5">
        <div className="relative flex items-center w-full">
          <span className="material-symbols-outlined absolute left-3.5 text-slate-400 text-[20px]">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder='Search "earbuds", "charger", "flask"...'
            className="w-full min-h-[44px] pl-10 pr-9 bg-white border border-slate-200/90 rounded-2xl text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 shadow-xs transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              type="button"
              className="absolute right-3 w-7 h-7 flex items-center justify-center text-slate-400 hover:text-slate-600 text-xs font-bold"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* ─── Quick Commerce Promo Banner ─────────────────────────────── */}
      <div className="px-4 sm:px-5">
        <div className="w-full bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 rounded-2xl p-4 text-white shadow-sm relative overflow-hidden">
          <div className="relative z-10 flex flex-col gap-1">
            <div className="self-start inline-flex items-center gap-1 bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full shadow-xs">
              ⚡ HYPERLOCAL FLASH SALE
            </div>
            <h2 className="text-sm sm:text-base font-extrabold tracking-tight">
              Get 20% OFF on Tech &amp; Essentials
            </h2>
            <p className="text-[11px] text-blue-100">
              Guaranteed delivery in {sharedConfig.slaTimerMinutes} minutes to Civil Lines, Jaipur
            </p>
          </div>
          {/* Subtle background glow */}
          <div className="absolute -right-4 -bottom-6 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none" />
        </div>
      </div>

      {/* ─── Category Strip ──────────────────────────────────────────── */}
      <div className="px-4 sm:px-5 overflow-x-auto no-scrollbar flex items-center gap-2 py-0.5">
        {QUICK_CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              type="button"
              className={`min-h-[44px] px-3.5 rounded-xl text-xs font-bold shrink-0 flex items-center gap-1.5 transition-all select-none active:scale-95 border ${
                isActive
                  ? 'bg-blue-700 text-white border-blue-700 shadow-xs'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">
                {cat.icon}
              </span>
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* ─── Product Catalog Grid ────────────────────────────────────── */}
      <div className="px-4 sm:px-5 flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
            {selectedCategory === 'all' ? 'Trending Products' : `${selectedCategory} catalog`}
            <span className="text-slate-400 ml-1.5 font-semibold">({filteredProducts.length})</span>
          </h3>
          <span className="text-[11px] font-bold text-emerald-700 flex items-center gap-0.5">
            <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              bolt
            </span>
            Instant Delivery
          </span>
        </div>

        {loading && (
          <LoadingSkeleton count={4} message="Syncing hyperlocal 10-minute catalog..." />
        )}

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl">
            ⚠️ {error}
          </div>
        )}

        {!loading && !error && filteredProducts.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col items-center gap-1">
            <span className="text-3xl">🔍</span>
            <p className="text-xs font-bold text-slate-800 mt-1">No matching products found</p>
            <p className="text-[11px] text-slate-400">Try another category or search keyword</p>
          </div>
        )}

        {!loading && !error && filteredProducts.length > 0 && (
          <div className="w-full grid grid-cols-2 gap-3">
            {filteredProducts.map((prod) => {
              const currentQty = cartItems[prod.id]?.quantity || 0;
              return (
                <ProductCard
                  key={prod.id}
                  product={prod}
                  quantity={currentQty}
                  onQuantityChange={handleQuantityChange}
                />
              );
            })}
          </div>
        )}
      </div>

      {/* ─── Floating Cart Bottom Bar (When cart > 0) ─────────────────── */}
      {totalCartCount > 0 && (
        <aside
          aria-label="Floating Cart Summary"
          className="fixed bottom-[74px] left-0 right-0 z-40 w-full max-w-md mx-auto px-4 sm:px-5 pointer-events-none"
        >
          <div
            onClick={() => onNavigateTab && onNavigateTab('cart')}
            className="w-full min-h-[50px] bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white p-3 rounded-2xl shadow-xl flex items-center justify-between cursor-pointer pointer-events-auto active:scale-[0.99] transition-all select-none"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center font-bold text-xs">
                {totalCartCount}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-extrabold leading-none">
                  ₹{Number(totalCartValue).toLocaleString('en-IN')}
                </span>
                <span className="text-[10px] text-emerald-100 font-semibold mt-0.5">
                  Plus taxes &amp; ₹2 fee
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1 text-xs font-bold tracking-tight">
              <span>View Cart</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
}
