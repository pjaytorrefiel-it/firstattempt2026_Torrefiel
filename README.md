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
