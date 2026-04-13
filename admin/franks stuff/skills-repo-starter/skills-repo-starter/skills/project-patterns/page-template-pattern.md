# Skill: Page Template Pattern

## What it is
A page template captures shared layout while keeping part of the page configurable.

## When to use it
Use this when:
- multiple pages share header, spacing, image area, or general layout
- only the central content differs
- you want consistency and reuse

## Why it matters
It reduces duplication and makes later refactoring easier.

## Pattern
```tsx
type PageTemplateProps = {
  movie: MovieDetailsProps;
  children: React.ReactElement;
};

const PageTemplate = ({ movie, children }: PageTemplateProps) => {
  return (
    <>
      <MovieHeader {...movie} />
      <Grid container spacing={5} sx={{ padding: "15px" }}>
        <Grid item xs={3}>
          <MovieImageColumn movieId={movie.id} />
        </Grid>
        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};
```

## Common mistakes
- making the template huge and overly configurable
- using it before real duplication exists
- putting page-specific business logic into the template

## In this course
This pattern is central to sharing layout between movie details and review pages.
