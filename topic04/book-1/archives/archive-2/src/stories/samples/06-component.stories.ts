import type { Meta, StoryObj } from '@storybook/react';
import CounterState from '../../components/samples/06-state';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Sample/06 stateful component',
    component: CounterState,
} satisfies Meta<typeof CounterState>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
    args: {
       jump: 0 
    }
};

export const Normal: Story = {
  args: {
     jump: 3 
  }
};
