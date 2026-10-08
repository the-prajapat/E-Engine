/**
 * Authentication Services
 * Login / Signup / Session logic interfaces.
 * Connects directly to Supabase Auth when credentials are provided.
 */

import { supabase } from '../supabase-client.js';

export async function loginWithEmail(email, password) {
  if (supabase.auth) {
    return await supabase.auth.signInWithPassword({ email, password });
  }
  return { user: null, session: null, error: null };
}

export async function loginWithOtp(phone) {
  if (supabase.auth) {
    return await supabase.auth.signInWithOtp({ phone });
  }
  return { data: { message: 'OTP sent in dummy mode' }, error: null };
}

export async function verifyOtp(phone, token) {
  if (supabase.auth) {
    return await supabase.auth.verifyOtp({ phone, token, type: 'sms' });
  }
  return { user: { phone, role: 'personal' }, error: null };
}

export async function loginWithMagicLink(email) {
  if (supabase.auth) {
    return await supabase.auth.signInWithOtp({ email });
  }
  return { data: { message: 'Magic link sent in dummy mode' }, error: null };
}

export async function signupWithEmail(email, password, userMetadata = {}) {
  if (supabase.auth) {
    return await supabase.auth.signUp({ email, password, options: { data: userMetadata } });
  }
  return { user: null, session: null, error: null };
}

export async function logoutUser() {
  if (supabase.auth) {
    return await supabase.auth.signOut();
  }
  return { error: null };
}
