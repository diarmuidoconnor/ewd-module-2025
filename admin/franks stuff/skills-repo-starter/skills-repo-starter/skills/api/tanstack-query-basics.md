# Skill: TanStack Query Basics

## What it is
TanStack Query manages server-state fetching, caching, loading state, and query keys.

## When to use it
Use this when:
- data comes from the server
- the same data may be reused across page changes
- repeated refetching is wasteful

## Why it matters
It improves responsiveness and reduces unnecessary API calls.

## Pattern
```tsx
const { data, isLoading, isError, error } = useQuery({
  queryKey: ["movie", id],
  queryFn: () => getMovie(id),
});
```

## Good practice
- use stable query keys
- include IDs in keys for item-specific data
- show loading and error states clearly

## Common mistakes
- using vague query keys
- caching local UI state instead of server state
- forgetting loading and error paths

## In this course
Caching becomes important in the final movie app iteration.
