/**
 * Feature Flags Engine
 * Toggle switches for turning features ON/OFF across B2B, B2C, and Experimental pipelines.
 */

export const FEATURE_FLAGS = {
  // Core Modules
  ENABLE_B2B_WHOLESALE_MODE: true,
  ENABLE_B2C_RETAIL_MODE: true,
  ENABLE_MULTI_VENDOR_PORTAL: true,

  // Commerce Features
  ENABLE_LIVE_NEGOTIATION: true,
  ENABLE_TIERED_VOLUME_PRICING: true,
  ENABLE_REVIEWS_AND_RATINGS: true,

  // Experimental Playground Features (Isolated)
  ENABLE_AI_VOICE_ASSISTANT: false,
  ENABLE_SMART_AUTO_CART: false,
  ENABLE_NEW_UI_BETA: false,
};

/**
 * Check if a specific feature flag is active
 * @param {keyof typeof FEATURE_FLAGS} flagKey
 * @returns {boolean}
 */
export function isFeatureEnabled(flagKey) {
  return Boolean(FEATURE_FLAGS[flagKey]);
}
