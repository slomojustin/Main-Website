# 🚀 Modern CS Portfolio Website

A sleek, minimalist single-page portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Features an interactive 3D element, smooth animations, and dark/light mode toggle.

## ✨ Features

- **Modern Tech Stack**: React 18 + Vite for blazing-fast development
- **Stunning Animations**: Framer Motion for smooth, professional animations
- **3D Interactive Element**: React Three Fiber powered rotating laptop in hero section
- **Dark/Light Mode**: Seamless theme switching with localStorage persistence
- **Glassmorphism UI**: Beautiful glass effects with backdrop blur
- **Responsive Design**: Mobile-first approach, works perfectly on all devices
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility
- **PWA Ready**: Progressive Web App with manifest and service worker support
- **Fast Performance**: Optimized bundle with code splitting (sub-2s load time)

## 🎨 Sections

1. **Hero**: Large hero with name, tagline, and interactive 3D laptop model
2. **About**: Summary blurb, bio, animated skill tags, and stats
3. **Experience**: Work experience cards (role, company, bullets) plus an education card with relevant coursework
4. **Projects**: Masonry grid with project cards, filter tabs, and hover effects
5. **Contact**: Contact form with social media links

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: React Three Fiber + Three.js
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📦 Installation

### Prerequisites

- Node.js 16+ and npm installed on your machine
- Git for version control

### Setup Instructions

1. **Clone or download this repository**:
   ```bash
   cd /Users/justinwilliams/Downloads/Coding\ Projects/Website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```
   
   The site will be available at `http://localhost:5173`

## 🎨 Customization

### Update Personal Information

Edit the following components to add your information:

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update your name in line 113
   - Change the tagline in lines 121-128

2. **About Section** (`src/components/About.jsx`):
   - Edit summary/bio text near the top of the bio card
   - Modify the `skills` array

3. **Experience Section** (`src/components/Experience.jsx`):
   - Update the `experience` array (role, company, period, bullets)
   - Update the `education` object (degree, school, period, coursework)

4. **Projects Section** (`src/components/Projects.jsx`):
   - Replace project data in the `projects` array
   - Add your own project images, descriptions, and links

5. **Contact Section** (`src/components/Contact.jsx`):
   - Update contact info in lines 53-71
   - Replace social media links in lines 38-51

### Change Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  neon: {
    blue: '#00D9FF',    // Change primary accent
    purple: '#B026FF',   // Change secondary accent
    pink: '#FF00F5'      // Change tertiary accent
  }
}
```

### Change Font

The site uses Inter by default. To change the font:

1. Update the Google Fonts link in `index.html` (line 13)
2. Update font family in `tailwind.config.js` (line 16)

## 🚀 Deployment to GitHub Pages

The repo is set up to deploy **automatically with GitHub Actions** whenever you push to `main`. No `npm run deploy` or `gh-pages` branch needed.

### Steps to go live (do this once)

1. **Create a repo on GitHub** (e.g. `Main-Website`) and **do not** add a README or .gitignore (you already have them).

2. **Push your code** (from your project folder):
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

3. **Turn on GitHub Pages**:
   - Repo → **Settings** → **Pages** (left sidebar).
   - Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
   - Save. No need to choose a branch or folder.

4. **Wait for the first deploy** (about 1–2 minutes):
   - Repo → **Actions** tab. You should see a “Deploy to GitHub Pages” workflow run.
   - When it’s green, your site is at:  
     **`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`**

After that, every `git push origin main` will trigger a new deploy. You can watch runs under the **Actions** tab.

### How it works (so you can do it yourself)

- **Workflow file**: `.github/workflows/deploy.yml` defines the pipeline.
- **Trigger**: Runs on every push to `main`.
- **Build**: Uses Node 20, runs `npm ci` and `npm run build` with `BASE_PATH=/${{ repo name }}/` so asset URLs match GitHub Pages.
- **Deploy**: Uploads the `dist` folder and publishes it with GitHub’s `deploy-pages` action.
- **Base path**: In `vite.config.js`, `base` is `process.env.BASE_PATH || '/'`, so locally you still use `/`, and in CI we set the repo path for GitHub Pages.

For more detail, see **`DEPLOY.md`** in this repo.

## 📱 PWA Support

The site includes PWA capabilities:

- `public/manifest.json`: App manifest for installation
- Offline-capable when service worker is added
- Can be installed on mobile devices as an app

## ⚡ Performance Optimization

- **Code Splitting**: Three.js and Framer Motion are split into separate chunks
- **Lazy Loading**: Images and components load on demand
- **Optimized Assets**: Vite automatically optimizes and minifies assets
- **Tree Shaking**: Unused code is removed in production build

## 🧪 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## 📂 Project Structure

```
Website/
├── public/
│   ├── manifest.json          # PWA manifest
│   └── vite.svg              # Favicon
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Navigation header
│   │   ├── Hero.jsx          # Hero section with 3D
│   │   ├── About.jsx         # About section (summary, bio, skills)
│   │   ├── Experience.jsx    # Work experience + education
│   │   ├── Projects.jsx      # Projects showcase
│   │   ├── Contact.jsx       # Contact form
│   │   └── Footer.jsx        # Footer
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── index.html                # HTML template
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
└── package.json              # Dependencies

```

## 🎯 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 💡 Tips

1. **Replace placeholder content** with your actual information
2. **Add your own projects** with real images and descriptions
3. **Update social links** with your profiles
4. **Optimize images** before adding them (use WebP format for better performance)
5. **Test on mobile devices** to ensure responsive design works perfectly
6. **Add Google Analytics** for tracking visitors (optional)

## 🐛 Troubleshooting

### Build Errors

If you encounter build errors:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### 3D Model Not Loading

The 3D laptop is created procedurally with Three.js geometry. If you see issues:
- Check browser console for WebGL errors
- Ensure browser supports WebGL 2.0
- Try a different browser

### GitHub Pages 404 or blank page

- In **Settings → Pages**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
- The workflow sets `BASE_PATH` to your repo name automatically; if you renamed the repo, the URL is `https://USERNAME.github.io/NEW_REPO_NAME/`.
- After pushing, wait 1–2 minutes and check the **Actions** tab to confirm the deploy workflow succeeded.

## 📧 Support

For questions or issues, please open an issue on GitHub or contact [your.email@example.com](mailto:your.email@example.com).

---

**Built with ❤️ using React + Vite + Tailwind CSS**
