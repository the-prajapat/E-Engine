import React, { useState } from 'react';
import { RetailHome, WholesaleHome } from './pages/index.js';

/**
 * Root Application Container
 * Bridges Smart Page Containers with live state switching.
 */
export default function App() {
  const [activeMode, setActiveMode] = useState('retail');

  return (
    <div style={{ minHeight: '100vh', width: '100%' }}>
      {activeMode === 'retail' ? (
        <RetailHome onSwitchToWholesale={() => setActiveMode('wholesale')} />
      ) : (
        <WholesaleHome onSwitchToRetail={() => setActiveMode('retail')} />
      )}
    </div>
  );
}
