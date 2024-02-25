import type { Meta, StoryObj } from '@storybook/react';
import CourseModulesStatic from "../../components/exercises/01_staticComponent";



const meta = {
  title: 'Exercises/01 - static component',
  component: CourseModulesStatic,
} satisfies Meta<typeof CourseModulesStatic>;

export default meta;

type Story = StoryObj<typeof meta>;
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
};
