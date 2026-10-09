import React from 'react';

export default function App() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui, -apple-system, sans-serif', backgroundColor: '#090d16', color: '#f8fafc' }}>
      <div style={{ textAlign: 'center', padding: '2rem', maxWidth: '480px' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚡</div>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem', letterSpacing: '-0.025em' }}>E-Engine Clean Slate</h1>
        <p style={{ color: '#94a3b8', fontSize: '0.925rem', lineHeight: 1.5 }}>
          Frontend UI/UX and Auth directories wiped clean. Ready for new design system and specifications.
        </p>
      </div>
    </main>
  );
}
