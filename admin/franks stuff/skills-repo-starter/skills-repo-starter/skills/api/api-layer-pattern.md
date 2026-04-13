# Skill: API Layer Pattern

## What it is
Put HTTP request code in a dedicated API module instead of embedding it inside UI components.

## When to use it
Use this when:
- multiple components fetch backend data
- you want cleaner separation of concerns
- you may later add caching or shared error handling

## Why it matters
It keeps components focused on rendering and interaction.

## Pattern
```ts
export const getMovie = (id: string) => {
  return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`)
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch movie");
      return res.json();
    });
};

export const getMovieReviews = (id: string | number) => {
  return fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${import.meta.env.VITE_TMDB_KEY}`)
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch reviews");
      return res.json();
    })
    .then((json) => json.results);
};
```

## Common mistakes
- duplicating endpoint URLs in several components
- mixing fetch logic with UI code
- skipping response error checks

## In this course
The movie app is progressively refactored toward a dedicated API layer.
