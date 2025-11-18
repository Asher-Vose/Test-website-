# Content Update Guide

This website is designed to be **incredibly easy to update**. All content is centralized in one file.

## How to Update Content

### 1. Open the Content File

**File location**: `src/content/site.ts`

### 2. Edit the Text

```typescript
export const siteConfig = {
  // Change your name
  name: "Asher Vose",

  // Change tagline
  tagline: "Welcome to my personal website",

  // Update your email
  email: "hello@ashervose.com",

  // Hero Section (top of homepage)
  hero: {
    title: "Asher Vose",
    subtitle: "Welcome to my personal website",
  },

  // About Section
  about: {
    heading: "About",
    description: "This section will contain information about Asher Vose.",
  },

  // Contact Section
  contact: {
    heading: "Get in Touch",
    description: "Let's connect",
    buttonText: "Contact Me",
  },

  // Footer
  footer: {
    copyright: `© ${new Date().getFullYear()} Asher Vose. All rights reserved.`,
  },

  // Social Links (add your URLs)
  social: {
    twitter: "https://twitter.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    github: "https://github.com/yourusername",
  },
};
```

### 3. Save the File

That's it! The website will automatically update.

## Common Updates

### Change Hero Text

```typescript
hero: {
  title: "Your Name Here",
  subtitle: "Your tagline or description",
},
```

### Update Email

```typescript
email: "your.email@example.com",
```

### Modify About Section

```typescript
about: {
  heading: "About Me",  // or "My Story", "Background", etc.
  description: "Write your bio here. This can be as long as you want.",
},
```

### Add Social Media Links

```typescript
social: {
  twitter: "https://twitter.com/yourusername",    // Add your Twitter
  linkedin: "https://linkedin.com/in/yourusername", // Add your LinkedIn
  github: "https://github.com/yourusername",        // Add your GitHub
  // Leave empty ("") if you don't want to show a platform
},
```

### Hide Social Links

To hide a social link, just set it to an empty string:

```typescript
social: {
  twitter: "",  // This won't show on the website
  linkedin: "https://linkedin.com/in/yourusername",  // This will show
  github: "",   // This won't show
},
```

## Tips

### ✅ Do's
- ✅ Edit any text between the quotes
- ✅ Add line breaks with `\n` in descriptions
- ✅ Use special characters (é, ñ, ü, etc.)
- ✅ Make your descriptions as long or short as you want

### ❌ Don'ts
- ❌ Delete the commas (,) at the end of lines
- ❌ Delete the curly braces { }
- ❌ Change property names (like `title:`, `email:`)
- ❌ Remove the `export const siteConfig =` line

## Advanced: Adding New Sections

If you want to add more sections (like Projects, Skills, etc.), you can extend the config:

```typescript
export const siteConfig = {
  // ... existing content ...

  // New Projects section
  projects: {
    heading: "My Projects",
    items: [
      {
        title: "Project 1",
        description: "Description of project 1",
      },
      {
        title: "Project 2",
        description: "Description of project 2",
      },
    ],
  },
};
```

Then you'll need to add it to the page. See the developer for help with this.

## Getting Help

If you make a mistake and the site breaks:

1. **Check for missing commas** - Every line except the last one in a section needs a comma
2. **Check for missing quotes** - All text must be in quotes: `"like this"`
3. **Check for matching braces** - Every `{` needs a closing `}`

If you're still stuck, you can:
- Undo your changes (Ctrl+Z or Cmd+Z)
- Ask the developer who set this up
- Check the git history to see what changed

## Auto-Updates

The website automatically:
- ✅ Updates the page title with your name
- ✅ Updates all metadata for SEO
- ✅ Shows/hides sections based on content
- ✅ Formats email links correctly
- ✅ Adds social media links to footer

No code changes needed - just edit the content file!
