/**
 * Login Module Index
 * Dedicated Authentication directory for both Personal (Retail B2C) and Business (Wholesale B2B)
 */

export { default as PersonalLogin } from './PersonalLogin.jsx';
export { default as BusinessLogin } from './BusinessLogin.jsx';
export { default as UnifiedLogin } from './UnifiedLogin.jsx';

export const LOGIN_ROUTES = {
  UNIFIED_LOGIN: '/login',
  PERSONAL_LOGIN: '/login/personal',
  BUSINESS_LOGIN: '/login/business',
};
