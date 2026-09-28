# IDENTIA Web App

## Goal
Build a polished, responsive identity-protection product with a public landing page and five linked workspace screens. Use realistic sample data only; no login, database, or external services.

## What I’ll build
- Create a shared IDENTIA visual system using deep navy, plum, teal, amber, and the requested light background.
- Add a responsive app shell with a collapsible desktop sidebar and compact mobile navigation.
- Build dedicated pages for Dashboard, Identity Core, Identity Graph, Shadow Check, and Evidence Locker.
- Make the primary actions functional in the browser: navigation, adding a sample account, running a sample shadow check, filtering evidence, and opening case details.
- Add page-specific titles and social metadata, then verify the main flows on desktop and mobile.

## Page structure
- **Landing:** direct statement of the identity problem, five-step process, and a prominent Get started action.
- **Dashboard:** key counts, risk summary, recent detections, and account coverage.
- **Identity Core:** verified Instagram, GitHub, and LinkedIn accounts plus an Add account dialog.
- **Identity Graph:** an intentionally lightweight relationship-map preview with account and suspicious-profile nodes.
- **Shadow Check:** a focused form for checking a username or profile URL with a realistic sample result.
- **Evidence Locker:** searchable, filterable saved cases with status, platform, evidence count, and detail view.

## Technical details
- Keep everything frontend-only with React state and static mock data.
- Use TanStack Router pages and Lucide icons already available in the project.
- Centralize all colors, typography, shadows, radii, and motion in the global design system.
- Keep navigation type-safe and give every page unique metadata.
