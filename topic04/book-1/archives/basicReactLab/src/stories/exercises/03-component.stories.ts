import type { Meta, StoryObj } from '@storybook/react';
import CourseModulesWithProps from "../../components/exercises/03_props";

const meta: Meta<typeof CourseModulesWithProps> = {
  title: 'Exercises/03 - component with props',
  component: CourseModulesWithProps,
};

export default meta;

type Story = StoryObj<typeof meta>;
const title = "HDip Computer Science";
const twoModules = [
  {
    name: "Cloud Architecture",
    noLectures: 1,
    noPracticals: 2,
  },
  {
    name: "Enterprise Web Dev",
    noLectures: 2,
    noPracticals: 3,
  },
];
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
  args:{
    modules:twoModules,
    title: title,
  }
};
