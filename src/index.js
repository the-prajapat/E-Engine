/**
 * Modular E-Commerce Engine (B2B & B2C)
 * Main Application Architecture Entry Point
 */

// Design System & Themes
export * from './ui-ux-design/theme.config.js';
export * from './ui-ux-design/typography.js';
export * from './ui-ux-design/spacing.js';
export * from './ui-ux-design/components/index.js';

// Core Configuration & Routing
export * from './core-config/app-settings.js';
export * from './core-config/feature-flags.js';
export * from './filters-and-routing/role-router.js';
export * from './filters-and-routing/auth-guard.js';
export * from './filters-and-routing/app-navigation.js';

// Screens & Feature Modules
export * from './pages/login/index.js';
export * from './pages/onboarding/index.js';
export * from './pages/retail-mode/index.js';
export * from './pages/wholesale-mode/index.js';
export * from './pages/shared/index.js';
export { default as VoiceSearchModal } from './experimental-features/voice-search/VoiceSearchModal.jsx';
