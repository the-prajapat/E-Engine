/**
 * Supabase Client Initialization
 * Isolated Backend Engine: Provides database, auth, and realtime connection.
 */

// Supabase environment keys
export const SUPABASE_CONFIG = {
  url: process?.env?.SUPABASE_URL || 'https://your-project.supabase.co',
  anonKey: process?.env?.SUPABASE_ANON_KEY || 'your-anon-key',
};

/**
 * Supabase client placeholder
 * Initialized when @supabase/supabase-js is installed and environment keys are injected.
 */
export const supabase = {
  auth: null,
  from: (table) => ({
    select: () => Promise.resolve({ data: [], error: null }),
    insert: () => Promise.resolve({ data: [], error: null }),
    update: () => Promise.resolve({ data: [], error: null }),
    delete: () => Promise.resolve({ data: [], error: null }),
  }),
};
