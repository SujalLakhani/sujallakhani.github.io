# 💻 Sujal Lakhani | Full-Stack Software Engineer Portfolio

Welcome to my personal portfolio repository! This project serves as a showcase of my technical skills, professional journey, key projects, and creative interface design.

🔗 **Live Demo:** [sujallakhani.github.io](https://sujallakhani.github.io/)

---

## 🎨 Design Philosophy & Features

This portfolio is crafted to deliver a modern, premium, and wowed user experience through clean visual aesthetics:

*   **Glassmorphic Design:** Card components feature frosted-glass styling (`backdrop-filter: blur(14px)`) with elegant shadows and subtle micro-interactions.
*   **Dual Themes (Light/Dark):** Dynamic theme switching with smooth transition curves, preserving user preferences.
*   **Typewriter Interaction:** A custom-engineered hero header typing effect to present key specialities (Full Stack, Frontend, Backend, AI).
*   **Unified Journey Timeline:** Chronological education and career checkpoints. Experience nodes contain interactive detail modals powered by React Portals.
*   **Touch-Responsive Project Showcase:** Auto-rotating project slides using Swiper.js, grouping technologies as tags.
*   **Custom Cursor:** A smooth-following custom cursor tracker that responds with expansion on hoverable elements.
*   **Reveal-on-Scroll Animations:** Efficient DOM element detection utilizing `IntersectionObserver` to trigger elegant slide-up entrance animations.

---

## 🛠️ Tech Stack & Integration

The site is built with a lightweight and modern development setup:

*   **Core:** [React 19](https://react.dev/) & [Vite](https://vite.dev/) for swift build speeds and component-based organization.
*   **Styles:** Vanilla CSS3 utilizing CSS Custom Properties (Variables) for flexible theme state injection.
*   **Typography:** [Google Fonts](https://fonts.google.com/) (`Inter`, `Plus Jakarta Sans`, `Cormorant Garamond`).
*   **Icons:** [Devicon](https://devicons.github.io/devicon/) (for tech stack representation) & [Unicons](https://iconscout.com/unicons) (for general UI icons).
*   **Showcase Slider:** [Swiper.js](https://swiperjs.com/) for fluid mobile-first touch carousels.

---

## 📂 Repository Structure

The project follows a clean, componentized structure:

```text
├── public/                 # Static assets (images, pdfs)
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   └── styles.css  # Core layout, glassmorphic styles, themes, and animations
│   │   └── img/            # Optimized portfolio WebP images
│   ├── components/
│   │   ├── CustomCursor.jsx # Interactive cursor tracker
│   │   ├── Data.js         # Centralized portfolio data (skills, timeline, projects)
│   │   ├── Timeline.jsx    # Experience & Education timeline with Portaled modal
│   │   └── *Items.jsx      # Specialized layout rendering components
│   ├── pages/
│   │   ├── About.jsx       # Biography and downloadable CV action
│   │   ├── Footer.jsx      # Nav links and copyright info
│   │   ├── Header.jsx      # Navigation bar and theme toggle logic
│   │   ├── Home.jsx        # Landing hero section with typewriter effect
│   │   ├── Projects.jsx    # Dynamic project carousel utilizing Swiper
│   │   ├── Services.jsx    # Journey container
│   │   └── Skills.jsx      # Technical skills categorized by domain
│   ├── App.jsx             # Main container & Scroll reveal observer
│   └── index.jsx           # Entrypoint mounting App component
├── package.json            # Configuration and script definitions
└── vite.config.js          # Vite build options
```

---

## 🚀 Getting Started

To run this project locally, make sure you have [Node.js](https://nodejs.org/) installed, then follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/SujalLakhani/sujallakhani.github.io.git
cd sujallakhani.github.io
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start local development server
```bash
npm run start
```
*The dev server will spin up. Visit `http://localhost:5173` in your browser.*

### 4. Build for production
To build optimized static files in the `build/` directory:
```bash
npm run build
```

### 5. Deploy to GitHub Pages
To build and automatically push changes to your live site:
```bash
npm run deploy
```

---

## ✉️ Connect with Me

*   **LinkedIn:** [Sujal Lakhani](https://www.linkedin.com/in/sujal-lakhani-31473b1aa)
*   **GitHub:** [@SujalLakhani](https://github.com/SujalLakhani)
*   **Email:** [sujallakhani98@gmail.com](mailto:sujallakhani98@gmail.com)
