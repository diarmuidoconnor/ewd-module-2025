# Skill: Custom Hooks

## What it is
A custom hook extracts reusable stateful logic from a component.

## When to use it
Use this when:
- multiple components need the same stateful logic
- a page is cluttered with `useState` and `useEffect`
- you want UI and fetching logic separated

## Why it matters
It improves reuse and makes components easier to read.

## Pattern
```tsx
type MovieHookReturnType = [
  MovieDetailsProps | undefined,
  React.Dispatch<React.SetStateAction<MovieDetailsProps | undefined>>
];

const useMovie = (id: string): MovieHookReturnType => {
  const [movie, setMovie] = useState<MovieDetailsProps>();

  useEffect(() => {
    getMovie(id).then((data) => setMovie(data));
  }, [id]);

  return [movie, setMovie];
};
```

```tsx
const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie] = useMovie(id ?? "");

  if (!movie) return <p>Waiting for movie details</p>;

  return (
    <TemplateMoviePage movie={movie}>
      <MovieDetails {...movie} />
    </TemplateMoviePage>
  );
};
```

## Common mistakes
- returning JSX from a custom hook
- hiding too much logic in the hook
- creating a custom hook when the logic is only used once and is still simple

## In this course
Custom hooks are introduced in the movie app sequence.
