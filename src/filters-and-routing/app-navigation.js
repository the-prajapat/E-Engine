/**
 * App Navigation Structure
 * Configures Navigation bars, sidebars, headers, and bottom tabs for Retail vs Wholesale.
 */

export const retailNavItems = [
  { id: 'home', label: 'Home', path: '/retail-mode/home', icon: 'home' },
  { id: 'cart', label: 'Cart', path: '/retail-mode/cart', icon: 'shopping-cart' },
  { id: 'tracking', label: 'Live Tracking', path: '/retail-mode/live-tracking', icon: 'map-pin' },
  { id: 'profile', label: 'Profile', path: '/shared/profile', icon: 'user' },
];

export const wholesaleNavItems = [
  { id: 'discovery', label: 'Find Products', path: '/wholesale-mode/discovery', icon: 'search' },
  { id: 'dashboard', label: 'B2B Portal', path: '/wholesale-mode/dealers', icon: 'briefcase' },
  { id: 'catalog', label: 'Wholesale Catalog', path: '/wholesale-mode/catalog', icon: 'layers' },
  { id: 'dealroom', label: 'Live Deal Room', path: '/wholesale-mode/deal-room', icon: 'zap' },
  { id: 'checkout', label: 'Bulk Checkout', path: '/wholesale-mode/checkout', icon: 'file-text' },
  { id: 'business', label: 'Business Profile', path: '/wholesale-mode/business-dashboard', icon: 'shield' },
];

export const onboardingNavItems = [
  { id: 'role', label: 'Select Store Mode', path: '/onboarding/role-selection', icon: 'users' },
];
