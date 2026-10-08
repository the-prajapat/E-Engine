/**
 * Auth Guard
 * Route middleware to protect private screens and verify session state.
 */

export const PUBLIC_ROUTES = [
  '/onboarding/splash',
  '/onboarding/login',
  '/onboarding/role-selection',
];

/**
 * Route protection validator
 * @param {string} targetPath
 * @param {boolean} isAuthenticated
 * @returns {{ allowed: boolean, redirectPath?: string }}
 */
export function validateRouteAccess(targetPath, isAuthenticated) {
  const isPublic = PUBLIC_ROUTES.includes(targetPath);
  if (!isAuthenticated && !isPublic) {
    return {
      allowed: false,
      redirectPath: '/onboarding/login',
    };
  }
  return { allowed: true };
}
