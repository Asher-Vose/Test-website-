# Icon System

This website uses **Lucide React** - the most modern, aesthetically pleasing icon library for 2025.

## Why Lucide React?

- ✅ **Most Popular in 2025** - Used by Vercel, Stripe, Linear, and other world-class companies
- ✅ **Form Follows Function** - Clean, minimal design that prioritizes usability
- ✅ **Tree-Shakeable** - Only imports icons you use (excellent for performance)
- ✅ **TypeScript-First** - Perfect type safety with React 19
- ✅ **Consistent Design** - All icons follow the same visual language
- ✅ **Active Development** - Regular updates and new icons
- ✅ **Accessible** - Built with ARIA attributes in mind
- ✅ **Lightweight** - ~1KB per icon after compression

## Installation

Already installed in this project:

```bash
npm install lucide-react
```

## Usage

### Basic Example

```tsx
import { Heart, Star, Mail } from "lucide-react";

function MyComponent() {
  return (
    <div>
      <Heart size={24} />
      <Star size={24} className="text-yellow-500" />
      <Mail size={24} color="#6366f1" />
    </div>
  );
}
```

### With Tailwind CSS

```tsx
import { AlertCircle } from "lucide-react";

function ErrorMessage() {
  return (
    <div className="flex items-center gap-2">
      <AlertCircle size={20} className="text-red-500" />
      <span>Error occurred</span>
    </div>
  );
}
```

### With Inline Styles (for critical components)

```tsx
import { AlertCircle } from "lucide-react";

function CriticalError() {
  return (
    <AlertCircle
      size={40}
      style={{ color: '#ef4444' }}
      aria-label="Error icon"
      role="img"
    />
  );
}
```

## Icon Sizes

Recommended sizes for different contexts:

| Context | Size | Example |
|---------|------|---------|
| Small inline icons | 16px | `<Icon size={16} />` |
| Default inline icons | 20px | `<Icon size={20} />` |
| Medium icons | 24px | `<Icon size={24} />` |
| Large feature icons | 32px | `<Icon size={32} />` |
| Hero icons | 40-48px | `<Icon size={40} />` |
| Decorative icons | 64px+ | `<Icon size={64} />` |

## Accessibility

Always include accessibility attributes:

```tsx
// For decorative icons (not conveying meaning)
<Icon aria-hidden="true" />

// For meaningful icons
<Icon
  aria-label="Descriptive label"
  role="img"
/>

// For interactive icons
<button aria-label="Close menu">
  <X size={20} />
</button>
```

## Common Icons Reference

Here are the most commonly used icons in this project:

### UI & Navigation
- `Menu` - Hamburger menu
- `X` - Close button
- `ChevronRight`, `ChevronLeft`, `ChevronUp`, `ChevronDown` - Navigation arrows
- `Home` - Home page
- `Search` - Search functionality
- `Settings` - Settings/preferences

### Social Media
- `Mail` - Email
- `Twitter` - Twitter/X
- `Linkedin` - LinkedIn
- `Github` - GitHub
- `Instagram` - Instagram
- `Facebook` - Facebook

### Actions
- `Heart` - Like/favorite
- `Share2` - Share content
- `Download` - Download files
- `Upload` - Upload files
- `Copy` - Copy to clipboard
- `ExternalLink` - External links

### Status & Feedback
- `CheckCircle` - Success
- `AlertCircle` - Error/Alert
- `AlertTriangle` - Warning
- `Info` - Information
- `XCircle` - Error/Failed
- `Loader2` - Loading (can be animated)

### Content
- `File` - Generic file
- `FileText` - Text document
- `Image` - Image file
- `Video` - Video file
- `Music` - Audio file
- `Calendar` - Calendar/dates

## Animation Example

Lucide icons work great with CSS animations:

```tsx
import { Loader2 } from "lucide-react";

function LoadingSpinner() {
  return (
    <Loader2
      size={24}
      className="animate-spin text-indigo-500"
    />
  );
}
```

## Styling Best Practices

### With CSS Variables (Recommended)

```tsx
<AlertCircle
  size={24}
  className="text-[color:var(--color-accent)]"
/>
```

### With Tailwind

```tsx
<Heart
  size={24}
  className="text-red-500 hover:fill-red-500 transition-all"
/>
```

### With Inline Styles

```tsx
<Mail
  size={24}
  style={{ color: 'var(--color-muted)' }}
/>
```

## Performance Tips

1. **Tree-shaking works automatically** - Only import what you use:
   ```tsx
   // ✅ Good - only imports Heart
   import { Heart } from "lucide-react";

   // ❌ Bad - imports entire library
   import * as Icons from "lucide-react";
   ```

2. **Use consistent sizes** - Helps with visual rhythm and caching

3. **Avoid inline styles when possible** - Use Tailwind classes for better performance

4. **Consider icon sprites for many icons** - For pages with 20+ different icons

## Customization

### Stroke Width

```tsx
<Heart size={24} strokeWidth={1.5} /> // Thinner (default: 2)
<Heart size={24} strokeWidth={2.5} /> // Thicker
```

### Fill & Stroke

```tsx
<Heart
  size={24}
  fill="currentColor"
  stroke="currentColor"
/>
```

## Resources

- [Lucide Icons Gallery](https://lucide.dev/icons/) - Browse all 1000+ icons
- [Lucide React Docs](https://lucide.dev/guide/packages/lucide-react) - Official documentation
- [GitHub Repository](https://github.com/lucide-icons/lucide) - Source code

## Migration from Other Libraries

### From Heroicons

```tsx
// Before (Heroicons)
import { HeartIcon } from "@heroicons/react/24/outline";
<HeartIcon className="w-6 h-6" />

// After (Lucide)
import { Heart } from "lucide-react";
<Heart size={24} />
```

### From Font Awesome

```tsx
// Before (Font Awesome)
<i className="fas fa-heart"></i>

// After (Lucide)
import { Heart } from "lucide-react";
<Heart size={16} />
```

### From React Icons

```tsx
// Before (React Icons)
import { AiOutlineHeart } from "react-icons/ai";
<AiOutlineHeart size={24} />

// After (Lucide)
import { Heart } from "lucide-react";
<Heart size={24} />
```

## Examples in This Project

### Error Pages

See `src/app/error.tsx` and `src/app/global-error.tsx` for examples of using `AlertCircle` with proper accessibility attributes.

```tsx
import { AlertCircle } from "lucide-react";

<AlertCircle
  size={40}
  className="text-[color:var(--color-muted)]"
  aria-label="Error icon"
  role="img"
/>
```

## Future Enhancements

Consider adding these icon patterns as your website grows:

1. **Icon Button Component** - Reusable button with icon
2. **Icon with Badge** - Notification counts
3. **Animated Icons** - Micro-interactions
4. **Icon Sprites** - For performance at scale

---

**Remember**: Icons should enhance, not replace, clear text labels. Always prioritize accessibility and usability.
