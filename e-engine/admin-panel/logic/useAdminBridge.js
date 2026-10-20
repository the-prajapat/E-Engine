import { useCallback } from 'react';
import { useGlobalBridge } from '../../shared-core/global-bridge.js';

/**
 * useAdminBridge Hook — /e-engine/admin-panel/logic/useAdminBridge.js
 * High-level mutation orchestrator for Master Admin.
 * Broadcasts changes across User Panel and Dealer Panel in real time.
 */
export function useAdminBridge() {
  const { config, updateConfig, resetConfig } = useGlobalBridge();

  // 1. Promotional Banners Orchestration
  const addBanner = useCallback(
    ({ title, subtitle, audience = 'retail', badge = 'SPECIAL', code = '' }) => {
      const newBanner = {
        id: `banner-${Date.now()}`,
        title: title.trim(),
        subtitle: subtitle.trim(),
        audience,
        active: true,
        badge: badge.toUpperCase(),
        code: code.trim(),
      };
      updateConfig({
        promotionalBanners: [newBanner, ...(config.promotionalBanners || [])],
      });
      return newBanner;
    },
    [config.promotionalBanners, updateConfig]
  );

  const removeBanner = useCallback(
    (bannerId) => {
      const updated = (config.promotionalBanners || []).filter((b) => b.id !== bannerId);
      updateConfig({ promotionalBanners: updated });
    },
    [config.promotionalBanners, updateConfig]
  );

  const toggleBanner = useCallback(
    (bannerId) => {
      const updated = (config.promotionalBanners || []).map((b) =>
        b.id === bannerId ? { ...b, active: !b.active } : b
      );
      updateConfig({ promotionalBanners: updated });
    },
    [config.promotionalBanners, updateConfig]
  );

  // 2. SLA Delivery Timer & Dispatch Control
  const setSlaMinutes = useCallback(
    (minutes) => {
      const val = Math.max(1, Math.min(60, Number(minutes) || 10));
      updateConfig({
        slaTimerMinutes: val,
        slaAlertMessage: `Express Dark Store dispatch in under ${val} minutes`,
      });
    },
    [updateConfig]
  );

  const setSlaMessage = useCallback(
    (message) => {
      updateConfig({ slaAlertMessage: message });
    },
    [updateConfig]
  );

  const toggleExpressDispatch = useCallback(
    (enabled) => {
      updateConfig({ expressDispatchEnabled: enabled });
    },
    [updateConfig]
  );

  // 3. AI Smart Cart Rules
  const updateSmartCartRules = useCallback(
    (patch) => {
      updateConfig({
        aiSmartCartRules: {
          ...(config.aiSmartCartRules || {}),
          ...patch,
        },
      });
    },
    [config.aiSmartCartRules, updateConfig]
  );

  // 4. Dealer Badges & Compliance
  const toggleDealerBadge = useCallback(
    (dealerId, badgeKey) => {
      const updated = (config.dealersList || []).map((d) => {
        if (d.id === dealerId) {
          return { ...d, [badgeKey]: !d[badgeKey] };
        }
        return d;
      });
      updateConfig({ dealersList: updated });
    },
    [config.dealersList, updateConfig]
  );

  // 5. Wholesale MOQ Limits & Volume Pricing
  const setDefaultMOQ = useCallback(
    (moq) => {
      const val = Math.max(1, Number(moq) || 50);
      updateConfig({
        moqLimits: {
          ...(config.moqLimits || {}),
          defaultMOQ: val,
        },
      });
    },
    [config.moqLimits, updateConfig]
  );

  const toggleStrictMOQ = useCallback(
    (strict) => {
      updateConfig({
        moqLimits: {
          ...(config.moqLimits || {}),
          enforceStrictMOQ: strict,
        },
      });
    },
    [config.moqLimits, updateConfig]
  );

  const addDiscountTier = useCallback(
    ({ minUnits, discountPct, label }) => {
      const newTier = {
        id: `tier-${Date.now()}`,
        minUnits: Number(minUnits) || 100,
        discountPct: Number(discountPct) || 10,
        label: label || `Tier (${discountPct}% Off)`,
      };
      const existing = config.moqLimits?.discountTiers || [];
      const updatedTiers = [...existing, newTier].sort((a, b) => a.minUnits - b.minUnits);

      updateConfig({
        moqLimits: {
          ...(config.moqLimits || {}),
          discountTiers: updatedTiers,
        },
      });
    },
    [config.moqLimits, updateConfig]
  );

  const removeDiscountTier = useCallback(
    (tierId) => {
      const updatedTiers = (config.moqLimits?.discountTiers || []).filter((t) => t.id !== tierId);
      updateConfig({
        moqLimits: {
          ...(config.moqLimits || {}),
          discountTiers: updatedTiers,
        },
      });
    },
    [config.moqLimits, updateConfig]
  );

  return {
    config,
    // Banners
    addBanner,
    removeBanner,
    toggleBanner,
    // SLA
    setSlaMinutes,
    setSlaMessage,
    toggleExpressDispatch,
    // Smart Cart
    updateSmartCartRules,
    // Dealers
    toggleDealerBadge,
    // MOQ
    setDefaultMOQ,
    toggleStrictMOQ,
    addDiscountTier,
    removeDiscountTier,
    // Global reset
    resetToDefaults: resetConfig,
  };
}
