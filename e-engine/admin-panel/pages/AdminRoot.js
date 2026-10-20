import React, { useState } from 'react';
import { useGlobalBridge } from '../../shared-core/global-bridge.js';

/**
 * AdminRoot — /e-engine/admin-panel/pages/AdminRoot.js
 * Isolated Desktop Web Admin Panel Starter Shell.
 *
 * Plug-and-play mount ready for full implementation.
 * Connected directly to `/e-engine/shared-core/global-bridge.js` to broadcast
 * SLA timers, promotional banners, AI Smart Cart rules, and verified badges.
 */
export default function AdminRoot({ onNavigatePortal }) {
  const { config, updateConfig, resetConfig } = useGlobalBridge();
  const [activeAdminTab, setActiveAdminTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Dashboard Overview', icon: 'dashboard' },
    { id: 'sla-rules', label: '10-Min SLA & Dispatch', icon: 'timer' },
    { id: 'banners', label: 'Promotional Banners', icon: 'campaign' },
    { id: 'smart-cart', label: 'AI Smart Cart Rules', icon: 'shopping_basket' },
    { id: 'dealers', label: 'Dealer Verifications', icon: 'verified' },
  ];

  return React.createElement(
    'div',
    { className: 'w-full min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans' },

    // Top Header
    React.createElement(
      'header',
      { className: 'w-full bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between' },
      React.createElement(
        'div',
        { className: 'flex items-center gap-3' },
        React.createElement(
          'div',
          { className: 'w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-black text-white text-lg shadow-lg shadow-blue-500/20' },
          'E'
        ),
        React.createElement(
          'div',
          null,
          React.createElement(
            'div',
            { className: 'flex items-center gap-2' },
            React.createElement('h1', { className: 'text-base font-bold text-white tracking-tight' }, 'E-Engine Master Admin'),
            React.createElement(
              'span',
              { className: 'text-[10px] uppercase font-extrabold bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full border border-blue-500/30' },
              'Core v1.0'
            )
          ),
          React.createElement('p', { className: 'text-xs text-slate-400' }, 'Multi-Vendor Control Deck & Live SLA Orchestrator')
        )
      ),
      React.createElement(
        'div',
        { className: 'flex items-center gap-3' },
        onNavigatePortal &&
          React.createElement(
            'button',
            {
              onClick: () => onNavigatePortal('user'),
              className: 'text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-2 rounded-lg font-medium transition-colors flex items-center gap-1.5',
            },
            React.createElement('span', { className: 'material-symbols-outlined text-sm' }, 'smartphone'),
            'Switch to User Panel'
          ),
        React.createElement(
          'div',
          { className: 'flex items-center gap-2 pl-3 border-l border-slate-800' },
          React.createElement('div', { className: 'w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-200' }, 'KP'),
          React.createElement(
            'div',
            { className: 'text-left hidden sm:block' },
            React.createElement('div', { className: 'text-xs font-semibold text-slate-200' }, 'Super Admin'),
            React.createElement('div', { className: 'text-[10px] text-emerald-400' }, 'System Healthy 🟢')
          )
        )
      )
    ),

    // Deck
    React.createElement(
      'div',
      { className: 'flex-1 flex overflow-hidden' },

      // Sidebar
      React.createElement(
        'aside',
        { className: 'w-64 bg-slate-900/60 border-r border-slate-800 p-4 flex flex-col gap-1' },
        React.createElement('div', { className: 'text-[10px] font-bold uppercase text-slate-500 tracking-wider px-3 mb-2' }, 'Control Domains'),
        tabs.map((tab) =>
          React.createElement(
            'button',
            {
              key: tab.id,
              onClick: () => setActiveAdminTab(tab.id),
              className: `w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-all ${
                activeAdminTab === tab.id ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`,
            },
            React.createElement('span', { className: 'material-symbols-outlined text-base' }, tab.icon),
            tab.label
          )
        )
      ),

      // Main content
      React.createElement(
        'main',
        { className: 'flex-1 p-8 overflow-y-auto' },
        React.createElement(
          'div',
          { className: 'max-w-4xl mx-auto space-y-6' },
          React.createElement(
            'div',
            { className: 'bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl' },
            React.createElement(
              'div',
              { className: 'flex items-center justify-between pb-4 border-b border-slate-800' },
              React.createElement(
                'div',
                null,
                React.createElement('h2', { className: 'text-lg font-bold text-white' }, 'Admin Panel Ready for Implementation'),
                React.createElement(
                  'p',
                  { className: 'text-xs text-slate-400 mt-1' },
                  'Isolated structure initialized at /e-engine/admin-panel/. Drop your custom Admin views and widgets directly into this container.'
                )
              ),
              React.createElement(
                'span',
                { className: 'px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-full border border-emerald-500/20' },
                'Bridge Connected'
              )
            ),

            // Live Indicators Grid
            React.createElement(
              'div',
              { className: 'grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6' },
              React.createElement(
                'div',
                { className: 'bg-slate-950/60 p-4 rounded-xl border border-slate-800/80' },
                React.createElement('div', { className: 'text-slate-400 text-xs font-medium' }, 'Active SLA Target'),
                React.createElement('div', { className: 'text-2xl font-black text-white mt-1' }, `${config.slaTimerMinutes} minutes`),
                React.createElement('div', { className: 'text-[10px] text-blue-400 mt-1 truncate' }, config.slaAlertMessage)
              ),
              React.createElement(
                'div',
                { className: 'bg-slate-950/60 p-4 rounded-xl border border-slate-800/80' },
                React.createElement('div', { className: 'text-slate-400 text-xs font-medium' }, 'Active Banners'),
                React.createElement('div', { className: 'text-2xl font-black text-white mt-1' }, String(config.promotionalBanners?.filter((b) => b.active).length || 0)),
                React.createElement('div', { className: 'text-[10px] text-slate-400 mt-1' }, 'Syncing to Retail & Wholesale')
              ),
              React.createElement(
                'div',
                { className: 'bg-slate-950/60 p-4 rounded-xl border border-slate-800/80' },
                React.createElement('div', { className: 'text-slate-400 text-xs font-medium' }, 'Default Wholesale MOQ'),
                React.createElement('div', { className: 'text-2xl font-black text-white mt-1' }, `${config.moqLimits?.defaultMOQ || 50} units`),
                React.createElement('div', { className: 'text-[10px] text-emerald-400 mt-1' }, 'Tiered pricing enforced')
              )
            )
          )
        )
      )
    )
  );
}
