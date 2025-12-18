# Text Visibility Issues Identified

## Issues Found:

1. **"WHO WE ARE" section** - Text appears invisible/missing on light gray background
2. **"Thalen Technology" heading and description** - Text not visible in the "Who We Are" section
3. **"Contact Us" section** - Text not visible
4. **"HOW WE DELIVER" section** - "Compliance-First" heading visible but rest of content may have issues
5. **"CASE STUDIES" section** - Section header visible but case study titles/descriptions may have contrast issues
6. **"OUR APPROACH" section** - Content appears invisible/missing
7. **Buttons "Learn More About Us", "Get in Touch", "Explore Our Solutions", "Schedule a Consultation"** - These buttons appear invisible (only outlines visible)
8. **Tab buttons "Our story", "Awards and recognition", "Join our team"** - Content inside tabs not visible

## Root Cause Analysis:
- Text color may be set to match background color (white text on white background or dark text on dark background)
- Buttons using transparent backgrounds with text color matching the background
- Missing text-foreground classes on sections with custom backgrounds

## Files to Check:
- client/src/pages/Home.tsx - Main homepage with all sections
- client/src/index.css - Color variables and theme settings
