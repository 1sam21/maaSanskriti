# MaaSanskriti Sovereign Talent Platform

Welcome to the **MaaSanskriti Sovereign Talent Platform**. This project is a modern, scalable web platform designed to facilitate a 45-day Talent Hunt program focused on the regions of Bangalore and Port Blair. It serves as a unified digital ecosystem to onboard candidates, connect partners, track verification metrics, and highlight project success stories related to traditional and creative disciplines (Film, Fashion, Music, Art).

This project strictly adheres to a unique design system called **"Vedic Modernism,"** blending heritage aesthetics with premium, modern digital experiences.

---

## 📖 Table of Contents
1. [Project Overview](#1-project-overview)
2. [Key Features & Architecture](#2-key-features--architecture)
3. [Technology Stack](#3-technology-stack)
4. [Project Structure](#4-project-structure)
5. [Getting Started (For New Members)](#5-getting-started-for-new-members)
6. [Design Philosophy: Vedic Modernism](#6-design-philosophy-vedic-modernism)
7. [Database Setup (MongoDB)](#7-database-setup-mongodb)

---

## 1. Project Overview

The **MaaSanskriti Talent Hunt (Stage 1)** is an initiative designed to scout, verify, and mentor emerging artists. The digital platform has been purpose-built to map directly to the 45-day operational reality of the project.

**The platform enables:**
- Stage 2 On-Ground Verification tracking.
- A seamless, secure waitlist onboarding flow for prospective talent, mentors, and partners.
- An impact dashboard displaying project success (e.g., 50,000+ digital impressions, 150+ verified candidates).
- A localized showcase ("Talent Treasury") highlighting artists from our Bangalore and Port Blair hubs.

---

## 2. Key Features & Architecture

The project employs a decoupled **Client-Server Architecture**:

### Frontend (React + Vite)
- **Roadmap & Timeline Tracking:** Visual breakdowns of the 4-stage talent hunt cycle and the 7 candidate video tasks.
- **Onboarding Flow:** An SEO-optimized Waitlist Registration interface that dynamically connects to the backend API.
- **Partner & Sponsorship Portals:** Integrates with official collaborators like *Identity Event Management* and the *Treefe Application*, providing details on CSR brand integration.
- **Responsive Layout:** Engineered with Tailwind CSS using fluid Typography and padding grids.

### Backend (Node.js + Express)
- **RESTful API:** Exposes endpoints (like `POST /api/waitlist`) to receive and process data from the React frontend.
- **MongoDB Integration:** securely stores waitlist submissions with a strict schema (`WaitlistUser`) ensuring data integrity regarding Names, Emails, Phone numbers, and user Roles.

---

## 3. Technology Stack

### Frontend
- **Framework:** React 19 (via Vite)
- **Styling:** Tailwind CSS (configured for the custom *Vedic Modernism* palette)
- **Routing:** React Router v6
- **Icons:** Material Symbols Outlined (Google)

### Backend
- **Environment:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (via Mongoose ODM)
- **Utilities:** `dotenv` (Environment variables), `cors` (Cross-origin resource sharing)

---

## 4. Project Structure

When you clone the repository, you'll see the following structure:

```text
stitch_sovereign_talent_platform/
├── MebSite/MaaSanskriti_Project_Document.pdf  # The official source-of-truth document.
├── backend/                                   # Node.js Express server
│   ├── models/
│   │   └── WaitlistUser.js                    # Mongoose Data Schema
│   ├── routes/
│   │   └── waitlist.js                        # API Endpoint logic
│   ├── .env.example                           # Template for DB connection strings
│   ├── server.js                              # Backend Entry Point
│   └── package.json
├── frontend/                                  # React / Vite Client App
│   ├── src/
│   │   ├── components/
│   │   │   └── Layout.jsx                     # Global sticky Navbar and Footer
│   │   ├── pages/
│   │   │   ├── Home.jsx                       # Project landing page
│   │   │   ├── Timeline.jsx                   # The 45-day cycle stages
│   │   │   ├── Roadmap.jsx                    # Candidate tasks and outcomes
│   │   │   ├── Onboarding.jsx                 # Dynamic waitlist form
│   │   │   ├── TalentTreasury.jsx             # Showcase of Bangalore/Port Blair artists
│   │   │   ├── ImpactStatistics.jsx           # Data visualization of project reach
│   │   │   ├── PartnerEcosystem.jsx           # Collaborator showcase
│   │   │   └── Sponsorship.jsx                # CSR Brand Opportunity deliverables
│   │   ├── App.jsx                            # React Router config
│   │   ├── index.css                          # Tailwind injected base styles
│   │   └── main.jsx
│   ├── tailwind.config.js                     # Centralized Design System Tokens
│   └── package.json
└── vedic_modernism/
    └── DESIGN.md                              # Required reading: Aesthetic guidelines
```

---

## 5. Getting Started (For New Members)

To get this project running on your local machine, follow these steps in your terminal. You will need to run the Frontend and the Backend in two separate terminal windows.

### Step 1: Install Dependencies
```bash
# Terminal 1: Navigate to backend and install
cd backend
npm install

# Terminal 2: Navigate to frontend and install
cd frontend
npm install
```

### Step 2: Configure MongoDB (The Backend)
1. You must have a MongoDB Atlas account. Set up a free cluster.
2. In the `backend/` directory, duplicate the `.env.example` file and rename it to `.env`.
3. Open `.env` and replace `MONGODB_URI` with your actual Atlas connection string (ensure your IP is whitelisted in Atlas Network settings).
4. **Start the server:**
   ```bash
   cd backend
   npm start # or 'node server.js'
   ```
   *You should see a message confirming port 5000 and a successful MongoDB connection.*

### Step 3: Run the Frontend
With the backend running, start the Vite development server in your second terminal.
```bash
cd frontend
npm run dev
```
Open the provided `http://localhost:5173/` link in your browser to view the application!

---

## 6. Design Philosophy: Vedic Modernism

This platform is not built with standard SaaS UI frameworks. We employ a custom aesthetic, documented fully in `vedic_modernism/DESIGN.md`. All new components must adhere to these rules:

- **The Layering Principle:** Depth is created through light and layer stacking (`surface-container-low` vs `surface-container-high`), **never** through harsh black box-shadows.
- **The "No-Line" Rule:** We do not use explicit 1px solid borders to section content. Boundaries are defined by whitespace and background color shifts.
- **Atmospheric Typography:** Playfair Display (Serif) is used for large, high-contrast expressive statements with tight tracking. Inter (Sans-Serif) covers all utility text.
- **Palette:** Rely entirely on the custom Tailwind config colors—deep forest greens (`primary`), muted terracotta (`secondary`), and off-whites (`surface`). Do not use default HTML hex colors.

---

## 7. Database Setup (MongoDB)

The Waitlist functionality heavily relies on MongoDB. If you look inside `backend/models/WaitlistUser.js`, the schema is strictly defined to accept:
- `name` (String, required)
- `email` (String, required, unique)
- `phone` (String, optional)
- `role` (Enum array locking inputs to known categories like 'Talent' or 'Mentor')

**If a user fails to submit to the waitlist from `Onboarding.jsx`**, check the browser console for `CORS` errors or ensure that `server.js` successfully outputted `✅ Connected to MongoDB successfully.`.
