# NexDyne Technology Design Guide

**Version:** 1.0  
**Last Updated:** January 2025  
**Reference Page:** Our Approach (`/our-approach`)

This document serves as the definitive design reference for all pages across the NexDyne Technology website. All design decisions, color values, typography, spacing, and component patterns documented here should be applied consistently throughout the site.

---

## Table of Contents

1. [Brand Identity](#brand-identity)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Section Backgrounds](#section-backgrounds)
5. [Card Components](#card-components)
6. [Hero Sections](#hero-sections)
7. [Lists & Bullet Points](#lists--bullet-points)
8. [Badges & Tags](#badges--tags)
9. [Buttons & CTAs](#buttons--ctas)
10. [Timeline Components](#timeline-components)
11. [Stats & Metrics](#stats--metrics)
12. [Section Headers](#section-headers)
13. [Spacing & Layout](#spacing--layout)
14. [Animations & Transitions](#animations--transitions)
15. [Navigation & Footer](#navigation--footer)
16. [Accessibility](#accessibility)

---

## Brand Identity

NexDyne Technology's visual identity conveys **trust, authority, and professionalism** for government and regulated industry clients. The design language is clean, modern, and sophisticated—avoiding unnecessary visual clutter while maintaining visual interest through strategic use of color and subtle interactions.

### Core Design Principles

| Principle | Description |
|-----------|-------------|
| **Professional Authority** | Design should convey trust and competence for government/enterprise clients |
| **Clean & Minimal** | Avoid visual clutter; use whitespace strategically |
| **No Decorative Icons** | Use simple bullet points instead of icons for list items |
| **Subtle Interactions** | Orange border on hover for cards, not top accent bars |
| **Consistent Backgrounds** | Alternate between white and light gray sections |

---

## Color System

### Primary Colors (Navy Blue)

The primary brand color is a deep navy blue, used for navigation, footer, CTA sections, and headings.

| Color Name | OKLCH Value | Hex Equivalent | Usage |
|------------|-------------|----------------|-------|
| **Navy Primary** | `oklch(0.25 0.05 250)` | `#0A2540` | Navigation, Footer, Primary headings |
| **Navy Secondary** | `oklch(0.22 0.06 250)` | `#12344D` | CTA sections, Hero overlays |
| **Navy Dark** | `oklch(0.18 0.06 250)` | `#0A2540` | Hero image overlays (85% opacity) |
| **Navy Light** | `oklch(0.35 0.10 250)` | — | Timeline dots, duration badges |
| **Heading Text** | `oklch(0.20 0.05 250)` | — | All section headings, card titles |

### Accent Colors (Orange)

Orange is used sparingly as an accent color for emphasis, hover states, and CTAs.

| Color Name | OKLCH Value | Hex Equivalent | Usage |
|------------|-------------|----------------|-------|
| **Orange Primary** | `oklch(0.65 0.18 55)` | — | Bullet points, taglines, hover borders |
| **Orange Light** | `oklch(0.75 0.15 55)` | — | Hero section labels |
| **Orange Hover** | `oklch(0.70 0.18 55)` | — | Card hover border color |
| **Orange Signature** | — | `#FF6B35` | Navigation hover, footer links |
| **Orange Gradient** | `oklch(0.65 0.20 40)` to `oklch(0.55 0.22 40)` | — | CTA buttons |

### Neutral Colors

| Color Name | OKLCH Value | Usage |
|------------|-------------|-------|
| **White** | `oklch(1 0 0)` | Card backgrounds, section backgrounds |
| **Light Gray** | `oklch(0.97 0.01 250)` | Alternating section backgrounds |
| **Slate 200** | `border-slate-200` | Card borders (default state) |
| **Slate 500** | `text-slate-500` | Small labels, sector tags |
| **Slate 600** | `text-slate-600` | Body text, descriptions |
| **Slate 700** | `text-slate-700` | Feature list text |

### CSS Custom Properties

```css
:root {
  --navy-primary: #0A2540;
  --navy-secondary: #12344D;
  --orange: oklch(0.65 0.20 40);
  --orange-dark: oklch(0.55 0.22 40);
}
```

---

## Typography

### Font Family

The entire site uses **Inter** as the primary font family for both headings and body text.

```css
font-family: 'Inter', system-ui, sans-serif;
```

### Heading Styles

| Element | Size (Desktop) | Size (Mobile) | Weight | Color |
|---------|----------------|---------------|--------|-------|
| **H1 (Hero)** | `text-5xl` to `text-6xl` | `text-4xl` | `font-bold` | White (on dark bg) or Navy |
| **H2 (Section)** | `text-4xl` | `text-3xl` | `font-bold` | `oklch(0.20 0.05 250)` |
| **H3 (Card Title)** | `text-2xl` | `text-xl` | `font-bold` | `oklch(0.20 0.05 250)` |
| **Section Label** | `text-base` | `text-sm` | `font-semibold` | `oklch(0.65 0.18 55)` |

### Body Text

| Type | Size | Color | Line Height |
|------|------|-------|-------------|
| **Body Large** | `text-lg` | `text-slate-600` | `leading-relaxed` |
| **Body Regular** | `text-base` | `text-slate-600` | Default |
| **Body Small** | `text-sm` | `text-slate-700` | Default |
| **Caption** | `text-xs` | `text-slate-500` | Default |

### Section Labels

Section labels appear above section headings in uppercase with letter spacing.

```tsx
<p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">
  Section Label
</p>
```

---

## Section Backgrounds

Sections alternate between white and light gray backgrounds to create visual separation without harsh dividers.

### Background Pattern

| Section Type | Background Color | Usage |
|--------------|------------------|-------|
| **White Section** | `bg-white` | Compliance frameworks, Why It Works |
| **Light Gray Section** | `bg-[oklch(0.97_0.01_250)]` | Four Pillars, Process Timeline |
| **Navy CTA Section** | `bg-[oklch(0.22_0.06_250)]` | Final CTA section |
| **Hero with Image** | Image + `bg-[oklch(0.18_0.06_250)]/85` overlay | Page hero sections |

### Important Notes

- **No gradient transitions** between sections—use solid color changes
- **No fade-in gradients** at section tops or bottoms
- Sections should have clear, distinct boundaries

---

## Card Components

Cards are the primary content containers throughout the site. They follow a consistent pattern with hover interactions.

### Card Base Styles

```tsx
<Card className="h-full bg-white border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] hover:shadow-xl transition-all duration-300 overflow-hidden">
  <CardContent className="p-8 lg:p-10">
    {/* Content */}
  </CardContent>
</Card>
```

### Card Design Rules

| Property | Default State | Hover State |
|----------|---------------|-------------|
| **Background** | `bg-white` | `bg-white` (no change) |
| **Border** | `border-2 border-slate-200` | `border-[oklch(0.70_0.18_55)]` |
| **Shadow** | None | `shadow-xl` |
| **Top Accent Bar** | **None** | **None** |
| **Transition** | — | `transition-all duration-300` |

### Card Padding

| Screen Size | Padding |
|-------------|---------|
| **Mobile** | `p-6` |
| **Desktop** | `p-8` to `p-10` |

### What NOT to Include

- ❌ No orange accent bars at the top of cards
- ❌ No icons in card headers
- ❌ No checkmark icons for feature lists
- ❌ No background color changes on hover

---

## Hero Sections

Hero sections use a background image with a dark overlay for text readability.

### Hero Structure

```tsx
<section className="relative py-24 md:py-32 text-white overflow-hidden">
  {/* Background Image */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/hero-image.jpg')" }}
  ></div>
  
  {/* Dark overlay for text readability */}
  <div className="absolute inset-0 bg-[oklch(0.18_0.06_250)]/85"></div>
  
  {/* Content */}
  <div className="container relative z-10">
    {/* Hero content */}
  </div>
</section>
```

### Hero Design Rules

| Element | Style |
|---------|-------|
| **Overlay Color** | `bg-[oklch(0.18_0.06_250)]/85` (85% opacity) |
| **Section Label** | `text-[oklch(0.75_0.15_55)]` with `uppercase tracking-wider` |
| **H1 Color** | White (`text-white`) |
| **Description** | `text-white/90` |
| **Padding** | `py-24 md:py-32` |

### What NOT to Include

- ❌ No gradient fade between hero and next section
- ❌ No decorative icons in badges

---

## Lists & Bullet Points

All feature lists use simple bullet points instead of icons.

### Bullet Point Style

```tsx
<ul className="space-y-3 mb-6">
  {features.map((feature, index) => (
    <li key={index} className="flex items-start gap-3">
      <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.18_55)] flex-shrink-0 mt-2"></span>
      <span className="text-sm text-slate-700">{feature}</span>
    </li>
  ))}
</ul>
```

### Bullet Point Specifications

| Property | Value |
|----------|-------|
| **Bullet Size** | `w-1.5 h-1.5` (small) or `w-2 h-2` (regular) |
| **Bullet Shape** | `rounded-full` |
| **Bullet Color** | `bg-[oklch(0.65_0.18_55)]` (orange) |
| **Alignment** | `mt-2` to align with first line of text |
| **Gap** | `gap-3` between bullet and text |
| **Text Color** | `text-slate-700` |
| **Text Size** | `text-sm` |

### What NOT to Use

- ❌ No checkmark icons (`Check`, `CheckCircle`)
- ❌ No other decorative icons
- ❌ No numbered lists for features

---

## Badges & Tags

Badges are used for sector tags, framework labels, and hero badges.

### Sector Tags (Inside Cards)

```tsx
<span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[oklch(0.95_0.02_250)] text-[oklch(0.30_0.05_250)] text-xs font-medium">
  Federal
</span>
```

### Hero Badges

```tsx
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium">
  Federal Government
</div>
```

### Framework Badges (Grid)

```tsx
<div className="bg-[oklch(0.97_0.01_250)] border-2 border-slate-200 rounded-lg p-4 text-center hover:border-[oklch(0.70_0.18_55)] hover:shadow-md transition-all duration-300">
  <p className="font-bold text-[oklch(0.20_0.05_250)] text-sm">{framework.name}</p>
  <p className="text-xs text-slate-500">{framework.type}</p>
</div>
```

### Badge Design Rules

- ❌ No icons inside badges
- Text-only badges for clean, professional appearance
- Consistent border-radius (`rounded-full` for pills, `rounded-lg` for cards)

---

## Buttons & CTAs

### Primary Button (Orange Gradient)

```tsx
<Button className="bg-orange-gradient hover:opacity-90 transition-opacity">
  Button Text
</Button>
```

### Primary Button on Dark Background

```tsx
<Button className="bg-white text-[oklch(0.22_0.06_250)] hover:bg-white/90 hover:shadow-xl hover:scale-105 active:scale-95 transition-all font-semibold">
  <Link href="/contact">
    Request Assessment
    <ArrowRight className="ml-2 h-5 w-5" />
  </Link>
</Button>
```

### Outline Button on Dark Background

```tsx
<Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[oklch(0.22_0.06_250)]">
  View Case Studies
</Button>
```

### Button Specifications

| Button Type | Background | Text | Hover |
|-------------|------------|------|-------|
| **Primary (Light BG)** | `bg-orange-gradient` | White | `hover:opacity-90` |
| **Primary (Dark BG)** | `bg-white` | Navy | `hover:bg-white/90 hover:shadow-xl hover:scale-105` |
| **Outline (Dark BG)** | `bg-transparent` | White | `hover:bg-white hover:text-navy` |

---

## Timeline Components

The process timeline uses an alternating layout with a center vertical line.

### Timeline Structure

```tsx
{/* Vertical line for desktop */}
<div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[oklch(0.35_0.10_250)]/20 -translate-x-1/2"></div>

{/* Timeline step */}
<div className="bg-white rounded-xl p-6 shadow-lg border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] transition-colors duration-300">
  <span className="text-4xl font-bold text-[oklch(0.35_0.10_250)]/20">{step.number}</span>
  <h3 className="text-xl font-bold text-[oklch(0.20_0.05_250)]">{step.title}</h3>
  <p className="text-slate-600 mb-3">{step.description}</p>
  <span className="inline-block text-sm font-semibold text-[oklch(0.35_0.10_250)] bg-[oklch(0.35_0.10_250)]/10 px-3 py-1 rounded-full">
    {step.duration}
  </span>
</div>

{/* Center dot */}
<div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[oklch(0.35_0.10_250)] border-4 border-white shadow-md"></div>
```

### Timeline Specifications

| Element | Style |
|---------|-------|
| **Vertical Line** | `w-0.5 bg-[oklch(0.35_0.10_250)]/20` |
| **Center Dot** | `w-4 h-4 rounded-full bg-[oklch(0.35_0.10_250)] border-4 border-white` |
| **Step Number** | `text-4xl font-bold text-[oklch(0.35_0.10_250)]/20` |
| **Duration Badge** | `text-[oklch(0.35_0.10_250)] bg-[oklch(0.35_0.10_250)]/10 rounded-full` |

---

## Stats & Metrics

Stats are displayed in a grid of cards with centered content.

### Stats Card Structure

```tsx
<Card className="bg-[oklch(0.97_0.01_250)] border-2 border-slate-200 hover:border-[oklch(0.70_0.18_55)] transition-colors duration-300">
  <CardContent className="p-6 text-center">
    <div className="text-3xl font-bold text-[oklch(0.20_0.05_250)] mb-1">{stat.value}</div>
    <div className="text-sm text-slate-600">{stat.label}</div>
  </CardContent>
</Card>
```

### Stats Design Rules

- ❌ No icons above or beside stats
- Centered text layout
- Value in bold navy, label in slate gray
- Same hover behavior as other cards (orange border)

---

## Section Headers

All section headers follow a consistent pattern with optional label, heading, and description.

### Section Header Structure

```tsx
<motion.div 
  className="text-center max-w-3xl mx-auto mb-16"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <p className="text-[oklch(0.65_0.18_55)] font-semibold mb-4 uppercase tracking-wider">
    Section Label
  </p>
  <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4">
    Section Heading
  </h2>
  <p className="text-lg text-slate-600">
    Section description text goes here.
  </p>
</motion.div>
```

### Section Header Specifications

| Element | Style |
|---------|-------|
| **Container** | `text-center max-w-3xl mx-auto mb-16` |
| **Label** | `text-[oklch(0.65_0.18_55)] font-semibold uppercase tracking-wider mb-4` |
| **Heading** | `text-3xl md:text-4xl font-bold text-[oklch(0.20_0.05_250)] mb-4` |
| **Description** | `text-lg text-slate-600` |

---

## Spacing & Layout

### Section Padding

| Section Type | Padding |
|--------------|---------|
| **Standard Section** | `py-20 md:py-28` |
| **Compact Section** | `py-16 md:py-20` |
| **Hero Section** | `py-24 md:py-32` |

### Container Width

```css
.container {
  max-width: 1280px; /* Standard content width */
  padding-left: 1rem; /* Mobile: 16px */
  padding-right: 1rem;
}

@media (min-width: 640px) {
  .container {
    padding-left: 1.5rem; /* Tablet: 24px */
    padding-right: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .container {
    padding-left: 2rem; /* Desktop: 32px */
    padding-right: 2rem;
  }
}
```

### Content Width Variations

| Use Case | Class |
|----------|-------|
| **Standard Content** | `container` (max-w-1280px) |
| **Narrow Content** | `container max-w-6xl` |
| **Wide Content** | `container max-w-7xl` |

### Grid Layouts

| Layout | Class |
|--------|-------|
| **2 Column Cards** | `grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8` |
| **3 Column Cards** | `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6` |
| **Stats Grid** | `grid grid-cols-2 gap-6` |
| **Framework Grid** | `grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4` |

---

## Animations & Transitions

### Framer Motion Defaults

```tsx
// Fade in from bottom
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}

// Fade in from side
initial={{ opacity: 0, x: -20 }} // or x: 20 for right
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}

// Scale in
initial={{ opacity: 0, scale: 0.9 }}
whileInView={{ opacity: 1, scale: 1 }}
viewport={{ once: true }}
transition={{ duration: 0.3 }}
```

### Staggered Animations

```tsx
// For grid items
transition={{ duration: 0.5, delay: index * 0.1 }}
```

### Hover Transitions

```tsx
// Cards
transition-all duration-300

// Buttons
transition-colors
transition-opacity
transition-all
```

---

## Navigation & Footer

### Navigation Bar

| Property | Value |
|----------|-------|
| **Background** | `bg-primary` (Navy) |
| **Text Color** | `text-primary-foreground` (White) |
| **Height** | `h-16 sm:h-20 lg:h-24` |
| **Position** | `sticky top-0 z-50` |
| **Hover Color** | `hover:text-orange-signature` (#FF6B35) |

### Footer

| Property | Value |
|----------|-------|
| **Background** | `bg-primary` (Navy) |
| **Text Color** | `text-primary-foreground` (White) |
| **Padding** | `py-12 md:py-16` |
| **Link Hover** | `hover:text-orange-signature` |
| **Border Color** | `border-primary-foreground/20` |

---

## Accessibility

### Focus States

All interactive elements maintain visible focus rings for keyboard navigation.

```css
@apply outline-ring/50;
```

### Reduced Motion

The site respects user preferences for reduced motion.

```css
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  
  .stagger-children > * {
    animation: none;
    opacity: 1;
  }
}
```

### Touch Targets

Mobile touch targets meet minimum size requirements.

```css
min-h-[48px] min-w-[48px]
```

---

## Quick Reference Checklist

When creating new pages, verify the following:

### ✅ Do's

- Use alternating white/light gray section backgrounds
- Apply orange border on card hover
- Use simple bullet points for feature lists
- Include section labels above headings
- Use consistent spacing (`py-20 md:py-28`)
- Apply Framer Motion animations
- Use the correct navy and orange color values

### ❌ Don'ts

- Don't add top accent bars to cards
- Don't use icons in feature lists
- Don't use gradient transitions between sections
- Don't add icons to badges or tags
- Don't use checkmark icons
- Don't change card background on hover
- Don't use different fonts

---

## Color Value Quick Reference

```
Navy Primary:     oklch(0.25 0.05 250) / #0A2540
Navy Secondary:   oklch(0.22 0.06 250) / #12344D
Navy Heading:     oklch(0.20 0.05 250)
Navy Light:       oklch(0.35 0.10 250)

Orange Accent:    oklch(0.65 0.18 55)
Orange Light:     oklch(0.75 0.15 55)
Orange Hover:     oklch(0.70 0.18 55)
Orange Signature: #FF6B35

Light Gray BG:    oklch(0.97 0.01 250)
Slate 600:        text-slate-600
Slate 700:        text-slate-700
```

---

*This design guide should be referenced when creating or modifying any page on the NexDyne Technology website to ensure visual consistency and brand alignment.*
