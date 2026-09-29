# Sudhanshu Pandey | Professional CS Engineering Developer Portfolio

A modern, responsive, developer-first portfolio website built for Computer Science Engineering students (usable from 2nd year through 4th year and beyond for placements, internships, hackathons, open source, and freelancing).

---

## 🚀 Tech Stack

- **Frontend:** React.js (ES6+ JavaScript)
- **Build Tool:** Vite
- **Styling:** Modern CSS3 (CSS Variables, Dark/Light Mode, Custom Scrollbar, Responsive Breakpoints)
- **Icons:** Lucide React (`lucide-react`)
- **Routing:** React Router (`react-router-dom`)
- **Deployment:** Vercel / Netlify / GitHub Pages

---

## 🛠️ Project Structure

```text
sudhanshu-portfolio/
├── public/
│   ├── favicon.svg
│   ├── resume.pdf
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   │
│   ├── components/
│   │   ├── common/        # Button, SectionTitle, Badge, Modal, BackToTop
│   │   ├── layout/        # Navbar, Footer, PageLayout
│   │   ├── hero/          # Hero banner with dynamic subtitles
│   │   ├── about/         # Academic background & "Currently Focused On"
│   │   ├── skills/        # Categorized skills cards with authentic levels
│   │   ├── projects/      # Project cards, filters, and case study modals
│   │   ├── experience/    # Career timeline & project development
│   │   ├── education/     # Degree, college, & relevant coursework
│   │   ├── achievements/  # Hackathons, SIH, coding contests
│   │   ├── coding/        # LeetCode, GitHub, CodeChef, HackerRank cards
│   │   ├── certifications/# Verified credentials & certificate links
│   │   ├── research/      # Technical papers & research articles
│   │   ├── freelancing/   # "What I Can Build" services
│   │   └── contact/       # Professional contact section & form
│   │
│   ├── data/              # ⚡ DATA-DRIVEN CONTENT (UPDATE HERE!)
│   │   ├── personal.js
│   │   ├── projects.js
│   │   ├── skills.js
│   │   ├── experience.js
│   │   ├── education.js
│   │   ├── achievements.js
│   │   ├── certifications.js
│   │   ├── profiles.js
│   │   ├── research.js
│   │   ├── services.js
│   │   └── portfolioData.js # Master re-export
│   │
│   ├── hooks/             # useTheme (Dark/Light), useScrollSpy
│   ├── pages/             # Home, ProjectsPage, ProjectDetails, NotFound
│   ├── styles/            # globals.css, variables.css, animations.css
│   ├── utils/             # constants.js, helpers.js
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
└── vite.config.js
```

---

## ⚡ How to Update Content (2nd Year -> 4th Year Evolution)

To add new projects, skills, internships, or achievements, **you only need to edit files in `src/data/`**:

- **Add New Project:** Open `src/data/projects.js` and append a new project object.
- **Update Skills:** Edit `src/data/skills.js`.
- **Add Internship / Experience:** Update `src/data/experience.js`.
- **Add Certification:** Append to `src/data/certifications.js`.
- **Update Coding Stats:** Edit numbers in `src/data/profiles.js`.
- **Replace Resume:** Drop your new PDF file into `public/resume.pdf`.

---

## 💻 Local Setup & Development Commands

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment Instructions (Vercel)

1. Push your repository to **GitHub**.
2. Go to [Vercel Dashboard](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository (`sudhanshu-portfolio`).
4. Keep framework preset as **Vite**.
5. Click **Deploy**. Vercel will build and host your portfolio automatically!
