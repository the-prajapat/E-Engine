import React from 'react';

/**
 * DealerRoot — /e-engine/dealer-panel/pages/DealerRoot.js
 * Isolated Dealer Panel Placeholder Root.
 *
 * NOTE: Features will be built out in the upcoming phase.
 * Structure matches the domain architecture rules.
 */
export default function DealerRoot({ onNavigatePortal }) {
  return React.createElement(
    'div',
    { className: 'w-full min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-6 text-center font-sans' },
    React.createElement(
      'div',
      { className: 'w-16 h-16 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center mb-4' },
      React.createElement('span', { className: 'material-symbols-outlined text-3xl' }, 'storefront')
    ),
    React.createElement('h1', { className: 'text-xl font-bold text-white mb-2' }, 'Dealer Portal (Upcoming Module)'),
    React.createElement(
      'p',
      { className: 'text-xs text-slate-400 max-w-sm mb-6 leading-relaxed' },
      'Isolated folder structure initialized at /e-engine/dealer-panel/. Features will be plugged in directly during the Dealer development phase.'
    ),
    onNavigatePortal &&
      React.createElement(
        'button',
        {
          onClick: () => onNavigatePortal('user'),
          className: 'text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2.5 rounded-xl font-medium transition-colors flex items-center gap-2 border border-slate-700',
        },
        React.createElement('span', { className: 'material-symbols-outlined text-sm' }, 'arrow_back'),
        'Return to User Panel'
      )
  );
}
