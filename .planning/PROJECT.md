# Project Overview: White-Label Multi-Vendor E-Commerce Engine (B2B & B2C)

## Vision & Goals
Build an enterprise-grade, highly scalable, white-label Multi-Vendor E-Commerce Engine supporting dual commercial models:
- **B2C (Retail Mode)**: Classic consumer shopping experience (Browse, PDP, Cart, Checkout, Reviews).
- **B2B (Wholesale Mode)**: Bulk purchasing, Tiered dealer pricing, Quotation management, Minimum Order Quantities (MOQ), and Live Negotiation.

## Core Architectural Pillars
1. **Strict Separation of Concerns**: UI design system and dumb components must never mix with domain/business logic or data services.
2. **Future-Proof Modularization**: Every architectural concern (Theme Engine, Core Config, Filters & Routing, Backend Engine, Experimental Features) resides in isolated domains.
3. **White-Label & Theming Readiness**: Multi-tenant rebranding (logos, typography, color palettes, spacing) can be achieved by touching only specific configuration files without destabilizing core runtime.
4. **Experimental Sandboxing**: Unreleased and bleeding-edge features (AI voice assistant, smart auto-cart, beta interfaces) remain strictly isolated in `/experimental-features` before graduation.

## Tech Stack
- **Architecture**: Modular Frontend Architecture (ES Modules)
- **Design System**: Vanilla CSS Tokens / CSS Variables, Theme Engine (`/ui-ux-design`)
- **Backend & Persistence**: Supabase (Auth, Postgres, Realtime, Storage)
- **Routing & Guards**: Role-based Split Routing (Retail vs Wholesale), Auth Guards
