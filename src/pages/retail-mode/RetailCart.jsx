import React, { useState } from 'react';
import { QuantityStepper } from '../../ui-ux-design/index.js';

/**
 * RetailCart (Smart Container Page)
 * ISSUE 1, 2, 5: Interactive Cart screen with Indian Rupee (₹) breakdown,
 * free delivery meter, 44px tap targets, and checkout flow.
 */
export default function RetailCart({
  cartItems = {},
  onUpdateCart,
  onNavigateTab,
}) {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('upi');

  const itemsList = Object.values(cartItems).filter((item) => item.quantity > 0);

  const subtotal = itemsList.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryThreshold = 499;
  const deliveryFee = subtotal >= deliveryThreshold || subtotal === 0 ? 0 : 25;
  const platformFee = subtotal > 0 ? 2 : 0;
  const grandTotal = subtotal + deliveryFee + platformFee;
  const amountToFreeDelivery = Math.max(0, deliveryThreshold - subtotal);

  const handleCheckout = () => {
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="w-full flex flex-col items-center justify-center p-6 min-h-[80vh] text-center select-none">
        <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 animate-bounce">
          <span className="material-symbols-outlined text-[40px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            check_circle
          </span>
        </div>
        <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
          Order Placed Successfully!
        </h2>
        <p className="text-xs text-slate-600 mt-1 max-w-xs">
          Your hyperlocal 10-minute delivery is being packed at the Civil Lines hub.
        </p>

        <div className="mt-5 p-4 bg-white rounded-2xl border border-slate-200/80 w-full text-left">
          <div className="flex justify-between text-xs py-1">
            <span className="text-slate-500">Order ID:</span>
            <span className="font-bold text-slate-800">#ORD-2026-IN904</span>
          </div>
          <div className="flex justify-between text-xs py-1">
            <span className="text-slate-500">Payment:</span>
            <span className="font-bold text-emerald-700 uppercase">{paymentMethod} (₹{grandTotal.toLocaleString('en-IN')})</span>
          </div>
          <div className="flex justify-between text-xs py-1">
            <span className="text-slate-500">Estimated Delivery:</span>
            <span className="font-bold text-blue-700">⚡ 10 Minutes</span>
          </div>
        </div>

        <button
          onClick={() => {
            setOrderPlaced(false);
            if (onNavigateTab) onNavigateTab('home');
          }}
          type="button"
          className="mt-6 w-full min-h-[48px] bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs rounded-xl transition-all shadow-md active:scale-95"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col pb-28 select-none">
      {/* ─── Header ──────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 px-4 py-3 shadow-xs flex items-center justify-between">
        <div>
          <h1 className="text-base font-extrabold text-slate-900 tracking-tight">
            Review Cart
          </h1>
          <p className="text-[11px] font-medium text-slate-500">
            {itemsList.length} unique item{itemsList.length !== 1 ? 's' : ''} added
          </p>
        </div>
        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
          ⚡ 10 Mins ETA
        </span>
      </header>

      {/* ─── Empty Cart State ────────────────────────────────────────── */}
      {itemsList.length === 0 ? (
        <div className="p-8 text-center flex flex-col items-center justify-center min-h-[60vh]">
          <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mb-3">
            <span className="material-symbols-outlined text-[32px]">shopping_bag</span>
          </div>
          <h3 className="text-sm font-bold text-slate-900">Your cart is empty</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-xs">
            Explore 10-minute quick-commerce deals and add fresh items to your cart.
          </p>
          <button
            onClick={() => onNavigateTab && onNavigateTab('home')}
            type="button"
            className="mt-4 min-h-[44px] px-6 bg-blue-700 text-white font-bold text-xs rounded-xl shadow-sm hover:bg-blue-800 active:scale-95 transition-all"
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="px-4 py-3 flex flex-col gap-3">
          {/* ─── Free Delivery Progress Meter ─────────────────────────── */}
          <div className="p-3 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center justify-between text-xs font-bold mb-1.5">
              <span className="flex items-center gap-1 text-slate-800">
                <span className="material-symbols-outlined text-emerald-600 text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  local_shipping
                </span>
                {deliveryFee === 0 ? 'FREE Delivery unlocked!' : `Add ₹${amountToFreeDelivery} for FREE delivery`}
              </span>
              <span className="text-[10px] text-slate-500">Threshold: ₹{deliveryThreshold}</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div
                className="bg-emerald-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${Math.min(100, (subtotal / deliveryThreshold) * 100)}%` }}
              />
            </div>
          </div>

          {/* ─── Items List ────────────────────────────────────────────── */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-3 shadow-xs divide-y divide-slate-100">
            {itemsList.map((item) => (
              <div key={item.id} className="py-2.5 first:pt-0 last:pb-0 flex items-center justify-between gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 overflow-hidden">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-lg">📦</span>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-slate-900 truncate">
                    {item.title}
                  </h4>
                  <p className="text-[11px] font-semibold text-blue-900 mt-0.5">
                    ₹{Number(item.price).toLocaleString('en-IN')}
                  </p>
                </div>

                <div className="shrink-0">
                  <QuantityStepper
                    quantity={item.quantity}
                    onChange={(newQty) => onUpdateCart && onUpdateCart(item, newQty)}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* ─── Delivery Location ─────────────────────────────────────── */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-3.5 shadow-xs flex items-center justify-between">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  home_pin
                </span>
              </div>
              <div className="min-w-0">
                <span className="text-xs font-bold text-slate-900 block truncate">
                  Deliver to Civil Lines, Jaipur
                </span>
                <span className="text-[10px] text-slate-500">
                  Flat 402, Metro Enclave • 10 Mins ETA
                </span>
              </div>
            </div>
            <button
              onClick={() => alert('Change address dialog')}
              type="button"
              className="text-xs font-bold text-blue-700 hover:text-blue-900 shrink-0 min-h-[44px] flex items-center px-1"
            >
              Change
            </button>
          </div>

          {/* ─── Bill Breakdown in Rupees (₹) ─────────────────────────── */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-3.5 shadow-xs">
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-2">
              Bill Details
            </h4>
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Item Subtotal</span>
                <span className="font-semibold text-slate-800">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Delivery Partner Fee</span>
                <span className={`font-semibold ${deliveryFee === 0 ? 'text-emerald-700' : 'text-slate-800'}`}>
                  {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                </span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Platform Fee</span>
                <span className="font-semibold text-slate-800">₹{platformFee}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>GST &amp; Handling</span>
                <span className="font-semibold text-emerald-700">Included</span>
              </div>
              <div className="pt-2 border-t border-slate-100 flex justify-between text-sm font-extrabold text-slate-900">
                <span>Grand Total</span>
                <span className="text-blue-900">₹{grandTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>

          {/* ─── Payment Method Selection ─────────────────────────────── */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-3.5 shadow-xs">
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-2">
              Payment Method
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'upi', label: 'UPI / GPay', icon: 'qr_code_2' },
                { id: 'card', label: 'Debit/Credit', icon: 'credit_card' },
                { id: 'cod', label: 'Cash on Del.', icon: 'payments' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setPaymentMethod(opt.id)}
                  type="button"
                  className={`min-h-[44px] p-2 rounded-xl text-center border text-[11px] font-bold flex flex-col items-center justify-center transition-all ${
                    paymentMethod === opt.id
                      ? 'bg-blue-50 text-blue-800 border-blue-600'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">{opt.icon}</span>
                  <span className="mt-0.5">{opt.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* ─── Pay Action CTA ────────────────────────────────────────── */}
          <div className="pt-1">
            <button
              onClick={handleCheckout}
              type="button"
              className="w-full min-h-[50px] bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white rounded-2xl font-bold text-sm flex items-center justify-between px-5 shadow-lg shadow-emerald-600/25 active:scale-[0.99] transition-all"
            >
              <div className="flex flex-col text-left">
                <span className="text-xs uppercase font-extrabold text-emerald-100 leading-none">
                  Total Payable
                </span>
                <span className="text-base font-black mt-0.5">
                  ₹{grandTotal.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="flex items-center gap-1 font-extrabold text-xs">
                <span>Place Order</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
