# Skill: MUI Page Layout

## What it is
Use Material UI layout components such as `Grid`, `Box`, `Paper`, and `AppBar` to structure pages.

## When to use it
Use this when:
- building page sections
- aligning repeated UI
- supporting responsive layouts

## Why it matters
It keeps layout consistent with the rest of a Material UI app.

## Pattern
```tsx
<Grid container spacing={4} sx={{ padding: 2 }}>
  <Grid item xs={12}>
    <Header title="Discover Movies" />
  </Grid>
  <Grid item container spacing={3}>
    <MovieList movies={movies} action={action} />
  </Grid>
</Grid>
```

## Common mistakes
- putting all styling inline without structure
- ignoring breakpoint sizes
- using layout components inconsistently across pages

## In this course
Material UI is used throughout the movie app and later site header work.
