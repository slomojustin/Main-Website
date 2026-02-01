# 🚀 Quick Start Guide

Get your portfolio up and running in 5 minutes!

## 1️⃣ Install Dependencies (1 min)

```bash
npm install
```

## 2️⃣ Start Development Server (30 sec)

```bash
npm run dev
```

Visit `http://localhost:5173` to see your site! 🎉

## 3️⃣ Customize Your Content (2-3 min)

### Essential Changes:

1. **Your Name & Title** → `src/components/Hero.jsx` (line 113-128)
2. **About Bio** → `src/components/About.jsx` (line 82-95)
3. **Projects** → `src/components/Projects.jsx` (line 16-73)
4. **Experience** → `src/components/Experience.jsx` (line 14-67)
5. **Contact Info** → `src/components/Contact.jsx` (line 38-71)

### Quick Find & Replace:

```bash
# Replace these throughout the project:
"Your Name" → Your actual name
"your.email@example.com" → Your email
"yourusername" → Your GitHub/social usernames
"Tech Company Inc." → Your company names
```

## 4️⃣ Deploy to GitHub Pages (1 min)

### First Time Setup:

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial portfolio"

# Create GitHub repo and push
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main

# Update vite.config.js base path to match your repo name
# If repo is "portfolio": base: '/portfolio/'
# If repo is "yourusername.github.io": base: '/'

# Deploy!
npm run deploy
```

### Future Deployments:

```bash
npm run deploy
```

That's it! Your site will be live at:
- Custom repo: `https://yourusername.github.io/repo-name/`
- User site: `https://yourusername.github.io/`

## 🎨 Customization Tips

### Change Colors:
Edit `tailwind.config.js` → `theme.extend.colors.neon`

### Change Font:
1. Update Google Fonts link in `index.html`
2. Update `tailwind.config.js` → `theme.extend.fontFamily`

### Add/Remove Sections:
Edit `src/App.jsx` and add/remove component imports

## 🔥 Pro Tips

1. **Test mobile view**: Use browser dev tools (F12) → Toggle device toolbar
2. **Optimize images**: Use WebP format and compress before uploading
3. **Custom domain**: Add `CNAME` file to `public/` folder
4. **Analytics**: Add Google Analytics to `index.html` for traffic tracking
5. **SEO**: Update meta tags in `index.html` with your info

## 🐛 Common Issues

**Port already in use?**
```bash
# Use different port
npm run dev -- --port 3000
```

**Build fails?**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**3D model not showing?**
- Check console for WebGL errors
- Try different browser (Chrome recommended)
- Update graphics drivers

## 📦 Build for Production

```bash
npm run build
```

Output is in `dist/` folder - ready to deploy anywhere!

## 🆘 Need Help?

- Check the full [README.md](./README.md)
- Open an issue on GitHub
- Review the [React docs](https://react.dev)
- Check [Tailwind docs](https://tailwindcss.com)

---

**Happy coding! 🎉**
