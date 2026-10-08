/**
 * RetailCart.js
 * Phase 2 — Retail Mode (B2C) Smart Cart Screen
 *
 * Features (matching reference image):
 *   • Two transparent fulfillment groups:
 *       – "Delivery from Dark Store (10 mins)" ⚡
 *       – "Delivery from Partner Dealer (Next Day)" 🏬
 *   • Inline quantity stepper per item
 *   • AI Smart Alert suggestion box (orange banner)
 *   • Bill summary with discount
 *   • "Proceed to Pay" CTA
 */

import React, { useState } from 'react';

// ─── Dummy Data ─────────────────────────────────────────────────────────────────

const DARK_STORE_ITEMS = [
  {
    id: 1, name: 'Aashirvaad Atta', unit: '5 kg', price: 279,
    qty: 1, emoji: '🌾',
  },
  {
    id: 2, name: 'Amul Taaza Milk', unit: '1 L', price: 55,
    qty: 2, emoji: '🥛',
  },
  {
    id: 3, name: 'Banana', unit: '1 kg (7 pcs)', price: 49,
    qty: 1, emoji: '🍌',
  },
];

const PARTNER_ITEMS = [
  {
    id: 4, name: 'boAt Airdopes 141', unit: 'Wireless Earbuds', price: 999,
    qty: 1, emoji: '🎧',
  },
];

const AI_SUGGESTION = {
  text:    'Add 1 more Aashirvaad Atta – 20% OFF today',
  saving:  '₹56 saved',
  emoji:   '🌾',
};

// ─── Inject Keyframes ───────────────────────────────────────────────────────────
const KF_ID = 'retail-cart-kf';
if (typeof document !== 'undefined' && !document.getElementById(KF_ID)) {
  const s = document.createElement('style');
  s.id = KF_ID;
  s.textContent = `
    @keyframes alertPulse { 0%,100%{opacity:1} 50%{opacity:0.82} }
    .qty-input:focus { outline: 2px solid #1a56db; }
    .delete-btn:hover { color: #dc2626 !important; }
    .pay-btn:hover    { opacity: 0.92; transform: translateY(-1px); }
  `;
  document.head.appendChild(s);
}

// ─── CartItem Component ─────────────────────────────────────────────────────────
const CartItem = ({ item, onQtyChange, onDelete }) => {
  const [qty, setQty] = useState(item.qty);

  const update = (next) => {
    if (next < 1) { onDelete(item.id); return; }
    setQty(next);
    onQtyChange(item.id, next);
  };

  return (
    <div style={styles.cartItem}>
      {/* Product image / emoji */}
      <div style={styles.itemImg}>
        <span style={{ fontSize: '32px' }}>{item.emoji}</span>
      </div>

      {/* Name + unit */}
      <div style={styles.itemInfo}>
        <p style={styles.itemName}>{item.name}</p>
        <p style={styles.itemUnit}>{item.unit}</p>
      </div>

      {/* Qty stepper */}
      <div style={styles.qtyBox}>
        <button style={styles.qtyBtn} onClick={() => update(qty - 1)} aria-label="Decrease">−</button>
        <span style={styles.qtyNum}>{qty}</span>
        <button style={styles.qtyBtn} onClick={() => update(qty + 1)} aria-label="Increase">+</button>
      </div>

      {/* Price */}
      <p style={styles.itemPrice}>₹{(item.price * qty).toLocaleString('en-IN')}</p>

      {/* Delete */}
      <button
        className="delete-btn"
        onClick={() => onDelete(item.id)}
        aria-label={`Remove ${item.name}`}
        style={styles.deleteBtn}
      >
        🗑
      </button>
    </div>
  );
};

