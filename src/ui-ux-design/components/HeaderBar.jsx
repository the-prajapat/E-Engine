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
  subtitle = 'Powered by Stitch AI',
  userName = 'Guest User',
  itemCount = 0,
  onToggleMode,
  activeMode = 'retail',
}) {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 1.5rem',
        backgroundColor: stitchTheme.colors.bgCard,
        borderBottom: `1px solid ${stitchTheme.colors.border}`,
        boxShadow: stitchTheme.shadows.subtle,
      }}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '1.25rem' }}>✨</span>
          <h1
            style={{
              margin: 0,
              fontSize: '1.15rem',
              fontWeight: stitchTheme.typography.headingWeight,
              color: stitchTheme.colors.textMain,
            }}
          >
            {title}
          </h1>
        </div>
        <p
          style={{
            margin: '0.2rem 0 0 1.75rem',
            fontSize: '0.78rem',
            color: stitchTheme.colors.textMuted,
          }}
        >
          {subtitle}
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        {onToggleMode && (
          <button
            onClick={onToggleMode}
            type="button"
            style={{
              padding: '0.45rem 0.85rem',
              fontSize: '0.8rem',
              fontWeight: 600,
              border: `1px solid ${stitchTheme.colors.border}`,
              borderRadius: stitchTheme.radius.full,
              backgroundColor: activeMode === 'wholesale' ? '#0f172a' : '#2563eb',
              color: '#ffffff',
              cursor: 'pointer',
              transition: stitchTheme.transitions.fast,
            }}
          >
            Switch to {activeMode === 'retail' ? 'Wholesale (B2B)' : 'Retail (B2C)'}
          </button>
        )}

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 0.75rem',
            backgroundColor: stitchTheme.colors.bgLight,
            borderRadius: stitchTheme.radius.md,
            border: `1px solid ${stitchTheme.colors.border}`,
          }}
        >
          <span style={{ fontSize: '0.85rem' }}>👤</span>
          <span
            style={{
              fontSize: '0.825rem',
              fontWeight: 500,
              color: stitchTheme.colors.textMain,
            }}
          >
            {userName}
          </span>
          {itemCount > 0 && (
            <span
              style={{
                marginLeft: '0.25rem',
                backgroundColor: stitchTheme.colors.primary,
                color: '#ffffff',
                fontSize: '0.7rem',
                fontWeight: 700,
                padding: '0.1rem 0.45rem',
                borderRadius: stitchTheme.radius.full,
              }}
            >
              {itemCount}
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
