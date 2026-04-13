# Skill: Link State Navigation

## What it is
React Router links can pass extra state during navigation.

## When to use it
Use this when:
- the next page needs extra data
- you do not want that data encoded in the URL
- the data is short-lived navigation context

## Why it matters
It simplifies flows like “open full review” from a review excerpt.

## Pattern
```tsx
<Link
  to={`/reviews/${review.id}`}
  state={{ review, movie }}
>
  Full Review
</Link>
```

```tsx
const MovieReviewPage = () => {
  const { state: { review, movie } } = useLocation();
  return (
    <TemplateMoviePage movie={movie}>
      <MovieReview {...review} />
    </TemplateMoviePage>
  );
};
```

## Common mistakes
- assuming route state always exists after refresh
- using it for data that should really be fetched by ID
- forgetting to type or validate the state shape

## In this course
This pattern fits the review excerpt to full review flow.