// ─── Fulfillment Group ──────────────────────────────────────────────────────────
const FulfillmentGroup = ({ title, badge, badgeColor, icon, items, onQtyChange, onDelete }) => (
  <div style={styles.groupCard}>
    {/* Group header */}
    <div style={styles.groupHeader}>
      <span style={{ fontSize: '18px' }}>{icon}</span>
      <div>
        <p style={styles.groupTitle}>{title}</p>
      </div>
      <span style={{ ...styles.groupBadge, background: badgeColor }}>
        {badge}
      </span>
    </div>

    {/* Divider */}
    <div style={styles.divider} />

    {/* Items */}
    {items.map(item => (
      <CartItem
        key={item.id}
        item={item}
        onQtyChange={onQtyChange}
        onDelete={onDelete}
      />
    ))}
  </div>
);

// ─── AI Smart Alert ─────────────────────────────────────────────────────────────
const AISmartAlert = ({ suggestion, onAdd }) => (
  <div style={styles.alertBox} role="alert" aria-label="AI Smart Alert">
    <span style={{ fontSize: '36px' }}>🎁</span>
    <div style={{ flex: 1, minWidth: 0 }}>
      <p style={styles.alertTitle}>✨ AI Smart Alert</p>
      <p style={styles.alertText}>{suggestion.text}</p>
    </div>
    <button
      id="ai-alert-add-btn"
      onClick={onAdd}
      style={styles.alertAddBtn}
    >
      Add
    </button>
  </div>
);

// ─── Bill Summary ───────────────────────────────────────────────────────────────
const BillSummary = ({ subtotal }) => {
  const delivery  = 29;
  const discount  = -150;
  const total     = subtotal + delivery + discount;

  return (
    <div style={styles.billCard}>
      <BillRow label="Subtotal"      value={`₹${subtotal.toLocaleString('en-IN')}`} />
      <BillRow label="Delivery Fee"  value={`₹${delivery}`} />
      <BillRow label="Discount"      value={`−₹${Math.abs(discount)}`} valueColor="#10b981" />
      <div style={styles.divider} />
      <BillRow
        label="Total"
        value={`₹${total.toLocaleString('en-IN')}`}
        bold
      />

      {/* Illustration */}
      <div style={{ position: 'absolute', bottom: 16, right: 16, fontSize: '48px', opacity: 0.18 }}>
        🛡️
      </div>
    </div>
  );
};

const BillRow = ({ label, value, bold, valueColor }) => (
  <div style={styles.billRow}>
    <span style={{ ...styles.billLabel, fontWeight: bold ? 700 : 400 }}>{label}</span>
    <span style={{ ...styles.billValue, fontWeight: bold ? 800 : 400, color: valueColor || 'inherit' }}>
      {value}
    </span>
  </div>
);

// ─── Main Page ──────────────────────────────────────────────────────────────────

