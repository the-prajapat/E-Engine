# Current Project State

## Active Phase
- **Mobile Viewport Refactoring & Production Architecture Elevation**

## Current Status
- **Issue 1: Strict Mobile Viewport & Icon Scaling Fix**:
  - Entire layout constrained to mobile container: `w-full max-w-md mx-auto min-h-screen bg-neutral-50 relative pb-20 overflow-x-hidden`.
  - Horizontal scrollbars, cut-off cards, and misaligned margins eliminated.
  - All icons normalized to standard bounding boxes (`w-5 h-5` / `w-6 h-6`) with minimum 44x44px mobile tap targets.
- **Issue 2: Visual Refresh & Color Elevation**:
  - Primary: Deep Trust Blue (`#1E40AF` / `#2563EB`).
  - Accents: Vibrant Quick-Commerce Green (`#16A34A`) & Warning/CTA Orange (`#EA580C`).
  - Surfaces: Crisp White (`#FFFFFF`) with subtle elevation (`shadow-sm`, `border border-slate-100`).
  - Typography: Dark slate headings (`#0F172A`) with high readability.
- **Issue 3: Developer Overlays Permanently Removed**:
  - Removed floating Stitch screen switcher, dropdowns, and drawer modal from `App.jsx` and headers.
  - Production compiled client behavior with zero prototype artifacts.
- **Issue 4: Mandatory Root Gate & Role-Based Entry Routing**:
  - First-time/unauthenticated launch defaults to `RoleSelection.jsx` in `/src/pages/onboarding/`.
  - Two entry gates: "Personal Use (Retail)" -> 10-minute quick commerce vs "For Business (Wholesale)" -> B2B Marketplace Hub.
  - Persistent state in `localStorage` (`e_engine_user_role`). Mode switcher toggle strictly placed inside respective Profile pages.
- **Issue 5: Fully Functional Bottom Navigation Bar**:
  - `MobileBottomNav.jsx` tied to active state with filled Material Symbols and active accent highlights.
  - Retail Mode Tabs: Home, Categories, Cart, Profile.
  - Wholesale Mode Tabs: Home, Search, Orders, Messages, Profile.
  - Smooth tab mounting without full-page reloads.
- **Issue 6: State Safety & Zero-Loop Architecture**:
  - All `useEffect` hooks across `/src/pages` audited with cancellation flags (`isMounted`) and clean dependency arrays.
  - Components in `/src/ui-ux-design` strictly dumb (props-only).
- **Verification & Integrity**:
  - `npm test`: Passed (0 errors).
  - `npm run test:sprite`: 9/9 test suites passed (0 errors) with status `CONNECTED_AUTHORIZED`.
  - `npm run build`: Production bundle compiled in 277ms (0 errors).
  - Dev server: Live on `http://localhost:5173/` and `http://192.168.29.98:5173/`.

## Architectural Decisions Log (ADR)
- **ADR-013**: Production Mobile Client Architecture: Standardized mobile viewport to 448px max width container, eliminated debug overlays, implemented dual-mode bottom navigation, and decoupled role gate onboarding with persistent state.
- **ADR-012**: Currency & Locale Localization: Standardized all pricing, tiered MOQ rates, discounts, delivery thresholds, and delivery tracking tips to INR (₹) across both retail B2C and wholesale B2B modules.
