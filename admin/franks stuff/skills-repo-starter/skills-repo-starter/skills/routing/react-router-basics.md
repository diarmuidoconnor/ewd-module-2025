# Skill: React Router Basics

## What it is
React Router maps URL paths to page components.

## When to use it
Use this when:
- your app has multiple pages or views
- navigation should not reload the whole page
- a URL should match a specific page component

## Why it matters
Routing gives the app its SPA structure.

## Pattern
```tsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/movies/:id" element={<MovieDetailsPage />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
</BrowserRouter>
```

## Common mistakes
- forgetting to wrap routes in `BrowserRouter`
- using the wrong path shape
- missing a fallback route

## In this course
Routing is introduced once the app moves beyond static single-page rendering.
