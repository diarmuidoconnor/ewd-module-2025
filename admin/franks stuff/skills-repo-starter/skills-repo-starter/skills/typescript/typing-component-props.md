# Skill: Typing Component Props

## What it is
Component props should be explicitly typed using TypeScript.

## When to use it
Use this for every non-trivial component.

## Why it matters
Typed props improve safety, readability, and editor support.

## Pattern
```tsx
type MovieCardProps = {
  movie: DiscoverMovie;
  action: (movie: DiscoverMovie) => React.ReactNode;
};

const MovieCard = ({ movie, action }: MovieCardProps) => {
  return (
    <div>
      <h2>{movie.title}</h2>
      {action(movie)}
    </div>
  );
};
```

## Common mistakes
- leaving props as implicit `any`
- overusing `React.FC` without understanding the prop type
- mixing unrelated prop shapes into one large type

## In this course
Typed props are used throughout the movie app and the early React labs.
