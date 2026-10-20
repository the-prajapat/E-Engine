import React from 'react';

const B2B_ORDERS = [
  {
    poNumber: 'PO-2026-0891',
    vendor: 'Bharat Industrial Logistics Ltd',
    date: '08 Oct 2026',
    items: 'Industrial Heavy Duty Storage Pallets (Lot of 50)',
    qty: '10 Lots (500 Units)',
    amount: 450000,
    status: 'In Transit',
    statusColor: 'text-blue-700 bg-blue-50 border-blue-200',
    ewayBill: 'EWB-8921-9921',
  },
  {
    poNumber: 'PO-2026-0744',
    vendor: 'Silicon Precision Micro Systems',
    date: '02 Oct 2026',
    items: 'Precision Micro-Controller Units (Pack of 100)',
    qty: '5 Lots (500 Units)',
    amount: 142500,
    status: 'Delivered',
    statusColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    ewayBill: 'EWB-7102-3341',
  },
];

/**
 * WholesaleOrders (Smart Container Page)
 * Fully fluid, mobile-first B2B Orders tracking with safe padding and 44px+ controls.
 */
export default function WholesaleOrders() {
  return (
    <div className="w-full flex-1 flex flex-col gap-3 pb-28 select-none overflow-y-auto">
      {/* ─── Header ──────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 px-4 sm:px-5 py-3 shadow-xs">
        <h1 className="text-base font-extrabold text-slate-900 tracking-tight">
          B2B Purchase Orders
        </h1>
        <p className="text-[11px] font-medium text-slate-500">
          Tracking wholesale contracts, logistics &amp; GST invoices
        </p>
      </header>

      {/* ─── Orders List ─────────────────────────────────────────────── */}
      <div className="px-4 sm:px-5 flex flex-col gap-3.5">
        {B2B_ORDERS.map((order) => (
          <div
            key={order.poNumber}
            className="w-full bg-white rounded-2xl border border-slate-200/80 p-4 shadow-xs flex flex-col gap-3"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0 flex-1">
                <span className="text-[11px] font-extrabold text-blue-700">
                  {order.poNumber}
                </span>
                <h3 className="text-xs font-bold text-slate-900 mt-0.5 truncate">
                  {order.vendor}
                </h3>
                <span className="text-[10px] text-slate-400 font-medium">
                  Issued on {order.date}
                </span>
              </div>

              <span
                className={`text-[11px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${order.statusColor}`}
              >
                ● {order.status}
              </span>
            </div>

            {/* Item Details */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs flex flex-col gap-1">
              <span className="font-bold text-slate-800 block truncate">
                {order.items}
              </span>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-slate-500">Quantity: {order.qty}</span>
                <span className="font-extrabold text-blue-900">
                  ₹{order.amount.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Stages Tracker */}
            <div className="flex items-center justify-between text-[10px] font-bold text-slate-600 px-1">
              <span className="text-emerald-700 flex items-center gap-0.5">
                <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                PO Placed
              </span>
              <span className="text-slate-300">→</span>
              <span className="text-emerald-700 flex items-center gap-0.5">
                <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                Approved
              </span>
              <span className="text-slate-300">→</span>
              <span className={order.status === 'Delivered' ? 'text-emerald-700' : 'text-blue-700'}>
                {order.status}
              </span>
            </div>

            {/* E-Invoice Actions */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium truncate">
                <span className="material-symbols-outlined text-[16px] text-slate-400 shrink-0">
                  description
                </span>
                <span className="truncate">{order.ewayBill}</span>
              </div>

              <button
                onClick={() => alert(`Downloading GST Tax Invoice for ${order.poNumber}`)}
                type="button"
                className="min-h-[44px] px-3.5 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-800 text-[11px] font-bold rounded-xl transition-all active:scale-95 flex items-center gap-1.5 shrink-0"
              >
                <span className="material-symbols-outlined text-[16px]">download</span>
                <span>Tax Invoice</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
