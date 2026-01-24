# Smooth Transitions - Quick Reference

## Stagger Animation Pattern

Apply to sequential elements for premium entrance effect:

```jsx
{/* Sequence of elements */}
<div className="fade-in-up stagger-1">Element 1</div>  {/* Appears at 0.1s */}
<div className="fade-in-up stagger-2">Element 2</div>  {/* Appears at 0.2s */}
<div className="fade-in-up stagger-3">Element 3</div>  {/* Appears at 0.3s */}
<div className="fade-in-up stagger-4">Element 4</div>  {/* Appears at 0.4s */}
<div className="fade-in-up stagger-5">Element 5</div>  {/* Appears at 0.5s */}
```

## Button & Link Classes

### Buttons
```jsx
<button className="... btn-smooth">Click Me</button>
```
Effect: Hover lift (-2px), shadow enhancement, 0.3s transition

### Links
```jsx
<a href="#" className="... link-smooth">Link</a>
```
Effect: Color transition 0.3s, underline animation

### Cards
```jsx
<div className="... card-smooth">Card Content</div>
```
Effect: Hover lift (-8px), shadow enhancement, 0.35s transition

## Form Elements

### Input Fields
```jsx
<input className="... input-smooth" />
```
Effect: On focus - scale(1.02), background color change, border color, 0.3s

### Text Areas
```jsx
<textarea className="... input-smooth"></textarea>
```
Effect: Same as input fields

## Timing Reference

| Duration | Use Case | Example |
|----------|----------|---------|
| 0.3s | Button hover, link hover, color change | Navbar links, buttons |
| 0.35s | Card animations, fadeIn, scaleIn | Cards, badges |
| 0.4s | Main entrance (fadeInUp) | Hero content |

## Animation Classes

| Class | Duration | Use |
|-------|----------|-----|
| `.fade-in` | 0.35s | Simple opacity entrance |
| `.fade-in-up` | 0.4s | Fade + slide up entrance |
| `.slide-in-left` | 0.4s | Slide from left entrance |
| `.slide-in-right` | 0.4s | Slide from right entrance |
| `.scale-in` | 0.35s | Scale from 0.95 entrance |

## Common Patterns

### Hero Section
```jsx
<div className="fade-in-up stagger-1">Badge</div>
<h1 className="fade-in-up stagger-2">Heading</h1>
<p className="fade-in-up stagger-3">Subheading</p>
<p className="fade-in-up stagger-4">Description</p>
<div className="fade-in-up stagger-5">
  <button className="btn-smooth">Button 1</button>
  <button className="btn-smooth">Button 2</button>
</div>
```

### Form
```jsx
<input className="input-smooth" />  {/* 0.3s smooth focus */}
<textarea className="input-smooth"></textarea>  {/* 0.3s smooth focus */}
<button className="btn-smooth">Submit</button>  {/* Hover lift */}
```

### Navigation
```jsx
<button className="transition-all duration-300 hover:text-white">
  Nav Item
</button>
<button className="btn-smooth">CTA Button</button>
```

## CSS Transition Fallback

For any element needing smooth transitions:
```jsx
<button className="transition-all duration-300 hover:bg-blue-700">
  Smooth Button
</button>
```

## Mobile & Tablet Considerations

- All animations scale proportionally
- Stagger delays remain 0.1s apart
- Durations stay 0.3s-0.4s
- Touch interactions also trigger hover effects on compatible devices
- Animations disable on `prefers-reduced-motion: reduce`

## Accessibility

Add this meta tag for automatic motion preference detection:
```html
<meta name="prefers-reduced-motion" content="reduce" />
```

Or CSS media query:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

