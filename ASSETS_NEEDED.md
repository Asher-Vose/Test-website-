# Assets Needed for Production

To complete the visual branding of your world-class website, add these image files to the `/public` directory:

## Required Images

### 1. Favicon & App Icons

- **favicon.ico** (32x32px) - Classic favicon for browsers
- **icon.svg** - Modern SVG favicon (recommended for sharp display at any size)
- **apple-touch-icon.png** (180x180px) - iOS home screen icon
- **icon-192.png** (192x192px) - Android/PWA icon
- **icon-512.png** (512x512px) - High-res PWA icon

### 2. Social Media Share Image

- **og-image.jpg** (1200x630px) - For Facebook, Twitter, LinkedIn sharing
  - Should feature your branding/photo
  - Include text: "Asher Vose" or your tagline
  - Keep critical content in the center (safe area)
  - Export as high-quality JPEG (80-90% quality)

## How to Create These Images

### Favicon (favicon.ico)

1. Create a 32x32px image with your logo or initials
2. Use a tool like:
   - [Favicon.io](https://favicon.io/) - Generate from text/image
   - [RealFaviconGenerator](https://realfavicongenerator.net/) - Generate all sizes
3. Save as `favicon.ico` in `/public` folder

### SVG Icon (icon.svg)

1. Create a simple vector logo
2. Export as SVG (optimized)
3. Keep it simple - works best as a monochrome icon
4. Save as `icon.svg` in `/public` folder

### App Icons (PNG)

Use the same design as favicon, but in larger sizes:

**Tools:**
- [App Icon Generator](https://www.appicon.co/) - Upload one image, get all sizes
- Figma/Sketch - Export at different resolutions
- Photoshop - Image → Image Size

**Sizes needed:**
- 180x180px → `apple-touch-icon.png`
- 192x192px → `icon-192.png`
- 512x512px → `icon-512.png`

All saved in `/public` folder.

### Open Graph Image (og-image.jpg)

This is what people see when they share your site on social media.

**Specifications:**
- Size: 1200x630px (exact)
- Format: JPEG or PNG
- File size: Under 1MB
- Safe area: Keep important content within center 1200x600px

**Design tips:**
- Add your name/photo
- Add tagline or description
- Use brand colors (indigo accent)
- Keep text large and readable
- Test how it looks in preview

**Tools:**
- [Canva](https://www.canva.com/) - Social media templates
- [Figma](https://www.figma.com/) - Design from scratch
- [OG Image Playground](https://og-playground.vercel.app/) - Generate programmatically

Save as `og-image.jpg` in `/public` folder.

## Quick Setup Guide

### Option 1: Simple Text-Based Icons

If you don't have design skills, use your initials:

1. Go to [Favicon.io Text Generator](https://favicon.io/favicon-generator/)
2. Enter your initials (e.g., "AV")
3. Choose indigo background (#6366f1)
4. Download the generated package
5. Extract files to `/public` folder

### Option 2: Use a Logo

If you have a logo:

1. Go to [RealFaviconGenerator](https://realfavicongenerator.net/)
2. Upload your logo
3. Customize for different platforms
4. Download the generated package
5. Extract files to `/public` folder

### Option 3: Professional Design

Hire a designer on:
- Fiverr ($5-50)
- 99designs ($299+)
- Upwork (varies)

Provide them:
- Brand colors: Indigo (#6366f1)
- Website URL: ashervose.com
- Style: Minimal, premium, professional

## File Locations

After creating assets, your `/public` folder should look like:

```
public/
├── favicon.ico           ← Browser tab icon
├── icon.svg             ← Modern browsers
├── apple-touch-icon.png ← iOS home screen
├── icon-192.png         ← Android/PWA (small)
├── icon-512.png         ← Android/PWA (large)
└── og-image.jpg         ← Social media sharing
```

## Testing Your Assets

### Favicon
1. Open your site in a browser
2. Look at the browser tab - your icon should appear
3. Bookmark the site - icon should appear in bookmarks

### PWA Icons
1. Open site on mobile
2. "Add to Home Screen"
3. Check if icon appears correctly

### Social Sharing Image
1. Share your site URL on Facebook/Twitter/LinkedIn
2. Check the preview image
3. Adjust if needed and re-upload

**Testing tools:**
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

## Optional Assets

### Background Images
- Add to `/public` folder
- Reference in your content

### Profile Photo
- Recommended: 400x400px square
- Format: JPEG or PNG
- Save as `profile.jpg`

### Project Images
- Recommended: 1200x630px
- Format: JPEG or WebP
- Save in `/public/projects/` folder

## Need Help?

### Free Resources
- [Unsplash](https://unsplash.com/) - Free stock photos
- [Pexels](https://www.pexels.com/) - Free stock photos
- [Coolors](https://coolors.co/) - Color palette generator

### Design Tools
- [Canva](https://www.canva.com/) - Easy design tool (free)
- [Figma](https://www.figma.com/) - Professional design (free)
- [Photopea](https://www.photopea.com/) - Photoshop alternative (free)

### Icon Resources
- [Font Awesome](https://fontawesome.com/) - Free icons
- [Heroicons](https://heroicons.com/) - Free SVG icons
- [Iconoir](https://iconoir.com/) - Free icons

---

**Remember**: The website works perfectly without custom assets! These just make it look more polished and professional when sharing on social media.
