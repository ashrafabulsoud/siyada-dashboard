# SiyadaTech Executive Dashboard — Technical Specification

## Stack

| Layer | Technology | Notes |
|---|---|---|
| Framework | React 18 + Vite | Fast build, modern React |
| Styling | Tailwind CSS v3 | Utility-first, custom theme |
| Charts | Recharts | Revenue charts, KPI gauges |
| Routing | React Router v6 | Login route + Dashboard route |
| Auth & DB | Appwrite (self-hosted) | See Appwrite config below |
| Icons | Lucide React | Consistent icon set |
| State | React Context + useState | No Redux needed at this scale |
| Deployment | Static build served via Appwrite or Nginx | Output: /dist |

---

## Project Structure

```
siyada-dashboard/
├── public/
│   └── logo.svg
├── src/
│   ├── appwrite/
│   │   └── config.js          # Appwrite client, auth, database helpers
│   ├── components/
│   │   ├── auth/
│   │   │   └── LoginPage.jsx
│   │   ├── dashboard/
│   │   │   ├── Header.jsx
│   │   │   ├── PhaseTracker.jsx
│   │   │   ├── EngineCard.jsx
│   │   │   ├── RevenueChart.jsx
│   │   │   ├── SprintTracker.jsx
│   │   │   ├── KPITable.jsx
│   │   │   ├── RiskRegister.jsx
│   │   │   ├── TeamOverview.jsx
│   │   │   └── ImmediateNeeds.jsx
│   │   └── ui/
│   │       ├── StatusBadge.jsx
│   │       ├── MetricCard.jsx
│   │       └── SectionHeader.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── data/
│   │   └── dashboardData.js   # All pre-filled and placeholder data
│   ├── pages/
│   │   ├── Login.jsx
│   │   └── Dashboard.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## Appwrite Configuration

### Self-Hosted Setup

The app connects to a self-hosted Appwrite instance. All connection values are loaded from environment variables.

```env
# .env.local
VITE_APPWRITE_ENDPOINT=https://your-appwrite-domain/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=siyada_dashboard
VITE_APPWRITE_COLLECTION_ID=dashboard_data
```

### Appwrite Services Used

**1. Authentication (appwrite/auth)**
- Use Appwrite Email/Password authentication.
- The dashboard has a single admin account created manually in the Appwrite console.
- No public registration. Login page only.
- On successful login, store session in AuthContext and redirect to dashboard.
- Protected route: any unauthenticated access to `/dashboard` redirects to `/login`.

**2. Database (optional, for future live data)**
- Create a Database: `siyada_dashboard`
- Create a Collection: `dashboard_data`
- For Phase 1 of the dashboard, data is sourced from `src/data/dashboardData.js` (static).
- The architecture should allow easy migration to Appwrite Database reads later — abstract data fetching behind a `useData()` hook so the source can be swapped.

### Appwrite Client Setup (src/appwrite/config.js)

```javascript
import { Client, Account, Databases } from 'appwrite';

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);
export default client;
```

---

## Authentication Flow

1. User visits `/` or `/dashboard` → redirected to `/login`.
2. Login page renders: email + password fields + "Sign In" button.
3. On submit: call `account.createEmailPasswordSession(email, password)`.
4. On success: update AuthContext, redirect to `/dashboard`.
5. On failure: show inline error message ("Invalid credentials. Please try again.").
6. Session persists via Appwrite session cookie — user stays logged in on refresh.
7. Logout button in dashboard header calls `account.deleteSession('current')` and redirects to `/login`.

---

## Routing

```
/login        → LoginPage (public)
/             → redirect to /login if not authenticated, else to /dashboard
/dashboard    → Dashboard (protected — requires active Appwrite session)
```

---

## Tailwind Custom Theme

Add to `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      navy: {
        900: '#071320',
        800: '#0B1929',
        700: '#0F2236',
        600: '#152D47',
      },
      gold: {
        400: '#E8C070',
        500: '#D4A853',
        600: '#B8882F',
      },
      slate: {
        dashboard: '#8B9DB5',
      }
    },
    fontFamily: {
      display: ['Playfair Display', 'serif'],
      body: ['DM Sans', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    }
  }
}
```

Import Google Fonts in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet">
```

---

## Build & Deployment

```bash
npm install
npm run build
# Output in /dist — deploy to Appwrite hosting or serve via Nginx
```

Vite config should set `base: '/'` for root-level deployment.

---

## Placeholder Data Convention

In `dashboardData.js`, all values that require Dali's input are marked with a `__PLACEHOLDER__` flag and a `note` field explaining what is needed. Example:

```javascript
{
  value: 0,
  __PLACEHOLDER__: true,
  note: "Awaiting actual revenue figures from Dali — Q1 actuals to date"
}
```

Placeholder fields render with a dashed amber border and a small "Update needed" badge so they are immediately visible during the review meeting.
