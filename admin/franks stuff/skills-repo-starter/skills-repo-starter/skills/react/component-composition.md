# Skill: Component Composition

## What it is
A reusable component provides shared structure, and the page-specific content is inserted through `children`.

## When to use it
Use this when:
- two pages share the same layout
- only one section changes
- you want reuse without duplication

## Why it matters
Composition is the React way to build reusable page structure.

## Pattern
```tsx
type TemplateMoviePageProps = {
  movie: MovieDetailsProps;
  children: React.ReactElement;
};

const TemplateMoviePage = ({ movie, children }: TemplateMoviePageProps) => {
  return (
    <>
      <MovieHeader {...movie} />
      <div className="page-layout">
        <aside>movie images here</aside>
        <main>{children}</main>
      </div>
    </>
  );
};
```

```tsx
const MovieDetailsPage = ({ movie }: { movie: MovieDetailsProps }) => {
  return (
    <TemplateMoviePage movie={movie}>
      <MovieDetails {...movie} />
    </TemplateMoviePage>
  );
};
```

```tsx
const MovieReviewPage = ({ movie, review }: { movie: MovieDetailsProps; review: Review }) => {
  return (
    <TemplateMoviePage movie={movie}>
      <MovieReview {...review} />
    </TemplateMoviePage>
  );
};
```

## Common mistakes
- making the template aware of too many special cases
- duplicating layout outside the template anyway
- putting child-specific business logic into the template

## In this course
This is a key Lab 3 pattern for reusing the movie page layout.
