# Responsive Design - Quick Reference Guide

## Breakpoints Explained

```
0px ──────────── 640px ────────── 768px ────────── 1024px ────────── 1280px
└─ MOBILE ─┘    └─ TABLET ─┘    └─ LAPTOP ─┘    └─ DESKTOP ─┘
              sm:             md:            lg:             xl:
```

## Text Size Examples

Use these for responsive headings:

```jsx
// Large Heading (Best for Hero & Page Titles)
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
  Your Heading
</h1>

// Medium Heading (Best for Section Titles)
<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
  Section Title
</h2>

// Small Heading (Best for Subsections)
<h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
  Sub-heading
</h3>

// Body Text
<p className="text-sm sm:text-base md:text-lg">
  Regular paragraph text
</p>
```

## Padding Examples

Use these for responsive spacing:

```jsx
// Standard Section Padding
<div className="px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
  Content with responsive padding
</div>

// Large Section Padding
<div className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16">
  Large content area
</div>

// Compact Padding
<div className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4">
  Compact content
</div>
```

## Grid Examples

Use these for responsive grid layouts:

```jsx
// 3-Column Grid (1 column mobile → 3 columns desktop)
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
  {items.map(item => <div key={item.id}>{item.name}</div>)}
</div>

// 2-Column Grid (1 column mobile → 2 columns tablet)
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
  {items.map(item => <div key={item.id}>{item.name}</div>)}
</div>

// Mixed Grid (More columns on larger screens)
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
  {items.map(item => <div key={item.id}>{item.name}</div>)}
</div>
```

## Flexbox Examples

Use these for responsive flex layouts:

```jsx
// Stack Vertically on Mobile, Horizontally on Desktop
<div className="flex flex-col md:flex-row gap-4 md:gap-6">
  <div className="flex-1">Content 1</div>
  <div className="flex-1">Content 2</div>
  <div className="flex-1">Content 3</div>
</div>

// Centered Flex with Responsive Gap
<div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6">
  <h2>Title</h2>
  <button>Action</button>
</div>

// Responsive Button Group
<div className="flex flex-col sm:flex-row gap-2 md:gap-3">
  <button>Button 1</button>
  <button>Button 2</button>
  <button>Button 3</button>
</div>
```

## Button Examples

Use these for responsive buttons:

```jsx
// Standard Button
<button className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg">
  Click Me
</button>

// Full Width Button on Mobile
<button className="w-full md:w-auto px-6 py-3">
  Responsive Button
</button>

// Button with Icon
<button className="flex items-center gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-3">
  <svg className="w-4 h-4 sm:w-5 sm:h-5">...</svg>
  <span className="text-sm sm:text-base">Button Text</span>
</button>
```

## Form Examples

Use these for responsive forms:

```jsx
// Responsive Form
<form className="flex flex-col gap-4 md:gap-6">
  <input 
    className="px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base"
    placeholder="Enter text"
  />
  <textarea 
    className="px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base min-h-32"
    placeholder="Enter message"
  />
  <button className="px-4 sm:px-6 py-2 sm:py-3">Submit</button>
</form>

// Side-by-Side Form (Mobile stack → Desktop side-by-side)
<form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
  <input placeholder="First field" />
  <input placeholder="Second field" />
  <button className="md:col-span-2">Submit</button>
</form>
```

## Card Examples

Use these for responsive cards:

```jsx
// Basic Card
<div className="p-4 sm:p-6 md:p-8 bg-gray-100 rounded-lg sm:rounded-xl">
  Card Content
</div>

// Card with Image
<div className="bg-white rounded-lg sm:rounded-xl overflow-hidden">
  <img src="image.jpg" alt="Card image" className="w-full h-48 md:h-64 object-cover" />
  <div className="p-4 sm:p-6">Card content</div>
</div>

// Card Grid
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
  {cards.map(card => (
    <div key={card.id} className="p-4 sm:p-6 bg-gray-100 rounded-lg">
      {card.content}
    </div>
  ))}
</div>
```

## Image Examples

Use these for responsive images:

```jsx
// Basic Responsive Image
<img 
  src="image.jpg" 
  alt="Description" 
  className="w-full h-auto object-cover"
/>

// Image with Fixed Aspect Ratio
<div className="relative w-full pb-[66.67%]">
  <img 
    src="image.jpg" 
    alt="Description"
    className="absolute inset-0 w-full h-full object-cover"
  />
</div>

// Responsive Image with Aspect Ratio
<img 
  src="image.jpg" 
  alt="Description"
  className="w-full h-auto aspect-video object-cover"
/>
```