const RetailCart = ({ onBack, onCheckout }) => {
  const [darkStoreItems,  setDarkStoreItems]  = useState(DARK_STORE_ITEMS);
  const [partnerItems,    setPartnerItems]    = useState(PARTNER_ITEMS);
  const [alertDismissed,  setAlertDismissed]  = useState(false);

  const handleQtyChange = (setter) => (id, qty) => {
    setter(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
  };

  const handleDelete = (setter) => (id) => {
    setter(prev => prev.filter(i => i.id !== id));
  };

  const allItems = [...darkStoreItems, ...partnerItems];
  const subtotal = allItems.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div style={styles.root}>
      {/* ── Header ── */}
      <header style={styles.header}>
        <button
          id="cart-back-btn"
          onClick={onBack}
          aria-label="Go back"
          style={styles.backBtn}
        >
          ←
        </button>
        <h1 style={styles.headerTitle}>My Cart</h1>
        <div style={styles.deliveryTag}>
          <span style={{ color: '#22c55e', fontWeight: 700 }}>⚡</span>
          {' '}10 min delivery
        </div>
      </header>

      {/* ── Scrollable content ── */}
      <div style={styles.scrollArea}>

        {/* Group 1: Dark Store */}
        {darkStoreItems.length > 0 && (
          <FulfillmentGroup
            icon="⚡"
            title="Delivery from Dark Store"
            badge="10 mins"
            badgeColor="rgba(34,197,94,0.15)"
            items={darkStoreItems}
            onQtyChange={handleQtyChange(setDarkStoreItems)}
            onDelete={handleDelete(setDarkStoreItems)}
          />
        )}

        {/* Group 2: Partner Dealer */}
        {partnerItems.length > 0 && (
          <FulfillmentGroup
            icon="🏬"
            title="Delivery from Partner Dealer"
            badge="Next Day"
            badgeColor="rgba(245,158,11,0.15)"
            items={partnerItems}
            onQtyChange={handleQtyChange(setPartnerItems)}
            onDelete={handleDelete(setPartnerItems)}
          />
        )}

        {/* AI Smart Alert */}
        {!alertDismissed && (
          <AISmartAlert
            suggestion={AI_SUGGESTION}
            onAdd={() => setAlertDismissed(true)}
          />
        )}

        {/* Bill Summary */}
        <BillSummary subtotal={subtotal} />

        {/* Spacer */}
        <div style={{ height: '100px' }} />
      </div>

      {/* ── Proceed to Pay ── */}
      <div style={styles.payWrap}>
        <button
          id="proceed-to-pay-btn"
          className="pay-btn"
          onClick={onCheckout}
          style={styles.payBtn}
        >
          Proceed to Pay &nbsp;→
        </button>
      </div>
    </div>
  );
};

