# Skill: Conditional Rendering for Async Data

## What it is
A component renders a fallback while waiting for asynchronous data.

## When to use it
Use this when:
- data is fetched from an API
- the first render happens before the data arrives
- rendering without the data would crash the component

## Why it matters
It prevents runtime errors and gives the user feedback.

## Pattern
```tsx
const MovieDetailsPage = () => {
  const [movie, setMovie] = useState<MovieDetailsProps>();

  useEffect(() => {
    getMovie("123").then(setMovie);
  }, []);

  return movie ? <MovieDetails {...movie} /> : <p>Waiting for movie details</p>;
};
```

## Common mistakes
- assuming fetched data is present on first render
- accessing nested properties before null checks
- showing nothing with no explanation

## In this course
This pattern appears whenever pages fetch TMDB data asynchronously.
