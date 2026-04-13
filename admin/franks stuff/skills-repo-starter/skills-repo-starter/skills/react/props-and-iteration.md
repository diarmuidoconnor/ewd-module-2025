# Skill: Props and Iteration

## What it is
Props let a parent pass data into a child component.
Iteration lets a component render repeated UI from an array.

## When to use it
Use this when:
- a component should be reusable
- the same UI shape is repeated for many items
- hard-coded repeated markup should become dynamic

## Why it matters
This is the foundation of reusable React components.

## Pattern
```tsx
type Module = {
  name: string;
  noLectures: number;
  noPracticals: number;
};

type CourseModulesProps = {
  course: string;
  modules: Module[];
};

const CourseModules = ({ course, modules }: CourseModulesProps) => {
  return (
    <div>
      <h1>{course}</h1>
      <table>
        <tbody>
          {modules.map((module, index) => (
            <tr key={index}>
              <td>{module.name}</td>
              <td>{module.noLectures}</td>
              <td>{module.noPracticals}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
```

## Common mistakes
- hard-coding repeated rows
- forgetting a `key` when mapping
- using props without typing them

## In this course
This pattern appears in the early React labs and becomes the basis for movie lists later.
