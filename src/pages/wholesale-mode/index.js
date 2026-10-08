/**
 * Wholesale Mode (B2B) Screens Index
 * Exports all wholesale screens and route constants:
 *   • WholesaleHome: B2B Dashboard with Bulk Deals and Dealers
 *   • DealerCatalog: Dealer inventory view with wholesale pricing, MOQ, bulk cart
 *   • LiveDealRoom: Real-time negotiation room with Live Deal Board & custom numpad
 *   • BusinessDashboard: Verified business banner, GST, stats, Tax docs, settings
 *   • WholesaleCartCheckout: B2B Cart & Checkout with SKUs, weights, 18% GST invoice
 *   • WholesaleHubSearch: Discovery screen with MOQ filter, categories, and distributors
 */

export { default as WholesaleHome } from './WholesaleHome.jsx';
export { default as DealerCatalog } from './DealerCatalog.jsx';
export { default as LiveDealRoom } from './LiveDealRoom.jsx';
export { default as BusinessDashboard } from './BusinessDashboard.jsx';
export { default as WholesaleCartCheckout } from './WholesaleCartCheckout.jsx';
export { default as WholesaleHubSearch } from './WholesaleHubSearch.jsx';

export const WHOLESALE_ROUTES = {
  HOME: '/wholesale-mode/home',
  DEALER_LIST: '/wholesale-mode/dealers',
  CATALOG: '/wholesale-mode/catalog',
  LIVE_NEGOTIATION: '/wholesale-mode/live-negotiation',
  DEAL_ROOM: '/wholesale-mode/deal-room',
  BUSINESS_DASHBOARD: '/wholesale-mode/business-dashboard',
  CHECKOUT: '/wholesale-mode/checkout',
  DISCOVERY: '/wholesale-mode/discovery',
};
