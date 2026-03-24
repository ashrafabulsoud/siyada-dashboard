# Claude Code Prompt — SiyadaTech Executive Dashboard

## How to Use This Prompt

Paste the entire content below this line into Claude Code and run it from the root of a new empty directory named `siyada-dashboard`. Claude Code will read the three specification files and build the complete application. Ensure all four files (this prompt + PROJECT_BRIEF.md + TECH_SPEC.md + DASHBOARD_SPEC.md) are in the same directory before running.

---

## PROMPT START

You are building a production-grade React web application: the SiyadaTech Executive Dashboard. This is a confidential, password-protected living dashboard for the board of directors and C-level leadership of SiyadaTech, a Saudi AI company targeting a 5-year IPO path.

Read the following three files in full before writing a single line of code:
- `PROJECT_BRIEF.md` — company context, purpose, and design direction
- `TECH_SPEC.md` — full technical specification including Appwrite setup, project structure, routing, and theming
- `DASHBOARD_SPEC.md` — complete dashboard layout, all sections, all data, and placeholder conventions

Once you have read all three files, execute the following steps in order. Do not skip any step.

---

### STEP 1: Scaffold the Project

Initialize a new Vite + React project:

```bash
npm create vite@latest . -- --template react
npm install
npm install react-router-dom recharts lucide-react appwrite
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Create the exact folder structure defined in TECH_SPEC.md under the `src/` directory.

---

### STEP 2: Configure Tailwind

Apply the custom theme from TECH_SPEC.md to `tailwind.config.js`. Include the navy color scale, gold accent colors, and the three font families (Playfair Display, DM Sans, JetBrains Mono). Add the Google Fonts import to `index.html`. Set the Tailwind content paths to include all `src/**/*.{js,jsx}` files.

---

### STEP 3: Configure Appwrite

Create `src/appwrite/config.js` exactly as specified in TECH_SPEC.md. Use `import.meta.env` to load all environment variables. Export `account`, `databases`, and the `client`.

Create `.env.example` with the four required environment variables and clear comments explaining where to find each value in the Appwrite console.

---

### STEP 4: Build the Data Layer

Create `src/data/dashboardData.js` with all data from DASHBOARD_SPEC.md fully structured as JavaScript objects and arrays. Every placeholder field must include the `__PLACEHOLDER__: true` flag and a descriptive `note` string as specified. Organize the data by section: `companySnapshot`, `phases`, `engines`, `sprintPlan`, `revenueProjection`, `kpis`, `risks`, `immediateNeeds`, `team`.

---

### STEP 5: Build Authentication

Create `src/context/AuthContext.jsx` that:
- Uses React Context to store the current user session
- On mount, calls `account.get()` to check for an active Appwrite session
- Exposes `user`, `loading`, `login(email, password)`, and `logout()` functions
- The `login` function calls `account.createEmailPasswordSession(email, password)`
- The `logout` function calls `account.deleteSession('current')`

Create `src/components/auth/LoginPage.jsx` with:
- Full-screen dark navy background matching the brand
- Centered card with the SiyadaTech name in Playfair Display
- Email and password inputs with the brand styling
- "Sign In" button in gold
- Inline error message on failure (do not use alert())
- Loading state on the button during the async call
- The label "CONFIDENTIAL — BOARD ACCESS" in small muted text below the form

Create `src/pages/Login.jsx` that renders `LoginPage`.

---

### STEP 6: Build the Protected Route

In `src/App.jsx`, set up React Router with:
- `/login` → `Login` page (public)
- `/dashboard` → `Dashboard` page (protected)
- `/` → redirect to `/login` if not authenticated, `/dashboard` if authenticated
- A `ProtectedRoute` component that checks the AuthContext and redirects unauthenticated users to `/login`

---

### STEP 7: Build the Dashboard Layout

Create `src/pages/Dashboard.jsx` as the main container. It imports and renders all dashboard sections in the order specified in DASHBOARD_SPEC.md. Use a fixed top header and a scrollable main content area with generous padding. Apply a deep navy background (`bg-navy-900`) to the full page.

---

### STEP 8: Build Each Dashboard Component

Build every component listed in TECH_SPEC.md under `src/components/dashboard/`. For each component, follow the exact specification in DASHBOARD_SPEC.md for the data it displays. Apply the brand theme throughout: navy backgrounds, gold accents, white and muted slate text, Playfair Display for section headings, DM Sans for body text.

**Header.jsx**
Fixed top bar with the SiyadaTech name, "CONFIDENTIAL — BOARD VIEW" label, last-updated date (use `new Date().toLocaleDateString()`), and a logout button that calls `logout()` from AuthContext.

**PhaseTracker.jsx**
Horizontal timeline of the six phases. The current phase (Foundation, 85%) has a gold highlight and a "YOU ARE HERE" marker. Completed portions of the bar are filled in gold. Future phases are muted navy outlines. Each phase shows its name, compressed duration, and status.

**EngineCard.jsx**
Reusable card component that accepts engine data as props. Renders: engine name and tagline, status badge, metrics table, and task checklist. Completed tasks show a gold checkmark. Placeholder fields render with a dashed amber border and the "⚠ Needs Update" badge. The three engine cards are displayed in a responsive three-column grid.

**RevenueChart.jsx**
Recharts `BarChart` with stacked bars, one bar per year (Y1–Y5). Use the five color values defined in DASHBOARD_SPEC.md. Show a legend below the chart. Add a tooltip showing the breakdown on hover. Display the TOTAL row as a label above each bar. Include the note about 92% SaaS composition at IPO below the chart.

**SprintTracker.jsx**
Three-column board (Week 1 Prep / Week 2–3 Launch / Month 2–3 Scale). Each column is a card. Each task renders as a checklist item with a status indicator. Include the Q1 Revenue Target progress bar at the bottom — a horizontal bar from SAR 0 to SAR 700,000 with the current value (placeholder) marked.

**KPITable.jsx**
A styled table with columns: KPI, Engine, Target, Current, Status. Status renders as a colored dot (🟢 🟡 🔴 ⬜). Placeholder rows are visually differentiated. The table header uses gold text on a slightly lighter navy background.

**RiskRegister.jsx**
A card-based list of the five risks from DASHBOARD_SPEC.md. Each card shows: risk name, severity badge (Critical = red, High = amber), mitigation text, and status tag. Critical risks have a subtle red left border. High risks have an amber left border.

**ImmediateNeeds.jsx**
Five numbered cards in a grid (3 top row, 2 bottom row). Each card shows the priority number in large Playfair Display gold, the action title, owner, deadline, and a status badge. The layout should feel like the five boxes in the original War Plan slide.

**TeamOverview.jsx**
A structured layout with three sections: Command (Dali + CTO), Business Unit (Dr. Wajdi, Amina, Hassan), Engineering Core (6 AI Engineers, 1 Data Engineer, 1 PM). Show a note about the Tunisia surge team at the bottom. Use the same card style as the rest of the dashboard.

---

### STEP 9: Build Reusable UI Components

Create the three shared components in `src/components/ui/`:

**StatusBadge.jsx** — Accepts `status` prop with values: `'live'`, `'in-progress'`, `'closing'`, `'upcoming'`, `'critical'`, `'high'`, `'on-track'`, `'action-required'`. Renders a colored pill badge with appropriate colors.

**MetricCard.jsx** — A card with a metric label, value, and optional status badge. If the value has `__PLACEHOLDER__: true`, render with dashed amber border and "⚠ Needs Update" overlay text.

**SectionHeader.jsx** — Renders a section title in Playfair Display with a gold left border accent and an optional subtitle in DM Sans muted text.

---

### STEP 10: Final Checks

1. Verify all routes work: `/login` renders the login page, `/dashboard` requires authentication.
2. Verify the Appwrite session check on mount prevents a flash of the dashboard before auth resolves (use a loading state in AuthContext that shows a full-screen navy loader while `account.get()` is resolving).
3. Verify all placeholder fields render with the dashed amber border and "⚠ Needs Update" badge.
4. Verify the revenue chart renders correctly with all five stacked data series.
5. Verify the page is fully responsive — the engine cards stack to a single column on mobile, and the KPI table scrolls horizontally on small screens.
6. Run `npm run build` and confirm the build completes without errors.

---

### FINAL DELIVERABLES

When complete, confirm the following files exist and are correct:
- `src/appwrite/config.js`
- `src/context/AuthContext.jsx`
- `src/data/dashboardData.js`
- `src/components/auth/LoginPage.jsx`
- `src/pages/Login.jsx`
- `src/pages/Dashboard.jsx`
- All 8 dashboard section components
- All 3 UI components
- `src/App.jsx` with routing
- `tailwind.config.js` with custom theme
- `.env.example`
- `index.html` with Google Fonts

Then run `npm run build` and report success.

## PROMPT END
