import React from 'react';
import { stitchTheme } from '../theme.config.js';

/**
 * LoadingSkeleton Component
 * STRICT RULE: Dumb presentation placeholder.
 */
export default function LoadingSkeleton({ count = 4, message = 'Fetching data...' }) {
  return (
    <div style={{ padding: '2rem 1.5rem', textAlign: 'center' }}>
      <div
        style={{
          display: 'inline-block',
          width: '32px',
          height: '32px',
          border: `3px solid ${stitchTheme.colors.border}`,
          borderTopColor: stitchTheme.colors.primary,
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
          marginBottom: '1rem',
        }}
      />
      <p style={{ margin: 0, fontSize: '0.9rem', color: stitchTheme.colors.textMuted }}>{message}</p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '1rem',
          marginTop: '1.5rem',
        }}
      >
        {Array.from({ length: count }).map((_, idx) => (
          <div
            key={idx}
            style={{
              height: '220px',
              backgroundColor: stitchTheme.colors.border,
              borderRadius: stitchTheme.radius.lg,
              opacity: 0.35,
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
