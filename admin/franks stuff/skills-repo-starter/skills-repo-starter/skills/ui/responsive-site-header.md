# Skill: Responsive Site Header

## What it is
A site header that shows normal navigation on larger screens and a compact menu on smaller screens.

## When to use it
Use this when:
- the header appears on every page
- navigation should adapt to viewport size
- you want a more polished app shell

## Why it matters
It improves usability and demonstrates responsive design.

## Pattern
- `AppBar` and `Toolbar`
- normal buttons on larger screens
- menu icon and dropdown on smaller screens

## Example
```tsx
const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
```

## Common mistakes
- hard-coding one layout for all screen sizes
- mixing navigation logic into many pages
- forgetting that the header is part of the shared app shell

## In this course
A more professional site header is added in the movie app sequence.
