# Skill: Data Down, Action Up

## What it is
A parent owns state and passes data down.
A child requests changes by calling a callback passed from the parent.

## When to use it
Use this when:
- the parent owns the state
- the child displays that state
- the child needs to trigger an update

## Why it matters
It keeps data flow predictable and avoids duplicated state.

## Pattern
```tsx
type FilterOption = "title" | "genre";

type FilterCardProps = {
  titleFilter: string;
  genreFilter: string;
  onUserInput: (type: FilterOption, value: string) => void;
};

const FilterCard = ({ titleFilter, genreFilter, onUserInput }: FilterCardProps) => {
  return (
    <>
      <input
        value={titleFilter}
        onChange={(e) => onUserInput("title", e.target.value)}
      />
      <select
        value={genreFilter}
        onChange={(e) => onUserInput("genre", e.target.value)}
      >
        <option value="0">All</option>
        <option value="28">Action</option>
      </select>
    </>
  );
};
```

```tsx
const HomePage = () => {
  const [titleFilter, setTitleFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");

  const handleChange = (type: FilterOption, value: string) => {
    if (type === "title") setTitleFilter(value);
    else setGenreFilter(value);
  };

  return (
    <FilterCard
      titleFilter={titleFilter}
      genreFilter={genreFilter}
      onUserInput={handleChange}
    />
  );
};
```

## Common mistakes
- storing the same filter state in both parent and child
- letting the child own state that affects the whole page
- passing data down without passing the action back up

## In this course
This pattern is central to filtering and favourites flows.
