import { useState, useEffect } from 'react';

/**
 * Global Bridge — /e-engine/shared-core/global-bridge.js
 * Central reactive communication bridge across Admin Panel, User Panel, and Dealer Panel.
 *
 * Synchronizes:
 * - SLA Timers (e.g., 10-minute delivery countdown & thresholds)
 * - Promotional Banners & Announcements (Add, Remove, Toggle)
 * - AI Smart Cart Rules (split order rules, delivery minimums)
 * - Verified Badges & Vendor Status
 * - Minimum Order Quantities (MOQ) & Volume Discount Tiers
 * - Registered Dealers Directory & Badging
 */

const STORAGE_KEY = 'e_engine_shared_bridge_state';

// Default Master Configuration
export const DEFAULT_SHARED_CONFIG = {
  // 1. SLA Delivery Timers
  slaTimerMinutes: 10,
  slaAlertMessage: 'Express Dark Store dispatch in under 10 minutes',
  expressDispatchEnabled: true,

  // 2. Promotional Banners
  promotionalBanners: [
    {
      id: 'banner-retail-1',
      title: 'Flat ₹150 OFF on Your First 10-Min Order',
      subtitle: 'Use code QUICK150 at checkout (Min order ₹299)',
      audience: 'retail',
      active: true,
      badge: 'PROMO',
      code: 'QUICK150',
    },
    {
      id: 'banner-wholesale-1',
      title: 'B2B Monsoon Machinery Fest: Up to 22% Volume Rebate',
      subtitle: 'Tiered wholesale discounts applied automatically on MOQ > 100',
      audience: 'wholesale',
      active: true,
      badge: 'B2B MEGA DEAL',
      code: 'BULK22',
    },
  ],

  // 3. AI Smart Cart Rules
  aiSmartCartRules: {
    enableSplitAlert: true,
    darkStoreThreshold: 149,
    partnerDealerThreshold: 499,
    freeDeliveryMinimum: 299,
    splitWarningText: 'Split Order Alert: Items will arrive in 2 separate shipments for fastest delivery.',
  },

  // 4. Verified Badges & Vendor Standards
  verifiedBadges: {
    verifiedDealer: { label: 'Verified Dealer', icon: 'verified', color: '#10b981', enabled: true },
    fastDelivery: { label: '10-Min Quick Delivery', icon: 'bolt', color: '#0066cc', enabled: true },
    isoCertified: { label: 'ISO 9001:2015 Certified', icon: 'shield_with_heart', color: '#6366f1', enabled: true },
    qualityAssured: { label: 'Quality Assured', icon: 'workspace_premium', color: '#f59e0b', enabled: true },
  },

  // 5. Minimum Order Quantities (MOQ) & Wholesale Pricing Rules
  moqLimits: {
    defaultMOQ: 50,
    enforceStrictMOQ: true,
    discountTiers: [
      { id: 'tier-1', minUnits: 50, discountPct: 5, label: 'Starter Wholesale (5% Off)' },
      { id: 'tier-2', minUnits: 100, discountPct: 10, label: 'Dealer Tier (10% Off)' },
      { id: 'tier-3', minUnits: 500, discountPct: 18, label: 'Enterprise Distributor (18% Off)' },
    ],
  },

  // 6. Registered Dealers & Live Verification Status
  dealersList: [
    {
      id: 'd1',
      name: 'Sharma Bearing & Industrial Spares',
      rating: 4.9,
      reviewsCount: 342,
      category: 'Bearings, Fasteners & Hardware',
      verified: true,
      fastDispatch: true,
      isoCertified: true,
      qualityAssured: true,
      gstin: '08AAAAA1234A1Z1',
      city: 'Jaipur, Rajasthan',
    },
    {
      id: 'd2',
      name: 'Rajkot Fluid Dynamics & Valves Ltd.',
      rating: 4.8,
      reviewsCount: 189,
      category: 'Pumps, Valves & Piping',
      verified: true,
      fastDispatch: true,
      isoCertified: false,
      qualityAssured: true,
      gstin: '24BBBBB5678B1Z2',
      city: 'Rajkot, Gujarat',
    },
    {
      id: 'd3',
      name: 'Apex Industrial Fasteners & Bolts',
      rating: 4.6,
      reviewsCount: 114,
      category: 'Industrial Hardware & Fasteners',
      verified: false,
      fastDispatch: false,
      isoCertified: false,
      qualityAssured: false,
      gstin: '07CCCCC9012C1Z3',
      city: 'Delhi NCR',
    },
    {
      id: 'd4',
      name: 'Gujarat Precision Gears & Tools',
      rating: 4.7,
      reviewsCount: 96,
      category: 'Machinery & Transmission',
      verified: true,
      fastDispatch: false,
      isoCertified: true,
      qualityAssured: false,
      gstin: '24DDDDD3456D1Z4',
      city: 'Ahmedabad, Gujarat',
    },
  ],
};

