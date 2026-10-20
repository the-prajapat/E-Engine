import { useState, useCallback } from 'react';

const STORAGE_KEY = 'e_engine_user_role';

/**
 * useUserRole Hook — /e-engine/user-panel/logic/useUserRole.js
 * Encapsulates role selection, mode switching (B2C vs B2B), and persistent session storage.
 */
export function useUserRole() {
  const [userRole, setUserRole] = useState(() => {
    try {
      if (typeof localStorage !== 'undefined') {
        return localStorage.getItem(STORAGE_KEY) || null;
      }
    } catch {
      // Graceful fallback
    }
    return null;
  });

  const selectRole = useCallback((role) => {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, role);
      }
    } catch (err) {
      console.warn('LocalStorage unavailable:', err);
    }
    setUserRole(role);
  }, []);

  const switchRole = useCallback((newRole) => {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, newRole);
      }
    } catch (err) {
      console.warn('LocalStorage unavailable:', err);
    }
    setUserRole(newRole);
  }, []);

  const resetRole = useCallback(() => {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch (err) {
      console.warn('LocalStorage unavailable:', err);
    }
    setUserRole(null);
  }, []);

  return {
    userRole,
    selectRole,
    switchRole,
    resetRole,
  };
}
