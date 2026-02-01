# 🔥 Red & Black Theme - Customization Guide

## What's Been Changed

### 🎨 **Color Scheme Transformation**
- **Old**: Blue (#00D9FF) & Purple (#B026FF) neon theme
- **New**: Red (#FF0000) & Crimson (#DC143C) theme with pure black backgrounds

### 💻 **3D Laptop Typing Animation**
The laptop screen now displays an animated typing effect that loops:
```
> Hello World_
> Coding...
> System Ready_
```

### ✨ **Updated Components**

#### Colors Changed In:
1. **Hero Section**: Red gradient buttons, red accent lights on laptop
2. **About Section**: Red skill badges and text highlights
3. **Projects Section**: Red filter buttons, tech badges, and demo buttons
4. **Experience Section**: Red timeline and skill tags
5. **Contact Section**: Red form focus rings and submit button
6. **Footer**: Red scroll-to-top button and hover effects
7. **Header**: Red hover states on navigation

#### Background:
- Main background: Pure black (#000000) with dark red tints (#1a0000)
- Floating orbs: Red and crimson glowing effects

## 🎯 Color Palette Reference

```css
neon-red:     #FF0000  /* Primary accent */
neon-crimson: #DC143C  /* Secondary accent */
neon-darkred: #8B0000  /* Tertiary accent */
neon-blood:   #CC0000  /* Additional accent */
```

## 🛠️ Further Customization

### Change Typing Text on Laptop:
Edit `src/components/Hero.jsx`, line ~14:
```javascript
const fullText = '> Hello World_\n> Coding...\n> System Ready_'
```

### Adjust Red Intensity:
Edit `tailwind.config.js` colors section to tweak red shades.

### Change Typing Speed:
Edit `src/components/Hero.jsx`, line ~31:
```javascript
}, 80)  // Change 80 to adjust speed (lower = faster)
```

### Modify Laptop Screen Glow:
Edit `src/components/Hero.jsx`, lines ~90-94:
```javascript
<pointLight position={[0, 0, 0.5]} intensity={2} color="#FF0000" distance={2} />
```

## 🚀 Running Your Site

```bash
npm run dev
```

Your portfolio now has that sick red and black aesthetic with the typing animation! 🔥
