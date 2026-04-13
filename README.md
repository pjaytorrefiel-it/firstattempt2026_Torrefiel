# Title
Torrefiel

## Framework
Nuxt JS

## Module
Module 1: Document Request

---


## Installation Guide

## Installation

### 1. Install prerequisites
Make sure you have the following installed:
- Node.js (LTS recommended): https://nodejs.org
- npm (comes with Node.js)

Check if installed:
node -v
npm -v

### 2. Create Nuxt project (if not yet created)
npx nuxi init firstattempt2026_torrefiel
cd firstattempt2026_torrefiel
npm install

### 3. Clone the repository (if using GitHub)
git clone https://github.com/pjaytorrefiel-it/firstattempt2026_torrefiel.git

### 4. Go to project folder
cd firstattempt2026_torrefiel

### 5. Install dependencies
npm install

### 6. Run the project
npm run dev

### 7. Open in browser
http://localhost:3000

---

## AI Tools used: 

1. Claude
2. ChatGPT
3. VS Code - Github Copilot (Auto)

---

## Prompts

### First Prompt

I have a high-fidelity Figma prototype for a school system called:

"Alumni Hub – Document Request System"

I want to recreate it EXACTLY as a Nuxt 3 WEB APPLICATION.

IMPORTANT RULES:
- This MUST be a WEB APP (desktop-first, but responsive)
- DO NOT redesign anything
- DO NOT change layout, structure, spacing, or flow
- Keep the design EXACTLY the same as the Figma prototype
- Convert the design into a responsive web layout WITHOUT changing its visual appearance
- Maintain pixel-accuracy as much as possible
- Use clean component-based structure
- Use CSS or Tailwind for styling
- Focus on replicating UI and UX exactly

--------------------------------------------------

RESPONSIVENESS REQUIREMENTS:

- The design should look EXACT on desktop (primary target)
- On smaller screens (tablet/mobile):
  - Scale elements proportionally
  - Stack layouts when needed (e.g., sidebars → top navigation or collapsible menu)
  - Maintain spacing, alignment, and visual hierarchy
  - DO NOT redesign — only adapt layout for responsiveness

--------------------------------------------------

SYSTEM OVERVIEW:

There are TWO USER ROLES:

1. Alumni
2. Staff

Each role has its own pages, dashboards, and features.

--------------------------------------------------

ALUMNI FLOW:

1. Alumni Login Page
- User logs in using university account
- Purpose: track document requests and appointments

2. Alumni Dashboard
- Displays:
  - Pending requests
  - Approved requests
  - Ready documents
- User can track all requested documents

3. Alumni Profile Page
- Displays account information

4. Document Request Selection Page
- Shows list of available documents

5. Appointment Selection Page
- Shows:
  - Document options
  - Prices
  - Available schedules

6. Request Review Page
- Shows summary:
  - Selected document
  - Date
  - Time
  - Price

7. Order Tracker Page
- Tracks status in real time:
  - Processing
  - Approved
  - Ready for release

8. Transaction History Page
- Shows:
  - Payment history
  - Dates
  - Amounts
  - Receipts

--------------------------------------------------

STAFF FLOW:

1. Staff Login Page
- Login using university email

2. Staff Dashboard
- Displays:
  - Pending requests
  - Approved
  - Ready documents

3. Staff Profile Page
- Shows staff account info

4. Status Filter Page
- Staff can filter requests by:
  - Pending
  - Approved
  - Completed
- Helps manage and approve requests

--------------------------------------------------

TECHNICAL REQUIREMENTS:

- Use Nuxt 3
- Use Vue 3 Composition API
- Organize into:
  - pages/
  - components/
  - layouts/

Suggested pages structure:

pages/
- index.vue (login)
- alumni/dashboard.vue
- alumni/profile.vue
- alumni/request.vue
- alumni/appointment.vue
- alumni/review.vue
- alumni/tracker.vue
- alumni/history.vue
- staff/dashboard.vue
- staff/profile.vue
- staff/filter.vue

components/
- Navbar.vue
- Sidebar.vue
- RequestCard.vue
- RequestTable.vue
- FormInput.vue

--------------------------------------------------

STATE HANDLING:

- No backend
- Use mock data (arrays/objects)
- Simulate request statuses
- Implement simple role switching:

Example:
const role = "alumni" or "staff"

--------------------------------------------------

OUTPUT FORMAT:

Provide:

1. Complete folder structure
2. All Nuxt files (pages, components, layouts)
3. Sample mock data
4. Styling (CSS or Tailwind)
5. Navigation between pages
6. Responsive layout handling
7. Clean, readable, and maintainable code

--------------------------------------------------

EXTRA:

Also explain briefly:
- how each page works
- how responsiveness is handled
- how to run the project

--------------------------------------------------

IMPORTANT:

This project is based on an EXISTING FIGMA DESIGN.

Your goal is to:
- replicate it as a WEB APPLICATION
- keep the design visually identical
- only adapt layout for responsiveness (NOT redesign)

---

## Screenshots

### Login Page Alumni
<img width="1919" height="961" alt="alumni-login" src="https://github.com/user-attachments/assets/c33447ea-e5bc-4789-a255-abf11d8ab14a" />


### Alumni Dashboard
<img width="1914" height="971" alt="alumni-dashboard" src="https://github.com/user-attachments/assets/f79ee95a-654e-47db-8911-2502be479278" />


### Request Page Alumni
<img width="1914" height="965" alt="alumni-select" src="https://github.com/user-attachments/assets/9ee17d06-17a4-4367-b7e1-7230dc1d5a87" />

### Schedule Alumni
<img width="1914" height="965" alt="alumni-select" src="https://github.com/user-attachments/assets/a69a815e-bf0f-4b2b-bb67-9ef4befe39b6" />

### Summary Order Alumni
<img width="1919" height="899" alt="alumni-review-req" src="https://github.com/user-attachments/assets/95305a73-e684-420b-ac83-f28f7dab3d15" />

### History of Orders Alumni
<img width="1917" height="911" alt="alumni-myprofile" src="https://github.com/user-attachments/assets/c86bbc42-96d4-42e9-b508-d9ab394e9799" />

### My Profile Alumni
<img width="1917" height="911" alt="alumni-myprofile" src="https://github.com/user-attachments/assets/5c83bd9d-548d-4db7-a936-6695d5f44418" />

---    

### Staff Login
<img width="1903" height="971" alt="staff-login" src="https://github.com/user-attachments/assets/3b172458-9558-479d-8697-0b91bf16b1b6" />

### Staff Dahsboard
<img width="1917" height="908" alt="staff-dashboard" src="https://github.com/user-attachments/assets/920413b8-473b-4d79-9175-7dcd2990a06b" />

### Staff Management
<img width="1919" height="907" alt="staff-management" src="https://github.com/user-attachments/assets/d6a629ea-d596-484a-9af2-760c5ebd11f3" />

### Staff My Profile
<img width="1919" height="960" alt="staff-myprofile" src="https://github.com/user-attachments/assets/c4484a79-77f1-46af-9a10-dee8919c79e3" />



