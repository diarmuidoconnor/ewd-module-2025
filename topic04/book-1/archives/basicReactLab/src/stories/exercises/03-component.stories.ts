import type { Meta, StoryObj } from '@storybook/react';
import CourseModulesWithProps from "../../components/exercises/03_props";



const meta = {
  title: 'Exercises/03 - component with props',
  component: CourseModulesWithProps,
} satisfies Meta<typeof CourseModulesWithProps>;

export default meta;

type Story = StoryObj<typeof meta>;
const name = "MSc Enterprise Software Systems";
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
    course: name,
  }
};
