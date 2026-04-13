# Skill: Deriving Types from OpenAPI

## What it is
Generate TypeScript types from an OpenAPI spec instead of writing large response shapes by hand.

## When to use it
Use this when:
- the backend provides an OpenAPI description
- the frontend is API-driven
- consistency with the contract matters

## Why it matters
It reduces duplication and keeps frontend types aligned with the API.

## Pattern
```ts
import { paths } from "./generated/tmdb";

export type DiscoverMoviesResponse =
  paths["/3/discover/movie"]["get"]["responses"][200]["content"]["application/json"];

export type DiscoverMovie =
  NonNullable<DiscoverMoviesResponse["results"]>[number];

export type MovieDetails =
  paths["/3/movie/{movie_id}"]["get"]["responses"][200]["content"]["application/json"];
```

## Common mistakes
- copying API response examples into manual interfaces
- using `any` where a generated type already exists
- exposing generated types directly everywhere without a small local type layer

## In this course
The TMDB OpenAPI description is used as the source of truth for the movie app.