## Header/Navbar Examples

Use these for responsive headers:

```jsx
// Responsive Navbar
<nav className="flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 py-3 md:py-4">
  <div className="text-lg md:text-xl font-bold">Logo</div>
  <div className="flex gap-4 md:gap-8">
    <a className="text-sm md:text-base">Link 1</a>
    <a className="text-sm md:text-base">Link 2</a>
  </div>
</nav>

// Responsive Page Header
<header className="px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
  <h1 className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-4">Page Title</h1>
  <p className="text-gray-600 text-sm md:text-base">Page subtitle</p>
</header>
```

## Section Examples

Use these for responsive sections:

```jsx
// Standard Section
<section className="px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
  <div className="max-w-7xl mx-auto">
    {/* Section content */}
  </div>
</section>

// Hero Section
<section className="px-4 sm:px-6 md:px-8 py-16 sm:py-24 md:py-32 lg:py-40 bg-blue-600 text-white">
  <div className="max-w-7xl mx-auto text-center">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-8">
      Hero Heading
    </h1>
    <p className="text-lg md:text-xl max-w-3xl mx-auto">
      Hero subheading
    </p>
  </div>
</section>

// Alternating Section
<section className="px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
    <div>Left content</div>
    <div>Right content</div>
  </div>
</section>
```

## Typography Examples

Use these for responsive text:

```jsx
// Responsive Text with Different Sizes
<div>
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Large Title</h1>
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Medium Title</h2>
  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Small Title</h3>
  <p className="text-sm sm:text-base md:text-lg">Body text</p>
</div>

// Responsive Text Alignment
<div className="text-center md:text-left">
  <h2 className="text-2xl md:text-3xl">Left align on desktop, center on mobile</h2>
</div>

// Responsive Text Styling
<p className="text-sm md:text-base lg:text-lg leading-relaxed">
  Text with responsive font size and consistent line height
</p>
```

## Visibility Examples

Use these for conditional rendering:

```jsx
// Hide on Mobile, Show on Desktop
<div className="hidden md:block">
  This is only visible on tablets and larger
</div>

// Show on Mobile, Hide on Desktop
<div className="block md:hidden">
  This is only visible on mobile devices
</div>

// Different Content for Different Sizes
<>
  <div className="block md:hidden">
    Mobile content
  </div>
  <div className="hidden md:block">
    Desktop content
  </div>
</>
```

## Common Patterns

### Full-Width Container with Max-Width
```jsx
<div className="w-full px-3 sm:px-4 md:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    Content constrained to max-width on larger screens
  </div>
</div>
```

### Responsive Navigation
```jsx
<nav className="flex items-center justify-between px-4 py-3 md:py-4">
  <div>Logo</div>
  <ul className="hidden md:flex gap-8">
    {/* Desktop menu */}
  </ul>
  <button className="md:hidden">Menu</button>
</nav>
```

### Responsive Hero with Image
```jsx
<div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-screen/2">
  <img 
    src="hero.jpg" 
    alt="Hero"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
    <h1 className="text-3xl md:text-5xl lg:text-7xl text-white text-center">
      Hero Title
    </h1>
  </div>
</div>
```

### Responsive Call to Action
```jsx
<section className="px-4 py-12 md:py-20 text-center">
  <h2 className="text-2xl md:text-3xl mb-4 md:mb-8">Ready to get started?</h2>
  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
    <button className="px-6 py-3 bg-blue-600 text-white rounded">Primary</button>
    <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded">Secondary</button>
  </div>
</section>
```

## Tips & Tricks

1. **Mobile First**: Always start with mobile styles, then add breakpoints
2. **Use Relative Units**: Use `rem` and `%` instead of fixed pixels
3. **Test Often**: View your site at different screen sizes while developing
4. **Content Drives Breakpoints**: Add breakpoints where content needs them
5. **Keep It Simple**: Don't add unnecessary breakpoints
6. **Touch Targets**: Always ensure buttons/links are at least 44x44px
7. **Images**: Always use `max-width: 100%; height: auto` for responsive images
8. **Typography**: Scale fonts proportionally across breakpoints
9. **White Space**: Maintain proportional spacing at all sizes
10. **Performance**: Test on actual devices, not just browser simulations

---

**Quick Reference Version**: 1.0
**Last Updated**: January 24, 2026
**Project**: AIFA Gen Labs