// ─── Styles ─────────────────────────────────────────────────────────────────────
const styles = {
  root: {
    maxWidth:   '480px',
    margin:     '0 auto',
    minHeight:  '100vh',
    background: '#f5f7ff',
    position:   'relative',
    display:    'flex',
    flexDirection: 'column',
  },
  header: {
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'space-between',
    padding:        '14px 16px',
    background:     '#fff',
    borderBottom:   '1px solid #f0f4ff',
    position:       'sticky',
    top:            0,
    zIndex:         10,
  },
  backBtn: {
    background:   'transparent',
    border:       'none',
    fontSize:     '22px',
    color:        '#0d1b3e',
    cursor:       'pointer',
    padding:      '4px 8px',
    borderRadius: '8px',
    lineHeight:   1,
  },
  headerTitle: {
    fontSize:   '17px',
    fontWeight: 700,
    color:      '#0d1b3e',
  },
  deliveryTag: {
    fontSize:     '13px',
    fontWeight:   600,
    color:        '#4a5568',
    background:   '#f0fdf4',
    border:       '1px solid #bbf7d0',
    borderRadius: '20px',
    padding:      '4px 10px',
  },
  scrollArea: {
    flex:      1,
    overflowY: 'auto',
    padding:   '12px 16px',
    display:   'flex',
    flexDirection: 'column',
    gap:       '12px',
  },
  groupCard: {
    background:   '#fff',
    borderRadius: '16px',
    boxShadow:    '0 2px 10px rgba(26,86,219,0.06)',
    overflow:     'hidden',
  },
  groupHeader: {
    display:     'flex',
    alignItems:  'center',
    gap:         '10px',
    padding:     '12px 16px',
    background:  'rgba(26,86,219,0.03)',
  },
  groupTitle: {
    fontSize:   '13px',
    fontWeight: 700,
    color:      '#0d1b3e',
  },
  groupBadge: {
    marginLeft:   'auto',
    fontSize:     '12px',
    fontWeight:   700,
    borderRadius: '20px',
    padding:      '3px 10px',
    color:        '#0d1b3e',
  },
  divider: {
    height:     '1px',
    background: '#f0f4ff',
    margin:     '0 16px',
  },
  cartItem: {
    display:     'flex',
    alignItems:  'center',
    gap:         '10px',
    padding:     '12px 16px',
    borderBottom:'1px solid #f5f7ff',
  },
  itemImg: {
    width:          '52px',
    height:         '52px',
    background:     '#f5f7ff',
    borderRadius:   '10px',
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'center',
    flexShrink:     0,
  },
  itemInfo: {
    flex:    1,
    minWidth:0,
  },
  itemName: {
    fontSize:   '14px',
    fontWeight: 700,
    color:      '#0d1b3e',
    lineHeight: 1.3,
  },
  itemUnit: {
    fontSize: '12px',
    color:    '#718096',
    marginTop:'2px',
  },
  qtyBox: {
    display:        'flex',
    alignItems:     'center',
    background:     '#f5f7ff',
    borderRadius:   '10px',
    border:         '1.5px solid #e2e8f0',
    overflow:       'hidden',
    flexShrink:     0,
  },
  qtyBtn: {
    background:  'transparent',
    border:      'none',
    cursor:      'pointer',
    fontSize:    '18px',
    fontWeight:  700,
    color:       '#1a56db',
    padding:     '4px 10px',
    lineHeight:  1,
  },
  qtyNum: {
    fontSize:   '15px',
    fontWeight: 700,
    color:      '#0d1b3e',
    minWidth:   '24px',
    textAlign:  'center',
  },
  itemPrice: {
    fontSize:   '15px',
    fontWeight: 700,
    color:      '#0d1b3e',
    flexShrink: 0,
  },
  deleteBtn: {
    background: 'transparent',
    border:     'none',
    cursor:     'pointer',
    fontSize:   '18px',
    color:      '#a0aec0',
    padding:    '4px',
    transition: 'color 150ms ease',
    flexShrink: 0,
  },
  alertBox: {
    display:      'flex',
    alignItems:   'center',
    gap:          '12px',
    background:   '#fff8f1',
    border:       '1.5px solid #fed7aa',
    borderRadius: '14px',
    padding:      '14px 16px',
    animation:    'alertPulse 3s ease-in-out infinite',
  },
  alertTitle: {
    fontSize:   '14px',
    fontWeight: 700,
    color:      '#ea6c0a',
    marginBottom:'3px',
  },
  alertText: {
    fontSize: '13px',
    color:    '#7c4010',
  },
  alertAddBtn: {
    background:   '#f97316',
    color:        '#fff',
    border:       'none',
    borderRadius: '10px',
    padding:      '10px 18px',
    fontWeight:   700,
    fontSize:     '15px',
    cursor:       'pointer',
    flexShrink:   0,
    whiteSpace:   'nowrap',
  },
  billCard: {
    background:   '#f0fdf4',
    borderRadius: '16px',
    padding:      '16px 20px',
    position:     'relative',
    overflow:     'hidden',
  },
  billRow: {
    display:        'flex',
    justifyContent: 'space-between',
    alignItems:     'center',
    padding:        '6px 0',
  },
  billLabel: {
    fontSize: '14px',
    color:    '#4a5568',
  },
  billValue: {
    fontSize: '14px',
    color:    '#0d1b3e',
  },
  payWrap: {
    position:   'fixed',
    bottom:     0, left: 0, right: 0,
    padding:    '12px 16px',
    background: '#fff',
    borderTop:  '1px solid #f0f4ff',
    boxShadow:  '0 -4px 16px rgba(26,86,219,0.08)',
  },
  payBtn: {
    display:        'block',
    width:          '100%',
    maxWidth:       '480px',
    margin:         '0 auto',
    padding:        '16px',
    background:     'linear-gradient(90deg, #f97316 0%, #ea6c0a 100%)',
    border:         'none',
    borderRadius:   '14px',
    color:          '#fff',
    fontSize:       '17px',
    fontWeight:     800,
    cursor:         'pointer',
    letterSpacing:  '0.01em',
    transition:     'opacity 150ms ease, transform 150ms ease',
    boxShadow:      '0 4px 16px rgba(249,115,22,0.4)',
  },
};

export default RetailCart;
