import React from 'react';

/**
 * Admin UI Components — /e-engine/admin-panel/ui-ux-design/AdminUI.jsx
 * Presentation components tailored for Desktop Web Admin.
 */

export function AdminStatCard({ title, value, subtext, icon, trend, color = 'blue' }) {
  const colorMap = {
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg relative overflow-hidden flex flex-col justify-between">
      <div className="flex items-start justify-between">
        <div>
          <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{title}</span>
          <div className="text-2xl font-black text-white mt-1.5 tracking-tight">{value}</div>
        </div>
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${colorMap[color] || colorMap.blue}`}>
          <span className="material-symbols-outlined text-xl">{icon}</span>
        </div>
      </div>
      {(subtext || trend) && (
        <div className="mt-3 flex items-center gap-1.5 text-xs">
          {trend && <span className="font-semibold text-emerald-400">{trend}</span>}
          <span className="text-slate-400 truncate">{subtext}</span>
        </div>
      )}
    </div>
  );
}

export function AdminSectionHeader({ title, subtitle, children }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
      <div>
        <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">{title}</h2>
        {subtitle && <p className="text-xs text-slate-400 mt-1">{subtitle}</p>}
      </div>
      {children && <div className="flex items-center gap-2.5 shrink-0">{children}</div>}
    </div>
  );
}

export function ToggleSwitch({ checked, onChange, label, description }) {
  return (
    <label className="flex items-center justify-between gap-4 cursor-pointer py-2">
      {(label || description) && (
        <div className="flex flex-col">
          {label && <span className="text-xs font-semibold text-slate-200">{label}</span>}
          {description && <span className="text-[11px] text-slate-400">{description}</span>}
        </div>
      )}
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-200 focus:outline-none shrink-0 ${
          checked ? 'bg-blue-600' : 'bg-slate-800'
        }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </label>
  );
}
