/**
 * UnifiedLogin.js
 * Master Authentication Container Component
 * Located in dedicated `/src/pages/login/` module
 *
 * Features:
 *   • Top Tab Bar to seamlessly toggle between:
 *       – 🛍️ Personal Account (Retail B2C)
 *       – 🏢 Business Account (Wholesale B2B)
 *   • Renders PersonalLogin or BusinessLogin based on active mode
 *   • Global Dark Mode toggle awareness
 *   • Dispatches to role-based routes after authentication
 */

import React, { useState } from 'react';
import PersonalLogin from './PersonalLogin.jsx';
import BusinessLogin from './BusinessLogin.jsx';
import { routeByUserRole, USER_ROLES } from '../../filters-and-routing/role-router.js';

export default function UnifiedLogin({
  initialRole = 'personal',
  isDark = false,
  onLoginSuccess = () => {},
}) {
  const [activeTab, setActiveTab] = useState(initialRole); // 'personal' | 'business'

  const handleSuccess = (authData) => {
    const roleKey = activeTab === 'business' ? USER_ROLES.BUSINESS : USER_ROLES.PERSONAL;
    const destination = routeByUserRole(roleKey);
    if (onLoginSuccess) {
      onLoginSuccess({
        ...authData,
        destination,
      });
    } else {
      window.location.hash = destination;
    }
  };

  const brandBlue = '#1a56db';
  const borderCol = isDark ? '#1e2d47' : '#e2e8f0';

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: isDark ? '#070d1a' : '#f5f7fc',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* ─── Mode Selector Tab Bar ─────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: '460px',
          width: '100%',
          margin: '24px auto 0',
          padding: '0 16px',
        }}
      >
        <div
          style={{
            backgroundColor: isDark ? '#0f1829' : '#ffffff',
            border: `1.5px solid ${borderCol}`,
            borderRadius: '16px',
            padding: '6px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '6px',
            boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
          }}
        >
          <button
            onClick={() => setActiveTab('personal')}
            style={{
              border: 'none',
              borderRadius: '12px',
              padding: '12px',
              fontSize: '14px',
              fontWeight: activeTab === 'personal' ? 800 : 600,
              backgroundColor: activeTab === 'personal' ? brandBlue : 'transparent',
              color: activeTab === 'personal' ? '#ffffff' : isDark ? '#94a3b8' : '#64748b',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'all 180ms ease',
            }}
          >
            <span>🛍️</span>
            Personal (Retail)
          </button>

          <button
            onClick={() => setActiveTab('business')}
            style={{
              border: 'none',
              borderRadius: '12px',
              padding: '12px',
              fontSize: '14px',
              fontWeight: activeTab === 'business' ? 800 : 600,
              backgroundColor: activeTab === 'business' ? '#0a235c' : 'transparent',
              color: activeTab === 'business' ? '#ffffff' : isDark ? '#94a3b8' : '#64748b',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'all 180ms ease',
            }}
          >
            <span>🏢</span>
            Business (Wholesale)
          </button>
        </div>
      </div>

      {/* ─── Active Auth Screen ────────────────────────────────────────────── */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {activeTab === 'personal' ? (
          <PersonalLogin
            isDark={isDark}
            onLoginSuccess={handleSuccess}
            onSwitchToBusiness={() => setActiveTab('business')}
          />
        ) : (
          <BusinessLogin
            isDark={isDark}
            onLoginSuccess={handleSuccess}
            onSwitchToPersonal={() => setActiveTab('personal')}
          />
        )}
      </div>
    </div>
  );
}
