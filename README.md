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
2. **About**: Bio with animated skill tags and statistics
3. **Projects**: Masonry grid with 6 project cards, filter tabs, and hover effects
4. **Experience**: Vertical timeline with work experience and education
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
   - Edit bio text in lines 82-95
   - Modify skills array in lines 11-20

3. **Projects Section** (`src/components/Projects.jsx`):
   - Replace project data in lines 16-73
   - Add your own project images, descriptions, and links

4. **Experience Section** (`src/components/Experience.jsx`):
   - Update experience entries in lines 14-67
   - Add your education and work history

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

### Automatic Deployment

1. **Initialize Git repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create a new repository on GitHub** (without initializing it)

3. **Update `vite.config.js`**:
   - If using a custom domain, keep `base: '/'`
   - If using `username.github.io/repo-name`, change to:
   ```js
   base: '/repo-name/'
   ```

4. **Link to GitHub and deploy**:
   ```bash
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git branch -M main
   git push -u origin main
   npm run deploy
   ```

5. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select `gh-pages` branch as the source
   - Your site will be live at `https://yourusername.github.io/repo-name/`

### Manual Deployment

```bash
# Build the project
npm run build

# The dist folder contains your production-ready site
# Upload the contents to your hosting provider
```

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
│   │   ├── About.jsx         # About section
│   │   ├── Projects.jsx      # Projects showcase
│   │   ├── Experience.jsx    # Timeline
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

### GitHub Pages 404 Error

If you get 404 errors on GitHub Pages:
- Ensure `base` in `vite.config.js` matches your repo name
- Check that `gh-pages` branch exists and is set as source
- Wait a few minutes for deployment to complete

## 📧 Support

For questions or issues, please open an issue on GitHub or contact [your.email@example.com](mailto:your.email@example.com).

---

**Built with ❤️ using React + Vite + Tailwind CSS**
