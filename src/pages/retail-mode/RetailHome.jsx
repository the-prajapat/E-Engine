/**
 * RetailHome.js
 * Phase 2 — Retail Mode (B2C) Home Screen
 *
 * Quick-commerce style (Blinkit/Zepto inspired from reference images).
 * Layout:
 *   • Header: QuickCart logo + mic icon + profile icon
 *   • TopLocationBar
 *   • Search bar with "AI Voice Search" trigger
 *   • Hero banner (Big savings, 40% OFF)
 *   • Horizontal category chips
 *   • 2-column product card grid with QuantityStepper
 *   • Bottom: Fast Delivery badge
 *   • Bottom nav bar
 */

import React, { useState } from 'react';
import TopLocationBar  from '../../ui-ux-design/components/TopLocationBar.jsx';
import QuantityStepper from '../../ui-ux-design/components/QuantityStepper.jsx';
import VoiceSearchModal from '../../experimental-features/voice-search/VoiceSearchModal.jsx';

// ─── Inject page styles ─────────────────────────────────────────────────────────
const PAGE_KF_ID = 'retail-home-kf';
if (typeof document !== 'undefined' && !document.getElementById(PAGE_KF_ID)) {
  const s = document.createElement('style');
  s.id = PAGE_KF_ID;
  s.textContent = `
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Inter', 'Segoe UI', system-ui, sans-serif; background: #f5f7ff; }
    @keyframes bannerShift { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
    @keyframes slideLeft  { from{transform:translateX(20px);opacity:0} to{transform:translateX(0);opacity:1} }
    @keyframes fadeUp     { from{transform:translateY(16px);opacity:0} to{transform:translateY(0);opacity:1} }
    .chip-active { background: #1a56db !important; color: #fff !important; border-color: #1a56db !important; }
    .nav-item-active svg { stroke: #1a56db; }
    .nav-item-active span { color: #1a56db; }
    .product-card:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(26,86,219,0.12) !important; }
    .product-card { transition: transform 220ms ease, box-shadow 220ms ease; }
    .search-bar:focus-within { border-color: #1a56db !important; box-shadow: 0 0 0 3px rgba(26,86,219,0.12) !important; }
  `;
  document.head.appendChild(s);
}

// ─── Dummy Data ─────────────────────────────────────────────────────────────────

const CATEGORIES = [
  { id: 'all',         label: 'All',          icon: '⚡' },
  { id: 'groceries',   label: 'Groceries',    icon: '🛒' },
  { id: 'beverages',   label: 'Beverages',    icon: '🥤' },
  { id: 'personalcare',label: 'Personal Care',icon: '🧴' },
  { id: 'electronics', label: 'Electronics',  icon: '🎧' },
  { id: 'snacks',      label: 'Snacks',       icon: '🍟' },
  { id: 'dairy',       label: 'Dairy',        icon: '🥛' },
];

const PRODUCTS = [
  {
    id: 1, category: 'dairy',
    name: 'Nandini GoodLife Toned Milk',
    unit: '1L', price: 52, mrp: 60,
    discount: 13,
    emoji: '🥛',
    img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=120&h=120&fit=crop',
  },
  {
    id: 2, category: 'groceries',
    name: 'Fresh Apple',
    unit: '1 kg', price: 129, mrp: 160,
    discount: 19,
    emoji: '🍎',
    img: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=120&h=120&fit=crop',
  },
  {
    id: 3, category: 'snacks',
    name: 'Maggi 2-Minute Noodles',
    unit: '70 g', price: 14, mrp: 20,
    discount: 10,
    emoji: '🍜',
    img: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=120&h=120&fit=crop',
  },
  {
    id: 4, category: 'electronics',
    name: 'boAt Airdopes 141 Pro',
    unit: 'Wireless Earbuds', price: 999, mrp: 1499,
    discount: 33,
    emoji: '🎧',
    img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=120&h=120&fit=crop',
  },
  {
    id: 5, category: 'groceries',
    name: 'Fresh Bananas',
    unit: '1 dozen', price: 40, mrp: 50,
    discount: 20,
    emoji: '🍌',
    img: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=120&h=120&fit=crop',
  },
  {
    id: 6, category: 'beverages',
    name: 'Coca-Cola Original Taste',
    unit: '1.25 L', price: 60, mrp: 70,
    discount: 0,
    emoji: '🥤',
    img: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=120&h=120&fit=crop',
  },
  {
    id: 7, category: 'groceries',
    name: 'Daawat Rozana Basmati Rice',
    unit: '1 kg', price: 149, mrp: 175,
    discount: 15,
    emoji: '🍚',
    img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=120&h=120&fit=crop',
  },
  {
    id: 8, category: 'dairy',
    name: 'Amul Toned Milk',
    unit: '500 ml', price: 27, mrp: 30,
    discount: 10,
    emoji: '🥛',
    img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=120&h=120&fit=crop',
  },
];

