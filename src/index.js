/**
 * Modular E-Commerce Engine (B2B & B2C)
 * Main Application Architecture Entry Point
 */

// 1. UI Presentation Layer (Stitch AI Dumb Components & Tokens)
export * from './ui-ux-design/index.js';

// 2. API Integration Layer (MCB Connection & Data Fetchers)
export * from './backend-engine/api-integration/index.js';

// 3. Smart Pages Layer (Containers & State Handlers)
export * from './pages/index.js';

// 4. Core Configuration & Navigation
export * from './core-config/app-settings.js';
export * from './core-config/feature-flags.js';
export * from './filters-and-routing/role-router.js';
export * from './filters-and-routing/app-navigation.js';
