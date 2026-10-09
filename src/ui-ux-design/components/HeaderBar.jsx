import React from 'react';
import { stitchTheme } from '../theme.config.js';

/**
 * HeaderBar Component (Stitch AI UI Shell)
 * STRICT RULE: Pure dumb presentation component. Accepts props only.
 *
 * @param {Object} props
 * @param {string} props.title - App/Module title
 * @param {string} [props.subtitle] - Context label
 * @param {string} [props.userName] - Display user name
 * @param {number} [props.itemCount] - Badge counter
 * @param {Function} [props.onToggleMode] - Switcher callback
 * @param {string} [props.activeMode] - 'retail' | 'wholesale'
 */
export default function HeaderBar({
  title = 'E-Engine Store',
  subtitle = 'Verified Catalog',
  userName = 'Shopper',
  itemCount = 0,
  onProfileClick,
  onSearchClick,
}) {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs px-4 py-3">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 text-blue-700">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              bolt
            </span>
          </div>
          <div className="flex flex-col min-w-0">
            <h1 className="text-sm font-bold text-slate-900 tracking-tight truncate">
              {title}
            </h1>
            <p className="text-[11px] font-medium text-slate-500 truncate">
              {subtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          {onSearchClick && (
            <button
              onClick={onSearchClick}
              type="button"
              aria-label="Search"
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">search</span>
            </button>
          )}

          <button
            onClick={onProfileClick}
            type="button"
            aria-label="User Profile"
            className="h-11 px-3 flex items-center gap-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 active:scale-95 transition-all border border-slate-200/60"
          >
            <span className="material-symbols-outlined text-[20px] text-blue-700">
              account_circle
            </span>
            <span className="text-xs font-bold max-w-[80px] truncate hidden sm:inline">
              {userName}
            </span>
            {itemCount > 0 && (
              <span className="bg-emerald-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ml-1">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
