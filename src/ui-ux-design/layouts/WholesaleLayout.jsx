import React from 'react';
import { stitchTheme } from '../theme.config.js';

/**
 * WholesaleLayout (Stitch AI Layout Shell)
 * STRICT RULE: Pure dumb presentation layout slot.
 */
export default function WholesaleLayout({ header, children, sidebar, footer }) {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f1f5f9',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: stitchTheme.typography.fontFamily,
      }}
    >
      {header}
      <div style={{ flex: 1, display: 'flex', maxWidth: '1360px', margin: '0 auto', width: '100%' }}>
        {sidebar && (
          <aside
            style={{
              width: '260px',
              padding: '1.5rem',
              borderRight: `1px solid ${stitchTheme.colors.border}`,
              backgroundColor: stitchTheme.colors.bgCard,
            }}
          >
            {sidebar}
          </aside>
        )}
        <main style={{ flex: 1, padding: '1.5rem', overflowY: 'auto' }}>
          {children}
        </main>
      </div>
      {footer}
    </div>
  );
}
