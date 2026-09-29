<div align="center">

# ⚡ SUDHANSHU.OS
### Next-Gen Engineering Portfolio & Interactive Case Study Platform

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-Variables_%26_Grid-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![LeetCode](https://img.shields.io/badge/LeetCode-100+_Solved_%7C_1580-FFA116?style=for-the-badge&logo=leetcode&logoColor=black)](https://leetcode.com/u/Sudhanshu___pandey/)
[![CodeChef](https://img.shields.io/badge/CodeChef-3%E2%98%85_Coder-5B4638?style=for-the-badge&logo=codechef&logoColor=white)](https://www.codechef.com/users/sudhanshu_1305)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

<p align="center">
  <b>A developer-first, futuristic OS dashboard portfolio designed for Computer Science Engineering students — engineered to scale seamlessly from 2nd year through 4th year placements, software engineering interviews, internships, and freelancing.</b>
</p>

[Explore Live Demo](https://github.com/pandeysudhanshu486-gif/protfolio) • [View Case Studies](#-featured-case-studies) • [Report Bug](https://github.com/pandeysudhanshu486-gif/protfolio/issues)

---

</div>

## 🌟 Key Highlights & Engineering Features

- 🖥️ **SUDHANSHU.OS Dashboard Interface:** Pinned HUD numbered sidebar (`01 Home` to `10 Contact`) with seamless single-view screen switching.
- ⚡ **30-Second Recruiter Pitch Mode (`⚡ 30s Pitch`):** Built-in instant summary modal providing engineering managers with top strengths, flagship project metrics, and one-click interview scheduling.
- 📄 **In-App Interactive Resume Viewer:** High-resolution in-browser resume previewer with print, download, and instant clipboard copy capabilities.
- 🏛️ **Interactive System Architecture Visualizer:** Clickable multi-node pipeline (*Client UI ➔ API Gateway ➔ AI Engine / RAG ➔ Database*) displaying live latency specs, schemas, and security guardrails.
- ⌨️ **Power-User Keyboard Shortcuts:** Press keys `1` to `9` or `0` on your keyboard for instantaneous screen navigation with HUD toast feedback.
- 🔍 **Global Command Palette (`Cmd + K` / `Ctrl + K`):** Raycast/Linear-styled quick search across projects, case studies, verified profiles, and resume.
- 🌓 **Obsidian Cyber Theme:** Zero-bloat CSS variable design tokens with glassmorphism (`backdrop-filter: blur(20px)`), ambient glow spotlights, and persistent Dark/Light mode.
- ⚡ **Blazing Fast Performance:** Tree-shaken icons, zero heavy runtime dependencies, sub-second Vite production builds (~76 kB gzipped).

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | `React.js 18` | Modular Component Architecture & Single View Rendering |
| **Build & Tooling** | `Vite 5` | Instant HMR & Optimized Production Bundler |
| **Routing** | `React Router 6` | Deep-linkable Routes (`/`, `/about`, `/skills`, `/projects`, etc.) |
| **Styling & Design Tokens** | `CSS3 + Variables` | Cyber Minimalist Obsidian Design System & Grid Patterns |
| **Icons Library** | `Lucide React` | Clean, Lightweight Developer Icons |
| **Version Control & CI/CD** | `Git / GitHub` | Source Control & Deployment Pipelines |
| **Deployment Target** | `Vercel` | Serverless Global Edge CDN Static Hosting |

---

## 📂 Featured Case Studies

### 1. 🤖 [AI Technical Interview Agent](https://github.com/pandeysudhanshu486-gif/AI-Interview-Agent)
> **Category:** Artificial Intelligence & Full Stack  
> **Tech Stack:** `React.js` • `Node.js` • `OpenAI API` • `Web Speech API` • `CSS3`
- Autonomous mock technical interviewer simulating real-world DSA and system design screening rounds.
- Real-time code evaluation with $O(N)$ time & space complexity analysis.
- Sliding context memory buffer and chunked streaming API response handling.

### 2. 🌫️ [VAYUFUSION AI](https://github.com/pandeysudhanshu486-gif/VayuFusion-AI)
> **Category:** AI & Environmental Analytics  
> **Tech Stack:** `React.js` • `Python` • `OpenWeatherMap API` • `Recharts` • `CSS Variables`
- Air quality intelligence and predictive pollutant forecasting platform for Delhi NCR.
- Real-time PM2.5, PM10, CO, NO2 tracking and vulnerability-based health recommendations.

### 3. 🩺 Healthcare AI Assistant
> **Category:** Academic Research & Medical Triage  
> **Tech Stack:** `React.js` • `JavaScript (ES6+)` • `Python` • `RAG Pipeline` • `CSS3`
- Symptom collection questionnaire and risk classification assistant with strict medical guardrails.

---

## 📁 Repository Structure

```text
sudhanshu-portfolio/
├── public/
│   ├── assets/images/profile/   # Real developer profile photo
│   ├── favicon.svg              # Terminal SVG favicon
│   ├── resume.pdf               # Downloadable resume PDF
│   ├── robots.txt               # SEO bot instructions
│   └── sitemap.xml              # XML Search Index
│
├── src/
│   ├── components/
│   │   ├── common/              # Toast, CommandPalette, RecruiterPitchModal, ResumeModal
│   │   ├── layout/              # OSSidebar, OSTopbar, Footer, PageLayout
│   │   ├── hero/                # Hero banner with avatar portal & quote
│   │   ├── about/               # Degree, college, & focus pills
│   │   ├── skills/              # Categorized skills matrix
│   │   ├── projects/            # Project cards, filter tabs & Architecture diagram
│   │   ├── experience/          # Career & student developer timeline
│   │   ├── education/           # ABES Engineering College & coursework
│   │   ├── achievements/        # Problem Solving Journey & contest rankings
│   │   ├── coding/              # LeetCode, CodeChef, GitHub, HackerRank cards
│   │   ├── research/            # Research preprints & "What I Can Build"
│   │   └── contact/             # Contact channels & 1-click email copy
│   │
│   ├── data/                    # ⚡ SINGLE SOURCE OF TRUTH (Only edit here!)
│   │   ├── personal.js          # Bio, contact, degree, links
│   │   ├── projects.js          # Case study data & architecture specs
│   │   ├── skills.js            # Tech skills & proficiency tiers
│   │   ├── profiles.js          # LeetCode, CodeChef, GitHub stats
│   │   ├── education.js         # College, graduation year, coursework
│   │   ├── experience.js        # Timeline milestones
│   │   └── achievements.js      # Hackathons & coding ratings
│   │
│   ├── hooks/                   # useTheme, useScrollSpy
│   ├── styles/                  # variables.css, globals.css, animations.css
│   ├── utils/                   # constants.js, helpers.js
│   ├── App.jsx                  # React Router Route definitions
│   └── main.jsx                 # React DOM mount point
│
├── index.html                   # SEO Meta & Google Fonts
├── package.json
└── vite.config.js               # Safari & local network host configuration
```

---

## ⚡ Future-Proof Maintenance (2nd ➔ 4th Year Guide)

This portfolio is built with a **decoupled data layer**. To add or update content as you progress through college, **you never need to edit React component code**:

| To Update | File Location | Action |
| :--- | :--- | :--- |
| **New Project** | `src/data/projects.js` | Append a new project object to `projectsData` |
| **New Skill** | `src/data/skills.js` | Add skill item under the relevant category |
| **Internship / Job** | `src/data/experience.js` | Add role and achievements object |
| **Contest / DSA Stats** | `src/data/profiles.js` | Update problems solved or contest rating |
| **New Certification** | `src/data/certifications.js`| Add credential ID and verification link |
| **Replace Resume** | `public/resume.pdf` | Replace the PDF file |

---

## 🚀 Local Development Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [npm](https://www.npmjs.com/) (v9.0.0 or higher)

### 1. Clone the repository
```bash
git clone https://github.com/pandeysudhanshu486-gif/protfolio.git
cd protfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start local development server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** (or `http://127.0.0.1:3000`) in your browser.

### 4. Build for production
```bash
npm run build
```

---

## 🌐 1-Click Deployment (Vercel)

1. Fork or push this repository to your GitHub account.
2. Sign in to **[Vercel](https://vercel.com/)** and click **Add New Project**.
3. Import the `protfolio` repository.
4. Keep the Framework Preset as **Vite** and click **Deploy**.
5. Your portfolio is instantly live on a global CDN with SSL!

---

## 👨‍💻 Author & Connect

**Sudhanshu Pandey**  
*Computer Science Engineering Student @ ABES Engineering College*  
*Full Stack Developer • AI Enthusiast • Competitive Programmer*

- 💼 **LinkedIn:** [@sudhanshupandey1305official](https://www.linkedin.com/in/sudhanshupandey1305official/)
- 🐙 **GitHub:** [@pandeysudhanshu486-gif](https://github.com/pandeysudhanshu486-gif)
- 🧠 **LeetCode:** [@Sudhanshu___pandey](https://leetcode.com/u/Sudhanshu___pandey/)
- 🏆 **CodeChef:** [@sudhanshu_1305 (3★)](https://www.codechef.com/users/sudhanshu_1305)
- ✉️ **Email:** [pandeysudhanshu486@gmail.com](mailto:pandeysudhanshu486@gmail.com)

---

<div align="center">
  <sub>Built with ❤️ by Sudhanshu Pandey. © 2026 Sudhanshu. All rights reserved.</sub>
</div>
