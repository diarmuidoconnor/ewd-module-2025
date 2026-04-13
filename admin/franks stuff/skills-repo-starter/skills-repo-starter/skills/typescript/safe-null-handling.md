# Skill: Safe Null Handling

## What it is
Use TypeScript and JavaScript null-safe features to avoid crashes when optional data may be missing.

## When to use it
Use this when:
- API data may be missing properties
- data loads asynchronously
- generated types include optional or nullable fields

## Why it matters
Real API responses are often incomplete.

## Pattern
```tsx
const genreNames = (movie.genres ?? []).map((g) => g.name);
const hasGenre = movie.genre_ids?.includes(28);
const title = movie.title ?? "Untitled";
```

## Common mistakes
- assuming arrays always exist
- accessing nested fields without checks
- removing null handling just to satisfy the compiler

## In this course
This is especially relevant when working with generated API types.
