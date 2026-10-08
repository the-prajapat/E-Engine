/**
 * Role Router & Navigation Dispatcher
 * Splits user streams between Retail (B2C) and Wholesale (B2B) workflows.
 */

export const USER_ROLES = {
  BUSINESS: 'Business',
  PERSONAL: 'Personal',
  ADMIN: 'Admin',
};

export const ROUTE_DESTINATIONS = {
  LOGIN: '/login',
  LOGIN_PERSONAL: '/login/personal',
  LOGIN_BUSINESS: '/login/business',
  WHOLESALE_PORTAL: '/wholesale-mode/dealers',
  WHOLESALE_DISCOVERY: '/wholesale-mode/discovery',
  WHOLESALE_CHECKOUT: '/wholesale-mode/checkout',
  WHOLESALE_DEAL_ROOM: '/wholesale-mode/deal-room',
  WHOLESALE_DASHBOARD: '/wholesale-mode/business-dashboard',
  RETAIL_HOME: '/retail-mode/home',
  RETAIL_CART: '/retail-mode/cart',
  RETAIL_TRACKING: '/retail-mode/live-tracking',
  SHARED_PROFILE: '/shared/profile',
  ONBOARDING_ROLE_SELECTION: '/onboarding/role-selection',
};

/**
 * Routes user according to their account profile / role selection.
 * @param {string} userRole - 'Business' | 'Personal' | string
 * @returns {string} Target Route Path
 */
export function routeByUserRole(userRole) {
  switch (userRole) {
    case USER_ROLES.BUSINESS:
      return ROUTE_DESTINATIONS.WHOLESALE_PORTAL;

    case USER_ROLES.PERSONAL:
      return ROUTE_DESTINATIONS.RETAIL_HOME;

    default:
      return ROUTE_DESTINATIONS.LOGIN;
  }
}
