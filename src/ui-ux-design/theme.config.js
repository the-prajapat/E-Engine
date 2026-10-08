/**
 * Theme Engine & Design System Configuration
 * Master switch for Light/Dark mode, Global Colors, and White-Label tokens.
 * Single Point of Truth for styling changes.
 * Updated: Phase 4 — Trust Blue corporate palette + Full Dark Mode support.
 */

export const THEME_MODES = {
  LIGHT: 'light',
  DARK: 'dark',
};

export const defaultThemeConfig = {
  currentMode: THEME_MODES.LIGHT,

  // Brand identity — "Trust Blue"
  primaryColor: '#1a56db',

  colors: {
    light: {
      primary:        '#1a56db',
      primaryHover:   '#1e429f',
      primaryLight:   '#e8f0fe',
      primaryGlow:    'rgba(26,86,219,0.15)',
      background:     '#f5f7ff',
      surface:        '#ffffff',
      surfaceAlt:     '#f0f4ff',
      cardBg:         '#ffffff',
      cardShadow:     '0 2px 12px rgba(26,86,219,0.08), 0 1px 3px rgba(0,0,0,0.06)',
      cardBorder:     '#e4eaf6',
      textPrimary:    '#0d1b3e',
      textSecondary:  '#4a5568',
      textMuted:      '#718096',
      textOnPrimary:  '#ffffff',
      success:        '#0d9488',
      successBg:      '#f0fdf4',
      warning:        '#d97706',
      warningBg:      '#fffbeb',
      danger:         '#dc2626',
      dangerBg:       '#fef2f2',
      info:           '#0284c7',
      accent:         '#f97316',
      accentHover:    '#ea6c0a',
      border:         '#e2e8f0',
      divider:        '#f1f5f9',
      inputBg:        '#ffffff',
      inputBorder:    '#cbd5e1',
      inputFocus:     '#1a56db',
    },
    dark: {
      primary:        '#3b82f6',
      primaryHover:   '#60a5fa',
      primaryLight:   'rgba(59,130,246,0.12)',
      primaryGlow:    'rgba(59,130,246,0.25)',
      background:     '#070d1a',
      surface:        '#0f1829',
      surfaceAlt:     '#152035',
      cardBg:         '#111f35',
      cardShadow:     '0 2px 16px rgba(0,0,0,0.5), 0 1px 4px rgba(59,130,246,0.1)',
      cardBorder:     '#1e2d47',
      textPrimary:    '#f0f6ff',
      textSecondary:  '#94a3b8',
      textMuted:      '#64748b',
      textOnPrimary:  '#ffffff',
      success:        '#34d399',
      successBg:      'rgba(52,211,153,0.1)',
      warning:        '#fbbf24',
      warningBg:      'rgba(251,191,36,0.1)',
      danger:         '#f87171',
      dangerBg:       'rgba(248,113,113,0.1)',
      info:           '#38bdf8',
      accent:         '#f97316',
      accentHover:    '#fb923c',
      border:         '#1e2d47',
      divider:        '#162031',
      inputBg:        '#111f35',
      inputBorder:    '#1e3a5f',
      inputFocus:     '#3b82f6',
    },
  },

  spacing: {
    xs: '4px', sm: '8px', md: '16px', lg: '24px',
    xl: '32px', xxl: '48px', xxxl: '64px',
  },

  radius: {
    sm: '6px', md: '12px', lg: '16px', xl: '24px', full: '9999px',
  },

  transitions: {
    fast: '120ms ease', normal: '220ms ease',
    slow: '380ms cubic-bezier(0.4,0,0.2,1)',
  },

  typography: {
    fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
    sizes: {
      xs: '11px', sm: '13px', base: '15px', md: '17px',
      lg: '20px', xl: '24px', xxl: '30px', hero: '38px',
    },
    weights: { regular: 400, medium: 500, semibold: 600, bold: 700, extrabold: 800 },
  },
};

/**
 * Apply theme to document root via CSS custom properties
 * @param {'light'|'dark'} mode
 */
export function applyTheme(mode) {
  const selectedMode = mode === THEME_MODES.DARK ? THEME_MODES.DARK : THEME_MODES.LIGHT;
  if (typeof document !== 'undefined') {
    const root = document.documentElement;
    const colors = defaultThemeConfig.colors[selectedMode];
    root.setAttribute('data-theme', selectedMode);
    Object.entries(colors).forEach(([key, value]) => {
      const cssVar = '--color-' + key.replace(/([A-Z])/g, '-$1').toLowerCase();
      root.style.setProperty(cssVar, value);
    });
  }
  return selectedMode;
}

/** @deprecated Use applyTheme() */
export function toggleThemeMode(mode) {
  return applyTheme(mode);
}
