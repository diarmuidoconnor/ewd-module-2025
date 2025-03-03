import type { Meta, StoryObj } from '@storybook/react';
import StaticComponent from '../../components/samples/01_staticComponent';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof StaticComponent> = {
    title: 'Sample/01 - static component',
    component: StaticComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
};