// In-Memory State & Subscriptions
let currentState = loadPersistedState();
const subscribers = new Set();

function loadPersistedState() {
  try {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_SHARED_CONFIG, ...JSON.parse(saved) };
      }
    }
  } catch (err) {
    console.warn('[GlobalBridge] LocalStorage read failed:', err);
  }
  return { ...DEFAULT_SHARED_CONFIG };
}

function persistState(state) {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
  } catch (err) {
    console.warn('[GlobalBridge] LocalStorage write failed:', err);
  }
}

/**
 * Get current snapshot of the synchronized bridge state
 */
export function getSharedConfig() {
  return { ...currentState };
}

/**
 * Update the shared bridge configuration.
 * Automatically broadcasts to all subscribers in Admin, User, and Dealer panels.
 * @param {Partial<typeof DEFAULT_SHARED_CONFIG>} patch
 */
export function updateSharedConfig(patch) {
  currentState = {
    ...currentState,
    ...patch,
    aiSmartCartRules: {
      ...currentState.aiSmartCartRules,
      ...(patch.aiSmartCartRules || {}),
    },
    verifiedBadges: {
      ...currentState.verifiedBadges,
      ...(patch.verifiedBadges || {}),
    },
    moqLimits: {
      ...currentState.moqLimits,
      ...(patch.moqLimits || {}),
    },
    promotionalBanners: patch.promotionalBanners || currentState.promotionalBanners,
    dealersList: patch.dealersList || currentState.dealersList,
  };

  persistState(currentState);
  subscribers.forEach((listener) => {
    try {
      listener(currentState);
    } catch (err) {
      console.error('[GlobalBridge] Error executing subscriber listener:', err);
    }
  });

  return currentState;
}

/**
 * Subscribe to live changes in the shared bridge.
 * @param {(state: typeof DEFAULT_SHARED_CONFIG) => void} listener
 * @returns {() => void} Unsubscribe function
 */
export function subscribeToBridge(listener) {
  subscribers.add(listener);
  return () => {
    subscribers.delete(listener);
  };
}

/**
 * Reset shared bridge to initial defaults
 */
export function resetSharedConfig() {
  currentState = { ...DEFAULT_SHARED_CONFIG };
  persistState(currentState);
  subscribers.forEach((listener) => listener(currentState));
  return currentState;
}

/**
 * React Hook for consuming and automatically re-rendering when the shared bridge updates.
 * Usable across User Panel, Admin Panel, and Dealer Panel.
 */
export function useGlobalBridge() {
  const [config, setConfig] = useState(getSharedConfig);

  useEffect(() => {
    const unsubscribe = subscribeToBridge((updated) => {
      setConfig({ ...updated });
    });
    return unsubscribe;
  }, []);

  return {
    config,
    updateConfig: updateSharedConfig,
    resetConfig: resetSharedConfig,
  };
}
