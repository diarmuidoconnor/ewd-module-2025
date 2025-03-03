import type { Meta, StoryObj } from '@storybook/react';

import ComponentWithProps from '../../components/samples/03_props';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ComponentWithProps> = {
  title: 'Sample/03 - component with props',
  component: ComponentWithProps,
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
  args:{
    languages: ["Javascript", "Python", "Java", "C#"],
    heading: "Ranked"}
};