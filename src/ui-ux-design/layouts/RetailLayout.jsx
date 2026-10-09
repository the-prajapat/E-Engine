import React from 'react';

/**
 * RetailLayout (Dumb Mobile Presentation Shell)
 * ISSUE 1: Strict mobile container: w-full max-w-md mx-auto min-h-screen bg-neutral-50 relative pb-20 overflow-x-hidden.
 */
export default function RetailLayout({ header, children, footer, banner }) {
  return (
    <div className="w-full max-w-md mx-auto min-h-screen bg-neutral-50 relative pb-20 overflow-x-hidden flex flex-col select-none">
      {header}
      {banner && <div className="px-3.5 pt-2.5">{banner}</div>}
      <main className="flex-1 px-3.5 py-3 w-full">{children}</main>
      {footer}
    </div>
  );
}
