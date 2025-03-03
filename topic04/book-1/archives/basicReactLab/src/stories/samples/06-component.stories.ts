import type { Meta, StoryObj } from '@storybook/react';
import CounterState from '../../components/samples/06-state';

const meta:Meta<typeof CounterState> = {
    title: 'Sample/06 stateful component',
    component: CounterState,
};

export default meta;

type Story = StoryObj<typeof meta>;

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
