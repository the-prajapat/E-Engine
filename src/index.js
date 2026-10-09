/**
 * Modular E-Commerce Engine (B2B & B2C)
 * Main Application Architecture Entry Point
 */

// Core Configuration & Navigation
export * from './core-config/app-settings.js';
export * from './core-config/feature-flags.js';
export * from './filters-and-routing/role-router.js';
export * from './filters-and-routing/app-navigation.js';

// Backend & Services
export * from './backend-engine/supabase-client.js';
export * from './backend-engine/data-services/index.js';