// ─── Sub-Components ─────────────────────────────────────────────────────────────

const DiscountBadge = ({ pct }) => {
  if (!pct) return null;
  return (
    <div style={{
      position:   'absolute', top: 8, left: 8,
      background: pct >= 20 ? '#10b981' : pct >= 15 ? '#1a56db' : '#f97316',
      color:      '#fff', fontSize: '11px', fontWeight: 700,
      borderRadius:'6px', padding: '2px 6px', zIndex: 1,
    }}>
      {pct}% OFF
    </div>
  );
};

const ProductCard = ({ product }) => {
  const [qty, setQty] = useState(0);

  return (
    <div className="product-card" style={cardStyles.wrapper}>
      {/* Image */}
      <div style={cardStyles.imgWrap}>
        <DiscountBadge pct={product.discount} />
        <span style={{ fontSize: '52px', lineHeight: 1 }}>{product.emoji}</span>
      </div>

      {/* Info */}
      <div style={cardStyles.info}>
        <p style={cardStyles.name}>{product.name}</p>
        <p style={cardStyles.unit}>{product.unit}</p>

        <div style={cardStyles.priceRow}>
          <span style={cardStyles.price}>₹{product.price}</span>
          {product.mrp > product.price && (
            <span style={cardStyles.mrp}>₹{product.mrp}</span>
          )}
        </div>

        <QuantityStepper
          variant="accent"
          compact
          onQuantityChange={setQty}
          style={{ marginTop: '8px' }}
        />
      </div>
    </div>
  );
};

const cardStyles = {
  wrapper: {
    background:   '#fff',
    borderRadius: '14px',
    boxShadow:    '0 2px 10px rgba(26,86,219,0.07)',
    overflow:     'hidden',
    display:      'flex',
    flexDirection:'column',
  },
  imgWrap: {
    position:       'relative',
    background:     '#f5f7ff',
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'center',
    padding:        '18px 12px 12px',
    minHeight:      '110px',
  },
  info: {
    padding: '10px 12px 14px',
  },
  name: {
    fontSize:    '13px',
    fontWeight:  700,
    color:       '#0d1b3e',
    lineHeight:  1.35,
    marginBottom:'3px',
  },
  unit: {
    fontSize: '12px',
    color:    '#718096',
    marginBottom: '6px',
  },
  priceRow: {
    display:    'flex',
    alignItems: 'baseline',
    gap:        '6px',
  },
  price: {
    fontSize:   '16px',
    fontWeight: 800,
    color:      '#0d1b3e',
  },
  mrp: {
    fontSize:       '12px',
    color:          '#a0aec0',
    textDecoration: 'line-through',
  },
};

// ─── Bottom Nav ─────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { id: 'home',       label: 'Home',       icon: '🏠', active: true  },
  { id: 'categories', label: 'Categories', icon: '📦', active: false },
  { id: 'cart',       label: 'Cart',       icon: '🛒', active: false, badge: 1 },
  { id: 'profile',    label: 'Profile',    icon: '👤', active: false },
];

const BottomNav = ({ cartCount }) => (
  <nav style={navStyles.bar} role="navigation" aria-label="Bottom navigation">
    {NAV_ITEMS.map(item => (
      <button key={item.id} id={`nav-${item.id}`} style={{
        ...navStyles.item,
        color: item.active ? '#1a56db' : '#718096',
      }}>
        <span style={{ position: 'relative', fontSize: '22px' }}>
          {item.icon}
          {item.id === 'cart' && cartCount > 0 && (
            <span style={navStyles.badge}>{cartCount}</span>
          )}
        </span>
        <span style={{ fontSize: '11px', fontWeight: item.active ? 700 : 400 }}>
          {item.label}
        </span>
      </button>
    ))}
  </nav>
);

const navStyles = {
  bar: {
    position:       'fixed',
    bottom:         0, left: 0, right: 0,
    display:        'flex',
    background:     '#fff',
    borderTop:      '1px solid #e4eaf6',
    padding:        '8px 0 12px',
    zIndex:         100,
    boxShadow:      '0 -4px 16px rgba(26,86,219,0.06)',
  },
  item: {
    flex:           1,
    display:        'flex',
    flexDirection:  'column',
    alignItems:     'center',
    gap:            '3px',
    background:     'transparent',
    border:         'none',
    cursor:         'pointer',
    padding:        '4px 0',
  },
  badge: {
    position:    'absolute',
    top:         '-4px', right: '-6px',
    background:  '#f97316',
    color:       '#fff',
    fontSize:    '10px',
    fontWeight:  700,
    borderRadius:'10px',
    minWidth:    '16px',
    height:      '16px',
    display:     'flex',
    alignItems:  'center',
    justifyContent: 'center',
    padding:     '0 3px',
  },
};

