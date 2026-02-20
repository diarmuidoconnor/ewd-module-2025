import type { Meta, StoryObj } from '@storybook/react';
import CourseModulesCollections from "../../components/exercises/04_iteration";



const meta: Meta<typeof CourseModulesCollections> = {
  title: 'Exercises/04 - iteration',
  component: CourseModulesCollections,
};

export default meta;

type Story = StoryObj<typeof meta>;
const title = "HDip Computer Science";
const modules = [
  {
    name: "DevOps",
    noLectures: 1,
    noPracticals: 2,
  },
  {
    name: "Enterprise Web Dev",
    noLectures: 2,
    noPracticals: 3,
  },
  {
    name: "Programming",
    noLectures: 2,
    noPracticals: 2,
  },
  {
    name: "Computer Systems",
    noLectures: 2,
    noPracticals: 3,
  },
];
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
  args:{
    modules:modules,
    title: title,
  }
};
