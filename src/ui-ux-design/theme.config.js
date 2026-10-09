/**
 * Stitch AI Theme & Visual Tokens Configuration
 * UI Presentation Layer — /src/ui-ux-design/
 *
 * STRICT RULE: Dumb configuration only. Zero API or database dependencies.
 * Visual Refresh: Deep Trust Blue, Quick-Commerce Green, Alert Orange, Crisp Elevated Surfaces.
 */

export const stitchTheme = {
  colors: {
    // Deep Trust Blue
    primary: '#1E40AF',
    primaryHover: '#1D4ED8',
    primaryLight: '#EFF6FF',
    primaryDark: '#1E3A8A',

    // Vibrant Accents & Badges
    accentGreen: '#16A34A',
    accentGreenLight: '#DCFCE7',
    accentOrange: '#EA580C',
    accentOrangeLight: '#FFEDD5',

    // Neutral Surfaces & Elevation
    bgMobile: '#F8FAFC',
    bgCard: '#FFFFFF',
    bgDark: '#0F172A',
    border: '#E2E8F0',
    borderLight: '#F1F5F9',

    // High-Contrast Typography
    textHead: '#0F172A',
    textBody: '#334155',
    textMuted: '#64748B',
    textLight: '#F8FAFC',
  },
  typography: {
    fontFamily: "'Plus Jakarta Sans', Inter, -apple-system, sans-serif",
    headingWeight: 800,
    subheadingWeight: 700,
    semiBoldWeight: 600,
    mediumWeight: 500,
    bodyWeight: 400,
  },
  radius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    full: '9999px',
  },
  shadows: {
    subtle: '0 1px 2px rgba(15, 23, 42, 0.04)',
    card: '0 4px 12px rgba(15, 23, 42, 0.05)',
    elevated: '0 12px 28px -4px rgba(30, 64, 175, 0.12), 0 4px 10px -2px rgba(0, 0, 0, 0.04)',
    float: '0 20px 35px -5px rgba(15, 23, 42, 0.2)',
  },
  transitions: {
    fast: 'all 0.15s ease',
    normal: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

export default stitchTheme;