// ─── Main Page ──────────────────────────────────────────────────────────────────

const RetailHome = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery,    setSearchQuery]    = useState('');
  const [voiceOpen,      setVoiceOpen]      = useState(false);
  const [cartCount,      setCartCount]      = useState(1);
  const [notifCount]                        = useState(2);

  const filteredProducts = PRODUCTS.filter(p => {
    const matchCat = activeCategory === 'all' || p.category === activeCategory;
    const matchQ   = !searchQuery   || p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <div style={pageStyles.root}>
      {/* ── Header ── */}
      <header style={pageStyles.header}>
        <div style={pageStyles.logo}>
          <span style={{ fontSize: '22px' }}>⚡</span>
          <span style={{ fontSize: '18px', fontWeight: 800, color: '#0d1b3e' }}>
            Quick<span style={{ color: '#1a56db' }}>Cart</span>
          </span>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            id="header-voice-btn"
            onClick={() => setVoiceOpen(true)}
            aria-label="Open voice search"
            style={pageStyles.iconBtn}
          >
            🎤
          </button>
          <button
            id="header-notif-btn"
            aria-label={`Notifications: ${notifCount}`}
            style={{ ...pageStyles.iconBtn, position: 'relative' }}
          >
            🔔
            <span style={navStyles.badge}>{notifCount}</span>
          </button>
        </div>
      </header>

      {/* ── Location Bar ── */}
      <div style={{ padding: '0 16px 4px' }}>
        <TopLocationBar />
      </div>

      {/* ── Search ── */}
      <div style={pageStyles.searchWrap}>
        <div className="search-bar" style={pageStyles.searchBar}>
          <span style={{ fontSize: '18px', color: '#718096' }}>🔍</span>
          <input
            id="retail-search-input"
            type="text"
            placeholder="Search for products"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            aria-label="Search products"
            style={pageStyles.searchInput}
          />
        </div>
        <button
          id="search-voice-btn"
          onClick={() => setVoiceOpen(true)}
          aria-label="AI Voice Search"
          style={pageStyles.voiceBtn}
        >
          <span style={{ fontSize: '20px' }}>🎙️</span>
        </button>
      </div>

      {/* ── Hero Banner ── */}
      <div style={pageStyles.scrollArea}>
        <div style={pageStyles.heroBanner}>
          <div>
            <p style={pageStyles.heroDelivery}>📍 Fast Delivery in 10 mins</p>
            <h1 style={pageStyles.heroTitle}>Big savings,<br />delivered fast</h1>
            <div style={pageStyles.heroBadge}>
              <span style={{ fontSize: '16px' }}>%</span>
              <span>UP TO<br /><strong>40% OFF</strong></span>
            </div>
          </div>
          <div style={{ fontSize: '72px', lineHeight: 1, filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.25))' }}>
            🛒
          </div>
        </div>

        {/* ── Category Chips ── */}
        <div style={pageStyles.chipsWrap}>
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              id={`cat-chip-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              aria-pressed={activeCategory === cat.id}
              style={{
                ...pageStyles.chip,
                ...(activeCategory === cat.id ? pageStyles.chipActive : {}),
              }}
            >
              <span>{cat.icon}</span>
              {cat.id !== 'all' && <span>{cat.label}</span>}
            </button>
          ))}
        </div>

        {/* ── Products Grid ── */}
        <div style={pageStyles.grid}>
          {filteredProducts.length > 0
            ? filteredProducts.map(p => <ProductCard key={p.id} product={p} />)
            : (
              <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '40px', color: '#718096' }}>
                No products found for "{searchQuery}"
              </div>
            )
          }
        </div>

        {/* ── Delivery badge ── */}
        <div style={pageStyles.deliveryBadge}>
          <span style={{ fontSize: '28px' }}>🛵</span>
          <div>
            <p style={{ fontWeight: 700, color: '#0d1b3e', fontSize: '14px' }}>
              Fast Delivery in{' '}
              <span style={{ color: '#1a56db' }}>10–15 mins</span>
            </p>
            <p style={{ fontSize: '12px', color: '#718096' }}>
              Groceries, Electronics & more
            </p>
          </div>
          <div style={pageStyles.lightningBadge}>⚡</div>
        </div>

        {/* Spacer for bottom nav */}
        <div style={{ height: '80px' }} />
      </div>

      {/* ── Bottom Nav ── */}
      <BottomNav cartCount={cartCount} />

      {/* ── Voice Search Modal ── */}
      <VoiceSearchModal
        isOpen={voiceOpen}
        onClose={() => setVoiceOpen(false)}
        onResult={(text) => {
          setSearchQuery(text);
          setVoiceOpen(false);
        }}
      />
    </div>
  );
};

// ─── Page Styles ────────────────────────────────────────────────────────────────
const pageStyles = {
  root: {
    maxWidth:   '480px',
    margin:     '0 auto',
    minHeight:  '100vh',
    background: '#f5f7ff',
    position:   'relative',
    overflowX:  'hidden',
  },
  header: {
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'space-between',
    padding:        '14px 16px 8px',
    background:     '#fff',
    borderBottom:   '1px solid #f0f4ff',
  },
  logo: {
    display:    'flex',
    alignItems: 'center',
    gap:        '6px',
  },
  iconBtn: {
    background:   '#f0f4ff',
    border:       'none',
    borderRadius: '50%',
    width:        '40px',
    height:       '40px',
    display:      'flex',
    alignItems:   'center',
    justifyContent: 'center',
    cursor:       'pointer',
    fontSize:     '18px',
    position:     'relative',
  },
  searchWrap: {
    display:  'flex',
    gap:      '10px',
    padding:  '12px 16px 8px',
    background: '#fff',
  },
  searchBar: {
    flex:         1,
    display:      'flex',
    alignItems:   'center',
    gap:          '10px',
    background:   '#f5f7ff',
    border:       '1.5px solid #e2e8f0',
    borderRadius: '12px',
    padding:      '10px 14px',
    transition:   'border-color 200ms ease, box-shadow 200ms ease',
  },
  searchInput: {
    flex:       1,
    border:     'none',
    background: 'transparent',
    fontSize:   '15px',
    color:      '#0d1b3e',
    outline:    'none',
    fontFamily: 'inherit',
  },
  voiceBtn: {
    background:   '#e8f0fe',
    border:       '1.5px solid #1a56db',
    borderRadius: '12px',
    padding:      '10px 14px',
    cursor:       'pointer',
    display:      'flex',
    alignItems:   'center',
  },
  scrollArea: {
    overflowY: 'auto',
    padding:   '0 0 8px',
  },
  heroBanner: {
    margin:          '12px 16px',
    borderRadius:    '18px',
    background:      'linear-gradient(135deg, #1a56db 0%, #3b82f6 55%, #f97316 100%)',
    backgroundSize:  '200% 200%',
    animation:       'bannerShift 6s ease-in-out infinite',
    padding:         '24px 20px',
    display:         'flex',
    alignItems:      'center',
    justifyContent:  'space-between',
    minHeight:       '140px',
  },
  heroDelivery: {
    color:        'rgba(255,255,255,0.85)',
    fontSize:     '12px',
    fontWeight:   600,
    background:   'rgba(255,255,255,0.15)',
    borderRadius: '20px',
    padding:      '3px 10px',
    display:      'inline-block',
    marginBottom: '8px',
  },
  heroTitle: {
    color:      '#fff',
    fontSize:   '22px',
    fontWeight: 800,
    lineHeight: 1.25,
    marginBottom: '12px',
  },
  heroBadge: {
    display:      'flex',
    alignItems:   'center',
    gap:          '6px',
    background:   'rgba(255,255,255,0.2)',
    borderRadius: '10px',
    padding:      '6px 12px',
    color:        '#fff',
    fontSize:     '13px',
    fontWeight:   700,
    width:        'fit-content',
  },
  chipsWrap: {
    display:    'flex',
    gap:        '8px',
    padding:    '8px 16px 4px',
    overflowX:  'auto',
    scrollbarWidth: 'none',
  },
  chip: {
    display:      'flex',
    alignItems:   'center',
    gap:          '5px',
    padding:      '7px 14px',
    borderRadius: '40px',
    border:       '1.5px solid #e2e8f0',
    background:   '#fff',
    fontSize:     '13px',
    fontWeight:   600,
    color:        '#4a5568',
    cursor:       'pointer',
    whiteSpace:   'nowrap',
    transition:   'all 200ms ease',
  },
  chipActive: {
    background:  '#1a56db',
    color:       '#fff',
    borderColor: '#1a56db',
    boxShadow:   '0 2px 8px rgba(26,86,219,0.3)',
  },
  grid: {
    display:             'grid',
    gridTemplateColumns: '1fr 1fr',
    gap:                 '12px',
    padding:             '12px 16px',
  },
  deliveryBadge: {
    display:      'flex',
    alignItems:   'center',
    gap:          '12px',
    margin:       '4px 16px',
    background:   '#fff',
    borderRadius: '14px',
    padding:      '14px 16px',
    boxShadow:    '0 2px 8px rgba(26,86,219,0.06)',
  },
  lightningBadge: {
    marginLeft:   'auto',
    background:   '#22c55e',
    color:        '#fff',
    width:        '36px',
    height:       '36px',
    borderRadius: '50%',
    display:      'flex',
    alignItems:   'center',
    justifyContent: 'center',
    fontSize:     '18px',
    fontWeight:   700,
  },
};

export default RetailHome;
