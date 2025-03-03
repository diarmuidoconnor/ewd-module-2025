import type { Meta, StoryObj } from '@storybook/react';
import CourseModulesEmbeddedVars from "../../components/exercises/02_embeddedVariables";



const meta: Meta<typeof CourseModulesEmbeddedVars>  = {
  title: 'Exercises/02 - TSX embedded variable',
  component: CourseModulesEmbeddedVars,
};

export default meta;

type Story = StoryObj<typeof meta>;
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
};
