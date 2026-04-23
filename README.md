## PROMPT

I am working with Nuxt 3 and currently have a static framework-based project. I want to convert it into a high-performance Progressive Web App (PWA) that works offline and behaves like a native app.
Please guide me step-by-step and help me implement the following properly:
A valid manifest.webmanifest (including name, icons, theme colors, and display mode)
Service worker setup using best practices (preferably using @vite-pwa/nuxt if applicable)
Offline caching strategies (cache-first / network-first where appropriate)
Proper PWA icon generation and configuration for all required sizes
Correct service worker registration in Nuxt 3
Performance optimizations for PWA (lazy loading, caching static assets, etc.)
Ensure the final setup is production-ready, installable, and passes PWA audit checks (Lighthouse).
 Also, explain where I need to click or edit files in a clear step-by-step manner since I may need guidance on file locations and configuration placement.




# 🎓 Alumni Hub – Document Request System
### Nuxt 3 Frontend — Faithful recreation of the Figma prototype

---

## 📁 Project Structure

```
alumni-hub/
├── app.vue                        # Root entry point
├── nuxt.config.ts                 # Nuxt configuration
├── package.json
│
├── assets/css/
│   └── main.css                   # All global styles + design tokens
│
├── layouts/
│   └── default.vue                # Mobile shell layout (centers 420px content)
│
├── composables/
│   ├── useAppState.ts             # Shared state: role, currentRequest
│   └── useMockData.ts             # All mock data (users, documents, requests)
│
├── components/
│   ├── BottomNav.vue              # Bottom navigation bar (auto-switches by role)
│   ├── FormInput.vue              # Reusable labeled input
│   ├── RequestCard.vue            # Alumni request card (with status badge)
│   └── StaffRequestCard.vue       # Staff request card (with approve/reject actions)
│
└── pages/
    ├── index.vue                  # Login page (Alumni + Staff role selector)
    │
    ├── alumni/
    │   ├── dashboard.vue          # Alumni Dashboard (stats, request CTA, links)
    │   ├── profile.vue            # Alumni Profile (account info, logout)
    │   ├── request.vue            # Document Selection (pick doc + price)
    │   ├── appointment.vue        # Schedule Appointment (date + time picker)
    │   ├── review.vue             # Review Request Summary (doc, date, price)
    │   ├── tracker.vue            # Order Tracker (step-by-step status)
    │   └── history.vue            # Transaction History (payments + receipts)
    │
    └── staff/
        ├── dashboard.vue          # Staff Dashboard (stats + manage link)
        ├── profile.vue            # Staff Profile (account info, logout)
        └── filter.vue             # Status Filter (manage all requests)
```

---

## 🚀 How to Run

### Prerequisites
- Node.js 18+ installed

### Steps

```bash
# 1. Enter the project folder
cd alumni-hub

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

---

## 🔐 Login & Roles

On the login page (`/`):
- Select **Alumni** → logs in as alumni (Ruvic Santos)
- Select **Staff** → logs in as staff (Admin Staff)

No real authentication. Any email/password works. Click **Login** to proceed.

---

## 📱 Page-by-Page Guide

### Alumni Flow

| Page | Route | What it does |
|------|-------|-------------|
| Login | `/` | Role selector + login form |
| Dashboard | `/alumni/dashboard` | Stats (pending/approved/ready), request CTA, quick links |
| Profile | `/alumni/profile` | Account info (email, student ID, account type), logout |
| Request | `/alumni/request` | Select document type and see prices |
| Appointment | `/alumni/appointment` | Pick date and time for pickup |
| Review | `/alumni/review` | Summary of doc, schedule, payment before submitting |
| Tracker | `/alumni/tracker` | Real-time step tracker (Order Placed → Processing → QC → Delivery) |
| History | `/alumni/history` | Past transactions with amounts and statuses |

### Staff Flow

| Page | Route | What it does |
|------|-------|-------------|
| Login | `/` | Same login, select Staff role |
| Dashboard | `/staff/dashboard` | Stats summary, manage requests CTA, pending alert |
| Profile | `/staff/profile` | Staff account info, logout |
| Filter | `/staff/filter` | Filter requests by All/Pending/Approved/Rejected/Ready; approve/reject/mark ready |

---

## 🎨 Design Notes

- **Colors**: Navy blue (`#1a2b6b`) as primary — matches Figma exactly
- **Fonts**: Playfair Display (headings) + DM Sans (body)
- **Layout**: Mobile-first, 420px max-width centered on desktop
- **No backend**: All state lives in Vue `ref()` and Nuxt `useState()` composables
- **Status updates**: Clicking Approve/Reject/Mark Ready mutates the reactive `staffRequests` array instantly

---

## 🛠 Tech Stack

- **Nuxt 3** (Vue 3 + auto-imports)
- **Pure CSS** (no Tailwind needed — all styles in `assets/css/main.css`)
- **CSS Variables** for design tokens
- **Nuxt `useState`** for shared state across pages
- **Vue `computed` + `ref`** for reactive filtering and mock data mutations

---

## ✅ PWA Transformation

- Branch: `feature/pwa-ready`
- Status: install prompt appears in Chrome, manifest detected, service worker registered, offline assets cached.

### Master Prompt

> I am using Nuxt 3. Help me convert this static framework-based project into a high-performance offline-ready Progressive Web App with a valid manifest, service worker registration, caching strategies, and PWA icons.

### Manual fixes / hallucinations

- Added an explicit `link rel="manifest" href="/manifest.webmanifest"` entry in `nuxt.config.ts` because Chrome did not detect the generated manifest automatically.
- Added `scope`, `start_url`, and screenshot metadata to the manifest to improve install UI and remove Chrome warnings.
- Created `.gitignore` and removed generated `.nuxt/` and `node_modules/` from git tracking so the repo stays clean.
- Verified the install button by restarting the dev server and hard-refreshing Chrome.
