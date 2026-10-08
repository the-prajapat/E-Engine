/**
 * Retail Mode (B2C) Screens Index
 * Exports all retail screens and route constants:
 *   • RetailHome: Quick-commerce home screen with category chips & product grid
 *   • RetailCart: Smart Cart with Dark Store / Partner Dealer split & AI Smart Alert
 *   • LiveTracking: 3D isometric route map & delivery partner details
 */

export { default as RetailHome } from './RetailHome.jsx';
export { default as RetailCart } from './RetailCart.jsx';
export { default as LiveTracking } from './LiveTracking.jsx';

export const RETAIL_ROUTES = {
  HOME: '/retail-mode/home',
  PRODUCT_DETAILS: '/retail-mode/product-details',
  CART: '/retail-mode/cart',
  LIVE_TRACKING: '/retail-mode/live-tracking',
};
