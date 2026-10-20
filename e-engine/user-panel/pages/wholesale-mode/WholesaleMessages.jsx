import React, { useState } from 'react';

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: 'vendor',
    name: 'Rajesh Electronics Mfg (Delhi Hub)',
    time: '11:15 AM',
    text: 'Hello Khushal, we received your inquiry for 500 units (5 Lots) of MCU Pack. Our standard wholesale rate is ₹28,500/lot.',
  },
  {
    id: 2,
    sender: 'user',
    name: 'Khushal (You)',
    time: '11:22 AM',
    text: 'We are prepared to place an immediate purchase order with 50% advance if you can do ₹26,000/lot.',
  },
  {
    id: 3,
    sender: 'vendor',
    name: 'Rajesh Electronics Mfg (Delhi Hub)',
    time: '11:28 AM',
    text: 'Best we can offer for 5 lots is ₹27,000/lot inclusive of GST and dispatch to Jaipur warehouse within 48 hours.',
  },
];

/**
 * WholesaleMessages (Smart Container Page)
 * Fully fluid, mobile-first B2B Live Negotiation room with safe padding and 44px+ controls.
 */
export default function WholesaleMessages() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [counterPrice, setCounterPrice] = useState('26500');
  const [dealAccepted, setDealAccepted] = useState(false);

  const handleSendCounter = () => {
    if (!counterPrice) return;
    const newMsg = {
      id: Date.now(),
      sender: 'user',
      name: 'Khushal (You)',
      time: 'Just now',
      text: `Submitted formal counter-offer of ₹${Number(counterPrice).toLocaleString('en-IN')}/lot for 5 Lots.`,
    };
    setMessages((prev) => [...prev, newMsg]);
  };

  const handleAcceptDeal = () => {
    setDealAccepted(true);
    const newMsg = {
      id: Date.now(),
      sender: 'user',
      name: 'Deal Room Bot',
      time: 'Just now',
      text: '🎉 Deal locked at ₹27,000/lot! Proforma Invoice generated automatically.',
    };
    setMessages((prev) => [...prev, newMsg]);
  };

  return (
    <div className="w-full flex-1 flex flex-col gap-3 pb-28 select-none overflow-y-auto">
      {/* ─── Header ──────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 px-4 sm:px-5 py-3 shadow-xs flex items-center justify-between">
        <div>
          <h1 className="text-base font-extrabold text-slate-900 tracking-tight">
            Live Deal Room
          </h1>
          <p className="text-[11px] font-medium text-slate-500">
            Rajesh Electronics Mfg • Deal #DL-882
          </p>
        </div>
        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Active Negotiation
        </span>
      </header>

      {/* ─── Deal Summary Bar ────────────────────────────────────────── */}
      <div className="px-4 sm:px-5 py-2.5 bg-slate-100 border-b border-slate-200/80 flex items-center justify-between text-xs">
        <div>
          <span className="text-slate-500 block text-[10px]">Item Lot</span>
          <span className="font-bold text-slate-800">MCU Pack of 100 (5 Lots)</span>
        </div>
        <div className="text-right">
          <span className="text-slate-500 block text-[10px]">Current Ask</span>
          <span className="font-extrabold text-blue-900">₹27,000 / Lot</span>
        </div>
      </div>

      {/* ─── Chat Stream ─────────────────────────────────────────────── */}
      <div className="px-4 sm:px-5 flex flex-col gap-3 flex-1 min-h-[260px]">
        {messages.map((m) => {
          const isMe = m.sender === 'user';
          return (
            <div
              key={m.id}
              className={`flex flex-col max-w-[85%] ${
                isMe ? 'self-end items-end' : 'self-start items-start'
              }`}
            >
              <span className="text-[10px] font-semibold text-slate-400 mb-0.5 px-1">
                {m.name} • {m.time}
              </span>
              <div
                className={`p-3 rounded-2xl text-xs leading-relaxed shadow-xs ${
                  isMe
                    ? 'bg-blue-700 text-white rounded-tr-none'
                    : 'bg-white text-slate-800 border border-slate-200/80 rounded-tl-none'
                }`}
              >
                {m.text}
              </div>
            </div>
          );
        })}
      </div>

      {/* ─── Interactive Negotiation Actions ─────────────────────────── */}
      <div className="px-4 sm:px-5 pt-1">
        {!dealAccepted ? (
          <div className="w-full bg-white rounded-2xl border border-slate-200/80 p-3.5 shadow-xs flex flex-col gap-2.5">
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <span className="absolute left-3 top-3 text-xs font-bold text-slate-400">
                  ₹
                </span>
                <input
                  type="number"
                  value={counterPrice}
                  onChange={(e) => setCounterPrice(e.target.value)}
                  placeholder="Enter counter price"
                  className="w-full min-h-[44px] pl-7 pr-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                />
              </div>

              <button
                onClick={handleSendCounter}
                type="button"
                className="min-h-[44px] px-4 bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white font-bold text-xs rounded-xl transition-all active:scale-95 shadow-xs flex items-center justify-center shrink-0"
              >
                Send Offer
              </button>
            </div>

            <button
              onClick={handleAcceptDeal}
              type="button"
              className="w-full min-h-[48px] bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs rounded-xl transition-all shadow-xs flex items-center justify-center gap-1.5 active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">handshake</span>
              <span>Accept Deal at ₹27,000/Lot</span>
            </button>
          </div>
        ) : (
          <div className="w-full p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold rounded-2xl text-center shadow-xs">
            ✅ Deal Contract Finalized • Proforma Invoice Sent to Accounts
          </div>
        )}
      </div>
    </div>
  );
}
