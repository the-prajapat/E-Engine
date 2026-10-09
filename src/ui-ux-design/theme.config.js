/**
 * Stitch AI Theme & Visual Tokens Configuration
 * UI Presentation Layer — /src/ui-ux-design/
 *
 * STRICT RULE: Dumb configuration only. Zero API or database dependencies.
 */

export const stitchTheme = {
  colors: {
    primary: '#2563eb',
    primaryHover: '#1d4ed8',
    primaryLight: '#eff6ff',
    secondary: '#0f172a',
    accent: '#10b981',
    accentWarning: '#f59e0b',
    accentDanger: '#ef4444',
    bgLight: '#f8fafc',
    bgCard: '#ffffff',
    bgDark: '#0b1120',
    border: '#e2e8f0',
    borderDark: '#1e293b',
    textMain: '#0f172a',
    textMuted: '#64748b',
    textLight: '#f8fafc',
  },
  typography: {
    fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    headingWeight: 700,
    bodyWeight: 400,
    mediumWeight: 500,
    semiBoldWeight: 600,
  },
  radius: {
    sm: '6px',
    md: '10px',
    lg: '16px',
    xl: '24px',
    full: '9999px',
  },
  shadows: {
    subtle: '0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04)',
    card: '0 4px 14px rgba(15, 23, 42, 0.06)',
    elevated: '0 10px 25px -3px rgba(37, 99, 235, 0.12), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
  transitions: {
    fast: 'all 0.15s ease',
    normal: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

export default stitchTheme;
