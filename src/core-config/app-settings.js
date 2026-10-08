/**
 * Core Application Settings & Constants
 * Single source of configuration truth for the white-label engine.
 */

export const APP_SETTINGS = {
  appName: 'Modular E-Commerce Engine',
  version: '1.0.0-beta',
  apiEndpoints: {
    base: process?.env?.VITE_API_BASE_URL || 'https://api.e-engine.internal/v1',
    auth: '/auth',
    catalog: '/products',
    orders: '/orders',
    vendors: '/vendors',
    negotiation: '/negotiations',
  },
  supportedLocales: ['en-US', 'es-ES', 'ar-SA'],
  defaultCurrency: 'USD',
  pagination: {
    defaultPageSize: 20,
    maxPageSize: 100,
  },
};
