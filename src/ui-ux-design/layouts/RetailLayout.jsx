import React from 'react';
import { stitchTheme } from '../theme.config.js';

/**
 * RetailLayout (Stitch AI Layout Shell)
 * STRICT RULE: Pure dumb presentation layout slot.
 */
export default function RetailLayout({ header, children, footer, banner }) {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: stitchTheme.colors.bgLight,
        display: 'flex',
        flexDirection: 'column',
        fontFamily: stitchTheme.typography.fontFamily,
      }}
    >
      {header}
      {banner && (
        <div style={{ padding: '1rem 1.5rem 0', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          {banner}
        </div>
      )}
      <main style={{ flex: 1, padding: '1.5rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {children}
      </main>
      {footer}
    </div>
  );
}
