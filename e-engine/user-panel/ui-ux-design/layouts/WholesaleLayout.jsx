import React from 'react';

/**
 * WholesaleLayout (Dumb Mobile Presentation Shell)
 * Mobile-First & Fully Fluid layout shell with safe-area padding and vertical scrolling.
 */
export default function WholesaleLayout({ header, children, footer, banner }) {
  return (
    <div className="w-full max-w-md mx-auto min-h-screen bg-slate-100/70 relative pb-24 overflow-x-hidden overflow-y-auto flex flex-col select-none">
      {header}
      {banner && <div className="px-4 sm:px-5 pt-2.5">{banner}</div>}
      <main className="flex-1 px-4 sm:px-5 py-3 w-full flex flex-col gap-3">{children}</main>
      {footer}
    </div>
  );
}
