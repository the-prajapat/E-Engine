# Current Project State

## Active Phase
- **Phase 4 & Live Mobile Testing Phase**

## Current Status
- **Live Local Server & Mobile Access Online**:
  - Vite dev server running on `http://0.0.0.0:5173/`
  - Local Network URL: `http://192.168.29.98:5173/`
  - Generated mobile QR code: `mobile-preview-qr.png`
  - All 14 visual reference screens + Login suite connected via `App.jsx` mobile shell with interactive floating screen switcher.
- **Dedicated Login Folder Active (`/src/pages/login/`)**:
  - `PersonalLogin.jsx`, `BusinessLogin.jsx`, `UnifiedLogin.jsx`, `index.js`
- **Technical Architectural Clarification**:
  - Codebase is built on React (Web / Responsive DOM & Tailwind styling).
  - Mobile testing is supported via local network QR code scanning directly in any mobile phone browser (Chrome/Safari) with zero setup.
  - Native Expo Go requires React Native primitives (`<View>`, `<Text>`), which can be provided if mobile native APK/bundle compilation is desired.

## Architectural Decisions Log (ADR)
- **ADR-001**: Strict Separation of Concerns: Dumb UI components (`/ui-ux-design/components`) contain zero direct API calls.
- **ADR-002**: Two-tier Audience Partitioning: Handled at routing level via `role-router.js` dispatching between Retail (B2C) and Wholesale (B2B) modes.
- **ADR-003**: Dedicated Authentication Boundary: Login screens are isolated into their own dedicated directory (`/src/pages/login/`).
- **ADR-004**: Interactive Mobile Shell: `App.jsx` provides real-time mobile preview for all 14 screens simultaneously.
- **ADR-005**: Zero-friction Mobile Live Preview: Network host enabled with QR code generation for instant testing on physical smartphones.
