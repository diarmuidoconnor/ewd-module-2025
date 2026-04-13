# Skill: Route Params

## What it is
A route param is a variable part of the URL, such as a movie ID.

## When to use it
Use this when:
- the URL needs to identify a resource
- a details page depends on an item ID
- a component should load data based on the current path

## Why it matters
It connects navigation to resource-specific data loading.

## Pattern
```tsx
<Route path="/movies/:id" element={<MovieDetailsPage />} />
```

```tsx
const MovieDetailsPage = () => {
  const { id } = useParams();
  return <div>Movie id is {id}</div>;
};
```

## Common mistakes
- forgetting that params can be `undefined`
- mismatching the route param name
- treating the param as a number without conversion where needed

## In this course
Movie details pages use the route param to request movie data.
